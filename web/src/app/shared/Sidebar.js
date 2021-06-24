import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { Collapse } from 'react-bootstrap';

class Sidebar extends Component {

  state = {};

  toggleMenuState(menuState) {
    if (this.state[menuState]) {
      this.setState({[menuState] : false});
    } else if(Object.keys(this.state).length === 0) {
      this.setState({[menuState] : true});
    } else {
      Object.keys(this.state).forEach(i => {
        this.setState({[i]: false});
      });
      this.setState({[menuState] : true});
    }
  }

  componentDidUpdate(prevProps) {
    if (this.props.location !== prevProps.location) {
      this.onRouteChanged();
    }
  }

  onRouteChanged() {
    document.querySelector('#sidebar').classList.remove('active');
    Object.keys(this.state).forEach(i => {
      this.setState({[i]: false});
    });

    const dropdownPaths = [
      {path:'/apps', state: 'appsMenuOpen'},
      // {path:'/links', state: 'linksMenuOpen'},
      {path:'/analytics', state: 'analyticsMenuOpen'},
      {path:'/settings', state: 'settingsMenuOpen'},
    ];

    dropdownPaths.forEach((obj => {
      if (this.isPathActive(obj.path)) {
        this.setState({[obj.state] : true})
      }
    }));

  }

  render () {
    return (
        <nav className="sidebar sidebar-offcanvas" id="sidebar">
          <div className="sidebar-brand-wrapper d-none d-lg-flex align-items-center justify-content-center fixed-top">
            <a className="sidebar-brand brand-logo" href="index.html"><img src={require('../../assets/images/logo.svg')} alt="logo" /></a>
            <a className="sidebar-brand brand-logo-mini" href="index.html"><img src={require('../../assets/images/logo-mini.svg')} alt="logo" /></a>
          </div>
          <ul className="nav">
            <li className="nav-item profile">
              <div className="profile-desc">
                <div className="profile-pic">
                  <div className="count-indicator">
                    <img className="img-xs rounded-circle " src={require('../../assets/images/faces/face15.jpg')} alt="profile" />
                    <span className="count bg-success"></span>
                  </div>
                  <div className="profile-name">
                    <h5 className="mb-0 font-weight-normal">Henry Klein</h5>
                    <span>Gold Member</span>
                  </div>
                </div>
              </div>
            </li>
            <br />
            <li className={ this.isPathActive('/dashboard') ? 'nav-item menu-items active' : 'nav-item menu-items' }>
              <Link className="nav-link" to="/dashboard">
                <span className="menu-icon"><i className="mdi mdi-speedometer"></i></span>
                <span className="menu-title">Dashboard</span>
              </Link>
            </li>

            <li className={ this.isPathActive('/links') ? 'nav-item menu-items active' : 'nav-item menu-items' }>
              <Link className="nav-link" to="/links">
                <span className="menu-icon"><i className="mdi mdi-link"></i></span>
                <span className="menu-title">Links</span>
              </Link>
            </li>

            <li className={ this.isPathActive('/analytics') ? 'nav-item menu-items active' : 'nav-item menu-items' }>
              <div className={ this.state.analyticsMenuOpen ? 'nav-link menu-expanded' : 'nav-link' } onClick={ () => this.toggleMenuState('analyticsMenuOpen') } data-toggle="collapse">
              <span className="menu-icon">
                <i className="mdi mdi-chart-areaspline"></i>
              </span>
                <span className="menu-title">Analytics</span>
                <i className="menu-arrow"></i>
              </div>
              <Collapse in={ this.state.analyticsMenuOpen }>
                <div>
                  <ul className="nav flex-column sub-menu">
                    <li className="nav-item"> <Link className={ this.isPathActive('/analytics/overview') ? 'nav-link active' : 'nav-link' } to="/analytics/overview">Overview</Link></li>
                    <li className="nav-item"> <Link className={ this.isPathActive('/analytics/geographic') ? 'nav-link active' : 'nav-link' } to="/analytics/geographic">Geographic</Link></li>
                    <li className="nav-item"> <Link className={ this.isPathActive('/analytics/device') ? 'nav-link active' : 'nav-link' } to="/analytics/device">Device</Link></li>
                  </ul>
                </div>
              </Collapse>
            </li>

            <li className={ this.isPathActive('/tracking/link-tracking') ? 'nav-item menu-items active' : 'nav-item menu-items' }>
              <Link className="nav-link" to="/tracking/link-tracking">
                <span className="menu-icon"><i className="mdi mdi-trending-up"></i></span>
                <span className="menu-title"> Tracking</span>
              </Link>
            </li>


            <li className="nav-item nav-category">
              <span className="nav-link">More</span>
            </li>

            <li className={ this.isPathActive('/settings') ? 'nav-item menu-items active' : 'nav-item menu-items' }>
              <div className={ this.state.settingsMenuOpen ? 'nav-link menu-expanded' : 'nav-link' } onClick={ () => this.toggleMenuState('settingsMenuOpen') } data-toggle="collapse">
              <span className="menu-icon">
                <i className="mdi mdi-settings"></i>
              </span>
                <span className="menu-title">Settings</span>
                <i className="menu-arrow"></i>
              </div>
              <Collapse in={ this.state.settingsMenuOpen }>
                <div>
                  <ul className="nav flex-column sub-menu">
                    <li className="nav-item"> <Link className={ this.isPathActive('/settings/profile') ? 'nav-link active' : 'nav-link' } to="/settings/profile">Profile</Link></li>
                    <li className="nav-item"> <Link className={ this.isPathActive('/settings/advanced') ? 'nav-link active' : 'nav-link' } to="/settings/advanced">Advanced</Link></li>
                  </ul>
                </div>
              </Collapse>
            </li>

            <li className="nav-item menu-items">
              <a className="nav-link" href="https://github.com/5parkp1ug/Planck/blob/master/README.md" rel="noopener noreferrer" target="_blank">
              <span className="menu-icon">
                <i className="mdi mdi-file-document-box"></i>
              </span>
                <span className="menu-title">Documentation</span>
              </a>
            </li>
          </ul>
        </nav>
    );
  }

  isPathActive(path) {
    return this.props.location.pathname.startsWith(path);
  }

  componentDidMount() {
    this.onRouteChanged();
    // add class 'hover-open' to sidebar navitem while hover in sidebar-icon-only menu
    const body = document.querySelector('body');
    document.querySelectorAll('.sidebar .nav-item').forEach((el) => {

      el.addEventListener('mouseover', function() {
        if(body.classList.contains('sidebar-icon-only')) {
          el.classList.add('hover-open');
        }
      });
      el.addEventListener('mouseout', function() {
        if(body.classList.contains('sidebar-icon-only')) {
          el.classList.remove('hover-open');
        }
      });
    });
  }

}

export default withRouter(Sidebar);