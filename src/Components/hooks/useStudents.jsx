import { useState, useMemo, useEffect } from "react";

export const useStudents = () => {
    const [students, setStudents] = useState(() => {
        const saved = localStorage.getItem("student-directory-data");
        if (saved) {
            try {
                return JSON.parse(saved);
            } catch (e) {
                console.error("Failed to parse students from localStorage", e);
            }
        }
        return [
            {
            id: Date.now(),
                name: "Samit shrestha",
                course: "react",
                grade: 72,
                isPresent: true,
            },
        ];
    });

    useEffect(() => {
        localStorage.setItem("student-directory-data", JSON.stringify(students));
    }, [students]);

    const [search, setSearch] = useState("");
    const [filterStatus, setFilterStatus] = useState("all");
    const [sortBy, setSortBy] = useState("name");

    const addStudent = (name, course, grade) => {
        const newStudent = {
            id: Date.now(),
            name,
            course,
            grade: Number(grade),
            isPresent: true,
        };
        setStudents((prev) => [...prev, newStudent]);
    };

    const deleteStudent = (id) => {
        setStudents((prev) => prev.filter((s) => s.id !== id));
    };

    const toggleStatus = (id) => {
        setStudents((prev) =>
            prev.map((s) => (s.id === id ? { ...s, isPresent: !s.isPresent } : s))
        );
    };

    const filteredStudents = useMemo(() => {
        return students
            .filter((s) => s.name.toLowerCase().includes(search.toLowerCase()))
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
    }, [students, search, filterStatus, sortBy]);

    return {
        students,
        filteredStudents,
        search,
        setSearch,
        filterStatus,
        setFilterStatus,
        sortBy,
        setSortBy,
        addStudent,
        deleteStudent,
        toggleStatus,
    };
};