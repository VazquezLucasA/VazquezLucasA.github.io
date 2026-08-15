import { useState } from 'react';
import { Container, Navbar, Nav, Row, Col, Form, Button } from 'react-bootstrap';
import { FaLinkedin, FaGithub, FaEnvelope, FaServer, FaCode, FaCloud, FaGraduationCap } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { content } from './data/content';
import profilePic from './assets/fotov2.jpg';
import './index.css';

function App() {
  const [isEnglish, setIsEnglish] = useState(false);
  const t = isEnglish ? content.en : content.es;
  const fadeInUp = { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } };

  return (
    <>
      <Navbar expand="lg" variant="dark" fixed="top" className="navbar-custom">
        <Container>
          <Navbar.Brand href="#home" className="fw-bold"><span className="text-accent">&lt;</span> Lucas Vazquez <span className="text-accent">/&gt;</span></Navbar.Brand>
          <Navbar.Toggle aria-controls="main-navigation" />
          <Navbar.Collapse id="main-navigation">
            <Nav className="ms-auto align-items-center">
              <Nav.Link href="#home">{t.nav.home}</Nav.Link>
              <Nav.Link href="#experience">{t.nav.experience}</Nav.Link>
              <Nav.Link href="#skills">{t.nav.skills}</Nav.Link>
              <Nav.Link href="#education">{t.nav.education}</Nav.Link>
              <Nav.Link href="#contact">{t.nav.contact}</Nav.Link>
              <div className="d-flex align-items-center ms-lg-3 mt-2 mt-lg-0">
                <span className={`me-2 ${!isEnglish ? 'text-accent fw-bold' : 'text-secondary'}`}>ES</span>
                <Form.Check type="switch" id="language-switch" aria-label="Cambiar idioma / Change language" checked={isEnglish} onChange={(event) => setIsEnglish(event.target.checked)} />
                <span className={`ms-2 ${isEnglish ? 'text-accent fw-bold' : 'text-secondary'}`}>EN</span>
              </div>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <section id="home" className="d-flex align-items-center min-vh-100 pt-5">
        <Container>
          <Row className="align-items-center">
            <Col md={7}>
              <motion.div initial="hidden" animate="visible" variants={fadeInUp}>
                <h2 className="text-accent mb-2">{t.hero.greeting}</h2>
                <h1 className="display-3 fw-bold mb-3">Lucas Vazquez</h1>
                <h3 className="h2 text-secondary mb-4">{t.hero.role}</h3>
                <p className="lead mb-4 hero-summary">{t.hero.summary}</p>
                <div className="d-flex gap-3 flex-wrap">
                  <Button href="#contact" className="btn-primary-custom rounded-pill">{t.nav.contact}</Button>
                  <a href="/assets/LucasVazquezEN.pdf" className="btn btn-outline-light rounded-pill" download>{t.hero.cta}</a>
                </div>
              </motion.div>
            </Col>
            <Col md={5} className="text-center mt-5 mt-md-0">
              <motion.div initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5 }}>
                <div className="profile-frame"><img src={profilePic} alt="Lucas Vazquez" /></div>
              </motion.div>
            </Col>
          </Row>
        </Container>
      </section>

      <section id="skills" className="py-5">
        <Container>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}>
            <h2 className="mb-5 text-center"><span className="text-accent">#</span> {t.skills.title}</h2>
            <Row className="g-4">
              {t.skills.groups.map((group) => (
                <Col md={6} lg={4} key={group.label}>
                  <div className="skill-group h-100">
                    <h3 className="h6 text-white mb-3">{group.label}</h3>
                    {group.items.map((skill) => <motion.span key={skill} className="skill-badge" whileHover={{ scale: 1.06 }}>{skill}</motion.span>)}
                  </div>
                </Col>
              ))}
            </Row>
            <Row className="mt-5 text-center text-secondary">
              <Col xs={4}><FaServer size={40} className="mb-2" /><p>Infrastructure</p></Col>
              <Col xs={4}><FaCode size={40} className="mb-2" /><p>Development</p></Col>
              <Col xs={4}><FaCloud size={40} className="mb-2" /><p>Cloud</p></Col>
            </Row>
          </motion.div>
        </Container>
      </section>

      <section id="experience" className="py-5">
        <Container>
          <h2 className="mb-5 text-center"><span className="text-accent">#</span> {t.experience.title}</h2>
          <Row>
            {t.experience.jobs.map((job, index) => (
              <Col md={12} key={`${job.company}-${job.title}`} className="mb-4">
                <motion.div className="glass-card" initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.15 }}>
                  <div className="d-flex justify-content-between align-items-start flex-wrap gap-2">
                    <div><h3 className="h4 text-accent">{job.title}</h3><h4 className="h5 text-white">{job.company}</h4><p className="small text-secondary mb-0">{job.context}</p></div>
                    <span className="badge bg-secondary">{job.period}</span>
                  </div>
                  <ul className="mt-3 mb-0 text-secondary experience-list">{job.description.map((point) => <li key={point}>{point}</li>)}</ul>
                </motion.div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      <section id="education" className="py-5">
        <Container>
          <h2 className="mb-5 text-center"><span className="text-accent">#</span> {t.education.title}</h2>
          <Row className="g-4">
            {t.education.items.map((item) => (
              <Col md={4} key={item.title}>
                <motion.div className="glass-card h-100" whileHover={{ y: -5 }}>
                  <FaGraduationCap className="text-accent mb-3" size={28} /><h3 className="h5">{item.title}</h3><p className="text-white mb-2">{item.institution}</p><p className="text-secondary mb-0 small">{item.detail}</p>
                </motion.div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      <section id="contact" className="py-5 mb-5">
        <Container>
          <motion.div className="glass-card text-center" initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }}>
            <h2 className="text-accent mb-4">{t.contact.title}</h2><p className="text-secondary mb-5">{t.contact.availability}</p>
            <div className="d-flex justify-content-center gap-4 flex-wrap">
              <Button href={`mailto:${t.contact.email}`} variant="outline-light" size="lg" className="d-flex align-items-center gap-2"><FaEnvelope /> Email</Button>
              <Button href="https://www.linkedin.com/in/lucas-a-vazquez" target="_blank" rel="noreferrer" variant="primary" className="btn-primary-custom d-flex align-items-center gap-2"><FaLinkedin /> LinkedIn</Button>
              <Button href="https://github.com/VazquezLucasA" target="_blank" rel="noreferrer" variant="outline-light" size="lg" className="d-flex align-items-center gap-2"><FaGithub /> GitHub</Button>
            </div>
          </motion.div>
        </Container>
      </section>

      <footer className="text-center py-4 text-secondary border-top border-secondary border-opacity-25"><p className="mb-0">© {new Date().getFullYear()} Lucas Vazquez.</p></footer>
    </>
  );
}

export default App;
