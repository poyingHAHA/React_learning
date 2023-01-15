// fragment is like a very, very simple custom component that we can use.
// Just we can assign things like a key prop or group, different child elements together, stuff like.
import {Fragment} from 'react';

function Table({ data, config, keyFn }) {
  const renderedHeaders = config.map((column) => {
    if(column.header) {
      return <th key={column.label}>{column.header()}</th>;
    }

    return <th key={column.label}>{column.label}</th>;
  });

  const renderRows = data.map((rowData) => {
    const renderedCells = config.map((column) => {
      return <Fragment className="p-2" key={column.label}>{column.render(rowData)}</Fragment>;
    })

    return (
      <tr className="border-b" key={keyFn(rowData)}>
        {renderedCells}
      </tr>
    );
  });

  return (
    <table className="table-auto border-spacing-2">
      <thead>
        <tr className="border-b-2">{renderedHeaders}</tr>
      </thead>
      <tbody>{renderRows}</tbody>
    </table>
  );
}

export default Table;
