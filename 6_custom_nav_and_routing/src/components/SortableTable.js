import { useState } from "react";
import Table from "./Table";

function SortableTable(props) {
  const [sortOrder, setSortOrder] = useState(null);
  const [sortBy, setSortBy] = useState(null);
  const {config} = props;

  const handleCLick = (label) => {
    if(sortOrder === null){
      setSortOrder('asc');
      setSortBy(label)
    } else if(sortOrder === 'asc'){
      setSortOrder('desc')
      setSortBy(label)
    } else if(sortOrder === 'desc'){
      setSortOrder(null);
      setSortBy(null);
    }
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
  return <div>
    {sortOrder} - {sortBy}
    <Table {...props} config={updatedConfig} />; 
  </div>
}

export default SortableTable;