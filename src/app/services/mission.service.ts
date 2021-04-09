import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Mission } from '../interfaces/mission';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class MissionService {

  constructor(private http: HttpClient) {}

  getMissions(): Observable<Mission[]> {
    return this.http.get<Mission[]>('https://api.spacexdata.com/v3/launches');
  }
}
