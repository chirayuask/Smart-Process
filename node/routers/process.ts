import { Router } from 'express';
import { createProcess, generateAIProcess, getProcesses, updateProcesses } from '../controllers/process';

const _routes = Router();

_routes.route('/process')
    .get(getProcesses)
    .post(createProcess)
    .put(updateProcesses);

_routes.post('/ai-process', generateAIProcess)
export default _routes