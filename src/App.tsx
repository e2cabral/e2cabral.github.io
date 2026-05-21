import {
  aboutParagraph,
  condensedAbout,
  currentFocus,
  experienceIntro,
  experiences,
  featuredProjects,
  footerNote,
  focusAreas,
  headline,
  learningLine,
  links,
  locationLine,
  metrics,
  overviewNarrative,
  personalThread,
  principles,
  principlesIntro,
  profileAnchor,
  profileAnchorDetail,
  profileSummaryBullets,
  sectionBridge,
  stackGroups,
  stackIntro,
  summary,
  supportingDetails,
  supportingNarrative,
  contactSummary,
} from './data/siteContent';

function App() {
  return (
    <div className="site-shell">
      <header className="site-header" id="top">
        <div>
          <p className="terminal-label">$ whoami</p>
          <h1>Edson Cabral Junior</h1>
        </div>

        <nav className="top-nav" aria-label="Primary navigation">
          <a href="#overview">Overview</a>
          <a href="#experience">Experience</a>
          <a href="#projects">Projects</a>
          <a href="#stack">Stack</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <main className="layout-grid">
        <section className="terminal-window hero-window" id="overview">
          <div className="window-bar">
            <span className="window-dot" />
            <p className="window-title">profile.sys</p>
            <span className="window-dot" />
          </div>

          <div className="window-content hero-content">
            <div className="hero-copy">
              <p className="terminal-label">&gt; cat profile.txt</p>
              <h2>{headline}</h2>
              <p className="hero-text">{summary}</p>
              <p className="hero-text hero-text-secondary">{aboutParagraph}</p>

              <div className="hero-actions">
                <a className="button button-primary" href={links.linkedin} target="_blank" rel="noreferrer">
                  LinkedIn
                </a>
                <a className="button button-secondary" href="#experience">
                  Professional experience
                </a>
              </div>

              <div className="terminal-block">
                <p className="terminal-label">./positioning --verbose</p>
                <ul className="terminal-list">
                  {profileSummaryBullets.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>

            <aside className="terminal-panel meta-panel">
              <p className="terminal-label">./show context</p>
              <p className="meta-lead">{condensedAbout}</p>
              <div className="meta-row">
                <span>Current role</span>
                <strong>{profileAnchor}</strong>
              </div>
              <div className="meta-row">
                <span>Operating mode</span>
                <strong>{profileAnchorDetail}</strong>
              </div>
              <div className="meta-row">
                <span>Base</span>
                <strong>{locationLine}</strong>
              </div>
            </aside>
          </div>
        </section>

        <section className="terminal-window info-window">
          <div className="window-bar">
            <span className="window-dot" />
            <p className="window-title">about.sh</p>
            <span className="window-dot" />
          </div>
          <div className="window-content">
            <p className="terminal-label">./about --expanded</p>
            <div className="signal-grid">
              {overviewNarrative.map((item) => (
                <article className="terminal-panel signal-card" key={item.title}>
                  <span>{item.title}</span>
                  <strong>{item.text}</strong>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="metrics-grid">
          {metrics.map((metric) => (
            <article className="terminal-panel metric-card" key={metric.label}>
              <p className="metric-value">{metric.value}</p>
              <h3>{metric.label}</h3>
              <p>{metric.detail}</p>
            </article>
          ))}
        </section>

        <section className="terminal-window focus-window">
          <div className="window-bar">
            <span className="window-dot" />
            <p className="window-title">optimization.sys</p>
            <span className="window-dot" />
          </div>
          <div className="window-content">
            <p className="terminal-label">&gt; ./optimization_goals.sh</p>
            <div className="section-heading">
              <h2>Architecture, clarity, and systems that keep scaling.</h2>
              <p className="section-copy">{currentFocus}</p>
            </div>

            <div className="focus-grid">
              {focusAreas.map((area) => (
                <article className="terminal-panel subpanel" key={area.title}>
                  <h3>{area.title}</h3>
                  <p>{area.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="terminal-window notes-window">
          <div className="window-content">
            <p className="terminal-label">&gt; cat supporting-context.txt</p>
            <p className="section-copy">{supportingNarrative}</p>
            <div className="supporting-list">
              {supportingDetails.map((item) => (
                <div className="supporting-item" key={item.title}>
                  <span>{item.title}</span>
                  <strong>{item.text}</strong>
                </div>
              ))}
            </div>
            <p className="section-copy">{learningLine}</p>
          </div>
        </section>

        <section className="terminal-window experience-window" id="experience">
          <div className="window-bar">
            <span className="window-dot" />
            <p className="window-title">experience_log.txt</p>
            <span className="window-dot" />
          </div>
          <div className="window-content">
            <p className="terminal-label">&gt; ls -la experience/</p>
            <div className="section-heading">
              <h2>Ownership across architecture, delivery, and production.</h2>
              <p className="section-copy">{experienceIntro}</p>
            </div>

            <div className="timeline">
              {experiences.map((experience) => (
                <article className="terminal-panel timeline-item" key={`${experience.company}-${experience.role}`}>
                  <div className="timeline-header">
                    <div>
                      <h3>{experience.role}</h3>
                      <p className="timeline-company">{experience.company}</p>
                    </div>
                    <span className="timeline-scope">{experience.scope}</span>
                  </div>

                  <ul className="terminal-list">
                    {experience.highlights.map((highlight) => (
                      <li key={highlight}>{highlight}</li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="terminal-window projects-window" id="projects">
          <div className="window-bar">
            <span className="window-dot" />
            <p className="window-title">projects_v2.bin</p>
            <span className="window-dot" />
          </div>
          <div className="window-content">
            <p className="terminal-label">&gt; grep "featured" projects/*</p>
            <div className="section-heading">
              <h2>Tools and products shaped around scale, safety, and speed.</h2>
            </div>

            <div className="project-grid">
              {featuredProjects.map((project) => (
                <article className="terminal-panel project-card" key={project.name}>
                  <p className="project-badge">{project.badge}</p>
                  <h3>{project.name}</h3>
                  <p className="project-description">{project.description}</p>

                  <ul className="terminal-list">
                    {project.highlights.map((highlight) => (
                      <li key={highlight}>{highlight}</li>
                    ))}
                  </ul>

                  <div className="tag-row">
                    {project.tech.map((item) => (
                      <span className="tag" key={item}>
                        {item}
                      </span>
                    ))}
                  </div>

                  <div className="link-row">
                    <a href={project.href} target="_blank" rel="noreferrer">
                      Package
                    </a>
                    {project.secondaryHref && project.secondaryLabel ? (
                      <a href={project.secondaryHref} target="_blank" rel="noreferrer">
                        {project.secondaryLabel}
                      </a>
                    ) : null}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="terminal-window stack-window" id="stack">
          <div className="window-bar">
            <span className="window-dot" />
            <p className="window-title">stack_env.cfg</p>
            <span className="window-dot" />
          </div>
          <div className="window-content">
            <p className="terminal-label">&gt; env | grep TECH</p>
            <div className="section-heading">
              <h2>Technologies I want the market to associate with my work.</h2>
              <p className="section-copy">{stackIntro}</p>
            </div>

            <div className="stack-grid">
              {stackGroups.map((group) => (
                <article className="terminal-panel subpanel" key={group.title}>
                  <h3>{group.title}</h3>
                  <div className="tag-row">
                    {group.items.map((item) => (
                      <span className="tag" key={item}>
                        {item}
                      </span>
                    ))}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="terminal-window approach-window">
          <div className="window-content">
            <p className="terminal-label">&gt; ./engineering_principles --print</p>
            <div className="section-heading">
              <h2>Modern software should feel easier to operate as it grows.</h2>
              <p className="section-copy">{principlesIntro}</p>
            </div>

            <ul className="terminal-list">
              {principles.map((principle) => (
                <li key={principle}>{principle}</li>
              ))}
            </ul>
          </div>
        </section>

        <section className="terminal-window contact-window" id="contact">
          <div className="window-bar">
            <span className="window-dot" />
            <p className="window-title">contact_uplink.io</p>
            <span className="window-dot" />
          </div>
          <div className="window-content">
            <p className="terminal-label">&gt; tail -f contact.log</p>
            <div className="section-heading">
              <h2>Open to product, platform, and SaaS conversations.</h2>
            </div>
            <p className="hero-text">{contactSummary}</p>
            <p className="section-copy">{personalThread}</p>
            <p className="section-copy">{sectionBridge}</p>

            <div className="hero-actions">
              <a className="button button-primary" href={links.email}>
                Email me
              </a>
              <a className="button button-secondary" href={links.linkedin} target="_blank" rel="noreferrer">
                LinkedIn
              </a>
            </div>

            <p className="footer-note">{footerNote}</p>
          </div>
        </section>
      </main>

      <footer className="hud-footer">
        <div className="hud-data">
          <div className="hud-item">
            <span className="hud-label">Energy</span>
            <span className="hud-value">MAX</span>
          </div>
          <div className="hud-item">
            <span className="hud-label">Humidity</span>
            <span className="hud-value">75%</span>
          </div>
          <div className="hud-item">
            <span className="hud-label">Temp</span>
            <span className="hud-value">17°F</span>
          </div>
          <div className="hud-item">
            <span className="hud-label">Status</span>
            <span className="hud-value">ONLINE</span>
          </div>
        </div>
        <div className="hud-coords">
          4.5895° S 138.1417° E
        </div>
      </footer>
    </div>
  );
}

export default App;
