import { Component, OnInit } from '@angular/core'
import { Task, TasksService } from '../shared/services/tasks.service'

type TableColumn = {
  key: string
  label: string
  centered: boolean
}

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.scss'],
})
export class TasksComponent implements OnInit {
  search: string = ''
  tasks: Task[] = []

  tableColumns: TableColumn[] = [
    { key: 'user', label: 'Usuário', centered: false },
    { key: 'title', label: 'Título', centered: false },
    { key: 'date', label: 'Data', centered: false },
    { key: 'value', label: 'Valor', centered: false },
    { key: 'paid', label: 'Pago', centered: true },
  ]

  constructor(private tasksService: TasksService) {}

  ngOnInit(): void {
    this.tasksService.getTasks({ limit: 5, page: 0 }).subscribe((tasks) => {
      this.tasks = tasks
    })
  }

  addPayment() {
    console.log('Add payments')
  }

  filterTasks() {
    this.tasksService
      .getTasks({ limit: 5, search: this.search })
      .subscribe((tasks) => {
        this.tasks = tasks
      })
  }
}
