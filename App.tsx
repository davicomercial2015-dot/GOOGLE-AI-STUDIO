
import React, { useState, useEffect } from 'react';
import { 
  Shield, 
  CheckCircle2, 
  AlertCircle, 
  TrendingUp, 
  Lock, 
  Zap, 
  Gift, 
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
  Layout
} from 'lucide-react';

// --- Utility Functions ---

const scrollToSection = (id: string) => {
  const element = document.getElementById(id);
  if (element) {
    const offset = 80; // Compensação para o header fixo
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
    <h2 className="text-3xl md:text-5xl font-heading font-black text-white leading-tight mb-6">
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
    {/* Decorative blur elements */}
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

        {/* Hero Image (Mockup) positioned below the headline */}
        <div className="relative w-full max-w-4xl mx-auto mt-8 mb-12 group">
          <div className="absolute -inset-1 bg-gradient-to-r from-emerald/20 to-purple-accent/20 rounded-3xl blur-2xl opacity-40 group-hover:opacity-60 transition duration-1000"></div>
          <div className="relative glass p-3 md:p-4 rounded-3xl border-white/10 shadow-2xl flex flex-col md:flex-row gap-4 items-end">
            <div className="flex-1 rounded-2xl overflow-hidden shadow-2xl border border-white/5">
              <img 
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1200" 
                alt="Dashboard do Sistema" 
                className="w-full grayscale-[0.2] hover:grayscale-0 transition-all duration-700"
              />
            </div>
            <div className="hidden md:block w-48 shrink-0 rounded-3xl overflow-hidden shadow-2xl border-4 border-graphite transform translate-y-6 translate-x-2">
              <img 
                src="https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&q=80&w=400" 
                alt="App Mobile" 
                className="w-full"
              />
            </div>
          </div>
          <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 bg-graphite border border-white/10 px-6 py-1.5 rounded-full text-[10px] font-bold text-gray-400 tracking-widest uppercase shadow-xl">
            Dashboard do Sistema de Blindagem 2026
          </div>
        </div>

        <p className="text-xl md:text-2xl text-gray-400 max-w-3xl leading-relaxed mb-12">
          O sistema definitivo para quem quer sair das dívidas, controlar os impulsos e construir uma reserva de emergência de verdade.
        </p>

        <CTAButton />

        <div className="mt-10 flex flex-wrap justify-center gap-6 md:gap-12">
          <div className="flex items-center gap-2 text-gray-400">
            <Users className="text-emerald w-5 h-5" />
            <span className="font-semibold text-sm">+2.500 pessoas blindadas</span>
          </div>
          <div className="flex items-center gap-2 text-gray-400">
            <Zap className="text-emerald w-5 h-5" />
            <span className="font-semibold text-sm">Resultados em 30 dias</span>
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
      
      <div className="mt-20 text-center glass p-10 rounded-[2.5rem] border-emerald/20 max-w-4xl mx-auto">
        <p className="text-xl md:text-2xl text-white font-medium italic mb-8">
          "Se você marcou pelo menos uma, você está preso no ciclo que destrói a vida financeira de milhões de brasileiros."
        </p>
        <p className="text-emerald font-black text-lg uppercase tracking-widest">Mas e se existisse um sistema simples para quebrar esse ciclo de uma vez por todas?</p>
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
            subtitle="Apresentamos o Sistema de Blindagem 2026" 
            centered={false}
          />
          <p className="text-xl text-gray-400 mb-10 leading-relaxed">
            O método completo que já transformou a vida financeira de milhares de pessoas. Simples, prático e comprovado.
          </p>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-12">
            <div className="flex flex-col gap-4">
              <div className="w-12 h-12 bg-emerald/10 rounded-xl flex items-center justify-center text-emerald">
                <Shield />
              </div>
              <h4 className="text-xl font-bold text-white">Blindagem Total</h4>
              <p className="text-gray-400 text-sm">Um escudo contra compras impulsivas e decisões financeiras erradas.</p>
            </div>
            <div className="flex flex-col gap-4">
              <div className="w-12 h-12 bg-emerald/10 rounded-xl flex items-center justify-center text-emerald">
                <Target />
              </div>
              <h4 className="text-xl font-bold text-white">Controle Real</h4>
              <p className="text-gray-400 text-sm">Saiba exatamente para onde vai cada centavo do seu dinheiro.</p>
            </div>
          </div>

          <div className="bg-white/5 border border-white/10 rounded-3xl p-8 mb-10">
            <h4 className="text-lg font-bold text-white mb-6 flex items-center gap-2 uppercase tracking-widest">
              <Plus className="text-emerald" size={20} /> O que você recebe:
            </h4>
            <ul className="space-y-4">
              {[
                "Planilha financeira automatizada e intuitiva",
                "Planner de organização de bolso",
                "Guia de blindagem contra impulsos",
                "Dashboards visuais de acompanhamento",
                "Ideias de negócios para renda extra",
                "Suporte e comunidade exclusiva"
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
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-emerald/5 blur-[100px] -z-10"></div>
          <div className="relative group">
            <img 
              src="https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&q=80&w=800" 
              alt="System Assets" 
              className="rounded-[3rem] shadow-2xl border border-white/10 group-hover:scale-[1.02] transition-transform duration-500"
            />
            <div className="absolute -bottom-10 -right-6 md:-right-12 glass p-6 rounded-3xl border-white/10 shadow-2xl max-w-[200px] animate-bounce-slow">
              <div className="text-emerald font-black text-3xl mb-1">100%</div>
              <div className="text-gray-400 text-xs font-bold uppercase">De controle sobre seu destino</div>
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
        subtitle="Imagine sua vida daqui 90 dias" 
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

const Bonus = () => (
  <section className="py-24 px-6 overflow-hidden">
    <div className="max-w-6xl mx-auto">
      <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald/10 border border-emerald/20 text-emerald mb-8 block mx-auto text-sm font-bold uppercase">
        <Gift size={16} /> Bônus Exclusivos
      </div>
      <SectionTitle title="O Ecossistema Completo de Transformação" />
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {[
          { price: "R$ 97", title: "Dashboard de Acompanhamento", desc: "Visualize sua evolução financeira em tempo real com gráficos intuitivos.", icon: <Layout /> },
          { price: "R$ 47", title: "Guia: 50 Ideias de Renda Extra", desc: "Negócios validados para começar ainda essa semana e aumentar sua renda.", icon: <TrendingUp /> },
          { price: "R$ 37", title: "E-book: Mentalidade Financeira", desc: "Reprograme sua mente para atrair e manter dinheiro.", icon: <Brain /> },
          { price: "R$ 27", title: "Planner de Bolso Imprimível", desc: "Leve seu controle financeiro para qualquer lugar.", icon: <Smartphone /> },
          { price: "R$ 97", title: "Acesso à Comunidade VIP", desc: "Grupo exclusivo de suporte e networking com outros membros.", icon: <Users /> }
        ].map((item, i) => (
          <div key={i} className="glass p-8 rounded-[2rem] relative group border-white/5 overflow-hidden">
            <div className="absolute top-0 right-0 p-4">
              <span className="text-red-500 font-bold line-through text-xs mr-2">{item.price}</span>
              <span className="text-emerald font-black text-xs px-2 py-1 bg-emerald/10 rounded">GRÁTIS</span>
            </div>
            <div className="mb-6 text-emerald group-hover:scale-110 transition-transform w-fit">{item.icon}</div>
            <h4 className="text-white font-bold text-lg mb-3">{item.title}</h4>
            <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
          </div>
        ))}
        
        <div className="lg:col-span-1 bg-emerald p-8 rounded-[2.5rem] flex flex-col items-center justify-center text-center text-black shadow-[0_0_50px_-10px_rgba(16,185,129,0.5)]">
          <p className="font-bold uppercase tracking-widest text-xs mb-3">Valor total dos bônus:</p>
          <p className="text-4xl font-black line-through opacity-40 mb-1">R$ 305</p>
          <p className="text-7xl font-black mb-4 leading-none tracking-tighter">GRÁTIS</p>
          <div className="h-px w-full bg-black/10 my-4"></div>
          <p className="text-[10px] font-black uppercase tracking-widest opacity-80">* Apenas para os próximos 50 inscritos</p>
        </div>
      </div>
    </div>
  </section>
);

const Pricing = () => (
  <section id="pricing" className="py-24 px-6 relative">
    <div className="absolute top-0 left-0 w-full h-full bg-emerald/5 -z-10"></div>
    <div className="max-w-6xl mx-auto">
      <SectionTitle 
        title="Oferta Especial" 
        subtitle="Escolha o seu plano de blindagem" 
      />
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        {/* Essencial */}
        <div className="glass p-10 rounded-[2.5rem] flex flex-col border-white/10">
          <h3 className="text-2xl font-bold text-white mb-2">Plano Essencial</h3>
          <p className="text-gray-400 text-sm mb-8">Tudo que você precisa para começar</p>
          
          <div className="mb-8">
            <p className="text-gray-500 line-through font-bold mb-1">R$ 197</p>
            <div className="flex items-baseline gap-2">
              <span className="text-gray-400 font-bold">R$</span>
              <span className="text-6xl font-black text-white">27,90</span>
            </div>
            <p className="text-emerald text-xs font-bold mt-2 uppercase tracking-widest">Pagamento único</p>
          </div>
          
          <div className="space-y-4 mb-10 flex-1">
            {[
              "Sistema de Blindagem Completo",
              "Planilha Financeira Automatizada",
              "Guia de Controle de Impulsos",
              "Acesso vitalício"
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-3 text-sm text-gray-300">
                <CheckCircle2 className="text-emerald shrink-0" size={16} />
                <span>{item}</span>
              </div>
            ))}
          </div>
          
          <a 
            href="https://pay.cakto.com.br/i5e8bkv_691332"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full py-4 bg-white/5 hover:bg-white/10 text-white font-bold rounded-2xl transition-all border border-white/10 uppercase tracking-widest text-sm text-center"
          >
            Começar Agora
          </a>
        </div>
        
        {/* Completo */}
        <div className="gradient-border p-10 flex flex-col relative scale-105 shadow-2xl shadow-emerald/10">
          <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-emerald text-black text-[10px] font-black px-4 py-1 rounded-full uppercase tracking-widest">Mais Popular</div>
          <h3 className="text-2xl font-bold text-white mb-2">Plano Completo</h3>
          <p className="text-gray-400 text-sm mb-8">Sistema + Todos os Bônus</p>
          
          <div className="mb-8">
            <div className="flex items-center gap-3 mb-1">
              <p className="text-gray-500 line-through font-bold">R$ 497</p>
              <span className="bg-red-500/20 text-red-500 text-[10px] font-black px-2 py-0.5 rounded">-80%</span>
            </div>
            <div className="flex items-baseline gap-2">
              <span className="text-gray-400 font-bold">R$</span>
              <span className="text-6xl font-black text-emerald">37,90</span>
            </div>
            <p className="text-emerald text-xs font-bold mt-2 uppercase tracking-widest">Pagamento único</p>
          </div>
          
          <div className="space-y-4 mb-10 flex-1">
            {[
              "Tudo do Plano Essencial",
              "Dashboard de Acompanhamento",
              "50 Ideias de Renda Extra",
              "E-book Mentalidade Financeira",
              "Planner de Bolso Imprimível",
              "Comunidade VIP Exclusiva",
              "Suporte prioritário"
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-3 text-sm text-gray-300">
                <CheckCircle2 className="text-emerald shrink-0" size={16} />
                <span className={i < 1 ? 'font-bold text-white' : ''}>{item}</span>
              </div>
            ))}
          </div>
          
          <a 
            href="https://pay.cakto.com.br/i5e8bkv_691332"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full py-5 bg-emerald text-black font-black rounded-2xl transition-all shadow-lg shadow-emerald/20 hover:scale-[1.02] active:scale-95 uppercase tracking-widest text-center"
          >
            QUERO O PLANO COMPLETO
          </a>
        </div>
      </div>
      
      <div className="mt-16 flex flex-wrap justify-center gap-8 text-gray-500 text-xs font-bold uppercase tracking-widest">
        <div className="flex items-center gap-2"><Lock size={14} /> Compra 100% Segura</div>
        <div className="flex items-center gap-2"><Zap size={14} /> Acesso Imediato</div>
        <div className="flex items-center gap-2"><Shield size={14} /> 7 Dias de Garantia</div>
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
          <span className="text-6xl font-black text-emerald">7</span>
          <span className="text-xs font-bold text-gray-400 uppercase tracking-tighter">DIAS</span>
        </div>
      </div>
      <div>
        <h3 className="text-3xl font-heading font-black text-white mb-6 uppercase tracking-tight">Garantia Incondicional de 7 Dias</h3>
        <p className="text-gray-400 text-lg leading-relaxed mb-6">
          Sua satisfação é nossa prioridade. Se por qualquer motivo você não ficar 100% satisfeito com o Sistema de Blindagem 2026, basta enviar um email dentro de 7 dias e devolvemos todo o seu investimento. Sem perguntas. Sem burocracia.
        </p>
        <div className="flex flex-wrap justify-center md:justify-start gap-6">
          <div className="flex items-center gap-2 text-emerald font-bold text-sm"><CheckCircle2 size={16} /> 7 dias para testar</div>
          <div className="flex items-center gap-2 text-emerald font-bold text-sm"><CheckCircle2 size={16} /> Reembolso integral</div>
          <div className="flex items-center gap-2 text-emerald font-bold text-sm"><CheckCircle2 size={16} /> Risco zero</div>
        </div>
      </div>
    </div>
  </section>
);

const FAQItem = ({ question, answer }: { question: string, answer: string }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="border-b border-white/5 last:border-0">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-6 flex items-center justify-between text-left hover:text-emerald transition-colors focus:outline-none"
      >
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
      <SectionTitle title="Perguntas Frequentes" subtitle="Ainda tem dúvidas? Confira as respostas para as perguntas mais comuns." />
      <div className="glass px-10 rounded-[2.5rem] border-white/5">
        {[
          { q: "O Sistema de Blindagem funciona mesmo para quem está endividado?", a: "Sim! Este é o melhor momento para começar. O sistema ajuda a identificar vazamentos, priorizar dívidas com inteligência e criar um plano real para sair do vermelho." },
          { q: "Preciso ter conhecimento em planilhas ou tecnologia?", a: "Não. A planilha é 100% automatizada e o sistema foi pensado para quem não tem tempo a perder. Se você sabe abrir um site, você sabe usar o Protocolo Resgate." },
          { q: "Quanto tempo leva para ver resultados?", a: "Os primeiros resultados são visíveis em 30 dias: você terá clareza total, o fim das compras impulsivas e os primeiros valores sobrando no saldo." },
          { q: "O acesso é vitalício?", a: "Sim. Uma vez adquirido, o sistema e todas as suas atualizações futuras são seus para sempre." },
          { q: "Como funciona a garantia?", a: "Basta nos enviar um e-mail em até 7 dias após a compra. Sem justificativas necessárias, estornamos 100% do valor pago direto no seu cartão ou via PIX." },
          { q: "Posso acessar pelo celular?", a: "Com certeza. O sistema foi desenvolvido para ser totalmente responsivo, funcionando perfeitamente em smartphones, tablets e computadores." },
          { q: "Recebo suporte se tiver dúvidas?", a: "Sim, temos uma equipe de suporte dedicada e uma comunidade VIP onde você pode tirar dúvidas e interagir com outros membros." },
          { q: "O sistema serve para qualquer faixa de renda?", a: "Sim. O método de blindagem financeira é universal e se adapta tanto a quem ganha um salário mínimo quanto a quem tem altos rendimentos." }
        ].map((item, i) => (
          <FAQItem key={i} question={item.q} answer={item.a} />
        ))}
      </div>
    </div>
  </section>
);

const LastChance = () => (
  <section className="py-24 px-6 text-center relative overflow-hidden">
    <div className="absolute inset-0 bg-emerald/5 -z-10"></div>
    <div className="max-w-4xl mx-auto">
      <SectionTitle 
        title="Pronto para blindar suas finanças?" 
        subtitle="Não deixe para amanhã a decisão que pode mudar sua vida financeira para sempre. O preço promocional é por tempo limitado." 
      />
      <CTAButton text="QUERO GARANTIR MINHA VAGA" className="w-full md:w-auto" />
      <div className="mt-10 flex flex-wrap justify-center gap-6 text-xs font-bold text-gray-500 uppercase tracking-widest">
        <span className="flex items-center gap-1">✓ Acesso imediato</span>
        <span className="flex items-center gap-1">✓ Garantia de 7 dias</span>
        <span className="flex items-center gap-1">✓ Pagamento seguro</span>
      </div>
    </div>
  </section>
);

const Footer = () => (
  <footer className="py-16 px-6 border-t border-white/5 bg-graphite">
    <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-10">
      <div className="text-center md:text-left">
        <div className="flex items-center justify-center md:justify-start gap-2 text-white font-black text-xl mb-4 tracking-tighter">
          <Shield size={24} className="text-emerald" /> PROTOCOLO RESGATE 2026
        </div>
        <p className="text-gray-500 text-sm">© 2024 Protocolo Resgate. Todos os direitos reservados.</p>
      </div>
      
      <div className="flex gap-8 text-gray-400 text-sm font-medium">
        <a href="#" className="hover:text-emerald transition-colors">Privacidade</a>
        <a href="#" className="hover:text-emerald transition-colors">Termos</a>
        <a href="#" className="hover:text-emerald transition-colors">Suporte</a>
      </div>
      
      <div className="flex items-center gap-4 grayscale opacity-40">
        <img src="https://upload.wikimedia.org/wikipedia/commons/b/b5/PayPal.svg" alt="Paypal" className="h-4" />
        <img src="https://upload.wikimedia.org/wikipedia/commons/5/5e/Visa_Inc._logo.svg" alt="Visa" className="h-4" />
        <img src="https://upload.wikimedia.org/wikipedia/commons/2/2a/Mastercard-logo.svg" alt="Mastercard" className="h-6" />
      </div>
    </div>
    <div className="max-w-3xl mx-auto mt-12 text-center">
      <p className="text-[10px] text-gray-600 uppercase tracking-widest leading-relaxed">
        AVISO LEGAL: Este site não faz parte do Facebook ou Google. Além disso, este site não é endossado pelo Facebook ou Google de forma alguma. Facebook e Google são marcas comerciais de suas respectivas empresas. Resultados podem variar de pessoa para pessoa.
      </p>
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
      <Bonus />
      <Pricing />
      <Guarantee />
      <FAQ />
      <LastChance />
      <Footer />
    </div>
  );
}
