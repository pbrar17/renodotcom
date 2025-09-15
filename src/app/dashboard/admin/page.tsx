import DashboardLayout from "@/components/dashboard/DashboardLayout";

export default function AdminDashboard() {
  return (
    <DashboardLayout role="ADMIN">
    
      <div className="min-h-screen bg-gradient-to-br from-slate-800 to-slate-300">  
  <h1 className="text-3xl font-bold mb-4">Admin Dashboard</h1>
      <p>Manage users, projects, and site settings here.</p>

      </div>
    </DashboardLayout>
  );
}
