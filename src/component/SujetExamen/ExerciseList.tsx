import * as React from "react";
import {
  List,
  Datagrid,
  TextField,
  DateField,
  EditButton,
  Filter,
  SearchInput,
  DeleteButton,
} from "react-admin";

// Définition des filtres pour la liste des exercices
const ExerciseFilter: React.FC = (props) => (
  <Filter {...props}>
    <SearchInput source="q" alwaysOn placeholder="Rechercher un exercice" />
  </Filter>
);

// Composant principal pour afficher la liste des exercices
export const ExerciseList: React.FC = (props) => (
  <List {...props} filters={<ExerciseFilter />} perPage={10}>
    <Datagrid rowClick="edit">
      <TextField source="id" label="ID" />
      <TextField source="title" label="Titre de l'exercice" />
      <TextField source="description" label="Description" />
      <DateField source="createdAt" label="Date de création" showTime />
      <EditButton />
      <DeleteButton />
    </Datagrid>
  </List>
);
