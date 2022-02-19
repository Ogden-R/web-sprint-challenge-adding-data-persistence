// build your `Project` model here
const db = require("../../data/dbConfig");

async function getAll() {
    const allProjects = await db('projects')

    const projects = allProjects.map((project) => {
        const formattedProject = {
            project_id: project.project_id,
            project_name: project.project_name,
            project_description: project.project_description,
            project_completed: project.project_completed === 0 ? false : true,
        }
        return formattedProject
    })
    return projects
}

async function getById(project_id) {
    const singleProject = await db('projects')
        .where('project_id', project_id)
        .first()

    const projectFormatted = {
        project_id: singleProject.project_id,
        project_name: singleProject.project_name,
        project_description: singleProject.project_description,
        project_completed: singleProject.project_completed === 0 ? false : true,
    }
    return projectFormatted
}

async function addProject(project) {
    const [project_id] = await db('projects').insert(project)
    return getById(project_id)
}

    module.exports = {
        getAll,
        addProject,
        getById,
    };
