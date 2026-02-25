import React from "react";
import StudentCard from "./Components/StudentCard.jsx";
import { useStudents } from "./Components/hooks/useStudents.jsx";
import StudentForm from "./StudentForm.jsx";
import Toolbar from "./Components/Toolbar.jsx";

const App = () => {
  const {
    filteredStudents,
    search, setSearch,
    filterStatus, setFilterStatus,
    sortBy, setSortBy,
    addStudent,
    deleteStudent,
    toggleStatus
  } = useStudents();

  return (
    <div className="min-h-screen bg-slate-50 p-6 md:p-12 lg:p-16">
      <div className="max-w-7xl mx-auto space-y-12">
        <header className="flex flex-col md:flex-row justify-between items-center md:items-end gap-6 border-b border-slate-200 pb-8">
          <div className="text-center md:text-left space-y-2">
            <h1 className="text-4xl font-extrabold text-slate-900 tracking-tight flex items-center gap-4">
              Student Directory
            </h1>
            <p className="text-gray-500">Manage students, track performance, and attendance</p>
          </div>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <aside className="lg:col-span-1 space-y-6">
            <StudentForm onAdd={addStudent} />
          </aside>

          <main className="lg:col-span-2 space-y-6">
            <Toolbar
              search={search}
              onSearch={setSearch}
              filter={filterStatus}
              onFilter={setFilterStatus}
              sort={sortBy}
              onSort={setSortBy}
            />

            {filteredStudents.length === 0 ? (
              <div className="text-center py-20 bg-white rounded-xl border-2 border-dashed">
                <p className="text-gray-400">No students found matching your criteria.</p>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
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
          </main>
        </div>
      </div>
    </div>
  );
};

export default App;