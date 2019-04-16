import { Component, HostListener } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Guardian of the galaxy tour of heroes';

  @HostListener('window:scroll', ['this.shinkNavbar()'])

  ngOnInit() {
    //window.onscroll = function(){shinkNavbar()}
  }

  shinkNavbar(): any {
    if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
      document.getElementById('navbar').style.padding = '30px';
      document.getElementById('logoCompany').style.fontSize = '25px';

    
    } else {
      document.getElementById('navbar').style.padding = '90px';
      document.getElementById('logoCompany').style.fontSize = '50px';



    }
  }

}
