import React from 'react';
import PropTypes from 'prop-types';

import ModalLayout from 'components/layout/Modal/ModalLayout';
import ConfirmModal from 'components/modals/ConfirmModal';
import EditModal from 'components/modals/EditModal';

const modals = {
  editModal: EditModal,
  confirmModal: ConfirmModal,
};

const Modal = ({ modal, closeModal }) => {
  if (!modal) return null;
  const ModalComponent = modals[modal.name];
  const modalProps = modal.props;
  return (
    <ModalLayout>
      <ModalComponent onCancel={closeModal} {...modalProps} />
    </ModalLayout>
  );
};

Modal.propTypes = {
  modal: PropTypes.object,
  closeModal: PropTypes.func.isRequired,
};

export default Modal;
