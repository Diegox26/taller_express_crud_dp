import * as pilotService from '../services/pilotService.js';

export const getPilots = (req, res) => {
  try {
    const pilots = pilotService.listPilots();
    return res.status(200).json(pilots);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

export const getPilot = (req, res) => {
  try {
    const pilot = pilotService.getPilotById(req.params.id);
    return res.status(200).json(pilot);
  } catch (error) {
    return res.status(404).json({ error: error.message });
  }
};

export const createPilot = (req, res) => {
  try {
    const newPilot = pilotService.registerPilot(req.body);
    return res.status(201).json(newPilot);
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
};

export const updatePilot = (req, res) => {
  try {
    const updatedPilot = pilotService.updatePilot(req.params.id, req.body);
    return res.status(200).json(updatedPilot);
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
};

export const deletePilot = (req, res) => {
  try {
    const result = pilotService.deletePilot(req.params.id);
    return res.status(200).json(result);
  } catch (error) {
    return res.status(404).json({ error: error.message });
  }
};