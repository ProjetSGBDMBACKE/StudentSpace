import { Show, SimpleShowLayout, TextField, DateField } from "react-admin";

export const ExerciseShow = () => (
  <Show>
    <SimpleShowLayout>
      <TextField source="title" label="Titre" />
      <TextField source="professor" label="Professeur" />
      <DateField source="createdAt" label="Date de dépôt" showTime />
      <DateField source="deadline" label="Date limite" showTime />
      <TextField source="difficulty" label="Difficulté" />
      <TextField source="description" label="Description" />
      <TextField source="content" label="Contenu du sujet" />
    </SimpleShowLayout>
  </Show>
);
