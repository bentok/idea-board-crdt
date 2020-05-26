import { Component, OnInit } from '@angular/core';

import { PeerService } from '../peer/peer.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-peer-id',
  templateUrl: './peer-id.component.html',
  styleUrls: ['./peer-id.component.scss']
})
export class PeerIdComponent implements OnInit {
  peer$: Observable<any>;
  
  constructor(
    private service: PeerService,
  ) { }

  ngOnInit(): void {
    this.peer$ = this.service.peer$;
  }

}
