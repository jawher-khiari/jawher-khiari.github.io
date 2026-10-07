// Bilingual content + contact details for the portfolio. EN / FR.
export type Lang = 'en' | 'fr';

export interface ExperienceItem {
  role: string; company: string; location: string;
  period: string; current: boolean; context: string; points: string[];
}
export interface SkillGroup { name: string; items: string[]; }
export interface ProjectItem { tag: string; title: string; desc: string; stack: string[]; points: string[]; href?: string; img?: string; }
export interface UpcomingItem { title: string; desc: string; img?: string; }
export interface Stat { value: string; label: string; }

export interface Content {
  nav: { about: string; experience: string; skills: string; projects: string; contact: string };
  cta: { work: string; cv: string; send: string };
  hero: { status: string; name: string; title: string; tagline: string; location: string };
  about: { eyebrow: string; index: string; title: string; body: string; body2: string; stats: Stat[] };
  experience: { eyebrow: string; index: string; title: string; items: ExperienceItem[] };
  skills: { eyebrow: string; index: string; title: string; groups: SkillGroup[] };
  projects: { eyebrow: string; index: string; title: string; lead: string; details: string; visit: string; items: ProjectItem[] };
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
  "email": "jawherk76@gmail.com",
  "phone": "+216 20 062 812",
  "phoneHref": "+21620062812",
  "linkedin": "linkedin.com/in/jawher-khiari-870805195",
  "linkedinHref": "https://www.linkedin.com/in/jawher-khiari-870805195",
  "github": "github.com/jawher-khiari",
  "githubHref": "https://github.com/jawher-khiari"
};

