import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { RouterOutlet } from '@angular/router';
import { initFlowbite } from 'flowbite';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  showAlertUrl: boolean = false;
  renderPageWeb: SafeResourceUrl = '';

  constructor(private sanitizer: DomSanitizer) { }

  ngOnInit(): void {
    initFlowbite();
    document.documentElement.classList.add('dark');
  }

  onSearchURL(): void {
    let value = (document.querySelector('#search') as HTMLInputElement).value;
    if(value.match(/^https:\/\/.*/)) {
      this.showAlertUrl = false;
      this.renderPageWeb = this.sanitizer.bypassSecurityTrustResourceUrl(value);;
    } else {
      this.showAlertUrl = true;
      this.renderPageWeb = '';
      (document.querySelector('#search') as HTMLInputElement).value = '';
    }
  }

}
