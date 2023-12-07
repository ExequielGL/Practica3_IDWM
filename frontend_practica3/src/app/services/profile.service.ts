import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import Profile from '../models/user.model';
@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  private apiUrl = 'http://127.0.0.1:8000/api/profile';

  constructor(private http: HttpClient) { }

  getProfile(): Observable<Profile> {
    return this.http.get<Profile>(`${this.apiUrl}`);
  }

  updateUser(user: any) {
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    const body = JSON.stringify(user);

    return this.http.put(`${this.apiUrl}/edit/user`, body, { headers });
  }

  updatePersonalData(data: any) {
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    const body = JSON.stringify(data);

    return this.http.put(`${this.apiUrl}/edit/personal-data`, body, { headers });
  }

  updateInterests(interests: any[]) {
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    const body = JSON.stringify({ interests });

    return this.http.put(`${this.apiUrl}/edit/interests`, body, { headers });
  }

  updateFrameworks(frameworks: any[]) {
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    const body = JSON.stringify({ frameworks });

    return this.http.put(`${this.apiUrl}/edit/frameworks`, body, { headers });
  }

  updateSocialNetworks(social_networks: any[]) {
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    const body = JSON.stringify({ social_networks });
    return this.http.put(`${this.apiUrl}/edit/social-network`, body, { headers });
  }

}
