import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

import Button from 'components/generic/Button';

import styles from './styles.module.scss';

const TableRow = ({
  id,
  tableId,
  className,
  name,
  surname,
  age,
  city,
  onEdit,
  onDelete,
}) => {
  return (
    <div className={cn(styles.row, className)}>
      <div className={styles.col}>{name}</div>
      <div className={styles.col}>{surname}</div>
      <div className={styles.col}>{age}</div>
      <div className={styles.col}>{city}</div>
      <div className={styles.col}>
        {!className && (
          <>
            <Button text={'Edit'} type={'edit'} onClick={onEdit} />
            <Button text={'Delete'} type={'delete'} onClick={onDelete} />
          </>
        )}
      </div>
    </div>
  );
};

TableRow.propTypes = {};

export default TableRow;
