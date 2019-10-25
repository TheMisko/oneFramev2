import React from "react";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import { List, ListItem, ListItemText, Divider, Card } from "@material-ui/core";
import Modal from "@material-ui/core/Modal";

function rand() {
  return Math.round(Math.random() * 20) - 10;
}

function getModalStyle() {
  const top = 50 + rand();
  const left = 50 + rand();

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`
  };
}

const useStyles = makeStyles(theme => ({
  paper: {
    position: "absolute",
    width: 400,
    // backgroundColor: theme.palette.background.paper,
    // border: "2px solid #000",
    // boxShadow: theme.shadows[5],
    // padding: theme.spacing(),
    marginTop: "35vh",
    marginLeft: "37vw",
    backgroundColor: "rgb(212, 215, 218)"
  },
  root: {
    width: "100%",
    maxWidth: 360,
    backgroundColor: "rgb(212, 215, 218)",
    marginLeft: "5%"
  }
}));
// style={modalStyle}
export default function RecomendationModal({ open, setOpen, movieList }) {
  const classes = useStyles();
  // getModalStyle is not a pure function, we roll the style only on the first render
  const [modalStyle] = React.useState(getModalStyle);
  const handleClose = () => {
    setOpen(false);
  };
  return (
    <div className="modal-position">
      <Modal
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
        open={open}
        onClose={handleClose}
      >
        <div className={classes.paper}>
          <Card>
            {movieList.map(movie => (
              <Link
                to={`/MovieDetailes/${movie}`}
                style={{ textDecoration: "none" }}
              >
                <List
                  component="nav"
                  className={classes.root}
                  aria-label="mailbox folders"
                >
                  <ListItem button>
                    <div className="movie-title">
                      <h1>{movie}</h1>
                    </div>
                  </ListItem>
                  <Divider />
                </List>
              </Link>
            ))}
          </Card>
        </div>
      </Modal>
    </div>
  );
}
