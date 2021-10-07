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

@Injectable({
  providedIn: 'root',
})
export class TasksService {
  private baseUrl = 'http://localhost:3000/tasks'

  constructor(private http: HttpClient) {}

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
}
