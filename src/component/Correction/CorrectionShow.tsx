// resources/CorrectionShow.tsx
import React from "react";
import {
  Show,
  SimpleShowLayout,
  TextField,
  NumberField,
  DateField,
} from "react-admin";

export const CorrectionShow = () => (
  <Show>
    <SimpleShowLayout>
      <TextField source="exerciseTitle" label="Sujet" />
      <TextField source="professorName" label="Professeur" />{" "}
      {/* Nom du professeur */}
      <NumberField source="score" label="Note" />
      <TextField source="feedback" label="Commentaires" />
      <DateField source="submissionDate" label="Date de soumission" />
      <TextField source="file" label="Fichier soumis" />
    </SimpleShowLayout>
  </Show>
);
