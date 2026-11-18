import express from 'express';
import { requestLogger } from './src/middlewares/loggerMiddleware.js';
import pilotRoutes from './src/routes/pilotRoutes.js';
import airplaneRoutes from './src/routes/airplaneRoutes.js';
import assignmentRoutes from './src/routes/assignmentRoutes.js';

const app = express();
const PORT = 3000;

// Middlewares globales
app.use(express.json());
app.use(requestLogger); // <-- Se ejecuta en todos los endpoints

// Rutas modulares
app.use('/api', pilotRoutes);
app.use('/api', airplaneRoutes);
app.use('/api', assignmentRoutes);

app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});