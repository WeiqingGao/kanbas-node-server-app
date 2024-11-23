import db from "../Database/index.js";

let { assignments } = db;

export const createAssignment = (assignment) => {
    const newAssignment = { ...assignment, _id: Date.now().toString() };
     assignments.push(newAssignment);
    return newAssignment;
};

export const findAllAssignments = () => assignments;

export const findAssignmentById = (assignmentId) =>
     assignments.find((assignment) => assignment._id === assignmentId);

export const updateAssignment = (assignmentId, updatedAssignment) => {
    assignments = assignments.map((assignment) =>
        assignment._id === assignmentId ? updatedAssignment : assignment
    );
    return updatedAssignment;
};

export const deleteAssignment = (assignmentId) => {
    assignments = assignments.filter((assignment) => assignment._id !== assignmentId);
    return assignments;
};
