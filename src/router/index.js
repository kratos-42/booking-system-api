import Router from '@koa/router';
import healthController from 'health/controllers/health-controller';

// Initialize Koa router.
const router = new Router();

// Register routes.
healthController(router);

export default router;
