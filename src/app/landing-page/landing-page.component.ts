import { Component, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { NgModel, FormsModule } from '@angular/forms';

@Component({
  selector: 'app-landing-page',
  standalone: true,
  imports: [ RouterLink, FormsModule ],
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.scss'
})
export class LandingPageComponent implements OnInit {

  userEmail!: string;

  constructor(private router: Router){}

  ngOnInit(): void {}

  onContinue(): void{

    this.router.navigateByUrl("facesnaps");
  }

  onSubmitForm(): void{

    console.log(this.userEmail);
  }
}
