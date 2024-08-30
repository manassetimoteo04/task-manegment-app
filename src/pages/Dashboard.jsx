import { useEffect } from "react";
import DashboardLayout from "../features/dashboard/DashboardLayout";

function Dashboard() {
  useEffect(() => {
    document.title = "Dashboard | See your all your assets";
  }, []);
  return (
    <main>
      <DashboardLayout />
    </main>
  );
}

export default Dashboard;
