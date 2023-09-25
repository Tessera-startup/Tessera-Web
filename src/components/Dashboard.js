import Link from "next/link";
import React from "react";

const Dashboard = ({ children }) => {
  return (
    <div className="flex container mx-auto relative z-10">
      <div className="text-white w-64 min-h-screen p-4 mt-20">
        <ul className="space-y-2">
          <li>
            <Link href="/admin">Dashboard</Link>
          </li>
          <li>
            <Link href="/admin/create-event">Create An Event</Link>
          </li>
        </ul>
      </div>
      <div className="flex-1 p-4">
        <div className="container mx-auto">{children}</div>
      </div>
    </div>
  );
};

export default Dashboard;
