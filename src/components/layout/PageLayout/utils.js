import { useState, useContext } from 'react';
import { v4 as uuid } from 'uuid';

import { ModalContext } from 'components/layout/BaseLayout';

const createTable = (data) => ({
  tableId: uuid(),
  tableData: data,
});

export default () => {
  const [state, setState] = useState([]);
  const { showModal } = useContext(ModalContext);
  const addTableData = (newData) => {
    setState((s) =>
      s.length === 0
        ? [...s, createTable([newData])]
        : s.map((table, idx) =>
            idx === 0
              ? {
                  ...table,
                  tableData: [...table.tableData, { id: uuid(), ...newData }],
                }
              : table
          )
    );
  };

  const copyTable = (tableId) => {
    const copyTableIndex = state.findIndex(
      (table) => table.tableId === tableId
    );
    return setState((s) => {
      const newData = s.slice();
      newData.splice(
        copyTableIndex + 1,
        0,
        createTable(
          s[copyTableIndex].tableData.map((entry) => ({
            ...entry,
            id: uuid(),
          }))
        )
      );
      return newData;
    });
  };

  const handleEditConfirm = ({ tableId, data }) => {
    setState((s) =>
      s.map((table) =>
        table.tableId === tableId
          ? {
              tableId,
              tableData: table.tableData.map((entry) =>
                entry.id === data.id ? data : entry
              ),
            }
          : table
      )
    );
  };

  const closeTable = (tableId) =>
    setState((s) => s.filter((table) => table.tableId !== tableId));

  const handleDeleteConfirm = (tableId, entryId) => {
    setState((s) => {
      const newState = s.map((table) => {
        const newTableData = table.tableData.filter(
          (entry) => entry.id !== entryId
        );
        if (newTableData.length === 0) {
          return null;
        }
        return table.tableId === tableId
          ? {
              tableId,
              tableData: newTableData,
            }
          : table;
      });
      return newState.filter((_) => _);
    });
  };

  const showConfirmModal = (tableId, entryId) =>
    showModal({
      name: 'confirmModal',
      props: { tableId, entryId, onConfirm: handleDeleteConfirm },
    });
  const showEditModal = (tableId, entryId) => {
    const currentTable = state.find((table) => table.tableId === tableId);
    const editData = currentTable.tableData.find(
      (entry) => entry.id === entryId
    );
    showModal({
      name: 'editModal',
      props: { tableId, data: editData, onConfirm: handleEditConfirm },
    });
  };

  return {
    state,
    addTableData,
    copyTable,
    showEditModal,
    showConfirmModal,
    closeTable,
  };
};
