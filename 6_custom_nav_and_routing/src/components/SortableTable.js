import Table from "./Table";

function SortableTable(props) {
  const {config} = props;

  const handleCLick = (label) => {
    console.log(label);
  }

  const updatedConfig = config.map((column) => {
    if(!column.sortValue){
      return column;
    }

    return {
      ...column,
      header: () => <th onClick={() => handleCLick(column.label)}>{column.label} is sortable</th>
    }
  });

  // the config property that is present inside of props will be overwritten.
  return <Table {...props} config={updatedConfig} />; 
}

export default SortableTable;