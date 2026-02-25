import React ,{useState} from "react";
import "./App.css";
import Input from "./Components/Input.jsx";
import Button from "./Components/Button.jsx";
import StudentCard from "./Components/StudentCard.jsx";




function App() {
  const [students, setStudents] = useState([
    {
      id: Date.now(),
      name: "Samit Shrestha",
      course: "REACT JS",
      grade: 88,
      isPresent: true,
    },
  ]);



    const [name, setName] = useState("");
  const [course, setCourse] = useState("");
  const [grade, setGrade] = useState("");
  const [search, setSearch] = useState("");
  const [filterStatus, setFilterStatus] = useState("all");
  const [sortBy, setSortBy] = useState("name");



   const addStudent = (e) => {
    e.preventDefault();
    if (!name || !course || !grade) return;

    const newStudent = {
      id: Date.now(),
      name,
      course,
      grade: Number(grade),
      isPresent: true,
    };

    setStudents([...students, newStudent]);
    setName("");
    setCourse("");
    setGrade("");
  };




   const deleteStudent = (id) => {
    setStudents(students.filter((s) => s.id !== id));
  };

  const toggleStatus = (id) => {
    setStudents(
      students.map((s) =>
        s.id === id ? { ...s, isPresent: !s.isPresent } : s
      )
    );
  };








    const filteredStudents = students
    .filter((s) =>
      s.name.toLowerCase().includes(search.toLowerCase())
    )
    .filter((s) =>
      filterStatus === "all"
        ? true
        : filterStatus === "present"
        ? s.isPresent
        : !s.isPresent
    )
    .sort((a, b) =>
      sortBy === "name"
        ? a.name.localeCompare(b.name)
        : b.grade - a.grade
    );





     return (
    <div className="container">
      <header className="header">
        <h1>Student Directory</h1>
        <p className="subtitle">
          Manage students, track performance, and attendance
        </p>
      </header>





      
      <div className="toolbar">
        <Input
          label="Search"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search by name"
        />





        <select
          value={filterStatus}
          onChange={(e) => setFilterStatus(e.target.value)}
        >
          <option value="all">All</option>
          <option value="present">Present</option>
          <option value="absent">Absent</option>
        </select>








 <select
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
        >
          <option value="name">Sort by Name</option>
          <option value="grade">Sort by Grade</option>
        </select>
      </div>

      




      <form className="form" onSubmit={addStudent}>
        <Input
          label="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Student name"
        />





         <Input
          label="Course"
          value={course}
          onChange={(e) => setCourse(e.target.value)}
          placeholder="Course"
           />
        <Input
          label="Grade"
          type="number"
          value={grade}
          onChange={(e) => setGrade(e.target.value)}
          placeholder="Grade"
        />
        <Button type="submit">Add Student</Button>
      </form>

    
      {students.length === 0 ? (
        <p className="empty">No students yet. Add one!</p>
      ) : filteredStudents.length === 0 ? (
        <p className="empty">No results found.</p>
      ) : (
        <div className="grid">
          {filteredStudents.map((student) => (
            <StudentCard
              key={student.id}
              student={student}
              deleteStudent={deleteStudent}
              toggleStatus={toggleStatus}
                   />
          ))}
        </div>
      )}
    </div>
  );
}

export default App;




