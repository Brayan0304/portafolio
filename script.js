// Función para abrir módulos en nueva pestaña
function openModuleInNewTab(sectionId) {
  const content = generateModuleContent(sectionId);
  const newWindow = window.open('', '_blank');
  
  newWindow.document.write(`
    <!DOCTYPE html>
    <html lang="es">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>${getModuleTitle(sectionId)} - Brayan Rodríguez</title>
        <style>
            * {
                box-sizing: border-box;
                font-family: "Poppins", sans-serif;
            }
            body {
                margin: 0;
                background-color: #f9fafb;
                color: #1f2937;
                padding: 40px;
            }
            .container {
                max-width: 800px;
                margin: 0 auto;
                background: white;
                border-radius: 12px;
                box-shadow: 0 3px 10px rgba(0,0,0,0.08);
                padding: 40px;
            }
            h1 {
                color: #065f46;
                border-bottom: 3px solid #065f46;
                padding-bottom: 10px;
                margin-bottom: 30px;
            }
            h2, h3 {
                color: #065f46;
            }
            .tech-grid {
                display: grid;
                grid-template-columns: repeat(auto-fit, minmax(130px, 1fr));
                gap: 25px;
                margin: 25px 0;
                text-align: center;
            }
            .tech-grid div {
                background: #f0fdf4;
                padding: 15px;
                border-radius: 10px;
                transition: transform 0.3s;
            }
            .tech-grid div:hover {
                transform: scale(1.05);
            }
            .tech-grid img {
                width: 60px;
                height: 60px;
                object-fit: contain;
                margin-bottom: 10px;
            }
            .stats {
                display: grid;
                grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
                gap: 20px;
                margin: 30px 0;
            }
            .stat-item {
                background: #065f46;
                color: white;
                padding: 20px;
                border-radius: 10px;
                text-align: center;
            }
            .stat-number {
                font-size: 2rem;
                font-weight: bold;
                display: block;
            }
            .project-card {
                background: #f8fafc;
                padding: 20px;
                border-radius: 8px;
                margin: 20px 0;
                border-left: 4px solid #065f46;
            }
            .contact-methods {
                display: grid;
                grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
                gap: 20px;
                margin: 30px 0;
            }
            .contact-card {
                background: #f0fdf4;
                padding: 25px;
                border-radius: 10px;
                text-align: center;
                border: 2px solid #065f46;
            }
            .back-btn {
                background: #065f46;
                color: white;
                padding: 12px 24px;
                border: none;
                border-radius: 6px;
                cursor: pointer;
                font-size: 16px;
                margin-bottom: 20px;
            }
            .back-btn:hover {
                background: #047857;
            }
        </style>
    </head>
    <body>
        <div class="container">
            <button class="back-btn" onclick="window.close()">← Volver al Portafolio</button>
            ${content}
        </div>
    </body>
    </html>
  `);
  
  newWindow.document.close();
}

// Función para obtener el título del módulo
function getModuleTitle(sectionId) {
  const titles = {
    'inicio': 'Inicio',
    'sobre-mi': 'Sobre Mí',
    'tecnologias': 'Tecnologías',
    'proyectos': 'Proyectos',
    'contacto': 'Contacto'
  };
  return titles[sectionId] || 'Módulo';
}

