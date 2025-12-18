
import React, { useState, useEffect } from 'react';
import { 
  Shield, 
  CheckCircle2, 
  AlertCircle, 
  TrendingUp, 
  Lock, 
  Zap, 
  Plus, 
  Minus, 
  Wallet, 
  Brain, 
  ArrowRight,
  Star,
  Users,
  CreditCard,
  Target,
  Clock,
  Smartphone,
  ChevronLeft,
  ChevronRight,
  Layout,
  PlayCircle,
  FileText,
  ClipboardList,
  Monitor,
  XCircle,
  ArrowLeft
} from 'lucide-react';

// --- Utility Functions ---

const scrollToSection = (id: string) => {
  const element = document.getElementById(id);
  if (element) {
    const offset = 80; 
    const bodyRect = document.body.getBoundingClientRect().top;
    const elementRect = element.getBoundingClientRect().top;
    const elementPosition = elementRect - bodyRect;
    const offsetPosition = elementPosition - offset;

    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth'
    });
  }
};

// --- Components ---

const CTAButton = ({ text = "QUERO ME BLINDAR AGORA", className = "" }: { text?: string, className?: string }) => (
  <button 
    onClick={() => scrollToSection('pricing')}
    className={`inline-flex items-center justify-center px-8 py-5 bg-emerald text-black font-black text-xl rounded-2xl animate-pulse-custom transition-all hover:scale-105 active:scale-95 shadow-xl shadow-emerald/20 cursor-pointer ${className}`}
  >
    {text} <ArrowRight className="ml-2 w-6 h-6" />
  </button>
);

const SectionTitle = ({ title, subtitle, centered = true }: { title: string, subtitle?: string, centered?: boolean }) => (
  <div className={`${centered ? 'text-center' : 'text-left'} mb-16 px-4`}>
    <h2 className="text-3xl md:text-5xl font-heading font-black text-white leading-tight mb-6 uppercase tracking-tight">
      {title}
    </h2>
    {subtitle && <p className="text-gray-400 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">{subtitle}</p>}
    <div className={`w-24 h-1.5 bg-emerald mt-6 rounded-full ${centered ? 'mx-auto' : 'mx-0'}`}></div>
  </div>
);

// --- Sections ---

const TopBar = () => {
  const [today, setToday] = useState('');
  useEffect(() => {
    const date = new Date();
    setToday(date.toLocaleDateString('pt-BR', { day: '2-digit', month: '2-digit', year: 'numeric' }));
  }, []);

  return (
    <div className="fixed top-0 left-0 w-full z-[100] bg-emerald text-black font-bold py-2.5 text-center text-sm md:text-base px-4 shadow-xl">
      Hoje {today}, é o ÚLTIMO dia para garantir essa OFERTA EXCLUSIVA!
    </div>
  );
};

