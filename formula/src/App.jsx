import { useState } from 'react';
import './index.css';

function App() {
  const [expandedModule, setExpandedModule] = useState(null);

  const modules = [
    {
      id: 1,
      number: "01",
      title: "Desvendando o Mundo Digital e a Mentalidade Lucrativa",
      description: "Prepare-se com a mentalidade correta e os fundamentos do mercado digital para iniciar sua jornada de lucro. Aqui você vai entender como pensar como um empreendedor digital de verdade.",
      lessons: [
        "Bem-vindo à Fórmula do Lucro: Introdução ao curso e o que esperar",
        "A Mentalidade do Lucro: Como pensar como um empreendedor digital e superar crenças limitantes",
        "O Mapa da Renda Digital: Entendendo os principais modelos de negócio online",
        "Seu Celular, Seu Escritório: Otimizando seu smartphone para o trabalho online"
      ]
    },
    {
      id: 2,
      number: "02",
      title: "Encontrando Oportunidades que Vendem",
      description: "Aprenda a identificar e selecionar produtos digitais com alto potencial de venda, mesmo sem experiência. Descubra onde estão as melhores oportunidades e como escolher nichos lucrativos.",
      lessons: [
        "Anatomia de um Produto Vencedor: Características essenciais de produtos que convertem",
        "Plataformas Secretas de Produtos: Onde encontrar os melhores produtos para promover",
        "Nicho de Ouro: Como escolher um nicho lucrativo e apaixonante",
        "Análise de Concorrência Simples: Espionando o que funciona para outros e adaptando"
      ]
    },
    {
      id: 3,
      number: "03",
      title: "Divulgação Estratégica Sem Gastar um Centavo",
      description: "Capacite-se para divulgar produtos de forma eficaz e gratuita, atraindo clientes sem depender de anúncios ou muitos seguidores. Domine as estratégias que realmente funcionam.",
      lessons: [
        "O Poder do Conteúdo Magnético: Criando posts, vídeos e textos que atraem a atenção",
        "WhatsApp Lucrativo: Estratégias para vender pelo WhatsApp de forma ética e eficiente",
        "Instagram Sem Segredos: Como usar o Instagram para vendas, mesmo com poucos seguidores",
        "Facebook e Grupos: Minas de Ouro - Encontrando e interagindo com seu público",
        "YouTube Descomplicado: Criando vídeos simples que geram vendas (sem aparecer, se não quiser)"
      ]
    },
    {
      id: 4,
      number: "04",
      title: "Transformando Tempo Livre em Lucro Real",
      description: "Descubra como otimizar seu tempo e transformar horas vagas em resultados financeiros consistentes. Crie uma rotina de produtividade que gera lucro diário.",
      lessons: [
        "Rotina de Produtividade do Empreendedor Digital: Organizando seu dia para maximizar os lucros",
        "Automação Simples para Vendas: Ferramentas gratuitas para otimizar seu trabalho",
        "Escala Sem Complicação: Como aumentar seus ganhos sem aumentar seu esforço",
        "Primeiras Vendas e Além: Celebrando os primeiros resultados e planejando os próximos passos"
      ]
    },
    {
      id: 5,
      number: "05",
      title: "Gerenciando Seus Ganhos e Expandindo o Negócio",
      description: "Aprenda a gerenciar suas finanças e planejar o crescimento de seu negócio digital. Descubra como reinvestir de forma inteligente e explorar novas fontes de renda.",
      lessons: [
        "Organizando Suas Finanças Digitais: Como controlar entradas e saídas",
        "Reinvestindo para Crescer: Estratégias inteligentes para escalar seu negócio",
        "Novas Fontes de Renda: Explorando outras oportunidades no mercado digital",
        "O Futuro da Sua Renda Digital: Mantendo-se atualizado e inovando constantemente"
      ]
    }
  ];

  const benefits = [
    {
      icon: "📱",
      title: "Apenas Celular",
      description: "Trabalhe de qualquer lugar usando apenas seu smartphone e internet. Sem complicações, sem necessidade de computador."
    },
    {
      icon: "💰",
      title: "Zero Investimento",
      description: "Comece sem gastar nada com anúncios. Aprenda estratégias gratuitas que realmente funcionam e geram resultado."
    },
    {
      icon: "🎯",
      title: "Método Direto",
      description: "Passo a passo simples e prático. Sem enrolação, sem teoria demais. Só o que você precisa para começar a lucrar."
    },
    {
      icon: "⚡",
      title: "Resultados Rápidos",
      description: "Estratégias aplicáveis no mesmo dia. Veja suas primeiras vendas acontecerem mais rápido do que imagina."
    }
  ];

  const bonuses = [
    {
      icon: "🎁",
      title: "Comunidade Exclusiva",
      description: "Acesso ao grupo VIP de alunos para networking, troca de experiências e suporte direto do instrutor."
    },
    {
      icon: "🛠️",
      title: "Kit de Ferramentas",
      description: "Lista curada de aplicativos essenciais para otimizar seu trabalho e produtividade no celular."
    },
    {
      icon: "📚",
      title: "E-book 50 Ideias",
      description: "Guia prático com modelos prontos de conteúdo que engajam e convertem em vendas."
    },
    {
      icon: "📈",
      title: "Análise de Métricas",
      description: "Aula extra sobre como entender os números do seu negócio e tomar decisões baseadas em dados."
    },
    {
      icon: "🎯",
      title: "Mentoria em Grupo",
      description: "Sessões mensais ao vivo com o instrutor para tirar dúvidas e receber orientações personalizadas."
    }
  ];

  const toggleModule = (id) => {
    setExpandedModule(expandedModule === id ? null : id);
  };

  const scrollToPrice = () => {
    document.getElementById('price-section').scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="landing-page">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <h1 className="hero-title">
            🚀 Fórmula do Lucro: Do Zero ao Seu Primeiro R$ Online com o Celular!
          </h1>
          <p className="hero-subtitle">
            Desbloqueie o Poder do Seu Bolso: Estratégias Simples, Lucros Reais, Sem Complicações
          </p>
          <br />
          <button className="hero-cta" onClick={scrollToPrice}>
            Quero Começar Agora! 🔥
          </button>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="section benefits-section">
        <div className="container">
          <h2 className="section-title">Por Que a Fórmula do Lucro Funciona?</h2>
          <div className="benefits-grid">
            {benefits.map((benefit, index) => (
              <div key={index} className="benefit-card">
                <div className="benefit-icon">{benefit.icon}</div>
                <h3 className="benefit-title">{benefit.title}</h3>
                <p className="benefit-description">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="section" style={{ background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 100%)' }}>
        <div className="container">
          <h2 className="section-title">O Que Você Vai Aprender?</h2>
          <div style={{ maxWidth: '900px', margin: '0 auto', textAlign: 'left' }}>
            <p style={{ fontSize: '1.1rem', lineHeight: '1.8', color: 'rgba(255, 255, 255, 0.85)', marginBottom: '30px' }}>
              O <strong style={{ color: '#fbbf24' }}>Fórmula do Lucro</strong> é um treinamento prático e direto, criado pra quem tá cansado de tentar de tudo e nunca ver resultado. Aqui você vai aprender como gerar sua primeira renda online, mesmo começando do zero, sem investir em anúncios e sem precisar ser expert.
            </p>
            <p style={{ fontSize: '1.1rem', lineHeight: '1.8', color: 'rgba(255, 255, 255, 0.85)' }}>
              O método foi desenvolvido pra funcionar com apenas um celular e conexão com a internet, usando ferramentas simples e estratégias aplicáveis no mesmo dia. <strong style={{ color: '#60a5fa' }}>Do zero ao lucro — simples, direto e testado.</strong>
            </p>
          </div>
        </div>
      </section>

      {/* Modules Section */}
      <section className="section modules-section">
        <div className="container">
          <h2 className="section-title">Conteúdo Completo do Curso</h2>
          <div className="modules-container">
            {modules.map((module) => (
              <div
                key={module.id}
                className="module-card"
                onClick={() => toggleModule(module.id)}
              >
                <div className="module-header">
                  <span className="module-number">Módulo {module.number}</span>
                  <h3 className="module-title">{module.title}</h3>
                </div>
                <p className="module-description">{module.description}</p>
                {expandedModule === module.id && (
                  <ul className="module-lessons">
                    {module.lessons.map((lesson, index) => (
                      <li key={index} className="module-lesson">{lesson}</li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bonus Section */}
      <section className="section bonus-section">
        <div className="container">
          <h2 className="section-title">Bônus Exclusivos Inclusos</h2>
          <div className="bonus-grid">
            {bonuses.map((bonus, index) => (
              <div key={index} className="bonus-card">
                <div className="bonus-icon">{bonus.icon}</div>
                <h3 className="bonus-title">{bonus.title}</h3>
                <p className="bonus-description">{bonus.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Instructor Section */}
      <section className="section instructor-section">
        <div className="container">
          <h2 className="section-title">Conheça Seu Instrutor</h2>
          <div className="instructor-content">
            <div className="instructor-avatar">👨‍💼</div>
            <h3 className="instructor-name">Alex Fortuna</h3>
            <p className="instructor-bio">
              Alex Fortuna é um empreendedor digital com mais de 7 anos de experiência, que transformou sua própria jornada de dificuldades em um método comprovado para gerar renda online usando apenas o celular. Sua paixão é simplificar o complexo e capacitar pessoas comuns a conquistarem sua liberdade financeira. Com milhares de alunos transformados, Alex criou a Fórmula do Lucro para democratizar o acesso ao mundo digital e mostrar que qualquer pessoa pode ter sucesso online.
            </p>
          </div>
        </div>
      </section>

      {/* Price Section */}
      <section id="price-section" className="section price-section">
        <div className="container">
          <h2 className="section-title">Garanta Sua Vaga Agora!</h2>
          <div className="price-card">
            <span className="price-badge">🔥 Oferta Especial</span>
            <p style={{ fontSize: '1.0rem', lineHeight: '1.8', color: 'rgba(180, 180, 180, 1)', marginBottom: '10px' }}>de R$ 497 por:</p>
            <div className="price-value">R$ 297</div>
            <p className="price-installment">ou 10x de R$ 29,70 sem juros</p>
            <button className="price-cta" onClick={() => alert('Redirecionando para checkout...')}>
              Quero Transformar Minha Vida!
            </button>
            <div className="price-guarantee">
              <span>🛡️</span>
              <span>Garantia de 7 dias ou seu dinheiro de volta!</span>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <p className="footer-text">© 2025 Fórmula do Lucro - Todos os direitos reservados</p>
        <p className="footer-text">Transformando pessoas comuns em criadores de renda digital</p>
      </footer>
    </div>
  );
}

export default App;