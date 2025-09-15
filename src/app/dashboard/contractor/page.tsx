import DashboardLayout from "@/components/dashboard/DashboardLayout";

export default function ContractorDashboard() {
  return (
    <DashboardLayout role="CONTRACTOR" >
        {/* <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-800 to-slate-300"></div> */}
        <div className="min-h-screen bg-gradient-to-br from-slate-800 to-slate-300">
            <h1 className="text-3xl font-bold mb-4 bg-slate-800">Contractor Dashboard</h1>
            <p>View your bids, active projects, and profile information.</p>
        </div>
      {/* <h1 className="text-3xl font-bold mb-4 bg-slate-500">Contractor Dashboard</h1>
      <p>View your bids, active projects, and profile information.</p> */}
    </DashboardLayout>
  );
}
