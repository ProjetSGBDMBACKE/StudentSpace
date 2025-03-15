import React from "react";
import {
  List,
  Datagrid,
  TextField,
  DateField,
  FunctionField,
} from "react-admin";

export const ExerciseList = () => (
  <List pagination={false} perPage={10}>
    <Datagrid rowClick="show">
      <TextField source="title" label="Titre" />
      <TextField source="professor" label="Professeur" />
      <DateField source="createdAt" label="Date de dépôt" showTime />
      <DateField source="deadline" label="Date limite" showTime />
      <TextField source="difficulty" label="Difficulté" />
    </Datagrid>
  </List>
);
