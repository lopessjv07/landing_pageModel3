// src/App.jsx

import { useState, useEffect } from 'react';
// Assumindo que você tem seus componentes locais (Button, Card, Badge)
import Button from '../components/ui/button.jsx';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card.jsx';
import Badge from '../components/ui/badge.jsx'; // A importação foi ajustada para default, como no seu erro anterior
import {
  CheckCircle2, Smartphone, TrendingUp, Users, Clock, Star, Play,
  DollarSign, Zap, Target, BookOpen, Award, Gift, ChevronDown
} from 'lucide-react';
// O CSS agora está em um arquivo separado
import './App.css';

// --- Dados do Componente (Movidos para fora para clareza) ---

const modules = [
  {
    id: 1,
    icon: <BookOpen className="w-8 h-8" />,
    title: "Módulo 1: Desvendando o Mundo da Renda Digital",
    emoji: "🌍",
    description: "Introdução ao universo do marketing digital e renda online, desmistificando conceitos e preparando o terreno para as estratégias práticas.",
    lessons: [
      { title: "Bem-vindo à Fórmula do Lucro: Sua Jornada Começa Agora!", desc: "Apresentação do curso, do instrutor e o que esperar dessa jornada transformadora." },
      { title: "A Mentalidade do Lucro: Como Pensar como um Empreendedor Digital", desc: "Quebrando crenças limitantes e desenvolvendo a mentalidade certa para o sucesso online." },
      { title: "O Mapa da Renda Digital: Entendendo o Mercado e as Oportunidades", desc: "Visão geral das principais formas de ganhar dinheiro online e como o celular se encaixa nisso." },
      { title: "Glossário Essencial: Termos que Você Precisa Conhecer", desc: "Explicação dos jargões do marketing digital de forma simples e clara." }
    ]
  },
  {
    id: 2,
    icon: <Target className="w-8 h-8" />,
    title: "Módulo 2: Encontrando Produtos Vencedores",
    emoji: "🔍",
    description: "Ensinar o aluno a identificar e selecionar produtos digitais ou físicos com alto potencial de vendas, que se alinhem com seu perfil e público.",
    lessons: [
      { title: "Onde Encontrar os Tesouros: Navegando nas Plataformas de Afiliação", desc: "Passo a passo para se cadastrar e usar as principais plataformas (Hotmart, Eduzz, Monetizze, etc.)." },
      { title: "A Arte de Escolher Produtos que Vendem Sozinhos", desc: "Critérios para selecionar produtos com alta conversão, boa comissão e baixa concorrência." },
      { title: "Análise de Mercado Express: Como Identificar a Demanda", desc: "Ferramentas e técnicas simples para validar o potencial de um produto antes de promovê-lo." },
      { title: "Definindo seu Nicho de Atuação: Paixão, Habilidade e Lucro", desc: "Como escolher um nicho que você goste e que seja lucrativo." }
    ]
  },
  {
    id: 3,
    icon: <Zap className="w-8 h-8" />,
    title: "Módulo 3: Divulgação Magnética sem Gastar Nada",
    emoji: "🧲",
    description: "Capacitar o aluno com estratégias de divulgação orgânica (gratuita) que atraem clientes qualificados, sem a necessidade de ter uma grande base de seguidores.",
    lessons: [
      { title: "O Segredo da Divulgação sem Seguidores: Onde Estão os Clientes?", desc: "Estratégias para alcançar pessoas interessadas no seu produto, mesmo com um perfil novo." },
      { title: "Conteúdo que Converte: Como Criar Posts e Vídeos que Vendem", desc: "Modelos prontos e ideias de conteúdo para aplicar no mesmo dia." },
      { title: "O Poder dos Grupos e Comunidades: Vendas em Escala", desc: "Como encontrar e participar de grupos no Facebook e WhatsApp para divulgar seus produtos da maneira certa." },
      { title: "WhatsApp Vendedor: Transformando Conversas em Vendas", desc: "Script e abordagem para fechar vendas pelo WhatsApp sem ser chato." }
    ]
  },
  {
    id: 4,
    icon: <Clock className="w-8 h-8" />,
    title: "Módulo 4: Transformando Tempo Livre em Lucro Real",
    emoji: "⏰",
    description: "Ensinar o aluno a organizar sua rotina e otimizar seu tempo para aplicar as estratégias do curso de forma consistente e eficiente.",
    lessons: [
      { title: "Criando sua Rotina Digital Lucrativa: O Plano de Ação Diário", desc: "Como organizar seu dia para aplicar o método em poucas horas." },
      { title: "Metas e Objetivos: O Caminho para o Sucesso Mensurável", desc: "Como definir metas que te mantenham motivado e no caminho certo." },
      { title: "Ferramentas de Produtividade para o Empreendedor Digital", desc: "Aplicativos e ferramentas que vão te ajudar a ser mais organizado e produtivo." },
      { title: "A Consistência é a Chave: Como Manter o Ritmo e a Motivação", desc: "Dicas e estratégias para não desistir e continuar evoluindo." }
    ]
  }
];

