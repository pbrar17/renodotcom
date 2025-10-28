interface SidebarProps {
  role: "ADMIN" | "CONTRACTOR" | "HOMEOWNER";
}

export default function Sidebar({ role }: SidebarProps) {
  let links: string[] = [];

  if (role === "ADMIN") {
    links = ["Dashboard", "Users", "Projects", "Settings"];
  } else if (role === "CONTRACTOR") {
    links = ["My Bids", "Projects", "Profile"];
  } else if (role === "HOMEOWNER") {
    links = ["My Projects", "Find Contractors", "Profile"];
  }

  return (
    <aside className="w-64 bg-slate-500 shadow-md p-6">
      <h2 className="text-xl font-bold mb-6">{role} Dashboard</h2>
      <ul className="flex flex-col gap-4">
        {links.map((link) => (
          <li key={link} className="hover:text-blue-600 cursor-pointer">
            {link}
          </li>
        ))}
      </ul>
    </aside>
  );
}


