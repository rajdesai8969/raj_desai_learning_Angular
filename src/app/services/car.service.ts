import { Injectable } from '@angular/core';
//import our mock data
import {carList} from "../../Shared/data/mockUser";
import {catchError, Observable,  throwError} from 'rxjs';
import {Car} from "../../Shared/models/Car";
import {HttpClient, HttpErrorResponse} from "@angular/common/http";

//Notice the new Decorator
@Injectable({
  providedIn: 'root'
})
export class StudentService {
  private apiUrl = 'api/students'; //url to web api
  private students: Car[] = carList;//Local copy of student data for CRUD Operations
  constructor(private http: HttpClient) { }//DI http
  //CRUD operations using HTTP Requests
  //All operations we need are:
  // Get, post, put, delete
  getStudents(): Observable<Car[]> {
    return this.http.get<Car[]>(this.apiUrl).pipe(catchError(this.handleError));
  }

  getStudentById(id: number): Observable<Car> {
    return this.http.get<Car>(`${this.apiUrl}/${id}`).pipe(catchError(this.handleError)); //return a single student
  }

  addStudent(student: Car): Observable<Car> {
    student.id = this.generateNewId();
    return this.http.post<Car>(this.apiUrl, student).pipe(catchError(this.handleError));
  }

  updateStudent(student: Car): Observable<Car | undefined> {
    const url = `${this.apiUrl}/${student.id}`;
    return this.http.put<Car>(url, student).pipe(catchError(this.handleError));
  }

  deleteStudent(id: number): Observable<{}> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.delete(url).pipe(catchError(this.handleError));
  }
  // New method to generate a new unique ID
  generateNewId(): number {
    return this.students.length > 0 ? Math.max(...this.students.map(student => student.id)) + 1 : 1;
  }

  private handleError(error: HttpErrorResponse) {
    console.error('API error:', error);
    return throwError(() => new Error('Server error, please try again.'));
  }
}

export class CarService {
}
