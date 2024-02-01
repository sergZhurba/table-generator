import React from 'react';

import { ModalContext } from 'layout/BaseLayout';
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

const InputContainer = () => {
  const { showModal } = React.useContext(ModalContext);

  const onChange = (inputName, value) => console.log(inputName, value);

  return (
    <div className={styles.wrapper}>
      <Input
        name={'name'}
        placeholder={'Name'}
        mode={'name'}
        onChange={onChange}
      />
      <Input
        name={'surname'}
        placeholder={'Surname'}
        mode={'name'}
        onChange={onChange}
      />
      <Input
        name={'age'}
        placeholder={'Age'}
        mode={'number'}
        onChange={onChange}
      />
      <Dropdown placeholder={'City'} options={options} />
      <div className={styles.button}>
        <ModalButton text={'ADD'} isActive={true} onClick={null} />
      </div>
    </div>
  );
};

export default InputContainer;
