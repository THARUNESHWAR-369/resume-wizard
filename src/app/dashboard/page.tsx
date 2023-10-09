import React from "react";
import ProtectedRoute from "src/hooks/context/protected-route";

function Home() {
  return (
    <ProtectedRoute>
      <div>Dashboard</div>
    </ProtectedRoute>
  );
}

export default Home;
