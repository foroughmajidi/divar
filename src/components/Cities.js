import React, { useEffect } from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import { Button, Box } from "@material-ui/core";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import TextField from "@material-ui/core/TextField";
import { cities } from "../data/Data";
import { DivarContext } from "../ApiData";
import { useContext } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useHistory,
  Link,
  useParams
} from "react-router-dom";

const useStyles = makeStyles((theme) =>
  createStyles({
    cityButton: {
      color: "#555",
      margin: "0px 5px",
      backgroundColor: "white",
      padding: "7px 16px",
      "&:hover": {
        backgroundColor: "#hhh",
        color: "black",
      },
    },
    modal: {
      display: "block",
      overflow: "scroll",
      position: "absolute",
      top: "10%",
      left: "10%",
      height: "100%",
      marginTop: "130px",
      border: "none",
      overflowX: "auto",
    },
    paper: {
      boxShadow: theme.shadows[5],
      backgroundColor: "white",
      width: "790px",
      margin: "auto",
      border: "none",
      borderRadius: "10px",
      direction: "rtl",
      padding: "20px 20px",
    },
    textField: {
      marginLeft: theme.spacing(1),
      marginRight: theme.spacing(1),
      width: "25ch",
    },
    activeCityBtn: {
      color: "white",
      margin: "12px",
      backgroundColor: "#a62626",
      padding: "5px",
      fontSize: "16px",
      width: "130px",
      "&:hover": {
        backgroundColor: "#be3737",
      },
      fontFamily:"IranSans"
    },
    cityBtn: {
      color: "#a62626",
      margin: "12px",
      backgroundColor: "white",
      textDecoration: "none",
      padding: "5px",
      fontSize: "16px",      
      fontFamily:"IranSans",
      width: "130px",
      borderColor: "#a62626",
      "&:hover": {
        backgroundColor: "rgba(166,38,38,.04)",
        color:"#a62626"
      },
    },
  })
);
export default function Cities() {
  const classes = useStyles();
  // const location = useLocation();
  const [open, setOpen] = React.useState(false);
  // const [cityName, setCityName] = React.useState("تهران");
  let cityName;
  const handleModalOpen = () => {
    setOpen(true);
  };
  const { path,setPath, setPage, setListItems,city,setCity } = useContext(DivarContext);

let history = useHistory();
let name = ''

  const setCityF = (city) => {
    // setPath(city.en);
    setCity({en:city.en,fa:city.fa})
    setListItems([]);
    setPage(1);
    setOpen(false);
  };
  const handleModalClose = () => {
    setOpen(false);
  };
  return (
    <>
      <Button className={classes.cityButton} onClick={handleModalOpen}>
        <LocationOnIcon /> {city.fa}
      </Button>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleModalClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 200,
        }}
        className={classes.modal}
      >
        <Fade in={open}>
          <div className={classes.paper}>
            <h3
              style={{ margin: "0px 5px 20px 5px" }}
              id="transition-modal-title"
            >
              انتخاب شهر
            </h3>
            <TextField
              id="outlined-full-width"
              style={{ margin: 0 }}
              placeholder="جستجوی سریع نام شهر..."
              margin="normal"
              InputLabelProps={{
                shrink: true,
              }}
              InputProps={{
                classes: {
                  input: classes.resize,
                },
              }}
              variant="outlined"
            />
            <p
              style={{ margin: "30px 10px 10px" }}
              id="transition-modal-description"
            >
              شهر های پر بازدید
            </p>
            <Box>
              {cities.map((city, index) => (
                <Link key={index} style={{ textDecoration: "none",fontFamily:"IranSans" }}
                  onClick={setCityF.bind(this, city)} to={`/${city.en}`}>
                  {location.pathname === `/${city.en}` ? (
                    <Button className={classes.activeCityBtn}>{city.fa}</Button>
                  ) : (
                    <Button variant="outlined" className={classes.cityBtn}>
                      {city.fa}
                    </Button>
                  )}
                </Link>
              ))}
            </Box>

          </div>
        </Fade>
      </Modal>
    </>
  );
}
