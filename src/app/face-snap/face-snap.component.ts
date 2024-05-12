import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-face-snap',
  standalone: true,
  imports: [],
  templateUrl: './face-snap.component.html',
  styleUrl: './face-snap.component.scss'
})
export class FaceSnapComponent implements OnInit {

  title!: string;
  description!: string;
  creationDate!: Date;
  snaps!: number;
  imageUrl!: string;

  ngOnInit(): void {
      
    this.title = 'Archibald';
    this.description = 'Mon meilleur ami depuis tout petit';
    this.creationDate = new Date();
    this.snaps = 8;
    this.imageUrl = 'https://picsum.photos/300/150?random=1';
  }
}