const bonuses = [
  {
    icon: <Gift className="icon-sm" />,
    title: "Kit de Ferramentas do Empreendedor Digital",
    description: "Lista com os melhores aplicativos e ferramentas gratuitas para edição de imagens, criação de vídeos, organização de tarefas e automação de postagens."
  },
  {
    icon: <BookOpen className="icon-sm" />,
    title: "Modelos Prontos de Copy para Anúncios e Posts",
    description: "Arquivo com textos persuasivos prontos para copiar e colar em suas divulgações, adaptando para diferentes nichos e produtos."
  },
  {
    icon: <Users className="icon-sm" />,
    title: "Grupo Exclusivo de Alunos no WhatsApp",
    description: "Acesso a uma comunidade de alunos para networking, troca de experiências, tirar dúvidas e receber suporte do instrutor e da equipe."
  },
  {
    icon: <Zap className="icon-sm" />,
    title: "Aula Bônus - Como Fazer sua Primeira Venda em 48 Horas",
    description: "Um guia rápido e prático com um desafio para os alunos aplicarem e conseguirem a primeira venda em até dois dias."
  },
  {
    icon: <Award className="icon-sm" />,
    title: "Guia de Contingência: O que Fazer Quando as Vendas não Acontecem",
    description: "Un manual com os principais erros e como corrigi-los para virar o jogo e começar a vender."
  }
];

const testimonials = [
  {
    name: "Maria Silva",
    role: "Ex-Desempregada",
    content: "Fiz minha primeira venda em 3 dias! Nunca pensei que seria tão simples ganhar dinheiro com o celular.",
    rating: 5
  },
  {
    name: "João Santos",
    role: "Motorista de App",
    content: "Agora tenho uma renda extra que complementa meu salário. O curso mudou minha vida financeira!",
    rating: 5
  },
  {
    name: "Ana Costa",
    role: "Dona de Casa",
    content: "Comecei do zero absoluto e hoje já faço R$ 2.000 por mês trabalhando nas horas vagas. Gratidão!",
    rating: 5
  }
];

const benefits = [
  "Encontrar produtos que realmente vendem",
  "Divulgar sem depender de seguidores",
  "Transformar tempo livre em lucro real",
  "Criar uma rotina digital que gera resultado diário"
];

// --- Componente Principal ---

