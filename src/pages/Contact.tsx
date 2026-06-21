import { useEffect, useRef, useState } from "react";
import type { FormEvent } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  ArrowRight,
  ArrowUpRight,
  Award,
  CheckCircle,
  ChevronDown,
  Cloud,
  Code,
  HelpCircle,
  Layout,
  Mail,
  Megaphone,
  Phone,
  Search,
  Shield,
  Sparkles,
  Users,
} from "lucide-react";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { db } from "../lib/firebase";

const projectTypes = [
  { value: "creation", label: "Création de site internet" },
  { value: "refonte", label: "Refonte de site internet" },
  { value: "seo", label: "Référencement SEO" },
  { value: "google-ads", label: "Google Ads & génération de leads" },
  { value: "app-sur-mesure", label: "Application web sur mesure" },
  { value: "cloud-auto", label: "Cloud & automatisation" },
  { value: "maintenance", label: "Maintenance / hébergement" },
  { value: "audit", label: "Audit digital" },
  { value: "autre", label: "Autre demande" },
];

const budgets = [
  { value: "under-1k", label: "Moins de 1 000 €" },
  { value: "1k-2.5k", label: "1 000 € à 2 500 €" },
  { value: "2.5k-5k", label: "2 500 € à 5 000 €" },
  { value: "5k-10k", label: "5 000 € à 10 000 €" },
  { value: "over-10k", label: "Plus de 10 000 €" },
  { value: "tbd", label: "À définir ensemble" },
];

const timelines = [
  { value: "asap", label: "Dès que possible" },
  { value: "month", label: "Dans le mois" },
  { value: "2-3-months", label: "Dans les 2 à 3 mois" },
  { value: "medium-term", label: "Projet à moyen terme" },
  { value: "tbd", label: "Je ne sais pas encore" },
];

const categories = [
  {
    icon: Layout,
    title: "Création de site professionnel",
    desc: "Un site vitrine moderne, clair et pensé pour présenter vos services avec sérieux.",
  },
  {
    icon: Search,
    title: "SEO et visibilité Google",
    desc: "Une structure et des contenus mieux organisés pour améliorer votre visibilité naturelle.",
  },
  {
    icon: Megaphone,
    title: "Google Ads & leads",
    desc: "Des campagnes et pages d’atterrissage pensées pour générer des demandes mesurables.",
  },
  {
    icon: Code,
    title: "Application web sur mesure",
    desc: "Un espace client, un tableau de bord ou un outil métier adapté à votre organisation.",
  },
  {
    icon: Cloud,
    title: "Cloud & automatisation",
    desc: "Des workflows pour connecter vos formulaires, vos données, vos notifications et vos outils.",
  },
  {
    icon: Sparkles,
    title: "Audit ou refonte digitale",
    desc: "Une analyse de l’existant pour identifier les priorités avant d’investir davantage.",
  },
];

const steps = [
  {
    num: "01",
    title: "Réception de votre demande",
    desc: "Votre message est enregistré et nous permet de comprendre le contexte général de votre projet.",
  },
  {
    num: "02",
    title: "Analyse rapide du besoin",
    desc: "Nous regardons vos objectifs, votre site existant si vous en avez un, et vos priorités.",
  },
  {
    num: "03",
    title: "Échange personnalisé",
    desc: "Nous pouvons organiser un court échange pour clarifier le périmètre, les contraintes et les prochaines étapes.",
  },
  {
    num: "04",
    title: "Proposition adaptée",
    desc: "Vous recevez une proposition claire, progressive et adaptée à votre budget et à votre niveau de maturité digitale.",
  },
];

