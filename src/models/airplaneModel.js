// Datos quemados en memoria
let airplanes = [
  {
    id: 10,
    modelo: 'Airbus A320',
    matricula: 'HK-5120',
    capacidadMaxima: 180,
    fabricante: 'Airbus'
  },
  {
    id: 20,
    modelo: 'Boeing 737-800',
    matricula: 'HK-4982',
    capacidadMaxima: 189,
    fabricante: 'Boeing'
  },
  {
    id: 30,
    modelo: 'ATR 72-600',
    matricula: 'HK-5301',
    capacidadMaxima: 70,
    fabricante: 'ATR'
  }
];

export const getAll = () => airplanes;

export const getById = (id) => airplanes.find((a) => a.id === id);

export const save = (airplane) => {
  airplanes.push(airplane);
  return airplane;
};

export const update = (id, updatedFields) => {
  const index = airplanes.findIndex((a) => a.id === id);
  if (index === -1) return null;

  airplanes[index] = { ...airplanes[index], ...updatedFields, id };
  return airplanes[index];
};

export const remove = (id) => {
  const index = airplanes.findIndex((a) => a.id === id);
  if (index === -1) return false;

  airplanes.splice(index, 1);
  return true;
};