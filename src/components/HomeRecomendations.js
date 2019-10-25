import React, { useState } from "react";
import RecomendationModal from "./recomendationModal";
import { Card, Button, ButtonGroup } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";

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

export default function HomeRecomendations({ allInfo }) {
  const [movieList, setMovieList] = useState([]);
  const [open, setOpen] = useState(false);
  const handleClick = movies => {
    setMovieList(movies);
    setOpen(true);
  };

  console.log(open);
  const classes = useStyles();
  return (
    <>
      <div className="container">
        <Card className={classes.mainCard}>
          <Link style={{ textDecoration: "none" }} to={`/${allInfo[0].route}`}>
            <ButtonGroup
              fullWidth
              aria-label="full width outlined button group"
            >
              <Button color="primary" variant="contained">
                <div className="home-btn">
                  <h2>{allInfo[0].link}</h2>
                </div>
              </Button>
            </ButtonGroup>
          </Link>

          <div className="all-flex">
            {allInfo.slice(1, 10).map(info => (
              <div className="hover">
                <Card className={classes.card}>
                  <div
                    className="all-card"
                    onClick={() => handleClick(info.movie)}
                  >
                    <img src={info.src} />
                  </div>
                </Card>
              </div>
            ))}
          </div>
        </Card>
      </div>
      <RecomendationModal setOpen={setOpen} movieList={movieList} open={open} />
    </>
  );
}
