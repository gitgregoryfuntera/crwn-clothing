import React from "react";
import { useNavigate } from "react-router-dom";
import "./menu-item.styles.scss";
const MenuItem = ({ title, imageUrl, size, linkUrl }) => {
  const navigate = useNavigate();
  return (
    <div className={`menu-item ${size}`} onClick={() => navigate(`/${linkUrl}`)}>
      <div
        className="background-image"
        style={{
          background: `url(${imageUrl})`,
        }}
      />
      <div className="content">
        <div className="title">{title.toUpperCase()}</div>
        <span className="subtitle">SHOP NOW</span>
      </div>
    </div>
  );
};

export default MenuItem;
