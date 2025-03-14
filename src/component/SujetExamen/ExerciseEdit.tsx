import * as React from "react";
import { Edit, SimpleForm, TextInput, FileInput, FileField } from "react-admin";

export const ExerciseEdit: React.FC = (props) => (
  <Edit {...props}>
    <SimpleForm>
      <TextInput source="title" label="Titre de l'exercice" />
      <FileInput
        source="file"
        label="Fichier PDF"
        //@ts-ignore
        accept="application/pdf"
      >
        <FileField source="src" title="title" />
      </FileInput>
    </SimpleForm>
  </Edit>
);
