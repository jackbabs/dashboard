import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';

// @material-ui/core components
import withStyles from '@material-ui/core/styles/withStyles';
import InputAdornment from '@material-ui/core/InputAdornment';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Icon from '@material-ui/core/Icon';

// @material-ui/icons
import Timeline from '@material-ui/icons/Timeline';
import Code from '@material-ui/icons/Code';
import Group from '@material-ui/icons/Group';
import Face from '@material-ui/icons/Face';
import Email from '@material-ui/icons/Email';
// import LockOutline from "@material-ui/icons/LockOutline";
import Check from '@material-ui/icons/Check';

// theme core components
import GridContainer from '../../themeComponents/Grid/GridContainer.jsx';
import GridItem from '../../themeComponents/Grid/GridItem.jsx';
import Button from '../../themeComponents/CustomButtons/Button.jsx';
import CustomInput from '../../themeComponents/CustomInput/CustomInput.jsx';
import InfoArea from '../../themeComponents/InfoArea/InfoArea.jsx';
import Card from '../../themeComponents/Card/Card.jsx';
import CardBody from '../../themeComponents/Card/CardBody.jsx';

import registerPageStyle from '../../assets/jss/material-dashboard-pro-react/views/registerPageStyle';

class Landing extends Component {
  componentDidMount() {
    if (this.props.auth.isAuthenticated) {
      this.props.history.push('/dashboard');
    }
  }
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.container}>
        <GridContainer justify="center">hello</GridContainer>
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
  withStyles(registerPageStyle)
)(Landing);
