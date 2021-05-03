import React from 'react'

import Crm from './crm';
import TableCollapse from './tableCollapse'
import { cols, rows } from './tableReservations.data';

function viewReservations() {
  return (
    <Crm titulo="Reservaciones">
      <TableCollapse cols={cols} rows={rows}></TableCollapse>
    </Crm>
  )
}

export default viewReservations
