import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Entry } from './entry';



@Injectable({
  providedIn: 'root'
})
export class EntryService {
  private url = 'http://127.0.0.10/api/entries';

  constructor(private httpClient: HttpClient) {

  }

  public getAll(): Observable<Entry[]> {
    return this.httpClient.get<Entry[]>(this.url);
  }

  public get(id: number): Observable<Entry> {
    return this.httpClient.get<Entry>(`${this.url}/${id}`);
  }

  public update(id: number, modifiedEntry: Entry): Observable<Entry> {
    return this.httpClient.put<Entry>(`${this.url}/${id}`, modifiedEntry);
  }

  public add(newEntry: Entry): Observable<Entry> {
    return this.httpClient.post<Entry>(this.url, newEntry);
  }

  public delete(id: number): Observable<void> {
    return this.httpClient.delete<void>(`${this.url}/${id}`);
  }
}
