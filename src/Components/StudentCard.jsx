import React from "react";
import Button from "./ui/Button.jsx";
import Badge from "./ui/Badges.jsx";

const StudentCard = ({ student, deleteStudent, toggleStatus }) => {
  if (!student) return <p className="error-text">No student data available.</p>;

  const { id, name, course, grade, isPresent } = student;

  const cardStyle = {
    position: "relative",
    padding: "20px",
    margin: "15px",
    borderRadius: "16px",
    background: isPresent
      ? "linear-gradient(145deg, #ffffff, #e6ffee)"
      : "linear-gradient(145deg, #ffffff, #fff5f5)",
    borderLeft: `6px solid ${isPresent ? "#4caf50" : "#ff5252"}`,
    boxShadow: "0 8px 20px rgba(0,0,0,0.06)",
    transition: "all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1)",
    overflow: "hidden"
  };

  return (
    <div
      className="student-profile-card !bg-red-500"
      style={cardStyle}
      onMouseEnter={(e) => (e.currentTarget.style.boxShadow = "0 12px 24px rgba(0,0,0,0.12)")}
      onMouseLeave={(e) => (e.currentTarget.style.boxShadow = "0 8px 20px rgba(0,0,0,0.06)")}
    >
      <div style={{ marginBottom: "12px" }}>
        <h3 style={{ margin: "0 0 4px 0", color: "#2d3436", fontSize: "1.2rem" }}>
          {name}
        </h3>
        <span style={{ fontSize: "0.85rem", color: "#636e72", fontWeight: "500" }}>
          {course} • Grade: <span style={{ color: "#0984e3" }}>{grade}%</span>
        </span>
      </div>

      <div style={{ display: "flex", gap: "8px", marginBottom: "20px" }}>
        <Badge type={isPresent ? "success" : "danger"}>
          {isPresent ? "Present" : "Absent"}
        </Badge>

        {grade >= 90 && (
          <Badge type="warning"> Scholar</Badge>
        )}
      </div>

      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", borderTop: "1px solid #eee", paddingTop: "15px" }}>
        <Button
          variant={isPresent ? "outline" : "primary"}
          onClick={() => toggleStatus(id)}
        >
          {isPresent ? "Set Absent" : "Set Present"}
        </Button>

        <Button
          variant="danger"
          onClick={() => deleteStudent(id)}
          style={{ background: "none", color: "#ff5252", border: "none", cursor: "pointer", fontWeight: "600" }}
        >
          Remove
        </Button>
      </div>
    </div>
  );
};

export default StudentCard;