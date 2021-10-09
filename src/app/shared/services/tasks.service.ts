import { Observable } from 'rxjs'
import { Injectable } from '@angular/core'
import { HttpClient, HttpResponse } from '@angular/common/http'

type GetTasksOptions = {
  limit: number
  page?: number
  search?: string
  sortBy?: string
  sortOrder?: 'asc' | 'desc'
}

type Filters = {
  _limit: string
  _page?: string
  _sort?: string
  _order?: string
  q?: string
}

export type Task = {
  id: number
  name: string
  username: string
  title: string
  value: number
  date: string
  image: string
  isPayed: boolean
}

export type TaskDataToSave = Pick<
  Task,
  'name' | 'value' | 'date' | 'title' | 'isPayed'
>

@Injectable({
  providedIn: 'root',
})
export class TasksService {
  private baseUrl = 'http://localhost:3000/tasks'

  constructor(private http: HttpClient) {}

  // Generating unique usernames is backend responsibility.
  // But for now it's in the front-end code.
  // ! Problem: Can generate duplicate usernames
  private getUserName(name: string): string {
    const nameParts = name.split(' ')
    const zeroToNineRandomNumber = Math.floor(Math.random() * 10)

    if (name && nameParts.length === 1) {
      const [firstName] = nameParts
      return `${firstName}${zeroToNineRandomNumber}`
    } else if (nameParts.length >= 2) {
      const [firstName, secondName] = nameParts
      const firstNameFirstLetter = firstName.charAt(0)
      return `${firstNameFirstLetter}${secondName}${zeroToNineRandomNumber}`
    }

    return ''
  }

  getTasks({
    page,
    limit,
    search,
    sortBy,
    sortOrder,
  }: GetTasksOptions): Observable<HttpResponse<Task[]>> {
    const filters: Filters = { _limit: String(limit) }
    if (page) filters._page = String(page)
    if (search) filters.q = search
    if (sortBy) filters._sort = sortBy
    if (sortOrder) filters._order = sortOrder
    const params = new URLSearchParams(filters)
    return this.http.get<Task[]>(`${this.baseUrl}?${params}`, {
      observe: 'response',
    })
  }

  deleteTask(id: number) {
    return this.http.delete(`${this.baseUrl}/${id}`)
  }

  addTask(taskData: TaskDataToSave): Observable<Task> {
    return this.http.post<Task>(this.baseUrl, {
      ...taskData,
      username: this.getUserName(taskData.name),
    })
  }

  updateTask(task: Task): Observable<Task> {
    return this.http.patch<Task>(`${this.baseUrl}/${task.id}`, task)
  }
}
