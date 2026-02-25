import React, { useState } from "react";

const StudentForm = ({ onAdd }) => {
    const [formData, setFormData] = useState({ name: "", course: "", grade: "" });
    const [error, setError] = useState("");
    const handleSubmit = (e) => {
        e.preventDefault();
        if (!formData.name || !formData.course || !formData.grade) {
            setError("All fields are required");
            return;
        }
        onAdd(formData.name, formData.course, formData.grade);
        setFormData({ name: "", course: "", grade: "" });
    };

    return (
        <form onSubmit={handleSubmit} className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 space-y-4">
            <h2 className="text-xl font-semibold text-gray-800">Add New Student</h2>
            <p className="text-sm text-slate-500 font-medium">Full Name</p>
            <input
                className="w-full p-2 border-1 border-violet-500 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
                placeholder="Student Name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            />
            <p className="text-sm text-slate-500 font-medium">Course Name</p>
            <input
                className="w-full p-2 border-1 border-violet-500 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
                placeholder="Course"
                value={formData.course}
                onChange={(e) => setFormData({ ...formData, course: e.target.value })}
            />
            <p className="text-sm text-slate-500 font-medium">Grade</p>
            <input
                type="number"
                className="w-full p-2 border-1 border-violet-500 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
                placeholder="Grade"
                value={formData.grade}
                min="0"
                max="100"
                onChange={(e) => setFormData({ ...formData, grade: e.target.value })}
            />
            {error && <p className="text-red-500">{error}</p>}
            <button type="submit" className="my-2 w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition">
                Add Student
            </button>
        </form>
    );
};

export default StudentForm;