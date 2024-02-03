import React from 'react';
import PropTypes from 'prop-types';

import Button from 'components/generic/Button';

import TableRow from './TableRow';
import styles from './styles.module.scss';

const Table = ({ data, onCopy, onDelete }) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.actions}>
        <Button text={'Copy table'} type={'primary'} onClick={onCopy} />
        <Button type={'close'} onClick={onDelete} />
      </div>
      <div className={styles.overflow}>
        <div className={styles.table}>
          <TableRow
            className={styles.tableHeader}
            name={'Name'}
            surname={'Surname'}
            age={'Age'}
            city={'City'}
          />
          {data.map((rowData) => (
            <TableRow key={rowData.id} {...rowData} />
          ))}
        </div>
      </div>
    </div>
  );
};

Table.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
      tableId: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      surname: PropTypes.string.isRequired,
      age: PropTypes.string.isRequired,
      city: PropTypes.string.isRequired,
    })
  ).isRequired,
  onCopy: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default Table;
