//to show a proejct based on the id in the url
export default function ProjectPage({ params }: { params: { id: string } }) {
    const { id } = params;

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-800 to-slate-300 p-8">
            <h1 className="text-3xl font-bold mb-4 bg-slate-800">Project Details</h1>
            <p>Viewing details for project with ID: {id}</p>
            {/* Additional project details would go here */}
        </div>
    );
}