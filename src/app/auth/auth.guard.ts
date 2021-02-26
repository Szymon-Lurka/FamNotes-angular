import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree} from "@angular/router";
import {Injectable} from "@angular/core";
import {Observable} from "rxjs";
import {SharedService} from "../shared/shared.service";

@Injectable({providedIn: 'root'})
export class AuthGuard implements CanActivate {

  constructor(private router: Router,
              private sharedService: SharedService) {}

  canActivate(route: ActivatedRouteSnapshot,
              state: RouterStateSnapshot
              ): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
              const user = this.sharedService.fetchUserData();
              if (user) {
                return true;
              } else {
                this.router.navigate(['/auth']);
                return false;
            }
          }
        }
