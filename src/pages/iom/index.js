import React, { useEffect, useRef } from "react";
import "./style.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Container, Row, Col } from "react-bootstrap";
import { meta, socialprofils } from "../../content_option";

const iomStats = [
  { value: "0%",    label: "Corporate Tax Rate" },
  { value: "84K",   label: "Island Population" },
  { value: "30+",   label: "Years as a Financial Hub" },
  { value: "Crown", label: "Dependency Status" },
];

const iomPillars = [
  {
    title: "Zero Corporate Tax",
    body: "The Isle of Man levies 0% corporate tax on most business income. In most major jurisdictions, corporate tax runs at 19% to 25% of annual profit — a portion of earnings that simply does not exist here. A business structured to hold primarily from the Isle of Man retains that entire amount, compounding year on year. In practical terms, operating from here can increase retained earnings by 19% to 25% before a single cost is cut.",
  },
  {
    title: "Self-Governing Crown Dependency",
    body: "As a Crown Dependency, the Isle of Man operates its own parliament, Tynwald, and sets its own taxation, independent of both the United Kingdom and the European Union. Businesses benefit from fiscal autonomy without sacrificing legal certainty.",
  },
  {
    title: "World-Class Regulatory Framework",
    body: "The Gambling Supervision Commission is internationally recognised as one of the most respected regulatory bodies in the global iGaming industry. A licence from here carries genuine weight across markets worldwide.",
  },
  {
    title: "No Capital Gains or Inheritance Tax",
    body: "Beyond the headline 0% corporate rate, the island also levies no capital gains tax, no inheritance tax and minimal stamp duty on most transactions. The overall tax burden for a business operating from here is exceptionally low.",
  },
  {
    title: "Mature Financial Infrastructure",
    body: "Three decades of deliberate investment have produced banking, insurance, corporate services and digital infrastructure that is sophisticated, internationally connected and well-regulated.",
  },
  {
    title: "Political and Legal Stability",
    body: "The Isle of Man operates under English common law with robust data protection legislation aligned to UK GDPR standards. It has maintained political stability and a strong fiscal position for decades.",
  },
];

const setupRequirements = [
  {
    title: "Company Registration",
    body: "Incorporated under the Isle of Man Companies Act 2006 and registered with the Companies Registry. Registration is typically completed within a few business days.",
  },
  {
    title: "Registered Office",
    body: "A physical registered office address on the island is a legal requirement for all registered companies.",
  },
  {
    title: "Board and Leadership",
    body: "At least one officer must be appointed. For genuine substance purposes, key management decisions should be made on-island, with board meetings held here.",
  },
  {
    title: "Economic Substance",
    body: "To maintain the 0% tax advantage under OECD and EU standards, companies must demonstrate real economic activity: qualified staff on-island, adequate operating expenditure and physical premises.",
  },
  {
    title: "Annual Compliance",
    body: "Annual returns must be filed with the Companies Registry. Proper accounting records are required; audit obligations vary by company size and type.",
  },
  {
    title: "Beneficial Ownership",
    body: "All beneficial owners must be registered with the island's central beneficial ownership register, in line with international transparency standards.",
  },
];

