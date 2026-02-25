import React from "react";
import Button from "./Button.jsx";
import Badge from "./Badges.jsx"; // make sure this exists

const StudentCard = ({ student, deleteStudent, toggleStatus }) => {
  if (!student) return <h2>No student data</h2>;

  return (
    <div
      className="Card"
    
  style={{
    backgroundColor: student.isPresent ? "#d4edda" : "#f8d7da", // Green if present, Red if absent

    //    background: "linear-gradient(135deg, #fdfbfb 0%, #ebedee 100%)",
    border: student.isPresent ? "1px solid #28a745" : "1px solid #dc3545",
    padding: "15px",
    margin: "10px",
    borderRadius: "10px",
    boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
    transition: "transform 0.2s ease, box-shadow 0.2s ease"
  }}
  onMouseEnter={e => e.currentTarget.style.transform = "translateY(-3px)"}
  onMouseLeave={e => e.currentTarget.style.transform = "translateY(0)"}
>
      <h3>{student.name}</h3>
      <p>{student.course}</p>
      <p>Grade: {student.grade}</p>

      <div className="badges">
        <Badge type={student.isPresent ? "success" : "danger"}>
          {student.isPresent ? "Present" : "Absent"}
        </Badge>

        {student.grade >= 90 && <Badge type="warning">Top Performer</Badge>}
      </div>

      <div className="actions">
        <Button onClick={() => toggleStatus(student.id)}>
          {student.isPresent ? "Mark Absent" : "Mark Present"}
        </Button>

        <Button variant="danger" onClick={() => deleteStudent(student.id)}>
          Delete
        </Button>
      </div>
    </div>
  );
};

export default StudentCard;