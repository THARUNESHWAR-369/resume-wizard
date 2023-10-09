"use client";

import React from "react";
import ProtectedRoute from "src/hooks/context/protected-route";
import { useRouter } from "next/navigation";
import { useAuth } from "src/hooks/context/AuthContext";

function Dashboard() {
  const { _, logOut } = useAuth();
    const router = useRouter();
  return (
    <ProtectedRoute>
      <div>Dashboard</div>
      <button
        onClick={() => {
          logOut();
          router.push("/");
        }}
        className="rounded-md bg-green-600 px-10 py-3 text-white shadow-sm hover:bg-green-700"
      >
        Logout
      </button>
    </ProtectedRoute>
  );
}

export default Dashboard;