const marketAccess = [
  {
    industry: "iGaming",
    detail: "Tier 1 Regulatory Status · UK & EU Market Entry",
    body: "The Gambling Supervision Commission holds Tier 1 status internationally, placing it alongside the UK Gambling Commission and the Malta Gaming Authority in terms of regulatory credibility. The Isle of Man is also listed in Schedule 2 of the UK Gambling Act 2005 as a white-listed jurisdiction, meaning IoM-licensed operators are recognised for UK advertising purposes without further qualification. When applying for UKGC or MGA licences, operators holding a GSC licence benefit from a demonstrated compliance track record that significantly reduces regulatory due diligence and accelerates the approval process.",
  },
  {
    industry: "Insurance & Life Assurance",
    detail: "UK Distribution · Captive Structures · Pension Products",
    body: "The Isle of Man has one of the most established insurance sectors of any offshore jurisdiction. IoM-regulated insurance companies can access UK retail distribution channels under specific FCA permission arrangements. The island is a recognised centre for captive insurance structures, international pension schemes and high-net-worth life assurance products, with regulatory standards that align closely with those expected by UK and EU institutional counterparties.",
  },
  {
    industry: "Digital Assets & Fintech",
    detail: "Early Regulatory Clarity · UK & EU Licensing Foundation",
    body: "The Isle of Man was among the first jurisdictions worldwide to bring digital currency businesses under formal regulatory oversight, amending its Proceeds of Crime Act in 2015 — ahead of most major economies. Companies operating under the island's digital assets framework, including the Designated Business Register, are treated as having met a credible baseline standard by regulators in the UK and across the EU, providing a recognised foundation for further licensing applications and reducing compliance build time in new markets.",
  },
  {
    industry: "Fund Management",
    detail: "Institutional Distribution · Sophisticated Investor Access",
    body: "The Isle of Man has a mature framework for collective investment schemes and alternative fund structures under the Collective Investment Schemes Act 2008. IoM-domiciled funds are distributed to sophisticated and institutional investors under national private placement regimes across EU member states. Fund managers regulated here are regarded as meeting the governance standards expected by UK FCA-authorised distributors, and the island's regulatory environment is well understood by institutional investors, legal counsel and fund administrators across Europe.",
  },
];

const credentials = [
  { label: "Current Role",   value: "Technical Compliance Specialist — 3 Oaks Gaming" },
  { label: "Residency",      value: "Isle of Man resident since 2019" },
  { label: "Doctorate",      value: "PhD candidate, Business Administration — Enterprise Blockchain Adoption, University of Nicosia" },
  { label: "Postgraduate",   value: "MSc Blockchain & Digital Currencies, Cum Laude — University of Nicosia" },
  { label: "Engineering",    value: "B-Tech Electronic Engineering (Communication Systems) — DUT" },
  { label: "Management",     value: "B-Tech Management (Business Studies) — DUT" },
  { label: "Certification",  value: "ISTQB Advanced Level Test Analyst" },
  { label: "Industry",       value: "13+ years in regulated iGaming across international markets" },
];

const executiveCapabilities = [
  {
    title: "Regulatory Oversight",
    body: "Direct experience under the island's regulatory framework and years working across the iGaming industry from this jurisdiction. I can manage the regulatory relationship and the compliance obligations that come with operating from here.",
  },
  {
    title: "Operational Leadership",
    body: "From infrastructure and platform management to cross-functional programme delivery, I have the background to lead day-to-day operations from the island, keeping distributed teams aligned and workstreams on track.",
  },
  {
    title: "Technical Governance",
    body: "As a qualified engineer with an MSc in blockchain and a PhD in progress, I can govern technical decisions at executive level, bridging the gap between delivery teams and board-level stakeholders without losing precision on either side.",
  },
  {
    title: "Compliance Direction",
    body: "Multi-jurisdictional technical compliance is a core specialism. As a resident principal, I can set and enforce the compliance posture across the business, managing obligations across regulated markets globally from a stable base.",
  },
  {
    title: "Substance and Representation",
    body: "A qualified, resident executive with genuine operational involvement adds real substance to a business's Isle of Man presence, satisfying regulatory substance requirements and providing a credible point of contact for regulators, auditors and commercial partners.",
  },
  {
    title: "Strategic Contribution",
    body: "With formal management qualifications, postgraduate research credentials and 13 years of industry experience, I can contribute meaningfully to strategic decisions on market entry, product direction, risk management and business development.",
  },
];

