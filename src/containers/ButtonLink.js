import React, {Component} from 'react';
import {Link, withRouter} from 'react-router-dom';
import PropTypes from 'prop-types';

class ButtonLink extends Component {
  static propTypes = {
    to: PropTypes.string.isRequired,
    exact: PropTypes.bool
  };

  static defaultProps = {
    exact: false
  };

  render() {
    const {to, role, className, children} = this.props;

    return (
        <Link {...{to, role, className}}>{children}</Link>
    );
  }
}

export default withRouter(props => <ButtonLink {...props}/>)
