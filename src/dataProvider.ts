// dataProvider.ts
import { DataProvider, fetchUtils } from "react-admin";
import { stringify } from "query-string";

// URL de votre API ou fichier JSON
const apiUrl = "/data.json"; // Remplacez par l'URL de votre API
const httpClient = fetchUtils.fetchJson;

// Données simulées pour les étudiants
const studentsData = [
  { id: 1, name: "Alice", score: 85, submissions: 10 },
  { id: 2, name: "Bob", score: 72, submissions: 8 },
  { id: 3, name: "Charlie", score: 90, submissions: 12 },
  { id: 4, name: "David", score: 68, submissions: 7 },
];

// Fonction pour simuler un ID unique (utilisé pour la création)
const generateId = () => Math.floor(Math.random() * 1000000);

const dataProvider: DataProvider = {
  // Récupérer une liste de ressources (ex: /exercises ou /students)
  getList: async (resource, params) => {
    if (resource === "students") {
      // Retourne les données des étudiants
      return {
        data: studentsData,
        total: studentsData.length,
      };
    }

    // Pour les autres ressources, utilisez l'API ou le fichier JSON
    const { json } = await httpClient(apiUrl);
    if (!json[resource]) {
      throw new Error(`Resource ${resource} not found`);
    }

    // Filtrage et pagination (optionnel)
    const { page, perPage } = params.pagination;
    const { field, order } = params.sort;
    const filteredData = json[resource]
      .sort((a: any, b: any) =>
        a[field] > b[field]
          ? order === "ASC"
            ? 1
            : -1
          : order === "ASC"
            ? -1
            : 1,
      )
      .slice((page - 1) * perPage, page * perPage);

    return {
      data: filteredData.map((resource: any) => ({
        ...resource,
        id: resource.id,
      })),
      total: json[resource].length,
    };
  },

  // Récupérer une ressource par son ID (ex: /exercises/1 ou /students/1)
  getOne: async (resource, params) => {
    if (resource === "students") {
      const record = studentsData.find((student) => student.id === params.id);
      if (record) {
        return { data: record };
      }
      throw new Error(`Student with id ${params.id} not found`);
    }

    // Pour les autres ressources, utilisez l'API ou le fichier JSON
    const { json } = await httpClient(apiUrl);
    const record = json[resource].find((r: any) => r.id === params.id);
    if (!record) {
      throw new Error(`Record with id ${params.id} not found`);
    }
    return { data: record };
  },

  // Récupérer plusieurs ressources par leurs IDs (ex: /exercises?ids=[1,2] ou /students?ids=[1,2])
  getMany: async (resource, params) => {
    if (resource === "students") {
      const records = studentsData.filter((student) =>
        params.ids.includes(student.id),
      );
      if (records.length === 0) {
        throw new Error(`No students found for ids ${params.ids}`);
      }
      return { data: records };
    }

    // Pour les autres ressources, utilisez l'API ou le fichier JSON
    const { json } = await httpClient(apiUrl);
    const records = json[resource].filter((r: any) =>
      params.ids.includes(r.id),
    );
    if (records.length === 0) {
      throw new Error(`No records found for ids ${params.ids}`);
    }
    return { data: records };
  },

  // Récupérer des ressources liées (ex: /corrections?exerciseId=1)
  getManyReference: async (resource, params) => {
    if (resource === "students") {
      const { target, id } = params;
      const records = studentsData.filter((student) => student[target] === id);
      return {
        data: records,
        total: records.length,
      };
    }

    // Pour les autres ressources, utilisez l'API ou le fichier JSON
    const { json } = await httpClient(apiUrl);
    const { target, id } = params;
    const records = json[resource].filter((r: any) => r[target] === id);
    return {
      data: records,
      total: records.length,
    };
  },

  // Créer une nouvelle ressource (ex: POST /exercises ou POST /students)
  create: async (resource, params) => {
    if (resource === "students") {
      const newRecord = { ...params.data, id: generateId() };
      studentsData.push(newRecord);
      return { data: newRecord };
    }

    // Pour les autres ressources, utilisez l'API ou le fichier JSON
    const { json } = await httpClient(apiUrl);
    const newRecord = { ...params.data, id: generateId() };
    json[resource].push(newRecord);
    return { data: newRecord };
  },

  // Mettre à jour une ressource existante (ex: PUT /exercises/1 ou PUT /students/1)
  update: async (resource, params) => {
    if (resource === "students") {
      const index = studentsData.findIndex(
        (student) => student.id === params.id,
      );
      if (index === -1) {
        throw new Error(`Student with id ${params.id} not found`);
      }
      studentsData[index] = { ...studentsData[index], ...params.data };
      return { data: studentsData[index] };
    }

    // Pour les autres ressources, utilisez l'API ou le fichier JSON
    const { json } = await httpClient(apiUrl);
    const index = json[resource].findIndex((r: any) => r.id === params.id);
    if (index === -1) {
      throw new Error(`Record with id ${params.id} not found`);
    }
    json[resource][index] = { ...json[resource][index], ...params.data };
    return { data: json[resource][index] };
  },

  // Mettre à jour plusieurs ressources (ex: PUT /exercises?ids=[1,2] ou PUT /students?ids=[1,2])
  updateMany: async (resource, params) => {
    if (resource === "students") {
      params.ids.forEach((id) => {
        const index = studentsData.findIndex((student) => student.id === id);
        if (index !== -1) {
          studentsData[index] = { ...studentsData[index], ...params.data };
        }
      });
      return { data: params.ids };
    }

    // Pour les autres ressources, utilisez l'API ou le fichier JSON
    const { json } = await httpClient(apiUrl);
    params.ids.forEach((id) => {
      const index = json[resource].findIndex((r: any) => r.id === id);
      if (index !== -1) {
        json[resource][index] = { ...json[resource][index], ...params.data };
      }
    });
    return { data: params.ids };
  },

  // Supprimer une ressource (ex: DELETE /exercises/1 ou DELETE /students/1)
  delete: async (resource, params) => {
    if (resource === "students") {
      const index = studentsData.findIndex(
        (student) => student.id === params.id,
      );
      if (index === -1) {
        throw new Error(`Student with id ${params.id} not found`);
      }
      const [deletedRecord] = studentsData.splice(index, 1);
      return { data: deletedRecord };
    }

    // Pour les autres ressources, utilisez l'API ou le fichier JSON
    const { json } = await httpClient(apiUrl);
    const index = json[resource].findIndex((r: any) => r.id === params.id);
    if (index === -1) {
      throw new Error(`Record with id ${params.id} not found`);
    }
    const [deletedRecord] = json[resource].splice(index, 1);
    return { data: deletedRecord };
  },

  // Supprimer plusieurs ressources (ex: DELETE /exercises?ids=[1,2] ou DELETE /students?ids=[1,2])
  deleteMany: async (resource, params) => {
    if (resource === "students") {
      params.ids.forEach((id) => {
        const index = studentsData.findIndex((student) => student.id === id);
        if (index !== -1) {
          studentsData.splice(index, 1);
        }
      });
      return { data: params.ids };
    }

    // Pour les autres ressources, utilisez l'API ou le fichier JSON
    const { json } = await httpClient(apiUrl);
    params.ids.forEach((id) => {
      const index = json[resource].findIndex((r: any) => r.id === id);
      if (index !== -1) {
        json[resource].splice(index, 1);
      }
    });
    return { data: params.ids };
  },
};

export default dataProvider;
