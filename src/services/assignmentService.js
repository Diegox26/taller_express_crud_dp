import * as assignmentModel from '../models/assignmentModel.js';
import * as pilotModel from '../models/pilotModel.js';
import * as airplaneModel from '../models/airplaneModel.js';

export const listAssignments = () => {
  return assignmentModel.getAll();
};

export const getAssignmentById = (idAsignacion) => {
  const assignment = assignmentModel.getById(Number(idAsignacion));
  if (!assignment) throw new Error(`Asignación con ID ${idAsignacion} no encontrada.`);
  return assignment;
};

export const createAssignment = (assignmentData) => {
  const { idAsignacion, idPiloto, idAvion, fechaVuelo, rutaAsignada } = assignmentData;

  if (!idAsignacion || !idPiloto || !idAvion || !fechaVuelo || !rutaAsignada) {
    throw new Error('Todos los campos (idAsignacion, idPiloto, idAvion, fechaVuelo, rutaAsignada) son obligatorios.');
  }

  // 1. Verificar que el idAsignacion no esté duplicado
  const existingAssignment = assignmentModel.getById(Number(idAsignacion));
  if (existingAssignment) {
    throw new Error(`La asignación con ID ${idAsignacion} ya existe.`);
  }

  // 2. Validación relacional: Verificar que el piloto exista y esté activo
  const pilot = pilotModel.getById(Number(idPiloto));
  if (!pilot) {
    throw new Error(`Validación fallida: El piloto con ID ${idPiloto} no existe en el sistema.`);
  }
  if (pilot.estado !== 'Activo') {
    throw new Error(`Validación fallida: El piloto ${pilot.nombre} se encuentra ${pilot.estado}.`);
  }

  // 3. Validación relacional: Verificar que el avión exista
  const airplane = airplaneModel.getById(Number(idAvion));
  if (!airplane) {
    throw new Error(`Validación fallida: El avión con ID ${idAvion} no existe en el sistema.`);
  }

  const newAssignment = {
    idAsignacion: Number(idAsignacion),
    idPiloto: Number(idPiloto),
    idAvion: Number(idAvion),
    fechaVuelo,
    rutaAsignada
  };

  return assignmentModel.save(newAssignment);
};

export const updateAssignment = (idAsignacion, assignmentData) => {
  if (assignmentData.idPiloto) {
    const pilot = pilotModel.getById(Number(assignmentData.idPiloto));
    if (!pilot) throw new Error(`El piloto con ID ${assignmentData.idPiloto} no existe.`);
  }

  if (assignmentData.idAvion) {
    const airplane = airplaneModel.getById(Number(assignmentData.idAvion));
    if (!airplane) throw new Error(`El avión con ID ${assignmentData.idAvion} no existe.`);
  }

  const updated = assignmentModel.update(Number(idAsignacion), assignmentData);
  if (!updated) throw new Error(`No se pudo actualizar: Asignación con ID ${idAsignacion} no existe.`);
  return updated;
};

export const deleteAssignment = (idAsignacion) => {
  const deleted = assignmentModel.remove(Number(idAsignacion));
  if (!deleted) throw new Error(`No se pudo eliminar: Asignación con ID ${idAsignacion} no existe.`);
  return { message: `Asignación con ID ${idAsignacion} eliminada correctamente.` };
};