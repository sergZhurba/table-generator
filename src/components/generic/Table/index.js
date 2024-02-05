import React from 'react';
import PropTypes from 'prop-types';

import Button from 'components/generic/Button';

import TableRow from './TableRow';
import styles from './styles.module.scss';

const initFunction = () => {};

const Table = ({
  isMainTable,
  tableId,
  data,
  onCopy,
  onEdit,
  onDelete,
  onClose,
}) => {
  if (data.length === 0) return null;

  return (
    <div className={styles.wrapper}>
      <div className={styles.actions}>
        <Button
          text={'Copy table'}
          type={'primary'}
          onClick={() => onCopy(tableId)}
        />
        {!isMainTable && (
          <Button type={'close'} onClick={() => onClose(tableId)} />
        )}
      </div>
      <div className={styles.overflow}>
        <div className={styles.table}>
          <TableRow
            id={Date.now()}
            className={styles.tableHeader}
            name={'Name'}
            surname={'Surname'}
            age={'Age'}
            city={'City'}
            onEdit={initFunction}
            onDelete={initFunction}
          />
          {data.map((rowData) => (
            <TableRow
              key={rowData.id}
              {...rowData}
              onEdit={() => onEdit(tableId, rowData.id)}
              onDelete={() => onDelete(tableId, rowData.id)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

Table.propTypes = {
  isMainTable: PropTypes.bool.isRequired,
  tableId: PropTypes.string.isRequired,
  data: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
      name: PropTypes.string.isRequired,
      surname: PropTypes.string.isRequired,
      age: PropTypes.string.isRequired,
      city: PropTypes.string.isRequired,
    })
  ).isRequired,
  onCopy: PropTypes.func.isRequired,
  onEdit: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default Table;
