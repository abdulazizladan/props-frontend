import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ListingsService } from '../../services/listings.service';

@Component({
  selector: 'app-properties-list',
  templateUrl: './properties-list.component.html',
  styleUrls: ['./properties-list.component.scss']
})
export class PropertiesListComponent implements OnInit {

  properties$: Observable<any[]> | undefined;

  constructor( private readonly listingService: ListingsService) { }

  ngOnInit(): void {
    this.getAll()
  }

  getAll() {
    this.properties$ = this.listingService.getAll().pipe(

    )
  }

}
