import {Router} from '@angular/router';
import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-home-gamme',
  templateUrl: './home-gamme.component.html',
  styleUrls: ['./home-gamme.component.css']
})
export class HomeGammeComponent implements OnInit {
  private card: any

  constructor(private router: Router) {
  }

  ngOnInit(): void {
    /*  this.card = document.querySelector(".card");
     this.card.addEventListener("mousemove", (e:any) => {
     this.card.style.cssText = `
         transform: rotateX(${
           -(window.innerHeight / 2 - e.pageX) / 25
         }deg) rotateY(${(window.innerHeight / 2 - e.pageY) / 25}deg);
     `;
   });

   this.card.addEventListener("mouseout", (e:any) => {
     this.card.style.cssText = `
     transition: all .3s;
         transform: rotate(${0}deg, ${0}deg);
     `;
   }); */
  }

  lirePlus(event: any) {
    if (event == "magasin") {
      this.router.navigateByUrl("magasin")
    } else if (event == "event")
      this.router.navigateByUrl("events")
    else if (event == 'renovation') this.router.navigateByUrl("renovation")
  }


}
