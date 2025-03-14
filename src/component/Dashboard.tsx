import { Card, CardContent, Typography, Grid } from "@mui/material";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  LineChart,
  Line,
} from "recharts";
import { Datagrid, List, TextField, NumberField } from "react-admin";

// Données simulées
const submissionsData = [
  { name: "Jan", submissions: 30 },
  { name: "Fév", submissions: 45 },
  { name: "Mar", submissions: 20 },
];

const successData = [
  { name: "Réussi", value: 70 },
  { name: "Échec", value: 30 },
];

const misunderstoodData = [
  { name: "Chapitre 1", questions: 5 },
  { name: "Chapitre 2", questions: 12 },
  { name: "Chapitre 3", questions: 8 },
];

// Données simulées pour les étudiants
// const studentsData = [
//   { id: 1, name: "Alice", score: 85, submissions: 10 },
//   { id: 2, name: "Bob", score: 72, submissions: 8 },
//   { id: 3, name: "Charlie", score: 90, submissions: 12 },
//   { id: 4, name: "David", score: 68, submissions: 7 },
// ];

// Couleurs pour le PieChart
const COLORS = ["#4CAF50", "#FF5722"];

const Item = ({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) => (
  <Card sx={{ padding: 1, textAlign: "center", bgcolor: "white" }}>
    <CardContent>
      <Typography variant="h6" sx={{ mb: 2 }}>
        {title}
      </Typography>
      {children}
    </CardContent>
  </Card>
);

export const Dashboard = () => (
  <Grid container spacing={4} sx={{ p: 3 }}>
    {/* Nombre de soumissions */}
    <Grid item xs={12} md={4}>
      <Item title="Nombre de soumissions">
        <ResponsiveContainer width="100%" height={120}>
          <BarChart data={submissionsData}>
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="submissions" fill="#1976D2" />
          </BarChart>
        </ResponsiveContainer>
      </Item>
    </Grid>

    {/* Taux de réussite */}
    <Grid item xs={12} md={3}>
      <Item title="Taux de réussite">
        <ResponsiveContainer width="100%" height={120}>
          <PieChart>
            <Pie data={successData} dataKey="value" outerRadius={40} label>
              {successData.map((_entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index]} />
              ))}
            </Pie>
            <Tooltip />
          </PieChart>
        </ResponsiveContainer>
      </Item>
    </Grid>

    {/* Questions mal comprises */}
    <Grid item xs={12} md={4}>
      <Item title="Questions mal comprises">
        <ResponsiveContainer width="100%" height={120}>
          <LineChart data={misunderstoodData}>
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Line type="monotone" dataKey="questions" stroke="#E91E63" />
          </LineChart>
        </ResponsiveContainer>
      </Item>
    </Grid>

    {/* Liste des étudiants */}
    <Grid item xs={12}>
      <Item title="Performances des étudiants">
        <List
          perPage={10}
          pagination={false}
          //@ts-ignore
          hasCreate={false}
          resource="students"
          basePath="/students"
          exporter={false}
          actions={false}
        >
          <Datagrid>
            <TextField source="name" label="Nom" />
            <NumberField source="score" label="Score" />
            <NumberField source="submissions" label="Soumissions" />
          </Datagrid>
        </List>
      </Item>
    </Grid>
  </Grid>
);
