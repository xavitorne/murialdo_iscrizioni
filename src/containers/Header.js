import React, {Component} from 'react';
import { connect } from 'react-redux';
import {PropTypes} from 'prop-types';
import {Link} from 'react-router-dom';
import {push} from "connected-react-router";
import NavLink from './NavLink';
import { selectRoot, logout } from "react-formio";
import {AuthConfig} from "../config";

const Header = class extends Component {
  static propTypes = {
    auth: PropTypes.object.isRequired,
    logout: PropTypes.func.isRequired
  };

  render() {
    const {auth, logout} = this.props;

    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container">
          <Link className="navbar-brand" to="/">
            <img className="logo" alt="logo CM" src="https://comunitamurialdo.github.io/iscrizioni/static/logo.png" height="100px" />
          </Link>
          <ul className="nav navbar-nav mr-auto">
            <NavLink exact to="/" role="navigation button" className="nav-link">
              <span className="fa fa-home" />
            </NavLink>
            { (auth.is.hasOwnProperty('administrator') && auth.is.administrator) ? (
              <NavLink to="/form" role="navigation link" className="nav-link">
                <i className="fa fa-wpforms"></i>&nbsp;
                Forms
              </NavLink>
            ) : null }
            { auth.authenticated ? (
              <NavLink to="/colonie" role="navigation link" className="nav-link">
                <i className="fa fa-calendar"></i>&nbsp;
                Events
              </NavLink>
            ) : null }
          </ul>

        </div>
      </nav>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    auth: selectRoot('auth', state)
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    logout: () => {
      dispatch(logout());
      dispatch(push(AuthConfig.anonState));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Header);
