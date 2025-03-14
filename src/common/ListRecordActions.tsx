import { DeleteWithConfirmButton, EditButton } from "react-admin";

const ListRecordActions = () => {
  return (
    <>
      <EditButton />
      <DeleteWithConfirmButton
        confirmTitle="Supprimer"
        mutationMode="undoable"
      />
    </>
  );
};

export default ListRecordActions;
