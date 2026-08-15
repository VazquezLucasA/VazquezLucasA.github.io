export const content = {
  es: {
    nav: {
      home: "Inicio",
      experience: "Experiencia",
      skills: "Habilidades",
      education: "Educación",
      contact: "Contacto",
    },
    hero: {
      greeting: "Hola, soy",
      role: "Platform / DevOps / SRE Engineer",
      summary:
        "Platform Engineer responsable del stack tecnológico completo de un ISP regional: bare metal, virtualización, redes y una plataforma de 16 servicios que sostiene a 15.000 abonados y cerca de 100 empleados. Construí la nube privada, la observabilidad, la recuperación ante desastres y el pipeline de entrega a producción. Trabajo con la misma comodidad en entornos on-premise y cloud-native.",
      cta: "Descargar CV en inglés",
    },
    experience: {
      title: "Experiencia profesional",
      jobs: [
        {
          title: "Platform & Infrastructure Engineer",
          company: "Dovanet",
          context: "ISP regional · 15.000 abonados · Tucumán, Argentina",
          period: "Ene 2025 - Actualidad",
          description: [
            "Responsable end-to-end de la plataforma productiva del ISP: 4 servidores bare-metal Dell PowerEdge (iDRAC, RAID y hot spares), hipervisores Proxmox VE, Proxmox Backup Server y más de 18 servicios productivos, desde la instalación del sistema operativo hasta las guardias.",
            "Diseñé y construí el OSS/BSS interno que reemplaza un monolito PHP: 16 microservicios Node.js/Express detrás de un API gateway y un frontend React/Vite. Cubre CRM, inventario y logística en 6 ciudades y 2 países, aprovisionamiento, tickets, técnicos de campo, liquidación de sueldos y analítica.",
            "Construí el pipeline de entrega con staging aislado, pruebas unitarias automatizadas y promoción a producción con un solo comando, alcanzando un 99,9% de despliegues exitosos.",
            "Diseñé toda la superficie pública detrás de una única IP: proxy inverso Nginx con terminación TLS y WebSockets para más de 6 dominios, además de WireGuard, Tailscale y Cloudflare Tunnels para accesos internos y de proveedores.",
            "Automaticé el aprovisionamiento de abonados con gestión de ONT en tiempo real mediante TR-069/GenieACS, la API de MikroTik RouterOS y acceso directo a OLT, reemplazando un proceso manual por cliente en CLI por un panel web.",
            "Gestiono observabilidad y recuperación ante desastres: Zabbix y Uptime Kuma en cada VM, dashboards de Grafana, alertas con Gotify y backups automatizados de bases de datos y máquinas virtuales con restauraciones verificadas.",
            "Migré la mensajería de clientes a WhatsApp Cloud API sin tiempo de inactividad y construí un bot de soporte de primera línea con Chatwoot y n8n, enrutamiento automático y balanceo de carga entre agentes.",
            "Contraté y mentoreo a un segundo ingeniero; introduje el flujo de trabajo con Git, code review y entregas staging-first.",
          ],
        },
        {
          title: "Co-Founder & Technical Lead",
          company: "TUCUMIND",
          context: "Consultora de software · Tucumán, Argentina",
          period: "Jun 2025 - Actualidad",
          description: [
            "Responsable de la arquitectura y entrega de todos los proyectos de clientes, desde la infraestructura hasta el código de aplicación.",
            "Estandaricé la entrega sobre un stack serverless: Cloudflare Workers con Hono y TypeScript, D1 y R2, más PostgreSQL en Oracle Cloud conectado mediante Hyperdrive.",
          ],
        },
        {
          title: "IT Infrastructure & Support",
          company: "Freelance",
          context: "Tucumán, Argentina",
          period: "2015 - 2024",
          description: [
            "Administración de sistemas Linux y Windows, configuración de redes y soporte de hardware para pequeñas empresas.",
          ],
        },
      ],
    },
    skills: {
      title: "Habilidades técnicas",
      groups: [
        { label: "Cloud & serverless", items: ["Cloudflare Workers", "Hono", "D1", "R2", "Tunnels", "DNS", "Oracle Cloud", "Hyperdrive"] },
        { label: "Infraestructura & virtualización", items: ["Proxmox VE", "Proxmox Backup Server", "Dell PowerEdge", "iDRAC", "RAID", "Debian/Ubuntu", "Docker", "MinIO / S3"] },
        { label: "Redes", items: ["Nginx", "TLS", "WebSockets", "API gateways", "WireGuard", "Tailscale", "MikroTik RouterOS", "GPON/OLT", "TR-069 / GenieACS"] },
        { label: "Automatización & entrega", items: ["Bash", "Git", "CI/CD", "Staging → production", "Backup & restore", "n8n"] },
        { label: "Observabilidad", items: ["Zabbix", "Grafana", "Uptime Kuma", "Gotify"] },
        { label: "Backend & datos", items: ["Node.js", "Express", "Hono", "TypeScript", "JavaScript", "PostgreSQL", "MySQL/MariaDB", "REST APIs", "RBAC"] },
        { label: "Frontend", items: ["React", "Vite"] },
      ],
    },
    education: {
      title: "Educación",
      items: [
        { title: "Tecnicatura Universitaria en Programación", institution: "Universidad Tecnológica Nacional (UTN-FRT)", detail: "Título universitario de pregrado en Ciencias de la Computación" },
        { title: "Data Analytics", institution: "IBM SkillsBuild + Guayerd", detail: "Power BI, Looker Studio, MySQL y Excel · 2024" },
        { title: "Inglés", institution: "EFSET C1 (2024)", detail: "Aticana B2 · 2019-2020" },
      ],
    },
    contact: {
      title: "Hablemos",
      availability: "Disponible para oportunidades en DevOps, SRE o Platform Engineering.",
      email: "vazquez.lucas.alejo@gmail.com",
    },
  },
  en: {
    nav: {
      home: "Home",
      experience: "Experience",
      skills: "Skills",
      education: "Education",
      contact: "Contact",
    },
    hero: {
      greeting: "Hello, I'm",
      role: "Platform / DevOps / SRE Engineer",
      summary:
        "Platform engineer who owns the full technology stack of a regional fiber ISP — bare metal, virtualization, networking, and the 16-service application platform running on top of it — serving 15,000 subscribers and ~100 employees. Built the private cloud, observability and disaster-recovery layers, and the delivery pipeline. Equally at home on-premise and cloud-native.",
      cta: "Download Resume",
    },
    experience: {
      title: "Professional Experience",
      jobs: [
        {
          title: "Platform & Infrastructure Engineer",
          company: "Dovanet",
          context: "Regional fiber ISP · 15,000 subscribers · Tucumán, Argentina",
          period: "Jan 2025 - Present",
          description: [
            "Own the ISP's production platform end to end: 4 bare-metal Dell PowerEdge nodes (iDRAC, RAID, hot spares), Proxmox VE hypervisors and a Proxmox Backup Server, and 18+ production services — from OS install through on-call.",
            "Architected and built the in-house OSS/BSS replacing a legacy PHP monolith: 16 Node.js/Express microservices behind an API gateway with a React/Vite frontend, covering CRM, inventory and logistics across 6 cities and 2 countries, service provisioning, ticketing, field-technician workflows, payroll, and analytics.",
            "Built the delivery pipeline: isolated staging environment, automated unit tests, and single-command promotion to production — 99.9% successful deploys.",
            "Engineered the entire public surface behind a single public IP: Nginx reverse proxy with TLS termination and WebSocket support across 6+ domains, plus WireGuard, Tailscale, and Cloudflare Tunnels for internal and vendor access. No additional address allocation required.",
            "Automated subscriber provisioning: real-time ONT management via TR-069/GenieACS, MikroTik RouterOS API, and direct OLT access, replacing a manual per-customer CLI process with a web panel.",
            "Own observability and DR: Zabbix and Uptime Kuma across every VM, Grafana dashboards, Gotify alerting, and automated backups of all production databases and virtual machines with tested restores.",
            "Migrated customer messaging to the WhatsApp Cloud API with zero downtime, and built a Chatwoot + n8n first-line support bot with automated agent routing and load balancing.",
            "Hired and mentor one engineer; introduced Git workflow, code review, and staging-first delivery.",
          ],
        },
        {
          title: "Co-Founder & Technical Lead",
          company: "TUCUMIND",
          context: "Software consultancy · Tucumán, Argentina",
          period: "Jun 2025 - Present",
          description: [
            "Own architecture and delivery across all client engagements, from infrastructure to application code.",
            "Standardized delivery on a serverless stack: Cloudflare Workers (Hono, TypeScript), D1 and R2, with PostgreSQL on Oracle Cloud connected via Hyperdrive.",
          ],
        },
        {
          title: "IT Infrastructure & Support",
          company: "Freelance",
          context: "Tucumán, Argentina",
          period: "2015 - 2024",
          description: [
            "Linux and Windows systems administration, network configuration, and hardware for small businesses.",
          ],
        },
      ],
    },
    skills: {
      title: "Technical Skills",
      groups: [
        { label: "Cloud & serverless", items: ["Cloudflare Workers", "Hono", "D1", "R2", "Tunnels", "DNS", "Oracle Cloud", "Hyperdrive"] },
        { label: "Infrastructure & virtualization", items: ["Proxmox VE", "Proxmox Backup Server", "Dell PowerEdge", "iDRAC", "RAID", "Debian/Ubuntu", "Docker", "MinIO / S3"] },
        { label: "Networking", items: ["Nginx", "TLS", "WebSockets", "API gateways", "WireGuard", "Tailscale", "MikroTik RouterOS", "GPON/OLT", "TR-069 / GenieACS"] },
        { label: "Automation & delivery", items: ["Bash", "Git", "CI/CD", "Staging → production", "Backup & restore", "n8n"] },
        { label: "Observability", items: ["Zabbix", "Grafana", "Uptime Kuma", "Gotify"] },
        { label: "Backend & data", items: ["Node.js", "Express", "Hono", "TypeScript", "JavaScript", "PostgreSQL", "MySQL/MariaDB", "REST APIs", "RBAC"] },
        { label: "Frontend", items: ["React", "Vite"] },
      ],
    },
    education: {
      title: "Education",
      items: [
        { title: "Tecnicatura Universitaria en Programación", institution: "Universidad Tecnológica Nacional (UTN-FRT)", detail: "Associate Degree, Computer Science" },
        { title: "Data Analytics", institution: "IBM SkillsBuild + Guayerd", detail: "Power BI, Looker Studio, MySQL, Excel · 2024" },
        { title: "English", institution: "EFSET C1 (2024)", detail: "Aticana B2 · 2019-2020" },
      ],
    },
    contact: {
      title: "Get in Touch",
      availability: "Open to DevOps, SRE, and Platform Engineering opportunities.",
      email: "vazquez.lucas.alejo@gmail.com",
    },
  },
};
