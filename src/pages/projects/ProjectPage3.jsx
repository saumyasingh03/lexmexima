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
        background:
          "linear-gradient(135deg, #e0f0fa 0%, #d3eafc 100%)",
        borderRadius: "16px",
        padding: "32px 36px",
        boxShadow: "0 10px 24px rgba(14, 102, 194, 0.15)",
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
          color: "#0c4a6e",
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
      <div style={{ fontSize: "1.1rem", lineHeight: 1.7, color: "#334155" }}>
        {children}
      </div>
    </section>
  );
};

export default function ProjectPage3() {
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
          color: "#0c4a6e",
          background:
            "linear-gradient(180deg, #e0f0fa 0%, #ffffff 80%)",
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
            boxShadow: "0 20px 70px rgba(12, 74, 110, 0.15)",
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
              color: "#0c4a6e",
              userSelect: "text",
            }}
          >
            Judicial Reform & Accountability
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
            Fair. Fast. Fearless.
          </p>
        </section>

        {/* Description Section */}
        <Section title="Project Description" delay={350}>
          <p>
            A strong and independent judiciary is the backbone of democracy — but it must also be accessible, efficient, and transparent. The "Judicial Reform & Accountability" project is a national initiative that aims to strengthen public trust in our judicial institutions by advocating for systemic improvements that make justice delivery faster, fairer, and more inclusive.
          </p>
          <p>
            Delays, backlogs, lack of transparency, and limited access to affordable legal support often hinder ordinary citizens, especially the poor and marginalized, from receiving timely justice. This project addresses these challenges by combining research, public engagement, and legal reform campaigns.
          </p>
          <p>
            We work with legal professionals, civil society organizations, students, and affected communities to push for reforms such as judicial transparency, open court data, faster case processing through digital tools, and stronger grievance redress mechanisms within the court system.
          </p>
          <p>
            A key component involves public education — demystifying court processes, promoting awareness of legal rights, and conducting watchdog monitoring of case delays, judge vacancies, and legal aid efficiency. We also convene roundtables and publish citizen reports to hold institutions accountable to their mandate.
          </p>
          <p>
            Beyond the legal system, the project also champions people-first practices within courts — gender-sensitive benches, inclusive courtroom language, and support for underrepresented litigants. Our vision is a justice system that does not just deliver judgments, but earns public confidence through fairness, accessibility, and integrity.
          </p>
          <p>
            Through informed advocacy, strategic litigation, and sustained civic pressure, this initiative seeks to ensure that the promise of justice is not reserved for the privileged few, but delivered equitably to every citizen.
          </p>
        </Section>

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
