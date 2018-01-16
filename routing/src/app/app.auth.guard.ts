import { CanActivate, CanDeactivate, CanActivateChild, RouterStateSnapshot, ActivatedRouteSnapshot } from '@angular/router';
import { Observable } from 'rxjs';



// Cette interface est implémentée via la component
export interface CanComponentDeactivate{
	canDeactivate(): Observable<boolean> | Promise<boolean> | boolean
}

export class AuthGuard implements CanActivate, CanActivateChild, CanDeactivate<CanComponentDeactivate>  {
	
	canActivate(router: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean{
		return true;
	}

	canActivateChild(router: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean{
		return true;
	}

	canDeactivate(component: CanComponentDeactivate, router: ActivatedRouteSnapshot, nextState: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean{
		return component.canDeactivate();
	}


}