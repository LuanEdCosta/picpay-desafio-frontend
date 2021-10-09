import { Component, OnInit } from '@angular/core'
import {
  Task,
  TasksService,
  TaskDataToSave,
} from '../shared/services/tasks.service'

type TableColumn = {
  key: string
  label: string
  centered: boolean
}

enum SORT_ORDER {
  ASC = 'asc',
  DESC = 'desc',
}

type SortOrder = SORT_ORDER.ASC | SORT_ORDER.DESC

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.scss'],
})
export class TasksComponent implements OnInit {
  tasks: Task[] = []
  taskToDelete?: Task
  paymentToEdit?: Task
  isShowingPaymentModal: boolean = false

  search: string = ''
  sortBy: string = ''
  sortOrder?: SortOrder
  rowsPerPage: number = 5
  currentPage: number = 1
  totalOfTasks: number = 0

  tableColumns: TableColumn[] = [
    { key: 'name', label: 'Usuário', centered: false },
    { key: 'title', label: 'Título', centered: false },
    { key: 'date', label: 'Data', centered: false },
    { key: 'value', label: 'Valor', centered: false },
    { key: 'isPayed', label: 'Pago', centered: true },
  ]

  rowsPerPageOptions = [5, 10, 15, 20, 25]

  constructor(private tasksService: TasksService) {}

  getTasks() {
    this.tasksService
      .getTasks({
        limit: this.rowsPerPage,
        search: this.search,
        page: this.currentPage,
        sortBy: this.sortBy,
        sortOrder: this.sortOrder,
      })
      .subscribe((response) => {
        this.tasks = response.body
        this.totalOfTasks = Number(response.headers.get('X-Total-Count') || 0)
      })
  }

  setSortBy(sortBy: string) {
    if (this.sortBy !== sortBy) {
      this.sortOrder = undefined
      this.sortBy = ''
    }

    if (!this.sortOrder) {
      this.sortOrder = SORT_ORDER.ASC
      this.sortBy = sortBy
    } else if (this.sortOrder === SORT_ORDER.ASC) {
      this.sortOrder = SORT_ORDER.DESC
      this.sortBy = sortBy
    } else {
      this.sortOrder = undefined
      this.sortBy = ''
    }

    this.getTasks()
  }

  ngOnInit(): void {
    this.getTasks()
  }

  setIsAddingPayment() {
    this.isShowingPaymentModal = true
  }

  setPaymentToEdit(payment: Task) {
    this.paymentToEdit = payment
    this.setIsAddingPayment()
  }

  closePaymentModal() {
    this.isShowingPaymentModal = false
    this.paymentToEdit = undefined
  }

  filterTasks(e: Event) {
    e.preventDefault()
    this.currentPage = 1
    this.getTasks()
  }

  changePage(page: number) {
    this.currentPage = page
    this.getTasks()
  }

  changeRowsPerPage() {
    this.currentPage = 1
    this.getTasks()
  }

  getTotalOfPages(): number {
    return Math.ceil(this.totalOfTasks / this.rowsPerPage)
  }

  setTaskToDelete(task: Task) {
    this.taskToDelete = task
  }

  deleteTask() {
    if (this.taskToDelete) {
      const idToDelete = this.taskToDelete.id
      this.tasksService.deleteTask(idToDelete).subscribe(() => {
        this.taskToDelete = undefined
        this.getTasks()
      })
    }
  }

  savePayment(payment: TaskDataToSave) {
    this.tasksService.addTask(payment).subscribe(() => {
      this.getTasks()
      this.closePaymentModal()
    })
  }

  editPayment(payment: TaskDataToSave) {
    const paymentWithNewData = {
      ...this.paymentToEdit,
      ...payment,
    }

    this.tasksService.updateTask(paymentWithNewData).subscribe((task) => {
      const foundIndex = this.tasks.findIndex(({ id }) => id === task.id)

      if (foundIndex !== -1) {
        const tasksClone = [...this.tasks]
        tasksClone.splice(foundIndex, 1, task)
        this.tasks = tasksClone
      }

      this.closePaymentModal()
    })
  }
}
