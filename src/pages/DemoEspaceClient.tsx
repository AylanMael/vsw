import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "motion/react";
import {
  Activity,
  ArrowRight,
  BarChart3,
  Bot,
  Check,
  CheckCircle,
  ChevronDown,
  Clock,
  Database,
  FileCheck,
  FileText,
  FileX,
  Lock,
  RefreshCw,
  Search,
  Server,
  Settings,
  ShieldCheck,
  Sparkles,
  UploadCloud,
  Users,
  Workflow,
} from "lucide-react";

interface MockDoc {
  id: string;
  client: string;
  type: string;
  date: string;
  status: "En attente" | "Validé" | "À compléter" | "Refusé";
  size: string;
}

interface LogActivity {
  id: string;
  time: string;
  text: string;
  type: "info" | "success" | "warning" | "error";
}

interface FaqItem {
  q: string;
  a: string;
}

const initialDocs: MockDoc[] = [
  {
    id: "doc-1",
    client: "SARL Martin",
    type: "Kbis de l'entreprise",
    date: "Aujourd'hui",
    status: "En attente",
    size: "1.2 Mo",
  },
  {
    id: "doc-2",
    client: "Cabinet Nova",
    type: "Pièce d'identité dirigeant",
    date: "Hier",
    status: "Validé",
    size: "2.4 Mo",
  },
  {
    id: "doc-3",
    client: "Alpha Services",
    type: "Justificatif de domicile",
    date: "Hier",
    status: "À compléter",
    size: "1.8 Mo",
  },
  {
    id: "doc-4",
    client: "Transport IDF",
    type: "RIB",
    date: "12 Juin",
    status: "Validé",
    size: "940 Ko",
  },
  {
    id: "doc-5",
    client: "Innov Group",
    type: "Bilan comptable",
    date: "10 Juin",
    status: "En attente",
    size: "4.5 Mo",
  },
];

const initialLogs: LogActivity[] = [
  {
    id: "log-1",
    time: "10:42",
    text: "Nouveau document Kbis déposé par SARL Martin.",
    type: "info",
  },
  {
    id: "log-2",
    time: "Aujourd'hui",
    text: "Pièce d'identité validée pour Cabinet Nova.",
    type: "success",
  },
  {
    id: "log-3",
    time: "Hier",
    text: "Demande de complément envoyée à Alpha Services.",
    type: "warning",
  },
  {
    id: "log-4",
    time: "12 Juin",
    text: "Nouveau dossier créé pour Transport IDF.",
    type: "info",
  },
];

const faqs: FaqItem[] = [
  {
    q: "Cette application est-elle un vrai logiciel ou seulement un site web ?",
    a: "Il s’agit d’une application web métier. Contrairement à un simple site vitrine, elle permet de gérer des données, des rôles utilisateurs, des documents, des statuts, des notifications et un tableau de bord administrateur.",
  },
  {
    q: "Peut-on adapter cette solution à mon métier ?",
    a: "Oui. Le principe d’une application sur mesure est d’adapter l’outil à vos processus réels : dépôt de documents, suivi client, validation interne, notifications, facturation, signature ou automatisation.",
  },
  {
    q: "Peut-on commencer par une version simple ?",
    a: "Oui. Nous recommandons souvent de commencer par un MVP : une première version utile avec les fonctions prioritaires, puis d’ajouter progressivement de nouveaux modules selon les retours du terrain.",
  },
  {
    q: "Les clients peuvent-ils déposer des documents depuis leur téléphone ?",
    a: "Oui. L’interface peut être conçue pour fonctionner sur mobile, tablette et ordinateur afin que les clients puissent déposer des fichiers ou photos facilement.",
  },
  {
    q: "Peut-on envoyer des notifications automatiquement ?",
    a: "Oui. L’application peut envoyer des notifications par e-mail ou SMS selon les événements : document reçu, validé, refusé, demande de complément ou changement de statut.",
  },
  {
    q: "Les documents sont-ils sécurisés ?",
    a: "Nous mettons en place des règles d’accès, une authentification, des droits par rôle et de bonnes pratiques de stockage. Le niveau de sécurité dépend du type de données et du périmètre validé.",
  },
  {
    q: "Peut-on avoir plusieurs rôles : admin, client, collaborateur ?",
    a: "Oui. Il est possible de créer des rôles différents : administrateur, client, collaborateur, manager ou intervenant terrain, avec des accès adaptés à chaque profil.",
  },
  {
    q: "Peut-on ajouter la signature électronique plus tard ?",
    a: "Oui. Une architecture bien pensée peut évoluer vers des intégrations comme Yousign, DocuSign, Stripe, API métier, CRM ou outils comptables.",
  },
  {
    q: "Combien coûte ce type d’application ?",
    a: "Le coût dépend du nombre d’écrans, des rôles utilisateurs, du stockage, des automatisations, des intégrations externes et du niveau de design. Une phase de cadrage permet d’estimer le budget.",
  },
];

