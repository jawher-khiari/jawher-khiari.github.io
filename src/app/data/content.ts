// Bilingual content + contact details for the portfolio. EN / FR.
export type Lang = 'en' | 'fr';

export interface ExperienceItem {
  role: string; company: string; location: string;
  period: string; current: boolean; context: string; points: string[];
}
export interface SkillGroup { name: string; items: string[]; }
export interface ProjectItem { tag: string; title: string; desc: string; stack: string[]; }
export interface UpcomingItem { title: string; desc: string; img?: string; }
export interface Stat { value: string; label: string; }

export interface Content {
  nav: { about: string; experience: string; skills: string; projects: string; contact: string };
  cta: { work: string; cv: string; send: string };
  hero: { status: string; name: string; title: string; tagline: string; location: string };
  about: { eyebrow: string; index: string; title: string; body: string; body2: string; stats: Stat[] };
  experience: { eyebrow: string; index: string; title: string; items: ExperienceItem[] };
  skills: { eyebrow: string; index: string; title: string; groups: SkillGroup[] };
  projects: { eyebrow: string; index: string; title: string; lead: string; items: ProjectItem[] };
  upcoming: { eyebrow: string; index: string; title: string; lead: string; badge: string; items: UpcomingItem[] };
  contact: {
    eyebrow: string; index: string; title: string; lead: string;
    form: { name: string; email: string; message: string; namePh: string; emailPh: string; msgPh: string };
    detailsLabel: string;
  };
  footer: { built: string; rights: string };
  a11y: { theme: string; lang: string; menu: string };
}

export const JK_CONTACT = {
  email: 'jawherk76@gmail.com',
  phone: '+216 20 062 812',
  phoneHref: '+21620062812',
  linkedin: 'linkedin.com/in/jawher-khiari',
  linkedinHref: 'https://www.linkedin.com/in/jawher-khiari',
  github: 'github.com/jawherk',
  githubHref: 'https://github.com/jawherk',
};

