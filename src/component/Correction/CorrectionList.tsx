// resources/CorrectionList.tsx
import {
  List,
  Datagrid,
  TextField,
  NumberField,
  DateField,
  useGetIdentity,
} from "react-admin";

export const CorrectionList = () => {
  const { identity } = useGetIdentity(); // Récupère l'identité de l'utilisateur connecté
  const studentId = identity?.id; // Supposons que l'ID de l'étudiant est disponible dans l'identité

  return (
    <List
      pagination={false}
      perPage={10}
      filter={{ studentId }} // Filtre les corrections par étudiant connecté
    >
      <Datagrid rowClick="show">
        <TextField source="id" label="ID" />
        <TextField source="exerciseTitle" label="Sujet" />
        <TextField source="professorName" label="Professeur" />{" "}
        {/* Nom du professeur */}
        <NumberField source="score" label="Note" />
        <DateField source="submissionDate" label="Date de soumission" />
      </Datagrid>
    </List>
  );
};
