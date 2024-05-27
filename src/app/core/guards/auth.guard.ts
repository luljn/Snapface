import { Injectable } from "@angular/core";
import { AuthService } from "../services/auth.service";
import { ActivatedRouteSnapshot, Router, RouterStateSnapshot } from "@angular/router";

@Injectable({
    providedIn: 'root'
})
export class AuthGuard {

    constructor(private auth: AuthService,
        private router: Router){}

        canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {

            const token = this.auth.getToken();
            if(token){

              return true;
            } 
            
            else{
                
              this.router.navigateByUrl('/auth/login');
              return false;
            }
          }
}