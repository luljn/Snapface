import { Injectable } from "@angular/core";
import { FaceSnap } from "../models/face-snap.models";
import { HttpClient, HttpClientModule } from "@angular/common/http";
import { Observable, map, switchMap } from "rxjs";

 @Injectable({
    providedIn : 'root'
 })
export class FaceSnapsServices {

    constructor(private http: HttpClient){}

    getAllFaceSnaps(): Observable<FaceSnap[]>{

      return this.http.get<FaceSnap[]>("http://localhost:3000/facesnaps");
    }

    snapOrUnsnapFaceSnapById(faceSnapId: number, snapType: 'snap' | 'unsnap'): Observable<FaceSnap>{

        return this.getFaceSnapById(faceSnapId).pipe(
          map(faceSnap => ({
            ...faceSnap,
            snaps: faceSnap.snaps + (snapType === 'snap' ? 1 : -1)
          })),
          switchMap(updatedFaceSnap => this.http.put<FaceSnap>(`http://localhost:3000/facesnaps/${faceSnapId}`, updatedFaceSnap))
        );
    }

    getFaceSnapById(faceSnapId: number): Observable<FaceSnap>{

      return this.http.get<FaceSnap>(`http://localhost:3000/facesnaps/${faceSnapId}`);
    }
    
    addFaceSnap(formValue: {title: string, description: string, imageUrl: string, location?: string}): void{

      // const faceSnap: FaceSnap = {
      //   ...formValue,
      //   creationDate: new Date(),
      //   snaps: 0,
      //   id: this.facesnaps[this.facesnaps.length - 1].id + 1
      // };

      // this.facesnaps.push(faceSnap);
    }
}