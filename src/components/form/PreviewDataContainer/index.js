import React from 'react';
import PropTypes from 'prop-types';

import Table from 'components/generic/Table';

import styles from './styles.module.scss';

const PreviewDataContainer = (props) => {
  const { data, onEdit, onDelete, onCopy, onClose } = props;
  if (data.length === 0) return null;
  return (
    <div className={styles.wrapper}>
      {data.map(({ tableId, tableData }, idx) => (
        <Table
          isMainTable={idx === 0}
          key={tableId}
          tableId={tableId}
          data={tableData}
          onCopy={onCopy}
          onEdit={onEdit}
          onDelete={onDelete}
          onClose={onClose}
        />
      ))}
    </div>
  );
};

PreviewDataContainer.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      tableId: PropTypes.string.isRequired,
      tableData: PropTypes.arrayOf(
        PropTypes.shape({
          id: PropTypes.string.isRequired,
          name: PropTypes.string.isRequired,
          surname: PropTypes.string.isRequired,
          age: PropTypes.string.isRequired,
          city: PropTypes.string.isRequired,
        })
      ),
    })
  ).isRequired,
  onEdit: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
  onCopy: PropTypes.func.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default PreviewDataContainer;
