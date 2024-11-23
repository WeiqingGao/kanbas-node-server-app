import * as dao from "./dao.js";

export default function AssignmentRoutes(app) {
    app.post("/api/assignments", (req, res) => {
        const newAssignment = dao.createAssignment(req.body);
        res.json(newAssignment);
    });

    app.get("/api/assignments", (req, res) => {
        const assignments = dao.findAllAssignments();
        res.json(assignments);
    });

    app.get("/api/assignments/:assignmentId", (req, res) => {
        const assignment = dao.findAssignmentById(req.params.assignmentId);
        if (!assignment) {
        res.status(404).send("Assignment not found");
        return;
        }
        res.json(assignment);
    });

    app.put("/api/assignments/:assignmentId", (req, res) => {
        const updatedAssignment = dao.updateAssignment(req.params.assignmentId, req.body);
        res.json(updatedAssignment);
    });

    app.delete("/api/assignments/:assignmentId", (req, res) => {
        dao.deleteAssignment(req.params.assignmentId);
        res.sendStatus(200);
    });
}
