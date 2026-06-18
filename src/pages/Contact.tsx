import { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Clock, 
  Shield, 
  ArrowRight, 
  CheckCircle, 
  HelpCircle, 
  ChevronDown, 
  Sparkles,
  Award,
  Users,
  Eye,
  Zap,
  Layout,
  Search,
  Megaphone,
  Code,
  Cloud,
  ArrowUpRight
} from 'lucide-react';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { db } from '../lib/firebase';

const projectTypes = [
  { value: "creation", label: "Création de site internet" },
  { value: "refonte", label: "Refonte de site internet" },
  { value: "seo", label: "Référencement SEO" },
  { value: "google-ads", label: "Google Ads & génération de leads" },
  { value: "app-sur-mesure", label: "Application web sur mesure" },
  { value: "cloud-auto", label: "Cloud & automatisation" },
  { value: "maintenance", label: "Maintenance / hébergement" },
  { value: "audit", label: "Audit digital" },
  { value: "autre", label: "Autre demande" }
];

const budgets = [
  { value: "under-1k", label: "Moins de 1 000 €" },
  { value: "1k-2.5k", label: "1 000 € à 2 500 €" },
  { value: "2.5k-5k", label: "2 500 € à 5 000 €" },
  { value: "5k-10k", label: "5 000 € à 10 000 €" },
  { value: "over-10k", label: "Plus de 10 000 €" },
  { value: "tbd", label: "À définir ensemble" }
];

const timelines = [
  { value: "asap", label: "Dès que possible" },
  { value: "month", label: "Dans le mois" },
  { value: "2-3-months", label: "Dans les 2 à 3 mois" },
  { value: "medium-team", label: "Projet à moyen terme" },
  { value: "tbd", label: "Je ne sais pas encore" }
];

const categories = [
  { icon: Layout, title: "Création de site professionnel", desc: "Un site vitrine moderne, optimisé pour capter des prospects locaux et valoriser votre savoir-faire." },
  { icon: Search, title: "SEO et visibilité Google", desc: "Soyez le premier choix des internautes dans votre zone géographique sur les requêtes stratégiques." },
  { icon: Megaphone, title: "Google Ads & leads", desc: "Campagnes d'acquisition ciblées sur des intentions d'achats pour générer des appels entrants concrets." },
  { icon: Code, title: "Application web sur mesure", desc: "Un espace client, une plateforme ou un outil interne pour digitaliser vos processus administratifs." },
  { icon: Cloud, title: "Automatisation métier", desc: "Connectez vos outils métier (CRM, emails, devis) et éradiquez les tâches répétitives sans valeur." },
  { icon: Sparkles, title: "Audit ou refonte digitale", desc: "Analysez vos performances de conversion rattachées à votre site pour identifier les freins d'acquisition." }
];

const steps = [
  { num: "01", title: "Réception de votre demande", desc: "Votre message est enregistré de manière sécurisée et relu par notre équipe technique." },
  { num: "02", title: "Analyse rapide de votre besoin", desc: "Nous passons en revue votre écosystème actuel (SEO, UX, rapidité) pour cerner les priorités." },
  { num: "03", title: "Échange ou réponse personnalisée", desc: "Nous convenons d'un court entretien téléphonique de 15 minutes pour valider les contours." },
  { num: "04", title: "Proposition adaptée", desc: "Nous vous envoyons une offre claire, modulaire et alignée avec vos objectifs financiers et de timing." }
];

