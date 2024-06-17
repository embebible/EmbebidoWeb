import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
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

  renderPageWeb: string = '';

  ngOnInit(): void {
    initFlowbite();
    document.documentElement.classList.add('dark');
  }

  onSearchURL(): void {
    const value = (document.querySelector('#search') as HTMLInputElement).value;
    if(value.match(/^https:\/\/.*/)) {
      this.renderPageWeb = value;
    } else {
      alert('Ingresa una URL válida');
    }
  }

}
