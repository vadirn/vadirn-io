import React from 'react';
import PropTypes from 'prop-types';
import c from 'classnames';
import s from './styles.css';

export default class Link extends React.PureComponent {
  render() {
    const { onClick, href, children, className, rel, download, target } = this.props;
    return (
      <a
        className={c(s.container, className)}
        href={href}
        onClick={onClick}
        rel={rel}
        download={download}
        target={target}>
        {children}
      </a>
    );
  }
}

Link.propTypes = {
  onClick: PropTypes.func,
  href: PropTypes.string.isRequired,
  children: PropTypes.node,
  className: PropTypes.string,
  rel: PropTypes.string,
  download: PropTypes.string,
  target: PropTypes.string,
};
