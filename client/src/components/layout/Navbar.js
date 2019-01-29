import React, { Component } from 'react';
import cx from 'classnames';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

// @material-ui/core components
import withStyles from '@material-ui/core/styles/withStyles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Hidden from '@material-ui/core/Hidden';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';

// @material-ui/icons
import Dashboard from '@material-ui/icons/Dashboard';
import Menu from '@material-ui/icons/Menu';

// core components
import Button from '../../themeComponents/CustomButtons/Button';
import pagesHeaderStyle from '../../assets/jss/material-dashboard-pro-react/components/pagesHeaderStyle.jsx';

class Navbar extends Component {
  render() {
    const { classes, color } = this.props;
    const appBarClasses = cx({
      [' ' + classes[color]]: color
    });
    return (
      <AppBar position="static" className={classes.appBar + appBarClasses}>
        <Toolbar className={classes.container}>
          <Hidden smDown>
            <div className={classes.flex}>
              <Button href="/" className={classes.title} color="transparent">
                Exo-Dash
              </Button>
            </div>
          </Hidden>
        </Toolbar>
      </AppBar>
    );
  }
}

Navbar.propTypes = {
  classes: PropTypes.object.isRequired,
  color: PropTypes.oneOf(['primary', 'info', 'success', 'warning', 'danger'])
};

export default withStyles(pagesHeaderStyle)(Navbar);
