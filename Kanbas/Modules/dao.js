import Database from "../Database/index.js";

export function findModulesForCourse(courseId) {
    const { modules } = Database;
    return modules.filter((module) => module.course === courseId);
};

export function createModule(module) {
    const newModule = { ...module, _id: Date.now().toString() };
    Database.modules = [...Database.modules, newModule];
    return newModule;
};

export const deleteModule = async (moduleId) => {
    db.modules = db.modules.filter((module) => module._id !== moduleId);
};
  
export const updateModule = async (moduleId, updatedModule) => {
    const index = db.modules.findIndex((module) => module._id === moduleId);
    if (index !== -1) {
        db.modules[index] = { ...db.modules[index], ...updatedModule };
        return db.modules[index];
    }
    return null;
};
  
   