import { Component, OnInit } from '@angular/core';
import { $ } from 'protractor';
import { ApiService } from '../api.service';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-movia-detail',
  templateUrl: './movia-detail.component.html',
  styleUrls: ['./movia-detail.component.scss']
})
export class MoviaDetailComponent implements OnInit {

  data: MoviaDetail;

  constructor(private apiservice : ApiService,private route : ActivatedRoute,private location:Location) { }

  ngOnInit() {
    
var Idmb =this.route.snapshot.params['i'];
 
    this.apiservice.getMoviaDetail(Idmb).subscribe((res: any) => {
      this.data = res;
      console.log(this.data);
    }, err => {
      console.log(err);
    });



  }

  Back(){
    this.location.back();
  }

}
