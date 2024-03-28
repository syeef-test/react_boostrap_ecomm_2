import React from "react";
import { Button, Card } from "react-bootstrap";
import classes from "./Home.module.css";

const Home = () => {
  return (
    <section id="tours" className={classes.container}>
      <h2>Tours</h2>
      <div>
        <div className={classes.touritem}>
          <span className={classes.tourdate}>JUL16</span>
          <span className={classes.tourplace}> DETROIT, MI</span>
          <span className={classes.tourspecplace}>
            DTE ENERGY MUSIC THEATRE
          </span>
          <Button variant="info" className={classes.buybtn}>
            Buy Button
          </Button>
        </div>
        <div className={classes.touritem}>
          <span className={classes.tourdate}>JUL19</span>
          <span className={classes.tourplace}> TORONTO,ON</span>
          <span className={classes.tourspecplace}>BUDWEISER STAGE</span>
          <Button variant="info" className={classes.buybtn}>
            Buy Button
          </Button>
        </div>
        <div className={classes.touritem}>
          <span className={classes.tourdate}>JUL 22</span>
          <span className={classes.tourplace}> BRISTOW, VA</span>
          <span className={classes.tourspecplace}>JIGGY LUBE LIVE</span>
          <Button variant="info" className={classes.buybtn}>
            Buy Button
          </Button>
        </div>
        <div className={classes.touritem}>
          <span className={classes.tourdate}>JUL 29</span>
          <span className={classes.tourplace}> PHOENIX, AZ</span>
          <span className={classes.tourspecplace}>AK-CHIN PAVILION</span>
          <Button variant="info" className={classes.buybtn}>
            Buy Button
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Home;