const faqs = [
  { q: "Puis-je demander un simple avis sur mon site actuel ?", a: "Bien sûr ! Nous réalisons de courts audits pour vous montrer où se situent les principales pertes de prospects et comment y remédier rapidement." },
  { q: "Proposez-vous un audit gratuit ?", a: "Oui, notre premier entretien d'analyse et de cadrage est 100% gratuit et sans engagement. Il nous permet de définir les priorités de votre projet." },
  { q: "Travaillez-vous avec les petites entreprises et artisans ?", a: "C'est notre cœur de cible ! Nous adaptons nos solutions techniques et budgétaires aux besoins des artisans, commerçants locaux et dirigeants de TPE/PME." },
  { q: "Puis-je vous contacter pour un projet encore flou ?", a: "Absolument. Nous vous aidons à structurer votre cahier des charges en éliminant le superflu pour démarrer avec les bases indispensables au projet." },
  { q: "Pouvez-vous reprendre un site existant ?", a: "Oui, après une analyse de l'existant. Si le site est trop ancien ou instable, nous pourrons vous suggérer une refonte performante pour éviter des coûts logistiques récurrents." },
  { q: "Intervenez-vous seulement en Île-de-France ?", a: "Bien que basés dans le Val-de-Marne et intervenant à Paris et en Île-de-France, nous accompagnons de nombreuses structures à distance à travers toute la France." },
  { q: "Pouvez-vous accompagner un projet web plus technique ?", a: "Absolument, notre maîtrise des architectures cloud modernes (Firebase, Google Cloud, AWS, APIs tierces) nous permet de concevoir des systèmes et portails clients complexes." },
  { q: "Mes informations sont-elles confidentielles ?", a: "Oui, la confidentialité est absolue. Vos données de contact et de projet sont cryptées et exclusivement destinées à notre échange." }
];

