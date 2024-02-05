import React, { useState } from 'react';

import InputData from 'components/form/InputData';
import PreviewDataContainer from 'components/form/PreviewDataContainer';

import useGetHandlers from './utils';
import styles from './styles.module.scss';

const PageLayout = () => {
  const {
    state,
    addTableData,
    copyTable,
    showEditModal,
    showConfirmModal,
    closeTable,
  } = useGetHandlers();

  return (
    <div className={styles.wrapper}>
      <InputData data={state} onAdd={addTableData}>
        <PreviewDataContainer
          data={state}
          onCopy={copyTable}
          onEdit={showEditModal}
          onDelete={showConfirmModal}
          onClose={closeTable}
        />
      </InputData>
    </div>
  );
};

export default PageLayout;
