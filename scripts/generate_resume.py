from pathlib import Path

from reportlab.lib import colors
from reportlab.lib.enums import TA_LEFT
from reportlab.lib.pagesizes import A4
from reportlab.lib.styles import ParagraphStyle, getSampleStyleSheet
from reportlab.lib.units import mm
from reportlab.platypus import (
    BaseDocTemplate,
    Frame,
    KeepTogether,
    PageTemplate,
    Paragraph,
    Spacer,
)


ROOT = Path(__file__).resolve().parents[1]
OUTPUT = ROOT / "output" / "pdf" / "LucasVazquezEN.pdf"

NAVY = colors.HexColor("#0F172A")
SLATE = colors.HexColor("#475569")
BLUE = colors.HexColor("#0284C7")
LIGHT = colors.HexColor("#E2E8F0")


def page(canvas, doc):
    canvas.saveState()
    width, height = A4
    canvas.setStrokeColor(LIGHT)
    canvas.line(17 * mm, 13 * mm, width - 17 * mm, 13 * mm)
    canvas.setFont("Helvetica", 7.5)
    canvas.setFillColor(SLATE)
    canvas.drawString(17 * mm, 8.5 * mm, "Lucas Vazquez | Platform / DevOps / SRE Engineer")
    canvas.drawRightString(width - 17 * mm, 8.5 * mm, f"Page {doc.page}")
    canvas.restoreState()


def bullet(text, style):
    return Paragraph(f"<bullet>&bull;</bullet>{text}", style)