const faqs = [
  {
    q: "Puis-je demander un simple avis sur mon site actuel ?",
    a: "Oui. Vous pouvez nous envoyer l’adresse de votre site et expliquer ce qui vous gêne : manque de demandes, design vieillissant, lenteur, SEO faible ou problème de conversion.",
  },
  {
    q: "Proposez-vous un premier échange gratuit ?",
    a: "Oui. Le premier échange sert à comprendre votre besoin et à voir si VSW Digital peut vous apporter une réponse pertinente. Il ne vous engage pas.",
  },
  {
    q: "Travaillez-vous avec les petites entreprises et artisans ?",
    a: "Oui. VSW Digital s’adresse particulièrement aux PME, artisans, indépendants, commerçants et entreprises de services qui veulent améliorer leur présence digitale.",
  },
  {
    q: "Puis-je vous contacter pour un projet encore flou ?",
    a: "Oui. Justement, nous pouvons vous aider à clarifier vos priorités : site vitrine, SEO, Google Ads, application web, automatisation ou simple audit.",
  },
  {
    q: "Pouvez-vous reprendre un site existant ?",
    a: "Oui. Nous commençons par analyser l’existant pour voir s’il vaut mieux l’optimiser, le corriger ou envisager une refonte plus complète.",
  },
  {
    q: "Intervenez-vous à distance ?",
    a: "Oui. La plupart des échanges peuvent se faire à distance : cadrage, audit, conception, développement, suivi et accompagnement.",
  },
  {
    q: "Pouvez-vous accompagner un projet web plus technique ?",
    a: "Oui. Nous pouvons travailler sur des applications web, espaces clients, Firebase, Google Cloud, automatisations, bases de données et intégrations API.",
  },
  {
    q: "Mes informations sont-elles confidentielles ?",
    a: "Oui. Les informations transmises via le formulaire servent uniquement à vous recontacter au sujet de votre demande. Elles ne sont pas revendues à des tiers.",
  },
];

