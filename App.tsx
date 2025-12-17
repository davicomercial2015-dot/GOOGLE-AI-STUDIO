
import React, { useState, useEffect } from 'react';
import { 
  Shield, 
  ChevronDown, 
  CheckCircle2, 
  AlertCircle, 
  TrendingUp, 
  Lock, 
  Zap, 
  Calendar,
  Gift,
  Star,
  Plus,
  Minus,
  Wallet,
  Brain,
  ArrowRight
} from 'lucide-react';

// --- Utility Components ---

const CTAButton = ({ className = "" }: { className?: string }) => (
  <a 
    href="#pricing"
    className={`inline-flex items-center justify-center px-8 py-4 bg-emerald text-black font-extrabold text-lg rounded-full animate-pulse-custom transition-all hover:scale-105 active:scale-95 ${className}`}
  >
    QUERO MEU ACESSO AGORA <ArrowRight className="ml-2 w-5 h-5" />
  </a>
);

const SectionTitle = ({ title, subtitle, light = false }: { title: string, subtitle?: string, light?: boolean }) => (
  <div className="text-center mb-12 px-4">
    <h2 className={`text-3xl md:text-5xl font-heading font-black mb-4 ${light ? 'text-white' : 'text-white'}`}>
      {title}
    </h2>
    {subtitle && <p className="text-gray-400 text-lg max-w-2xl mx-auto">{subtitle}</p>}
    <div className="w-20 h-1 bg-emerald mx-auto mt-6 rounded-full"></div>
  </div>
);

// --- Sections ---

const HeaderSticky = () => {
  const [today, setToday] = useState('');

  useEffect(() => {
    const date = new Date();
    setToday(date.toLocaleDateString('pt-BR', { day: '2-digit', month: '2-digit' }));
  }, []);

  return (
    <div className="fixed top-0 left-0 w-full z-50 bg-emerald text-black font-bold py-2 text-center text-sm md:text-base px-2 shadow-lg">
      Hoje {today}, é o ÚLTIMO dia para garantir essa OFERTA EXCLUSIVA!
    </div>
  );
};

const Hero = () => (
  <section className="relative pt-32 pb-20 px-6 overflow-hidden">
    {/* Background accents */}
    <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-emerald/10 blur-[120px] rounded-full -mr-64 -mt-64"></div>
    <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-purple-accent/10 blur-[100px] rounded-full -ml-48 -mb-48"></div>

    <div className="max-w-6xl mx-auto flex flex-col items-center text-center">
      <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-emerald/10 border border-emerald/20 text-emerald mb-8 animate-bounce">
        <Shield size={16} />
        <span className="text-xs md:text-sm font-semibold tracking-widest uppercase">Protocolo Resgate 2026</span>
      </div>

      <h1 className="text-4xl md:text-7xl font-heading font-black text-white leading-tight mb-8">
        SISTEMA DE <span className="text-emerald">BLINDAGEM</span> <br />
        TOTAL PARA 2026.
      </h1>

      <div className="relative w-full max-w-5xl mb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="order-2 md:order-1 flex flex-col items-center md:items-start text-center md:text-left">
            <p className="text-lg md:text-2xl text-gray-300 leading-relaxed mb-10 max-w-xl">
              Retome o controle da sua vida financeira e blinde sua mente contra o caos. Pare de ver o seu esforço escorrer pelas mãos e comece a construir sua liberdade real.
            </p>
            <CTAButton />
          </div>
          
          <div className="order-1 md:order-2 relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-emerald to-purple-accent rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
            <img 
              src="https://picsum.photos/seed/dashboard/800/600" 
              alt="Dashboard Inteligente" 
              className="relative rounded-xl shadow-2xl w-full border border-white/10"
            />
            <img 
              src="https://picsum.photos/seed/mobile/300/600" 
              alt="Smartphone App" 
              className="absolute -bottom-10 -right-6 md:-right-10 w-1/3 md:w-40 rounded-3xl border-4 border-black shadow-2xl"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
);

