import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  Output,
} from '@angular/core'

const MAX_VISIBLE_PAGES = 5
const MIN_NUMBER_OF_PAGES = 1

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss'],
})
export class PaginationComponent implements OnChanges {
  pages: number[] = [1]

  @Input() totalOfPages: number = MIN_NUMBER_OF_PAGES
  @Input() selectedPage: number = 1

  @Output() changePage: EventEmitter<number> = new EventEmitter()

  constructor() {}

  ngOnChanges(): void {
    this.totalOfPages = Math.max(this.totalOfPages, MIN_NUMBER_OF_PAGES)
    const numberOfPages = Math.min(this.totalOfPages, MAX_VISIBLE_PAGES)
    this.pages = new Array(numberOfPages).fill(0).map((_, index) => index + 1)
  }

  getRange(): number {
    return Math.ceil(Math.abs(this.selectedPage / MAX_VISIBLE_PAGES) - 1)
  }

  getPage(page: number): number {
    return page + this.getRange() * MAX_VISIBLE_PAGES
  }

  selectPage(page: number): void {
    if (this.selectedPage !== page) this.changePage.emit(page)
  }

  nextPage(): void {
    const newPage = Math.min(this.selectedPage + 1, this.totalOfPages)
    if (this.selectedPage !== newPage) this.changePage.emit(newPage)
  }

  previousPage(): void {
    const newPage = Math.max(this.selectedPage - 1, 1)
    if (this.selectedPage !== newPage) this.changePage.emit(newPage)
  }
}
