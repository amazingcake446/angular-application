
import { AboutService } from './../about.service';
import { Member } from './../shared/member';
import { MEMBERS } from './../shared/members';
import { Component, OnInit } from '@angular/core';




@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  members : Member[];

  constructor(private aboutService: AboutService) { }

  ngOnInit(): void {
    this.getAbout();
  }

  getAbout(): void {
   /*  this.members = this.aboutService.getMembers(); */
   this.aboutService.getMembers()
   .subscribe(members => this.members = members);
  }
}
