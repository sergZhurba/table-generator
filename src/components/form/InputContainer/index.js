import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import { v4 as uuid } from 'uuid';

import Input from 'components/generic/Input';
import Dropdown from 'components/generic/Dropdown';
import ModalButton from 'components/generic/ModalButton';
import { initialInputData } from 'components/form/InputData';

import styles from './styles.module.scss';

const options = [
  { key: 'Riga', label: 'Riga' },
  { key: 'Daugavpils', label: 'Daugavpils' },
  { key: 'Jūrmala', label: 'Jūrmala' },
  { key: 'Ventspils', label: 'Ventspils' },
];

const buttonText = {
  add: 'ADD',
  edit: 'AGREE',
};

const InputContainer = ({ type = 'add', data, rowAmount, onAdd, onChange }) => {
  if (rowAmount) {
    const doc = document.documentElement;
    doc.style.setProperty('--grid-rows', rowAmount);
  }

  const onDataChange = (inputName, value) => {
    const newState = { ...data, [inputName]: value };
    onChange(newState);
  };

  const getInputProps = (name) => ({
    name,
    value: data[name],
    onChange: onDataChange,
  });

  const handleAddData = () => {
    onAdd({ id: uuid(), ...data });
    onChange(initialInputData);
  };
  const disabled = Object.values(data).some((v) => !v);

  return (
    <div className={cn(styles.wrapper, rowAmount && styles.changeLayout)}>
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
          type={'primary'}
          text={buttonText[type]}
          disabled={disabled}
          onClick={handleAddData}
        />
      </div>
    </div>
  );
};

InputContainer.propTypes = {
  data: PropTypes.shape({
    name: PropTypes.string.isRequired,
    surname: PropTypes.string.isRequired,
    age: PropTypes.string.isRequired,
    city: PropTypes.string.isRequired,
  }),
  type: PropTypes.oneOf(['add', 'edit']).isRequired,
  rowAmount: PropTypes.number,
  onAdd: PropTypes.func.isRequired,
  onChange: PropTypes.func,
};

export default InputContainer;
