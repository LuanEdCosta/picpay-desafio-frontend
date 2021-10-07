import { Component, OnInit } from '@angular/core'

type TableColumn = {
  key: string
  label: string
  canOrder: boolean
}

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.scss'],
})
export class TasksComponent implements OnInit {
  search: string = ''

  tableColumns: TableColumn[] = [
    { key: 'user', label: 'Usuário', canOrder: true },
    { key: 'title', label: 'Título', canOrder: true },
    { key: 'date', label: 'Data', canOrder: true },
    { key: 'value', label: 'Valor', canOrder: true },
    { key: 'paid', label: 'Pago', canOrder: true },
  ]

  constructor() {}

  ngOnInit(): void {
    console.log('Get payments')
  }

  addPayment() {
    console.log('Add payments')
  }
}
