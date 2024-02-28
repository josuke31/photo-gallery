import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})
export class MenuPage implements OnInit {
id:any;
  constructor(private route : ActivatedRoute) { 
    console.log('constructor')
  }
  onClick(){
    this.route.navigateByUrl('signup');
  }

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');
  }

}