const Hero = () => (
  <section className="relative pt-40 pb-24 px-6 overflow-hidden">
    <div className="absolute top-1/4 -right-20 w-[600px] h-[600px] bg-emerald/10 blur-[150px] rounded-full -z-10"></div>
    <div className="absolute bottom-0 -left-20 w-[500px] h-[500px] bg-purple-accent/10 blur-[130px] rounded-full -z-10"></div>

    <div className="max-w-6xl mx-auto">
      <div className="flex flex-col items-center text-center">
        <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white/5 border border-white/10 text-emerald mb-8 backdrop-blur-sm">
          <Shield size={18} />
          <span className="text-sm font-bold tracking-widest uppercase">Protocolo Resgate 2026</span>
        </div>

        <h1 className="text-4xl md:text-7xl font-heading font-black text-white leading-tight mb-6">
          Pare de Perder Dinheiro e <br />
          <span className="text-emerald">Blinde Suas Finanças</span> <br />
          em 2026
        </h1>

        <div className="relative w-full max-w-5xl mx-auto mt-12 mb-16 px-4">
          <div className="absolute -inset-4 bg-emerald/20 blur-[100px] opacity-30 rounded-full"></div>
          
          <div className="relative z-10 grid grid-cols-12 gap-4 items-center">
            {/* Main Laptop - High Tech Interface */}
            <div className="col-span-12 lg:col-span-8 relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-emerald/50 to-purple-500/50 rounded-[2rem] blur opacity-25 group-hover:opacity-40 transition duration-1000"></div>
              <div className="relative glass p-2 rounded-[2rem] border-white/10 overflow-hidden shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1600" 
                  alt="Planilha de Blindagem Avançada" 
                  className="w-full rounded-[1.5rem] opacity-90 group-hover:opacity-100 transition-opacity duration-500 brightness-110"
                />
              </div>
            </div>
            
            {/* Side Floating Elements */}
            <div className="hidden lg:flex col-span-4 flex-col gap-6 -ml-12 relative z-20">
              <div className="glass p-4 rounded-3xl border-emerald/20 shadow-2xl transform hover:-translate-y-2 transition-transform duration-500">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 bg-emerald/10 rounded-lg flex items-center justify-center text-emerald"><Smartphone size={16}/></div>
                  <span className="text-[10px] font-black text-white uppercase tracking-widest">Controle Mobile Notion</span>
                </div>
                <img 
                  src="https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&q=80&w=600" 
                  alt="App Notion Interface" 
                  className="w-full rounded-xl brightness-90"
                />
              </div>
              <div className="glass p-4 rounded-3xl border-white/10 shadow-2xl transform translate-x-12 hover:-translate-y-2 transition-transform duration-500">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 bg-purple-accent/10 rounded-lg flex items-center justify-center text-purple-accent"><FileText size={16}/></div>
                  <span className="text-[10px] font-black text-white uppercase tracking-widest">Mapa Estratégico PDF</span>
                </div>
                <img 
                  src="https://images.unsplash.com/photo-1586281380349-632531db7ed4?auto=format&fit=crop&q=80&w=600" 
                  alt="PDF Strategy Guide" 
                  className="w-full rounded-xl brightness-90"
                />
              </div>
            </div>
          </div>
          
          <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 bg-graphite/90 backdrop-blur border border-emerald/30 px-8 py-2 rounded-full text-xs font-black text-emerald tracking-[0.2em] uppercase shadow-2xl z-30">
            Acesso Vitalício ao Ecossistema Completo
          </div>
        </div>

        <p className="text-xl md:text-2xl text-gray-400 max-w-3xl leading-relaxed mb-12">
          Transforme sua confusão bancária em um <span className="text-white font-bold underline decoration-emerald decoration-2 underline-offset-4">sistema de guerra</span> contra os boletos e a falta de dinheiro.
        </p>

        <CTAButton />

        <div className="mt-10 flex flex-wrap justify-center gap-6 md:gap-12">
          <div className="flex items-center gap-2 text-gray-400">
            <Users className="text-emerald w-5 h-5" />
            <span className="font-semibold text-sm">+2.500 pessoas blindadas</span>
          </div>
          <div className="flex items-center gap-2 text-gray-400">
            <Zap className="text-emerald w-5 h-5" />
            <span className="font-semibold text-sm">Pronto para uso imediato</span>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const Identification = () => (
  <section className="py-24 px-6 bg-black/40 relative">
    <div className="max-w-6xl mx-auto">
      <SectionTitle 
        title="O Ciclo do Fracasso Financeiro" 
        subtitle="Você se identifica com alguma dessas situações?" 
      />
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {[
          { icon: <CreditCard />, title: "Cartão sempre no limite", desc: "Você paga o mínimo todo mês e os juros só aumentam a dívida." },
          { icon: <Wallet />, title: "Salário que desaparece", desc: "O dinheiro entra e antes do dia 15 já acabou. Todo mês é a mesma coisa." },
          { icon: <Clock />, title: "Promessas não cumpridas", desc: "\"Mês que vem eu começo\" — só que esse mês nunca chega." },
          { icon: <Smartphone />, title: "Compras por impulso", desc: "Aquela promoção irresistível que depois vira arrependimento." },
          { icon: <AlertCircle />, title: "Zero reserva de emergência", desc: "Qualquer imprevisto vira uma bola de neve de dívidas." },
          { icon: <Brain />, title: "Ansiedade financeira", desc: "A preocupação com dinheiro rouba seu sono e sua paz mental." }
        ].map((item, i) => (
          <div key={i} className="glass p-8 rounded-3xl hover:border-emerald/40 transition-all group">
            <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center text-emerald mb-6 group-hover:bg-emerald/10 transition-colors">
              {item.icon}
            </div>
            <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
            <p className="text-gray-400 leading-relaxed text-sm md:text-base">{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const Solution = () => (
  <section className="py-24 px-6 overflow-hidden">
    <div className="max-w-6xl mx-auto">
      <div className="flex flex-col lg:flex-row items-center gap-16">
        <div className="flex-1 order-2 lg:order-1">
          <SectionTitle 
            title="A Solução" 
            subtitle="Apresentamos o Protocolo Resgate 2026" 
            centered={false}
          />
          <p className="text-xl text-gray-400 mb-10 leading-relaxed">
            Não é um curso. É um <span className="text-white font-bold">kit de sobrevivência digital</span> pronto para ser implementado hoje.
          </p>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-12">
            <div className="flex flex-col gap-4">
              <div className="w-12 h-12 bg-emerald/10 rounded-xl flex items-center justify-center text-emerald">
                <Shield />
              </div>
              <h4 className="text-xl font-bold text-white">Blindagem Prática</h4>
              <p className="text-gray-400 text-sm">Ferramentas desenhadas para serem usadas em 5 minutos por dia.</p>
            </div>
            <div className="flex flex-col gap-4">
              <div className="w-12 h-12 bg-emerald/10 rounded-xl flex items-center justify-center text-emerald">
                <Target />
              </div>
              <h4 className="text-xl font-bold text-white">Método Direto</h4>
              <p className="text-gray-400 text-sm">Sem teorias chatas. É abrir o arquivo e começar a ver o saldo crescer.</p>
            </div>
          </div>

          <div className="bg-white/5 border border-white/10 rounded-3xl p-8 mb-10">
            <h4 className="text-lg font-bold text-white mb-6 flex items-center gap-2 uppercase tracking-widest">
              <Plus className="text-emerald" size={20} /> O que você recebe:
            </h4>
            <ul className="space-y-4">
              {[
                "Planilha financeira avançada",
                "Sistema de rotina no Notion",
                "Mapa de clareza financeira (PDF)",
                "Checklists semanais e mensais",
                "Roteiro simples de organização",
                "Aula rápida de implementação"
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-gray-300">
                  <CheckCircle2 className="text-emerald shrink-0" size={18} />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          
          <CTAButton className="w-full md:w-auto" />
        </div>
        
        <div className="flex-1 order-1 lg:order-2 relative">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[140%] h-[140%] bg-emerald/10 blur-[120px] -z-10"></div>
          <div className="relative group p-6">
            <div className="absolute inset-0 bg-gradient-to-br from-emerald/20 to-transparent rounded-[3rem] blur-xl opacity-20"></div>
            <img 
              src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1200" 
              alt="Pacote Digital Completo de Alta Performance" 
              className="rounded-[3rem] shadow-2xl border border-white/10 group-hover:scale-[1.03] transition-transform duration-700 brightness-110 contrast-110"
            />
            <div className="absolute top-0 right-0 glass p-6 rounded-3xl border-emerald/40 shadow-2xl translate-x-1/3 -translate-y-1/4 max-w-[180px] hidden md:block">
              <div className="flex items-center gap-2 mb-2">
                <PlayCircle className="text-emerald" size={20} />
                <span className="text-[10px] font-black text-white uppercase tracking-wider">Passo a Passo</span>
              </div>
              <p className="text-gray-400 text-[10px] leading-tight font-bold uppercase tracking-tighter">Vídeo-Aula de configuração de elite inclusa</p>
            </div>
            <div className="absolute -bottom-8 -left-8 glass p-6 rounded-3xl border-white/10 shadow-2xl max-w-[200px] animate-bounce-slow">
              <div className="text-emerald font-black text-3xl mb-1 tracking-tighter">PRONTO</div>
              <div className="text-gray-400 text-xs font-bold uppercase tracking-widest">Para Implementar</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const Benefits = () => (
  <section className="py-24 px-6 bg-black/40">
    <div className="max-w-6xl mx-auto">
      <SectionTitle 
        title="A Liberdade" 
        subtitle="Imagine sua vida financeira em ordem absoluta" 
      />
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {[
          { title: "Dinheiro Sobrando", desc: "Pare de viver no vermelho e comece a ver seu saldo crescer semana após semana." },
          { title: "Paz Mental Absoluta", desc: "Durma tranquilo sabendo que suas finanças estão sob controle total." },
          { title: "Reserva Real", desc: "Construa 3 a 6 meses de segurança financeira em tempo recorde." },
          { title: "Crescimento Consistente", desc: "Acompanhe sua evolução com dashboards visuais e motivadores." },
          { title: "Relacionamentos Melhores", desc: "Sem brigas por dinheiro. Decisões financeiras em harmonia." },
          { title: "Liberdade de Escolha", desc: "Compre o que quiser, quando quiser — de forma planejada e consciente." }
        ].map((item, i) => (
          <div key={i} className="flex gap-4 p-6 rounded-2xl bg-white/[0.02] border border-white/5 hover:bg-white/[0.04] transition-all">
            <div className="bg-emerald/10 p-2 h-fit rounded-lg">
              <Star className="text-emerald" size={20} fill="#10B981" />
            </div>
            <div>
              <h4 className="text-white font-bold text-lg mb-2">{item.title}</h4>
              <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const PracticalPreview = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const slides = [
    {
      title: "Planilha Financeira Automática",
      description: "Visualização clara e intuitiva. O motor que calcula cada centavo e projeta sua liberdade futura automaticamente.",
      image: "https://images.unsplash.com/photo-1543286386-713bdd548da4?auto=format&fit=crop&q=80&w=1200",
      icon: <Layout className="text-emerald" />
    },
    {
      title: "Sistema de Rotina no Notion",
      description: "Sua central de comando moderna. Checklist diário, controle de hábitos e acompanhamento de metas em um só lugar.",
      image: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?auto=format&fit=crop&q=80&w=1200",
      icon: <ClipboardList className="text-emerald" />
    },
    {
      title: "Mapa de Clareza PDF & Roteiro",
      description: "Documentação estratégica. O caminho das pedras para diagnosticar seus erros e corrigir a rota em tempo recorde.",
      image: "https://images.unsplash.com/photo-1544383835-bda2bc66a55d?auto=format&fit=crop&q=80&w=1200",
      icon: <FileText className="text-emerald" />
    },
    {
      title: "Aula Rápida de Implementação",
      description: "Vídeo-aula prática gravada em ambiente profissional. Sem teoria massante; apenas o 'clique aqui' para configurar tudo.",
      image: "https://images.unsplash.com/photo-1616469829581-73993eb86b02?auto=format&fit=crop&q=80&w=1200",
      icon: <PlayCircle className="text-emerald" />
    }
  ];

  const nextSlide = () => setCurrentIndex((prev) => (prev + 1) % slides.length);
  const prevSlide = () => setCurrentIndex((prev) => (prev - 1 + slides.length) % slides.length);

  return (
    <section className="py-24 px-6 overflow-hidden bg-black/60 relative">
      <div className="max-w-6xl mx-auto relative">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald/10 border border-emerald/20 text-emerald mb-8 block mx-auto text-sm font-bold uppercase tracking-widest">
          <Zap size={16} /> Tour do Produto
        </div>
        <SectionTitle 
          title="Veja o que você vai receber na prática:" 
          subtitle="Ferramentas reais, prontas para o combate financeiro." 
        />
        
        <div className="relative group max-w-5xl mx-auto px-4 sm:px-12">
          {/* Main Slide Container */}
          <div className="glass rounded-[3rem] overflow-hidden border-white/10 shadow-2xl relative min-h-[500px]">
            <div className="flex flex-col md:flex-row h-full">
              <div className="md:w-3/5 relative overflow-hidden bg-graphite h-64 md:h-auto">
                <img 
                  src={slides[currentIndex].image} 
                  alt={slides[currentIndex].title}
                  className="w-full h-full object-cover transition-all duration-700 hover:scale-105 opacity-80"
                />
              </div>
              <div className="md:w-2/5 p-10 md:p-12 flex flex-col justify-center bg-white/[0.02]">
                <div className="mb-6 w-14 h-14 rounded-2xl bg-emerald/10 flex items-center justify-center">
                  {slides[currentIndex].icon}
                </div>
                <h3 className="text-2xl md:text-3xl font-black text-white mb-6 leading-tight uppercase tracking-tighter">
                  {slides[currentIndex].title}
                </h3>
                <p className="text-gray-400 text-lg leading-relaxed mb-8 font-medium">
                  {slides[currentIndex].description}
                </p>
                
                {/* Indicators Inside the Card for Context */}
                <div className="flex gap-2 mb-4">
                  {slides.map((_, i) => (
                    <div key={i} className={`h-1.5 flex-1 rounded-full transition-all duration-500 ${currentIndex === i ? 'bg-emerald' : 'bg-white/10'}`}></div>
                  ))}
                </div>
              </div>
            </div>
            
            {/* Desktop Controls - Integrated into the design */}
            <div className="absolute top-1/2 -translate-y-1/2 left-0 right-0 pointer-events-none hidden md:flex justify-between px-4 z-20">
              <button 
                onClick={prevSlide} 
                className="pointer-events-auto w-14 h-14 rounded-full bg-black/60 backdrop-blur-xl border border-white/20 flex items-center justify-center text-white hover:bg-emerald hover:text-black hover:scale-110 active:scale-95 transition-all shadow-2xl group/btn"
                aria-label="Anterior"
              >
                <ChevronLeft size={32} className="group-hover/btn:-translate-x-0.5 transition-transform" />
              </button>
              <button 
                onClick={nextSlide} 
                className="pointer-events-auto w-14 h-14 rounded-full bg-black/60 backdrop-blur-xl border border-white/20 flex items-center justify-center text-white hover:bg-emerald hover:text-black hover:scale-110 active:scale-95 transition-all shadow-2xl group/btn"
                aria-label="Próximo"
              >
                <ChevronRight size={32} className="group-hover/btn:translate-x-0.5 transition-transform" />
              </button>
            </div>
          </div>

          {/* Mobile Specific Controls - Prominent Below the Card */}
          <div className="flex md:hidden justify-center gap-6 mt-10">
            <button 
              onClick={prevSlide} 
              className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-emerald hover:bg-emerald/10 transition-all shadow-xl active:scale-90"
            >
              <ChevronLeft size={32} />
            </button>
            <button 
              onClick={nextSlide} 
              className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-emerald hover:bg-emerald/10 transition-all shadow-xl active:scale-90"
            >
              <ChevronRight size={32} />
            </button>
          </div>
        </div>
        
        <div className="mt-20 text-center">
          <CTAButton text="QUERO MEU ACESSO IMEDIATO" />
        </div>
      </div>
    </section>
  );
};

const Pricing = () => (
  <section id="pricing" className="py-24 px-6 relative">
    <div className="max-w-6xl mx-auto">
      <SectionTitle 
        title="Oferta Especial" 
        subtitle="Escolha o arsenal ideal para o seu momento financeiro." 
      />
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto items-stretch">
        <div className="glass p-10 rounded-[2.5rem] flex flex-col border-white/10 transition-all hover:border-white/20">
          <h3 className="text-2xl font-bold text-white mb-2">Plano Essencial</h3>
          <p className="text-gray-400 text-sm mb-8">O ponto de partida para sua organização</p>
          <div className="mb-8">
            <p className="text-gray-500 line-through font-bold mb-1">R$ 197</p>
            <div className="flex items-baseline gap-2">
              <span className="text-gray-400 font-bold">R$</span>
              <span className="text-6xl font-black text-white">17,90</span>
            </div>
            <p className="text-emerald text-xs font-bold mt-2 uppercase tracking-widest">Pagamento único</p>
          </div>
          
          <div className="space-y-4 mb-10 flex-1">
            <div className="flex items-center gap-3 text-sm text-white font-bold"><CheckCircle2 className="text-emerald shrink-0" size={18} /><span>Planilha financeira (Básica)</span></div>
            <div className="flex items-center gap-3 text-sm text-gray-300"><CheckCircle2 className="text-emerald shrink-0" size={18} /><span>Mapa financeiro (PDF)</span></div>
            <div className="flex items-center gap-3 text-sm text-gray-300"><CheckCircle2 className="text-emerald shrink-0" size={18} /><span>Checklists mensais</span></div>
            
            <div className="pt-4 space-y-4 opacity-30">
              <div className="flex items-center gap-3 text-sm text-gray-500"><XCircle className="shrink-0" size={18} /><span>Sistema de rotina (Notion)</span></div>
              <div className="flex items-center gap-3 text-sm text-gray-500"><XCircle className="shrink-0" size={18} /><span>Checklists diários/semanais</span></div>
              <div className="flex items-center gap-3 text-sm text-gray-500"><XCircle className="shrink-0" size={18} /><span>Aula de implementação</span></div>
              <div className="flex items-center gap-3 text-sm text-gray-500"><XCircle className="shrink-0" size={18} /><span>Método de constância</span></div>
            </div>
          </div>
          
          <a href="https://www.ggcheckout.com/checkout/v3/UY1zI057Fvuom7zHWBih" className="w-full py-4 bg-white/5 hover:bg-white/10 text-white font-bold rounded-2xl transition-all border border-white/10 uppercase tracking-widest text-sm text-center">Começar Agora</a>
        </div>
        
        <div className="gradient-border p-10 flex flex-col relative scale-105 shadow-2xl shadow-emerald/10">
          <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-emerald text-black text-[10px] font-black px-4 py-1 rounded-full uppercase tracking-widest">Recomendado</div>
          <h3 className="text-2xl font-bold text-white mb-2">Plano Completo</h3>
          <p className="text-gray-400 text-sm mb-8">Blindagem Total e Acompanhamento</p>
          
          <div className="mb-8">
            <div className="flex items-center gap-3 mb-1"><p className="text-gray-500 line-through font-bold">R$ 497</p><span className="bg-red-500/20 text-red-500 text-[10px] font-black px-2 py-0.5 rounded">-80%</span></div>
            <div className="flex items-baseline gap-2"><span className="text-gray-400 font-bold">R$</span><span className="text-6xl font-black text-emerald">27,90</span></div>
            <p className="text-emerald text-xs font-bold mt-2 uppercase tracking-widest">Pagamento único</p>
          </div>
          
          <div className="space-y-4 mb-10 flex-1">
            <div className="flex items-center gap-3 text-sm text-emerald font-black"><CheckCircle2 className="shrink-0" size={18} /><span>Planilha financeira (Avançada)</span></div>
            <div className="flex items-center gap-3 text-sm text-white font-bold"><CheckCircle2 className="text-emerald shrink-0" size={18} /><span>Mapa financeiro (PDF)</span></div>
            <div className="flex items-center gap-3 text-sm text-white font-bold"><CheckCircle2 className="text-emerald shrink-0" size={18} /><span>Checklists mensais</span></div>
            <div className="flex items-center gap-3 text-sm text-white font-bold"><CheckCircle2 className="text-emerald shrink-0" size={18} /><span>Sistema de rotina (Notion)</span></div>
            <div className="flex items-center gap-3 text-sm text-white font-bold"><CheckCircle2 className="text-emerald shrink-0" size={18} /><span>Checklists diários/semanais</span></div>
            <div className="flex items-center gap-3 text-sm text-white font-bold"><CheckCircle2 className="text-emerald shrink-0" size={18} /><span>Aula de implementação</span></div>
            <div className="flex items-center gap-3 text-sm text-white font-bold"><CheckCircle2 className="text-emerald shrink-0" size={18} /><span>Método de constância</span></div>
            
            <div className="mt-4 pt-4 border-t border-white/10">
               <div className="flex items-center gap-3 text-[10px] text-emerald font-black uppercase tracking-widest"><Star size={14} fill="#10B981" /> Bônus Exclusivos Inclusos</div>
            </div>
          </div>
          
          <a href="https://www.ggcheckout.com/checkout/v3/JgaSDglWmfc7pMuVHrIF" className="w-full py-5 bg-emerald text-black font-black rounded-2xl transition-all shadow-lg shadow-emerald/20 hover:scale-[1.02] active:scale-95 uppercase tracking-widest text-center">QUERO O PLANO COMPLETO</a>
        </div>
      </div>
      
      <div className="mt-16 flex flex-wrap justify-center gap-8 text-gray-500 text-xs font-bold uppercase tracking-widest">
        <div className="flex items-center gap-2"><Lock size={14} /> Compra 100% Segura</div>
        <div className="flex items-center gap-2"><Zap size={14} /> Acesso Imediato</div>
        <div className="flex items-center gap-2"><Shield size={14} /> 30 Dias de Garantia</div>
      </div>
    </div>
  </section>
);

const Guarantee = () => (
  <section className="py-24 px-6">
    <div className="max-w-4xl mx-auto glass p-10 md:p-16 rounded-[3rem] border-emerald/20 flex flex-col md:flex-row items-center gap-12 text-center md:text-left">
      <div className="w-40 h-40 shrink-0 relative">
        <div className="absolute inset-0 bg-emerald/20 blur-3xl rounded-full"></div>
        <div className="w-full h-full rounded-full border-4 border-emerald/30 flex flex-col items-center justify-center relative bg-graphite shadow-2xl">
          <span className="text-6xl font-black text-emerald">30</span>
          <span className="text-xs font-bold text-gray-400 uppercase tracking-tighter">DIAS</span>
        </div>
      </div>
      <div>
        <h3 className="text-3xl font-heading font-black text-white mb-6 uppercase tracking-tight">Garantia Incondicional de 30 Dias</h3>
        <p className="text-gray-400 text-lg leading-relaxed mb-6 italic">"Eu assumo todo o risco. Se você não sentir que o seu sistema de blindagem vale pelo menos 10x o que pagou, eu devolvo seu dinheiro na hora."</p>
      </div>
    </div>
  </section>
);

const FAQItem: React.FC<{ question: string; answer: string }> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="border-b border-white/5 last:border-0">
      <button onClick={() => setIsOpen(!isOpen)} className="w-full py-6 flex items-center justify-between text-left hover:text-emerald transition-colors focus:outline-none">
        <span className="text-lg font-bold pr-8 text-gray-200">{question}</span>
        {isOpen ? <Minus className="shrink-0 text-emerald" /> : <Plus className="shrink-0 text-emerald" />}
      </button>
      <div className={`overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-[500px] pb-6' : 'max-h-0'}`}>
        <p className="text-gray-400 leading-relaxed">{answer}</p>
      </div>
    </div>
  );
};

const FAQ = () => (
  <section className="py-24 px-6 bg-black/40">
    <div className="max-w-3xl mx-auto">
      <SectionTitle title="Dúvidas Comuns" subtitle="Tudo o que você precisa saber antes de blindar suas finanças." />
      <div className="glass px-10 rounded-[2.5rem] border-white/5">
        {[
          { q: "Qual a diferença real entre as planilhas?", a: "A Planilha Básica foca no registro simples de entradas e saídas. A Planilha Avançada inclui dashboards de evolução, projeção de liberdade financeira e automatização de metas de investimento." },
          { q: "O pagamento é mensal?", a: "Não. Pagamento único com acesso vitalício e todas as atualizações futuras inclusas." },
          { q: "O que é o método de constância?", a: "É um protocolo de 4 passos que ensinamos para garantir que você não abandone o controle financeiro na segunda semana, criando um hábito automático." },
          { q: "O Notion é pago?", a: "O Notion possui uma versão gratuita robusta que é mais do que suficiente para o nosso sistema." }
        ].map((item, i) => (
          <FAQItem key={i} question={item.q} answer={item.a} />
        ))}
      </div>
    </div>
  </section>
);

const LastChance = () => (
  <section className="py-32 px-6 text-center relative overflow-hidden">
    <div className="absolute inset-0 bg-emerald/10 blur-[150px] -z-10"></div>
    <div className="max-w-4xl mx-auto">
      <SectionTitle title="A decisão é sua." subtitle="Continuar no ciclo de ansiedade ou assumir o Protocolo de Resgate ainda hoje?" />
      <CTAButton text="TOMAR O CONTROLE AGORA" className="w-full md:w-auto" />
    </div>
  </section>
);

const Footer = () => (
  <footer className="py-16 px-6 border-t border-white/5 bg-graphite">
    <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-10">
      <div>
        <div className="flex items-center gap-2 text-white font-black text-xl mb-4 tracking-tighter"><Shield size={24} className="text-emerald" /> PROTOCOLO RESGATE 2026</div>
        <p className="text-gray-500 text-sm">© 2024 Protocolo Resgate. Todos os direitos reservados.</p>
      </div>
      <div className="flex gap-8 text-gray-400 text-sm font-medium">
        <a href="#" className="hover:text-emerald transition-colors">Privacidade</a>
        <a href="#" className="hover:text-emerald transition-colors">Termos</a>
        <a href="#" className="hover:text-emerald transition-colors">Suporte</a>
      </div>
    </div>
  </footer>
);

export default function App() {
  return (
    <div className="min-h-screen">
      <TopBar />
      <Hero />
      <Identification />
      <Solution />
      <Benefits />
      <PracticalPreview />
      <Pricing />
      <Guarantee />
      <FAQ />
      <LastChance />
      <Footer />
    </div>
  );
}
