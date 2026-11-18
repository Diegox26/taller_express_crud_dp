import * as airplaneModel from '../models/airplaneModel.js';

export const listAirplanes = () => {
  return airplaneModel.getAll();
};

export const getAirplaneById = (id) => {
  const airplane = airplaneModel.getById(Number(id));
  if (!airplane) throw new Error(`Avión con ID ${id} no encontrado.`);
  return airplane;
};

export const registerAirplane = (airplaneData) => {
  const { id, modelo, matricula, capacidadMaxima, fabricante } = airplaneData;

  if (!id || !modelo || !matricula) {
    throw new Error('Los campos id, modelo y matrícula son obligatorios.');
  }

  const existing = airplaneModel.getById(Number(id));
  if (existing) {
    throw new Error(`Ya existe un avión registrado con el ID ${id}.`);
  }

  const newAirplane = {
    id: Number(id),
    modelo,
    matricula,
    capacidadMaxima: Number(capacidadMaxima) || 0,
    fabricante: fabricante || 'No especificado'
  };

  return airplaneModel.save(newAirplane);
};

export const updateAirplane = (id, airplaneData) => {
  const updated = airplaneModel.update(Number(id), airplaneData);
  if (!updated) throw new Error(`No se pudo actualizar: Avión con ID ${id} no existe.`);
  return updated;
};

export const deleteAirplane = (id) => {
  const deleted = airplaneModel.remove(Number(id));
  if (!deleted) throw new Error(`No se pudo eliminar: Avión con ID ${id} no existe.`);
  return { message: `Avión con ID ${id} eliminado correctamente.` };
};