import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule]
})
export class DashboardComponent implements OnInit {
  activeTab = 'profile';
  profileForm: FormGroup;
  experienceForm: FormGroup;
  projectsForm: FormGroup;
  blogForm: FormGroup;
  saveSuccess = false;
  saveError = false;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router
  ) {
    // Inicialização dos formulários com dados padrão
    // Tive alguns problemas com validação aqui, precisei ajustar várias vezes
    this.profileForm = this.formBuilder.group({
      name: ['Leandro Barreto', [Validators.required]],
      title: ['Desenvolvedor de Software', [Validators.required]],
      location: ['Brasília, DF - Brasil', [Validators.required]],
      phone: ['(61) 99320-4481', [Validators.required]],
      email: ['leandrobarreto.barreto@gmail.com', [Validators.required, Validators.email]],
      about: ['Sou Analista de Software com mais de 3 anos de experiência no desenvolvimento de aplicações corporativas robustas, escaláveis e bem estruturadas. Tenho forte atuação em back-end com Java e Spring Boot, desenvolvendo APIs RESTful e microsserviços, aplicando boas práticas, arquitetura limpa e código limpo. Também possuo experiência sólida em front-end com Angular, construindo interfaces modernas e responsivas, entregando soluções completas de ponta a ponta. Experiência com Docker, AWS e GitHub Actions, aplicando práticas de DevOps e CI/CD. Domínio em bancos de dados MySQL, MongoDB e Redis, com foco em otimização de consultas e alta performance. Familiaridade com ferramentas de observabilidade como Prometheus e Grafana, garantindo desempenho e disponibilidade das aplicações.', [Validators.required]]
    });

    // Formulário de experiências profissionais
    // TODO: Adicionar suporte para múltiplas experiências
    this.experienceForm = this.formBuilder.group({
      company1: ['LK Engenharia Ltda', [Validators.required]],
      position1: ['Desenvolvedor Backend Java – Automação de Processos Financeiros', [Validators.required]],
      period1: ['Jan 2021 - Jan 2023', [Validators.required]],
      description1: ['Atuei no desenvolvimento de um sistema crítico para automação de processos financeiros, com o objetivo de eliminar tarefas manuais, reduzir erros e aumentar a eficiência na gestão de recursos.', [Validators.required]]
    });

    // Formulário de projetos
    // Preciso implementar uma forma de adicionar mais projetos dinamicamente
    this.projectsForm = this.formBuilder.group({
      project1: ['Kafka Service Mesh', [Validators.required]],
      projectUrl1: ['https://github.com/LeandroBryto/kafka-service-mesh', [Validators.required]],
      projectDesc1: ['Sistema de mensageria baseado em Kafka para integração de microsserviços, implementando padrões modernos como Event Sourcing e CQRS para criar uma arquitetura distribuída escalável e resiliente.', [Validators.required]]
    });

    // Formulário de artigos do blog
    this.blogForm = this.formBuilder.group({
      article1: ['Kafka como Backbone para Microsserviços', [Validators.required]],
      articleUrl1: ['https://medium.com/@marcelomg21/event-streaming-apache-kafka-kafka-streams-em-uma-arquitetura-de-micro-servi%C3%A7os-136c28d7c9c8', [Validators.required]],
      articleDesc1: ['Uma análise aprofundada sobre como o Apache Kafka pode servir como espinha dorsal para comunicação entre microsserviços, implementando padrões como Event Sourcing e CQRS para criar sistemas distribuídos resilientes e escaláveis.', [Validators.required]]
    });
  }

  ngOnInit(): void {
    // Verificar se o usuário está autenticado
    // Isso é uma implementação simples, em produção usaria um serviço de auth
    const isLoggedIn = localStorage.getItem('isLoggedIn');
    if (!isLoggedIn) {
      this.router.navigate(['/admin/login']);
    }
  }

  // Método para alternar entre as abas do painel
  setActiveTab(tab: string): void {
    this.activeTab = tab;
  }

  // Método para fazer logout
  logout(): void {
    localStorage.removeItem('isLoggedIn');
    this.router.navigate(['/admin/login']);
  }

  // Salvar dados do perfil
  saveProfile(): void {
    if (this.profileForm.invalid) {
      return;
    }
    
    // Simulação de salvamento bem-sucedido
    // Em um app real, isso enviaria dados para uma API
    this.saveSuccess = true;
    setTimeout(() => {
      this.saveSuccess = false;
    }, 3000);
    
    // Em uma implementação real, aqui seria feita uma chamada para um serviço
    // que salvaria os dados em um backend ou em localStorage
    console.log('Dados do perfil salvos:', this.profileForm.value);
  }

  // Salvar dados de experiência
  saveExperience(): void {
    if (this.experienceForm.invalid) {
      return;
    }
    
    this.saveSuccess = true;
    setTimeout(() => {
      this.saveSuccess = false;
    }, 3000);
    
    console.log('Dados de experiência salvos:', this.experienceForm.value);
  }

  // Salvar dados de projetos
  saveProjects(): void {
    if (this.projectsForm.invalid) {
      return;
    }
    
    this.saveSuccess = true;
    setTimeout(() => {
      this.saveSuccess = false;
    }, 3000);
    
    console.log('Dados de projetos salvos:', this.projectsForm.value);
  }

  // Salvar dados do blog
  saveBlog(): void {
    if (this.blogForm.invalid) {
      return;
    }
    
    this.saveSuccess = true;
    setTimeout(() => {
      this.saveSuccess = false;
    }, 3000);
    
    console.log('Dados do blog salvos:', this.blogForm.value);
  }
}
