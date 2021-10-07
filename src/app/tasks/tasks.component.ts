import { Component, OnInit } from '@angular/core'
import { Task, TasksService } from '../shared/services/tasks.service'

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
  search: string = ''
  tasks: Task[] = []

  sortBy: string = ''
  sortOrder?: SortOrder

  tableColumns: TableColumn[] = [
    { key: 'name', label: 'Usuário', centered: false },
    { key: 'title', label: 'Título', centered: false },
    { key: 'date', label: 'Data', centered: false },
    { key: 'value', label: 'Valor', centered: false },
    { key: 'isPayed', label: 'Pago', centered: true },
  ]

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

    this.tasksService
      .getTasks({ limit: 5, sortBy: this.sortBy, sortOrder: this.sortOrder })
      .subscribe((tasks) => {
        this.tasks = tasks
      })
  }

  constructor(private tasksService: TasksService) {}

  ngOnInit(): void {
    this.tasksService.getTasks({ limit: 5, page: 0 }).subscribe((tasks) => {
      this.tasks = tasks
    })
  }

  addPayment() {
    console.log('Add payments')
  }

  filterTasks(e: Event) {
    e.preventDefault()
    this.tasksService
      .getTasks({ limit: 5, search: this.search })
      .subscribe((tasks) => {
        this.tasks = tasks
      })
  }
}
