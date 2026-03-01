import express from 'express';
import { addProject, deleteProject, updateProject,getProjects } from '../controllers/projectController.js';

const router = express.Router();
// Create a new project
router.post('/projects', addProject);
// Get all projects
router.get('/projects', getProjects);
// Update a project by ID
router.put('/projects/:id', updateProject);
// Delete a project by ID
router.delete('/projects/:id', deleteProject);  

export default router;