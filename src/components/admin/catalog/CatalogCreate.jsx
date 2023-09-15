import React from 'react';
import { Create, SimpleForm, TextInput, NumberInput, BooleanInput } from 'react-admin';

const ProductCreate = (props) => (
  <Create {...props}>
    <SimpleForm>
      <TextInput source="name" />
      <TextInput source="description" />
      <NumberInput source="price" />
      <BooleanInput source="isAvailable" />
    </SimpleForm>
  </Create>
);

export default ProductCreate;