import React, { useEffect, useState } from "react";
import GoToProjectsButton from "../../components/projects/GoToProjectsButton";

const Section = ({ title, children, delay = 0 }) => {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), delay);
    return () => clearTimeout(timer);
  }, [delay]);

  return (
    <section
      style={{
        maxWidth: "960px",
        width: "100%",
        background: "linear-gradient(135deg, #f0f8ff 0%, #e1f1ff 100%)",
        borderRadius: "16px",
        padding: "32px 36px",
        boxShadow: "0 10px 24px rgba(36, 99, 184, 0.15)",
        marginBottom: "42px",
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(24px)",
        transition: "opacity 0.7s ease, transform 0.7s ease",
        boxSizing: "border-box",
      }}
      aria-labelledby={`${title.toLowerCase().replace(/[^a-z0-9]+/g, "-")}-heading`}
    >
      <h2
        id={`${title.toLowerCase().replace(/[^a-z0-9]+/g, "-")}-heading`}
        style={{
          fontSize: "1.8rem",
          fontWeight: "700",
          color: "#1c3e70",
          marginBottom: "24px",
          userSelect: "none",
          display: "flex",
          alignItems: "center",
          gap: "12px",
        }}
      >
        <span role="img" aria-hidden="true" style={{ fontSize: "1.9rem" }}>
          💻
        </span>
        {title}
      </h2>
      <div style={{ fontSize: "1.1rem", lineHeight: 1.7, color: "#1e293b" }}>
        {children}
      </div>
    </section>
  );
};

export default function ProjectPage5() {
  return (
    <>
      <GoToProjectsButton />
      <main
        style={{
          width: "100%",
          minHeight: "100vh",
          padding: "3.5rem 5vw 5rem",
          fontFamily:
            "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif",
          background: "linear-gradient(180deg, #f0f8ff 0%, #ffffff 85%)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          boxSizing: "border-box",
          overflowX: "hidden",
        }}
      >
        {/* Header */}
        <section
          style={{
            maxWidth: "960px",
            width: "100%",
            backgroundColor: "white",
            borderRadius: "24px",
            padding: "3.5rem 3rem 3rem",
            boxShadow: "0 20px 70px rgba(36, 99, 184, 0.15)",
            marginBottom: "4.5rem",
            textAlign: "center",
            opacity: 0,
            animation: "fadeSlideIn 0.9s forwards",
            animationDelay: "0.15s",
            boxSizing: "border-box",
          }}
        >
          <h1
            style={{
              fontSize: "3.4rem",
              fontWeight: "900",
              lineHeight: 1.1,
              marginBottom: "1rem",
              color: "#1c3e70",
              userSelect: "text",
            }}
          >
            NyayaTech: Digital Justice & Legal Tech Innovation
          </h1>
          <p
            style={{
              fontSize: "1.4rem",
              fontWeight: "600",
              color: "#2563eb",
              marginBottom: "1.25rem",
              fontStyle: "italic",
            }}
          >
            Accessible. Transparent. Tech-Enabled Justice.
          </p>
        </section>

        {/* Description */}
        <Section title="Project Description" delay={350}>
          <p>
            <strong>NyayaTech</strong> is a legal technology and digital justice initiative aimed at modernizing how legal services are accessed, delivered, and understood in India. With millions facing barriers to justice due to distance, complexity, or digital illiteracy, this project builds inclusive legal tech tools that bring transparency and efficiency to the justice system.
          </p>
          <p>
            The project bridges the digital divide in legal services through open-source platforms, mobile-friendly solutions, and vernacular tools designed for rural, semi-urban, and marginalized populations.
          </p>

          <h3 style={{ marginTop: "24px", color: "#1c3e70" }}>Core Components:</h3>

          <ul
            style={{
              paddingLeft: "1.3rem",
              color: "#1e293b",
              marginBottom: "24px",
              listStyle: "none",
            }}
          >
            <li>
              <strong style={{ color: "#2563eb" }}>💡 Legal Chatbots:</strong> AI-powered chatbots provide real-time legal information on topics like land rights, domestic violence, labor laws, and cybercrime—across local languages.
            </li>
            <li style={{ marginTop: "1rem" }}>
              <strong style={{ color: "#2563eb" }}>📱 Mobile RTI & FIR Tools:</strong> Citizens can draft and track RTI applications or register basic FIRs through intuitive mobile interfaces without lawyer dependency.
            </li>
            <li style={{ marginTop: "1rem" }}>
              <strong style={{ color: "#2563eb" }}>🗂️ E-Kanoon Libraries:</strong> Interactive digital law libraries explain acts, schemes, and rights using infographics, voice notes, and animations tailored for semi-literate users.
            </li>
            <li style={{ marginTop: "1rem" }}>
              <strong style={{ color: "#2563eb" }}>🧑‍⚖️ Virtual Nyaya Kendras:</strong> Local digital booths with trained facilitators where users can attend online court hearings, e-meet legal experts, or file online petitions.
            </li>
            <li style={{ marginTop: "1rem" }}>
              <strong style={{ color: "#2563eb" }}>🔐 Data for Justice:</strong> A civic tech dashboard that uses anonymized case data to identify bottlenecks in local courts and advocate for systemic reform.
            </li>
          </ul>

          <p>
            By combining justice and technology, NyayaTech doesn't replace human legal help—it strengthens it. It complements grassroots paralegals and lawyers with tools that are fast, accountable, and scalable.
          </p>
          <p>
            Whether it's a farm worker accessing wage complaint forms through voice navigation or a domestic violence survivor filing an e-affidavit discreetly—NyayaTech believes digital dignity is legal dignity.
          </p>
        </Section>

        {/* Footer */}
        <footer
          style={{
            marginTop: "auto",
            paddingTop: "4rem",
            fontSize: "0.9rem",
            color: "#94a3b8",
            userSelect: "none",
            textAlign: "center",
            maxWidth: "960px",
            width: "100%",
            boxSizing: "border-box",
          }}
        >
          © 2025 Nari Parcham. All rights reserved.
        </footer>
      </main>

      <style>{`
        @keyframes fadeSlideIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </>
  );
}
