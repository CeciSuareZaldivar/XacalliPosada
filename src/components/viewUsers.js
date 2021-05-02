import React from 'react'

import Crm from './crm';
import Table from './table'
import { cols, rows } from './tableUsers.data';

function viewUsers() {
    return (
        <Crm titulo="Usuarios">
            <Table cols={cols} rows={rows}></Table>
        </Crm>
    )
}

export default viewUsers
