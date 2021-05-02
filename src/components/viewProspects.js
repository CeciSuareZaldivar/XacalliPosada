import React from 'react'

import Crm from './crm';
import Table from './table'
import { cols, rows } from './tableProspects.data';

function viewProspects() {
  return (
    <Crm titulo="Prospectos">
      <Table cols={cols} rows={rows}></Table>
    </Crm>
  )
}

export default viewProspects
