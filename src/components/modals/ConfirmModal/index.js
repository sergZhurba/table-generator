import React from 'react';
import PropTypes from 'prop-types';

import ModalButton from 'components/generic/ModalButton';

import styles from './styles.module.scss';

const ConfirmModal = ({
  tableId,
  entryId,
  onCancel: closeModal,
  onConfirm,
}) => {
  const handleDeleteEntry = () => {
    onConfirm(tableId, entryId);
    closeModal();
  };

  return (
    <div className={styles.container}>
      <p className={styles.description}>Delete data?</p>
      <div className={styles.buttons}>
        <ModalButton type={'secondary'} text={'CANCEL'} onClick={closeModal} />
        <ModalButton
          type={'primary'}
          text={'DELETE'}
          onClick={handleDeleteEntry}
        />
      </div>
    </div>
  );
};

ConfirmModal.propTypes = {
  tableId: PropTypes.string.isRequired,
  entryId: PropTypes.string.isRequired,
  onCancel: PropTypes.func.isRequired,
  onConfirm: PropTypes.func.isRequired,
};

export default ConfirmModal;
