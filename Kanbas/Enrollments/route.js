import * as dao from "./dao.js";

export default function EnrollmentRoutes(app) {
  app.get("/api/enrollments", (req, res) => {
    const enrollments = dao.findAllEnrollments();
    res.json(enrollments);
  });

  app.get("/api/enrollments/user/:userId", (req, res) => {
    const userId = req.params.userId;
    const enrollments = dao.findEnrollmentsForUser(userId);
    res.json(enrollments);
  });

  app.get("/api/enrollments/course/:courseId", (req, res) => {
    const courseId = req.params.courseId;
    const enrollments = dao.findEnrollmentsForCourse(courseId);
    res.json(enrollments);
  });

  app.post("/api/enrollments", (req, res) => {
    const { user, course } = req.body;
    try {
      const enrollment = dao.enrollUserInCourse(user, course);
      res.json(enrollment);
    } catch (err) {
      res.status(400).json({ error: err.message });
    }
  });

  app.delete("/api/enrollments", (req, res) => {
    const { user, course } = req.body;
    try {
      const enrollment = dao.unenrollUserFromCourse(user, course);
      res.json(enrollment);
    } catch (err) {
      res.status(400).json({ error: err.message });
    }
  });
}