function App() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeModule, setActiveModule] = useState(null);

  useEffect(() => {
    // Simula a animação do Tailwind: opacity-100 translate-y-0
    setTimeout(() => setIsVisible(true), 100);
  }, []);

  // Função utilitária para renderizar ícones lucide com classes
  const renderIcon = (IconComponent, classes) => {
    // Clonamos o elemento para injetar classes CSS normais que definiremos no App.css
    return <IconComponent className={classes} />;
  };

  return (
    <div className="main-container">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-pattern"></div>

        <div className="container hero-content-wrapper">
          <div className={`hero-text-center ${isVisible ? 'hero-animate-in' : 'hero-animate-out'}`}>
            <Badge className="badge-hero">
              ⚡ OFERTA ESPECIAL - VAGAS LIMITADAS
            </Badge>

            <h1 className="hero-title">
              Fórmula do Lucro
            </h1>

            <p className="hero-subtitle">
              Seu Celular, Sua Máquina de Dinheiro! 💰
            </p>

            <p className="hero-description">
              Desbloqueie a Renda Digital que Você Sempre Quis, Sem Complicações.
            </p>

            <div className="hero-cta-group">
              <Button size="lg" className="btn-primary-hero">
                {renderIcon(Play, "icon-btn-left")}
                QUERO COMEÇAR AGORA!
              </Button>
              <Button size="lg" variant="outline" className="btn-secondary-hero">
                Conhecer o Método
              </Button>
            </div>

            <div className="hero-stats-grid">
              <div className="hero-stat-item">
                {renderIcon(Smartphone, "icon-stat")}
                <p className="stat-text">Só precisa de celular</p>
              </div>
              <div className="hero-stat-item">
                {renderIcon(DollarSign, "icon-stat")}
                <p className="stat-text">Sem investir em anúncios</p>
              </div>
              <div className="hero-stat-item">
                {renderIcon(Users, "icon-stat")}
                <p className="stat-text">Sem precisar de seguidores</p>
              </div>
              <div className="hero-stat-item">
                {renderIcon(TrendingUp, "icon-stat")}
                <p className="stat-text">Resultados reais</p>
              </div>
            </div>
          </div>
        </div>

        <div className="hero-wave-svg">
          <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="rgb(248, 250, 252)" />
          </svg>
        </div>
      </section>

      {/* Problem Section */}
      <section className="section-problem">
        <div className="container">
          <div className="content-max-w text-center">
            <h2 className="section-title">
              Cansado de Tentar de Tudo e Nunca Ver Resultado? 😓
            </h2>
            <p className="history">
              É hora de mudar essa história. ⚡
            </p>
          </div>
        </div>
      </section>

      <br />

      {/* Solution Section */}
      <section className="section.section-solution">
        <div className="container">
          <div className="content-max-w-lg">
            <h2 className="section-title2">
              O Que Você Vai Aprender 🎯
            </h2>

            <div className="benefits-grid">
              {benefits.map((benefit, index) => (
                <Card key={index} className="card-benefit">
                  <CardContent className="card-content-benefit">
                    {renderIcon(CheckCircle2, "icon-benefit")}
                    <p className="text-lg font-semibold text-slate-800">{benefit}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Instructor Section */}
      <section className="section section-instructor">
        <div className="container">
          <div className="content-max-w-md">
            <h2 className="section-title text-center text-blue">
              Conheça Seu Instrutor 👨‍🏫
            </h2>

            <Card className="card-instructor">
              <CardContent className="card-content-instructor">
                <div className="instructor-details-wrapper">
                  <div className="instructor-avatar">
                    AF
                  </div>
                  <div className="instructor-text-content">
                    <h3 className="text-2xl font-bold mb-2 text-blue">
                      Professor Alex Fortuna
                    </h3>
                    <p className="text-lg text-yellow-500 font-semibold mb-4">
                      Especialista em Renda Digital
                    </p>
                    <div className="text-slate-700">
                      <ul>
                        <li>
                          <strong>+10 Anos de Expertise:</strong> Alex tem mais de 10 anos de experiência comprovada, ajudando milhares de pessoas a gerar resultados no mercado digital.
                        </li>
                        <li>
                          <strong>Comece com o Celular:</strong> Aprenda a conquistar sua independência financeira usando apenas seu smartphone, saindo do absoluto zero.
                        </li>
                        <li>
                          <strong>Método Simples e Direto:</strong> Conte com uma metodologia prática, que transforma pessoas comuns em verdadeiros empreendedores digitais, de forma descomplicada.
                        </li>
                      </ul>
                    </div>
                    <div className="instructor-badges">
                      <Badge className="badge-success-instructor">+10.000 Alunos</Badge>
                      <Badge className="badge-warning-instructor">Método Validado</Badge>
                      <Badge className="badge-info-instructor">Resultados Reais</Badge>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Modules Section (Accordion) */}
      <section className="section section-modules">
        <div className="container">
          <div className="content-max-w-xl">
            <h2 className="section-title-text-center">
              Estrutura Completa do Curso 📚
            </h2>
            <p className="text-center">
              4 módulos práticos com aulas objetivas que você pode aplicar no mesmo dia
            </p>

            <div className="module-list">
              {modules.map((module, index) => (
                <Card
                  key={module.id}
                  className={`card-module ${activeModule === module.id ? 'card-module-active' : ''}`}
                  onClick={() => setActiveModule(activeModule === module.id ? null : module.id)}
                >
                  <CardHeader className="card-header-module">
                    <div className="module-header-content"><br />
                      <div className="module-icon-wrapper">
                        {renderIcon(module.icon.type, "icon-module")}
                      </div>
                      <div className="flex-1">
                        <CardTitle className="module-title">
                          {module.title} {module.emoji}
                        </CardTitle>
                        <CardDescription className="module-description">
                          {module.description}
                        </CardDescription>
                      </div>
                      <ChevronDown
                        className={`icon-chevron ${activeModule === module.id ? 'icon-chevron-rotated' : ''}`}
                      />
                    </div>
                  </CardHeader>

                  {activeModule === module.id && (
                    <CardContent className="module-lessons-content">
                      <div className="lesson-list">
                        {module.lessons.map((lesson, lessonIndex) => (
                          <div key={lessonIndex} className="lesson-item">
                            {renderIcon(Play, "icon-lesson")}
                            <div>
                              <h4 className="lesson-title">
                                Aula {index + 1}.{lessonIndex + 1}: {lesson.title}
                              </h4>
                              <p className="lesson-description">{lesson.desc}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  )}
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Bonuses Section */}
      <section className="section section-bonuses">
        <div className="container">
          <div className="content-max-w-xl">
            <h2 className="section-title-text-center-text-blue">
              Bônus Exclusivos 🎁
            </h2>
            <p className="text-lg-8">
              Além do curso completo, você recebe gratuitamente:
            </p>

            <div className="bonuses-grid">
              {bonuses.map((bonus, index) => (
                <Card key={index} className="card-bonus">
                  <CardContent className="card-content-bonus">
                    <div className="bonus-icon-wrapper">
                      {renderIcon(bonus.icon.type, "icon-bonus")}
                    </div>
                    <h3 className="text-lg font-bold mb-3 text-blue">
                      Bônus {index + 1}: {bonus.title}
                    </h3>
                    <p className="text-slate-600 text-sm leading-relaxed">
                      {bonus.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="section section-testimonials">
        <div className="container">
          <div className="content-max-w-xl">
            <h2 className="section-title text-center text-blue">
              Veja o Que Nossos Alunos Dizem 💬
            </h2>
            <p className="text-lg text-center text-slate-600 mb-12 content-max-w-xs mx-auto">
              Pessoas comuns que transformaram suas vidas com a Fórmula do Lucro
            </p>

            <div className="testimonials-grid">
              {testimonials.map((testimonial, index) => (
                <Card key={index} className="card-testimonial">
                  <CardContent className="card-content-testimonial">
                    <div className="star-rating">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="icon-star" />
                      ))}
                    </div>
                    <p className="text-slate-700-mb-4-italic-leading-relaxed">
                      "{testimonial.content}"
                    </p>
                    <div className="testimonial-footer">
                      <p className="font-bold text-blue">{testimonial.name}</p>
                      <p className="text-sm text-slate-500">{testimonial.role}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="section-section-pricing">
        <div className="container">
          <div className="content-max-w-md">
            <h2 className="section-title text-center text-blue">
              Invista no Seu Futuro Hoje 💎
            </h2>
            <p className="text-lg text-center text-slate-600 mb-12 content-max-w-xs mx-auto">
              Por menos do que você gasta em delivery no mês, você pode mudar sua vida financeira
            </p>

            <Card className="card-pricing">
              <div className="badge-offer-top">
                OFERTA ESPECIAL
              </div>

              <CardContent className="card-content-pricing">
                <h3 className="text-2xl font-bold mb-4 text-blue">
                  Acesso Completo ao Curso
                </h3>

                <div className="price-info">
                  <p className="price-old">De R$ 497,00</p>
                  <div className="price-current-group">
                    <span className="price-main">R$ 297</span>
                    <span className="price-cents">,00</span>
                  </div>
                  <p className="price-installments">ou 12x de R$ 29,12</p>
                </div>

                <div className="features-list">
                  <div className="feature-item">
                    <span className="text-slate-700">Acesso vitalício ao curso completo</span>
                  </div>
                  <div className="feature-item">
                    <span className="text-slate-700">4 módulos + 16 aulas práticas</span>
                  </div>
                  <div className="feature-item">
                    <span className="text-slate-700">5 bônus exclusivos</span>
                  </div>
                  <div className="feature-item">
                    <span className="text-slate-700">Suporte direto no grupo VIP</span>
                  </div>
                  <div className="feature-item">
                    <span className="text-slate-700">Garantia de 7 dias</span>
                  </div>
                </div>

                <Button size="lg" className="btn-primary-pricing">
                  GARANTIR MINHA VAGA AGORA!
                </Button>

                <p className="text-sm text-slate-500 mt-6">
                  🔒 Pagamento 100% seguro | ⚡ Acesso imediato após a compra
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section section-faq">
        <div className="container">
          <div className="content-max-w-md">
            <h2 className="section-title text-center text-blue">
              Perguntas Frequentes ❓
            </h2>

            <div className="faq-list">
              {[
                {
                  q: "Preciso ter experiência prévia?",
                  a: "Não! O curso foi criado especialmente para iniciantes. Você vai aprender desde o básico até as estratégias avançadas, tudo de forma simples e prática."
                },
                {
                  q: "Funciona só com celular mesmo?",
                  a: "Sim! Todo o método foi desenvolvido para ser aplicado usando apenas um smartphone e conexão com a internet. Você não precisa de computador."
                },
                {
                  q: "Quanto tempo leva para ver resultados?",
                  a: "Muitos alunos conseguem fazer a primeira venda em até 48 horas aplicando o método. Os resultados variam de acordo com a dedicação de cada um."
                },
                {
                  q: "Preciso investir em anúncios?",
                  a: "Não! O curso ensina estratégias de divulgação orgânica (gratuita). Você não precisa gastar dinheiro com anúncios para começar a vender."
                },
                {
                  q: "Tem garantia?",
                  a: "Sim! Você tem 7 dias de garantia incondicional. Se não gostar do curso, devolvemos 100% do seu dinheiro, sem perguntas."
                }
              ].map((faq, index) => (
                <Card key={index} className="card-faq">
                  <CardContent className="card-content-faq">
                    <h3 className="text-lg font-bold mb-2 text-blue">{faq.q}</h3>
                    <p className="text-slate-600 leading-relaxed">{faq.a}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="section section-final-cta">
        <div className="hero-pattern"></div>

        <div className="container final-cta-content-wrapper">
          <div className="content-max-w-md text-center">
            <h2 className="text-3xl font-bold mb-6">
              Sua Transformação Começa Agora! 🚀
            </h2>
            <p className="text-lg mb-8 text-slate-200">
              Não deixe mais um dia passar sem dar o primeiro passo rumo à sua independência financeira. Milhares de pessoas já mudaram de vida. Você é o próximo!
            </p>

            <Button size="lg" className="btn-primary-final-cta">
              SIM, QUERO MUDAR MINHA VIDA AGORA!
            </Button>

            <p className="text-sm text-slate-300 mt-6">
              ⏰ Vagas limitadas | 🔥 Oferta por tempo limitado
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer-section">
        <div className="container footer-content">
          <p className="text-slate-400">
            © 2025 Fórmula do Lucro. Todos os direitos reservados.
          </p>
          <p className="text-slate-500 text-sm mt-2">
            Este produto não garante a obtenção de resultados. Qualquer referência ao desempenho de uma estratégia não deve ser interpretada como uma garantia de resultados.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;