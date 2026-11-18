import * as pilotModel from '../models/pilotModel.js';

export const listPilots = () => {
  return pilotModel.getAll();
};

export const getPilotById = (id) => {
  const pilot = pilotModel.getById(Number(id));
  if (!pilot) throw new Error(`Piloto con ID ${id} no encontrado.`);
  return pilot;
};

export const registerPilot = (pilotData) => {
  const { id, nombre, licencia, horasVuelo, estado } = pilotData;

  if (!id || !nombre || !licencia) {
    throw new Error('Los campos id, nombre y licencia son obligatorios.');
  }

  const existing = pilotModel.getById(Number(id));
  if (existing) {
    throw new Error(`Ya existe un piloto registrado con el ID ${id}.`);
  }

  const newPilot = {
    id: Number(id),
    nombre,
    licencia,
    horasVuelo: Number(horasVuelo) || 0,
    estado: estado || 'Activo'
  };

  return pilotModel.save(newPilot);
};

export const updatePilot = (id, pilotData) => {
  const updated = pilotModel.update(Number(id), pilotData);
  if (!updated) throw new Error(`No se pudo actualizar: Piloto con ID ${id} no existe.`);
  return updated;
};

export const deletePilot = (id) => {
  const deleted = pilotModel.remove(Number(id));
  if (!deleted) throw new Error(`No se pudo eliminar: Piloto con ID ${id} no existe.`);
  return { message: `Piloto con ID ${id} eliminado correctamente.` };
};