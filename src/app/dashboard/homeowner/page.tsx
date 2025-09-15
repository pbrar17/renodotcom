import DashboardLayout from "@/components/dashboard/DashboardLayout";

export default function HomeownerDashboard() {
  return (
    <DashboardLayout role="HOMEOWNER">
    <div className="min-h-screen bg-gradient-to-br from-slate-800 to-slate-300">  <h1 className="text-3xl font-bold mb-4">Homeowner Dashboard</h1>
      <p>Track your projects, find contractors, and manage your profile.</p></div>
     
    </DashboardLayout>
  );
}
