import {
  List,
  Datagrid,
  TextField,
  EmailField,
  SimpleList,
  UrlField,
} from "react-admin";
import MyUrlField from "./MyUrlField";

export const UserList = () => (
  <List>
    <Datagrid>
      <TextField source="id" />
      <TextField source="name" />
      {/* <TextField source="username" /> */}
      <EmailField source="email" />
      {/* <TextField source="address.street" /> */}
      <TextField source="phone" />
      <MyUrlField source="website" />
      <TextField source="company.name" />
    </Datagrid>

    {/* <SimpleList
      primaryText={(record) => record.name}
      secondaryText={(record) => record.username}
      tertiaryText={(record) => record.email}
    /> */}
  </List>
);
