//to show a proejct based on the id in the url
/* eslint-disable @typescript-eslint/no-explicit-any */
export default function ProjectPage({ params }: { params: any }) {
    const { id } = params;

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-800 to-slate-300 p-8">
            <h1 className="text-3xl font-bold mb-4 bg-slate-800">Project Details</h1>
            <p>Viewing details for project with ID: {id}</p>
            {/* Additional project details would go here */}
        </div>
    );
}