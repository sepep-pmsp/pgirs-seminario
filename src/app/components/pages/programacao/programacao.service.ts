import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProgramacaoService {
  private programacaoUrl = 'assets/json/programacao.json';

  constructor(private http: HttpClient) {}

  getProgramacao(): Observable<any[]> {
    return this.http.get<any[]>(this.programacaoUrl);
  }
}
