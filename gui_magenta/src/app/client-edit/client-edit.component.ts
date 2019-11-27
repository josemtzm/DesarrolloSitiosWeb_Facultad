import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { ActivatedRoute, Router } from '@angular/router';
import { NgForm } from '@angular/forms';

import { Client } from '../shared/models/client.model';
import { ClientService } from '../shared/api/client.service';

@Component({
  selector: 'app-client-edit',
  templateUrl: './client-edit.component.html',
  styleUrls: ['./client-edit.component.css']
})
export class ClientEditComponent implements OnInit, OnDestroy {
  client: Client = new Client();

  sub: Subscription;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private clientService: ClientService
  ) {}

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      const id = params['id'];
      if (id) {
        this.clientService.get(id).subscribe((client: any) => {
          if (client) {
            this.client = client;
            // this.sugarLevel.measuredAt = new Date(
            //   this.sugarLevel.measuredAt
            // ).toISOString();
          } else {
            console.log(
              `Sugar Level with id '${id}' not found, returning to list`
            );
            this.gotoList();
          }
        });
      }
    });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  gotoList() {
    this.router.navigate(['/client-list']);
  }

  save(form: any) {
    this.clientService.save(form).subscribe(
      result => {
        this.gotoList();
      },
      error => console.error(error)
    );
  }

  // remove(id: number) {
  //   this.clientService.remove(id).subscribe(
  //     result => {
  //       this.gotoList();
  //     },
  //     error => console.error(error)
  //   );
  // }
}