// Función para generar el contenido específico de cada módulo
function generateModuleContent(sectionId) {
  switch(sectionId) {
    case 'inicio':
      return `
        <h1>🏠 Bienvenido a mi Portafolio</h1>
        <div style="text-align: center; padding: 40px;">
          <h2>Brayan Rodríguez</h2>
          <h3>Ingeniero en Sistemas</h3>
          <p style="font-size: 1.2rem; line-height: 1.6;">
            Apasionado por el desarrollo web y los nuevos retos tecnológicos.
            Especializado en crear soluciones innovadoras y eficientes.
          </p>
          <div class="stats">
            <div class="stat-item">
              <span class="stat-number">2+</span>
              <span>Años de Experiencia</span>
            </div>
            <div class="stat-item">
              <span class="stat-number">15+</span>
              <span>Tecnologías</span>
            </div>
            <div class="stat-item">
              <span class="stat-number">10+</span>
              <span>Proyectos</span>
            </div>
          </div>
        </div>
      `;
      
    case 'sobre-mi':
      return `
        <h1>👨‍💻 Acerca de Mí</h1>
        <p style="font-size: 1.1rem; line-height: 1.8; margin-bottom: 30px;">
          Soy un joven apasionado por la tecnología y el desarrollo web, con un fuerte compromiso por aprender nuevos
          lenguajes y enfrentar retos. Me caracterizo por mi responsabilidad, trabajo en equipo, comunicación efectiva 
          y disposición para dar siempre mi 100%. Cuento con experiencia en la creación de reportes, desarrollo de 
          módulos, y manejo de diferentes tecnologías backend y frontend.
        </p>
        
        <h2>📊 Estadísticas Profesionales</h2>
        <div class="stats">
          <div class="stat-item">
            <span class="stat-number">2+</span>
            <span>Años de Experiencia</span>
          </div>
          <div class="stat-item">
            <span class="stat-number">15+</span>
            <span>Tecnologías Dominadas</span>
          </div>
          <div class="stat-item">
            <span class="stat-number">10+</span>
            <span>Proyectos Completados</span>
          </div>
          <div class="stat-item">
            <span class="stat-number">100%</span>
            <span>Compromiso</span>
          </div>
        </div>

        <h2>🎯 Habilidades Clave</h2>
        <ul style="font-size: 1.1rem; line-height: 1.8;">
          <li><strong>Desarrollo Full Stack:</strong> Laravel y React</li>
          <li><strong>Bases de Datos:</strong> MySQL, PostgreSQL, MariaDB</li>
          <li><strong>Reportes:</strong> TCPDF/EZPDF para documentos profesionales</li>
          <li><strong>Cloud Services:</strong> Integración con Azure</li>
          <li><strong>Control de Versiones:</strong> Git, GitHub, GitLab</li>
          <li><strong>Metodologías:</strong> Trabajo en equipo y metodologías ágiles</li>
        </ul>

        <h2>🏆 Fortalezas Personales</h2>
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 20px; margin: 20px 0;">
          <div style="background: #f0fdf4; padding: 20px; border-radius: 8px; text-align: center;">
            <h3>💼 Responsabilidad</h3>
            <p>Compromiso total con cada proyecto</p>
          </div>
          <div style="background: #f0fdf4; padding: 20px; border-radius: 8px; text-align: center;">
            <h3>🤝 Trabajo en Equipo</h3>
            <p>Colaboración efectiva y comunicación clara</p>
          </div>
          <div style="background: #f0fdf4; padding: 20px; border-radius: 8px; text-align: center;">
            <h3>🚀 Innovación</h3>
            <p>Siempre buscando nuevas soluciones</p>
          </div>
          <div style="background: #f0fdf4; padding: 20px; border-radius: 8px; text-align: center;">
            <h3>📚 Aprendizaje</h3>
            <p>Constante actualización tecnológica</p>
          </div>
        </div>
      `;
      
    case 'tecnologias':
      return `
        <h1>💻 Tecnologías y Lenguajes</h1>
        <p style="font-size: 1.1rem; margin-bottom: 30px;">
          Dominio de múltiples tecnologías modernas para desarrollo web completo.
        </p>
        
        <div class="tech-grid">
          <div><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg"><p>HTML5</p></div>
          <div><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg"><p>CSS3</p></div>
          <div><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"><p>JavaScript</p></div>
          <div><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg"><p>TypeScript</p></div>
          <div><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg"><p>PHP 5/7/8</p></div>
          <div><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"><p>React</p></div>
          <div><img src="https://cdn.worldvectorlogo.com/logos/laravel-2.svg"><p>Laravel</p></div>
          <div><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg"><p>MySQL</p></div>
          <div><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg"><p>PostgreSQL</p></div>
          <div><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mariadb/mariadb-original.svg"><p>MariaDB</p></div>
          <div><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg"><p>GitHub</p></div>
          <div><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg"><p>Azure</p></div>
        </div>

        <h2>📱 Categorías de Especialización</h2>
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 25px; margin: 30px 0;">
          <div class="project-card">
            <h3>🎨 Frontend Development</h3>
            <p><strong>Tecnologías:</strong> HTML5, CSS3, JavaScript, TypeScript, React</p>
            <p>Desarrollo de interfaces modernas, responsivas y con excelente experiencia de usuario.</p>
          </div>
          <div class="project-card">
            <h3>⚙️ Backend Development</h3>
            <p><strong>Tecnologías:</strong> PHP (5/7/8), Laravel</p>
            <p>Creación de APIs robustas, sistemas web escalables y arquitecturas eficientes.</p>
          </div>
          <div class="project-card">
            <h3>🗄️ Database Management</h3>
            <p><strong>Tecnologías:</strong> MySQL, PostgreSQL, MariaDB</p>
            <p>Diseño, optimización y gestión eficiente de bases de datos relacionales.</p>
          </div>
          <div class="project-card">
            <h3>☁️ Cloud & DevOps</h3>
            <p><strong>Tecnologías:</strong> Azure, GitHub, GitLab, Cloudflare</p>
            <p>Despliegue en la nube, control de versiones y gestión de infraestructura.</p>
          </div>
        </div>
      `;
      
    case 'proyectos':
      return `
        <h1>🚀 Proyectos y Experiencia</h1>
        <p style="font-size: 1.1rem; margin-bottom: 30px;">
          Experiencia práctica en desarrollo de sistemas web y aplicaciones empresariales.
        </p>

        <div class="project-card">
          <h2>💼 Pegasus Software S.A.S</h2>
          <p><strong>Período:</strong> Enero 2024 - Presente</p>
          <p><strong>Cargo:</strong> Desarrollador Web</p>
          <p><strong>Responsabilidades:</strong></p>
          <ul>
            <li>Creación de reportes personalizados con TCPDF/EZPDF</li>
            <li>Desarrollo de módulos web con PHP y Laravel</li>
            <li>Optimización de consultas SQL para mejorar rendimiento</li>
            <li>Mantenimiento y actualización de sistemas existentes</li>
            <li>Trabajo colaborativo con metodologías ágiles</li>
          </ul>
          <p><strong>Tecnologías utilizadas:</strong> PHP, Laravel, MySQL, TCPDF, HTML, CSS, JavaScript</p>
        </div>

        <div class="project-card">
          <h2>📋 Sistema SGA Gestión</h2>
          <p><strong>Tipo:</strong> Sistema de Gestión Documental</p>
          <p><strong>Descripción:</strong> Sistema completo para la gestión de documentos empresariales con las siguientes características:</p>
          <ul>
            <li>🔐 Sistema de autenticación y autorización</li>
            <li>📁 Gestión y almacenamiento de archivos</li>
            <li>📊 Generación de reportes automatizados</li>
            <li>👥 Panel administrativo para gestión de usuarios</li>
            <li>🔍 Sistema de búsqueda y filtrado avanzado</li>
            <li>📱 Interfaz responsive para dispositivos móviles</li>
          </ul>
          <p><strong>Tecnologías:</strong> Laravel, React, TypeScript, PostgreSQL, Azure</p>
          <p><strong>Características técnicas:</strong></p>
          <ul>
            <li>API RESTful desarrollada en Laravel</li>
            <li>Frontend moderno con React y TypeScript</li>
            <li>Base de datos PostgreSQL optimizada</li>
            <li>Despliegue en Azure con CI/CD</li>
          </ul>
        </div>

        <div class="project-card">
          <h2>🎓 Formación Complementaria</h2>
          <ul>
            <li><strong>Asistente Administrativo:</strong> Estudios complementarios en gestión administrativa</li>
            <li><strong>Mantenimiento Tecnológico:</strong> Curso especializado en reparación de computadores, portátiles y dispositivos móviles</li>
            <li><strong>Desarrollo Web:</strong> Formación continua en nuevas tecnologías y frameworks</li>
          </ul>
        </div>

        <h2>📈 Logros y Métricas</h2>
        <div class="stats">
          <div class="stat-item">
            <span class="stat-number">10+</span>
            <span>Proyectos Completados</span>
          </div>
          <div class="stat-item">
            <span class="stat-number">50+</span>
            <span>Reportes Generados</span>
          </div>
          <div class="stat-item">
            <span class="stat-number">5+</span>
            <span>Módulos Desarrollados</span>
          </div>
          <div class="stat-item">
            <span class="stat-number">100%</span>
            <span>Proyectos Entregados</span>
          </div>
        </div>
      `;
      
    case 'contacto':
      return `
        <h1>📞 Información de Contacto</h1>
        <p style="font-size: 1.1rem; margin-bottom: 30px;">
          ¿Interesado en trabajar juntos? ¡Estoy disponible para nuevos proyectos y oportunidades!
        </p>

        <div class="contact-methods">
          <div class="contact-card">
            <h2>📧 Email Profesional</h2>
            <p>Para consultas profesionales y oportunidades laborales</p>
            <a href="mailto:brayan@example.com" style="color: #065f46; font-weight: bold; font-size: 1.1rem;">brayan@example.com</a>
            <p style="margin-top: 15px; font-size: 0.9rem; color: #666;">
              Respuesta garantizada en menos de 24 horas
            </p>
          </div>
          
          <div class="contact-card">
            <h2>🔗 GitHub</h2>
            <p>Revisa mis proyectos y contribuciones</p>
            <a href="https://github.com/Brayan0304" target="_blank" style="color: #065f46; font-weight: bold; font-size: 1.1rem;">@Brayan0304</a>
            <p style="margin-top: 15px; font-size: 0.9rem; color: #666;">
              Código abierto y proyectos personales
            </p>
          </div>
          
          <div class="contact-card">
            <h2>💼 LinkedIn</h2>
            <p>Conectemos profesionalmente</p>
            <a href="#" style="color: #065f46; font-weight: bold; font-size: 1.1rem;">Ver Perfil</a>
            <p style="margin-top: 15px; font-size: 0.9rem; color: #666;">
              Red profesional y experiencia detallada
            </p>
          </div>
        </div>

        <div style="background: #f0fdf4; padding: 30px; border-radius: 10px; margin: 30px 0; text-align: center; border: 2px solid #065f46;">
          <h2>🚀 Disponibilidad Actual</h2>
          <p style="font-size: 1.1rem; margin-bottom: 20px;">
            <strong>Estado:</strong> Disponible para nuevos proyectos
          </p>
          <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 20px;">
            <div>
              <h3>💻 Modalidad</h3>
              <p>Remoto / Presencial / Híbrido</p>
            </div>
            <div>
              <h3>⏰ Disponibilidad</h3>
              <p>Tiempo completo / Freelance</p>
            </div>
            <div>
              <h3>🌍 Ubicación</h3>
              <p>Colombia (disponible para internacional)</p>
            </div>
          </div>
        </div>

        <div style="background: #065f46; color: white; padding: 25px; border-radius: 10px; text-align: center;">
          <h2>✨ ¿Por qué elegirme?</h2>
          <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 20px; margin-top: 20px;">
            <div>
              <h3>🎯 Enfoque en Resultados</h3>
              <p>Compromiso total con la calidad y los plazos de entrega</p>
            </div>
            <div>
              <h3>🤝 Comunicación Clara</h3>
              <p>Actualizaciones constantes y feedback constructivo</p>
            </div>
            <div>
              <h3>💡 Soluciones Innovadoras</h3>
              <p>Tecnologías modernas y mejores prácticas</p>
            </div>
          </div>
        </div>
      `;
      
    default:
      return '<h1>Módulo no encontrado</h1><p>El contenido solicitado no está disponible.</p>';
  }
}

