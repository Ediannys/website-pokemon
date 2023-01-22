import { Injectable } from "@angular/core";
import { map } from "rxjs/operators";
import {
  HttpRequest,
  HttpHandler,
  HttpHeaders,
  HttpEvent,
  HttpInterceptor,
  HttpResponse,
  HttpErrorResponse
} from "@angular/common/http";
import { Router } from '@angular/router';
import { Observable } from "rxjs";


import { MapperService } from "../services/mapper.service";
@Injectable()
export class RequestInterceptor implements HttpInterceptor {
  constructor(private _mapperService: MapperService) { }
  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    let token = sessionStorage.getItem('accessToken');
    var updatedRequest;

    if (!(request.body instanceof FormData))
      updatedRequest = request.clone({
        headers: new HttpHeaders({
          'Content-Type': request.body instanceof FormData ? '' : 'application/json'
        }),
        body: this._mapperService.mapToSnakeCase(request.body)
      });
    return next.handle(updatedRequest).pipe(
      map(
        event => {
          if (event instanceof HttpResponse) {
            event = event.clone({
              body: this._mapperService.mapToCamelCase(event.body)
            });
          }
          return event;
        },
        error => {
          if (error instanceof HttpErrorResponse) {
            if (error.status === 401) {
              console.log(error)
            }
          }
        }
      )
    );
  }
}