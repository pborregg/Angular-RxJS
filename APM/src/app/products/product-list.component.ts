import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

import { EMPTY, Observable  } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { Product } from './product';
import { ProductService } from './product.service';


@Component({
  templateUrl: './product-list.component.html',
    styleUrls: ['./product-list.component.css'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductListComponent implements OnInit {

  public pageTitle = 'Product List';
  public errorMessage = '';
  public categories;

  public products$: Observable<Product[]>;
  errorMessageSubject: any;

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    products$ = this.productService.getProducts()
      .pipe(
        catchError(err => {
          this.errorMessageSubject.next(err);
          return EMPTY;
        })
      );
  }

  //    ngOnDestroy(): void {
  //        this.sub.unsubscribe();
  //    }

  onAdd(): void {
    console.log('Not yet implemented');
  }

  onSelected(categoryId: string): void {
    console.log('Not yet implemented');
  }
}
