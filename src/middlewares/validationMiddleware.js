// Validar que el parámetro :id de la URL sea un número válido
export const validateIdParam = (req, res, next) => {
  const { id } = req.params;
  if (isNaN(Number(id)) || Number(id) <= 0) {
    return res.status(400).json({
      error: `El parámetro ID '${id}' debe ser un número entero positivo válido.`
    });
  }
  next();
};

// Validar datos de entrada para Pilotos (POST)
export const validatePilotData = (req, res, next) => {
  const { id, nombre, licencia, horasVuelo, estado } = req.body;

  if (!id || typeof id !== 'number') {
    return res.status(400).json({ error: 'El campo "id" es obligatorio y debe ser numérico.' });
  }
  if (!nombre || typeof nombre !== 'string' || nombre.trim().length < 3) {
    return res.status(400).json({ error: 'El campo "nombre" es obligatorio (mínimo 3 caracteres).' });
  }
  if (!licencia || typeof licencia !== 'string') {
    return res.status(400).json({ error: 'El campo "licencia" es obligatorio y debe ser texto.' });
  }
  if (horasVuelo !== undefined && (typeof horasVuelo !== 'number' || horasVuelo < 0)) {
    return res.status(400).json({ error: 'El campo "horasVuelo" debe ser un número positivo.' });
  }
  if (estado !== undefined && !['Activo', 'Inactivo'].includes(estado)) {
    return res.status(400).json({ error: 'El campo "estado" solo permite "Activo" o "Inactivo".' });
  }

  next();
};

// Validar datos de entrada para Aviones (POST)
export const validateAirplaneData = (req, res, next) => {
  const { id, modelo, matricula, capacidadMaxima, fabricante } = req.body;

  if (!id || typeof id !== 'number') {
    return res.status(400).json({ error: 'El campo "id" es obligatorio y debe ser numérico.' });
  }
  if (!modelo || typeof modelo !== 'string') {
    return res.status(400).json({ error: 'El campo "modelo" es obligatorio.' });
  }
  if (!matricula || typeof matricula !== 'string') {
    return res.status(400).json({ error: 'El campo "matricula" es obligatorio.' });
  }
  if (capacidadMaxima !== undefined && (typeof capacidadMaxima !== 'number' || capacidadMaxima <= 0)) {
    return res.status(400).json({ error: 'El campo "capacidadMaxima" debe ser mayor a 0.' });
  }
  if (fabricante !== undefined && typeof fabricante !== 'string') {
    return res.status(400).json({ error: 'El campo "fabricante" debe ser una cadena de texto.' });
  }

  next();
};

// Validar datos de entrada para Asignaciones (POST)
export const validateAssignmentData = (req, res, next) => {
  const { idAsignacion, idPiloto, idAvion, fechaVuelo, rutaAsignada } = req.body;

  if (!idAsignacion || typeof idAsignacion !== 'number') {
    return res.status(400).json({ error: 'El campo "idAsignacion" es obligatorio y debe ser numérico.' });
  }
  if (!idPiloto || typeof idPiloto !== 'number') {
    return res.status(400).json({ error: 'El campo "idPiloto" es obligatorio y debe ser numérico.' });
  }
  if (!idAvion || typeof idAvion !== 'number') {
    return res.status(400).json({ error: 'El campo "idAvion" es obligatorio y debe ser numérico.' });
  }
  if (!fechaVuelo || typeof fechaVuelo !== 'string') {
    return res.status(400).json({ error: 'El campo "fechaVuelo" es obligatorio (ej. "2026-11-20").' });
  }
  if (!rutaAsignada || typeof rutaAsignada !== 'string' || rutaAsignada.trim().length < 3) {
    return res.status(400).json({ error: 'El campo "rutaAsignada" es obligatorio (ej. "BOG - MDE").' });
  }

  next();
};