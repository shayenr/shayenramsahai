import React, { useEffect, useRef } from "react";
import "./style.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import { meta, socialprofils } from "../../content_option";

const propositions = [
  {
    num: "01",
    title: "Tax Efficiency",
    body: "Most jurisdictions charge between 19% and 25% of annual profit in corporate tax. The Isle of Man charges none. A business structured to hold primarily from the island retains that entire portion of profit every year. At any meaningful revenue scale, that is not a marginal gain — it is a fundamental improvement to what the business keeps.",
    cta: { label: "Explore the Isle of Man", to: "/iom" },
  },
  {
    num: "02",
    title: "Regulatory Gateway",
    body: "Isle of Man registration and licensing is recognised by regulators in the UK, the EU and beyond. For iGaming, insurance, digital assets and fund management, operating from the island provides a credible compliance foundation that meaningfully reduces the cost and time of entering additional regulated markets.",
    cta: { label: "See Market Access Detail", to: "/iom" },
  },
  {
    num: "03",
    title: "Executive in Residence",
    body: "The island has a population of approximately 84,000 people. Within that, finding a resident with 13 years of regulated iGaming experience, dual engineering and business management qualifications, an MSc in blockchain with distinction and an ongoing PhD in business administration is not straightforward. That person exists, lives here, and is available.",
    cta: { label: "Executive Profile", to: "/executive" },
  },
];

export const Landing = () => {
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

    const COUNT = 70;
    const MAX_DIST = 150;

    const nodes = Array.from({ length: COUNT }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      vx: (Math.random() - 0.5) * 0.35,
      vy: (Math.random() - 0.5) * 0.35,
      r: 1.0 + Math.random() * 1.8,
      phase: Math.random() * Math.PI * 2,
    }));

    let raf;
    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      nodes.forEach(n => {
        n.x += n.vx;
        n.y += n.vy;
        n.phase += 0.014;
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
            const a = (1 - d / MAX_DIST) * 0.14;
            ctx.beginPath();
            ctx.moveTo(nodes[i].x, nodes[i].y);
            ctx.lineTo(nodes[j].x, nodes[j].y);
            ctx.strokeStyle = `rgba(212, 170, 63, ${a})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }
      }

      nodes.forEach(n => {
        const p = Math.sin(n.phase) * 0.5 + 0.5;
        ctx.beginPath();
        ctx.arc(n.x, n.y, n.r * (0.7 + p * 0.55), 0, Math.PI * 2);
        ctx.fillStyle = `rgba(212, 170, 63, ${0.28 + p * 0.45})`;
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
    const reveals = document.querySelectorAll(".land_reveal");
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add("land_visible");
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
        <title>{meta.title} — Isle of Man</title>
        <meta name="description" content={meta.description} />
      </Helmet>

      {/* ── Hero ─────────────────────────────────────────── */}
      <section className="land_hero">
        <canvas ref={canvasRef} className="land_canvas" />
        <div className="land_hero_inner">
          <span className="land_eyebrow">Isle of Man &nbsp;·&nbsp; Crown Dependency &nbsp;·&nbsp; 0% Corporate Tax</span>
          <h1 className="land_hero_title">
            Where Tax Efficiency<br className="d-none d-lg-block" /> Meets Regulatory Excellence
          </h1>
          <p className="land_hero_sub">
            A rare combination of structural advantage: a zero-tax jurisdiction with
            internationally recognised regulatory credentials, and a qualified executive already
            resident on the island to make it work from day one.
          </p>
          <div className="land_hero_ctas">
            <Link to="/iom" className="land_btn_primary">The Isle of Man Advantage</Link>
            <Link to="/executive" className="land_btn_secondary">Executive Profile</Link>
          </div>
        </div>
        <div className="land_scroll_hint">
          <span className="land_scroll_bar" />
        </div>
      </section>

      {/* ── Tax number strip ─────────────────────────────── */}
      <div className="land_tax_strip">
        <Container>
          <div className="land_tax_row">
            <div className="land_tax_item">
              <span className="land_tax_pct">19–25%</span>
              <span className="land_tax_label">Corporate tax rate in most major jurisdictions</span>
            </div>
            <div className="land_tax_arrow">→</div>
            <div className="land_tax_item land_tax_item_iom">
              <span className="land_tax_pct land_tax_pct_zero">0%</span>
              <span className="land_tax_label">Corporate tax rate in the Isle of Man</span>
            </div>
            <div className="land_tax_result">
              <span className="land_tax_result_value">19–25% more</span>
              <span className="land_tax_result_label">retained by the business, every year</span>
            </div>
          </div>
        </Container>
      </div>

      {/* ── Three propositions ───────────────────────────── */}
      <section className="land_props_section">
        <Container>
          <h2 className="land_section_title land_reveal">The Proposition</h2>
          <div className="land_props_grid">
            {propositions.map((p, i) => (
              <div
                key={i}
                className="land_prop_card land_reveal"
                style={{ transitionDelay: `${i * 0.1}s` }}
              >
                <span className="land_prop_num">{p.num}</span>
                <h3 className="land_prop_title">{p.title}</h3>
                <p className="land_prop_body">{p.body}</p>
                <Link to={p.cta.to} className="land_prop_link">
                  {p.cta.label} →
                </Link>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* ── Closing CTA ──────────────────────────────────── */}
      <section className="land_cta_section">
        <Container>
          <div className="land_cta_inner land_reveal">
            <p className="land_cta_label">Ready to explore the opportunity?</p>
            <h2 className="land_cta_heading">
              Start a conversation about what an Isle of Man structure could mean for your business.
            </h2>
            <div className="land_cta_btns">
              <Link to="/iom" className="land_btn_primary">Isle of Man Detail</Link>
              <a
                href={socialprofils.linkedin}
                target="_blank"
                rel="noreferrer"
                className="land_btn_secondary"
              >
                Connect on LinkedIn
              </a>
            </div>
          </div>
        </Container>
      </section>
    </HelmetProvider>
  );
};
