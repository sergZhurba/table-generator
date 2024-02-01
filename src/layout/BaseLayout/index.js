import React, { useState, useCallback } from 'react';
import PropTypes from 'prop-types';
import Div100vh from 'react-div-100vh';
import cn from 'classnames';

import Modal from 'layout/ModalLayout';

import styles from './styles.module.scss';

export const ModalContext = React.createContext();

const BaseLayout = ({ children }) => {
  const [modal, setModal] = useState(false);
  const [isConfirmed, setIsConfirmed] = useState(false);

  const showModal = useCallback(() => {
    setModal(true);
  }, [setModal]);

  const closeModal = useCallback(() => {
    setModal(false);
  }, [setModal]);

  const confirmAction = useCallback(() => {
    setIsConfirmed(true);
  }, [setIsConfirmed]);

  return (
    <Div100vh className={styles.wrapper} onClick={modal ? closeModal : null}>
      <ModalContext.Provider value={{ isConfirmed, showModal, closeModal }}>
        <div className={styles.container}>
          <div className={cn(styles.content, modal && styles.blurred)}>
            {children}
          </div>
        </div>
      </ModalContext.Provider>
      {modal && <Modal onCancel={closeModal} onConfirm={confirmAction} />}
    </Div100vh>
  );
};

BaseLayout.propTypes = {
  children: PropTypes.node,
};

export default BaseLayout;
