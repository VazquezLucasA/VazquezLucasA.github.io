import { useState } from 'react';
import { Container, Navbar, Nav, Row, Col, Form, Button } from 'react-bootstrap';
import { FaLinkedin, FaGithub, FaEnvelope, FaServer, FaCode, FaCloud } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { content } from './data/content';
import './index.css';

// Reemplaza esto con la ruta real de tu foto si la tienes en /public/assets/
import profilePic from './assets/fotov2.jpg'; // Asegúrate de mover tu foto a src/assets

function App() {
  // Estado para el idioma: true = English, false = Español
  const [isEnglish, setIsEnglish] = useState(false);
  
  // Seleccionamos el contenido según el estado
  const t = isEnglish ? content.en : content.es;

  // Configuración de animación
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <>
      {/* --- Navigation --- */}
      <Navbar expand="lg" variant="dark" fixed="top" className="navbar-custom">
        <Container>
          <Navbar.Brand href="#home" className="fw-bold">
            <span className="text-accent">&lt;</span> Lucas Vazquez <span className="text-accent">/&gt;</span>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto align-items-center">
              <Nav.Link href="#home">{t.nav.home}</Nav.Link>
              <Nav.Link href="#experience">{t.nav.experience}</Nav.Link>
              <Nav.Link href="#skills">{t.nav.skills}</Nav.Link>
              <Nav.Link href="#contact">{t.nav.contact}</Nav.Link>
              
              {/* Language Switcher */}
              <div className="d-flex align-items-center ms-lg-3 mt-2 mt-lg-0">
                <span className={`me-2 ${!isEnglish ? 'text-accent fw-bold' : 'text-secondary'}`}>ES</span>
                <Form.Check 
                  type="switch"
                  id="language-switch"
                  checked={isEnglish}
                  onChange={(e) => setIsEnglish(e.target.checked)}
                />
                <span className={`ms-2 ${isEnglish ? 'text-accent fw-bold' : 'text-secondary'}`}>EN</span>
              </div>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* --- Hero Section --- */}
      <section id="home" className="d-flex align-items-center min-vh-100 pt-5">
        <Container>
          <Row className="align-items-center">
            <Col md={7}>
              <motion.div initial="hidden" animate="visible" variants={fadeInUp}>
                <h2 className="text-accent mb-2">Hello, I'm</h2>
                <h1 className="display-3 fw-bold mb-3">Lucas Vazquez</h1>
                <h3 className="h2 text-secondary mb-4">{t.hero.role}</h3>
                <p className="lead mb-4" style={{ maxWidth: '600px' }}>
                  {t.hero.summary}
                </p>
                <div className="d-flex gap-3">
                  <Button href="#contact" className="btn-primary-custom rounded-pill">
                    {t.nav.contact}
                  </Button>
                  <a 
                    href="./assets/LucasVazquezEN.pdf"
                    className="btn btn-outline-light rounded-pill"
                    download
                  >{t.hero.cta}
                  </a>
                </div>
              </motion.div>
            </Col>
            <Col md={5} className="text-center mt-5 mt-md-0">
              <motion.div 
                initial={{ opacity: 0, scale: 0.8 }} 
                animate={{ opacity: 1, scale: 1 }} 
                transition={{ duration: 0.5 }}
              >
                {/* Placeholder para la imagen si no carga */}
                <div style={{ 
                  width: '300px', 
                  height: '300px', 
                  margin: '0 auto', 
                  borderRadius: '50%', 
                  overflow: 'hidden',
                  border: '4px solid var(--accent)',
                  boxShadow: '0 0 20px rgba(56, 189, 248, 0.3)'
                }}>
                  <img src={profilePic} alt="Lucas Vazquez" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </div>
              </motion.div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* --- Skills Section --- */}
      <section id="skills" className="py-5">
        <Container>
          <motion.div 
            initial="hidden" 
            whileInView="visible" 
            viewport={{ once: true }} 
            variants={fadeInUp}
          >
            <h2 className="mb-5 text-center"><span className="text-accent">#</span> {t.skills.title}</h2>
            <Row className="justify-content-center">
              <Col md={10} className="text-center">
                {t.skills.list.map((skill, index) => (
                  <motion.span 
                    key={index} 
                    className="skill-badge"
                    whileHover={{ scale: 1.1 }}
                  >
                    {skill}
                  </motion.span>
                ))}
              </Col>
            </Row>
            
            {/* Visual Icons Block */}
            <Row className="mt-5 text-center text-secondary">
              <Col xs={4}>
                <FaServer size={40} className="mb-2" />
                <p>Infrastructure</p>
              </Col>
              <Col xs={4}>
                <FaCode size={40} className="mb-2" />
                <p>Development</p>
              </Col>
              <Col xs={4}>
                <FaCloud size={40} className="mb-2" />
                <p>Cloud</p>
              </Col>
            </Row>
          </motion.div>
        </Container>
      </section>

      {/* --- Experience Section --- */}
      <section id="experience" className="py-5">
        <Container>
          <h2 className="mb-5 text-center"><span className="text-accent">#</span> {t.experience.title}</h2>
          <Row>
            {t.experience.jobs.map((job, index) => (
              <Col md={12} key={index} className="mb-4">
                <motion.div 
                  className="glass-card"
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 }}
                >
                  <div className="d-flex justify-content-between align-items-start flex-wrap">
                    <div>
                      <h3 className="h4 text-accent">{job.title}</h3>
                      <h4 className="h5 text-white">{job.company}</h4>
                    </div>
                    <span className="badge bg-secondary">{job.period}</span>
                  </div>
                  <ul className="mt-3 text-secondary">
                    {job.description.map((point, i) => (
                      <li key={i}>{point}</li>
                    ))}
                  </ul>
                </motion.div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* --- Certifications Section --- */}
      {/* <section id="certifications" className="py-5">
        <Container>
          <h2 className="mb-5 text-center"><span className="text-accent">#</span> {t.certifications.title}</h2>
          <Row>
            {t.certifications.list.map((cert, index) => (
              <Col md={6} lg={3} key={index} className="mb-3">
                <motion.div 
                  className="glass-card h-100 d-flex align-items-center justify-content-center text-center p-3"
                  whileHover={{ scale: 1.05 }}
                >
                  <p className="m-0 fw-bold">{cert}</p>
                </motion.div>
              </Col>
            ))}
          </Row>
        </Container>
      </section> */}

      {/* --- Contact Section --- */}
      <section id="contact" className="py-5 mb-5">
        <Container>
          <motion.div 
            className="glass-card text-center"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="text-accent mb-4">{t.contact.title}</h2>
            <p className="text-secondary mb-5">
              {isEnglish ? "Currently open for new opportunities." : "Actualmente abierto a nuevas oportunidades."}
            </p>
            <div className="d-flex justify-content-center gap-4 flex-wrap">
              <Button 
                href={`mailto:${t.contact.email}`} 
                variant="outline-light" 
                size="lg" 
                className="d-flex align-items-center gap-2"
              >
                <FaEnvelope /> Email
              </Button>
              <Button 
                href="https://www.linkedin.com/in/lucas-a-vazquez" 
                target="_blank" 
                variant="primary" 
                className="btn-primary-custom d-flex align-items-center gap-2"
              >
                <FaLinkedin /> LinkedIn
              </Button>
              <Button 
                href="https://github.com/VazquezLucasA" 
                target="_blank" 
                variant="outline-light" 
                size="lg" 
                className="d-flex align-items-center gap-2"
              >
                <FaGithub /> GitHub
              </Button>
            </div>
          </motion.div>
        </Container>
      </section>

      {/* --- Footer --- */}
      <footer className="text-center py-4 text-secondary border-top border-secondary border-opacity-25">
        <p className="mb-0">© {new Date().getFullYear()} Lucas Vazquez.</p>
      </footer>
    </>
  );
}

export default App;