export function Contact() {
  const formRef = useRef<HTMLDivElement>(null);

  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [company, setCompany] = useState("");
  const [website, setWebsite] = useState("");
  const [projectType, setProjectType] = useState("");
  const [budget, setBudget] = useState("");
  const [timeline, setTimeline] = useState("");
  const [message, setMessage] = useState("");
  const [rgpdConsent, setRgpdConsent] = useState(false);
  const [honeypot, setHoneypot] = useState("");

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">(
    "idle"
  );
  const [errorMessage, setErrorMessage] = useState("");
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  useEffect(() => {
    document.title = "Contact agence web, SEO et automatisation | VSW Digital";

    const metaDescription = document.querySelector('meta[name="description"]');

    if (metaDescription) {
      metaDescription.setAttribute(
        "content",
        "Contactez VSW Digital pour un site internet, une refonte, du SEO, Google Ads, une application web sur mesure ou une automatisation cloud."
      );
    }

    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  const scrollToForm = () => {
    formRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();

    if (!fullName || !email || !projectType || !message) {
      setSubmitStatus("error");
      setErrorMessage(
        "Veuillez remplir les champs obligatoires : nom complet, email, type de projet et message."
      );
      return;
    }

    if (!rgpdConsent) {
      setSubmitStatus("error");
      setErrorMessage(
        "Vous devez accepter l’utilisation de vos informations pour que nous puissions vous recontacter."
      );
      return;
    }

    if (honeypot.trim() !== "") {
      setIsSubmitting(true);

      setTimeout(() => {
        setIsSubmitting(false);
        setSubmitStatus("success");
      }, 700);

      return;
    }

    setIsSubmitting(true);
    setSubmitStatus("idle");
    setErrorMessage("");

    try {
      await addDoc(collection(db, "leads"), {
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
        status: "new",
        source: "contact-page",
        createdAt: serverTimestamp(),
        userAgent:
          typeof window !== "undefined" ? window.navigator.userAgent : null,
      });

      // Appel de l'API backend pour l'envoi d'e-mails (Workspace contact@vsw-digital.fr)
      try {
        await fetch("/api/contact", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            fullName,
            email,
            phone: phone || null,
            company: company || null,
            website: website || null,
            projectType,
            budget: budget || null,
            timeline: timeline || null,
            message,
          }),
        });
      } catch (apiError) {
        console.error("Erreur d'envoi d'e-mail via l'API :", apiError);
        // On ne bloque pas la réussite de la soumission puisque les données sont bien enregistrées dans Firestore
      }

      setSubmitStatus("success");
      setFullName("");
      setEmail("");
      setPhone("");
      setCompany("");
      setWebsite("");
      setProjectType("");
      setBudget("");
      setTimeline("");
      setMessage("");
      setRgpdConsent(false);
      setHoneypot("");
    } catch (error) {
      console.error("Firestore submission error:", error);
      setSubmitStatus("error");
      setErrorMessage(
        "Une erreur technique est survenue. Vous pouvez réessayer ou nous contacter directement par email."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className="flex min-h-screen flex-col overflow-hidden bg-white text-slate-900">
      {/* HERO */}
      <section className="relative isolate overflow-hidden bg-[#0f172a] py-24 text-white md:py-32">
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(59,130,246,0.35),_transparent_34%),radial-gradient(circle_at_bottom_right,_rgba(14,165,233,0.18),_transparent_30%),linear-gradient(180deg,_#0f172a_0%,_#111827_55%,_#020617_100%)]" />
          <div className="absolute left-1/2 top-0 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-[#3b82f6]/20 blur-[120px]" />
          <div className="absolute -bottom-32 right-0 h-[420px] w-[420px] rounded-full bg-cyan-400/10 blur-[110px]" />
          <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.06)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.06)_1px,transparent_1px)] bg-[size:72px_72px] opacity-20" />
        </div>

        <div className="container mx-auto grid max-w-7xl items-center gap-14 px-6 lg:grid-cols-[1.05fr_0.95fr]">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mx-auto max-w-4xl text-center lg:mx-0 lg:text-left"
          >
            <span className="mb-7 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-blue-200 shadow-2xl shadow-blue-500/10 backdrop-blur">
              <Sparkles className="h-4 w-4 text-[#3b82f6]" />
              Contact VSW Digital
            </span>

            <h1 className="font-display text-4xl font-bold leading-[1.05] tracking-[-0.04em] text-white md:text-6xl lg:text-7xl">
              Parlons de votre{" "}
              <span className="bg-gradient-to-r from-[#3b82f6] via-sky-300 to-cyan-300 bg-clip-text text-transparent">
                projet digital
              </span>
            </h1>

            <p className="mt-7 max-w-3xl text-lg leading-8 text-slate-300 md:text-xl lg:mx-0">
              Site internet, refonte, SEO, Google Ads, application web ou
              automatisation : décrivez votre besoin et nous vous aiderons à
              identifier la solution la plus utile.
            </p>

            <div className="mt-7 grid gap-3 sm:grid-cols-2">
              {[
                "Premier échange sans engagement",
                "Conseils clairs et pragmatiques",
                "Solutions adaptées aux PME",
                "Approche web, SEO et cloud",
              ].map((item) => (
                <span
                  key={item}
                  className="inline-flex items-center gap-2 rounded-2xl border border-white/10 bg-white/[0.06] px-4 py-3 text-sm text-slate-200 backdrop-blur"
                >
                  <CheckCircle className="h-4 w-4 text-[#3b82f6]" />
                  {item}
                </span>
              ))}
            </div>

            <div className="mt-10">
              <button
                type="button"
                onClick={scrollToForm}
                className="group inline-flex items-center justify-center gap-2 rounded-2xl bg-[#3b82f6] px-8 py-4 font-semibold text-white shadow-2xl shadow-blue-500/30 transition-all hover:-translate-y-0.5 hover:bg-blue-400"
              >
                Décrire mon projet
                <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
              </button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 28, scale: 0.97 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ delay: 0.15, duration: 0.75 }}
            className="relative mx-auto w-full max-w-xl"
          >
            <div className="absolute -inset-6 rounded-[2rem] bg-[#3b82f6]/20 blur-3xl" />

            <div className="relative rounded-[2rem] border border-white/12 bg-white/[0.07] p-6 shadow-2xl shadow-black/30 backdrop-blur-xl">
              <div className="space-y-6">
                {[
                  {
                    icon: Award,
                    title: "Ingénierie & qualité",
                    desc: "Code propre, interfaces modernes et choix techniques cohérents.",
                  },
                  {
                    icon: Users,
                    title: "PME, artisans & services",
                    desc: "Un accompagnement adapté aux entreprises locales et aux métiers de terrain.",
                  },
                  {
                    icon: Shield,
                    title: "Transparence",
                    desc: "Des explications claires, sans jargon inutile ni promesse irréaliste.",
                  },
                ].map((item) => {
                  const Icon = item.icon;

                  return (
                    <div
                      key={item.title}
                      className="flex gap-4 rounded-2xl border border-white/10 bg-[#020617]/60 p-5"
                    >
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-blue-500/10 text-blue-300">
                        <Icon className="h-6 w-6" />
                      </div>

                      <div>
                        <h3 className="font-display font-bold text-white">
                          {item.title}
                        </h3>
                        <p className="mt-1 text-sm leading-6 text-slate-400">
                          {item.desc}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* FORMULAIRE */}
      <section ref={formRef} className="bg-slate-50 py-24 md:py-32">
        <div className="container mx-auto max-w-7xl px-6">
          <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr]">
            <div className="relative overflow-hidden rounded-[2.5rem] border border-slate-200 bg-white p-7 shadow-xl shadow-slate-900/5 md:p-10">
              <div className="absolute left-0 top-0 h-full w-1.5 bg-[#3b82f6]" />

              <div className="mb-10">
                <span className="mb-5 inline-flex rounded-full border border-blue-100 bg-blue-50 px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] text-[#3b82f6]">
                  Formulaire
                </span>

                <h2 className="font-display text-3xl font-bold tracking-[-0.03em] text-[#0f172a] md:text-4xl">
                  Décrivez-nous votre besoin
                </h2>

                <p className="mt-4 text-base leading-8 text-slate-600">
                  Plus votre message est précis, plus nous pourrons comprendre
                  votre situation et vous orienter vers la bonne solution.
                </p>
              </div>

              {submitStatus === "success" ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.97 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="rounded-[2rem] border border-emerald-200 bg-emerald-50 p-8 text-center"
                >
                  <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-emerald-100 text-emerald-600">
                    <CheckCircle className="h-10 w-10" />
                  </div>

                  <h3 className="mt-6 font-display text-2xl font-bold text-[#0f172a]">
                    Demande bien reçue
                  </h3>

                  <p className="mx-auto mt-3 max-w-md text-sm leading-7 text-slate-600">
                    Votre message a été enregistré. Nous reviendrons vers vous
                    après analyse de votre demande.
                  </p>

                  <button
                    type="button"
                    onClick={() => setSubmitStatus("idle")}
                    className="mt-6 rounded-2xl bg-[#0f172a] px-6 py-3 text-sm font-semibold text-white transition-all hover:bg-[#3b82f6]"
                  >
                    Envoyer un autre message
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="hidden">
                    <label htmlFor="hp_field">
                      Ne pas remplir ce champ si vous êtes humain :
                    </label>
                    <input
                      type="text"
                      id="hp_field"
                      value={honeypot}
                      onChange={(event) => setHoneypot(event.target.value)}
                      autoComplete="off"
                    />
                  </div>

                  <div className="grid gap-6 md:grid-cols-2">
                    <FormInput
                      label="Prénom et nom"
                      required
                      value={fullName}
                      onChange={setFullName}
                      placeholder="Jean Dupont"
                    />

                    <FormInput
                      label="Email professionnel"
                      type="email"
                      required
                      value={email}
                      onChange={setEmail}
                      placeholder="contact@entreprise.fr"
                    />
                  </div>

                  <div className="grid gap-6 md:grid-cols-2">
                    <FormInput
                      label="Téléphone"
                      value={phone}
                      onChange={setPhone}
                      placeholder="06 51 46 02 57"
                      type="tel"
                    />

                    <FormInput
                      label="Entreprise"
                      value={company}
                      onChange={setCompany}
                      placeholder="Nom de votre société"
                    />
                  </div>

                  <FormSelect
                    label="Type de projet principal"
                    required
                    value={projectType}
                    onChange={setProjectType}
                    placeholder="Sélectionnez une catégorie..."
                    options={projectTypes}
                  />

                  <div className="grid gap-6 md:grid-cols-2">
                    <FormSelect
                      label="Budget approximatif"
                      value={budget}
                      onChange={setBudget}
                      placeholder="Sélectionnez une estimation..."
                      options={budgets}
                    />

                    <FormSelect
                      label="Délai souhaité"
                      value={timeline}
                      onChange={setTimeline}
                      placeholder="Sélectionnez le délai souhaité..."
                      options={timelines}
                    />
                  </div>

                  <FormInput
                    label="Site internet actuel"
                    type="url"
                    value={website}
                    onChange={setWebsite}
                    placeholder="https://mon-activite.fr"
                  />

                  <div>
                    <label className="mb-2 block text-xs font-bold uppercase tracking-[0.16em] text-[#0f172a]">
                      Décrivez vos objectifs ou blocages{" "}
                      <span className="text-rose-500">*</span>
                    </label>

                    <textarea
                      required
                      rows={6}
                      value={message}
                      onChange={(event) => setMessage(event.target.value)}
                      placeholder="Bonjour, je souhaite moderniser mon site, améliorer ma visibilité Google ou automatiser une partie de mon activité..."
                      className="w-full resize-none rounded-2xl border border-slate-200 bg-slate-50 px-5 py-4 text-sm outline-none transition-all focus:border-[#3b82f6] focus:bg-white focus:ring-4 focus:ring-blue-500/10"
                    />
                  </div>

                  <label className="flex cursor-pointer items-start gap-3 rounded-2xl border border-slate-200 bg-slate-50 p-4">
                    <input
                      type="checkbox"
                      required
                      checked={rgpdConsent}
                      onChange={(event) =>
                        setRgpdConsent(event.target.checked)
                      }
                      className="mt-1 h-4 w-4 accent-[#3b82f6]"
                    />

                    <span className="text-xs leading-6 text-slate-600">
                      J’accepte que les informations transmises soient utilisées
                      par VSW Digital pour me recontacter au sujet de ma demande.
                      Aucune donnée n’est revendue à des tiers.
                    </span>
                  </label>

                  {submitStatus === "error" && (
                    <motion.div
                      initial={{ opacity: 0, y: -8 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="rounded-2xl border border-rose-200 bg-rose-50 p-4 text-sm font-medium leading-7 text-rose-700"
                    >
                      {errorMessage}
                    </motion.div>
                  )}

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="group flex w-full items-center justify-center gap-2 rounded-2xl bg-[#0f172a] px-6 py-4 font-semibold text-white shadow-xl shadow-slate-900/10 transition-all hover:bg-[#3b82f6] disabled:cursor-not-allowed disabled:bg-slate-300"
                  >
                    {isSubmitting ? (
                      <span className="flex items-center gap-2">
                        <svg
                          className="h-5 w-5 animate-spin text-white"
                          fill="none"
                          viewBox="0 0 24 24"
                        >
                          <circle
                            className="opacity-25"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="4"
                          />
                          <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                          />
                        </svg>
                        Envoi en cours...
                      </span>
                    ) : (
                      <>
                        Envoyer ma demande
                        <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>

            {/* COORDONNÉES */}
            <div className="space-y-8">
              <div className="rounded-[2.5rem] border border-slate-200 bg-white p-8 shadow-xl shadow-slate-900/5 md:p-10">
                <h3 className="font-display text-2xl font-bold text-[#0f172a]">
                  Nous contacter directement
                </h3>

                <p className="mt-3 text-sm leading-7 text-slate-600">
                  Vous pouvez aussi nous joindre par email ou par téléphone.
                </p>

                <div className="mt-8 space-y-4">
                  <a
                    href="mailto:contact@vsw-digital.fr"
                    className="group flex items-start gap-4 rounded-2xl p-4 transition-all hover:bg-slate-50"
                  >
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-blue-50 text-[#3b82f6] transition-all group-hover:bg-[#3b82f6] group-hover:text-white">
                      <Mail className="h-6 w-6" />
                    </div>

                    <div>
                      <p className="text-xs font-bold uppercase tracking-[0.16em] text-slate-400">
                        Email
                      </p>
                      <p className="mt-1 break-all text-sm font-bold text-[#0f172a] transition-colors group-hover:text-[#3b82f6]">
                        contact@vsw-digital.fr
                      </p>
                    </div>
                  </a>

                  <a
                    href="tel:+33651460257"
                    className="group flex items-start gap-4 rounded-2xl p-4 transition-all hover:bg-slate-50"
                  >
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-blue-50 text-[#3b82f6] transition-all group-hover:bg-[#3b82f6] group-hover:text-white">
                      <Phone className="h-6 w-6" />
                    </div>

                    <div>
                      <p className="text-xs font-bold uppercase tracking-[0.16em] text-slate-400">
                        Téléphone
                      </p>
                      <p className="mt-1 text-sm font-bold text-[#0f172a] transition-colors group-hover:text-[#3b82f6]">
                        06 51 46 02 57
                      </p>
                    </div>
                  </a>
                </div>
              </div>

              <div className="rounded-[2.5rem] bg-[#0f172a] p-8 text-white shadow-2xl shadow-slate-900/20 md:p-10">
                <div className="mb-5 flex items-center gap-2 text-blue-300">
                  <Shield className="h-5 w-5" />
                  <span className="text-xs font-bold uppercase tracking-[0.2em]">
                    Confidentialité
                  </span>
                </div>

                <h4 className="font-display text-2xl font-bold text-white">
                  Vos informations restent privées
                </h4>

                <p className="mt-4 text-sm leading-7 text-slate-300">
                  Les informations transmises servent uniquement à comprendre
                  votre demande et à vous recontacter. Elles ne sont pas
                  revendues à des tiers.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TYPES DE PROJETS */}
      <section className="bg-white py-24 md:py-32">
        <div className="container mx-auto max-w-7xl px-6">
          <div className="mx-auto mb-16 max-w-4xl text-center">
            <span className="mb-5 inline-flex rounded-full border border-blue-100 bg-blue-50 px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] text-[#3b82f6]">
              Projets
            </span>

            <h2 className="font-display text-3xl font-bold tracking-[-0.03em] text-[#0f172a] md:text-5xl">
              Pour quels projets pouvez-vous nous contacter ?
            </h2>

            <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-slate-600">
              VSW Digital accompagne les entreprises sur la création de sites, le
              SEO, la publicité, les applications web et l’automatisation.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {categories.map((category, index) => {
              const Icon = category.icon;

              return (
                <motion.article
                  key={category.title}
                  initial={{ opacity: 0, y: 22 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.04 }}
                  className="group rounded-[1.6rem] border border-slate-200 bg-slate-50 p-7 transition-all hover:-translate-y-1 hover:border-blue-200 hover:bg-white hover:shadow-xl hover:shadow-blue-500/10"
                >
                  <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-white text-[#3b82f6] ring-1 ring-slate-200 transition-all group-hover:bg-[#3b82f6] group-hover:text-white">
                    <Icon className="h-7 w-7" />
                  </div>

                  <h3 className="font-display text-xl font-bold text-[#0f172a]">
                    {category.title}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-slate-600">
                    {category.desc}
                  </p>
                </motion.article>
              );
            })}
          </div>
        </div>
      </section>

      {/* RÉASSURANCE */}
      <section className="bg-slate-50 py-24 md:py-32">
        <div className="container mx-auto max-w-5xl px-6">
          <div className="rounded-[2.5rem] border border-slate-200 bg-white p-8 shadow-sm md:p-12">
            <div className="grid items-center gap-10 md:grid-cols-[1.2fr_0.8fr]">
              <div>
                <span className="mb-5 inline-flex rounded-full border border-blue-100 bg-blue-50 px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] text-[#3b82f6]">
                  Sans engagement
                </span>

                <h2 className="font-display text-3xl font-bold tracking-[-0.03em] text-[#0f172a] md:text-4xl">
                  Un premier échange pour clarifier votre projet
                </h2>

                <p className="mt-5 text-base leading-8 text-slate-600">
                  Le premier objectif est de comprendre votre besoin réel :
                  visibilité, refonte, génération de leads, outil métier,
                  automatisation ou maintenance. Ensuite, nous vous aidons à
                  prioriser les actions utiles.
                </p>

                <div className="mt-8 grid gap-3 sm:grid-cols-2">
                  {[
                    "Compréhension de votre activité",
                    "Analyse de vos priorités",
                    "Conseils clairs et réalistes",
                    "Proposition progressive",
                  ].map((item) => (
                    <div key={item} className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-[#3b82f6]" />
                      <span className="text-sm font-semibold text-slate-700">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="rounded-[2rem] border border-slate-200 bg-slate-50 p-7 text-center">
                <HelpCircle className="mx-auto h-10 w-10 text-[#3b82f6]" />

                <h4 className="mt-5 font-display text-xl font-bold text-[#0f172a]">
                  Besoin d’un conseil ?
                </h4>

                <p className="mt-3 text-sm leading-7 text-slate-600">
                  Remplissez le formulaire avec vos questions, même si votre
                  projet n’est pas encore parfaitement défini.
                </p>

                <button
                  type="button"
                  onClick={scrollToForm}
                  className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-[#0f172a] px-6 py-4 font-semibold text-white transition-all hover:bg-[#3b82f6]"
                >
                  Cadrer mon besoin
                  <ArrowUpRight className="h-5 w-5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="bg-white py-24 md:py-32">
        <div className="container mx-auto max-w-7xl px-6">
          <div className="mx-auto mb-16 max-w-4xl text-center">
            <span className="mb-5 inline-flex rounded-full border border-blue-100 bg-blue-50 px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] text-[#3b82f6]">
              Processus
            </span>

            <h2 className="font-display text-3xl font-bold tracking-[-0.03em] text-[#0f172a] md:text-5xl">
              Que se passe-t-il après l’envoi du formulaire ?
            </h2>

            <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-slate-600">
              Un processus simple, clair et sans pression commerciale inutile.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {steps.map((step) => (
              <article
                key={step.num}
                className="rounded-[1.6rem] border border-slate-200 bg-slate-50 p-7 transition-all hover:-translate-y-1 hover:border-blue-200 hover:bg-white hover:shadow-xl hover:shadow-blue-500/10"
              >
                <span className="mb-5 block font-display text-5xl font-black text-[#3b82f6]/20">
                  {step.num}
                </span>

                <h3 className="font-display text-xl font-bold text-[#0f172a]">
                  {step.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-slate-600">
                  {step.desc}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-slate-50 py-24 md:py-32">
        <div className="container mx-auto max-w-4xl px-6">
          <div className="mb-14 text-center">
            <span className="mb-5 inline-flex rounded-full border border-blue-100 bg-blue-50 px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] text-[#3b82f6]">
              FAQ
            </span>

            <h2 className="font-display text-3xl font-bold tracking-[-0.03em] text-[#0f172a] md:text-5xl">
              Questions fréquentes
            </h2>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => {
              const isOpen = openFaq === index;

              return (
                <div
                  key={faq.q}
                  className={`overflow-hidden rounded-[1.4rem] border bg-white shadow-sm transition-all duration-300 ${
                    isOpen
                      ? "border-blue-200 shadow-xl shadow-blue-500/10"
                      : "border-slate-200 hover:border-blue-200"
                  }`}
                >
                  <button
                    type="button"
                    onClick={() => setOpenFaq(isOpen ? null : index)}
                    className="flex w-full items-center justify-between gap-5 px-6 py-5 text-left md:px-7"
                  >
                    <span className="font-display text-base font-bold leading-snug text-[#0f172a] md:text-lg">
                      {faq.q}
                    </span>

                    <span
                      className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full transition-all duration-300 ${
                        isOpen
                          ? "bg-[#3b82f6] text-white"
                          : "bg-blue-50 text-[#3b82f6]"
                      }`}
                    >
                      <ChevronDown
                        className={`h-5 w-5 transition-transform duration-300 ${
                          isOpen ? "rotate-180" : ""
                        }`}
                      />
                    </span>
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25, ease: "easeOut" }}
                      >
                        <div className="border-t border-slate-100 px-6 pb-6 pt-4 md:px-7">
                          <p className="text-sm leading-7 text-slate-600 md:text-base">
                            {faq.a}
                          </p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="relative isolate overflow-hidden bg-[#0f172a] py-24 text-white md:py-32">
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(59,130,246,0.35),_transparent_34%),radial-gradient(circle_at_bottom_right,_rgba(14,165,233,0.18),_transparent_30%),linear-gradient(180deg,_#0f172a_0%,_#111827_55%,_#020617_100%)]" />
          <div className="absolute left-1/2 top-0 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-[#3b82f6]/20 blur-[120px]" />
          <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.06)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.06)_1px,transparent_1px)] bg-[size:72px_72px] opacity-20" />
        </div>

        <div className="container relative mx-auto max-w-4xl px-6 text-center">
          <span className="mb-6 inline-flex rounded-full border border-blue-500/20 bg-blue-500/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] text-blue-300">
            Contact
          </span>

          <h2 className="font-display text-3xl font-bold leading-tight tracking-[-0.03em] text-white md:text-5xl">
            Prêt à faire avancer votre projet digital ?
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-slate-300 md:text-lg">
            Présentez-nous votre activité, vos objectifs et vos difficultés.
            Nous vous aiderons à identifier les solutions prioritaires les plus
            utiles.
          </p>

          <div className="mt-10">
            <button
              type="button"
              onClick={scrollToForm}
              className="group inline-flex items-center justify-center gap-2 rounded-2xl bg-[#3b82f6] px-8 py-4 font-semibold text-white shadow-2xl shadow-blue-500/30 transition-all hover:-translate-y-0.5 hover:bg-blue-400"
            >
              Remplir le formulaire
              <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}

function FormInput({
  label,
  value,
  onChange,
  placeholder,
  type = "text",
  required = false,
}: {
  label: string;
  value: string;
  onChange: (value: string) => void;
  placeholder: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label className="mb-2 block text-xs font-bold uppercase tracking-[0.16em] text-[#0f172a]">
        {label} {required && <span className="text-rose-500">*</span>}
      </label>

      <input
        type={type}
        required={required}
        value={value}
        onChange={(event) => onChange(event.target.value)}
        placeholder={placeholder}
        className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-5 py-4 text-sm outline-none transition-all focus:border-[#3b82f6] focus:bg-white focus:ring-4 focus:ring-blue-500/10"
      />
    </div>
  );
}

function FormSelect({
  label,
  value,
  onChange,
  placeholder,
  options,
  required = false,
}: {
  label: string;
  value: string;
  onChange: (value: string) => void;
  placeholder: string;
  options: { value: string; label: string }[];
  required?: boolean;
}) {
  return (
    <div>
      <label className="mb-2 block text-xs font-bold uppercase tracking-[0.16em] text-[#0f172a]">
        {label} {required && <span className="text-rose-500">*</span>}
      </label>

      <select
        required={required}
        value={value}
        onChange={(event) => onChange(event.target.value)}
        className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-5 py-4 text-sm outline-none transition-all focus:border-[#3b82f6] focus:bg-white focus:ring-4 focus:ring-blue-500/10"
      >
        <option value="" disabled>
          {placeholder}
        </option>

        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
}