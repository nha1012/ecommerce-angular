import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SectionProductComponent } from './section-product.component';



@NgModule({
  declarations: [SectionProductComponent],
  imports: [
    CommonModule
  ],
  exports: [SectionProductComponent]
})
export class SectionProductModule { }