export function Contact() {
  const formRef = useRef<HTMLDivElement>(null);

  // Form states
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [company, setCompany] = useState('');
  const [website, setWebsite] = useState('');
  const [projectType, setProjectType] = useState('');
  const [budget, setBudget] = useState('');
  const [timeline, setTimeline] = useState('');
  const [message, setMessage] = useState('');
  const [rgpdConsent, setRgpdConsent] = useState(false);
  
  // Honeypot spam protection state
  const [honeypot, setHoneypot] = useState('');

  // Status states
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  // FAQ state
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const scrollToForm = () => {
    formRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Check validation
    if (!fullName || !email || !projectType || !message) {
      setSubmitStatus('error');
      setErrorMessage("Veuillez remplir tous les champs obligatoires (Nom complet, Email, Type de projet, Message).");
      return;
    }

    if (!rgpdConsent) {
      setSubmitStatus('error');
      setErrorMessage("Vous devez accepter l'utilisation de vos informations pour que nous puissions vous recontacter.");
      return;
    }

    // Trigger honeypot spam guard
    if (honeypot.trim() !== '') {
      // Fake success for bots
      setIsSubmitting(true);
      setTimeout(() => {
        setIsSubmitting(false);
        setSubmitStatus('success');
      }, 800);
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus('idle');
    setErrorMessage('');

    try {
      const leadData = {
        fullName,
        email,
        phone: phone || null,
        company: company || null,
        website: website || null,
        projectType,
        budget: budget || null,
        timeline: timeline || null,
        message,
        rgpdConsent,
        status: "new" as const,
        source: "contact-page" as const,
        createdAt: serverTimestamp(),
        userAgent: typeof window !== 'undefined' ? window.navigator.userAgent : undefined
      };

      // Store in Firebase Firestore collection 'leads'
      await addDoc(collection(db, 'leads'), leadData);

      setSubmitStatus('success');
      // Reset form variables
      setFullName('');
      setEmail('');
      setPhone('');
      setCompany('');
      setWebsite('');
      setProjectType('');
      setBudget('');
      setTimeline('');
      setMessage('');
      setRgpdConsent(false);
    } catch (err: any) {
      console.error("Firestore submission error: ", err);
      setSubmitStatus('error');
      setErrorMessage("Une erreur technique est survenue lors de l'enregistrement. Veuillez nous contacter directement par email ou réessayer.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="flex flex-col bg-slate-50 min-h-screen">
      
      {/* 1. Hero Section */}
      <section className="relative py-24 md:py-32 overflow-hidden bg-navy-900 text-white">
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))] opacity-10"></div>
        <div className="container relative mx-auto px-6 grid md:grid-cols-12 gap-12 items-center">
          
          <motion.div 
            initial={{ opacity: 0, x: -25 }}
            animate={{ opacity: 1, x: 0 }}
            className="md:col-span-7 space-y-8"
          >
            <span className="inline-block text-electric-blue font-bold tracking-wider uppercase text-xs px-4 py-1.5 rounded-full bg-electric-blue/10 border border-electric-blue/20">
              Contact VSW Digital
            </span>
            <h1 className="text-5xl md:text-7xl font-display font-bold leading-[1.1] text-white">
              Parlons de votre <span className="text-transparent bg-clip-text bg-gradient-to-r from-electric-blue to-cyan-400">projet digital</span>
            </h1>
            <p className="text-xl text-white/70 leading-relaxed max-w-2xl">
              Que vous ayez besoin d'un nouveau site vitrine, d'un meilleur référencement de votre activité, de campagnes Google Ads ciblées ou d'une automatisation cloud sur mesure, nous concevons des outils dimensionnés pour votre croissance.
            </p>
            
            <div className="grid sm:grid-cols-2 gap-4 text-white/80 pt-2">
              <div className="flex items-center gap-3">
                <div className="p-2.5 bg-white/5 rounded-xl border border-white/10 text-electric-blue">
                  <CheckCircle className="h-5 w-5" />
                </div>
                <div className="text-sm">
                  <p className="font-bold text-white">Réponse personnalisée</p>
                  <p className="text-xs text-white/60">Analyse de vos besoins sous 24-48h</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="p-2.5 bg-white/5 rounded-xl border border-white/10 text-electric-blue">
                  <Sparkles className="h-5 w-5" />
                </div>
                <div className="text-sm">
                  <p className="font-bold text-white">Audit & échange offerts</p>
                  <p className="text-xs text-white/60">Analyse gratuite et sans engagement</p>
                </div>
              </div>
            </div>

            <div className="flex pt-4">
              <button 
                onClick={scrollToForm}
                className="px-8 py-4 bg-electric-blue text-white rounded-xl font-bold hover:bg-white hover:text-navy-900 transition-all shadow-xl shadow-electric-blue/20 hover:scale-[1.02] active:scale-[0.98]"
              >
                Décrire mon projet
              </button>
            </div>
          </motion.div>

          {/* Side Illustration / Trust Highlights */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="hidden md:block md:col-span-5 relative"
          >
            <div className="absolute -inset-4 bg-gradient-to-br from-electric-blue/20 to-transparent rounded-[2rem] blur-2xl"></div>
            <div className="relative bg-navy-800 rounded-3xl p-8 border border-white/10 shadow-2xl skew-y-1">
              <div className="space-y-6">
                <div className="flex items-center gap-4 border-b border-navy-700 pb-4">
                  <Award className="text-electric-blue h-8 w-8 shrink-0" />
                  <div>
                    <h3 className="font-bold text-white">Ingénierie & Résultats</h3>
                    <p className="text-xs text-white/50">Qualité de code, design soigné & performances</p>
                  </div>
                </div>
                <div className="flex items-center gap-4 border-b border-navy-700 pb-4">
                  <Users className="text-electric-blue h-8 w-8 shrink-0" />
                  <div>
                    <h3 className="font-bold text-white">Artisans & PME</h3>
                    <p className="text-xs text-white/50">Un vocabulaire simple et des solutions pragmatiques</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <Shield className="text-electric-blue h-8 w-8 shrink-0" />
                  <div>
                    <h3 className="font-bold text-white">Transparence Totale</h3>
                    <p className="text-xs text-white/50">Accès total à vos outils, sans abonnement caché</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </section>

      {/* 2. Formulaire Principal & Coordonnées */}
      <section ref={formRef} className="py-24 px-6 relative">
        <div className="container mx-auto max-w-7xl">
          <div className="grid lg:grid-cols-12 gap-12 items-start">
            
            {/* Left Column: Form Card */}
            <div className="lg:col-span-7 bg-white p-8 md:p-12 rounded-[2.5rem] border border-gray-100 shadow-xl shadow-gray-100/40 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-2 h-full bg-electric-blue"></div>
              
              <div className="mb-10">
                <h2 className="text-3xl font-display font-bold text-navy-900 mb-2">Décrivez-nous votre besoin</h2>
                <p className="text-slate-500 text-sm md:text-base leading-relaxed">
                  Remplissez ce questionnaire en quelques clics. Plus votre description nous permettra d'appréhender votre métier, plus nous pourrons vous adresser un premier échange ciblé.
                </p>
              </div>

              {submitStatus === 'success' ? (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="bg-emerald-50 border border-emerald-200/60 rounded-3xl p-8 text-center space-y-6"
                >
                  <div className="mx-auto w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center text-emerald-600">
                    <CheckCircle className="h-10 w-10" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-2xl font-bold font-display text-slate-900">Demande bien reçue !</h3>
                    <p className="text-slate-600 max-w-md mx-auto leading-relaxed">
                      Votre projet a été enregistré avec succès. Nous analysons vos éléments de visibilité et reviendrons vers vous sous 24 à 48 heures pour un appel exploratoire d'audit gratuit.
                    </p>
                  </div>
                  <button 
                    onClick={() => setSubmitStatus('idle')}
                    className="px-6 py-2.5 bg-navy-900 hover:bg-electric-blue text-white rounded-lg text-sm font-bold transition-all"
                  >
                    Envoyer un autre message
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  
                  {/* Invisible Honeypot Spam Filter */}
                  <div className="hidden">
                    <label htmlFor="hp_field">Ne pas remplir ce champ si vous êtes humain :</label>
                    <input 
                      type="text" 
                      id="hp_field" 
                      value={honeypot} 
                      onChange={(e) => setHoneypot(e.target.value)} 
                      autoComplete="off" 
                    />
                  </div>

                  {/* Row: Name & Email */}
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-xs font-bold text-navy-900 uppercase tracking-wider block">
                        Prénom et Nom <span className="text-red-500">*</span>
                      </label>
                      <input 
                        type="text" 
                        required
                        value={fullName}
                        onChange={(e) => setFullName(e.target.value)}
                        placeholder="Jean Dupont"
                        className="w-full px-5 py-4 bg-gray-50/85 border border-gray-200 focus:border-electric-blue focus:ring-1 focus:ring-electric-blue/30 rounded-2xl outline-none transition-all text-sm"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs font-bold text-navy-900 uppercase tracking-wider block">
                        Email professionnel <span className="text-red-500">*</span>
                      </label>
                      <input 
                        type="email" 
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="jean@entreprise.fr"
                        className="w-full px-5 py-4 bg-gray-50/85 border border-gray-200 focus:border-electric-blue focus:ring-1 focus:ring-electric-blue/30 rounded-2xl outline-none transition-all text-sm"
                      />
                    </div>
                  </div>

                  {/* Row: Phone & Company */}
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-xs font-bold text-navy-900 uppercase tracking-wider block">
                        Téléphone <span className="text-slate-400 font-normal">(Optionnel)</span>
                      </label>
                      <input 
                        type="tel" 
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        placeholder="06 12 34 56 78"
                        className="w-full px-5 py-4 bg-gray-50/85 border border-gray-200 focus:border-electric-blue focus:ring-1 focus:ring-electric-blue/30 rounded-2xl outline-none transition-all text-sm"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs font-bold text-navy-900 uppercase tracking-wider block">
                        Nom de l'entreprise <span className="text-slate-400 font-normal">(Optionnel)</span>
                      </label>
                      <input 
                        type="text" 
                        value={company}
                        onChange={(e) => setCompany(e.target.value)}
                        placeholder="Dupont Sarl"
                        className="w-full px-5 py-4 bg-gray-50/85 border border-gray-200 focus:border-electric-blue focus:ring-1 focus:ring-electric-blue/30 rounded-2xl outline-none transition-all text-sm"
                      />
                    </div>
                  </div>

                  {/* Dropdown: Project Type */}
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-navy-900 uppercase tracking-wider block">
                      Type de projet principal <span className="text-red-500">*</span>
                    </label>
                    <select
                      required
                      value={projectType}
                      onChange={(e) => setProjectType(e.target.value)}
                      className="w-full px-5 py-4 bg-gray-50/85 border border-gray-200 focus:border-electric-blue focus:border-solid rounded-2xl outline-none text-sm transition-all"
                    >
                      <option value="" disabled>Sélectionnez une catégorie...</option>
                      {projectTypes.map((item, idx) => (
                        <option key={idx} value={item.value}>{item.label}</option>
                      ))}
                    </select>
                  </div>

                  {/* Row: Budget & Timeline */}
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-xs font-bold text-navy-900 uppercase tracking-wider block">
                        Budget approximatif <span className="text-slate-400 font-normal">(Optionnel)</span>
                      </label>
                      <select
                        value={budget}
                        onChange={(e) => setBudget(e.target.value)}
                        className="w-full px-5 py-4 bg-gray-50/85 border border-gray-200 focus:border-electric-blue focus:border-solid rounded-2xl outline-none text-sm transition-all"
                      >
                        <option value="" disabled>Sélectionnez une estimation...</option>
                        {budgets.map((item, idx) => (
                          <option key={idx} value={item.value}>{item.label}</option>
                        ))}
                      </select>
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs font-bold text-navy-900 uppercase tracking-wider block">
                        Délai souhaité <span className="text-slate-400 font-normal">(Optionnel)</span>
                      </label>
                      <select
                        value={timeline}
                        onChange={(e) => setTimeline(e.target.value)}
                        className="w-full px-5 py-4 bg-gray-50/85 border border-gray-200 focus:border-electric-blue focus:border-solid rounded-2xl outline-none text-sm transition-all"
                      >
                        <option value="" disabled>Sélectionnez le délai souhaité...</option>
                        {timelines.map((item, idx) => (
                          <option key={idx} value={item.value}>{item.label}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs font-bold text-navy-900 uppercase tracking-wider block">
                      Site internet actuel <span className="text-slate-400 font-normal">(Optionnel)</span>
                    </label>
                    <input 
                      type="url" 
                      value={website}
                      onChange={(e) => setWebsite(e.target.value)}
                      placeholder="https://mon-activite.fr"
                      className="w-full px-5 py-4 bg-gray-50/85 border border-gray-200 focus:border-electric-blue focus:ring-1 focus:ring-electric-blue/30 rounded-2xl outline-none transition-all text-sm"
                    />
                  </div>

                  {/* Message Field */}
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-navy-900 uppercase tracking-wider block">
                      Décrivez vos objectifs ou blocages <span className="text-red-500">*</span>
                    </label>
                    <textarea 
                      required
                      rows={5}
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="Bonjour, je souhaite moderniser notre site Web pour gagner des prospects en rénovation. Par ailleurs, nous perdons du temps à copier/coller manuellement les formulaires de contacts..."
                      className="w-full px-5 py-4 bg-gray-50/85 border border-gray-200 focus:border-electric-blue focus:ring-1 focus:ring-electric-blue/30 rounded-2xl outline-none transition-all text-sm resize-none"
                    />
                  </div>

                  {/* RGPD Consent */}
                  <div className="flex items-start gap-3 bg-gray-50 p-4 rounded-xl border border-gray-100">
                    <input 
                      type="checkbox" 
                      id="rgpd" 
                      required
                      checked={rgpdConsent}
                      onChange={(e) => setRgpdConsent(e.target.checked)}
                      className="mt-1 h-4 w-4 text-electric-blue border-gray-300 rounded focus:ring-electric-blue"
                    />
                    <label htmlFor="rgpd" className="text-xs text-slate-500 leading-relaxed cursor-pointer select-none">
                      J’accepte que les informations transmises soient utilisées par VSW Digital pour me recontacter au sujet de ma demande. Aucune donnée n’est revendue à des tiers.
                    </label>
                  </div>

                  {/* Display Errors if any */}
                  {submitStatus === 'error' && (
                    <motion.div 
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="p-4 bg-rose-50 border border-rose-200 text-rose-800 text-xs font-medium rounded-xl leading-relaxed"
                    >
                      {errorMessage}
                    </motion.div>
                  )}

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full flex justify-center items-center gap-2 py-4 px-6 bg-navy-900 hover:bg-electric-blue text-white disabled:bg-slate-300 disabled:cursor-not-allowed font-bold rounded-2xl shadow-xl transition-all cursor-pointer"
                  >
                    {isSubmitting ? (
                      <span className="flex items-center gap-2">
                        <svg className="animate-spin h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Enregistrement de votre projet...
                      </span>
                    ) : (
                      <>
                        Envoyer ma demande de devis
                        <ArrowRight className="h-5 w-5" />
                      </>
                    )}
                  </button>

                </form>
              )}
            </div>

            {/* Right Column: Direct Coordinates Card */}
            <div className="lg:col-span-5 space-y-8">
              
              <div className="bg-white p-8 md:p-10 rounded-[2.5rem] border border-gray-100 shadow-xl shadow-gray-100/40 space-y-8">
                <div>
                  <h3 className="text-2xl font-display font-bold text-navy-900 mb-2">Nous contacter directement</h3>
                  <p className="text-slate-500 text-sm leading-relaxed">
                    Vous souhaitez nous joindre par téléphone ou nous adresser un email sans passer par l'étape du formulaire ?
                  </p>
                </div>

                <div className="space-y-6">
                  
                  {/* Email */}
                  <a href="mailto:vsw.contact@gmail.com" className="flex items-start gap-4 p-4 hover:bg-slate-50 rounded-2xl transition-all group">
                    <div className="p-3 bg-blue-50 text-electric-blue rounded-xl group-hover:bg-electric-blue group-hover:text-white transition-all">
                      <Mail className="h-6 w-6" />
                    </div>
                    <div>
                      <p className="text-xs text-slate-400 font-bold uppercase tracking-wider">Email global</p>
                      <p className="text-sm font-bold text-navy-900 mt-0.5 group-hover:text-electric-blue transition-colors break-all">vsw.contact@gmail.com</p>
                    </div>
                  </a>

                  {/* Phone */}
                  <a href="tel:+33644686962" className="flex items-start gap-4 p-4 hover:bg-slate-50 rounded-2xl transition-all group">
                    <div className="p-3 bg-blue-50 text-electric-blue rounded-xl group-hover:bg-electric-blue group-hover:text-white transition-all">
                      <Phone className="h-6 w-6" />
                    </div>
                    <div>
                      <p className="text-xs text-slate-400 font-bold uppercase tracking-wider">Téléphone direct</p>
                      <p className="text-sm font-bold text-navy-900 mt-0.5 group-hover:text-electric-blue transition-colors">+33 (0)6 44 68 69 62</p>
                    </div>
                  </a>

                  {/* Map Info */}
                  <div className="flex items-start gap-4 p-4">
                    <div className="p-3 bg-blue-50 text-electric-blue rounded-xl">
                      <MapPin className="h-6 w-6" />
                    </div>
                    <div>
                      <p className="text-xs text-slate-400 font-bold uppercase tracking-wider">Département & Zone</p>
                      <p className="text-sm font-bold text-navy-900 mt-0.5 leading-relaxed">
                        Paris, Val-de-Marne, Île-de-France & Interventions à distance partout en France
                      </p>
                    </div>
                  </div>

                  {/* Availability */}
                  <div className="flex items-start gap-4 p-4">
                    <div className="p-3 bg-blue-50 text-electric-blue rounded-xl">
                      <Clock className="h-6 w-6" />
                    </div>
                    <div>
                      <p className="text-xs text-slate-400 font-bold uppercase tracking-wider">Horaires & RDV</p>
                      <p className="text-sm font-bold text-navy-900 mt-0.5">
                        Sur rendez-vous du lundi au vendredi de 9h à 19h
                      </p>
                    </div>
                  </div>

                </div>
              </div>

              {/* Client benefits card brief */}
              <div className="bg-navy-900 text-white p-8 md:p-10 rounded-[2.5rem] relative overflow-hidden">
                <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-electric-blue to-cyan-500 opacity-20 blur-xl"></div>
                <div className="space-y-4">
                  <div className="flex items-center gap-2 text-electric-blue font-bold text-xs uppercase tracking-wider">
                    <Shield className="h-4 w-4" /> Confidentialité RGPD
                  </div>
                  <h4 className="text-xl font-display font-bold">Sécurisation absolue de vos données d'entreprise</h4>
                  <p className="text-sm text-white/75 leading-relaxed">
                    Les chiffres, blocages d'exploitation et budgets mentionnés lors du dépôt d'avis ne sont partagés avec aucun intervenant commercial ou prestataire externe.
                  </p>
                </div>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* 4. Section Types De Demandes */}
      <section className="py-24 bg-white border-y border-slate-100">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <h2 className="text-3xl md:text-5xl font-display font-bold text-navy-900">
              Pour quels projets pouvez-vous nous contacter ?
            </h2>
            <div className="h-1.5 w-24 bg-electric-blue mx-auto rounded-full"></div>
            <p className="text-slate-500 text-sm md:text-base">
              Nos spécialités couvrent l’ensemble de la chaîne d'acquisition et d'optimisation numérique pour les profils locaux et professionnels autonomes.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {categories.map((c, i) => (
              <div key={i} className="group p-8 bg-gray-50 border border-gray-100 rounded-3xl hover:border-electric-blue/30 hover:shadow-xl transition-all duration-300 flex flex-col">
                <div className="p-4 bg-white rounded-2xl inline-block shadow-sm group-hover:bg-electric-blue/10 transition-colors duration-300 shrink-0 self-start mb-6">
                  <c.icon className="h-6 w-6 text-electric-blue" />
                </div>
                <h3 className="text-xl font-bold font-display text-navy-900 mb-3 group-hover:text-electric-blue transition-colors duration-300">
                  {c.title}
                </h3>
                <p className="text-sm text-slate-500 leading-relaxed flex-grow">
                  {c.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Section Réassurance */}
      <section className="py-24 bg-gray-50 px-6">
        <div className="container mx-auto max-w-5xl bg-white p-8 md:p-16 rounded-[2.5rem] border border-gray-100 shadow-lg relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-blue-50 rounded-full -mr-16 -mt-16 opacity-30"></div>
          
          <div className="grid md:grid-cols-12 gap-10 items-center">
            <div className="md:col-span-8 space-y-6">
              <span className="text-xs font-bold text-electric-blue uppercase tracking-widest block">Sans engagement commercial</span>
              <h2 className="text-3xl md:text-4xl font-display font-bold text-navy-900">
                Un premier échange pour clarifier votre projet
              </h2>
              <p className="text-slate-500 leading-relaxed text-sm md:text-base">
                Notre premier objectif n’est pas de vous vendre une offre toute faite. Nous prenons le temps d’analyser en détail vos marges de métier, votre zone géographique concurrentielle et vos priorités d'investissement pour cibler l'action qui générera immédiatement du retour sur investissement.
              </p>
              
              <ul className="grid sm:grid-cols-2 gap-3 text-sm text-navy-900/80 font-medium">
                <li className="flex items-center gap-2.5">
                  <span className="w-2 h-2 rounded-full bg-electric-blue"></span> Compréhension de votre modèle de marge
                </li>
                <li className="flex items-center gap-2.5">
                  <span className="w-2 h-2 rounded-full bg-electric-blue"></span> Audit de vos canaux existants
                </li>
                <li className="flex items-center gap-2.5">
                  <span className="w-2 h-2 rounded-full bg-electric-blue"></span> Réduction de vos dépenses superflues
                </li>
                <li className="flex items-center gap-2.5">
                  <span className="w-2 h-2 rounded-full bg-electric-blue"></span> Plan d'action concret sous 48h
                </li>
              </ul>
            </div>

            <div className="md:col-span-4 bg-slate-50 rounded-3xl p-6 border border-gray-100 flex flex-col justify-center items-center text-center space-y-4">
              <HelpCircle className="h-10 w-10 text-electric-blue shrink-0 animate-pulse" />
              <div>
                <h4 className="font-bold text-navy-900">Besoin d'un conseil ?</h4>
                <p className="text-xs text-slate-500 mt-1">Écrivez-nous pour un diagnostic rapide de vos performances Google.</p>
              </div>
              <button 
                onClick={scrollToForm}
                className="w-full py-3 bg-navy-900 hover:bg-electric-blue text-white rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-1.5"
              >
                Cadrer mon besoin <ArrowUpRight className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Section Processus */}
      <section className="py-24 bg-white border-t border-slate-100 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <h2 className="text-3xl md:text-5xl font-display font-bold text-navy-900">
              Que se passe-t-il après l’envoi du formulaire ?
            </h2>
            <div className="h-1.5 w-24 bg-electric-blue mx-auto rounded-full"></div>
            <p className="text-slate-500 text-sm md:text-base">
              Nous misons sur un processus transparent, réactif et sans complications techniques.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((st, idx) => (
              <div key={idx} className="relative p-8 bg-gray-50 border border-gray-100 rounded-3xl flex flex-col">
                <div className="text-4xl md:text-5xl font-extrabold font-display text-electric-blue/15 mb-4 block">
                  {st.num}
                </div>
                <h3 className="text-lg font-bold font-display text-navy-900 mb-2">
                  {st.title}
                </h3>
                <p className="text-xs text-slate-500 leading-relaxed">
                  {st.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. Section FAQ */}
      <section className="py-24 bg-slate-100/60 px-6 border-t border-slate-100">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
            <h2 className="text-3xl md:text-5xl font-display font-bold text-navy-900">
              Questions fréquentes
            </h2>
            <div className="h-1.5 w-24 bg-electric-blue mx-auto rounded-full"></div>
            <p className="text-slate-500 text-sm md:text-base">
              Retrouvez de premiers éclaircissements pédagogiques sur nos méthodes de cadrage et de gestion de leads.
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <div key={i} className="bg-white rounded-2xl border border-gray-100 overflow-hidden shadow-sm">
                <button 
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full flex justify-between items-center p-6 text-left font-bold text-navy-900 hover:text-electric-blue transition-colors gap-4"
                >
                  <span className="text-sm md:text-base leading-tight font-display">{faq.q}</span>
                  <ChevronDown className={`h-5 w-5 shrink-0 text-slate-400 transition-transform duration-300 ${openFaq === i ? 'rotate-180 text-electric-blue' : ''}`} />
                </button>
                <AnimatePresence initial={false}>
                  {openFaq === i && (
                    <motion.div 
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25 }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-6 text-xs md:text-sm text-slate-500 leading-relaxed border-t border-slate-50 pt-3">
                        {faq.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. CTA Final */}
      <section className="py-24 bg-navy-900 text-white text-center px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-5"></div>
        <div className="container relative mx-auto max-w-4xl space-y-8">
          <h2 className="text-3xl md:text-5xl font-display font-bold">
            Prêt à faire avancer votre projet digital ?
          </h2>
          <p className="text-lg text-white/70 max-w-2xl mx-auto leading-relaxed">
            Présentez-nous votre activité, vos objectifs et vos difficultés opérationnelles actuelles. VSW Digital vous aide à identifier les solutions prioritaires les plus adaptées pour doper votre volume de clients.
          </p>
          <div className="pt-4">
            <button 
              onClick={scrollToForm}
              className="inline-block px-8 py-4 bg-electric-blue text-white rounded-xl font-bold hover:bg-white hover:text-navy-900 transition-all shadow-xl shadow-electric-blue/20 hover:scale-[1.02] active:scale-[0.98]"
            >
              Remplir le formulaire
            </button>
          </div>
        </div>
      </section>

    </div>
  );
}
