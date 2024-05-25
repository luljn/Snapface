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
    
    addFaceSnap(formValue: {title: string, description: string, imageUrl: string, location?: string}): Observable<FaceSnap>{

      return this.getAllFaceSnaps().pipe(
        map(facesnaps => [...facesnaps].sort((a,b) => a.id - b.id)),
        map(sortedFacesnaps => sortedFacesnaps[sortedFacesnaps.length -1]),
        map(previousFacesnap => ({
          ...formValue,
          snaps: 0,
          creationDate: new Date(),
          id: previousFacesnap.id + 1
        })),
        switchMap(newFacesnap => this.http.post<FaceSnap>(`http://localhost:3000/facesnaps/`, newFacesnap))
      );
    }
}