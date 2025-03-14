import * as React from "react";
import {
  Create,
  SimpleForm,
  TextInput,
  FileInput,
  FileField,
} from "react-admin";

export const ExerciseCreate: React.FC = (props) => (
  <Create {...props}>
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
  </Create>
);
