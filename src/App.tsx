import {
  aboutParagraph,
  condensedAbout,
  experiences,
  featuredProjects,
  headline,
  links,
  locationLine,
  overviewNarrative,
  principles,
  stackGroups,
  summary,
  contactSummary,
} from './data/siteContent';

function App() {
  return (
    <div className="page-shell">
      <div className="app-frame">
        <aside className="side-rail" aria-label="Section shortcuts">
          <div className="rail-brand">EC</div>

          <nav className="rail-nav">
            <a href="#overview" className="active" title="Home">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>
            </a>
            <a href="#experience" title="Experience">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="7" width="20" height="14" rx="2" ry="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/></svg>
            </a>
            <a href="#projects" title="Projects">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="22 12 16 12 14 15 10 15 8 12 2 12"/><path d="M5.45 5.11L2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z"/></svg>
            </a>
            <a href="#stack" title="Stack">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polygon points="12 2 2 7 12 12 22 7 12 2"/><polyline points="2 17 12 22 22 17"/><polyline points="2 12 12 17 22 12"/></svg>
            </a>
            <a href="#contact" title="Contact">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
            </a>
          </nav>
        </aside>

        <div className="workspace">
          <header className="workspace-header">
            <div className="brand-block">
              <p className="eyebrow">Terminal HUD v2.0</p>
              <h1>Edson Cabral Junior</h1>
            </div>
          </header>

          <main className="board-grid">
            <section className="glass-card hero-card" id="overview">
              <div className="card-head">
                <span className="card-kicker">system.identity</span>
                <span className="card-chip">Senior Full Stack</span>
              </div>

              <div className="hero-layout">
                <div className="hero-copy">
                  <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>{headline}</h2>
                  <p className="lead">{summary}</p>
                  
                  <div className="hero-actions" style={{ marginTop: '2rem' }}>
                    <a className="button button-primary" href={links.linkedin} target="_blank" rel="noreferrer">
                      LinkedIn Profile
                    </a>
                    <a className="button button-secondary" href="#projects">
                      View Architecture
                    </a>
                  </div>
                </div>

                <div className="hero-side">
                  <article className="sub-card profile-card">
                    <span className="sub-card-label">Current Status</span>
                    <p style={{ marginTop: '0.5rem' }}>{condensedAbout}</p>
                    <div className="meta-list" style={{ marginTop: '1rem' }}>
                      <div className="meta-item">
                        <span>Location</span>
                        <strong>{locationLine}</strong>
                      </div>
                      <div className="meta-item">
                        <span>Stack</span>
                        <strong>Node.js / Go / AWS</strong>
                      </div>
                    </div>
                  </article>
                </div>
              </div>
            </section>

            <section className="glass-card signals-card" id="signals">
              <div className="card-head">
                <span className="card-kicker">engine.performance</span>
                <span className="card-chip">Metrics</span>
              </div>

              <div className="compact-grid signals-grid" style={{ marginTop: '1rem' }}>
                <div className="sub-card" style={{ textAlign: 'center' }}>
                  <span className="sub-card-label">Distributed Systems</span>
                  <div style={{ fontSize: '2rem', fontWeight: 'bold', color: 'var(--accent)', margin: '0.75rem 0' }}>98%</div>
                  <div style={{ height: '6px', background: 'var(--line)', borderRadius: '3px', overflow: 'hidden' }}>
                    <div style={{ width: '98%', height: '100%', background: 'var(--accent-gradient)', borderRadius: '3px' }} />
                  </div>
                </div>
                <div className="sub-card" style={{ textAlign: 'center' }}>
                  <span className="sub-card-label">Cloud Native</span>
                  <div style={{ fontSize: '2rem', fontWeight: 'bold', color: 'var(--accent-secondary)', margin: '0.75rem 0' }}>94%</div>
                  <div style={{ height: '6px', background: 'var(--line)', borderRadius: '3px', overflow: 'hidden' }}>
                    <div style={{ width: '94%', height: '100%', background: 'var(--accent-gradient)', borderRadius: '3px' }} />
                  </div>
                </div>
              </div>
            </section>

            <section className="glass-card metrics-card">
              <div className="card-head">
                <span className="card-kicker">background.log</span>
                <span className="card-chip">Summary</span>
              </div>

              <div className="compact-grid metrics-stack" style={{ marginTop: '1rem' }}>
                {overviewNarrative.map((item) => (
                  <article className="sub-card dense-card" key={item.title}>
                    <span className="sub-card-label" style={{ fontSize: '0.6rem' }}>{item.title}</span>
                    <p style={{ fontSize: '0.85rem', margin: '0.25rem 0 0' }}>{item.text}</p>
                  </article>
                ))}
              </div>
            </section>

            <section className="glass-card experience-card" id="experience">
              <div className="card-head">
                <span className="card-kicker">career.stack</span>
                <span className="card-chip">History</span>
              </div>

              <div className="timeline-grid" style={{ marginTop: '2rem' }}>
                {experiences.map((experience) => (
                  <article className="sub-card timeline-item" key={`${experience.company}-${experience.role}`}>
                    <div className="timeline-header">
                      <div>
                        <h3 style={{ color: 'var(--accent-secondary)' }}>{experience.role}</h3>
                        <p className="muted timeline-company" style={{ fontSize: '0.9rem' }}>{experience.company}</p>
                      </div>
                      <span className="timeline-scope" style={{ opacity: 0.6 }}>{experience.scope}</span>
                    </div>

                    <ul className="compact-list" style={{ marginTop: '1rem', color: 'var(--muted)' }}>
                      {experience.highlights.map((highlight) => (
                        <li key={highlight}>{highlight}</li>
                      ))}
                    </ul>
                  </article>
                ))}
              </div>
            </section>

            <section className="glass-card projects-card" id="projects">
              <div className="card-head">
                <span className="card-kicker">architecture.deploy</span>
                <span className="card-chip">Featured</span>
              </div>

              <div className="compact-grid two-up" style={{ marginTop: '2rem' }}>
                {featuredProjects.map((project, idx) => (
                  <article className="sub-card project-card" key={project.name}>
                    <div className="project-topline" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                      <p className="project-badge" style={{ color: idx % 2 === 0 ? 'var(--accent)' : 'var(--accent-secondary)', margin: 0 }}>{project.badge}</p>
                      <div className="link-row" style={{ display: 'flex', gap: '0.75rem' }}>
                        <a href={project.href} target="_blank" rel="noreferrer" style={{ fontSize: '0.75rem', color: idx % 2 === 0 ? 'var(--accent)' : 'var(--accent-secondary)' }}>Source</a>
                        {project.secondaryHref && (
                          <a href={project.secondaryHref} target="_blank" rel="noreferrer" style={{ fontSize: '0.75rem', color: idx % 2 === 0 ? 'var(--accent)' : 'var(--accent-secondary)' }}>Docs</a>
                        )}
                      </div>
                    </div>

                    <h3 style={{ margin: '0.5rem 0' }}>{project.name}</h3>
                    <p className="muted" style={{ fontSize: '0.85rem' }}>{project.description}</p>

                    <div className="tag-row" style={{ marginTop: '1rem' }}>
                      {project.tech.map((item) => (
                        <span className="tag" key={item} style={{ fontSize: '0.7rem' }}>{item}</span>
                      ))}
                    </div>
                  </article>
                ))}
              </div>
            </section>

            <section className="glass-card about-card" style={{ gridColumn: 'span 4' }}>
              <div className="card-head">
                <span className="card-kicker">engine.principles</span>
                <span className="card-chip">Philosophy</span>
              </div>
              <div style={{ marginTop: '1rem' }}>
                <p className="muted" style={{ fontSize: '0.9rem' }}>{aboutParagraph}</p>
                <ul className="compact-list" style={{ marginTop: '1rem', paddingLeft: '1.2rem', color: 'var(--muted)', fontSize: '0.85rem' }}>
                  {principles.map((p, i) => <li key={i} style={{ marginBottom: '0.5rem' }}>{p}</li>)}
                </ul>
              </div>
            </section>

            <section className="glass-card stack-card" id="stack">
              <div className="card-head">
                <span className="card-kicker">tech.inventory</span>
                <span className="card-chip">Core Groups</span>
              </div>

              <div className="compact-grid three-up" style={{ marginTop: '2rem' }}>
                {stackGroups.map((group, idx) => (
                  <article className="sub-card dense-card" key={group.title}>
                    <h3 style={{ fontSize: '0.9rem', marginBottom: '1rem', color: idx % 2 === 0 ? 'var(--accent)' : 'var(--accent-secondary)' }}>{group.title}</h3>
                    <div className="tag-row">
                      {group.items.map((item) => (
                        <span className="tag" key={item} style={{ fontSize: '0.65rem', padding: '0.2rem 0.5rem' }}>
                          {item}
                        </span>
                      ))}
                    </div>
                  </article>
                ))}
              </div>
            </section>

            <section className="glass-card contact-card" id="contact" style={{ gridColumn: 'span 4' }}>
              <div className="card-head">
                <span className="card-kicker">terminal.exit</span>
                <span className="card-chip">Contact</span>
              </div>
              
              <div style={{ marginTop: '1.5rem' }}>
                <p className="muted">{contactSummary}</p>
                <div className="hero-actions" style={{ marginTop: '1.5rem', flexDirection: 'column', gap: '0.75rem' }}>
                  <a className="button button-primary" href={links.email} style={{ width: '100%' }}>
                    Send Message
                  </a>
                  <a className="button button-secondary" href={links.linkedin} target="_blank" rel="noreferrer" style={{ width: '100%' }}>
                    LinkedIn
                  </a>
                </div>
              </div>
            </section>
          </main>
        </div>
      </div>
    </div>
  );
}

export default App;
