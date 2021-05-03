import React from 'react'

import Crm from './crm';
import Table from './table'
import { cols, rows } from './tableClients.data';

function viewClients() {
    return (
        <Crm titulo="Clientes">
            <Table cols={cols} rows={rows} editRoute="/crm/prospects/edit"></Table>
        </Crm>
    )
}

export default viewClients