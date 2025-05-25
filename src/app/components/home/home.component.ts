import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

declare global {
  interface Window {
    AOS: any;
  }
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  standalone: true,
  imports: [CommonModule, RouterModule]
})
export class HomeComponent implements OnInit {
  constructor() { }

  ngOnInit(): void {
    // Inicializar o efeito de digitação
    this.initTypedEffect();
    // Inicializar as animações AOS
    this.initAOS();
  }

  /**
   * Implementação personalizada do efeito de digitação
   * Criei esta função para simular o efeito de digitação sem depender de bibliotecas externas
   * Isso me permitiu ter mais controle sobre o comportamento e timing das animações
   */
  private initTypedEffect(): void {
    // Lista de tecnologias que aparecem no efeito de digitação
    const texts = [
      'Desenvolvimento Java',
      'Spring Boot',
      'APIs RESTful',
      'Angular',
      'Microsserviços'
    ];
    
    const typedElement = document.querySelector('.typed-text');
    if (!typedElement) return;
    
    let textIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let typingSpeed = 100; // Velocidade base de digitação
    
    // Função recursiva que cria o efeito de digitação
    function type() {
      const currentText = texts[textIndex];
      
      if (isDeleting) {
        // Lógica para apagar o texto caractere por caractere
        if (typedElement) {
          typedElement.textContent = currentText.substring(0, charIndex - 1);
        }
        charIndex--;
        typingSpeed = 50; // Apagar é mais rápido que digitar
      } else {
        // Lógica para adicionar texto caractere por caractere
        if (typedElement) {
          typedElement.textContent = currentText.substring(0, charIndex + 1);
        }
        charIndex++;
        typingSpeed = 100;
      }
      
      // Controle de quando começar a apagar ou passar para o próximo texto
      if (!isDeleting && charIndex === currentText.length) {
        isDeleting = true;
        typingSpeed = 1000; // Pausa antes de começar a deletar
      } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        textIndex = (textIndex + 1) % texts.length;
        typingSpeed = 500; // Pausa antes de começar a digitar o próximo texto
      }
      
      // Chamada recursiva com setTimeout para criar o loop de animação
      setTimeout(type, typingSpeed);
    }
    
    // Pequeno delay inicial antes de começar o efeito
    setTimeout(type, 1000);
  }

  /**
   * Inicializa a biblioteca AOS (Animate On Scroll)
   * Utilizei esta biblioteca para criar animações suaves ao rolar a página
   * Configurei para que as animações ocorram apenas uma vez por elemento
   */
  private initAOS(): void {
    // Verificação para evitar erros durante o SSR (Server-Side Rendering)
    if (typeof window !== 'undefined' && window.AOS) {
      window.AOS.init({
        duration: 1000,  // duração das animações em ms
        once: true,      // animações ocorrem apenas uma vez
        offset: 100      // offset (em px) do ponto de trigger da animação
      });
    }
  }
}
