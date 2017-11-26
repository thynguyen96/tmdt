import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap, Params } from '@angular/router';
@Component({
    templateUrl: 'details.component.html'
})

export class DetailsComponent implements OnInit {
      id1: any;
    constructor(private route:ActivatedRoute ) { }

    ngOnInit() {

        if ( this.route.snapshot.queryParams['key']) { 
  console.log(this.route.snapshot.queryParams['key'])
        }

    //     this.route.params.forEach((params: Params) => {
    //         if (params['id'] !== undefined) {
    //            this.id1 = +params['id'];
    //         console.log(this.id1);
    //         }
    //  })
}
}