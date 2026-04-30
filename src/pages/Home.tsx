import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  Shield,
  MapPin,
  AlertCircle,
  BarChart3,
  Zap,
  CheckCircle2,
  Play,
  Linkedin,
  Twitter,
  Instagram,
  Brain,
  TrendingUp,
} from "lucide-react";
import { motion } from "motion/react";

export default function Home() {
  const handleGetStarted = () => {
    const element = document.getElementById("solucion");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const stats = [
    { value: "30%", label: "Menos Costos" },
    { value: "24/7", label: "Monitoreo IA" },
    { value: "500+", label: "Guardias Activos" },
    { value: "99.9%", label: "Uptime Seguro" },
  ];

  const features = [
    {
      icon: <MapPin className="w-8 h-8" />,
      title: "CONTROL EN TIEMPO REAL",
      description: "Garantiza la llegada exacta y el estado de cada guardia mediante automatización avanzada.",
      code: "GEO_LOC_TRK",
    },
    {
      icon: <Brain className="w-8 h-8" />,
      title: "IA Predictiva",
      description: "Nuestro motor de IA permite tener el sistema funcionando 24/7",
      code: "RISK_AI_MOD",
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Analítica Avanzada",
      description: "Reportes automáticos de cumplimiento para auditorías instantáneas y toma de decisiones.",
      code: "INTEL_REP",
    },
  ];

  const plans = [
    {
      name: "Starter",
      price: "$99",
      features: ["Hasta 10 Guardias", "Dashboard Básico", "Check-ins via App"],
      excluded: ["IA Predictiva"],
      cta: "Seleccionar",
      featured: false,
    },
    {
      name: "Professional",
      price: "$299",
      features: ["Hasta 50 Guardias", "Mapa Real-Time Pro", "IA Análisis de Patrones", "Soporte Prioritario"],
      cta: "Seleccionar",
      featured: true,
    },
    {
      name: "Enterprise",
      price: "Custom",
      features: ["Guardias Ilimitados", "Integración API Custom", "Servidor Dedicado", "Account Manager"],
      cta: "Contactar Ventas",
      featured: false,
    },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-primary/30 relative overflow-x-hidden">
      {/* Tactical Grid Background */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 overflow-hidden">
          <img 
            src="https://images.unsplash.com/photo-1506318137071-a8e063b4bcc0?auto=format&fit=crop&q=80&w=2000" 
            alt="Operational Grid"
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover opacity-10 grayscale brightness-[0.3]"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/60 to-background" />
        <div className="absolute inset-0 military-grid" />
        <div className="scanline" />
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 glass-tactical border-b border-primary/20 py-3 md:py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex justify-between items-center">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center gap-3"
          >
            <div className="w-12 h-12 flex items-center justify-center">
              <img 
                src="AppGuard.png" 
                alt="AppGuard Logo" 
                className="w-full h-full object-contain drop-shadow-lg"
              />
            </div>
            <div className="flex flex-col leading-[0.55] logo-touching">
              <span className="text-xl font-display font-black uppercase text-white tracking-tighter italic">
                CUARTEL
              </span>
              <span className="text-xl font-display font-black uppercase text-transparent bg-clip-text bg-gradient-to-r from-primary to-orange-400 tracking-tighter italic">
                GENERAL
              </span>
            </div>
          </motion.div>
          
          <div className="hidden lg:flex gap-10 text-[9px] font-mono font-black uppercase tracking-[0.4em] text-slate-500">
            <a href="#inicio" className="hover:text-primary transition-colors">INICIO</a>
            <a href="#solucion" className="hover:text-primary transition-colors">OPERATIVO</a>
            <a href="#ia" className="hover:text-primary transition-colors">INTEL_IA</a>
            <a href="#precios" className="hover:text-primary transition-colors">PLANES</a>
          </div>

            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="flex items-center gap-4"
            >
              <Button
                onClick={handleGetStarted}
                className="btn-primary-glow px-3 sm:px-5 py-2 !rounded-none text-[7px] sm:text-[9px] h-auto border-orange-950/20 border-b border-r"
              >
                <span className="sm:hidden">ACCESO</span>
                <span className="hidden sm:inline">ACCESO_SEGURIDAD</span>
              </Button>
            </motion.div>
        </div>
      </nav>

      <main className="relative z-10">
        {/* Hero Section */}
        <section id="inicio" className="pt-40 pb-24 md:pt-52 md:pb-32 px-6 hero-gradient flex items-center min-h-[90vh]">
          <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 lg:gap-24 items-center">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-left z-10"
            >
              <span className="inline-block px-3 py-1 rounded-none bg-primary/20 text-primary text-[8px] font-mono font-bold uppercase tracking-[0.5em] mb-8 border border-primary/30">
                SISTEMA OPERATIVO // VER 4.2.8
              </span>
              <h1 className="font-display font-black leading-[0.95] mb-8 uppercase tracking-tighter">
                <span className="text-[10px] sm:text-base block mb-2 text-white/40 font-heading tracking-[0.3em]">SISTEMA INTEGRAL DE</span>
                <span className="text-3xl sm:text-5xl lg:text-7xl xl:text-9xl text-transparent bg-clip-text bg-gradient-to-r from-primary via-orange-400 to-primary drop-shadow-2xl italic block select-none px-2 overflow-visible leading-[1.1] sm:leading-[1] md:w-[180%] relative z-30 pointer-events-none">
                  CONTROL <br className="hidden lg:block"/> EFECTIVO
                </span>
                <span className="text-[8px] sm:text-xs block mt-4 text-white/20 font-mono tracking-[0.5em]">STABLE_CORE_OPS_V4</span>
              </h1>
              <p className="text-[13px] md:text-sm text-slate-500 mb-10 max-w-sm leading-relaxed font-heading font-light tracking-wide lg:pr-10">
                Arquitectura de comando centralizada para agencias de seguridad privada. Optimización de despliegue y mitigación de riesgos operativos.
              </p>
              <div className="flex flex-col sm:flex-row gap-5">
                <Button
                  onClick={handleGetStarted}
                  className="btn-primary-glow px-8 py-5 !rounded-none text-[8px] flex items-center gap-4 transition-all transform hover:translate-x-2"
                >
                  INICIAR DESPLIEGUE <ArrowRight className="w-4 h-4" />
                </Button>
                <Button
                  variant="outline"
                  className="bg-white/5 hover:bg-white/10 border-white/10 text-white px-8 py-5 rounded-none font-heading font-black uppercase tracking-[0.3em] text-[8px] flex items-center gap-4 transition-all"
                >
                  <Play className="w-3 h-3 fill-primary text-primary" /> DOSSIER_VIDEO
                </Button>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.95, x: 50 }}
              whileInView={{ opacity: 1, scale: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative hidden md:block"
            >
              <div className="absolute -inset-20 bg-primary/10 blur-[100px] rounded-full animate-pulse" />
              <div className="relative glass-tactical overflow-hidden border-2 border-primary/20 shadow-[0_0_50px_rgba(249,115,22,0.2)] aspect-square min-h-[400px] bg-slate-900">
                <img 
                  src="image.jpg" 
                  alt="Centro de Mando Táctico" 
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover brightness-[0.8] contrast-[1.2] hover:brightness-[1.1] transition-all duration-1000" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent pointer-events-none" />
                <div className="absolute top-4 left-4 p-2 bg-black/80 font-mono text-[8px] text-primary border border-primary/20">
                  MONITOREO // CENTRAL_COMMAND
                </div>
              </div>
              
              {/* Float Card (Reducido) */}
              <div className="absolute -bottom-4 -left-4 glass-tactical p-3 border border-primary/40 shadow-2xl backdrop-blur-2xl scale-90 md:scale-100 z-20">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-primary flex items-center justify-center text-black shadow-[0_0_10px_rgba(249,115,22,0.3)]">
                    <Zap className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-[7px] font-mono text-slate-500 uppercase tracking-[0.1em] font-black leading-none mb-1">LATENCIA</p>
                    <p className="font-mono font-black text-primary uppercase text-xs leading-none">0.02ms</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Stats Bar */}
        <section className="py-12 md:py-20 bg-black/60 border-y border-primary/20 relative overflow-hidden">
          <div className="flex w-max animate-scroll">
            {[...stats, ...stats, ...stats, ...stats, ...stats, ...stats, ...stats, ...stats].map((stat, i) => (
              <div 
                key={i}
                className="flex-shrink-0 w-[200px] md:w-[350px] text-left border-l-2 border-primary/30 pl-6 md:pl-8 relative group py-4"
              >
                <div className="absolute -left-[3px] top-0 w-[4px] h-full bg-primary scale-y-0 group-hover:scale-y-100 transition-transform origin-top duration-500" />
                <h3 className="text-3xl sm:text-5xl font-display font-black text-white mb-2 tracking-tighter italic">
                  {stat.value}
                </h3>
                <p className="text-[10px] font-display text-primary uppercase tracking-[0.4em] font-black opacity-80 whitespace-nowrap">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Feature Grid */}
        <section id="solucion" className="py-24 md:py-32 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16 md:mb-24 px-4">
              <span className="text-[9px] font-mono text-primary uppercase tracking-[0.5em] mb-4 block animate-pulse">PROTOCOL_EPSILON_INIT</span>
              <h2 className="text-3xl sm:text-5xl md:text-6xl font-display font-black text-white uppercase tracking-tighter italic leading-[1.1] sm:leading-[1] overflow-visible px-2">
                Capacidades <span className="text-primary">Tácticas</span>
              </h2>
              <div className="w-24 h-0.5 bg-primary mx-auto mt-6"></div>
              <p className="text-sm md:text-base text-slate-400 mt-8 max-w-2xl mx-auto font-heading font-light leading-relaxed tracking-wide">
                Implemente una red de mando descentralizada. Monitoreo constante, alertas automáticas y auditoría en tiempo real sin fallos.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 lg:gap-10">
              {features.map((feature, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="group relative glass-tactical p-8 md:p-12 transition-all hover:bg-primary/5 border-primary/5 hover:border-primary/20"
                >
                  <div className="absolute top-6 right-6 text-[8px] font-mono text-primary opacity-30 group-hover:opacity-100 transition-opacity font-bold">
                    [{feature.code}]
                  </div>
                  <div className="text-primary mb-8 p-4 inline-block bg-primary/5 border border-primary/10 group-hover:scale-110 transition-transform">
                    {feature.icon}
                  </div>
                  <h3 className="text-2xl md:text-3xl font-display font-black italic text-white mb-4 uppercase tracking-tighter group-hover:text-primary transition-colors">
                    {feature.title === "Mapa en Tiempo Real" ? "Control en Tiempo Real" : feature.title}
                  </h3>
                  <p className="text-slate-500 text-xs md:text-sm leading-relaxed font-heading font-light tracking-wide">
                    {feature.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* IA Highlight Section */}
        <section id="ia" className="py-24 md:py-32 bg-black/40 relative border-y border-primary/10">
          <div className="absolute inset-0 bg-gradient-to-r from-accent/5 to-transparent pointer-events-none" />
          <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 lg:gap-24 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative order-2 md:order-1"
            >
              <div className="absolute -inset-10 bg-primary/5 blur-3xl opacity-50" />
              <img 
                src="https://images.unsplash.com/photo-1531844251246-9a1bfaae09fc?auto=format&fit=crop&q=80&w=1000" 
                alt="Tactical Scouting" 
                referrerPolicy="no-referrer"
                className="relative border border-primary/20 grayscale brightness-[0.7] contrast-[1.3] shadow-2xl mask-radial w-full object-cover scale-105" 
              />
              <div className="absolute top-0 left-0 p-4 font-mono text-[8px] text-primary bg-black/90 font-bold tracking-widest border-r border-b border-primary/20">
                SCANNED: ENEMY_ACTIVE
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex-1 text-right order-1 md:order-2"
            >
              <h2 className="text-3xl sm:text-5xl lg:text-7xl xl:text-8xl font-display font-black mb-8 uppercase tracking-tighter leading-[1.1] sm:leading-[1] overflow-visible px-2 text-right w-fit ml-auto">
                INTELIGENCIA <br/>
                <span className="text-primary italic block mt-2 text-3xl sm:text-6xl lg:text-7xl xl:text-8xl">DE CAMPO</span>
              </h2>
              <p className="text-sm md:text-base text-slate-400 mb-10 leading-relaxed font-heading font-light tracking-wide max-w-lg ml-auto">
                Analizamos patrones de conducta táctica en tiempo real. Algoritmos avanzados de detección para mitigar riesgos críticos.
              </p>
              <ul className="space-y-6 mb-12 flex flex-col items-end">
                {[
                  "Biometría de asistencia encriptada.",
                  "Integridad de perímetros dinámicos.",
                  "Análisis de vulnerabilidad asistido."
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-4 text-slate-300 font-heading font-medium tracking-wider justify-end text-right">
                    <span className="text-xs md:text-sm uppercase tracking-wide">{item}</span>
                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                  </li>
                ))}
              </ul>
              <Button 
                variant="outline"
                className="border-2 border-primary text-primary hover:bg-primary hover:text-black rounded-none px-8 py-4 text-[8px] font-heading font-black uppercase tracking-[0.3em] transition-all"
              >
                CONSULTAR PROTOCOLO IA
              </Button>
            </motion.div>
          </div>
        </section>

        <section id="precios" className="py-24 md:py-32 px-6">
          <div className="max-w-7xl mx-auto text-center mb-16 md:mb-24 px-4">
            <h2 className="text-3xl sm:text-5xl md:text-6xl font-display font-black text-white uppercase tracking-tighter italic mb-6 leading-[1.3] py-2">
              Escalabilidad <span className="text-primary">Ops</span>
            </h2>
            <p className="text-slate-500 text-[10px] font-mono uppercase tracking-[0.4em]">Configuraciones de despliegue flexibles.</p>
          </div>
          
          <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8 lg:gap-10 items-start">
            {plans.map((plan, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className={`relative p-8 md:p-12 glass-tactical hover:scale-[1.03] transition-all duration-300 ${plan.featured ? 'border-primary ring-1 ring-primary/50' : 'border-white/5'}`}
              >
                {plan.featured && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-black text-[9px] font-black uppercase py-1 px-4 tracking-[0.3em]">
                    ESTÁNDAR_MIL
                  </div>
                )}
                <h4 className="text-[10px] font-mono font-bold mb-4 uppercase tracking-[0.3em] text-slate-500">{plan.name}</h4>
                <div className="flex items-baseline gap-2 mb-8">
                  <span className="text-3xl md:text-5xl font-display font-black text-white italic">{plan.price}</span>
                  {plan.price !== "Custom" && <span className="text-[8px] font-mono text-slate-500 uppercase tracking-widest">/NODO</span>}
                </div>
                <ul className="text-left space-y-4 md:space-y-6 mb-12 md:mb-16">
                  {plan.features.map((feature, fidx) => (
                    <li key={fidx} className="flex items-center gap-3 md:gap-4 text-[10px] md:text-xs text-slate-300 font-heading font-normal uppercase tracking-wider">
                      <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Button 
                  onClick={handleGetStarted}
                  className={`w-full py-5 md:py-6 rounded-none text-[8px] font-heading font-black tracking-[0.3em] transition-all ${plan.featured ? 'btn-primary-glow' : 'bg-transparent border border-white/10 hover:border-primary text-white'}`}
                >
                  SELECCIONAR_NODO
                </Button>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Final CTA / Footer Map Section Fusion */}
        <footer id="contacto" className="py-24 md:py-32 bg-black border-t border-primary/10 relative overflow-hidden">
          <div className="absolute bottom-0 right-0 w-1/2 h-1/2 bg-primary/5 blur-[150px] pointer-events-none" />
          
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid md:grid-cols-4 gap-12 lg:gap-20 mb-24 md:mb-32">
              <div className="md:col-span-2">
                <div className="flex items-center gap-4 mb-10 md:mb-12">
                  <div className="w-12 h-12 flex items-center justify-center">
                    <img 
                      src="AppGuard.png" 
                      alt="AppGuard Logo" 
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <span className="text-3xl md:text-4xl font-display font-black uppercase tracking-tighter text-primary italic">
                    CUARTEL <span className="text-white">GENERAL</span>
                  </span>
                </div>
                <p className="text-slate-500 text-[10px] md:text-xs leading-relaxed max-w-sm mb-10 md:mb-12 font-mono uppercase tracking-widest">
                  Infraestructura crítica para la gestión descentralizada de activos de seguridad táctica.
                </p>
                <div className="flex gap-6 md:gap-8">
                  {[
                    { icon: <Linkedin className="w-4 h-4 md:w-5 md:h-5" />, href: "#" },
                    { icon: <Twitter className="w-4 h-4 md:w-5 md:h-5" />, href: "#" },
                    { icon: <Instagram className="w-4 h-4 md:w-5 md:h-5" />, href: "#" },
                  ].map((social, i) => (
                    <a 
                      key={i} 
                      href={social.href} 
                      className="w-10 h-10 md:w-12 md:h-12 glass-tactical flex items-center justify-center text-slate-600 hover:text-primary hover:border-primary transition-all duration-300"
                    >
                      {social.icon}
                    </a>
                  ))}
                </div>
              </div>

              <div>
                <h5 className="font-mono font-black mb-8 md:mb-10 uppercase tracking-[0.4em] text-[10px] text-primary">SISTEMAS</h5>
                <ul className="space-y-4 md:space-y-5 text-[9px] md:text-[10px] font-mono text-slate-600 tracking-widest">
                  <li><a href="#" className="hover:text-primary transition-colors uppercase">Nodos_IA</a></li>
                  <li><a href="#" className="hover:text-primary transition-colors uppercase">Cifrado_End2End</a></li>
                  <li><a href="#" className="hover:text-primary transition-colors uppercase">Despliegue_App</a></li>
                  <li><a href="#" className="hover:text-primary transition-colors uppercase">Logs_Sistema</a></li>
                </ul>
              </div>

              <div>
                <h5 className="font-mono font-black mb-8 md:mb-10 uppercase tracking-[0.4em] text-[10px] text-primary">AGENCIA</h5>
                <ul className="space-y-4 md:space-y-5 text-[9px] md:text-[10px] font-mono text-slate-600 tracking-widest">
                  <li><a href="#" className="hover:text-primary transition-colors uppercase">Sobre_Echelon</a></li>
                  <li><a href="#" className="hover:text-primary transition-colors uppercase">Canal_Mando</a></li>
                  <li><a href="#" className="hover:text-primary transition-colors uppercase">Legal_Ops</a></li>
                  <li><a href="#" className="hover:text-primary transition-colors uppercase">Directivas</a></li>
                </ul>
              </div>
            </div>

            <div className="flex flex-col md:flex-row justify-between items-center gap-8 md:gap-10 pt-12 md:pt-16 border-t border-primary/10 text-[9px] md:text-[10px] font-mono text-slate-700 uppercase tracking-[0.5em] text-center md:text-left">
              <p>© 2026 ECHELON_SYSTEMS. CUARTEL_DIGITAL PROTOCOLS_V5.0.</p>
              <div className="flex gap-8 md:gap-16">
                <span className="hidden lg:inline">COORDS: 48.8566° N, 2.3522° E</span>
                <span>STATUS: ENCRYPTED // MISSION_STABLE</span>
              </div>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
}
