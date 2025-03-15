// resources/SubmissionList.tsx
import React from "react";
import { List, Datagrid, TextField, DateField } from "react-admin";

export const SubmissionList = () => (
  <List pagination={false} perPage={10}>
    <Datagrid>
      <TextField source="id" label="ID" />
      <TextField source="exerciseId" label="ID de l'exercice" />
      <TextField source="studentId" label="ID de l'étudiant" />
      <TextField source="studentName" label="Nom de l'étudiant" />
      <TextField source="score" label="Note" />
      <TextField source="feedback" label="Commentaires" />
      <DateField source="submissionDate" label="Date de soumission" />
      <TextField source="file" label="Fichier" />
    </Datagrid>
  </List>
);
