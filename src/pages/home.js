import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import HomeRecomendations from "../components/HomeRecomendations";
import Nav from "../components/nav";
export default function Home({ allInfo, paintingsInfo, open, setOpen }) {
  return (
    <div>
      {/* <Link to="/">HOME</Link>
      <Link to="/AllRecomendations">All</Link>
      <Link to="/PaintingsRecomendations">PAINTINGS</Link> */}
      <Nav />
      <div className="home-flex">
        <HomeRecomendations open={open} setOpen={setOpen} allInfo={allInfo} />
        <HomeRecomendations
          open={open}
          setOpen={setOpen}
          allInfo={paintingsInfo}
        />
      </div>
    </div>
  );
}
