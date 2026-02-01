import React from "react";
import styled from "styled-components";
import SafeImage from "../SafeImage";

const Card = styled.div`
  position: relative;
  width: 330px;
  height: auto;
  min-height: 420px;
  background-color: ${({ theme }) => theme.card};
  cursor: pointer;
  border-radius: 10px;
  box-shadow: 0 0 12px 4px rgba(0, 0, 0, 0.4);
  overflow: hidden;
  padding: 26px 20px;
  display: flex;
  flex-direction: column;
  gap: 14px;
  transition: all 0.5s ease-in-out;
  @media (max-width: 768px) {
    width: 100%;
    max-width: 330px;
    min-height: 400px;
    padding: 20px 16px;
  }
  @media (max-width: 480px) {
    max-width: 100%;
    padding: 18px 14px;
    min-height: 380px;
  }
  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 0 50px 4px rgba(0, 0, 0, 0.6);
    filter: brightness(1.1);
    @media (max-width: 768px) {
      transform: translateY(-5px);
    }
  }
`;
const Content = styled.div`
  position: relative;
  z-index: 1;
`;
const Tags = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 8px;
  margin-top: 4px;
`;
const Details = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 0px;
  padding: 0px 2px;
`;
const Title = styled.div`
  font-size: 20px;
  font-weight: 600;
  color: ${({ theme }) => theme.text_secondary};
  overflow: hidden;
  display: -webkit-box;
  max-width: 100%;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  @media (max-width: 768px) {
    font-size: 18px;
  }
  @media (max-width: 480px) {
    font-size: 16px;
  }
`;
const Date = styled.div`
  font-size: 12px;
  margin-left: 2px;
  font-weight: 400;
  color: ${({ theme }) => theme.text_secondary + 80};
  @media only screen and (max-width: 768px) {
    font-size: 11px;
  }
  @media (max-width: 480px) {
    font-size: 10px;
  }
`;
const Description = styled.div`
  font-weight: 400;
  color: ${({ theme }) => theme.text_secondary + 99};
  margin-top: 8px;
  max-width: 100%;
  overflow: visible;
  font-size: 14px;
  line-height: 1.55;
  @media (max-width: 768px) {
    font-size: 13px;
    line-height: 1.5;
  }
  @media (max-width: 480px) {
    font-size: 12px;
    line-height: 1.45;
  }
`;
const Members = styled.div`
  display: flex;
  align-items: center;
  padding-left: 10px;
`;
const Avatar = styled(SafeImage)`
  width: 38px;
  height: 38px;
  border-radius: 50%;
  margin-left: -10px;
  background-color: ${({ theme }) => theme.white};
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  border: 3px solid ${({ theme }) => theme.card};
  object-fit: cover;
`;
const Button = styled.a`
  color: ${({ theme }) => theme.primary};
  text-decoration: none;
  font-weight: 600;
  text-align: center;
`;

const ProjectCard = ({ project }) => {
  return (
    <Card>
      {project.image && (
        <SafeImage 
          src={project.image} 
          alt={project.title}
          style={{
            position: 'absolute',
            inset: 0,
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            opacity: 0.15,
            zIndex: 0,
            pointerEvents: 'none'
          }}
        />
      )}
      <Content>
        <Tags></Tags>
        <Details>
          <Title>{project.title}</Title>
          <Date>{project.date}</Date>
          <Description>{project.description}</Description>
        </Details>
        <Members>
          {project.member?.map((member, index) => (
            <Avatar
              key={`member-${index}`} 
              src={member.img} 
              alt={member.name || 'Team member'}
            />
          ))}
        </Members>
        <Button href={project.github} target="_blank">
          View Code
        </Button>
      </Content>
    </Card>
  );
};

export default ProjectCard;
