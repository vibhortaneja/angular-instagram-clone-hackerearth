import { Component, OnInit } from '@angular/core';
import { DataService } from './data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'instagram-clone-hackerearth';
  cards = [];

  constructor(private dataService: DataService) { }


  ngOnInit() {

    this.dataService.getInstagramData().subscribe((data: any[]) => {
      console.log(data);
      this.cards = data;
    });
  }

  sortByLike(){
    this.cards.sort(this.compare);
  }

  compare(a, b){
    if (a.likes < b.likes){
      return -1;
    }
    if(a.likes > b.likes){
      return 1;
    }
    return 0;
  }

  sortByTime(){
    this.cards.sort((a, b) => new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime());
  }
}
