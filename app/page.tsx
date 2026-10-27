import Image from 'next/image';
import { ArrowDown, ArrowRight, ArrowUpRight, Brain, BriefcaseBusiness, GraduationCap, Lightbulb, Mail, MoveUpRight, Sparkles, Workflow, Globe2, BookOpen, LaptopMinimal, Quote, Compass, BrainCircuit, BookOpenCheck } from 'lucide-react';
import SiteHeader from '@/components/site-header';
import ContactForm from '@/components/contact-form';

const expertise = [
  { icon: BriefcaseBusiness, title: 'Entrepreneurship', sub: '& ventures' },
  { icon: GraduationCap, title: 'Education', sub: '& guidance' },
  { icon: Sparkles, title: 'AI & technology', sub: 'for everyone' },
  { icon: Brain, title: 'Human', sub: 'development' },
];

const ventures = [
  { number: '01', icon: Compass, name: 'NexGuide', category: 'EDUCATION & CAREER GUIDANCE', description: 'An education and career guidance initiative helping students explore academic pathways, develop skills, and make informed decisions about their futures.', tags: ['Career guidance', 'Education planning', 'Mentorship'], href: 'https://nexguide.online', link: 'Explore NexGuide', external: true },
  { number: '02', icon: BrainCircuit, name: 'Karnataka AI & Technology Literacy Mission', category: 'AI & TECHNOLOGY EDUCATION', description: 'A learning initiative designed to make practical artificial intelligence and technology knowledge more accessible to learners across Karnataka.', tags: ['Practical AI', 'Digital literacy', 'Responsible use'], href: '#contact', link: 'Discuss the mission', external: false },
  { number: '03', icon: Globe2, name: 'SouKaio', category: 'INTERNATIONAL TRADE', description: 'An emerging export-import business concept focused on connecting products, markets, and commercial opportunities across borders.', tags: ['Global trade', 'Brand development', 'Entrepreneurship'], href: '#contact', link: 'Explore collaboration', external: false },
  { number: '04', icon: GraduationCap, name: 'Free Degree Guidance for Minority Students', category: 'MINORITY EDUCATION SUPPORT', role: 'CAMPAIGN DIRECTOR', description: 'Guiding eligible minority students through the process of applying for free degree and master’s degree opportunities at Karnataka State Open University under the Karnataka Government’s Minority Welfare Department.', tags: ['Degree guidance', 'Master’s degree', 'Application support'], href: '#contact', link: 'Get guidance', external: false },
  { number: '05', icon: BookOpenCheck, name: 'Free 2nd PUC Campaign', category: 'SECOND-CHANCE EDUCATION', role: 'CAMPAIGN DIRECTOR', description: 'Helping learners who missed the opportunity to complete 2nd PUC understand the process, access guidance, and continue their education—with a special focus on women.', tags: ['2nd PUC guidance', 'Learning support', 'Women’s education'], href: '#contact', link: 'Ask about the campaign', external: false },
];

const interests = [
  { icon: BriefcaseBusiness, title: 'Entrepreneurship & strategy', text: 'Shaping ideas into thoughtful business concepts, with a focus on purpose and sustainable growth.' },
  { icon: GraduationCap, title: 'Education & guidance', text: 'Helping learners discover pathways, build confidence, and make more informed choices.' },
  { icon: Sparkles, title: 'AI & digital tools', text: 'Exploring practical, responsible ways technology can support learning and everyday work.' },
  { icon: Lightbulb, title: 'Digital communication', text: 'Using content, branding, and digital platforms to communicate ideas clearly.' },
  { icon: Brain, title: 'Psychology & people', text: 'Bringing curiosity about human behaviour, motivation, and personal development to the work.' },
  { icon: Workflow, title: 'Technology-driven innovation', text: 'Connecting systems, tools, and people to make useful ideas easier to act on.' },
];

