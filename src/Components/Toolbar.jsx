import React from "react";

const Toolbar = ({ search, onSearch, filter, onFilter, sort, onSort }) => {
    return (
        <div className="flex flex-col sm:flex-row gap-4 bg-white p-4 rounded-2xl shadow-card border border-slate-100">
            <div className="flex-1 relative group">
                <input
                    type="text"
                    placeholder="Search by name..."
                    className="w-full pl-10 pr-10 py-2.5 bg-slate-50 border border-slate-200 rounded-xl focus:ring-4 focus:ring-violet-500/10 focus:border-violet-500 outline-none transition-all placeholder:text-slate-400 font-medium"
                    value={search}
                    onChange={(e) => onSearch(e.target.value)}
                />
                {search && (
                    <button
                        onClick={() => onSearch("")}
                        className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
                        title="Clear search"
                    >
                        ✕
                    </button>
                )}
            </div>

            <div className="flex gap-2">
                <div className="relative group min-w-[140px]">
                    <select
                        className="w-full appearance-none pl-4 pr-10 py-2.5 bg-slate-50 border border-slate-200 rounded-xl focus:ring-4 focus:ring-violet-500/10 focus:border-violet-500 outline-none transition-all font-bold text-slate-700 cursor-pointer"
                        value={filter}
                        onChange={(e) => onFilter(e.target.value)}
                    >
                        <option value="all">All Status</option>
                        <option value="present">Present</option>
                        <option value="absent">Absent</option>
                    </select>
                    <div className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none group-hover:text-violet-500 transition-colors">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                        </svg>
                    </div>
                </div>

                <div className="relative group min-w-[140px]">
                    <select
                        className="w-full appearance-none pl-4 pr-10 py-2.5 bg-slate-50 border border-slate-200 rounded-xl focus:ring-4 focus:ring-violet-500/10 focus:border-violet-500 outline-none transition-all font-bold text-slate-700 cursor-pointer"
                        value={sort}
                        onChange={(e) => onSort(e.target.value)}
                    >
                        <option value="name">By Name</option>
                        <option value="grade">By Grade</option>
                    </select>
                </div>
            </div>
        </div>
    );
};

export default Toolbar;