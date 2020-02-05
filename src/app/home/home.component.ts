import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpService } from '../services/http/http.service';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  tags = false;
  showLoader = true;
  data: any = {
    userDetails: [],
    stories: [],
    transactions: []
  };

  modelDetail: any = {};
  id = '';

  constructor(private route: ActivatedRoute,
    private title: Title,
    private http: HttpService) { 
      
    }

  ngOnInit() {
    if (this.route.snapshot.paramMap.get("id")) {
      this.id = this.route.snapshot.paramMap.get("id");
      this.getData();
    }
  }

  getData() {
    let data = {
      tags: this.tags,
      userName: this.id
    }
    this.http.getData(`/user/userDetailsWeb`, data)
      .subscribe(response => {
        if (response.data && response.data.stories) {
          var cols = 2;
          
          if (window.innerWidth >= 768) {
            cols = 3;
          }
          
          if (window.innerWidth >= 992) {
            cols = 4;
          }

          const out = [];
          const arr = response.data.stories;

          let col = 0;

          while (col < cols) {
            for(let i = 0; i < arr.length; i += cols) {
              let _val = arr[i + col];
              if (_val != undefined) {
                out.push(_val);
              }
            }
            col++;
          }

          response.data.stories = out;
        }
        
        this.data = response.data;
        if (this.data && this.data.userDetails && this.data.userDetails.length) {
          this.title.setTitle(`RAX.money /${this.data.userDetails[0].userName}`);
        }
        console.log(this.data);
        this.showLoader = false;
      })
  }

}
