//to show the profile of a contractor based on the id in the url
import { type PageProps } from "next";

export default async function ContractorProfilePage({ params }: PageProps<{ id: string }>) {
    const { id } = await params;

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-800 to-slate-300 p-8">
            <h1 className="text-3xl font-bold mb-4 bg-slate-800">Contractor Profile</h1>
            <p>Viewing profile for contractor with ID: {id}</p>
            {/* Additional contractor profile details would go here */}
        </div>
    );
}
//dynamic route example:
// src/app/users/[userId]/projects/[projectId]/page.tsx
// params = { userId: "42", projectId: "abc" }
