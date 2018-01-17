import { CanActivate, CanDeactivate, CanActivateChild, RouterStateSnapshot, ActivatedRouteSnapshot, Resolve } from '@angular/router';
import { Observable } from 'rxjs';



// Cette interface est implémentée via la component
export interface CanComponentDeactivate{
	canDeactivate(): Observable<boolean> | Promise<boolean> | boolean
}

export interface user{
	name: string;
	id: number;
}

export class AuthGuard implements CanActivate, CanActivateChild, CanDeactivate<CanComponentDeactivate>, Resolve<user>  {
	
	canActivate(router: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean{
		return true;
	}

	canActivateChild(router: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean{
		return true;
	}

	canDeactivate(component: CanComponentDeactivate, router: ActivatedRouteSnapshot, nextState: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean{
		return component.canDeactivate();
	}


	resolve(router: ActivatedRouteSnapshot, state: RouterStateSnapshot):Observable<user> | Promise<user> | user{
		return {name: 'tintin', id:47}
	}


}