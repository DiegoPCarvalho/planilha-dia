import React from 'react';
import { MDBDataTable } from 'mdbreact';

const DatatablePage = (props) => {
  const data = {
    columns: [
      {
        label: 'Id',
        field: 'id',
        sort: 'asc',
        width: 150
      },
      {
        label: 'Data',
        field: 'Data',
        sort: 'asc',
        width: 200
      },
      {
        label: 'OS',
        field: 'OS',
        sort: 'asc',
        width: 100
      },
      {
        label: 'Cliente',
        field: 'Cliente',
        sort: 'asc',
        width: 270
      },
      {
        label: 'Equipamento',
        field: 'Equipamento',
        sort: 'asc',
        width: 270
      },
      {
        label: 'Modelo',
        field: 'Modelo',
        sort: 'asc',
        width: 270
      },
      {
        label: 'NS',
        field: 'NS',
        sort: 'asc',
        width: 270
      },
      {
        label: 'Servico',
        field: 'Servico',
        sort: 'asc',
        width: 270
      },
    
    ],
    rows: props.listar
  };

  return (
    <MDBDataTable
      striped
      bordered
      small
      data={data}
    />
  );
}

export default DatatablePage;