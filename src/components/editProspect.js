import React from 'react'

import Crm from './crm';
import TemplateEditProspect from './templateEditProspect';
import { cols, rows } from './tableProspects.data';

function viewProspects() {
  return (
    <Crm titulo="Editar Prospectos">
      <TemplateEditProspect></TemplateEditProspect> 
    </Crm>
  )
}

export default viewProspects
