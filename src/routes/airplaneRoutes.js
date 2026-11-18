import { Router } from 'express';
import * as airplaneController from '../controllers/airplaneController.js';
import { validateIdParam, validateAirplaneData } from '../middlewares/validationMiddleware.js';

const router = Router();

router.get('/aviones', airplaneController.getAirplanes);
router.get('/aviones/:id', validateIdParam, airplaneController.getAirplane);
router.post('/aviones', validateAirplaneData, airplaneController.createAirplane);
router.put('/aviones/:id', validateIdParam, airplaneController.updateAirplane);
router.delete('/aviones/:id', validateIdParam, airplaneController.deleteAirplane);

export default router;