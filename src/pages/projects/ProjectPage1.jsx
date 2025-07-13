import React, { useEffect, useState } from "react";
import GoToProjectsButton from "../../components/projects/GoToProjectsButton";

const SDGItem = ({ number, title }) => (
  <div
    tabIndex={0}
    role="button"
    aria-label={`Sustainable Development Goal ${number}: ${title}`}
    style={{
      backgroundColor: "#2B0D37",
      color: "white",
      padding: "6px 18px",
      borderRadius: "9999px",
      fontWeight: "600",
      fontSize: "1rem",
      marginRight: "14px",
      marginBottom: "14px",
      boxShadow: "0 2px 10px rgba(34, 197, 94, 0.5)",
      userSelect: "none",
      whiteSpace: "nowrap",
      cursor: "pointer",
      transition: "background-color 0.3s ease, transform 0.2s ease, box-shadow 0.3s ease",
    }}
    onMouseEnter={(e) => {
      e.currentTarget.style.backgroundColor = "#2B0D37";
      e.currentTarget.style.transform = "scale(1.07)";
      e.currentTarget.style.boxShadow = "0 5px 15px rgba(22, 163, 74, 0.7)";
    }}
    onMouseLeave={(e) => {
      e.currentTarget.style.backgroundColor = "#22c55e";
      e.currentTarget.style.transform = "scale(1)";
      e.currentTarget.style.boxShadow = "0 2px 10px rgba(34, 197, 94, 0.5)";
    }}
    onFocus={(e) => {
      e.currentTarget.style.backgroundColor = "#16a34a";
      e.currentTarget.style.boxShadow = "0 5px 15px rgba(22, 163, 74, 0.7)";
    }}
    onBlur={(e) => {
      e.currentTarget.style.backgroundColor = "#22c55e";
      e.currentTarget.style.boxShadow = "0 2px 10px rgba(34, 197, 94, 0.5)";
    }}
  >
    SDG {number}: {title}
  </div>
);

const PhaseItem = ({ children }) => (
  <li
    style={{
      marginBottom: "14px",
      lineHeight: 1.7,
      color: "#2B0D37",
      fontSize: "1.05rem",
      position: "relative",
      paddingLeft: "22px",
      cursor: "default",
      userSelect: "text",
    }}
  >
    <span
      aria-hidden="true"
      style={{
        position: "absolute",
        left: 0,
        top: "0.7em",
        width: "12px",
        height: "12px",
        backgroundColor: "#22c55e",
        borderRadius: "50%",
        boxShadow: "0 0 8px #22c55e66",
      }}
    />
    {children}
  </li>
);

const PhaseSection = ({ title, yearRange, points }) => {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 150);
    return () => clearTimeout(timer);
  }, []);
  return (
    <section
      style={{
        background: "linear-gradient(135deg, #e6f4ea 0%, #d1eadd 100%)",
        borderRadius: "16px",
        padding: "32px 36px",
        boxShadow: "0 10px 24px rgba(34, 197, 94, 0.15)",
        marginBottom: "42px",
        flex: 1,
        minWidth: "320px",
        maxWidth: "480px",
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(24px)",
        transition: "opacity 0.7s ease, transform 0.7s ease",
      }}
    >
      <h3
        style={{
          fontSize: "1.5rem",
          fontWeight: "700",
          color: "#065f46",
          marginBottom: "24px",
          display: "flex",
          alignItems: "center",
          gap: "12px",
          userSelect: "none",
        }}
      >
        <span role="img" aria-label="calendar" style={{ fontSize: "1.7rem" }}>
          📅
        </span>
        {title}
        <span
          style={{
            marginLeft: "auto",
            fontWeight: "500",
            fontSize: "1.05rem",
            color: "#2B0D37",
            fontStyle: "italic",
          }}
        >
          {yearRange}
        </span>
      </h3>
      <ul style={{ paddingLeft: "20px", margin: 0 }}>
        {points.map((point, i) => (
          <PhaseItem key={i}>{point}</PhaseItem>
        ))}
      </ul>
    </section>
  );
};

