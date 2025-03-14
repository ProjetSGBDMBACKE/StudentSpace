// resources/corrections.tsx
import * as React from "react";
import {
  List,
  Datagrid,
  TextField,
  NumberField,
  EditButton,
  Filter,
  SearchInput,
  DeleteButton,
} from "react-admin";

// Filtres pour la liste des corrections
const CorrectionFilter: React.FC = (props) => (
  <Filter {...props}>
    <SearchInput source="q" alwaysOn placeholder="Rechercher une correction" />
    {/* <ReferenceInput source="exerciseId" reference="exercises" alwaysOn>
      <SelectInput optionText="title" label="Exercice" />
    </ReferenceInput> */}
  </Filter>
);
// Composant pour afficher la liste des corrections
export const CorrectionList: React.FC = (props) => (
  <List {...props} filters={<CorrectionFilter />} perPage={10}>
    <Datagrid rowClick="edit">
      <TextField source="id" label="ID" />
      <TextField source="studentName" label="Étudiant" />
      <TextField source="exerciseId" label="Exercice ID" />
      <NumberField source="score" label="Note" emptyText="Non noté" />
      <EditButton />
      <DeleteButton />
    </Datagrid>
  </List>
);
