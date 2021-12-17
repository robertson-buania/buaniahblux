import {Hbevent} from './../../../../modele/hbevent.modele';
import {HbluxArticleService} from './../../../../services/hblux-article.service';
import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-home-events',
  templateUrl: './home-events.component.html',
  styleUrls: ['./home-events.component.css']
})
export class HomeEventsComponent implements OnInit {

  hbevents: Hbevent[] | null = null

  constructor(private hbluxService: HbluxArticleService) {
  }

  ngOnInit(): void {
    this.hbluxService.findHbEventAll()
      .subscribe(
        data => {
          this.hbevents = data
          /* for(let i=0;i<2;i++){
            this.hbevents?.push(data.filter(
              events=> events.id==i+1
            )[0])
          } */
        }
      )
  }

}
