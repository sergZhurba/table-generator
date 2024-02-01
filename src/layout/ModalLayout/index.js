import React from 'react';
import PropTypes from 'prop-types';

import styles from './styles.module.scss';

const ModalLayout = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>Modal</div>
    </div>
  );
};

ModalLayout.propTypes = {
  children: PropTypes.node,
};

export default ModalLayout;
