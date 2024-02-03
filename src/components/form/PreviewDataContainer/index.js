import React from 'react';
import PropTypes from 'prop-types';

import Table from 'components/generic/Table';

import styles from './styles.module.scss';

const PreviewDataContainer = ({ data, onEdit, onDelete, onCopy }) => {
  return (
    <div className={styles.wrapper}>
      {data.map((tableData, idx) => (
        <Table
          key={idx}
          data={tableData}
          onCopy={onCopy}
          onEdit={onEdit}
          onDelete={onDelete}
        />
      ))}
    </div>
  );
};

PreviewDataContainer.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.oneOfType([PropTypes.number, PropTypes.string])
          .isRequired,
        tableId: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        surname: PropTypes.string.isRequired,
        age: PropTypes.string.isRequired,
        city: PropTypes.string.isRequired,
      })
    )
  ).isRequired,
  onEdit: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
  onCopy: PropTypes.func.isRequired,
};

export default PreviewDataContainer;
