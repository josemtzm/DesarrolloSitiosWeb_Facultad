import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Client } from '../models/client.model';


@Injectable()
export class ClientService {
  public API = 'http://localhost:8080/api';
  // public API = 'http://josemtzm-001-site1.htempurl.com/api';
  public CLIENT_API = `${this.API}/client`;

  constructor(private http: HttpClient) {}

  getAll(): Observable<Array<Client>> {
    return this.http.get<Array<Client>>(this.CLIENT_API);
  }

  get(id: string) {
    return this.http.get(`${this.CLIENT_API}/${id}`);
  }

  save(client: Client): Observable<Client> {
    let result: Observable<Client>;
    if (client.ID) {
      result = this.http.put<Client>(
        `${this.CLIENT_API}/${client.ID}`,
        client
      );
    } else {
      result = this.http.post<Client>(this.CLIENT_API, client);
    }
    return result;
  }

//   remove(id: number) {
//     return this.http.delete(`${this.SUGARLEVELS_API}/${id.toString()}`);
//   }
}