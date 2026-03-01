import projectModel from "../models/projectModels";

const addProject = async (req, res) => {
    try {
        const { title, description, imageUrl, projectUrl } = req.body; 
        const newProject = new projectModel({
            title,
            description,
            imageUrl,
            projectUrl
        });
        await newProject.save();
        res.status(201).json({ message: "Project added successfully", project: newProject });
    } catch (error) {
        res.status(500).json({ message: "Error adding project", error });
    }
};
const getProjects = async (req, res) => {
    try {
        const projects = await projectModel.find(); 
        res.status(200).json(projects);
    } catch (error) {
        res.status(500).json({ message: "Error fetching projects", error });
    }       
};

const updateProject = async (req, res) => {
    try {
        const { id } = req.params;
        const { title, description, imageUrl, projectUrl } = req.body;
        const updatedProject = await projectModel.findByIdAndUpdate(
            id,
            { title, description, imageUrl, projectUrl },
            { new: true }
        );
        if (!updatedProject) {
            return res.status(404).json({ message: "Project not found" });
        }
        res.status(200).json({ message: "Project updated successfully", project: updatedProject });
    } catch (error) {
        res.status(500).json({ message: "Error updating project", error });
    }
};  
const deleteProject = async (req, res) => {
    try {
        const { id } = req.params;          
        const deletedProject = await projectModel.findByIdAndDelete(id);
        if (!deletedProject) {
            return res.status(404).json({ message: "Project not found" });
        }
        res.status(200).json({ message: "Project deleted successfully" });
    } catch (error) {
        res.status(500).json({ message: "Error deleting project", error });
    }   
};

export { addProject, getProjects, updateProject, deleteProject };