export const JK_DATA: Record<Lang, Content> = {
  "en": {
    "nav": {
      "about": "About",
      "experience": "Experience",
      "skills": "Skills",
      "projects": "Projects",
      "contact": "Contact"
    },
    "cta": {
      "work": "View Work",
      "cv": "Download CV",
      "send": "Send message"
    },
    "hero": {
      "status": "Full Stack Engineer at Ceel.io · Founder of CarSpare",
      "name": "Jawher Khiari",
      "title": "Forward Deployed Engineer",
      "tagline": "Specialized in developing and deploying SaaS systems end to end: from requirements and architecture to integrations, CI/CD, Kubernetes and production.",
      "location": "Tunisia"
    },
    "about": {
      "eyebrow": "About",
      "index": "01",
      "title": "SaaS systems, from the first requirement to production.",
      "body": "Forward Deployed Engineer with 3+ years of experience, a penetration-testing background and CAPT certification. At Ceel.io, a San Francisco-based GRC automation company, I build customer-facing modules, integrations and security controls for a platform supporting 21 frameworks, including SOC 2, ISO 27001, HIPAA, PCI DSS, GDPR and NIST CSF.",
      "body2": "I single-handedly built the Trust Center and Trust Portal, integrations, background checks, device monitoring and employee onboarding/offboarding, and own authorization across every platform role. I also designed, built and deployed CarSpare alone. For the past year, my daily development workflow has included Claude Code and Codex with custom skills, agent workflows and MCP servers.",
      "stats": [
        {
          "value": "3+",
          "label": "Years of engineering experience"
        },
        {
          "value": "11",
          "label": "Platform roles under my authorization ownership"
        },
        {
          "value": "500+",
          "label": "API endpoints covered by access-control ownership"
        },
        {
          "value": "640+",
          "label": "xUnit tests in the CarSpare pipeline"
        }
      ]
    },
    "experience": {
      "eyebrow": "Experience",
      "index": "02",
      "title": "Where I've shipped",
      "items": [
        {
          "role": "Full Stack Engineer & Penetration Tester",
          "company": "Ceel.io (formerly Socurely)",
          "location": "San Francisco, CA, USA · Remote",
          "period": "Oct 2023 – Present",
          "current": true,
          "context": "US governance, risk & compliance SaaS",
          "points": [
            "Sole developer of Trust Center and Trust Portal: publishing, custom domains, per-document visibility, expiring access grants, passwordless email-OTP login and Redis-backed lockouts.",
            "Owned the integration module with encrypted OAuth tokens, API keys and webhook secrets and a shared connect-and-test flow across cloud, code, identity, ticketing, HR and CRM systems.",
            "Integrated Certn end to end: candidate invitations, selectable checks, signature-verified webhooks, status synchronization and automated screening evidence.",
            "Built the Jamf integration and CEEL endpoint-agent backend for Windows, macOS and Linux; device posture feeds 12 automated control tests with new-hire grace periods and per-person exclusions.",
            "Built employee onboarding and offboarding: policy acceptance, security training, MFA, agent installation, background checks and account-removal verification across connected systems.",
            "Contributed Hangfire jobs to a library of 450+ daily automated control tests, with real-time readiness updates through SignalR.",
            "Own access and authorization for 11 roles across 500+ API endpoints, tenant isolation and Angular route guards.",
            "Led .NET 6 → 8 and Angular 14 → 20 migrations, adopted Angular Signals and ASP.NET Core policies, reducing response times by approximately 20% on affected endpoints.",
            "Ran two internal penetration tests with Metasploit and Nuclei and enforced server-side authorization and secure-coding practices."
          ]
        },
        {
          "role": "Founder & Sole Engineer",
          "company": "CarSpare",
          "location": "Solo project · carspare.autos",
          "period": "Jun 2026 – Present",
          "current": true,
          "context": "B2B2C spare-parts marketplace",
          "points": [
            "Designed, built and deployed a multi-portal marketplace alone: seller stock and staff management, buyer vehicle/OEM search and checkout, and admin management of sellers and paid features.",
            ".NET 9 layered API, company-scoped multi-tenancy, read-replica DbContext and feature flags; Angular 21 buyer and seller apps with NgRx Signals, Tailwind CSS 4 and shared components.",
            "Unified local-stock, OEM-reference and TecDoc search with vehicle fitment. Elasticsearch buyer search is in progress: 100k+ product projection, exact SKU/OEM/EAN ranking and Hangfire synchronization.",
            "CSV import up to 50k rows with AI-proposed column mappings, confidence thresholds and seller review before publication.",
            "Stock integrity through PostgreSQL xmin optimistic concurrency, Serializable transactions, HTTP 409 conflicts and Idempotency-Key on business writes.",
            "Redis limits and lockouts per account/device, FingerprintJS, Turnstile, TOTP MFA, refresh-token rotation, Google OAuth, SMS verification and field-level AES encryption.",
            "k3s Kubernetes, Kustomize staging/production overlays, Cloudflare Tunnel and nightly S3 backups; GitHub Actions runs 640+ xUnit tests, Trivy scans and versioned deployments with rollback."
          ]
        },
        {
          "role": "Software Engineer Intern — Vulnerability Scanner Platform",
          "company": "Ceel.io",
          "location": "San Francisco, CA, USA · Remote",
          "period": "Feb 2023 – Sep 2023",
          "current": false,
          "context": "B2B security automation",
          "points": [
            "Designed and built a vulnerability-scanning platform from scratch with Angular, .NET, PostgreSQL and Flask: domain scans, generated reports, dependency scanning and a 12-hour CVE feed.",
            "Automated reconnaissance and fuzzing with Nmap, Nikto, WhatWeb and FFUF; mapped findings to CVE/CWE identifiers and stored reports on S3."
          ]
        }
      ]
    },
    "skills": {
      "eyebrow": "Skills",
      "index": "03",
      "title": "The stack I work in",
      "groups": [
        {
          "name": "Backend",
          "items": [
            "C#",
            ".NET 6 / 8 / 9",
            "ASP.NET Core Web API",
            "Entity Framework Core",
            "Role- & Policy-Based Authorization",
            "JWT & Refresh Tokens",
            "Hangfire",
            "SignalR",
            "AutoMapper",
            "REST API Design",
            "Python / Flask"
          ]
        },
        {
          "name": "Frontend",
          "items": [
            "Angular 14 → 21",
            "Angular Signals",
            "NgRx Signals",
            "TypeScript",
            "RxJS",
            "PrimeNG",
            "Tailwind CSS",
            "Bootstrap",
            "shadcn-style Components",
            "ngx-translate"
          ]
        },
        {
          "name": "Data & Infrastructure",
          "items": [
            "PostgreSQL",
            "Redis",
            "Docker",
            "Kubernetes / k3s",
            "Kustomize",
            "GitHub Actions CI/CD",
            "AWS S3 / Lambda / STS",
            "Secrets Manager / Parameter Store",
            "Cloudflare Tunnel / Turnstile",
            "Seq / Serilog",
            "Linux"
          ]
        },
        {
          "name": "Integrations",
          "items": [
            "Jamf Pro API",
            "Certn",
            "Unified.to",
            "Microsoft Graph",
            "Google Workspace Admin SDK",
            "GitHub Apps",
            "OAuth 2.0",
            "API Keys",
            "Signed Webhooks",
            "Encrypted Credential Storage"
          ]
        },
        {
          "name": "Security",
          "items": [
            "Penetration Testing",
            "OWASP",
            "CVE / CWE Analysis",
            "Burp Suite",
            "Metasploit",
            "Nuclei",
            "Nmap",
            "FFUF",
            "Hydra",
            "Enum4linux",
            "Aircrack-ng",
            "WhatWeb",
            "Trivy"
          ]
        },
        {
          "name": "Testing & Practice",
          "items": [
            "xUnit",
            "Moq",
            "Integration Tests on PostgreSQL",
            "Git",
            "Code Review",
            "Technical Documentation",
            "Agile Delivery"
          ]
        },
        {
          "name": "AI Development",
          "items": [
            "Claude Code",
            "OpenAI Codex",
            "Custom Skills",
            "Agent Workflows",
            "MCP Servers",
            "Cursor",
            "Google Antigravity",
            "GitHub Copilot"
          ]
        }
      ]
    },
    "projects": {
      "eyebrow": "Projects",
      "index": "04",
      "title": "Systems I have built",
      "lead": "Detailed work from Ceel.io and my solo-founded marketplace. Expand a project to explore its technical details.",
      "items": [
        {
          "tag": "Solo founder",
          "title": "CarSpare",
          "img": "assets/carspare-brand.png",
          "href": "https://carspare.autos/",
          "desc": "A deployed B2B2C spare-parts marketplace I designed and built alone, spanning buyer, seller and admin portals.",
          "stack": [
            ".NET 9",
            "Angular 21",
            "PostgreSQL",
            "Redis",
            "k3s",
            "AWS S3"
          ],
          "points": [
            "Company-scoped multi-tenancy isolates seller operations. The Controller → Service → Repository API uses a read-replica DbContext and per-company feature flags; buyer and seller apps share Angular 21 components, NgRx Signals and Tailwind CSS 4.",
            "CSV import supports up to 50k rows. An LLM proposes supplier-column mappings; confidence thresholds and seller review keep the publication decision with the seller.",
            "PostgreSQL xmin row versions and Serializable transactions protect the last unit of stock. Conflicts return HTTP 409; Idempotency-Key makes retried and double-submitted business writes execute once.",
            "FingerprintJS identifies devices for Redis login, OTP, SMS and MFA limits. Authentication includes TOTP, JWT refresh-token rotation, Google OAuth per portal, SMS verification, Turnstile and field-level AES encryption.",
            "k3s and Kustomize provide staging/production deployments behind Cloudflare Tunnel. Nightly backups go to S3; GitHub Actions runs 640+ xUnit tests, Trivy image scans and versioned deploys with rollback.",
            "In progress: Elasticsearch buyer search with an index projection for 100k+ products, exact SKU/OEM/EAN ranking, PostgreSQL as source of truth and Hangfire-driven index sync."
          ]
        },
        {
          "tag": "Ceel.io · Sole developer",
          "title": "Trust Center & Trust Portal",
          "desc": "Public compliance publishing and a gated client portal, with document-level access and passwordless login.",
          "stack": [
            "ASP.NET Core",
            "Angular",
            "Redis",
            "Email OTP"
          ],
          "points": [
            "Companies publish reports, security documents, policies, subprocessors, FAQs and live monitoring status, with custom domains, publishing controls and public/private visibility per item.",
            "Client access requests can cover the whole center or individual items. Grants include expiry dates and email notifications.",
            "Passwordless email-OTP login is protected by Redis-backed lockouts per email and device."
          ]
        },
        {
          "tag": "Ceel.io · Sole developer",
          "title": "Third-Party Integrations",
          "desc": "A generic integration model and one connect-and-test flow for cloud, code, identity, HR and business systems.",
          "stack": [
            "OAuth 2.0",
            "AWS STS",
            "GitHub Apps",
            "Unified.to"
          ],
          "points": [
            "Encrypted credential storage covers OAuth tokens, API keys and webhook secrets; a shared model centralizes configuration and connection testing.",
            "Cloud connections include AWS role assumption, GCP and Azure. Code integrations include GitHub App, GitLab, Bitbucket and Azure Repos.",
            "Ticketing includes Jira, Asana and Trello. Google Workspace and Microsoft 365 cover identity; Unified.to connects HR, access-review and CRM systems."
          ]
        },
        {
          "tag": "Ceel.io · Sole developer",
          "title": "Device Monitoring & User Governance",
          "desc": "Jamf and CEEL Agent device posture connected to onboarding, offboarding and automated compliance controls.",
          "stack": [
            "Jamf Pro API",
            ".NET",
            "Hangfire",
            "SignalR"
          ],
          "points": [
            "Built CEEL Agent backend for Windows, macOS and Linux, with OTP authentication and device registration as hardware assets.",
            "Disk encryption, screen lock, firewall, antivirus, password manager and auto-update posture feed 12 automated control tests, with new-hire grace periods and per-person exclusions.",
            "Onboarding covers policies, training, MFA, agent installation and background checks. Offboarding verifies account removal across connected systems.",
            "Contributed Hangfire jobs to 450+ daily control tests, evaluating framework requirements per customer and updating readiness through SignalR."
          ]
        },
        {
          "tag": "Ceel.io · Sole developer",
          "title": "Certn Background Checks",
          "desc": "Candidate screening from invitation to verified webhook updates and automated compliance evidence.",
          "stack": [
            "Certn API",
            "Signed Webhooks",
            ".NET",
            "PostgreSQL"
          ],
          "points": [
            "Candidate invitations offer selectable US criminal tiers and international checks.",
            "Signature-verified webhooks and status synchronization keep screening results current.",
            "Employee and contractor screening results become automated evidence for compliance controls."
          ]
        },
        {
          "tag": "Ceel.io · Internship",
          "title": "Vulnerability Scanner Platform",
          "desc": "A B2B product built from scratch, turning a customer domain into an automatically generated security report.",
          "stack": [
            "Angular",
            ".NET",
            "Flask",
            "PostgreSQL",
            "AWS S3"
          ],
          "points": [
            "Domain vulnerability scans, dependency scanning and a CVE feed refreshed every 12 hours.",
            "Nmap, Nikto, WhatWeb and FFUF automate reconnaissance and fuzzing.",
            "The reporting engine maps each finding to CVE/CWE identifiers and stores reports on S3."
          ]
        }
      ],
      "details": "Technical details",
      "visit": "Visit project"
    },
    "upcoming": {
      "eyebrow": "Qualifications",
      "index": "05",
      "title": "Education, certifications & languages",
      "lead": "Engineering education and security training behind my work.",
      "badge": "",
      "items": [
        {
          "title": "National Engineering Diploma in Computer Science",
          "desc": "National Engineering School of Sousse (ENISo) · 2019–2023. Equivalent to a Master’s degree."
        },
        {
          "title": "Preparatory Cycle for Engineering Studies",
          "desc": "Preparatory Institute for Engineering Studies of Nabeul (IPEIN) · 2017–2019."
        },
        {
          "title": "Certified Associate Penetration Tester (CAPT)",
          "desc": "Hackviser · Credential ID HV-CAPT-AK196SVO."
        },
        {
          "title": "Developing Secure Software (LFD121)",
          "desc": "The Linux Foundation."
        },
        {
          "title": "Linux Fundamentals",
          "desc": "Hack The Box Academy · Training module."
        },
        {
          "title": "Languages",
          "desc": "Arabic — Native. French — Intermediate (B1). English — Intermediate (B1)."
        }
      ]
    },
    "contact": {
      "eyebrow": "Contact",
      "index": "06",
      "title": "Let's build something",
      "lead": "SaaS development and deployment, full stack engineering, integrations and application security.",
      "form": {
        "name": "Name",
        "email": "Email",
        "message": "Message",
        "namePh": "Your name",
        "emailPh": "you@company.com",
        "msgPh": "Tell me about your project…"
      },
      "detailsLabel": "Direct"
    },
    "footer": {
      "built": "Designed & built by Jawher Khiari",
      "rights": "All rights reserved."
    },
    "a11y": {
      "theme": "Toggle light / dark theme",
      "lang": "Switch language",
      "menu": "Open menu"
    }
  },
  "fr": {
    "nav": {
      "about": "À propos",
      "experience": "Expérience",
      "skills": "Compétences",
      "projects": "Projets",
      "contact": "Contact"
    },
    "cta": {
      "work": "Voir mes projets",
      "cv": "Télécharger le CV",
      "send": "Envoyer le message"
    },
    "hero": {
      "status": "Ingénieur Full Stack chez Ceel.io · Fondateur de CarSpare",
      "name": "Jawher Khiari",
      "title": "Forward Deployed Engineer",
      "tagline": "Spécialisé dans le développement et le déploiement de systèmes SaaS : des besoins et de l’architecture aux intégrations, au CI/CD, à Kubernetes et à la production.",
      "location": "Tunisie"
    },
    "about": {
      "eyebrow": "À propos",
      "index": "01",
      "title": "Des premiers besoins au SaaS en production.",
      "body": "Forward Deployed Engineer avec plus de 3 ans d’expérience, une spécialisation en tests d’intrusion et la certification CAPT. Chez Ceel.io, entreprise d’automatisation GRC basée à San Francisco, je développe des modules clients, des intégrations et des contrôles de sécurité pour une plateforme couvrant 21 référentiels, dont SOC 2, ISO 27001, HIPAA, PCI DSS, GDPR et NIST CSF.",
      "body2": "J’ai développé seul le Trust Center, le Trust Portal, les intégrations, les vérifications d’antécédents, le suivi des appareils et les parcours d’arrivée et de départ du personnel. Je suis responsable des autorisations pour tous les rôles. J’ai aussi conçu, développé et déployé CarSpare seul. Depuis un an, j’utilise quotidiennement Claude Code et Codex avec des skills personnalisés, des workflows d’agents et des serveurs MCP.",
      "stats": [
        {
          "value": "3+",
          "label": "Années d’expérience en ingénierie"
        },
        {
          "value": "11",
          "label": "Rôles sous ma responsabilité d’autorisation"
        },
        {
          "value": "500+",
          "label": "Endpoints API couverts par les contrôles d’accès"
        },
        {
          "value": "640+",
          "label": "Tests xUnit dans le pipeline CarSpare"
        }
      ]
    },
    "experience": {
      "eyebrow": "Expérience",
      "index": "02",
      "title": "Mon parcours",
      "items": [
        {
          "role": "Ingénieur Full Stack & Testeur d’intrusion",
          "company": "Ceel.io (anciennement Socurely)",
          "location": "San Francisco, CA, États-Unis · À distance",
          "period": "Oct. 2023 – Présent",
          "current": true,
          "context": "SaaS américain de gouvernance, risque et conformité",
          "points": [
            "Développement seul du Trust Center et du Trust Portal : publication, domaines personnalisés, visibilité des documents, accès avec expiration, connexion OTP email et verrouillages Redis.",
            "Module d’intégration avec tokens OAuth, clés API et secrets webhook chiffrés et parcours commun de connexion/test pour les systèmes cloud, code, identité, tickets, RH et CRM.",
            "Intégration complète de Certn : invitations, choix des vérifications, webhooks à signature vérifiée, synchronisation et preuves automatisées.",
            "Intégration Jamf et backend CEEL Agent pour Windows, macOS et Linux ; posture des appareils reliée à 12 tests de contrôle avec délais de grâce et exclusions individuelles.",
            "Parcours d’arrivée et de départ : politiques, formation sécurité, MFA, agent, antécédents et vérification de suppression des comptes.",
            "Contribution à plus de 450 tests quotidiens via Hangfire, avec mises à jour de conformité en temps réel via SignalR.",
            "Responsabilité des accès pour 11 rôles sur plus de 500 endpoints API, isolation des tenants et guards Angular.",
            "Migrations .NET 6 → 8 et Angular 14 → 20, adoption des Signals et des politiques ASP.NET Core : réduction d’environ 20 % du temps de réponse des endpoints concernés.",
            "Deux tests d’intrusion internes avec Metasploit et Nuclei ; autorisation côté serveur et développement sécurisé."
          ]
        },
        {
          "role": "Fondateur & Seul ingénieur",
          "company": "CarSpare",
          "location": "Projet solo · carspare.autos",
          "period": "Juin 2026 – Présent",
          "current": true,
          "context": "Marketplace B2B2C de pièces automobiles",
          "points": [
            "Conception, développement et déploiement seul des portails vendeur, acheteur et administrateur : stock, personnel, recherche véhicule/OEM, commandes et options payantes.",
            "API .NET 9 en couches, isolation par entreprise, DbContext de lecture et feature flags ; applications Angular 21 avec NgRx Signals, Tailwind CSS 4 et composants partagés.",
            "Recherche stock local, OEM et TecDoc avec compatibilité véhicule. Elasticsearch en cours : projection pour plus de 100k produits, classement SKU/OEM/EAN et synchronisation Hangfire.",
            "Import CSV jusqu’à 50k lignes, correspondance des colonnes proposée par IA, seuils de confiance et revue vendeur.",
            "Intégrité des stocks via PostgreSQL xmin, transactions Serializable, HTTP 409 et Idempotency-Key pour les écritures métier.",
            "Limites Redis par compte/appareil, FingerprintJS, Turnstile, TOTP, rotation des tokens, Google OAuth, SMS et chiffrement AES des champs sensibles.",
            "k3s, Kustomize staging/production, Cloudflare Tunnel, sauvegardes S3 nocturnes ; plus de 640 tests xUnit, scans Trivy et déploiements versionnés avec rollback."
          ]
        },
        {
          "role": "Stagiaire ingénieur logiciel — Vulnerability Scanner Platform",
          "company": "Ceel.io",
          "location": "San Francisco, CA, États-Unis · À distance",
          "period": "Fév. 2023 – Sep. 2023",
          "current": false,
          "context": "Automatisation sécurité B2B",
          "points": [
            "Plateforme développée de zéro avec Angular, .NET, PostgreSQL et Flask : scans de domaines, rapports, dépendances et flux CVE toutes les 12 heures.",
            "Reconnaissance et fuzzing via Nmap, Nikto, WhatWeb et FFUF ; identifiants CVE/CWE et rapports stockés sur S3."
          ]
        }
      ]
    },
    "skills": {
      "eyebrow": "Compétences",
      "index": "03",
      "title": "Ma stack technique",
      "groups": [
        {
          "name": "Backend",
          "items": [
            "C#",
            ".NET 6 / 8 / 9",
            "ASP.NET Core Web API",
            "Entity Framework Core",
            "Role- & Policy-Based Authorization",
            "JWT & Refresh Tokens",
            "Hangfire",
            "SignalR",
            "AutoMapper",
            "REST API Design",
            "Python / Flask"
          ]
        },
        {
          "name": "Frontend",
          "items": [
            "Angular 14 → 21",
            "Angular Signals",
            "NgRx Signals",
            "TypeScript",
            "RxJS",
            "PrimeNG",
            "Tailwind CSS",
            "Bootstrap",
            "shadcn-style Components",
            "ngx-translate"
          ]
        },
        {
          "name": "Données & Infrastructure",
          "items": [
            "PostgreSQL",
            "Redis",
            "Docker",
            "Kubernetes / k3s",
            "Kustomize",
            "GitHub Actions CI/CD",
            "AWS S3 / Lambda / STS",
            "Secrets Manager / Parameter Store",
            "Cloudflare Tunnel / Turnstile",
            "Seq / Serilog",
            "Linux"
          ]
        },
        {
          "name": "Intégrations",
          "items": [
            "Jamf Pro API",
            "Certn",
            "Unified.to",
            "Microsoft Graph",
            "Google Workspace Admin SDK",
            "GitHub Apps",
            "OAuth 2.0",
            "API Keys",
            "Signed Webhooks",
            "Encrypted Credential Storage"
          ]
        },
        {
          "name": "Sécurité",
          "items": [
            "Penetration Testing",
            "OWASP",
            "CVE / CWE Analysis",
            "Burp Suite",
            "Metasploit",
            "Nuclei",
            "Nmap",
            "FFUF",
            "Hydra",
            "Enum4linux",
            "Aircrack-ng",
            "WhatWeb",
            "Trivy"
          ]
        },
        {
          "name": "Tests & Pratiques",
          "items": [
            "xUnit",
            "Moq",
            "Integration Tests on PostgreSQL",
            "Git",
            "Code Review",
            "Technical Documentation",
            "Agile Delivery"
          ]
        },
        {
          "name": "Développement avec IA",
          "items": [
            "Claude Code",
            "OpenAI Codex",
            "Custom Skills",
            "Agent Workflows",
            "MCP Servers",
            "Cursor",
            "Google Antigravity",
            "GitHub Copilot"
          ]
        }
      ]
    },
    "projects": {
      "eyebrow": "Projets",
      "index": "04",
      "title": "Les systèmes que j’ai construits",
      "lead": "Réalisations chez Ceel.io et marketplace fondée en solo. Ouvrez un projet pour ses détails techniques.",
      "items": [
        {
          "tag": "Fondateur solo",
          "title": "CarSpare",
          "img": "assets/carspare-brand.png",
          "href": "https://carspare.autos/",
          "desc": "Marketplace B2B2C de pièces automobiles déployée, conçue et développée seul, avec portails acheteur, vendeur et administrateur.",
          "stack": [
            ".NET 9",
            "Angular 21",
            "PostgreSQL",
            "Redis",
            "k3s",
            "AWS S3"
          ],
          "points": [
            "Isolation par entreprise, API Controller → Service → Repository, DbContext de lecture et feature flags ; applications Angular 21 avec composants partagés, NgRx Signals et Tailwind CSS 4.",
            "Import CSV jusqu’à 50k lignes : proposition de correspondance des colonnes par LLM, seuils de confiance et revue du vendeur avant publication.",
            "PostgreSQL xmin et transactions Serializable protègent la dernière unité en stock. Conflits HTTP 409 et Idempotency-Key pour éviter l’exécution multiple des écritures métier.",
            "FingerprintJS et Redis limitent connexions, OTP, SMS et MFA par compte/appareil. TOTP, rotation JWT, Google OAuth, SMS, Turnstile et chiffrement AES des champs.",
            "k3s et Kustomize pour staging/production derrière Cloudflare Tunnel ; sauvegardes S3 nocturnes, plus de 640 tests xUnit, scans Trivy et déploiements versionnés avec rollback.",
            "En cours : recherche Elasticsearch, projection pour plus de 100k produits, classement SKU/OEM/EAN, PostgreSQL comme source de vérité et synchronisation Hangfire."
          ]
        },
        {
          "tag": "Ceel.io · Développé seul",
          "title": "Trust Center & Trust Portal",
          "desc": "Publication de documents de conformité et portail client à accès contrôlé, avec connexion sans mot de passe.",
          "stack": [
            "ASP.NET Core",
            "Angular",
            "Redis",
            "Email OTP"
          ],
          "points": [
            "Rapports, documents, politiques, sous-traitants, FAQ et statuts de monitoring avec domaines personnalisés et visibilité publique/privée par élément.",
            "Accès au centre complet ou à certains documents avec expiration et notifications email.",
            "Connexion OTP email et verrouillages Redis par email et appareil."
          ]
        },
        {
          "tag": "Ceel.io · Développé seul",
          "title": "Intégrations tierces",
          "desc": "Modèle d’intégration et parcours de connexion/test communs aux systèmes cloud, code, identité, RH et outils métier.",
          "stack": [
            "OAuth 2.0",
            "AWS STS",
            "GitHub Apps",
            "Unified.to"
          ],
          "points": [
            "Tokens OAuth, clés API et secrets webhook chiffrés avec configuration et test de connexion partagés.",
            "Assumption de rôle AWS, GCP, Azure, GitHub App, GitLab, Bitbucket et Azure Repos.",
            "Jira, Asana et Trello ; Google Workspace et Microsoft 365 ; systèmes RH, revue d’accès et CRM via Unified.to."
          ]
        },
        {
          "tag": "Ceel.io · Développé seul",
          "title": "Suivi des appareils & Gouvernance utilisateurs",
          "desc": "Posture Jamf et CEEL Agent reliée aux parcours du personnel et aux contrôles de conformité automatisés.",
          "stack": [
            "Jamf Pro API",
            ".NET",
            "Hangfire",
            "SignalR"
          ],
          "points": [
            "Backend CEEL Agent Windows, macOS et Linux, authentification OTP et enregistrement comme actifs matériels.",
            "Chiffrement disque, écran, pare-feu, antivirus, gestionnaire de mots de passe et mises à jour alimentent 12 tests avec délais de grâce et exclusions individuelles.",
            "Arrivée : politiques, formation, MFA, agent et antécédents. Départ : vérification de suppression des comptes dans les systèmes connectés.",
            "Contribution à plus de 450 tests quotidiens via Hangfire et actualisation de la conformité via SignalR."
          ]
        },
        {
          "tag": "Ceel.io · Développé seul",
          "title": "Vérifications d’antécédents Certn",
          "desc": "Vérification des candidats, de l’invitation aux webhooks vérifiés et aux preuves de conformité.",
          "stack": [
            "Certn API",
            "Signed Webhooks",
            ".NET",
            "PostgreSQL"
          ],
          "points": [
            "Invitations avec choix des niveaux de vérification criminelle aux États-Unis et vérifications internationales.",
            "Webhooks à signature vérifiée et synchronisation des statuts.",
            "Preuves automatisées pour les contrôles concernant le personnel et les prestataires."
          ]
        },
        {
          "tag": "Ceel.io · Stage",
          "title": "Vulnerability Scanner Platform",
          "desc": "Produit B2B développé de zéro, transformant un domaine client en rapport de sécurité automatique.",
          "stack": [
            "Angular",
            ".NET",
            "Flask",
            "PostgreSQL",
            "AWS S3"
          ],
          "points": [
            "Scans de domaines et de dépendances, flux CVE toutes les 12 heures.",
            "Reconnaissance et fuzzing avec Nmap, Nikto, WhatWeb et FFUF.",
            "Correspondance CVE/CWE et stockage des rapports sur S3."
          ]
        }
      ],
      "details": "Détails techniques",
      "visit": "Voir le projet"
    },
    "upcoming": {
      "eyebrow": "Qualifications",
      "index": "05",
      "title": "Formation, certifications & langues",
      "lead": "Formation d’ingénieur et apprentissage de la sécurité.",
      "badge": "",
      "items": [
        {
          "title": "Diplôme national d’ingénieur en informatique",
          "desc": "École Nationale d’Ingénieurs de Sousse (ENISo) · 2019–2023. Équivalent à un Master."
        },
        {
          "title": "Cycle préparatoire aux études d’ingénieur",
          "desc": "Institut Préparatoire aux Études d’Ingénieurs de Nabeul (IPEIN) · 2017–2019."
        },
        {
          "title": "Certified Associate Penetration Tester (CAPT)",
          "desc": "Hackviser · Identifiant HV-CAPT-AK196SVO."
        },
        {
          "title": "Developing Secure Software (LFD121)",
          "desc": "The Linux Foundation."
        },
        {
          "title": "Linux Fundamentals",
          "desc": "Hack The Box Academy · Module de formation."
        },
        {
          "title": "Langues",
          "desc": "Arabe — Langue maternelle. Français — Intermédiaire (B1). Anglais — Intermédiaire (B1)."
        }
      ]
    },
    "contact": {
      "eyebrow": "Contact",
      "index": "06",
      "title": "Créons quelque chose",
      "lead": "Développement et déploiement SaaS, ingénierie full stack, intégrations et sécurité applicative.",
      "form": {
        "name": "Nom",
        "email": "Email",
        "message": "Message",
        "namePh": "Votre nom",
        "emailPh": "vous@entreprise.com",
        "msgPh": "Parlez-moi de votre projet…"
      },
      "detailsLabel": "Direct"
    },
    "footer": {
      "built": "Conçu & développé par Jawher Khiari",
      "rights": "Tous droits réservés."
    },
    "a11y": {
      "theme": "Basculer le thème clair / sombre",
      "lang": "Changer de langue",
      "menu": "Ouvrir le menu"
    }
  }
};