export const JK_DATA: Record<Lang, Content> = {
  en: {
    nav: { about: 'About', experience: 'Experience', skills: 'Skills', projects: 'Projects', contact: 'Contact' },
    cta: { work: 'View Work', cv: 'Download CV', send: 'Send message' },
    hero: {
      status: 'Available for new projects',
      name: 'Jawher Khiari',
      title: 'Full Stack .NET / Angular Developer',
      tagline: 'I design, optimize and secure scalable systems with .NET 8, C#, ASP.NET Core and Angular.',
      location: 'Nabeul, Tunisia',
    },
    about: {
      eyebrow: 'About', index: '01', title: 'Building secure, scalable systems — end to end.',
      body: 'Full stack developer with hands-on experience designing, optimizing and securing scalable systems. I build resilient backends with .NET 8 and ASP.NET Core, reactive front-ends with Angular, and the integrations that tie enterprise SaaS together.',
      body2: 'My work spans 100+ third-party integrations, JWT-secured document portals, and architecture modernizations that measurably moved performance.',
      stats: [
        { value: '100+', label: 'Third-party integrations shipped' },
        { value: '+20%', label: 'Backend response-time improvement' },
        { value: 'JWT', label: 'Secured external portals' },
        { value: '.NET 6→8', label: 'Backend modernization led' },
      ],
    },
    experience: {
      eyebrow: 'Experience', index: '02', title: "Where I've shipped",
      items: [
        {
          role: 'Full Stack Engineer', company: 'Ceel.io', location: 'Tunis, Tunisia',
          period: 'Oct 2023 – Present', current: true, context: 'Backend focus · Compliance SaaS',
          points: [
            'Designed and maintained backend services with .NET 8, C#, ASP.NET Core Web API.',
            'Built reactive Angular 14/17/20 UIs with services and NgRx state management.',
            'Designed & built 100+ integrations via Unified API — plus Jira, GitHub, GitLab, Azure, Slack, Teams and Asana connectors from scratch.',
            'Built the Trust Center module: secure external document portals with JWT + refresh-token auth.',
            'Led the .NET 6 → .NET 8 backend modernization and improved response time by 20% with policy-based authorization.',
          ],
        },
        {
          role: 'Software Engineer Intern', company: 'Ceel.io', location: 'Tunis, Tunisia',
          period: 'Feb 2023 – Sep 2023', current: false, context: 'Security automation',
          points: [
            'Built backend automation workflows for vulnerability scanning.',
            'Implemented CVE/CWE-based reporting pipelines.',
            'Significantly reduced manual security-audit effort.',
          ],
        },
      ],
    },
    skills: {
      eyebrow: 'Skills', index: '03', title: 'The stack I work in',
      groups: [
        { name: 'Backend', items: ['.NET 6 / .NET 8', 'C#', 'ASP.NET Core', 'Web API', 'RESTful Services', 'Policy-based Auth'] },
        { name: 'Frontend', items: ['Angular 14 / 17 / 20', 'TypeScript', 'RxJS', 'NgRx / Store', 'Reactive Components'] },
        { name: 'Integrations', items: ['Unified API', 'Jira', 'GitHub', 'GitLab', 'Azure', 'Slack', 'Teams', 'Asana', 'Webhooks'] },
        { name: 'Security', items: ['JWT', 'Refresh Tokens', 'Secure Coding', 'CVE / CWE Analysis', 'Access Management'] },
        { name: 'Databases', items: ['PostgreSQL', 'Data Modeling', 'Query Optimization', 'ORM Concepts'] },
        { name: 'Engineering', items: ['Git', 'Clean Architecture', 'Design Patterns', 'Automated Testing', 'Reusable Components'] },
      ],
    },
    projects: {
      eyebrow: 'Projects', index: '04', title: 'Selected work',
      lead: 'Shipped highlights from building compliance SaaS at Ceel.io.',
      items: [
        { tag: 'Integrations', title: '100+ Third-Party Integrations', desc: 'Designed and auto-generated 100+ connectors with Unified API, plus hand-built connectors for Jira, GitHub, GitLab, Azure, Slack, Teams and Asana.', stack: ['Unified API', 'C#', 'Webhooks'] },
        { tag: 'Security', title: 'Trust Center Module', desc: 'Secure external portals for document review, with access-request management and JWT + refresh-token authentication.', stack: ['JWT', 'ASP.NET Core', 'Angular'] },
        { tag: 'Architecture', title: 'Backend Modernization · .NET 6 → 8', desc: 'Led the migration to .NET 8 and a global DTO architecture, improving backend response time by 20% with policy-based authorization.', stack: ['.NET 8', 'Clean Arch', 'DTOs'] },
      ],
    },
    upcoming: {
      eyebrow: 'Upcoming', index: '05', title: 'In the workshop',
      lead: 'Work in progress — screenshots landing soon.',
      badge: 'Work in progress',
      items: [
        { title: 'Portfolio v2 — Angular', desc: 'This very site, rebuilt as a production Angular app with SSR.' },
        { title: 'Connector SDK', desc: 'A reusable .NET SDK for spinning up third-party integrations fast.' },
        { title: 'Compliance Dashboard', desc: 'Realtime compliance monitoring with live integration health.' },
      ],
    },
    contact: {
      eyebrow: 'Contact', index: '06', title: "Let's build something",
      lead: 'Open to full stack and backend roles, freelance integrations, and security-minded SaaS work.',
      form: { name: 'Name', email: 'Email', message: 'Message', namePh: 'Your name', emailPh: 'you@company.com', msgPh: 'Tell me about your project…' },
      detailsLabel: 'Direct',
    },
    footer: { built: 'Designed & built by Jawher Khiari', rights: 'All rights reserved.' },
    a11y: { theme: 'Toggle light / dark theme', lang: 'Switch language', menu: 'Open menu' },
  },

  fr: {
    nav: { about: 'À propos', experience: 'Expérience', skills: 'Compétences', projects: 'Projets', contact: 'Contact' },
    cta: { work: 'Voir mes projets', cv: 'Télécharger le CV', send: 'Envoyer le message' },
    hero: {
      status: 'Disponible pour de nouveaux projets',
      name: 'Jawher Khiari',
      title: 'Développeur Full Stack .NET / Angular',
      tagline: 'Je conçois, optimise et sécurise des systèmes évolutifs avec .NET 8, C#, ASP.NET Core et Angular.',
      location: 'Nabeul, Tunisie',
    },
    about: {
      eyebrow: 'À propos', index: '01', title: 'Concevoir des systèmes sûrs et évolutifs, de bout en bout.',
      body: 'Développeur full stack avec une expérience pratique dans la conception, l’optimisation et la sécurisation de systèmes évolutifs. Je construis des back-ends robustes avec .NET 8 et ASP.NET Core, des front-ends réactifs avec Angular, et les intégrations qui relient les SaaS d’entreprise.',
      body2: 'Mon travail couvre plus de 100 intégrations tierces, des portails de documents sécurisés par JWT, et des modernisations d’architecture aux gains de performance mesurables.',
      stats: [
        { value: '100+', label: 'Intégrations tierces livrées' },
        { value: '+20%', label: 'Temps de réponse backend amélioré' },
        { value: 'JWT', label: 'Portails externes sécurisés' },
        { value: '.NET 6→8', label: 'Modernisation backend pilotée' },
      ],
    },
    experience: {
      eyebrow: 'Expérience', index: '02', title: 'Mon parcours',
      items: [
        {
          role: 'Ingénieur Full Stack', company: 'Ceel.io', location: 'Tunis, Tunisie',
          period: 'Oct. 2023 – Présent', current: true, context: 'Spécialisation backend · SaaS de conformité',
          points: [
            'Conception et maintenance de services backend avec .NET 8, C#, ASP.NET Core Web API.',
            'Développement d’interfaces Angular 14/17/20 réactives avec services et gestion d’état NgRx.',
            'Conception et développement de plus de 100 intégrations via Unified API — connecteurs Jira, GitHub, GitLab, Azure, Slack, Teams et Asana développés from scratch.',
            'Développement du module Trust Center : portails externes sécurisés avec authentification JWT et refresh token.',
            'Pilotage de la modernisation .NET 6 → .NET 8 et amélioration du temps de réponse de 20 % via l’autorisation basée sur les politiques.',
          ],
        },
        {
          role: 'Ingénieur Logiciel Stagiaire', company: 'Ceel.io', location: 'Tunis, Tunisie',
          period: 'Fév. 2023 – Sep. 2023', current: false, context: 'Automatisation de la sécurité',
          points: [
            'Développement de workflows d’automatisation backend pour l’analyse de vulnérabilités.',
            'Implémentation de pipelines de reporting basés sur CVE/CWE.',
            'Réduction significative de l’effort d’audit de sécurité manuel.',
          ],
        },
      ],
    },
    skills: {
      eyebrow: 'Compétences', index: '03', title: 'Ma stack technique',
      groups: [
        { name: 'Backend', items: ['.NET 6 / .NET 8', 'C#', 'ASP.NET Core', 'Web API', 'Services RESTful', 'Autorisation par politiques'] },
        { name: 'Frontend', items: ['Angular 14 / 17 / 20', 'TypeScript', 'RxJS', 'NgRx / Store', 'Composants réactifs'] },
        { name: 'Intégrations', items: ['Unified API', 'Jira', 'GitHub', 'GitLab', 'Azure', 'Slack', 'Teams', 'Asana', 'Webhooks'] },
        { name: 'Sécurité', items: ['JWT', 'Refresh Tokens', 'Codage sécurisé', 'Analyse CVE / CWE', 'Gestion des accès'] },
        { name: 'Bases de données', items: ['PostgreSQL', 'Modélisation', 'Optimisation des requêtes', 'Concepts ORM'] },
        { name: 'Génie logiciel', items: ['Git', 'Clean Architecture', 'Design Patterns', 'Tests automatisés', 'Composants réutilisables'] },
      ],
    },
    projects: {
      eyebrow: 'Projets', index: '04', title: 'Travaux sélectionnés',
      lead: 'Réalisations marquantes du SaaS de conformité chez Ceel.io.',
      items: [
        { tag: 'Intégrations', title: '100+ Intégrations Tierces', desc: 'Conception et génération automatique de plus de 100 connecteurs avec Unified API, plus des connecteurs Jira, GitHub, GitLab, Azure, Slack, Teams et Asana développés à la main.', stack: ['Unified API', 'C#', 'Webhooks'] },
        { tag: 'Sécurité', title: 'Module Trust Center', desc: 'Portails externes sécurisés pour la consultation de documents, avec gestion des demandes d’accès et authentification JWT + refresh token.', stack: ['JWT', 'ASP.NET Core', 'Angular'] },
        { tag: 'Architecture', title: 'Modernisation Backend · .NET 6 → 8', desc: 'Pilotage de la migration vers .NET 8 et d’une architecture DTO globale, +20 % de temps de réponse via l’autorisation par politiques.', stack: ['.NET 8', 'Clean Arch', 'DTOs'] },
      ],
    },
    upcoming: {
      eyebrow: 'À venir', index: '05', title: "Dans l'atelier",
      lead: 'Travaux en cours — captures d’écran bientôt disponibles.',
      badge: 'En cours',
      items: [
        { title: 'Portfolio v2 — Angular', desc: 'Ce site, reconstruit en application Angular de production avec SSR.' },
        { title: 'SDK de Connecteurs', desc: 'Un SDK .NET réutilisable pour créer rapidement des intégrations tierces.' },
        { title: 'Tableau de Conformité', desc: 'Suivi de conformité en temps réel avec santé des intégrations en direct.' },
      ],
    },
    contact: {
      eyebrow: 'Contact', index: '06', title: 'Créons quelque chose',
      lead: 'Ouvert aux postes full stack et backend, aux intégrations en freelance et au SaaS axé sécurité.',
      form: { name: 'Nom', email: 'Email', message: 'Message', namePh: 'Votre nom', emailPh: 'vous@entreprise.com', msgPh: 'Parlez-moi de votre projet…' },
      detailsLabel: 'Direct',
    },
    footer: { built: 'Conçu & développé par Jawher Khiari', rights: 'Tous droits réservés.' },
    a11y: { theme: 'Basculer le thème clair / sombre', lang: 'Changer de langue', menu: 'Ouvrir le menu' },
  },
};
