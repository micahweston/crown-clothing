import React from "react";
// Higher order component. Takes a component and transforms it into another component to send.
import { withRouter } from "react-router-dom";

import "./menu-item.styles.scss";

// Using linkURL and match.url we are finding the URL we clicked on, and finding it from directory.component.
const MenuItem = ({ title, imageUrl, size, history, linkUrl, match }) => (
  <div
    className={`${size} menu-item`}
    onClick={() => history.push(`${match.url}${linkUrl}`)}
  >
    <div
      className="background-image"
      style={{ backgroundImage: `url(${imageUrl})` }}
    />
    <div className="content">
      <h1 className="title">{title.toUpperCase()}</h1>
      <span className="subtitle">SHOP NOW</span>
    </div>
  </div>
);

export default withRouter(MenuItem);
