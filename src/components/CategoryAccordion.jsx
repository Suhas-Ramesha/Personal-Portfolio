import React, { useState, useMemo } from "react";
import styled from "styled-components";
import ProjectCard from "./cards/ProjectCard";
import FlowingMenuVertical from "./FlowingMenuVertical";

const Section = styled.div`
  width: 100%;
  max-width: 1100px;
  margin: 0 auto;
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
`;

const CardContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: stretch;
  gap: 28px;
  flex-wrap: wrap;
`;

export default function CategoryAccordion({ projects }) {
  const categories = useMemo(() => ([
    { key: "all", label: "ALL" },
    { key: "web app", label: "WEB APP'S" },
    { key: "android app", label: "ANDROID APP'S" },
    { key: "machine learning", label: "MACHINE LEARNING" },
  ]), []);

  const [open, setOpen] = useState("all");

  const filtered = (cat) => {
    if (cat === "all") return projects;
    return projects.filter(p => p.category === cat);
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


