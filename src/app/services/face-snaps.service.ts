import { Injectable } from "@angular/core";
import { FaceSnap } from "../models/face-snap.models";

 @Injectable({
    providedIn : 'root'
 })
export class FaceSnapsServices {

    facesnaps: FaceSnap[] = [ 
        {
          id: 1,
          title: 'Archibald',
          description: 'Mon meilleur ami depuis tout petit',
          creationDate:new Date(),
          snaps: 380,
          imageUrl: 'https://picsum.photos/300/150?random=1',
          location: 'Belfort'
        },
  
        {
            id: 2,
          title: 'Snap 2',
          description: 'Ceci est un autre snap',
          creationDate: new Date(),
          snaps: 8,
          imageUrl: 'https://picsum.photos/300/150?random=2',
          location: 'Mulhouse'
        },
  
        {
          id: 3,
          title: 'Snap 3',
          description: 'Ceci est aussi un snap',
          creationDate: new Date(),
          snaps: 8,
          imageUrl: 'https://picsum.photos/300/150?random=3'
        },
      ];

    getAllFaceSnaps(): FaceSnap[]{

        return this.facesnaps;
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
}