import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import { Observable, map } from 'rxjs';
import { FaceSnap } from '../models/face-snap.models';
import { NgIf, CommonModule } from '@angular/common';
import { FaceSnapsServices } from '../services/face-snaps.service';
import { Router } from '@angular/router';
import { tap } from 'rxjs';

@Component({
  selector: 'app-new-face-snap',
  standalone: true,
  imports: [ ReactiveFormsModule, CommonModule ],
  templateUrl: './new-face-snap.component.html',
  styleUrl: './new-face-snap.component.scss'
})
export class NewFaceSnapComponent implements OnInit {

  snapForm!: FormGroup;
  faceSnapPreview$!: Observable<FaceSnap>;
  urlRegex!: RegExp;

  constructor(private formBuilder: FormBuilder,
              private faceSnapService: FaceSnapsServices,
              private router: Router){}

  ngOnInit(): void {
    
    this.urlRegex = /(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_+.~#?&/=]*)/; 
    this.snapForm = this.formBuilder.group({
      title: [null, Validators.required],
      description: [null, Validators.required],
      imageUrl: [null, [Validators.required, Validators.pattern(this.urlRegex)]],
      location: [null]
    },
    {
      updateOn : 'blur'
    }
    );

    this.faceSnapPreview$ = this.snapForm.valueChanges.pipe(
      map(formValue => ({

        ...formValue,
        creationDate: new Date(),
        id: 0,
        snaps: 0,
      }))
    );
  }

  onSubmitForm(): void{

    this.faceSnapService.addFaceSnap(this.snapForm.value).pipe(
      tap(() => this.router.navigateByUrl("/facesnaps"))
    ).subscribe();
  }
}
