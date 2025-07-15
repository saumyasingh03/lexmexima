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
          "linear-gradient(135deg, #f0f7f9 0%, #d6e8f0 100%)",
        borderRadius: "16px",
        padding: "32px 36px",
        boxShadow: "0 10px 24px rgba(9, 57, 99, 0.15)",
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
          color: "#0b3c6b",
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
      <div style={{ fontSize: "1.1rem", lineHeight: 1.7, color: "#2c3e50" }}>
        {children}
      </div>
    </section>
  );
};

export default function ProjectPage4() {
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
          color: "#0b3c6b",
          background:
            "linear-gradient(180deg, #f0f7f9 0%, #ffffff 80%)",
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
            boxShadow: "0 20px 70px rgba(11, 60, 107, 0.15)",
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
              color: "#0b3c6b",
              userSelect: "text",
            }}
          >
            Nyay Setu: Legal Aid & Pro Bono Services
          </h1>
          <p
            style={{
              fontSize: "1.4rem",
              fontWeight: "600",
              color: "#1e90ff",
              marginBottom: "1.25rem",
              fontStyle: "italic",
            }}
          >
            Justice for All. Support Without Barriers.
          </p>
        </section>

        {/* Description Section */}
        <Section title="Project Description" delay={350}>
          <p>
            <strong>Nyay Setu</strong> is a legal empowerment project dedicated to providing free legal aid and pro bono support to underserved individuals and communities. While the Constitution guarantees access to justice, in practice, millions are left without legal representation due to poverty, illiteracy, or fear of the system. This project addresses that gap directly.
          </p>
          <p>
            With a growing network of legal professionals, student volunteers, and grassroots justice workers, Nyay Setu ensures that the door to legal redress is open to everyone—irrespective of caste, gender, income, or geography.
          </p>

          <h3 style={{ fontWeight: "700", marginTop: "24px", marginBottom: "16px", color: "#0b3c6b" }}>
            1. Legal Aid Clinics
          </h3>
          <p>
            We establish community-based legal aid clinics in collaboration with law schools, bar associations, and civil society organizations. These clinics offer:
          </p>
          <ul style={{ paddingLeft: "1.3rem", color: "#2c3e50", marginBottom: "24px" }}>
            <li>Free legal consultations and document drafting</li>
            <li>Support for domestic violence, land disputes, labor violations, and child rights</li>
            <li>Assistance with court forms, affidavits, and procedural guidance</li>
            <li>Referral to empanelled pro bono lawyers</li>
          </ul>

          <h3 style={{ fontWeight: "700", marginTop: "24px", marginBottom: "16px", color: "#0b3c6b" }}>
            2. Awareness & Outreach
          </h3>
          <p>
            Many people don’t seek justice simply because they don’t know where to begin. Nyay Setu conducts mobile legal literacy drives using vans, WhatsApp legal tips, puppet shows, and paralegal-led village sessions to educate communities about:
          </p>
          <ul style={{ paddingLeft: "1.3rem", color: "#2c3e50", marginBottom: "24px" }}>
            <li>Basic rights and entitlements</li>
            <li>How to file FIRs, complaints, and RTI applications</li>
            <li>Legal aid eligibility and how to access it</li>
          </ul>

          <h3 style={{ fontWeight: "700", marginTop: "24px", marginBottom: "16px", color: "#0b3c6b" }}>
            3. Volunteer Lawyers & Justice Fellows
          </h3>
          <p>
            We build a strong network of pro bono lawyers and law students who commit to a set number of hours each month to serve vulnerable populations. Our Justice Fellows also:
          </p>
          <ul style={{ paddingLeft: "1.3rem", color: "#2c3e50", marginBottom: "24px" }}>
            <li>Assist in court proceedings and mediation</li>
            <li>Track cases and ensure follow-ups</li>
            <li>Support survivors of violence or displacement with dignity</li>
          </ul>

          <p>
            Nyay Setu believes legal aid isn’t charity—it’s a constitutional promise. We aim to make that promise real by bridging legal deserts, removing procedural barriers, and standing by those who need it most.
          </p>
          <p>
            With every case we support, and every injustice we challenge, we move one step closer to a future where justice is truly accessible—for all.
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
