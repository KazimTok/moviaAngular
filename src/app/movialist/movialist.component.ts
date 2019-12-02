import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { NavigationEnd, Router, ActivatedRoute } from '@angular/router';
import { RouterScrollServiceService } from '../router-scroll-service.service';

declare var $: any;
@Component({
  selector: 'app-movialist',
  templateUrl: './movialist.component.html',
  styleUrls: ['./movialist.component.scss']
})

export class MovialistComponent implements OnInit {
  
  isLoadingResults = true;




 
  public isFullListDisplayed: boolean = false;

  constructor(private apiservice: ApiService,private router: Router
    ,private scrolService:RouterScrollServiceService) { }




  pg: number = 1;
  onScroll(e) {
    debugger;

   
    this.pg++
    this.GetMoviaList(this.pg);
  }

  private lastRouteUrl: string[] = []



  ngOnInit() {
    debugger;
    this.scrolService.componentLoaded();
    if(this.apiservice.Isdeg==true)
    {
      
      return;
    }
 

    
    // var Idmsb =this.route.snapshot

    // var Idmb =this.router;
    debugger;
    this.apiservice.Isdeg = true;

    
   

    setTimeout(function () {
      $('.loader').addClass('hidden').delay(200).remove();
      $('.slide-in').each(function () {
        $(this).addClass('visible');
      });
    }, 1900);

    this.GetMoviaList(1);


  }

  GetMoviaList(page) {
    debugger
    this.apiservice.getMoviaList(page).subscribe((res: any) => {

      res.Search.forEach(element => {
        this.apiservice.data.push(element)
      });

      
      debugger;
      console.log(this.apiservice.data);
      this.isLoadingResults = false;
    }, err => {
      debugger;
      console.log(err);
      this.isLoadingResults = false;
    });
  }



}