export function DemoEspaceClient() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [docsList, setDocsList] = useState<MockDoc[]>(initialDocs);
  const [activityLogs, setActivityLogs] =
    useState<LogActivity[]>(initialLogs);
  const [filterStatus, setFilterStatus] = useState<string>("Tous");
  const [selectedDoc, setSelectedDoc] = useState<MockDoc | null>(null);

  useEffect(() => {
    document.title =
      "Démo application web : espace client et dépôt de documents | VSW Digital";

    const metaDescription = document.querySelector('meta[name="description"]');

    if (metaDescription) {
      metaDescription.setAttribute(
        "content",
        "Découvrez un exemple d’application web sur mesure conçue par VSW Digital : espace client, dépôt de documents, tableau de bord, notifications et portail administrateur."
      );
    }

    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  const handleStatusChange = (docId: string, newStatus: MockDoc["status"]) => {
    const doc = docsList.find((item) => item.id === docId);

    if (!doc) return;

    setDocsList((prev) =>
      prev.map((item) =>
        item.id === docId ? { ...item, status: newStatus } : item
      )
    );

    const now = new Date();
    const timeStr = `${String(now.getHours()).padStart(2, "0")}:${String(
      now.getMinutes()
    ).padStart(2, "0")}`;

    let logType: LogActivity["type"] = "info";
    let logText = `Statut du document "${doc.type}" mis à jour pour ${doc.client}.`;

    if (newStatus === "Validé") {
      logType = "success";
      logText = `Document "${doc.type}" validé pour ${doc.client}. Notification automatique simulée.`;
    }

    if (newStatus === "À compléter") {
      logType = "warning";
      logText = `Demande de complément simulée pour ${doc.client} concernant "${doc.type}".`;
    }

    if (newStatus === "Refusé") {
      logType = "error";
      logText = `Document "${doc.type}" refusé pour ${doc.client}.`;
    }

    setActivityLogs((prev) => [
      {
        id: `log-${Date.now()}`,
        time: timeStr,
        text: logText,
        type: logType,
      },
      ...prev,
    ]);

    if (selectedDoc?.id === docId) {
      setSelectedDoc(null);
    }
  };

  const resetDemo = () => {
    setDocsList(initialDocs);
    setActivityLogs(initialLogs);
    setSelectedDoc(null);
    setFilterStatus("Tous");
  };

  const filteredDocs =
    filterStatus === "Tous"
      ? docsList
      : docsList.filter((doc) => doc.status === filterStatus);

  const totalDocs = docsList.length;
  const processedDocs = docsList.filter((doc) => doc.status === "Validé").length;
  const pendingDocs = docsList.filter(
    (doc) => doc.status === "En attente"
  ).length;
  const toCompleteDocs = docsList.filter(
    (doc) => doc.status === "À compléter"
  ).length;
  const percentageProcessed =
    totalDocs > 0 ? Math.round((processedDocs / totalDocs) * 100) : 0;

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
              Démo application web
            </span>

            <h1 className="font-display text-4xl font-bold leading-[1.05] tracking-[-0.04em] text-white md:text-6xl lg:text-7xl">
              Un exemple d’espace client pour{" "}
              <span className="bg-gradient-to-r from-[#3b82f6] via-sky-300 to-cyan-300 bg-clip-text text-transparent">
                gérer documents et dossiers
              </span>
            </h1>

            <p className="mt-7 max-w-3xl text-lg leading-8 text-slate-300 md:text-xl lg:mx-0">
              Découvrez comment VSW Digital peut transformer un processus manuel
              en application web : dépôt de documents, tableau de bord, statuts,
              notifications et portail administrateur.
            </p>

            <div className="mt-7 flex flex-wrap justify-center gap-3 lg:justify-start">
              {["Espace client", "Dépôt documents", "Dashboard", "Notifications"].map(
                (item) => (
                  <span
                    key={item}
                    className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.06] px-4 py-2 text-sm text-slate-200 backdrop-blur"
                  >
                    <Check className="h-4 w-4 text-[#3b82f6]" />
                    {item}
                  </span>
                )
              )}
            </div>

            <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row lg:justify-start">
              <Link
                to="/contact"
                className="group inline-flex items-center justify-center gap-2 rounded-2xl bg-[#3b82f6] px-8 py-4 font-semibold text-white shadow-2xl shadow-blue-500/30 transition-all hover:-translate-y-0.5 hover:bg-blue-400"
              >
                Créer une application similaire
                <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Link>

              <a
                href="#demonstrateur-live"
                className="inline-flex items-center justify-center rounded-2xl border border-white/15 bg-white/10 px-8 py-4 font-semibold text-white backdrop-blur transition-all hover:-translate-y-0.5 hover:bg-white/15"
              >
                Tester la démo
              </a>
            </div>
          </motion.div>

          {/* Mockup KPI */}
          <motion.div
            initial={{ opacity: 0, x: 28, scale: 0.97 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ delay: 0.15, duration: 0.75 }}
            className="relative mx-auto w-full max-w-xl"
          >
            <div className="absolute -inset-6 rounded-[2rem] bg-[#3b82f6]/20 blur-3xl" />

            <div className="relative overflow-hidden rounded-[2rem] border border-white/12 bg-white/[0.07] p-5 shadow-2xl shadow-black/30 backdrop-blur-xl">
              <div className="mb-5 flex items-center justify-between rounded-2xl border border-white/10 bg-[#020617]/70 px-4 py-3">
                <div className="flex items-center gap-2">
                  <Database className="h-4 w-4 text-[#3b82f6]" />
                  <span className="text-xs font-semibold text-slate-300">
                    Dashboard client
                  </span>
                </div>
                <span className="rounded-full bg-blue-500/10 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-blue-300">
                  Démo
                </span>
              </div>

              <div className="grid grid-cols-2 gap-3">
                {[
                  ["Fichiers reçus", "124", "text-white"],
                  ["Clients actifs", "38", "text-white"],
                  ["En attente", "12", "text-amber-400"],
                  ["Notifications", "7", "text-blue-300"],
                ].map(([label, value, color]) => (
                  <div
                    key={label}
                    className="rounded-2xl border border-white/5 bg-[#020617] p-4"
                  >
                    <p className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
                      {label}
                    </p>
                    <p className={`mt-2 font-display text-3xl font-bold ${color}`}>
                      {value}
                    </p>
                  </div>
                ))}
              </div>

              <div className="mt-4 rounded-2xl border border-white/5 bg-[#020617] p-4">
                <div className="mb-2 flex justify-between text-xs text-slate-400">
                  <span>Documents traités</span>
                  <span className="font-semibold text-emerald-400">76%</span>
                </div>
                <div className="h-2 overflow-hidden rounded-full bg-slate-800">
                  <div className="h-full w-[76%] rounded-full bg-gradient-to-r from-[#3b82f6] to-emerald-400" />
                </div>
              </div>

              <div className="mt-4 rounded-2xl border border-white/5 bg-white/[0.04] p-4">
                <p className="text-xs leading-6 text-slate-300">
                  Une application web permet de centraliser les dossiers,
                  limiter les échanges dispersés par e-mail et offrir une
                  meilleure visibilité à vos équipes.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CONTEXTE MÉTIER */}
      <section className="bg-white py-24 md:py-32">
        <div className="container mx-auto max-w-6xl px-6">
          <div className="grid items-center gap-14 lg:grid-cols-[0.95fr_1.05fr]">
            <div>
              <span className="mb-5 inline-flex rounded-full border border-rose-100 bg-rose-50 px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] text-rose-500">
                Problème métier
              </span>

              <h2 className="font-display text-3xl font-bold leading-tight tracking-[-0.03em] text-[#0f172a] md:text-5xl">
                Trop de documents, trop d’e-mails, trop de suivi manuel
              </h2>

              <p className="mt-6 text-base leading-8 text-slate-600">
                Beaucoup d’entreprises collectent encore leurs justificatifs,
                contrats, pièces administratives ou documents clients par e-mail.
                Les fichiers se dispersent, les relances deviennent manuelles et
                le suivi manque de clarté.
              </p>

              <p className="mt-4 text-base leading-8 text-slate-600">
                Une application web permet de centraliser les informations,
                attribuer des statuts, suivre l’avancement et automatiser les
                notifications importantes.
              </p>
            </div>

            <div className="rounded-[2rem] border border-slate-200 bg-slate-50 p-7">
              <h3 className="mb-6 font-display text-xl font-bold text-[#0f172a]">
                Problèmes fréquents résolus
              </h3>

              <div className="grid gap-3 sm:grid-cols-2">
                {[
                  "Documents envoyés par e-mail",
                  "Fichiers difficiles à retrouver",
                  "Absence de statut clair",
                  "Relances manuelles",
                  "Erreurs de suivi",
                  "Manque de visibilité client",
                  "Données dispersées",
                  "Collaboration difficile",
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-start gap-3 rounded-2xl border border-slate-200 bg-white p-4"
                  >
                    <span className="mt-0.5 font-bold text-rose-500">✕</span>
                    <span className="text-sm leading-6 text-slate-700">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* DOUBLE ESPACE */}
      <section className="bg-slate-50 py-24 md:py-32">
        <div className="container mx-auto max-w-7xl px-6">
          <div className="mx-auto mb-16 max-w-4xl text-center">
            <span className="mb-5 inline-flex rounded-full border border-blue-100 bg-blue-50 px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] text-[#3b82f6]">
              Architecture fonctionnelle
            </span>

            <h2 className="font-display text-3xl font-bold leading-tight tracking-[-0.03em] text-[#0f172a] md:text-5xl">
              Deux interfaces synchronisées : client et administrateur
            </h2>

            <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-slate-600">
              L’application peut être pensée autour d’un espace client simple et
              d’un portail administrateur complet pour vos équipes.
            </p>
          </div>

          <div className="grid gap-6 lg:grid-cols-2">
            <article className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm">
              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-50 text-[#3b82f6] ring-1 ring-blue-100">
                <Users className="h-7 w-7" />
              </div>

              <h3 className="font-display text-2xl font-bold text-[#0f172a]">
                Espace client
              </h3>

              <p className="mt-4 text-sm leading-7 text-slate-600">
                Une interface simple où le client peut consulter son dossier,
                déposer des documents, suivre l’avancement et recevoir les
                informations importantes.
              </p>

              <div className="mt-6 space-y-3 border-t border-slate-100 pt-5">
                {[
                  "Dépôt de documents",
                  "Suivi par statut",
                  "Notifications e-mail ou SMS",
                  "Interface mobile et tablette",
                  "Historique du dossier",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-emerald-500" />
                    <span className="text-sm text-slate-600">{item}</span>
                  </div>
                ))}
              </div>
            </article>

            <article className="rounded-[2rem] border border-slate-800 bg-[#0f172a] p-8 text-white shadow-2xl shadow-slate-900/20">
              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-white/10 text-blue-300 ring-1 ring-white/10">
                <ShieldCheck className="h-7 w-7" />
              </div>

              <h3 className="font-display text-2xl font-bold text-white">
                Portail administrateur
              </h3>

              <p className="mt-4 text-sm leading-7 text-slate-300">
                Une interface de pilotage pour vos équipes : liste des clients,
                documents reçus, validation, demande de complément, historique et
                statistiques.
              </p>

              <div className="mt-6 space-y-3 border-t border-white/10 pt-5">
                {[
                  "Liste clients centralisée",
                  "Validation en un clic",
                  "Demande de complément",
                  "Journal d’activité",
                  "Tableau de bord de suivi",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-emerald-400" />
                    <span className="text-sm text-slate-300">{item}</span>
                  </div>
                ))}
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* DEMONSTRATEUR */}
      <section id="demonstrateur-live" className="bg-white py-24 md:py-32">
        <div className="container mx-auto max-w-7xl px-6">
          <div className="mx-auto mb-16 max-w-4xl text-center">
            <span className="mb-5 inline-flex rounded-full border border-blue-100 bg-blue-50 px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] text-[#3b82f6]">
              Démonstration interactive
            </span>

            <h2 className="font-display text-3xl font-bold leading-tight tracking-[-0.03em] text-[#0f172a] md:text-5xl">
              Testez la logique de validation documentaire
            </h2>

            <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-slate-600">
              Cliquez sur un document, changez son statut et observez la mise à
              jour simulée des statistiques et du journal d’activité.
            </p>
          </div>

          <div className="mb-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {[
              ["Total documents", totalDocs, "text-[#0f172a]"],
              ["Validés", processedDocs, "text-emerald-600"],
              ["En attente", pendingDocs, "text-amber-500"],
              ["À compléter", toCompleteDocs, "text-rose-500"],
              ["Taux traité", `${percentageProcessed}%`, "text-[#3b82f6]"],
            ].map(([label, value, color]) => (
              <div
                key={label}
                className="rounded-2xl border border-slate-200 bg-slate-50 p-5"
              >
                <p className="text-[10px] font-bold uppercase tracking-wider text-slate-500">
                  {label}
                </p>
                <p className={`mt-2 font-display text-3xl font-bold ${color}`}>
                  {value}
                </p>
              </div>
            ))}
          </div>

          <div className="grid gap-8 lg:grid-cols-[1.4fr_0.8fr]">
            <div className="rounded-[2rem] bg-[#0f172a] p-6 text-white shadow-2xl shadow-slate-900/20 md:p-8">
              <div className="mb-6 flex flex-col justify-between gap-4 border-b border-white/10 pb-5 sm:flex-row sm:items-center">
                <div>
                  <h3 className="font-display text-xl font-bold text-white">
                    Portail admin — documents
                  </h3>
                  <p className="mt-1 text-sm text-slate-400">
                    Simulation d’un tableau de bord administrateur.
                  </p>
                </div>

                <button
                  type="button"
                  onClick={resetDemo}
                  className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-sm font-semibold text-slate-300 transition-all hover:bg-white/10"
                >
                  <RefreshCw className="h-4 w-4" />
                  Réinitialiser
                </button>
              </div>

              <div className="mb-5 flex gap-2 overflow-x-auto rounded-2xl border border-white/10 bg-[#020617] p-2">
                {["Tous", "En attente", "Validé", "À compléter"].map((status) => (
                  <button
                    key={status}
                    type="button"
                    onClick={() => {
                      setFilterStatus(status);
                      setSelectedDoc(null);
                    }}
                    className={`whitespace-nowrap rounded-xl px-4 py-2 text-xs font-semibold transition-all ${
                      filterStatus === status
                        ? "bg-[#3b82f6] text-white"
                        : "text-slate-400 hover:bg-white/5 hover:text-white"
                    }`}
                  >
                    {status}
                  </button>
                ))}
              </div>

              <div className="overflow-x-auto">
                <table className="min-w-[680px] w-full text-left text-sm">
                  <thead>
                    <tr className="border-b border-white/10 text-[10px] uppercase tracking-wider text-slate-400">
                      <th className="px-2 py-3">Client</th>
                      <th className="px-2 py-3">Document</th>
                      <th className="px-2 py-3">Date</th>
                      <th className="px-2 py-3">Statut</th>
                      <th className="px-2 py-3 text-right">Actions</th>
                    </tr>
                  </thead>

                  <tbody className="divide-y divide-white/5">
                    {filteredDocs.map((doc) => (
                      <tr
                        key={doc.id}
                        onClick={() => setSelectedDoc(doc)}
                        className={`cursor-pointer transition-colors hover:bg-white/5 ${
                          selectedDoc?.id === doc.id ? "bg-white/5" : ""
                        }`}
                      >
                        <td className="px-2 py-4 font-semibold text-white">
                          {doc.client}
                        </td>
                        <td className="px-2 py-4 text-slate-300">
                          {doc.type}{" "}
                          <span className="text-xs text-slate-500">
                            ({doc.size})
                          </span>
                        </td>
                        <td className="px-2 py-4 text-slate-400">{doc.date}</td>
                        <td className="px-2 py-4">
                          <span
                            className={`rounded-full border px-2.5 py-1 text-[10px] font-bold ${
                              doc.status === "Validé"
                                ? "border-emerald-500/20 bg-emerald-500/10 text-emerald-400"
                                : doc.status === "En attente"
                                  ? "border-amber-500/20 bg-amber-500/10 text-amber-400"
                                  : doc.status === "Refusé"
                                    ? "border-rose-500/20 bg-rose-500/10 text-rose-400"
                                    : "border-rose-500/20 bg-rose-500/10 text-rose-400"
                            }`}
                          >
                            {doc.status}
                          </span>
                        </td>
                        <td
                          className="px-2 py-4 text-right"
                          onClick={(event) => event.stopPropagation()}
                        >
                          <div className="flex justify-end gap-2">
                            {doc.status !== "Validé" && (
                              <button
                                type="button"
                                onClick={() =>
                                  handleStatusChange(doc.id, "Validé")
                                }
                                className="rounded-lg bg-emerald-500/10 px-3 py-1.5 text-xs font-bold text-emerald-400 transition-all hover:bg-emerald-500 hover:text-[#020617]"
                              >
                                Valider
                              </button>
                            )}

                            {doc.status !== "À compléter" && (
                              <button
                                type="button"
                                onClick={() =>
                                  handleStatusChange(doc.id, "À compléter")
                                }
                                className="rounded-lg bg-amber-500/10 px-3 py-1.5 text-xs font-bold text-amber-400 transition-all hover:bg-amber-500 hover:text-[#020617]"
                              >
                                Compléter
                              </button>
                            )}
                          </div>
                        </td>
                      </tr>
                    ))}

                    {filteredDocs.length === 0 && (
                      <tr>
                        <td
                          colSpan={5}
                          className="px-2 py-8 text-center text-slate-500"
                        >
                          Aucun document correspondant à ce filtre.
                        </td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>

              <AnimatePresence>
                {selectedDoc && (
                  <motion.div
                    initial={{ opacity: 0, y: 14 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 14 }}
                    className="mt-6 rounded-2xl border border-white/10 bg-white/[0.06] p-5"
                  >
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <p className="text-xs uppercase tracking-wider text-slate-400">
                          Document sélectionné
                        </p>
                        <h4 className="mt-1 font-display text-lg font-bold text-white">
                          {selectedDoc.client} — {selectedDoc.type}
                        </h4>
                      </div>

                      <button
                        type="button"
                        onClick={() => setSelectedDoc(null)}
                        className="text-slate-400 transition-colors hover:text-white"
                      >
                        ✕
                      </button>
                    </div>

                    <p className="mt-4 text-sm leading-7 text-slate-300">
                      Cette zone simule une visionneuse de document. Dans une
                      vraie application, l’administrateur pourrait consulter le
                      fichier, valider, refuser ou demander un complément.
                    </p>

                    <div className="mt-5 flex flex-wrap gap-2">
                      <button
                        type="button"
                        onClick={() =>
                          handleStatusChange(selectedDoc.id, "Validé")
                        }
                        className="inline-flex items-center gap-2 rounded-xl bg-emerald-500 px-4 py-2 text-sm font-bold text-[#020617]"
                      >
                        <CheckCircle className="h-4 w-4" />
                        Valider
                      </button>

                      <button
                        type="button"
                        onClick={() =>
                          handleStatusChange(selectedDoc.id, "À compléter")
                        }
                        className="inline-flex items-center gap-2 rounded-xl bg-amber-500 px-4 py-2 text-sm font-bold text-[#020617]"
                      >
                        <RefreshCw className="h-4 w-4" />
                        Complément
                      </button>

                      <button
                        type="button"
                        onClick={() =>
                          handleStatusChange(selectedDoc.id, "Refusé")
                        }
                        className="inline-flex items-center gap-2 rounded-xl bg-rose-600 px-4 py-2 text-sm font-bold text-white"
                      >
                        <FileX className="h-4 w-4" />
                        Refuser
                      </button>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <div className="rounded-[2rem] border border-slate-200 bg-slate-50 p-6 shadow-sm md:p-8">
              <div className="mb-5 flex items-center gap-2">
                <span className="h-2.5 w-2.5 rounded-full bg-emerald-500" />
                <h3 className="font-display text-lg font-bold text-[#0f172a]">
                  Journal d’activité
                </h3>
              </div>

              <p className="mb-5 text-sm leading-7 text-slate-600">
                Chaque action ajoute une ligne au journal. Dans une vraie
                application, ces événements peuvent déclencher des notifications
                ou alimenter l’historique client.
              </p>

              <div className="max-h-[480px] space-y-3 overflow-y-auto pr-1">
                {activityLogs.map((log) => (
                  <div
                    key={log.id}
                    className="rounded-2xl border border-slate-200 bg-white p-4"
                  >
                    <div className="mb-1 flex items-center justify-between gap-4">
                      <span
                        className={`text-[10px] font-bold uppercase tracking-wider ${
                          log.type === "success"
                            ? "text-emerald-600"
                            : log.type === "warning"
                              ? "text-amber-600"
                              : log.type === "error"
                                ? "text-rose-600"
                                : "text-[#3b82f6]"
                        }`}
                      >
                        {log.type === "success"
                          ? "Validé"
                          : log.type === "warning"
                            ? "Relance"
                            : log.type === "error"
                              ? "Refus"
                              : "Info"}
                      </span>

                      <span className="text-xs text-slate-400">{log.time}</span>
                    </div>

                    <p className="text-sm leading-6 text-slate-700">
                      {log.text}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FONCTIONNALITÉS */}
      <section className="bg-slate-50 py-24 md:py-32">
        <div className="container mx-auto max-w-7xl px-6">
          <div className="mx-auto mb-16 max-w-4xl text-center">
            <span className="mb-5 inline-flex rounded-full border border-blue-100 bg-blue-50 px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] text-[#3b82f6]">
              Fonctionnalités
            </span>

            <h2 className="font-display text-3xl font-bold leading-tight tracking-[-0.03em] text-[#0f172a] md:text-5xl">
              Les modules possibles dans ce type d’application
            </h2>

            <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-slate-600">
              Le démonstrateur illustre une base fonctionnelle qui peut être
              adaptée à votre métier et enrichie progressivement.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                icon: Lock,
                title: "Authentification",
                desc: "Connexion client, administrateur ou collaborateur avec règles d’accès adaptées.",
              },
              {
                icon: UploadCloud,
                title: "Dépôt de documents",
                desc: "Upload de PDF, images, justificatifs, contrats ou pièces administratives.",
              },
              {
                icon: Activity,
                title: "Gestion des statuts",
                desc: "Suivi clair : en attente, validé, à compléter, refusé ou traité.",
              },
              {
                icon: Bot,
                title: "Notifications automatiques",
                desc: "Envoi d’e-mails ou SMS selon les changements de statut ou actions importantes.",
              },
              {
                icon: BarChart3,
                title: "Tableau de bord",
                desc: "Indicateurs de suivi : dossiers, documents, validations, relances, délais.",
              },
              {
                icon: Clock,
                title: "Historique des actions",
                desc: "Journal d’activité pour suivre les événements et les interventions.",
              },
              {
                icon: Server,
                title: "Stockage cloud",
                desc: "Organisation des fichiers avec règles d’accès et bonnes pratiques de sécurité.",
              },
              {
                icon: Search,
                title: "Recherche & filtres",
                desc: "Recherche par client, document, statut ou période selon les besoins.",
              },
              {
                icon: Settings,
                title: "Rôles utilisateurs",
                desc: "Accès différenciés pour admin, client, collaborateur ou manager.",
              },
            ].map((feature, index) => {
              const Icon = feature.icon;

              return (
                <motion.article
                  key={feature.title}
                  initial={{ opacity: 0, y: 22 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.04 }}
                  className="rounded-[1.6rem] border border-slate-200 bg-white p-7 shadow-sm transition-all hover:-translate-y-1 hover:border-blue-200 hover:shadow-xl hover:shadow-blue-500/10"
                >
                  <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-50 text-[#3b82f6] ring-1 ring-blue-100">
                    <Icon className="h-7 w-7" />
                  </div>

                  <h3 className="font-display text-xl font-bold text-[#0f172a]">
                    {feature.title}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-slate-600">
                    {feature.desc}
                  </p>
                </motion.article>
              );
            })}
          </div>
        </div>
      </section>

      {/* PARCOURS */}
      <section className="bg-[#0f172a] py-24 text-white md:py-32">
        <div className="container mx-auto max-w-7xl px-6">
          <div className="mx-auto mb-16 max-w-4xl text-center">
            <span className="mb-5 inline-flex rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] text-blue-300">
              Parcours utilisateur
            </span>

            <h2 className="font-display text-3xl font-bold leading-tight tracking-[-0.03em] text-white md:text-5xl">
              Une expérience simple côté client, efficace côté admin
            </h2>

            <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-slate-300">
              L’objectif est de simplifier la vie de vos clients tout en donnant
              à vos équipes une vision claire des dossiers.
            </p>
          </div>

          <div className="grid gap-6 lg:grid-cols-2">
            {[
              {
                icon: Users,
                title: "Parcours client",
                color: "text-cyan-300",
                steps: [
                  "Le client accède à son espace sécurisé.",
                  "Il consulte les documents demandés.",
                  "Il dépose ses fichiers depuis mobile ou ordinateur.",
                  "Il suit l’état de chaque pièce.",
                  "Il reçoit une notification en cas de validation ou complément.",
                ],
              },
              {
                icon: ShieldCheck,
                title: "Parcours administrateur",
                color: "text-blue-300",
                steps: [
                  "L’équipe reçoit une alerte de nouveau dépôt.",
                  "Elle consulte le dossier client.",
                  "Elle valide ou demande un complément.",
                  "Le statut est mis à jour.",
                  "L’historique conserve la trace de l’action.",
                ],
              },
            ].map((block) => {
              const Icon = block.icon;

              return (
                <article
                  key={block.title}
                  className="rounded-[2rem] border border-white/10 bg-white/[0.06] p-8"
                >
                  <h3
                    className={`mb-7 flex items-center gap-3 font-display text-2xl font-bold ${block.color}`}
                  >
                    <Icon className="h-6 w-6" />
                    {block.title}
                  </h3>

                  <div className="space-y-5">
                    {block.steps.map((step, index) => (
                      <div key={step} className="flex gap-4">
                        <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-white/10 bg-white/5 text-xs font-bold text-white">
                          {index + 1}
                        </div>
                        <p className="text-sm leading-7 text-slate-300">
                          {step}
                        </p>
                      </div>
                    ))}
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* SECTEURS */}
      <section className="bg-white py-24 md:py-32">
        <div className="container mx-auto max-w-7xl px-6">
          <div className="mx-auto mb-16 max-w-4xl text-center">
            <span className="mb-5 inline-flex rounded-full border border-blue-100 bg-blue-50 px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] text-[#3b82f6]">
              Domaines concernés
            </span>

            <h2 className="font-display text-3xl font-bold leading-tight tracking-[-0.03em] text-[#0f172a] md:text-5xl">
              Pour quels métiers ce type d’application est utile ?
            </h2>

            <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-slate-600">
              Dès qu’une entreprise collecte des documents, suit des dossiers ou
              relance des clients, une application web peut simplifier le
              processus.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "Cabinets comptables",
                desc: "Dépôt de pièces, factures, bilans, justificatifs et suivi client.",
              },
              {
                title: "Domiciliation d’entreprises",
                desc: "Contrats, Kbis, pièces d’identité, courriers et espace client.",
              },
              {
                title: "Organismes de formation",
                desc: "Documents d’inscription, attestations, feuilles de présence et suivi apprenant.",
              },
              {
                title: "Déménagement & logistique",
                desc: "Bons, photos, documents clients, dossiers commerciaux et suivi opérationnel.",
              },
              {
                title: "Rénovation & BTP",
                desc: "Photos de chantier, justificatifs, PV, devis, contrats et suivi client.",
              },
              {
                title: "Sécurité privée",
                desc: "Agréments, attestations, dossiers agents, plannings ou documents réglementaires.",
              },
            ].map((sector) => (
              <article
                key={sector.title}
                className="rounded-[1.6rem] border border-slate-200 bg-slate-50 p-7 transition-all hover:-translate-y-1 hover:border-blue-200 hover:bg-white hover:shadow-xl hover:shadow-blue-500/10"
              >
                <h3 className="font-display text-xl font-bold text-[#0f172a]">
                  {sector.title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-slate-600">
                  {sector.desc}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* SÉCURITÉ */}
      <section className="bg-slate-50 py-24 md:py-32">
        <div className="container mx-auto max-w-6xl px-6">
          <div className="grid items-center gap-12 rounded-[2.5rem] border border-slate-200 bg-white p-8 shadow-sm md:p-12 lg:grid-cols-[1.1fr_0.9fr]">
            <div>
              <span className="mb-5 inline-flex rounded-full border border-rose-100 bg-rose-50 px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] text-rose-500">
                Sécurité & RGPD
              </span>

              <h2 className="font-display text-3xl font-bold leading-tight tracking-[-0.03em] text-[#0f172a] md:text-5xl">
                Des règles d’accès pensées dès la conception
              </h2>

              <p className="mt-6 text-base leading-8 text-slate-600">
                Les documents clients peuvent contenir des informations
                sensibles. Nous intégrons dès le départ l’authentification, les
                rôles, les permissions, les règles d’accès et les bonnes
                pratiques de stockage.
              </p>

              <div className="mt-8 grid gap-3 sm:grid-cols-2">
                {[
                  "Authentification utilisateur",
                  "Rôles administrateur / client",
                  "Accès limités par dossier",
                  "Stockage cloud structuré",
                  "Journal d’activité",
                  "Bonnes pratiques RGPD",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-emerald-500" />
                    <span className="text-sm text-slate-600">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-[2rem] bg-[#0f172a] p-8 text-center text-white">
              <Lock className="mx-auto h-12 w-12 text-blue-300" />
              <h3 className="mt-6 font-display text-2xl font-bold text-white">
                Accès contrôlés
              </h3>
              <p className="mt-4 text-sm leading-7 text-slate-300">
                Le niveau de sécurité est défini selon la nature des données,
                les rôles utilisateurs et les obligations de votre activité.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* MVP */}
      <section className="bg-white py-24 md:py-32">
        <div className="container mx-auto max-w-4xl px-6 text-center">
          <span className="mb-5 inline-flex rounded-full border border-emerald-100 bg-emerald-50 px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] text-emerald-600">
            Méthode MVP
          </span>

          <h2 className="font-display text-3xl font-bold leading-tight tracking-[-0.03em] text-[#0f172a] md:text-5xl">
            Commencer simple, puis enrichir progressivement
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-slate-600">
            Plutôt que de développer trop de fonctionnalités d’un coup, nous
            recommandons souvent de commencer par une première version utile :
            dépôt de documents, statuts, espace client et tableau admin.
          </p>

          <div className="mt-10 grid gap-4 text-left sm:grid-cols-2">
            {[
              "Version initiale plus rapide à tester",
              "Budget mieux maîtrisé",
              "Adoption progressive par les équipes",
              "Évolutions selon les vrais retours",
            ].map((item) => (
              <div
                key={item}
                className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-slate-50 p-5"
              >
                <Check className="h-5 w-5 text-emerald-500" />
                <span className="text-sm font-semibold text-slate-700">
                  {item}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* OFFRES */}
      <section className="bg-slate-50 py-24 md:py-32">
        <div className="container mx-auto max-w-7xl px-6">
          <div className="mx-auto mb-16 max-w-4xl text-center">
            <span className="mb-5 inline-flex rounded-full border border-blue-100 bg-blue-50 px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] text-[#3b82f6]">
              Niveaux d’accompagnement
            </span>

            <h2 className="font-display text-3xl font-bold leading-tight tracking-[-0.03em] text-[#0f172a] md:text-5xl">
              Trois niveaux pour cadrer ou lancer votre application
            </h2>

            <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-slate-600">
              Le périmètre dépend de votre besoin : prototype, MVP opérationnel
              ou application métier plus complète.
            </p>
          </div>

          <div className="grid gap-6 lg:grid-cols-3">
            {[
              {
                tag: "Cadrage",
                title: "Prototype / démonstrateur",
                desc: "Pour valider le parcours, la structure des données et l’intérêt métier avant développement complet.",
                features: [
                  "Maquette fonctionnelle",
                  "Parcours client / admin",
                  "Structure des données",
                  "Démonstrateur simulé",
                  "Estimation du périmètre MVP",
                ],
              },
              {
                tag: "Recommandé PME",
                title: "MVP fonctionnel",
                desc: "Pour lancer une première version utilisable par vos clients ou équipes avec les fonctions essentielles.",
                features: [
                  "Base de données opérationnelle",
                  "Authentification",
                  "Dépôt de documents",
                  "Gestion des statuts",
                  "Notifications standards",
                ],
              },
              {
                tag: "Évolutif",
                title: "Application métier complète",
                desc: "Pour aller plus loin avec plusieurs rôles, automatisations, API, paiements ou génération de documents.",
                features: [
                  "Gestion multi-rôles",
                  "Automatisations avancées",
                  "Intégrations API",
                  "Tableaux de bord complets",
                  "Maintenance évolutive",
                ],
              },
            ].map((offer, index) => (
              <motion.article
                key={offer.title}
                initial={{ opacity: 0, y: 22 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.06 }}
                className={`rounded-[1.8rem] border bg-white p-8 shadow-sm transition-all hover:-translate-y-1 hover:shadow-2xl ${
                  index === 1
                    ? "border-blue-200 shadow-blue-500/10"
                    : "border-slate-200"
                }`}
              >
                <span
                  className={`rounded-full px-3 py-1 text-[10px] font-bold uppercase tracking-wider ${
                    index === 1
                      ? "bg-[#3b82f6] text-white"
                      : "bg-blue-50 text-[#3b82f6]"
                  }`}
                >
                  {offer.tag}
                </span>

                <h3 className="mt-5 font-display text-2xl font-bold text-[#0f172a]">
                  {offer.title}
                </h3>

                <p className="mt-4 text-sm leading-7 text-slate-600">
                  {offer.desc}
                </p>

                <div className="mt-7 space-y-3 border-t border-slate-100 pt-6">
                  {offer.features.map((feature) => (
                    <div key={feature} className="flex items-start gap-3">
                      <CheckCircle className="mt-0.5 h-5 w-5 shrink-0 text-[#3b82f6]" />
                      <span className="text-sm leading-6 text-slate-600">
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>

                <Link
                  to="/contact"
                  className="mt-8 inline-flex w-full items-center justify-center rounded-2xl bg-[#3b82f6] px-6 py-4 font-semibold text-white transition-all hover:bg-blue-400"
                >
                  Demander une étude
                </Link>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-white py-24 md:py-32">
        <div className="container mx-auto max-w-4xl px-6">
          <div className="mb-14 text-center">
            <span className="mb-5 inline-flex rounded-full border border-blue-100 bg-blue-50 px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] text-[#3b82f6]">
              FAQ
            </span>

            <h2 className="font-display text-3xl font-bold leading-tight tracking-[-0.03em] text-[#0f172a] md:text-5xl">
              Questions fréquentes
            </h2>

            <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-slate-600">
              Les réponses essentielles avant de créer un espace client ou une
              application métier.
            </p>
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
            Application web sur mesure
          </span>

          <h2 className="font-display text-3xl font-bold leading-tight tracking-[-0.03em] text-white md:text-5xl">
            Vous voulez créer un espace client ou une application métier ?
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-slate-300 md:text-lg">
            Présentez-nous votre processus actuel, vos fichiers, vos relances et
            vos besoins. VSW Digital vous aide à cadrer une première version
            utile, claire et évolutive.
          </p>

          <div className="mt-10">
            <Link
              to="/contact"
              className="group inline-flex items-center justify-center gap-2 rounded-2xl bg-[#3b82f6] px-8 py-4 font-semibold text-white shadow-2xl shadow-blue-500/30 transition-all hover:-translate-y-0.5 hover:bg-blue-400"
            >
              Parler de mon application
              <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}