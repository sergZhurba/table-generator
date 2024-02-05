import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Div100vh from 'react-div-100vh';
import cn from 'classnames';

import Modal from 'components/layout/Modal';

import styles from './styles.module.scss';

export const ModalContext = React.createContext();

const BaseLayout = ({ children }) => {
  const [modal, setModal] = useState(null);
  const closeModal = () => setModal(null);

  return (
    <Div100vh className={styles.wrapper}>
      <ModalContext.Provider
        value={{
          showModal: setModal,
          closeModal,
        }}
      >
        <div className={styles.container}>
          <div className={cn(styles.content, modal && styles.blurred)}>
            {children}
          </div>
        </div>
      </ModalContext.Provider>
      <Modal modal={modal} closeModal={closeModal} />
    </Div100vh>
  );
};

BaseLayout.propTypes = {
  children: PropTypes.node,
};

export default BaseLayout;
