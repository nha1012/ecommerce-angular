import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { RouterModule } from '@angular/router';
import { SectionProductModule } from 'src/app/shared/components/section-product/section-product.module';



@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    SectionProductModule,
    RouterModule.forChild([{ path: '', component: HomeComponent }])
  ]
})
export class HomeModule { }
