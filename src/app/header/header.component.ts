import { Component, OnInit } from '@angular/core';
import { GlobalService } from '../global.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private globalSrv: GlobalService) { }

  public user: any;

  ngOnInit(): void {
    this.globalSrv.user.subscribe((nextValue: any) => {
      this.user = nextValue
   })
  }

  logout(){
    localStorage.removeItem('user')
    this.user = undefined;
  }


}
