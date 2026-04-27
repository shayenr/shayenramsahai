import React, { useEffect } from "react";
import "./style.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import { meta, socialprofils } from "../../content_option";

const qualifications = [
  {
    label: "Doctorate",
    value: "PhD candidate, Business Administration — Enterprise Blockchain Adoption",
    institution: "University of Nicosia",
  },
  {
    label: "Postgraduate",
    value: "MSc Blockchain & Digital Currencies — Cum Laude",
    institution: "University of Nicosia",
  },
  {
    label: "Engineering",
    value: "B-Tech Electronic Engineering (Communication Systems)",
    institution: "Durban University of Technology",
  },
  {
    label: "Management",
    value: "B-Tech Management (Business Studies)",
    institution: "Durban University of Technology",
  },
  {
    label: "Certification",
    value: "ISTQB Advanced Level Test Analyst",
    institution: "International Software Testing Qualifications Board",
  },
];

const experience = [
  {
    title: "Technical Compliance Specialist",
    org: "3 Oaks Gaming",
    period: "January 2026 — Present",
    summary:
      "Managing the full certification lifecycle for games, RNG and RGS submissions across multiple regulated markets. Interpreting technical legislation, coordinating with external test laboratories and driving AI-augmented compliance processes that reduce regulatory analysis time from weeks to hours.",
  },
  {
    title: "IT Engineer",
    org: "Derivco",
    location: "Isle of Man",
    period: "August 2019 — December 2025",
    summary:
      "Full ownership of third-party casino game and platform integrations across regulated markets globally, including infrastructure management across multiple data centres and approximately 100 land-based casino networks. Maintained technical relationships with major operators including Betway, 32Red, Digital Gaming Corporation, Super Group and Games Global.",
  },
  {
    title: "Software Quality Engineer",
    org: "Derivco",
    location: "South Africa",
    period: "July 2013 — August 2019",
    summary:
      "Led quality assurance across more than 100 projects covering casino platforms, games, back-office systems, bonus engines, EGMs and cashier protocols. Built and delivered automation frameworks that compressed multi-week manual processes to hours.",
  },
];

const capabilities = [
  "Multi-jurisdictional technical compliance",
  "Games, RNG and RGS certification",
  "Regulatory substance — Isle of Man resident",
  "Infrastructure and platform operations",
  "AI-augmented automation development",
  "ISMS management (ISO 27001)",
  "Enterprise blockchain research",
  "Cross-functional stakeholder leadership",
  "Market entry project management",
  "Risk identification and mitigation",
];