const Identification = () => (
  <section className="py-24 px-6 bg-black/40">
    <div className="max-w-4xl mx-auto">
      <SectionTitle 
        title="O CICLO DO FRACASSO" 
        subtitle="Identifique-se com o padrão que está destruindo suas chances de prosperidade." 
      />
      
      <div className="grid grid-cols-1 gap-6">
        {[
          { icon: <AlertCircle className="text-red-500" />, text: "Você trabalha duro o mês inteiro, mas no dia 10 já não sabe para onde o dinheiro foi." },
          { icon: <AlertCircle className="text-red-500" />, text: "A ansiedade financeira te impede de dormir, sempre preocupado com o 'e se' de amanhã." },
          { icon: <AlertCircle className="text-red-500" />, text: "Impulsos de consumo momentâneos sabotam planos de longo prazo que você jurou cumprir." },
          { icon: <AlertCircle className="text-red-500" />, text: "Você sente que está correndo em uma esteira: faz muito esforço, mas nunca sai do lugar." }
        ].map((item, i) => (
          <div key={i} className="glass p-6 rounded-2xl flex items-start gap-4 transition-transform hover:translate-x-2">
            <div className="mt-1">{item.icon}</div>
            <p className="text-lg text-gray-300">{item.text}</p>
          </div>
        ))}
      </div>
      
      <div className="mt-12 text-center italic text-emerald/80 font-semibold">
        "O problema não é quanto você ganha, mas como você é blindado para manter e multiplicar."
      </div>
    </div>
  </section>
);

const Solution = () => (
  <section className="py-24 px-6">
    <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">
      <div className="flex-1">
        <div className="inline-block px-3 py-1 bg-purple-accent/20 text-purple-accent text-xs font-bold rounded-md mb-4 uppercase tracking-wider">A Solução Definitiva</div>
        <h2 className="text-4xl md:text-5xl font-heading font-black text-white mb-6">
          CONHEÇA O <span className="text-emerald">PROTOCOLO RESGATE</span>.
        </h2>
        <p className="text-xl text-gray-400 mb-8 leading-relaxed">
          Nós desenvolvemos um ecossistema de blindagem que atua em duas frentes: <strong>Sistemas Práticos</strong> e <strong>Psicologia de Defesa</strong>. Não é apenas uma planilha, é um novo sistema operacional para sua vida em 2026.
        </p>
        <div className="space-y-4 mb-10">
          {[
            "Blindagem Automática contra impulsos de gastos.",
            "Dashboards de controle em tempo real (Clareza absoluta).",
            "Mecanismos de foco mental para produtividade agressiva.",
            "Estratégias de geração de valor para 2026."
          ].map((item, i) => (
            <div key={i} className="flex items-center gap-3">
              <CheckCircle2 className="text-emerald w-6 h-6 shrink-0" />
              <span className="text-gray-200 font-medium">{item}</span>
            </div>
          ))}
        </div>
        <CTAButton />
      </div>
      <div className="flex-1 relative">
        <div className="aspect-square bg-gradient-to-br from-emerald/20 to-purple-accent/20 rounded-full blur-[80px] absolute inset-0 -z-10"></div>
        <img 
          src="https://picsum.photos/seed/resgate/600/600" 
          alt="Protocolo Resgate 2026" 
          className="rounded-2xl border border-white/10 shadow-2xl transform rotate-3 hover:rotate-0 transition-transform duration-500" 
        />
      </div>
    </div>
  </section>
);

