import { Injectable } from '@angular/core';
import { Subject } from "rxjs";
import Peer from 'simple-peer';


@Injectable({
  providedIn: 'root',
})
export class PeerService {
  private peer: Peer;
  private _peer$ = new Subject();
  
  constructor() {
    this.init();
  }
  
  init() {
    this.peer = new Peer({ initiator: true, trickle: false });
    
    this.peer.on('connect', () => {
      console.log('connect')
    });

    this.peer.on('signal', (data) => {
      this._peer$.next({ data });
    });
    
    this._peer$.subscribe((data) => console.log('data', data))
  }
  
  get peer$() {
    return this._peer$;
  }
}
