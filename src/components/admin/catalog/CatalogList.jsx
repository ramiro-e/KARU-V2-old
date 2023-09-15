import React from 'react';
import { List, Datagrid, TextField, BooleanField, EditButton, DeleteButton, BooleanInput } from 'react-admin';

const CatalogList = (props) => (
  <List {...props}>
    <Datagrid>
      <TextField source="id" />
      <TextField source="name" />
      <TextField source="description" />
      <TextField source="price" />
      <BooleanField source="isAvailable" />
      <EditButton basePath="/catalog" />
      <DeleteButton basePath="/catalog" />
    </Datagrid>
  </List>
);

export default CatalogList;