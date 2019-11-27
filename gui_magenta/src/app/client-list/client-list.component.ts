import { Component, OnInit } from '@angular/core';
import { ClientService } from '../shared/api/client.service';
import { Client } from '../shared/models/client.model';

@Component({
  selector: 'app-client-list',
  templateUrl: './client-list.component.html',
  styleUrls: ['./client-list.component.css']
})
export class ClientListComponent implements OnInit {
  clients: Array<Client>;

  constructor(private clientService: ClientService) {}

  ngOnInit() {
    this.clientService.getAll().subscribe(data => {
      this.clients = data;
    });
  }
}