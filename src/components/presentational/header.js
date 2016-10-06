import React, { PropTypes } from 'react';

const Header = (props) => {
  return (<div className="header clearfix">
            <h3 className="text-muted">{props.projectTitle}</h3>
          </div>);
};

Header.propTypes = {
  projectTitle: PropTypes.string.isRequired
};

Header.defaultProps = {
  projectTitle: ""
};

export default Header;