export const Executive = () => {
  useEffect(() => {
    const reveals = document.querySelectorAll(".exec_reveal");
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add("exec_visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -30px 0px" }
    );
    reveals.forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <HelmetProvider>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Executive Profile | {meta.title}</title>
        <meta
          name="description"
          content="Shayen Ramsahai — Isle of Man resident executive with 13+ years in regulated iGaming, postgraduate blockchain credentials and a PhD in progress."
        />
      </Helmet>

      {/* ── Hero ─────────────────────────────────────────── */}
      <div className="exec_hero">
        <Container>
          <Row className="align-items-end">
            <Col lg={8}>
              <span className="exec_eyebrow">Executive Profile &nbsp;·&nbsp; Isle of Man Resident</span>
              <h1 className="exec_name">Shayen Ramsahai</h1>
              <p className="exec_title">
                Technical Compliance Specialist &nbsp;·&nbsp; iGaming Executive &nbsp;·&nbsp; PhD Candidate
              </p>
            </Col>
            <Col lg={4} className="text-lg-end mt-4 mt-lg-0">
              <a
                href={socialprofils.linkedin}
                target="_blank"
                rel="noreferrer"
                className="exec_btn_primary"
              >
                Connect on LinkedIn
              </a>
            </Col>
          </Row>
        </Container>
      </div>

      <Container className="exec_body">

        {/* ── The Opportunity ──────────────────────────────── */}
        <section className="exec_section exec_reveal">
          <h2 className="exec_section_title">The Opportunity</h2>
          <div className="exec_card">
            <p>
              The Isle of Man offers 0% corporate tax, a world-class regulatory framework and
              recognised pathways into UK and EU markets. Businesses that want to benefit from that
              structure in full need someone on the ground: a resident with genuine operational
              depth who can satisfy substance requirements, maintain the regulatory relationship and
              run the day-to-day business from the island.
            </p>
            <p>
              The island has approximately 84,000 residents. Finding one with 13 years of regulated
              iGaming experience at senior level, dual engineering and management qualifications, a
              postgraduate degree in blockchain completed with distinction and an active PhD in
              business administration is not a straightforward exercise. That profile exists, is
              based here, and is available for the right arrangement.
            </p>
            <p>
              A business currently paying 19% to 25% in corporate tax that restructures to hold
              primarily from the Isle of Man retains that entire portion of annual profit. It does
              not require cutting costs or changing what the business does. It requires a qualified
              executive in place on the island to make the structure work — and that executive is
              already here.
            </p>
          </div>
        </section>

        {/* ── Residency ────────────────────────────────────── */}
        <section className="exec_section">
          <h2 className="exec_section_title exec_reveal">Isle of Man Residency</h2>
          <div className="exec_residency_row">
            <div className="exec_residency_card exec_reveal">
              <span className="exec_res_value">2019</span>
              <span className="exec_res_label">Resident since</span>
            </div>
            <div className="exec_residency_card exec_reveal" style={{ transitionDelay: "0.07s" }}>
              <span className="exec_res_value">6+</span>
              <span className="exec_res_label">Years on the island</span>
            </div>
            <div className="exec_residency_card exec_reveal" style={{ transitionDelay: "0.14s" }}>
              <span className="exec_res_value">GSC</span>
              <span className="exec_res_label">Regulatory jurisdiction</span>
            </div>
            <div className="exec_residency_card exec_reveal" style={{ transitionDelay: "0.21s" }}>
              <span className="exec_res_value">Day&nbsp;1</span>
              <span className="exec_res_label">Substance from first day</span>
            </div>
          </div>
        </section>

        {/* ── Experience ───────────────────────────────────── */}
        <section className="exec_section">
          <h2 className="exec_section_title exec_reveal">Experience</h2>
          <div className="exec_timeline">
            {experience.map((job, i) => (
              <div
                key={i}
                className="exec_timeline_item exec_reveal"
                style={{ transitionDelay: `${i * 0.08}s` }}
              >
                <div className="exec_tl_dot" />
                <div className="exec_tl_content">
                  <div className="exec_tl_header">
                    <div>
                      <h4 className="exec_tl_role">{job.title}</h4>
                      <span className="exec_tl_org">{job.org}</span>
                      {job.location && (
                        <span className="exec_tl_loc">&nbsp;·&nbsp;{job.location}</span>
                      )}
                    </div>
                    <span className="exec_tl_period">{job.period}</span>
                  </div>
                  <p className="exec_tl_summary">{job.summary}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── Qualifications ───────────────────────────────── */}
        <section className="exec_section">
          <h2 className="exec_section_title exec_reveal">Qualifications</h2>
          <div className="exec_quals_grid">
            {qualifications.map((q, i) => (
              <div
                key={i}
                className="exec_qual_card exec_reveal"
                style={{ transitionDelay: `${i * 0.07}s` }}
              >
                <span className="exec_qual_label">{q.label}</span>
                <h5 className="exec_qual_value">{q.value}</h5>
                <p className="exec_qual_inst">{q.institution}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ── Research ─────────────────────────────────────── */}
        <section className="exec_section exec_reveal">
          <h2 className="exec_section_title">Research</h2>
          <div className="exec_card exec_research_card">
            <div className="exec_research_header">
              <div>
                <h4 className="exec_tl_role">PhD Researcher — Enterprise Blockchain Adoption</h4>
                <a
                  href="https://www.unic.ac.cy/iff/about-iff/our-team/"
                  target="_blank"
                  rel="noreferrer"
                  className="exec_tl_org exec_link"
                >
                  University of Nicosia, Institute of the Future
                </a>
              </div>
              <span className="exec_tl_period">In Progress</span>
            </div>
            <p className="exec_research_body">
              Doctoral research examining how blockchain technology can be adopted within existing
              casino infrastructure. The research is developing a practical framework that maps use
              cases, technical specifications, regulatory considerations and the operational
              challenges involved in transitioning regulated gambling platforms toward
              blockchain-enabled systems. Supervised by leading professors in blockchain, Web3 and
              digital currencies at the University of Nicosia Institute of the Future.
            </p>
          </div>
        </section>

        {/* ── Capabilities ─────────────────────────────────── */}
        <section className="exec_section exec_reveal">
          <h2 className="exec_section_title">Core Capabilities</h2>
          <div className="exec_caps_grid">
            {capabilities.map((cap, i) => (
              <div key={i} className="exec_cap_item">
                <span className="exec_cap_dot">◆</span>
                <span className="exec_cap_text">{cap}</span>
              </div>
            ))}
          </div>
        </section>

        {/* ── CTA ──────────────────────────────────────────── */}
        <div className="exec_cta_row exec_reveal">
          <a
            href={socialprofils.linkedin}
            target="_blank"
            rel="noreferrer"
            className="exec_btn_primary"
          >
            Connect on LinkedIn
          </a>
          <Link to="/iom" className="exec_btn_secondary">
            The Isle of Man Advantage
          </Link>
        </div>

      </Container>
    </HelmetProvider>
  );
};
