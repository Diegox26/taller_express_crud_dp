import { Router } from 'express';
import * as assignmentController from '../controllers/assignmentController.js';
import { validateIdParam, validateAssignmentData } from '../middlewares/validationMiddleware.js';

const router = Router();

router.get('/asignaciones', assignmentController.getAssignments);
router.get('/asignaciones/:id', validateIdParam, assignmentController.getAssignment);
router.post('/asignaciones', validateAssignmentData, assignmentController.createAssignment);
router.put('/asignaciones/:id', validateIdParam, assignmentController.updateAssignment);
router.delete('/asignaciones/:id', validateIdParam, assignmentController.deleteAssignment);

export default router;