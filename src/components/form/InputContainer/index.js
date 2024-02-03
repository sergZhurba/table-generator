import React, { useState } from 'react';
import PropTypes from 'prop-types';

import Input from 'components/generic/Input';
import Dropdown from 'components/generic/Dropdown';
import ModalButton from 'components/generic/ModalButton';

import styles from './styles.module.scss';

const options = [
  { key: 'Riga', label: 'Riga' },
  { key: 'Daugavpils', label: 'Daugavpils' },
  { key: 'Jūrmala', label: 'Jūrmala' },
  { key: 'Ventspils', label: 'Ventspils' },
];

const InputContainer = ({ data, onSave }) => {
  const [state, setState] = useState(data);
  const [error, setError] = useState({});

  const onChange = (inputName, value) =>
    setState((s) => ({ ...s, [inputName]: value }));

  const getInputProps = (name) => ({
    name,
    value: state[name],
    error: error[name],
    onChange,
  });

  const disabled = !Object.values(state).some((v) => !v);

  return (
    <div className={styles.wrapper}>
      <Input placeholder={'Name'} mode={'name'} {...getInputProps('name')} />
      <Input
        placeholder={'Surname'}
        mode={'name'}
        {...getInputProps('surname')}
      />
      <Input placeholder={'Age'} mode={'number'} {...getInputProps('age')} />
      <Dropdown
        placeholder={'City'}
        options={options}
        {...getInputProps('city')}
      />
      <div className={styles.button}>
        <ModalButton
          text={'ADD'}
          disabled={disabled}
          onClick={() => onSave(state)}
        />
      </div>
    </div>
  );
};

InputContainer.propTypes = {
  data: PropTypes.shape({
    id: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
    tableId: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    surname: PropTypes.string.isRequired,
    age: PropTypes.string.isRequired,
    city: PropTypes.string.isRequired,
  }),
  onSave: PropTypes.func.isRequired,
};

export default InputContainer;
