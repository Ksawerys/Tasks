import {Injectable} from '@angular/core';
import {Observable} from "rxjs";
import {HttpClient, HttpHeaders, HttpResponse} from "@angular/common/http";
import { Tarea } from '../interfaces/Tarea';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TasksService {

  constructor(private http: HttpClient) {
  }

  updateTask(id: string, taskData: any): Observable<HttpResponse<any>> {
    const token = sessionStorage.getItem('token');
    if (!token) {
       throw new Error("Token not found");
    }
    const headers = new HttpHeaders().set('x-token', token);
   
    let httpOptions = {
       headers: headers,
       observe: 'response' as 'response'
    };
    return this.http.put<any>(`http://localhost:9090/api/task/full/${id}`, taskData, httpOptions);
   }
   createTask(taskData: any) {
    const token = sessionStorage.getItem('token');
    if (!token) {
      throw new Error("Token not found");
    }
    const headers = new HttpHeaders().set('x-token', token);
   
    return this.http.post('http://localhost:9090/api/task', taskData, { headers });
   }
   getTasks(): Observable<Tarea[]> {
    const token = sessionStorage.getItem('token');
    if (!token) {
       throw new Error("Token not found");
    }
    const headers = new HttpHeaders().set('x-token', token);
   
    return this.http.get<Tarea[]>('http://localhost:9090/api/task', { headers }).pipe(
       map((response: any) => response.data)
    );
   }
}

