import { Card, CardContent, Typography, Grid } from "@mui/material";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  BarChart,
  Bar,
  AreaChart,
  Area,
  CartesianGrid,
} from "recharts";
import { Datagrid, List, TextField, NumberField } from "react-admin";

// Données simulées pour l'évolution des performances
const performanceData = [
  { name: "Jan", studentScore: 65, classAverage: 70 },
  { name: "Fév", studentScore: 75, classAverage: 72 },
  { name: "Mar", studentScore: 80, classAverage: 75 },
  { name: "Avr", studentScore: 85, classAverage: 78 },
  { name: "Mai", studentScore: 90, classAverage: 80 },
];

// Données simulées pour les performances par exercice
const exercisePerformanceData = [
  { name: "Exercice 1", studentScore: 70, classAverage: 75 },
  { name: "Exercice 2", studentScore: 80, classAverage: 78 },
  { name: "Exercice 3", studentScore: 85, classAverage: 82 },
  { name: "Exercice 4", studentScore: 90, classAverage: 85 },
];

// Données simulées pour la progression des performances
const progressionData = [
  { name: "Semaine 1", score: 60 },
  { name: "Semaine 2", score: 65 },
  { name: "Semaine 3", score: 70 },
  { name: "Semaine 4", score: 75 },
  { name: "Semaine 5", score: 80 },
];

// Composant réutilisable pour les cartes
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
    {/* Évolution des performances (LineChart) */}
    <Grid item xs={12} md={6}>
      <Item title="Évolution des performances">
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={performanceData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Line
              type="monotone"
              dataKey="studentScore"
              stroke="#1976D2"
              name="Votre score"
            />
            <Line
              type="monotone"
              dataKey="classAverage"
              stroke="#4CAF50"
              name="Moyenne de la classe"
            />
          </LineChart>
        </ResponsiveContainer>
      </Item>
    </Grid>

    {/* Performances par exercice (BarChart) */}
    <Grid item xs={12} md={6}>
      <Item title="Performances par exercice">
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={exercisePerformanceData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="studentScore" fill="#1976D2" name="Votre score" />
            <Bar
              dataKey="classAverage"
              fill="#4CAF50"
              name="Moyenne de la classe"
            />
          </BarChart>
        </ResponsiveContainer>
      </Item>
    </Grid>

    {/* Progression des performances (AreaChart) */}
    <Grid item xs={12}>
      <Item title="Progression des performances">
        <ResponsiveContainer width="100%" height={300}>
          <AreaChart data={progressionData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Area
              type="monotone"
              dataKey="score"
              stroke="#1976D2"
              fill="#1976D2"
              fillOpacity={0.3}
            />
          </AreaChart>
        </ResponsiveContainer>
      </Item>
    </Grid>

    {/* Liste des performances des étudiants */}
  </Grid>
);
