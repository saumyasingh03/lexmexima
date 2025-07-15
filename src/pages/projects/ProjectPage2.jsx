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
        background: "linear-gradient(135deg, #e6f4ea 0%, #d1eadd 100%)",
        borderRadius: "16px",
        padding: "32px 36px",
        boxShadow: "0 10px 24px rgba(34, 197, 94, 0.15)",
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
          color: "#065f46",
          marginBottom: "24px",
          userSelect: "none",
          display: "flex",
          alignItems: "center",
          gap: "12px",
        }}
      >
        <span role="img" aria-hidden="true" style={{ fontSize: "1.9rem" }}>
          ⚖️
        </span>
        {title}
      </h2>
      <div style={{ fontSize: "1.1rem", lineHeight: 1.7, color: "#374151" }}>
        {children}
      </div>
    </section>
  );
};

export default function ProjectPage2() {
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
          color: "#064e3b",
          background: "linear-gradient(180deg, #e6f4ea 0%, #ffffff 80%)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          userSelect: "text",
          boxSizing: "border-box",
          overflowX: "hidden",
        }}
      >
        {/* Header Section */}
        <section
          style={{
            maxWidth: "960px",
            width: "100%",
            backgroundColor: "white",
            borderRadius: "24px",
            padding: "3.5rem 3rem 3rem",
            boxShadow: "0 20px 70px rgba(6, 95, 70, 0.15)",
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
              color: "#065f46",
              userSelect: "text",
            }}
          >
            Access to Justice
          </h1>
          <p
            style={{
              fontSize: "1.4rem",
              fontWeight: "600",
              color: "#155e4e",
              marginBottom: "1.25rem",
              fontStyle: "italic",
            }}
          >
            Rights. Remedies. Reach.
          </p>
        </section>

        {/* Description Section */}
        <Section title="Project Description" delay={350}>
          <p>
            Access to Justice is not just a legal concern — it is a fundamental human right. This initiative strives to bridge the gap between law and the people it is meant to serve. In a system often burdened by complexity, formality, and delay, this project brings legal processes closer to the everyday lives of ordinary citizens, especially those from marginalized communities.
          </p>
          <p>
            For many, legal redress remains a distant dream — blocked by poverty, lack of awareness, fear of authority, or systemic discrimination. This project tackles these barriers head-on. It focuses on creating inclusive pathways where people are informed of their rights, supported through the legal process, and treated with dignity at every stage.
          </p>
          <p>
            Our model blends grassroots legal literacy with practical support — mobile legal clinics, paralegal training, legal aid partnerships, and simplified digital access to justice. We work in underserved areas, listening first, then building local mechanisms of trust and transparency that reduce dependency on overburdened formal courts.
          </p>
          <p>
            We train youth, women, and community leaders as justice navigators — people who can identify legal needs, refer cases, support victims, and deconstruct intimidating procedures. At the same time, we advocate for system-level reforms that make the judiciary more people-friendly: simplified forms, multilingual access, better legal aid infrastructure, and respect for community-based dispute resolution models.
          </p>
          <p>
            Access to Justice is about making the law real — not just in text, but in practice. It’s about ensuring that every person, regardless of where they live or what they earn, has a fair chance to claim their rights, challenge injustice, and be heard. Because justice delayed or denied is not an exception — it's a daily reality we must change.
          </p>
          <p>
            With a mission rooted in rights, remedies, and reach, this initiative reimagines justice not as a distant promise, but as a lived experience.
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
