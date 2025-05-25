import { Component, OnInit } from '@angular/core';
import { RouterOutlet, Router, NavigationEnd } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { filter } from 'rxjs/operators';

declare var AOS: any;

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'portfolio-site';

  constructor(private router: Router) {}

  ngOnInit() {
    // Inicializar AOS após a renderização do componente
    this.initAOS();
    
    // Reinicializar AOS após cada navegação
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe(() => {
      // Pequeno timeout para garantir que o DOM foi atualizado
      setTimeout(() => {
        this.initAOS();
      }, 100);
    });
  }

  private initAOS() {
    if (typeof AOS !== 'undefined') {
      AOS.init({
        duration: 800,
        once: false, // Alterado para false para permitir reanimar elementos
        offset: 50,
        easing: 'ease-in-out',
        delay: 100
      });
    }
  }
}
