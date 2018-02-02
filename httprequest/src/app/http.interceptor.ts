import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';


export class ReqInterceptor implements HttpInterceptor {

		intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>>{
			console.log(req);
			const reqClone = req.clone({headers: req.headers.append('auth', 'jfjdfgerfsed') });
			return next.handle(reqClone);
		}
}