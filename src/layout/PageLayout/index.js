import React from 'react';

import InputContainer from 'components/form/InputContainer';
import PreviewDataContainer from 'components/form/PreviewDataContainer';

import styles from './styles.module.scss';

const PageLayout = () => {
  return (
    <div className={styles.wrapper}>
      <InputContainer />
      <PreviewDataContainer />
    </div>
  );
};

export default PageLayout;
