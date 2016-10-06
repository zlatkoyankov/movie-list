import React, { PropTypes } from 'react';

const Footer = (props) => {
    return (<footer className="footer">
              <p>{props.text}</p>
            </footer>);
};

Footer.propTypes = {
  text: PropTypes.string.isRequired
};
Footer.defaultProps = {
  text: ''
};

export default Footer;

