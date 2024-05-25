import { Injectable } from "@angular/core";
import { FaceSnap } from "../models/face-snap.models";
import { HttpClient, HttpClientModule } from "@angular/common/http";
import { Observable } from "rxjs";

 @Injectable({
    providedIn : 'root'
 })
export class FaceSnapsServices {

    constructor(private http: HttpClient){}

    facesnaps: FaceSnap[] = [];

    getAllFaceSnaps(): Observable<FaceSnap[]>{

      return this.http.get<FaceSnap[]>("http://localhost:3000/facesnaps");
    }

    snapOrUnsnapFaceSnapById(faceSnapId: number, snapType: 'snap' | 'unsnap'): void{

        const faceSnap = this.getFaceSnapById(faceSnapId);
        snapType === 'snap' ? faceSnap.snaps++ : faceSnap.snaps--;
    }

    getFaceSnapById(faceSnapId: number): FaceSnap{

        const faceSnap = this.facesnaps.find(faceSnap => faceSnap.id === faceSnapId);
        if(!faceSnap){

            throw new Error("FaceSnap not found");
        }
        else{

            return faceSnap;
        }
    }

    addFaceSnap(formValue: {title: string, description: string, imageUrl: string, location?: string}): void{

      const faceSnap: FaceSnap = {
        ...formValue,
        creationDate: new Date(),
        snaps: 0,
        id: this.facesnaps[this.facesnaps.length - 1].id + 1
      };

      this.facesnaps.push(faceSnap);
    }
}