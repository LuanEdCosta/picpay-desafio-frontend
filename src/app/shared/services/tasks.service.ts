import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs'

type GetTasksOptions = {
  limit: number
  page?: number
  search?: string
}

type Filters = {
  _limit: string
  _page?: string
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

@Injectable({
  providedIn: 'root',
})
export class TasksService {
  private baseUrl = 'http://localhost:3000/tasks'

  constructor(private http: HttpClient) {}

  getTasks({ page, limit, search }: GetTasksOptions): Observable<Task[]> {
    const filters: Filters = { _limit: String(limit) }
    if (page) filters._page = String(page)
    if (search) filters.q = search
    const params = new URLSearchParams(filters)
    return this.http.get<Task[]>(`${this.baseUrl}?${params}`)
  }
}
