import { Component } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    MatToolbarModule,
    MatButtonModule,
    MatCardModule,
    CommonModule,
    MatInputModule,
    MatIconModule,
    MatFormFieldModule,
    FormsModule
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  destinationsArray: any[] = [
    {
      title: 'Maldives Beach',
      location: 'Indonesia',
      image: '../../assets/maldives-beach.jpeg',
    },
    {
      title: 'Juhu Beach',
      location: 'Mumbai',
      image: '../../assets/juhu-beach.jpeg',
    },
    {
      title: 'Nagav Beach',
      location: 'Alibag',
      image: '../../assets/nagav-beach.jpeg',
    },
    {
      title: 'Anjuna Beach',
      location: 'Goa',
      image: '../../assets/maldives-beach.jpeg',
    },
    {
      title: 'Baga Beach',
      location: 'Goa',
      image: '../../assets/juhu-beach.jpeg',
    },
    {
      title: 'Freedom Beach',
      location: 'Thailand',
      image: '../../assets/nagav-beach.jpeg',
    },
  ];
}