def build():
    OUTPUT.parent.mkdir(parents=True, exist_ok=True)
    styles = getSampleStyleSheet()
    title = ParagraphStyle("Name", parent=styles["Title"], fontName="Helvetica-Bold", fontSize=25, leading=27, textColor=NAVY, spaceAfter=2)
    role = ParagraphStyle("Role", parent=styles["Normal"], fontName="Helvetica-Bold", fontSize=11.5, leading=14, textColor=BLUE, spaceAfter=5)
    contact = ParagraphStyle("Contact", parent=styles["Normal"], fontName="Helvetica", fontSize=8.5, leading=11, textColor=SLATE, spaceAfter=8)
    heading = ParagraphStyle("Heading", parent=styles["Heading2"], fontName="Helvetica-Bold", fontSize=10.5, leading=13, textColor=BLUE, spaceBefore=7, spaceAfter=4, borderColor=LIGHT, borderWidth=0, borderPadding=0)
    body = ParagraphStyle("Body", parent=styles["BodyText"], fontName="Helvetica", fontSize=7.9, leading=10.1, textColor=NAVY, alignment=TA_LEFT, spaceAfter=1.7)
    skill = ParagraphStyle("Skill", parent=body, fontSize=7.8, leading=9.8, leftIndent=0, firstLineIndent=0, spaceAfter=2)
    job = ParagraphStyle("Job", parent=body, fontName="Helvetica-Bold", fontSize=9.3, leading=11.5, textColor=NAVY, spaceAfter=1)
    meta = ParagraphStyle("Meta", parent=body, fontSize=7.8, leading=9.5, textColor=SLATE, spaceAfter=2)
    bullet_style = ParagraphStyle("Bullet", parent=body, leftIndent=9, firstLineIndent=-7, bulletIndent=0, spaceAfter=2)

    doc = BaseDocTemplate(
        str(OUTPUT), pagesize=A4, leftMargin=17 * mm, rightMargin=17 * mm,
        topMargin=11 * mm, bottomMargin=14 * mm, title="Lucas Vazquez - Resume",
        author="Lucas Vazquez", subject="Platform / DevOps / SRE Engineer Resume",
    )
    frame = Frame(doc.leftMargin, doc.bottomMargin, doc.width, doc.height, id="main", leftPadding=0, rightPadding=0, topPadding=0, bottomPadding=0)
    doc.addPageTemplates(PageTemplate(id="resume", frames=[frame], onPage=page))

    story = [
        Paragraph("LUCAS VAZQUEZ", title),
        Paragraph("Platform / DevOps / SRE Engineer", role),
        Paragraph(
            '<link href="mailto:vazquez.lucas.alejo@gmail.com" color="#475569">vazquez.lucas.alejo@gmail.com</link>'
            '  |  <link href="https://www.linkedin.com/in/lucas-a-vazquez" color="#475569">linkedin.com/in/lucas-a-vazquez</link>'
            '  |  <link href="https://github.com/VazquezLucasA" color="#475569">github.com/VazquezLucasA</link>',
            contact,
        ),
        Paragraph("PROFESSIONAL SUMMARY", heading),
        Paragraph(
            "Platform engineer who owns the full technology stack of a regional fiber ISP - bare metal, virtualization, networking, and the 16-service application platform running on top of it - serving 15,000 subscribers and ~100 employees. Built the private cloud, the observability and disaster-recovery layers, and the delivery pipeline that ships to production with a 99.99% success rate. Equally at home on-premise (Proxmox VE, Debian, Nginx) and cloud-native (Cloudflare Workers/D1/R2, Oracle Cloud). Hired and lead a second engineer. Looking for a DevOps, SRE, or Platform Engineering role.",
            body,
        ),
        Paragraph("SKILLS", heading),
    ]

    skills = [
        ("Cloud &amp; serverless", "Cloudflare (Workers with Hono, D1, R2, Tunnels, DNS), Oracle Cloud Infrastructure, Hyperdrive"),
        ("Infrastructure &amp; virtualization", "Proxmox VE, Proxmox Backup Server, Dell PowerEdge (iDRAC, RAID, hot spares), Debian/Ubuntu, Docker, MinIO / S3-compatible object storage"),
        ("Networking", "Nginx (reverse proxy, TLS termination, WebSockets), API gateway design, WireGuard, Tailscale, Cloudflare Tunnels, DNS/DHCP, MikroTik RouterOS API, GPON/OLT, TR-069 (GenieACS)"),
        ("Automation &amp; delivery", "Bash, Git, CI/CD pipelines, staging-to-production promotion, automated backup and restore, n8n"),
        ("Observability", "Zabbix, Grafana, Uptime Kuma, Gotify alerting"),
        ("Backend &amp; data", "Node.js, Express, Hono, TypeScript/JavaScript, PostgreSQL, MySQL/MariaDB, REST API design, RBAC and session-based auth"),
        ("Frontend", "React, Vite"),
    ]
    story.extend(Paragraph(f"<b>{label}:</b> {items}", skill) for label, items in skills)
    story.append(Paragraph("WORK EXPERIENCE", heading))

    jobs = [
        (
            "Dovanet - Platform &amp; Infrastructure Engineer",
            "Regional fiber ISP | 15,000 subscribers | Tucuman, Argentina | Jan 2025 - Present",
            [
                "Own the ISP's production platform end to end: 4 bare-metal Dell PowerEdge nodes (iDRAC, RAID, hot spares), Proxmox VE hypervisors and a Proxmox Backup Server, and 18+ production services - from OS install through on-call.",
                "Architected and built the in-house OSS/BSS replacing a legacy PHP monolith: 16 Node.js/Express microservices behind an API gateway with a React/Vite frontend, covering CRM, inventory and logistics across 6 cities and 2 countries, service provisioning, ticketing, field-technician workflows, payroll, and analytics.",
                "Built the delivery pipeline: isolated staging environment, automated unit tests, and single-command promotion to production - 99.9% successful deploys.",
                "Engineered the entire public surface behind a single public IP: Nginx reverse proxy with TLS termination and WebSocket support across 6+ domains, plus WireGuard, Tailscale, and Cloudflare Tunnels for internal and vendor access. No additional address allocation required.",
                "Automated subscriber provisioning: real-time ONT management via TR-069/GenieACS, MikroTik RouterOS API, and direct OLT access, replacing a manual per-customer CLI process with a web panel.",
                "Own observability and DR: Zabbix and Uptime Kuma across every VM, Grafana dashboards, Gotify alerting, and automated backups of all production databases and virtual machines with tested restores.",
                "Migrated customer messaging to the WhatsApp Cloud API with zero downtime, and built a Chatwoot + n8n first-line support bot with automated agent routing and load balancing.",
                "Hired and mentor one engineer; introduced Git workflow, code review, and staging-first delivery.",
            ],
        ),
        (
            "TUCUMIND - Co-Founder &amp; Technical Lead",
            "Software consultancy | Tucuman, Argentina | Jun 2025 - Present",
            [
                "Own architecture and delivery across all client engagements, from infrastructure to application code.",
                "Standardized delivery on a serverless stack: Cloudflare Workers (Hono, TypeScript), D1 and R2, with PostgreSQL on Oracle Cloud connected via Hyperdrive.",
            ],
        ),
        (
            "Freelance - IT Infrastructure &amp; Support",
            "Tucuman, Argentina | 2015 - 2024",
            ["Linux and Windows systems administration, network configuration, and hardware for small businesses."],
        ),
    ]
    for job_title, job_meta, bullets in jobs:
        block = [Paragraph(job_title, job), Paragraph(job_meta, meta)]
        block.extend(bullet(item, bullet_style) for item in bullets)
        story.append(KeepTogether(block))

    story.append(Paragraph("EDUCATION", heading))
    education = [
        "<b>Universidad Tecnologica Nacional (UTN-FRT)</b> - Tecnicatura Universitaria en Programacion (Associate Degree, Computer Science)",
        "<b>IBM SkillsBuild + Guayerd</b> - Data Analytics: Power BI, Looker Studio, MySQL, Excel (2024)",
        "<b>English</b> - EFSET C1 (2024); Aticana B2 (2019-2020)",
    ]
    story.extend(bullet(item, bullet_style) for item in education)
    story.append(Spacer(1, 2 * mm))
    doc.build(story)
    print(OUTPUT)


if __name__ == "__main__":
    build()
