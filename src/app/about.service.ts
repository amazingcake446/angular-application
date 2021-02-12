import { MEMBERS } from './shared/members';
import { Member } from './shared/member';
import { Injectable } from '@angular/core';
import {Observable, of} from 'rxjs'


@Injectable({
  providedIn: 'root'
})
export class AboutService {


  constructor() { }

  getMembers(): Observable<Member[]> {
    return of (MEMBERS);
  }
}
