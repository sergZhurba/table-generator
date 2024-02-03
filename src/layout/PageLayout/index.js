import React, { useState } from 'react';
import { v4 as uuid } from 'uuid';

import InputContainer from 'components/form/InputContainer';
import PreviewDataContainer from 'components/form/PreviewDataContainer';

import styles from './styles.module.scss';

const entryId = uuid();
const initialState = [
  {
    id: entryId,
    tableId: 0,
    name: '',
    surname: '',
    age: '',
    city: '',
  },
];

const PageLayout = () => {
  const [tableId, setTableId] = useState(0);
  const [entryId, setEntryId] = useState(initialState[0].id);
  const [state, setState] = useState([initialState]);
  const currentData = state[tableId].find((entry) => entry.id === entryId);

  const saveDataHandler = ({ id, ...newValue }) => {
    setState((s) => s.map((entry) => (entry.id === id ? newValue : entry)));
  };
  return (
    <div className={styles.wrapper}>
      <InputContainer data={currentData} onSave={saveDataHandler} />
      <PreviewDataContainer
        data={state}
        onCopy={() => {}}
        onEdit={() => {}}
        onDelete={() => {}}
      />
    </div>
  );
};

export default PageLayout;
