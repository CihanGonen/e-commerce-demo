import { Link } from "react-router-dom";

import "./MenuItem.css";

const MenuItem = ({ title, imageUrl, size, linkUrl }) => {
  return (
    <Link className={`${size} menu-item link-menu-item`} to={linkUrl}>
      <div className={`${size} menu-item`}>
        <div
          className="background-image"
          style={{
            backgroundImage: `url(${imageUrl})`,
          }}
        />
        <div className="content">
          <h1 className="title">{title.toUpperCase()}</h1>
          <span className="subtitle">İNCELE</span>
        </div>
      </div>
    </Link>
  );
};

export default MenuItem;
