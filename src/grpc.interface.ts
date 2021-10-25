import { Observable } from 'rxjs';

export interface IGrpcService {
  getStudent(studentId: { id: string }): Observable<any>;
  createStudent(studentData: studentBody): Observable<any>;
  removeStudent(studentId: { id: string }): Observable<any>;
  updateStudent(body: updateStudent): Observable<any>;
}

export interface studentBody {
  id: string;
  name: string;
  age: number;
}

export interface updateStudent {
  id: string;
  name: string;
  age: number;
}
