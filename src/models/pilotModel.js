// Datos quemados en memoria
let pilots = [
  {
    id: 1,
    nombre: 'Carlos Mendoza',
    licencia: 'LIC-9081',
    horasVuelo: 3200,
    estado: 'Activo'
  },
  {
    id: 2,
    nombre: 'Laura Gómez',
    licencia: 'LIC-4512',
    horasVuelo: 1850,
    estado: 'Activo'
  },
  {
    id: 3,
    nombre: 'Andrés Ramírez',
    licencia: 'LIC-7734',
    horasVuelo: 4100,
    estado: 'Inactivo'
  }
];

export const getAll = () => pilots;

export const getById = (id) => pilots.find((p) => p.id === id);

export const save = (pilot) => {
  pilots.push(pilot);
  return pilot;
};

export const update = (id, updatedFields) => {
  const index = pilots.findIndex((p) => p.id === id);
  if (index === -1) return null;

  pilots[index] = { ...pilots[index], ...updatedFields, id };
  return pilots[index];
};

export const remove = (id) => {
  const index = pilots.findIndex((p) => p.id === id);
  if (index === -1) return false;

  pilots.splice(index, 1);
  return true;
};