const projects = [
  { n: '01', label: 'BRAND & DIGITAL PRESENCE', title: 'NexGuide — brand and website', text: 'Building a digital home for an education and career guidance initiative.', status: 'Ongoing initiative', icon: LaptopMinimal },
  { n: '02', label: 'AI LITERACY', title: 'AI learning for Karnataka', text: 'Developing an accessible learning concept around practical and responsible AI use.', status: 'Initiative development', icon: Sparkles },
  { n: '03', label: 'TRADE & BRAND STRATEGY', title: 'SouKaio — global commerce concept', text: 'Exploring a brand direction for connecting products and markets across borders.', status: 'Emerging concept', icon: Globe2 },
];

export default function HomePage() {
  return <main>
    <section className="hero" id="home">
      <div className="hero-image-wrap"><Image src="/images/muhsin-ullal-hero.jpg" alt="Muhsin Ullal seated in a professional office, wearing a navy suit and glasses" fill priority sizes="(max-width: 760px) 100vw, 55vw" className="hero-image" /></div>
      <div className="hero-shade" />
      <SiteHeader />
      <div className="hero-content page-wrap">
        <div className="hero-copy reveal">
          <p className="eyebrow"><span className="status-dot" /> ENTREPRENEURSHIP <i /> EDUCATION <i /> TECHNOLOGY</p>
          <h1>Building ideas.<br />Empowering people.<br /><span>Shaping the future.</span></h1>
          <p className="hero-description">I’m Muhsin Ullal — an entrepreneur, educator, and technology advocate passionate about creating meaningful opportunities through education, innovation, and human development.</p>
          <div className="hero-actions"><a className="button button-primary" href="#about">Explore my journey <ArrowUpRight size={17} /></a><a className="button button-quiet" href="#contact">Let’s connect <ArrowRight size={16} /></a></div>
        </div>
      </div>
      <div className="hero-bottom page-wrap"><a className="scroll-cue" href="#about"><span className="scroll-icon"><ArrowDown size={14} /></span><span>SCROLL TO EXPLORE</span></a><span className="hero-note">PERSONAL PORTFOLIO <span>—</span> VENTURES & IDEAS</span></div>
      <div className="expertise-strip"><div className="page-wrap expertise-grid">{expertise.map(({ icon: Icon, title, sub }) => <div className="expertise-item" key={title}><Icon size={19} strokeWidth={1.5} /><div><span>{title}</span><small>{sub}</small></div></div>)}</div></div>
    </section>

    <section className="section about-section" id="about"><div className="page-wrap about-grid">
      <div className="about-visual"><div className="portrait-frame"><Image src="/images/muhsin-ullal-executive.jpg" alt="Muhsin Ullal standing in a tailored navy suit" fill sizes="(max-width: 760px) 88vw, 40vw" className="portrait-image" /></div><div className="portrait-caption"><span className="caption-line" /> <span>CURIOUS BY NATURE. PURPOSE-LED BY DESIGN.</span></div><div className="about-index">01 <span>/ ABOUT</span></div></div>
      <div className="about-copy"><p className="section-kicker">A LITTLE ABOUT ME</p><h2>More than a profession.<br /><span>A purpose.</span></h2><p className="lead">My journey brings together entrepreneurship, education, psychology, and technology.</p><p>I’m interested in building meaningful initiatives that help people discover opportunities, develop practical skills, and prepare for a changing world.</p><p>Through my work and projects, I aim to connect ideas with action — making education more accessible, technology more understandable, and professional opportunities more achievable.</p><div className="philosophy"><Quote size={21} /><p>“Progress means making the next step clearer, more practical, and more possible for someone else.”</p></div><a className="text-link" href="#ventures">Discover the ventures <ArrowUpRight size={16} /></a></div>
    </div></section>

    <section className="section ventures-section" id="ventures"><div className="page-wrap"><div className="section-heading"><div><p className="section-kicker">IDEAS IN MOTION</p><h2>Turning ideas<br /><span>into initiatives.</span></h2></div><p className="section-intro">Different fields, one shared intention: create useful opportunities and make progress more accessible.</p></div><div className="venture-grid">{ventures.map(({ number, icon: Icon, name, category, role, description, tags, href, link, external }) => <article className="venture-card" key={number}><div className="card-top"><span className="card-number">{number}</span><span className="card-icon" aria-hidden="true"><Icon size={22} strokeWidth={1.7} /></span></div><p className="card-category">{category}</p><h3>{name}</h3>{role && <p className="venture-role">{role}</p>}<p className="card-description">{description}</p><div className="tag-list">{tags.map(tag => <span key={tag}>{tag}</span>)}</div><a className="card-link" href={href} target={external ? '_blank' : undefined} rel={external ? 'noreferrer' : undefined}>{link} <ArrowUpRight size={16} /></a></article>)}</div></div></section>

    <section className="section interests-section" id="interests"><div className="page-wrap"><div className="section-heading compact"><div><p className="section-kicker">WHAT I’M EXPLORING</p><h2>Where ideas meet<br /><span>execution.</span></h2></div><p className="section-intro">A set of connected interests that shape the questions I ask, the skills I build, and the initiatives I explore.</p></div><div className="interest-grid">{interests.map(({ icon: Icon, title, text }, i) => <article className="interest-item" key={title}><span className="interest-number">0{i + 1}</span><Icon size={22} strokeWidth={1.45} /><h3>{title}</h3><p>{text}</p></article>)}</div><p className="honesty-note"><span className="note-mark">i</span> These are professional interests and areas of ongoing development — not a claim of formal certification or equal proficiency in every field.</p></div></section>

    <section className="section projects-section" id="projects"><div className="page-wrap"><div className="section-heading"><div><p className="section-kicker">SELECTED WORK & INITIATIVES</p><h2>Ideas becoming<br /><span>real work.</span></h2></div><p className="section-intro">A snapshot of initiatives and concepts in development. This portfolio will grow as project details and outcomes are verified.</p></div><div className="project-list">{projects.map(({ n, label, title, text, status, icon: Icon }) => <article className="project-row" key={n}><div className="project-symbol"><Icon size={27} strokeWidth={1.3} /></div><div className="project-main"><p className="card-category">{label}</p><h3>{title}</h3><p>{text}</p></div><div className="project-status"><span className="status-marker" />{status}</div><a className="project-arrow" href="#contact" aria-label={`Ask about ${title}`}><ArrowUpRight size={19} /></a></article>)}</div></div></section>

    <section className="section insights-section" id="insights"><div className="page-wrap insights-panel"><div className="insights-copy"><p className="section-kicker">NOTES, QUESTIONS & PERSPECTIVES</p><h2>Ideas worth<br /><span>sharing.</span></h2><p>I’m interested in the ways AI can support everyday life, how education can open new paths, and what it takes to turn a promising idea into useful work.</p><p>Thoughtful articles and practical reflections will be shared here as they’re ready.</p></div><div className="insights-empty"><div className="empty-icon"><BookOpen size={24} strokeWidth={1.4} /></div><p className="empty-label">THE EDITORIAL DESK</p><h3>Good ideas deserve<br />a little more thought.</h3><p>New writing is being prepared. No articles have been published here yet.</p><span className="empty-rule" /></div></div></section>

    <section className="section contact-section" id="contact"><div className="page-wrap contact-grid"><div className="contact-copy"><p className="section-kicker">START A CONVERSATION</p><h2>Have an idea?<br /><span>Let’s build</span><br />something meaningful.</h2><p>Interested in collaborating, exchanging ideas, or exploring a meaningful opportunity? I’d be glad to connect.</p><div className="contact-detail"><span className="contact-detail-icon"><Mail size={18} /></span><div><small>OPEN TO CONVERSATIONS ABOUT</small><span>Education · AI · Entrepreneurship</span></div></div></div><div className="contact-form-wrap"><ContactForm /></div></div></section>

    <footer className="site-footer"><div className="page-wrap footer-main"><a className="footer-brand" href="#home">MUHSIN ULLAL<span>.</span></a><p>Building ideas. Empowering people.<br />Shaping the future.</p><a className="back-top" href="#home">BACK TO TOP <MoveUpRight size={14} /></a></div><div className="page-wrap footer-bottom"><span>© {new Date().getFullYear()} Muhsin Ullal. All rights reserved.</span><span>Made with intention, not noise.</span><a href="#home">Personal portfolio <ArrowUpRight size={13} /></a></div></footer>
  </main>;
}
