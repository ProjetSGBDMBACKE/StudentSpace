// resources/corrections.tsx
import { Edit, SimpleForm, NumberInput, TextInput } from "react-admin";

// Composant pour éditer une correction
export const CorrectionEdit: React.FC = (props) => (
  <Edit {...props}>
    <SimpleForm>
      <TextInput source="studentName" label="Étudiant" disabled />
      <TextInput source="exerciseId" label="Exercice ID" disabled />
      <NumberInput source="score" label="Note sur 20" min={0} max={20} />
      <TextInput source="feedback" label="Commentaires" multiline fullWidth />
    </SimpleForm>
  </Edit>
);
