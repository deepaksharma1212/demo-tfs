import { Component } from '@angular/core';
import { SpinnerUtil } from './core/util/spinner-util';
import { ToastrUtil } from './core/util/toastr-util';
import { Title } from '@angular/platform-browser';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [Title]
})
export class AppComponent {

  constructor(private spinner: SpinnerUtil, private toastr: ToastrUtil, private title: Title) {
    let currentTitle = this.title.getTitle();
    this.title.setTitle('Demo');
  }
}

export const API_URL = 'http://cdemo.iwoodapple.com/';
export const API_TOKEN = '93cd34ce90a947cf8ebf679cdaa5e2b7';
export const APP_CODE = '4';
export const USER_TOKEN = '';


