import * as airplaneService from '../services/airplaneService.js';

export const getAirplanes = (req, res) => {
  try {
    const airplanes = airplaneService.listAirplanes();
    return res.status(200).json(airplanes);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

export const getAirplane = (req, res) => {
  try {
    const airplane = airplaneService.getAirplaneById(req.params.id);
    return res.status(200).json(airplane);
  } catch (error) {
    return res.status(404).json({ error: error.message });
  }
};

export const createAirplane = (req, res) => {
  try {
    const newAirplane = airplaneService.registerAirplane(req.body);
    return res.status(201).json(newAirplane);
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
};

export const updateAirplane = (req, res) => {
  try {
    const updatedAirplane = airplaneService.updateAirplane(req.params.id, req.body);
    return res.status(200).json(updatedAirplane);
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
};

export const deleteAirplane = (req, res) => {
  try {
    const result = airplaneService.deleteAirplane(req.params.id);
    return res.status(200).json(result);
  } catch (error) {
    return res.status(404).json({ error: error.message });
  }
};