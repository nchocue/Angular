import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroesService } from '../../services/heroes.service';
import { stringify } from 'querystring';


@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html'
})
export class HeroeComponent implements OnInit {

  heroe: any = {};
  imgset?: string;

  constructor(private activatedRoute: ActivatedRoute,
    private _heroService: HeroesService 
    ) 
    {

       this.activatedRoute.params.subscribe(
         params =>{
           this.heroe = this._heroService.getHeroe(params['id']);
         }
       );

       if(this.heroe.casa === 'DC'){
        this.imgset = 'assets/img/DC.png';
       }

       if(this.heroe.casa === 'Marvel'){
          this.imgset = 'assets/img/Marvel.png';
       }

    }

  ngOnInit(): void {
  }

 

}
