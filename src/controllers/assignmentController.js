import * as assignmentService from '../services/assignmentService.js';

export const getAssignments = (req, res) => {
  try {
    const assignments = assignmentService.listAssignments();
    return res.status(200).json(assignments);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

export const getAssignment = (req, res) => {
  try {
    const assignment = assignmentService.getAssignmentById(req.params.id);
    return res.status(200).json(assignment);
  } catch (error) {
    return res.status(404).json({ error: error.message });
  }
};

export const createAssignment = (req, res) => {
  try {
    const newAssignment = assignmentService.createAssignment(req.body);
    return res.status(201).json(newAssignment);
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
};

export const updateAssignment = (req, res) => {
  try {
    const updatedAssignment = assignmentService.updateAssignment(req.params.id, req.body);
    return res.status(200).json(updatedAssignment);
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
};

export const deleteAssignment = (req, res) => {
  try {
    const result = assignmentService.deleteAssignment(req.params.id);
    return res.status(200).json(result);
  } catch (error) {
    return res.status(404).json({ error: error.message });
  }
};