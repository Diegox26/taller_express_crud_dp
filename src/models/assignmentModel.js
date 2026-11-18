// Datos quemados en memoria (relacionando idPiloto e idAvion existentes)
let assignments = [
  {
    idAsignacion: 100,
    idPiloto: 1,
    idAvion: 10,
    fechaVuelo: '2026-11-20',
    rutaAsignada: 'BOG - MDE'
  },
  {
    idAsignacion: 101,
    idPiloto: 2,
    idAvion: 20,
    fechaVuelo: '2026-11-21',
    rutaAsignada: 'BOG - CTG'
  }
];

export const getAll = () => assignments;

export const getById = (idAsignacion) =>
  assignments.find((a) => a.idAsignacion === idAsignacion);

export const save = (assignment) => {
  assignments.push(assignment);
  return assignment;
};

export const update = (idAsignacion, updatedFields) => {
  const index = assignments.findIndex((a) => a.idAsignacion === idAsignacion);
  if (index === -1) return null;

  assignments[index] = { ...assignments[index], ...updatedFields, idAsignacion };
  return assignments[index];
};

export const remove = (idAsignacion) => {
  const index = assignments.findIndex((a) => a.idAsignacion === idAsignacion);
  if (index === -1) return false;

  assignments.splice(index, 1);
  return true;
};