import { Router } from 'express';
import * as pilotController from '../controllers/pilotController.js';
import { validateIdParam, validatePilotData } from '../middlewares/validationMiddleware.js';

const router = Router();

router.get('/pilotos', pilotController.getPilots);
router.get('/pilotos/:id', validateIdParam, pilotController.getPilot);
router.post('/pilotos', validatePilotData, pilotController.createPilot);
router.put('/pilotos/:id', validateIdParam, pilotController.updatePilot);
router.delete('/pilotos/:id', validateIdParam, pilotController.deletePilot);

export default router;