import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

declare global {
  interface Window {
    AOS: any;
  }
}

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule]
})
export class ContactComponent implements OnInit {
  contactForm: FormGroup;
  submitted = false;
  formSuccess = false;
  formError = false;

  constructor(private formBuilder: FormBuilder) {
    this.contactForm = this.formBuilder.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      subject: ['', Validators.required],
      message: ['', [Validators.required, Validators.minLength(10)]]
    });
  }

  ngOnInit(): void {
    // Inicializar animações AOS
    this.initAOS();
  }

  get f() {
    return this.contactForm.controls;
  }

  onSubmit() {
    this.submitted = true;

    // Parar aqui se o formulário for inválido
    if (this.contactForm.invalid) {
      return;
    }

    // Simulação de envio de formulário
    setTimeout(() => {
      this.formSuccess = true;
      this.submitted = false;
      this.contactForm.reset();
      
      // Resetar status após 5 segundos
      setTimeout(() => {
        this.formSuccess = false;
      }, 5000);
    }, 1500);
  }

  private initAOS(): void {
    // Inicializar AOS (Animate On Scroll)
    if (typeof window !== 'undefined' && window.AOS) {
      window.AOS.init({
        duration: 1000,
        once: true,
        offset: 100
      });
    }
  }
}
