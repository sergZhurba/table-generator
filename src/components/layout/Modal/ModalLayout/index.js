import React from 'react';
import PropTypes from 'prop-types';

import styles from './styles.module.scss';

const ModalLayout = ({ children }) => {
  return <div className={styles.wrapper}>{children}</div>;
};

ModalLayout.propTypes = {
  children: PropTypes.node,
};

export default ModalLayout;
