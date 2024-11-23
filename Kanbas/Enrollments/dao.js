import db from "../Database/index.js";

let { enrollments } = db;

export const findAllEnrollments = () => enrollments;

export const findEnrollmentsForUser = (userId) =>
  enrollments.filter((enrollment) => enrollment.user === userId);

export const findEnrollmentsForCourse = (courseId) =>
  enrollments.filter((enrollment) => enrollment.course === courseId);

export const enrollUserInCourse = (userId, courseId) => {
  const newEnrollment = { user: userId, course: courseId };
  enrollments = [...enrollments, newEnrollment];
  return newEnrollment;
};

export const unenrollUserFromCourse = (userId, courseId) => {
  const existingEnrollment = enrollments.find(
    (e) => e.user === userId && e.course === courseId
  );
  if (!existingEnrollment) {
    throw new Error("Enrollment does not exist.");
  }
  enrollments = enrollments.filter(
    (e) => !(e.user === userId && e.course === courseId)
  );
  return existingEnrollment;
};
