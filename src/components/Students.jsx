// src/components/Students.js
import React from "react";
import Student from "./Student";

const Students = () => {
  const students = [
    { name: "Alice", department: "Science", finalGrade: 85, status: "Pass" },
    { name: "Bob", department: "Arts", finalGrade: 75, status: "Pass" },
    { name: "Charlie", department: "Commerce", finalGrade: 90, status: "Pass" },
    { name: "David", department: "Science", finalGrade: 70, status: "Pass" },
    { name: "Eve", department: "Arts", finalGrade: 60, status: "Pass" },
    { name: "Frank", department: "Commerce", finalGrade: 65, status: "Pass" },
    { name: "Grace", department: "Science", finalGrade: 95, status: "Pass" },
    { name: "Heidi", department: "Arts", finalGrade: 80, status: "Pass" },
    { name: "Ivan", department: "Commerce", status: "Fail" },
    { name: "Judy", department: "Science", status: "Fail" },
  ];

  return (
    <div>
      <h1>Students List</h1>
      <table>
        <thead>
          <tr>
            <th>No.</th>
            <th>Student Names</th>
            <th>Department</th>
            <th>Final Grade</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {students.map((student, index) => (
            <Student key={index} student={student} index={index + 1} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Students;