export default function ProjectPage1() {
  const projectTitle = "Legal Awareness & Literacy";
  const vision =
    "To empower marginalized communities with knowledge of their legal rights and duties, ensuring access to justice and promoting responsible citizenship through sustained awareness programs by 2030.";

  const sdgs = [
    { number: 4, title: "Quality Education" },
    { number: 5, title: "Gender Equality" },
    { number: 10, title: "Reduced Inequalities" },
    { number: 16, title: "Peace, Justice, and Strong Institutions" },
  ];

  const phase1Points = [
    "Conduct 100+ legal literacy workshops in rural and urban slum communities",
    "Create multilingual infographics and short videos on key legal rights",
    "Train 500 community paralegals and youth volunteers as legal awareness ambassadors",
    "Distribute simplified handbooks on rights related to women, children, and labor",
    "Partner with 50+ schools/colleges for 'Know Your Rights' campaigns",
    "Organize 15 legal aid camps with pro-bono lawyers in underserved areas",
    "Launch a helpline for legal queries and support in 3 regional languages",
  ];

  const phase2Points = [
    "Establish 100 Legal Literacy Clubs across India for youth engagement",
    "Create an open-access e-learning platform on basic legal knowledge",
    "Collaborate with law universities to conduct mobile legal clinics",
    "Expand content into 8+ regional languages to improve accessibility",
    "Support legal empowerment of women in 50+ villages through workshops",
    "Host annual Legal Awareness Week in collaboration with bar associations",
    "Develop gamified tools and mobile quizzes for legal literacy",
    "Reach 1 million people with legal information by 2028",
    "Launch 'Right to Justice' awareness buses in remote areas",
    "Document success stories and create a People's Legal Rights Archive",
    "Build an open data dashboard tracking legal literacy progress",
    "Publish an annual Legal Literacy Impact Report and share policy recommendations",
    "Ensure all educational material is available under a Creative Commons license",
  ];

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
          overflowX: "hidden",
          boxSizing: "border-box",
        }}
      >
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
            {projectTitle}
          </h1>
          <p
            style={{
              fontSize: "1.4rem",
              color: "#155e4e",
              maxWidth: "720px",
              margin: "0 auto",
              lineHeight: 1.8,
            }}
          >
            {vision}
          </p>
        </section>

        <section
          style={{
            maxWidth: "960px",
            width: "100%",
            backgroundColor: "white",
            borderRadius: "24px",
            padding: "2.5rem 3rem 3rem",
            boxShadow: "0 18px 60px rgba(5, 150, 105, 0.12)",
            marginBottom: "5rem",
            opacity: 0,
            animation: "fadeSlideIn 0.9s forwards",
            animationDelay: "0.35s",
          }}
        >
          <h2
            style={{
              fontSize: "2.1rem",
              fontWeight: "700",
              color: "#059669",
              marginBottom: "1.6rem",
              userSelect: "none",
              display: "flex",
              alignItems: "center",
              gap: "14px",
            }}
          >
            <span role="img" aria-label="target" style={{ fontSize: "1.9rem" }}>
              🎯
            </span>
            SDG Alignment
          </h2>
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "18px",
              justifyContent: "center",
            }}
          >
            {sdgs.map((sdg, i) => (
              <SDGItem key={i} number={sdg.number} title={sdg.title} />
            ))}
          </div>
        </section>

        <section
          style={{
            maxWidth: "960px",
            width: "100%",
            display: "flex",
            flexWrap: "wrap",
            gap: "32px",
            justifyContent: "center",
            marginBottom: "5rem",
            boxSizing: "border-box",
          }}
          aria-label="Project Phases"
        >
          <PhaseSection title="Phase 1" yearRange="2024-2025" points={phase1Points} />
          <PhaseSection title="Phase 2" yearRange="2026-2030" points={phase2Points} />
        </section>

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
          }}
        >
          © 2025 Nari Parcham Initiative. All rights reserved.
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