export const IOM = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");

    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    resize();
    const ro = new ResizeObserver(resize);
    ro.observe(canvas);

    const COUNT = 65;
    const MAX_DIST = 145;

    const nodes = Array.from({ length: COUNT }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      vx: (Math.random() - 0.5) * 0.38,
      vy: (Math.random() - 0.5) * 0.38,
      r: 1.2 + Math.random() * 1.6,
      phase: Math.random() * Math.PI * 2,
    }));

    let raf;
    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      nodes.forEach(n => {
        n.x += n.vx;
        n.y += n.vy;
        n.phase += 0.016;
        if (n.x < 0 || n.x > canvas.width) n.vx *= -1;
        if (n.y < 0 || n.y > canvas.height) n.vy *= -1;
        n.x = Math.max(0, Math.min(canvas.width, n.x));
        n.y = Math.max(0, Math.min(canvas.height, n.y));
      });

      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const dx = nodes[i].x - nodes[j].x;
          const dy = nodes[i].y - nodes[j].y;
          const d = Math.sqrt(dx * dx + dy * dy);
          if (d < MAX_DIST) {
            const a = (1 - d / MAX_DIST) * 0.16;
            ctx.beginPath();
            ctx.moveTo(nodes[i].x, nodes[i].y);
            ctx.lineTo(nodes[j].x, nodes[j].y);
            ctx.strokeStyle = `rgba(212, 170, 63, ${a})`;
            ctx.lineWidth = 0.55;
            ctx.stroke();
          }
        }
      }

      nodes.forEach(n => {
        const p = Math.sin(n.phase) * 0.5 + 0.5;
        ctx.beginPath();
        ctx.arc(n.x, n.y, n.r * (0.7 + p * 0.55), 0, Math.PI * 2);
        ctx.fillStyle = `rgba(212, 170, 63, ${0.3 + p * 0.5})`;
        ctx.fill();
      });

      raf = requestAnimationFrame(draw);
    };

    draw();
    return () => {
      ro.disconnect();
      cancelAnimationFrame(raf);
    };
  }, []);

  useEffect(() => {
    const reveals = document.querySelectorAll(".iom_reveal");
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add("iom_visible");
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
        <title>Isle of Man | {meta.title}</title>
        <meta
          name="description"
          content="Why the Isle of Man is one of the world's most compelling business jurisdictions, and why Shayen Ramsahai is uniquely placed to lead operations from the island."
        />
      </Helmet>

      {/* ── Hero ─────────────────────────────────────────── */}
      <section className="iom_hero">
        <canvas ref={canvasRef} className="iom_canvas" />
        <div className="iom_hero_content">
          <span className="iom_eyebrow">Isle of Man &nbsp;·&nbsp; Crown Dependency</span>
          <h1 className="iom_hero_title">
            The Isle of Man<br className="d-none d-md-block" /> Advantage
          </h1>
          <p className="iom_hero_sub">
            Most jurisdictions take 19% to 25% of annual profit in corporate tax. The Isle of Man
            takes none. Crown Dependency status, a world-class regulatory framework, recognised
            licensing that opens doors to UK and EU markets, and one of the island's very few
            qualified residents with the experience to lead your operations from here.
          </p>
          <div className="iom_hero_ctas">
            <a
              href={socialprofils.linkedin}
              target="_blank"
              rel="noreferrer"
              className="iom_btn_primary"
            >
              Connect on LinkedIn
            </a>
            <a href="/executive" className="iom_btn_secondary">
              Executive Profile
            </a>
          </div>
        </div>
        <div className="iom_scroll_hint">
          <span className="iom_scroll_bar" />
        </div>
      </section>

      {/* ── Stats Strip ──────────────────────────────────── */}
      <section className="iom_stats_strip">
        <Container>
          <div className="iom_stats_row">
            {iomStats.map((s, i) => (
              <div key={i} className="iom_stat">
                <span className="iom_stat_value">{s.value}</span>
                <span className="iom_stat_label">{s.label}</span>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* ── The Jurisdiction ─────────────────────────────── */}
      <section className="iom_section">
        <Container>
          <h2 className="iom_section_title iom_reveal">The Jurisdiction</h2>
          <div className="iom_intro_block">
            <p className="iom_reveal">
              The Isle of Man has spent decades building one of the most compelling business
              environments in the world. Its 0% corporate tax rate is well known, but the full
              picture goes considerably further. As a Crown Dependency, the island operates its own
              parliament and sets its own taxation, independent of the United Kingdom and the
              European Union. Businesses structured here benefit from exceptional fiscal efficiency
              alongside English common law, a mature professional services sector and an
              internationally respected regulatory framework.
            </p>
            <p className="iom_reveal" style={{ transitionDelay: "0.1s" }}>
              The island's financial services sector is not a recent development. It has been
              growing and deepening for over 30 years, with the infrastructure, professional talent
              and institutional relationships that come from that kind of sustained commitment. For
              businesses in iGaming, financial services, fintech and digital sectors, the Isle of
              Man offers a combination of advantages that is very difficult to replicate elsewhere.
            </p>
          </div>
          <div className="iom_pillars_grid">
            {iomPillars.map((p, i) => (
              <div
                key={i}
                className="iom_pillar_card iom_reveal"
                style={{ transitionDelay: `${i * 0.07}s` }}
              >
                <h4 className="iom_pillar_title">{p.title}</h4>
                <p className="iom_pillar_body">{p.body}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* ── Setting Up on the Island ─────────────────────── */}
      <section className="iom_section iom_section_alt">
        <Container>
          <h2 className="iom_section_title iom_reveal">Setting Up on the Island</h2>
          <p className="iom_setup_intro iom_reveal" style={{ transitionDelay: "0.06s" }}>
            A practical summary of what establishing a company on the Isle of Man requires.
          </p>
          <div className="iom_req_grid">
            {setupRequirements.map((r, i) => (
              <div
                key={i}
                className="iom_req_item iom_reveal"
                style={{ transitionDelay: `${i * 0.06}s` }}
              >
                <span className="iom_req_marker">◆</span>
                <div className="iom_req_content">
                  <p className="iom_req_title">{r.title}</p>
                  <p className="iom_req_body">{r.body}</p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* ── Gateway to Regulated Markets ─────────────────── */}
      <section className="iom_section">
        <Container>
          <h2 className="iom_section_title iom_reveal">Gateway to Regulated Markets</h2>
          <p className="iom_mkt_intro iom_reveal" style={{ transitionDelay: "0.06s" }}>
            Isle of Man registration and licensing is recognised by regulators in the UK, the EU
            and beyond. For the industries below, operating from the island provides a credible
            compliance foundation that meaningfully reduces the time and cost of entering
            additional regulated markets.
          </p>
          <div className="iom_mkt_grid">
            {marketAccess.map((m, i) => (
              <div
                key={i}
                className="iom_mkt_card iom_reveal"
                style={{ transitionDelay: `${i * 0.08}s` }}
              >
                <div className="iom_mkt_card_header">
                  <span className="iom_mkt_industry">{m.industry}</span>
                  <span className="iom_mkt_detail">{m.detail}</span>
                </div>
                <p className="iom_mkt_body">{m.body}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* ── The Rarity ───────────────────────────────────── */}
      <section className="iom_rarity_section">
        <Container>
          <Row className="align-items-center">
            <Col lg={4} className="text-center mb-5 mb-lg-0">
              <div className="iom_rarity_display iom_reveal">
                <span className="iom_rarity_one">1</span>
                <span className="iom_rarity_in">in</span>
                <span className="iom_rarity_pop">84,000</span>
              </div>
              <p className="iom_rarity_caption iom_reveal" style={{ transitionDelay: "0.1s" }}>
                Isle of Man residents
              </p>
            </Col>
            <Col lg={8}>
              <div className="iom_rarity_text">
                <h2 className="iom_rarity_heading iom_reveal">
                  A Profile That Does Not Exist on Every Street Corner
                </h2>
                <p className="iom_reveal" style={{ transitionDelay: "0.08s" }}>
                  84,000 people. The entire population of the Isle of Man would not fill a single
                  major sports stadium. It is not a city. It is not a region. It is a small island
                  with a working professional population that, by any realistic measure, numbers in
                  the tens of thousands. Within that pool, find someone with 13 years of regulated
                  iGaming experience across multiple international markets. Now add formal
                  qualifications in both engineering and business management. A postgraduate degree
                  in blockchain and digital currencies completed with distinction. A PhD in business
                  administration in progress. Active technical compliance experience at senior level,
                  right now, in a live regulated environment.
                </p>
                <p className="iom_reveal" style={{ transitionDelay: "0.16s" }}>
                  That person lives here. Businesses that want the full benefit of an Isle of Man
                  structure — the 0% tax rate, the regulatory substance, the recognised compliance
                  credentials that open UK and EU markets — need someone on the ground with genuine
                  depth to make it work. Finding that combination anywhere is rare. Finding it on
                  this island is almost not possible. This is a genuinely exceptional opportunity
                  for any business that understands what it means.
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* ── Executive Profile ────────────────────────────── */}
      <section className="iom_section">
        <Container>
          <h2 className="iom_section_title iom_reveal">The Executive Profile</h2>
          <Row className="align-items-start">
            <Col lg={5} className="mb-4 mb-lg-0">
              <div className="iom_profile_card iom_reveal">
                <h3 className="iom_profile_name">Shayen Ramsahai</h3>
                <p className="iom_profile_role">
                  Technical Compliance Specialist &nbsp;·&nbsp; Isle of Man Resident
                </p>
                <div className="iom_profile_rule" />
                <p className="iom_profile_bio">
                  A business-driven technologist with 13 years of experience across the iGaming
                  industry, working at the point where technology strategy, operations and commercial
                  delivery meet. Formally qualified in both electronic engineering and business
                  management. Based on the Isle of Man since 2019.
                </p>
                <a
                  href={socialprofils.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="iom_btn_primary"
                >
                  View LinkedIn Profile
                </a>
              </div>
            </Col>
            <Col lg={7}>
              <div className="iom_credentials_grid">
                {credentials.map((c, i) => (
                  <div
                    key={i}
                    className="iom_credential iom_reveal"
                    style={{ transitionDelay: `${i * 0.06}s` }}
                  >
                    <span className="iom_cred_label">{c.label}</span>
                    <span className="iom_cred_value">{c.value}</span>
                  </div>
                ))}
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* ── Director Capabilities ────────────────────────── */}
      <section className="iom_section iom_section_alt">
        <Container>
          <div className="iom_caps_header iom_reveal">
            <h2 className="iom_section_title">What an Isle of Man-Based Executive Provides</h2>
            <p className="iom_caps_sub">
              A resident executive with this background does considerably more than satisfy a box on
              a licence application.
            </p>
          </div>
          <div className="iom_caps_grid">
            {executiveCapabilities.map((cap, i) => (
              <div
                key={i}
                className="iom_cap_card iom_reveal"
                style={{ transitionDelay: `${i * 0.07}s` }}
              >
                <span className="iom_cap_num">{String(i + 1).padStart(2, "0")}</span>
                <h4 className="iom_cap_title">{cap.title}</h4>
                <p className="iom_cap_body">{cap.body}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* ── CTA ──────────────────────────────────────────── */}
      <section className="iom_cta_section">
        <Container>
          <div className="iom_cta_inner iom_reveal">
            <h2 className="iom_cta_heading">Discuss an Executive Arrangement</h2>
            <p className="iom_cta_body">
              If your business is exploring what an Isle of Man structure could look like, or you
              are looking for a qualified resident executive with the technical, regulatory and
              operational background to run things from the island, I am available to discuss.
            </p>
            <p className="iom_cta_body">
              The financial case is straightforward. In most jurisdictions, businesses hand over
              between 19% and 25% of annual profit in corporate tax. Structured to hold primarily
              from the Isle of Man, that portion does not leave the business at all. It stays,
              reinvests and compounds. A company generating meaningful revenue can realistically
              increase what it retains by 19% to 25% — not by cutting costs, not by restructuring
              operations, but simply by where its holding company sits. Add the regulatory
              credibility that comes with Isle of Man registration, the recognised pathways into UK
              and EU markets it provides, and a qualified resident executive already in place to
              satisfy substance requirements from day one, and the proposition becomes difficult
              to find elsewhere.
            </p>
            <a
              href={socialprofils.linkedin}
              target="_blank"
              rel="noreferrer"
              className="iom_btn_primary"
            >
              Connect on LinkedIn
            </a>
          </div>
        </Container>
      </section>
    </HelmetProvider>
  );
};
