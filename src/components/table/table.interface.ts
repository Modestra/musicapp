import { Theme } from "@emotion/react"
import { SxProps } from "@mui/material"
export type DataStatus = 'error' | 'success' | 'warning'


export interface TableConfig {
    contentHeader?: boolean,
    tableStyles: SxProps<Theme> | undefined
    columns: TableColumns[]
}

export interface TableColumns {
    columnName: string
}

export interface TableData<T> {
    status: DataStatus,
    data: T[]
}