import { HttpClient, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FilesService {

  baseUrl = "https://localhost:3000"

  constructor(private http:HttpClient) { }

  // returns an obserables
  upload(file:any):Observable<any>{

    // create form data
    const formData = new FormData();

    // Store form name as file with file data
    formData.append("file", file, file.name);
    const req = new HttpRequest('POST', `${this.baseUrl}/files`, formData, {
      reportProgress: true,
      responseType: 'json'
    });
    return this.http.request(req);
  }
}
