import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom"; 

const ProjectCard = ({ project }) => {
  const { title, description, image, link } = project; 

  return (
    <StyledWrapper>
      <div className="card">
        {/* Image */}
        <div className="image-container">
          <img src={image} alt={title} className="project-image" />
        </div>

        {/* Text */}
        <div className="text-content">
          <h3 className="title">{title}</h3>
          <p className="description">{description}</p>

          {/* Learn More link */}
          <Link to={link} className="learn-more">
            Learn More →
          </Link>
        </div>
      </div>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  .card {
    width: 100%;
    height: 420px;
    background: #171717;
    display: flex;
    flex-direction: column;
    overflow: hidden;
    position: relative;
    border-radius: 1rem;
    box-shadow: 0px 0px 3px 1px #00000088;
    cursor: pointer;
  }

  .image-container {
    width: 100%;
    height: 200px;
    overflow: hidden;
  }
  .project-image {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.5s ease;
  }
  .card:hover .project-image {
    transform: scale(1.1);
  }

  .text-content {
    padding: 1.5rem;
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  .title {
    font-size: 1.25rem;
    font-weight: 700;
    margin-bottom: 0.75rem;
    color: white;
  }

  .description {
    font-size: 0.875rem;
    color: #a3a3a3;
    line-height: 1.5;
    overflow-y: auto;
    flex-grow: 1;
    margin-bottom: 1rem;
  }

  .learn-more {
    font-size: 0.875rem;
    color: #8b5cf6;
    text-decoration: none;
    font-weight: 500;
    transition: color 0.3s ease;
    align-self: flex-start;
  }

  .learn-more:hover {
    color: #c4b5fd;
    text-decoration: underline;
  }

  .content::before,
  .card::before,
  .card::after {
    pointer-events: none;
  }

  .card::before {
    display: none;
    opacity: 0;
    content: "";
    position: absolute;
    width: 80px;
    height: 360px;
    background: linear-gradient(#4ade80, #22c55e);
    animation: spin 8s linear infinite paused;
    transition: opacity 300ms;
  }

  .card:hover::before {
    opacity: 1;
    animation-play-state: running;
  }

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

export default ProjectCard;
