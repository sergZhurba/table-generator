import React, { useState } from 'react';
import PropTypes from 'prop-types';

import InputContainer from 'components/form/InputContainer';

const EditModal = ({ tableId, data, onCancel: onClose, onConfirm }) => {
  const [state, setState] = useState(data);
  const handleDataChange = (newState) => {
    setState((s) => ({ ...s, ...newState }));
  };

  const handleConfirm = () => {
    onConfirm({ tableId, data: state });
    onClose();
  };
  return (
    <InputContainer
      type={'edit'}
      data={state}
      onClose={onClose}
      onAdd={handleConfirm}
      onChange={handleDataChange}
    />
  );
};

EditModal.propTypes = {
  tableId: PropTypes.string.isRequired,
  data: PropTypes.object.isRequired,
  onCancel: PropTypes.func.isRequired,
  onConfirm: PropTypes.func.isRequired,
};

export default EditModal;