// Navegación suave y menú activo (sin traducciones)
document.addEventListener('DOMContentLoaded', function() {
  // Modificar los enlaces del menú para abrir en nueva pestaña o archivo
  const navLinks = document.querySelectorAll('.nav a[href^="#"]');
  
  navLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      const targetId = this.getAttribute('href').substring(1); // Remover el #
      
      // Redireccionar a archivos HTML específicos para cada sección
      switch(targetId) {
        case 'inicio':
          // Para inicio, navegar suavemente a la sección en la misma página
          const inicioSection = document.querySelector('#inicio');
          if (inicioSection) {
            const headerHeight = document.querySelector('.header').offsetHeight;
            const targetPosition = inicioSection.offsetTop - headerHeight - 20;
            
            window.scrollTo({
              top: targetPosition,
              behavior: 'smooth'
            });
          }
          break;
        case 'sobre-mi':
          window.open('sobre-mi.html', '_blank');
          break;
        case 'tecnologias':
          window.open('tecnologias.html', '_blank');
          break;
        case 'proyectos':
          window.open('proyectos.html', '_blank');
          break;
        case 'contacto':
          window.open('contacto.html', '_blank');
          break;
        default:
          // Fallback al sistema de módulos si no existe archivo específico
          openModuleInNewTab(targetId);
      }
    });
  });
  
  // Mantener navegación suave para scroll en la misma página (opcional)
  function updateActiveNav() {
    const sections = document.querySelectorAll('.section[id]');
    const headerHeight = document.querySelector('.header').offsetHeight;
    const scrollPos = window.scrollY + headerHeight + 100;
    
    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;
      const sectionId = section.getAttribute('id');
      const navLink = document.querySelector(`.nav a[href="#${sectionId}"]`);
      
      if (scrollPos >= sectionTop && scrollPos < sectionTop + sectionHeight) {
        navLinks.forEach(link => link.classList.remove('active'));
        if (navLink) {
          navLink.classList.add('active');
        }
      }
    });
  }
  
  window.addEventListener('scroll', updateActiveNav);
  updateActiveNav();
});