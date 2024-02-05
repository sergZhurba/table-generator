import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

import Button from 'components/generic/Button';

import styles from './styles.module.scss';

const TableRow = ({
  id,
  className,
  name,
  surname,
  age,
  city,
  onEdit,
  onDelete,
}) => {
  const handleEditRow = () => {
    onEdit(id);
  };

  const handleDeleteRow = () => {
    onDelete(id);
  };
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

TableRow.propTypes = {
  id: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
  className: PropTypes.string,
  name: PropTypes.string.isRequired,
  surname: PropTypes.string.isRequired,
  age: PropTypes.string.isRequired,
  city: PropTypes.string.isRequired,
  onEdit: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default TableRow;
