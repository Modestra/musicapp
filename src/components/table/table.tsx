import { TableContainer, Table, TableHead } from "@mui/material";
import { TableConfig, TableData } from "./table.interface";

export default function AppTable(config: TableConfig, data: TableData) {
  return (
    <TableContainer>
      <Table>
        <TableHead></TableHead>
      </Table>
    </TableContainer>
  );
}
