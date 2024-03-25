import { HTTP_INTERCEPTORS, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable, Provider } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment.development";

const { usersUrl } = environment;

@Injectable()
class AppInterceptor implements HttpInterceptor {
    API = '/users'
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        if(req.url.startsWith(this.API)){
            req = req.clone({
                url: req.url.replace(this.API, usersUrl),
                withCredentials: true,
            });
        }
        console.log(req)
        console.log(req.url)
        return next.handle(req);
    }
}

export const appInterceptorProvider: Provider = {
    useClass: AppInterceptor,
    multi: true,
    provide: HTTP_INTERCEPTORS,
}