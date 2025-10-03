import { Component } from '@angular/core';
import { NgIf } from "@angular/common";
import { SpinnerComponent } from '../../common/spinner/spinner.component';
import { HeaderComponent } from '../../common/header/header.component';
import { FooterComponent } from '../../common/footer/footer.component';
import { ShopComponent } from '../shop/shop.component';
import { BacktotopbtnComponent } from '../../common/backtotopbtn/backtotopbtn.component';

@Component({
  selector: 'app-home',
  imports: [SpinnerComponent, HeaderComponent, FooterComponent, ShopComponent, BacktotopbtnComponent, NgIf],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  loading: boolean = true

  ngOnInit() {
    setTimeout(() => {
      this.loading = false
    }, 1000);
  }

}
