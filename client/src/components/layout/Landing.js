import React, { Component } from "react";
import { Link } from "react-router-dom";
import { PropTypes } from "prop-types";
import { connect } from "react-redux";
import { compose } from "redux";

import Navbar from "./Navbar";

// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import InputAdornment from "@material-ui/core/InputAdornment";
import Checkbox from "@material-ui/core/Checkbox";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Icon from "@material-ui/core/Icon";

// @material-ui/icons
import Timeline from "@material-ui/icons/Timeline";
import Code from "@material-ui/icons/Code";
import Group from "@material-ui/icons/Group";
import Face from "@material-ui/icons/Face";
import Email from "@material-ui/icons/Email";
// import LockOutline from "@material-ui/icons/LockOutline";
import Check from "@material-ui/icons/Check";

// theme core components
import GridContainer from "../../themeComponents/Grid/GridContainer.jsx";
import GridItem from "../../themeComponents/Grid/GridItem.jsx";
import Button from "../../themeComponents/CustomButtons/Button.jsx";
import CustomInput from "../../themeComponents/CustomInput/CustomInput.jsx";
import InfoArea from "../../themeComponents/InfoArea/InfoArea.jsx";
import Card from "../../themeComponents/Card/Card.jsx";
import CardBody from "../../themeComponents/Card/CardBody.jsx";
import Heading from "../../themeComponents/Heading/Heading.jsx";

import registerPageStyle from "../../assets/jss/material-dashboard-pro-react/views/registerPageStyle";
import pagesStyle from "../../assets/jss/material-dashboard-pro-react/layouts/pagesStyle.jsx";
import bgImage from "../../assets/img/register.jpeg";

class Landing extends Component {
  componentDidMount() {
    document.body.style.overflow = "unset";
    if (this.props.auth.isAuthenticated) {
      this.props.history.push("/dashboard");
    }
  }
  render() {
    const { classes } = this.props;
    return (
      <div>
        <Navbar />
        <div className={classes.wrapper} ref="wrapper">
          <div
            className={classes.fullPage}
            style={{ backgroundImage: "url(" + bgImage + ")" }}
          >
            <div className={classes.container}>
              <GridContainer justify="center">
                <GridItem xs={12} sm={12} md={5}>
                  <Card className={classes.cardSignup}>
                    <h1
                      className={classes.cardTitle}
                      style={{ fontWeight: "bold" }}
                    >
                      Exo-Dash
                    </h1>
                    <CardBody>
                      <GridContainer justify="center">
                        <GridItem xs={12} sm={8} md={10}>
                          <div className={classes.center}>
                            <h4 className={classes.socialTitle}>
                              Your remote work dashboard for streamlining team
                              efforts
                            </h4>
                          </div>
                          <div>
                            <InfoArea
                              title="Marketing"
                              description="We've created the marketing campaign of the website. It was a very interesting collaboration."
                              icon={Timeline}
                              iconColor="rose"
                            />
                            <InfoArea
                              title="Fully Coded in HTML5"
                              description="We've developed the website with HTML5 and CSS3. The client has access to the code using GitHub."
                              icon={Code}
                              iconColor="primary"
                            />
                            <InfoArea
                              title="Built Audience"
                              description="There is also a Fully Customizable CMS Admin Dashboard for this product."
                              icon={Group}
                              iconColor="info"
                            />
                          </div>
                          <br />
                          <br />
                          <div className={classes.center}>
                            <Button round color="primary" size="lg">
                              Sign up
                            </Button>
                          </div>
                          <div className={classes.center}>
                            <Button round color="info" size="lg">
                              Login
                            </Button>
                          </div>
                        </GridItem>
                      </GridContainer>
                    </CardBody>
                  </Card>
                </GridItem>
              </GridContainer>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Landing.propTypes = {
  auth: PropTypes.object.isRequired,
  classes: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default compose(
  connect(mapStateToProps),
  withStyles(pagesStyle),
  withStyles(registerPageStyle)
)(Landing);
