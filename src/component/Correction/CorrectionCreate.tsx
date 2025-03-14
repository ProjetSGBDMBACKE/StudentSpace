// resources/corrections.tsx
import * as React from "react";
import {
  Create,
  SimpleForm,
  TextInput,
  ArrayInput,
  SimpleFormIterator,
  ReferenceInput,
  SelectInput,
} from "react-admin";

// Composant pour créer une correction
export const CorrectionCreate: React.FC = (props) => (
  <Create {...props}>
    <SimpleForm>
      {/* Sélection de l'exercice */}
      <ReferenceInput source="exerciseId" reference="exercises">
        <SelectInput optionText="title" label="Exercice" />
      </ReferenceInput>

      {/* Ajout de plusieurs modèles de correction */}
      <ArrayInput source="models" label="Modèles de correction">
        <SimpleFormIterator>
          <TextInput
            source="content"
            label="Modèle de correction"
            multiline
            fullWidth
          />
        </SimpleFormIterator>
      </ArrayInput>
    </SimpleForm>
  </Create>
);
