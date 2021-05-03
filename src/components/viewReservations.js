import React from 'react'

import Crm from './crm';
import Table from './table'
import { cols, rows } from './tableReservations.data';

function viewReservations() {
  return (
    <Crm titulo="Reservaciones">
      <Table cols={cols} rows={rows}></Table>
    </Crm>
  )
}

export default viewReservations
