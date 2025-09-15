import { ReactNode } from "react";
import Sidebar from "./Sidebar";

interface DashboardLayoutProps {
  children: ReactNode;
  role: "ADMIN" | "CONTRACTOR" | "HOMEOWNER";
}

export default function DashboardLayout({ children, role }: DashboardLayoutProps) {
  return (
    <div className="min-h-screen flex bg-gradient-to-br from-slate-800 to-slate-300">
      <Sidebar role={role} />
      <main className="flex-1 p-8">
        {children}
      </main>
    </div>
  );
}
