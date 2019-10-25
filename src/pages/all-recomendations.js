import React, { useState } from "react";
import Nav from "../components/nav";
import { Card } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import RecmendationModal from "../components/recomendationModal";
import RecomendationModal from "../components/recomendationModal";

const useStyles = makeStyles({
  card: {
    maxWidth: 250,
    maxHeight: 250,
    marginBottom: "2%",
    marginLeft: "2%",
    marginTop: "2%",
    marginRight: "2%"
  },
  mainCard: {
    maxWidth: "40vw",
    maxHeight: "80vh"
  }
});

export default function AllRecomendations({ info }) {
  const [movieList, setMovieList] = useState([]);
  const [open, setOpen] = useState(false);
  const [Lenght, SetLenght] = useState(info.lenght);
  const handleClick = movies => {
    setMovieList(movies);
    setOpen(true);
  };
  const classes = useStyles();
  return (
    <div>
      <Nav />
      <div className="all-flex">
        {info.slice(1, Lenght).map(info => (
          <div className="hover">
            <Card className={classes.card}>
              <div className="all-card" onClick={() => handleClick(info.movie)}>
                <img src={info.src} />
              </div>
            </Card>
          </div>
        ))}
      </div>
      <RecomendationModal setOpen={setOpen} movieList={movieList} open={open} />
    </div>
  );
}