const Benefits = () => (
  <section className="py-24 px-6 bg-black/20">
    <div className="max-w-6xl mx-auto">
      <SectionTitle 
        title="A LIBERDADE É UMA ESCOLHA" 
        subtitle="O que acontece quando você instala o Protocolo no seu dia a dia?" 
      />
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {[
          { 
            icon: <Wallet className="w-10 h-10 text-emerald" />, 
            title: "Paz Financeira", 
            description: "Saiba exatamente para onde cada centavo está indo e tenha a segurança de um fundo de blindagem crescendo." 
          },
          { 
            icon: <Brain className="w-10 h-10 text-purple-accent" />, 
            title: "Foco Inabalável", 
            description: "Diga não ao que te atrasa sem esforço. Sua mente estará treinada para priorizar o que realmente importa." 
          },
          { 
            icon: <TrendingUp className="w-10 h-10 text-emerald" />, 
            title: "Crescimento Exponencial", 
            description: "Com clareza e controle, você identifica oportunidades de renda que outros ignoram." 
          }
        ].map((item, i) => (
          <div key={i} className="glass p-10 rounded-3xl hover:border-emerald/30 transition-all group">
            <div className="mb-6 group-hover:scale-110 transition-transform">{item.icon}</div>
            <h3 className="text-2xl font-bold text-white mb-4">{item.title}</h3>
            <p className="text-gray-400 leading-relaxed">{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const Bonus = () => (
  <section className="py-24 px-6">
    <div className="max-w-5xl mx-auto">
      <div className="text-center mb-12">
        <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-emerald/10 border border-emerald/20 text-emerald mb-4">
          <Gift size={16} />
          <span className="text-xs font-bold uppercase tracking-widest">Aceleração de Resultados</span>
        </div>
        <h2 className="text-3xl md:text-5xl font-heading font-black text-white">O ECOSSISTEMA COMPLETO</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {[
          { title: "Planos de Ação 24h", desc: "O que fazer no primeiro dia para estancar a sangria financeira." },
          { title: "Comunidade Blindada", desc: "Acesso a um grupo de elite focado no mesmo objetivo de 2026." },
          { title: "Mapas Mentais de Execução", desc: "Resumos visuais para quem não tem tempo a perder." },
          { title: "Suporte VIP", desc: "Tire suas dúvidas diretamente com quem construiu o método." }
        ].map((item, i) => (
          <div key={i} className="flex items-center gap-4 p-6 rounded-2xl border border-white/5 bg-white/[0.02]">
            <div className="bg-emerald/20 p-3 rounded-lg">
              <Plus className="text-emerald w-6 h-6" />
            </div>
            <div>
              <h4 className="text-white font-bold text-lg">{item.title}</h4>
              <p className="text-gray-400 text-sm">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const Pricing = () => (
  <section id="pricing" className="py-24 px-6 bg-emerald/5 relative overflow-hidden">
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-emerald/10 blur-[150px] rounded-full"></div>
    
    <div className="max-w-4xl mx-auto relative z-10">
      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-6xl font-heading font-black text-white mb-4">FAÇA O SEU RESGATE.</h2>
        <p className="text-gray-400 text-lg">Escolha o seu nível de compromisso com o futuro.</p>
      </div>

      <div className="glass max-w-lg mx-auto rounded-[2rem] p-8 md:p-12 border-emerald/30 shadow-2xl relative">
        <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-emerald text-black text-xs font-black px-4 py-1 rounded-full uppercase tracking-widest">Mais Vendido</div>
        
        <div className="text-center mb-8">
          <h3 className="text-2xl font-bold text-white mb-2">Protocolo Completo 2026</h3>
          <div className="flex items-center justify-center gap-2">
            <span className="text-gray-500 line-through text-lg">R$ 497,00</span>
            <span className="bg-emerald/20 text-emerald text-xs font-bold px-2 py-1 rounded">ECONOMIZE 80%</span>
          </div>
          <div className="mt-4">
            <span className="text-gray-400 text-sm">12x de</span>
            <div className="text-5xl md:text-6xl font-black text-white">R$ 19,70</div>
            <span className="text-gray-400 text-sm block mt-2">ou R$ 197,00 à vista</span>
          </div>
        </div>

        <div className="space-y-4 mb-10">
          {[
            "Sistema de Blindagem 2026 Completo",
            "Dashboard Inteligente Integrado",
            "Guia de Controle de Impulsos",
            "Planner de Organização de Bolso",
            "Bônus: Ideias de Renda Extra 2026",
            "Acesso Vitalício + Atualizações"
          ].map((item, i) => (
            <div key={i} className="flex items-center gap-3">
              <CheckCircle2 className="text-emerald w-5 h-5 shrink-0" />
              <span className="text-gray-300 text-sm md:text-base">{item}</span>
            </div>
          ))}
        </div>

        <button className="w-full py-5 bg-emerald text-black font-black text-xl rounded-2xl hover:scale-[1.02] active:scale-95 transition-all shadow-xl shadow-emerald/20">
          GARANTIR MINHA VAGA AGORA
        </button>
        
        <div className="mt-6 flex items-center justify-center gap-4 text-gray-500 text-xs uppercase tracking-tighter">
          <div className="flex items-center gap-1"><Lock size={12} /> Compra Segura</div>
          <div className="flex items-center gap-1"><Zap size={12} /> Acesso Imediato</div>
        </div>
      </div>
    </div>
  </section>
);

const Guarantee = () => (
  <section className="py-20 px-6">
    <div className="max-w-4xl mx-auto glass p-8 md:p-12 rounded-3xl border-purple-accent/20 flex flex-col md:flex-row items-center gap-10">
      <div className="w-32 h-32 md:w-48 md:h-48 shrink-0 relative">
        <div className="absolute inset-0 bg-emerald/20 blur-2xl rounded-full"></div>
        <Shield className="w-full h-full text-emerald relative z-10" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-emerald font-black text-2xl">7</div>
      </div>
      <div>
        <h3 className="text-3xl font-heading font-black text-white mb-4 uppercase">GARANTIA INCONDICIONAL</h3>
        <p className="text-gray-400 text-lg leading-relaxed">
          Nós assumimos todo o risco. Se em <strong>7 dias</strong> você sentir que o Protocolo Resgate não é para você, basta um único e-mail e devolvemos 100% do seu dinheiro. Sem perguntas, sem letras miúdas. Blindagem real ou seu dinheiro de volta.
        </p>
      </div>
    </div>
  </section>
);

// Explicitly defining props type including optional key to satisfy TypeScript when mapping
const FAQItem = ({ question, answer }: { question: string, answer: string, key?: React.Key }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="border-b border-white/5 last:border-0">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-6 flex items-center justify-between text-left hover:text-emerald transition-colors"
      >
        <span className="text-lg font-bold pr-8">{question}</span>
        {isOpen ? <Minus className="shrink-0" /> : <Plus className="shrink-0" />}
      </button>
      <div className={`overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-96 pb-6' : 'max-h-0'}`}>
        <p className="text-gray-400 leading-relaxed">{answer}</p>
      </div>
    </div>
  );
};

const FAQ = () => (
  <section className="py-24 px-6 bg-black/30">
    <div className="max-w-3xl mx-auto">
      <SectionTitle title="DÚVIDAS FREQUENTES" />
      <div className="glass px-8 rounded-3xl">
        {[
          { q: "Preciso ter conhecimento avançado em finanças?", a: "Absolutamente não. O protocolo foi desenhado para ser intuitivo e direto ao ponto. Do iniciante ao avançado, qualquer pessoa consegue aplicar." },
          { q: "O acesso é imediato?", a: "Sim! Assim que o seu pagamento for confirmado, você receberá os dados de acesso no seu e-mail cadastrado instantaneamente." },
          { q: "Funciona para quem está endividado?", a: "Este é o melhor momento para começar. O protocolo contém as ferramentas exatas para estancar dívidas e começar o processo de resgate." },
          { q: "Quanto tempo preciso dedicar por dia?", a: "Apenas 15 minutos são suficientes para manter o sistema atualizado após a configuração inicial (que leva cerca de 1 hora)." }
        ].map((item, i) => (
          <FAQItem key={i} question={item.q} answer={item.a} />
        ))}
      </div>
    </div>
  </section>
);

const Footer = () => (
  <footer className="py-12 px-6 border-t border-white/5 text-center text-gray-500 text-sm">
    <div className="max-w-6xl mx-auto">
      <div className="flex items-center justify-center gap-2 mb-6 text-white font-bold tracking-widest text-lg">
        <Shield size={20} className="text-emerald" /> PROTOCOLO RESGATE 2026
      </div>
      <p className="mb-4">© 2024 Protocolo Resgate. Todos os direitos reservados.</p>
      <div className="flex flex-wrap justify-center gap-6 mb-8">
        <a href="#" className="hover:text-emerald">Termos de Uso</a>
        <a href="#" className="hover:text-emerald">Privacidade</a>
        <a href="#" className="hover:text-emerald">Contato</a>
      </div>
      <p className="max-w-3xl mx-auto opacity-40">
        Este produto não garante resultados financeiros específicos. O sucesso depende da implementação rigorosa do protocolo e do contexto individual de cada usuário.
      </p>
    </div>
  </footer>
);

export default function App() {
  return (
    <div className="min-h-screen">
      <HeaderSticky />
      <Hero />
      <Identification />
      <Solution />
      <Benefits />
      <Bonus />
      <Pricing />
      <Guarantee />
      <FAQ />
      <Footer />
    </div>
  );
}
