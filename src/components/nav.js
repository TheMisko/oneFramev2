import React from "react";
import { Link } from "react-router-dom";
import { AppBar, Toolbar, Typography } from "@material-ui/core";

export default function Nav() {
  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          {" "}
          <div className="nav-logo">
            <Link to="/" style={{ textDecoration: "none" }}>
              <Typography>
                <h1>OneFrame</h1>
              </Typography>
            </Link>
          </div>
          <div className="nav-link">
            <Link
              to="/PaintingsRecomendations"
              style={{ textDecoration: "none" }}
            >
              {" "}
              <Typography>
                <h4>Paintings</h4>
              </Typography>
            </Link>
          </div>
          <div className="nav-link2">
            <Link to="/AllRecomendations" style={{ textDecoration: "none" }}>
              <Typography>
                <h4>Images</h4>
              </Typography>
            </Link>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
}
