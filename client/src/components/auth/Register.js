import React, { Component } from "react";
import { Link } from "react-router-dom";
import { PropTypes } from "prop-types";
import { connect } from "react-redux";
import { compose } from "redux";

import Navbar from "../layout/Navbar";

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

class Register extends Component {
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
                <GridItem xs={12} sm={12} md={10}>
                  <Card className={classes.cardSignup}>
                    <h2 className={classes.cardTitle}>Register</h2>
                    <CardBody>
                      <GridContainer justify="center">
                        <GridItem xs={12} sm={12} md={5}>
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
                        </GridItem>
                        <GridItem xs={12} sm={8} md={5}>
                          <div className={classes.center}>
                            <Button justIcon round color="twitter">
                              <i className="fab fa-twitter" />
                            </Button>
                            {` `}
                            <Button justIcon round color="dribbble">
                              <i className="fab fa-dribbble" />
                            </Button>
                            {` `}
                            <Button justIcon round color="facebook">
                              <i className="fab fa-facebook-f" />
                            </Button>
                            {` `}
                            <h4 className={classes.socialTitle}>
                              or be classical
                            </h4>
                          </div>
                          <form className={classes.form}>
                            <CustomInput
                              formControlProps={{
                                fullWidth: true,
                                className: classes.customFormControlClasses
                              }}
                              inputProps={{
                                startAdornment: (
                                  <InputAdornment
                                    position="start"
                                    className={classes.inputAdornment}
                                  >
                                    <Face
                                      className={classes.inputAdornmentIcon}
                                    />
                                  </InputAdornment>
                                ),
                                placeholder: "First Name..."
                              }}
                            />
                            <CustomInput
                              formControlProps={{
                                fullWidth: true,
                                className: classes.customFormControlClasses
                              }}
                              inputProps={{
                                startAdornment: (
                                  <InputAdornment
                                    position="start"
                                    className={classes.inputAdornment}
                                  >
                                    <Email
                                      className={classes.inputAdornmentIcon}
                                    />
                                  </InputAdornment>
                                ),
                                placeholder: "Email..."
                              }}
                            />
                            <CustomInput
                              formControlProps={{
                                fullWidth: true,
                                className: classes.customFormControlClasses
                              }}
                              inputProps={{
                                startAdornment: (
                                  <InputAdornment
                                    position="start"
                                    className={classes.inputAdornment}
                                  >
                                    <Icon
                                      className={classes.inputAdornmentIcon}
                                    >
                                      lock_outline
                                    </Icon>
                                  </InputAdornment>
                                ),
                                placeholder: "Password..."
                              }}
                            />
                            <FormControlLabel
                              classes={{
                                root: classes.checkboxLabelControl,
                                label: classes.checkboxLabel
                              }}
                              control={
                                <Checkbox
                                  tabIndex={-1}
                                  onClick={() => this.handleToggle(1)}
                                  checkedIcon={
                                    <Check className={classes.checkedIcon} />
                                  }
                                  icon={
                                    <Check className={classes.uncheckedIcon} />
                                  }
                                  classes={{
                                    checked: classes.checked,
                                    root: classes.checkRoot
                                  }}
                                />
                              }
                              label={
                                <span>
                                  I agree to the{" "}
                                  <a href="#pablo">terms and conditions</a>.
                                </span>
                              }
                            />
                            <div className={classes.center}>
                              <Button round color="primary">
                                Get started
                              </Button>
                            </div>
                          </form>
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

Register.propTypes = {
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
)(Register);
