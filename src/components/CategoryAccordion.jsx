import React, { useState, useMemo } from "react";
import styled from "styled-components";
import ProjectCard from "./cards/ProjectCard";
import FlowingMenuVertical from "./FlowingMenuVertical";

const Section = styled.div`
  width: 100%;
  max-width: 1100px;
  margin: 0 auto;
  @media (min-width: 1400px) {
    max-width: 1400px;
  }
`;

const Row = styled.button`
  width: 100%;
  background: transparent;
  border: 0;
  border-bottom: 1px solid rgba(255,255,255,0.12);
  color: ${({ theme }) => theme.text_primary};
  font-weight: 700;
  letter-spacing: 1px;
  padding: 18px 8px;
  text-align: center;
  cursor: pointer;
  outline: none;
`;

const Panel = styled.div`
  width: 100%;
  padding: 14px 0 22px 0;
  @media (max-width: 768px) {
    padding: 12px 0 18px 0;
  }
  @media (max-width: 480px) {
    padding: 10px 0 16px 0;
  }
`;

const CardContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: stretch;
  gap: 28px;
  flex-wrap: wrap;
  @media (max-width: 768px) {
    gap: 20px;
    justify-content: center;
  }
  @media (max-width: 480px) {
    gap: 16px;
  }
`;

export default function CategoryAccordion({ projects }) {
  const categories = useMemo(() => ([
    { key: "all", label: "ALL" },
    { key: "web", label: "WEB" },
    { key: "app", label: "APP" },
    { key: "machine learning", label: "MACHINE LEARNING" },
    { key: "automation", label: "AUTOMATION" },
  ]), []);

  const [open, setOpen] = useState("all");

  const filtered = (cat) => {
    if (cat === "all") return projects;
    const filterKey = cat.toLowerCase();
    // Support for multiple categories like "ml & web" or "ml and web"
    return projects.filter(p => {
      const category = (p.category || "").toLowerCase();
      
      // Handle exact match
      if (category === filterKey) return true;
      
      // Handle "machine learning" and "ml" synonyms
      const isML = filterKey === "machine learning" || filterKey === "ml";
      const categoryHasML = category.includes("ml") || category.includes("machine learning");
      if (isML && categoryHasML) return true;
      
      // Handle multiple categories (e.g., "ml & web", "web & ml", "ml and web")
      if (category.includes("&") || category.includes(" and ")) {
        // Split by & or "and" and check each part
        const parts = category.split(/[&]| and /).map(p => p.trim());
        return parts.some(part => {
          if (isML) return part === "ml" || part === "machine learning";
          return part === filterKey;
        });
      }
      
      // Handle simple contains check
      return category.includes(filterKey);
    });
  };

  return (
    <Section>
      <FlowingMenuVertical
        items={categories.map(cat => ({
          text: cat.label,
          image: (projects.find(p => cat.key === 'all' ? p : p.category === cat.key)?.image || ''),
          value: cat.key
        }))}
        onSelect={(value) => setOpen(prev => prev === value ? "" : value)}
      />
      {open && (
        <Panel>
          <CardContainer>
            {filtered(open).map(project => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </CardContainer>
        </Panel>
      )}
    </Section>
  );
}


