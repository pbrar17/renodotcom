//to show the profile of a homeowner based on the id in the url
export default function HomeOwnerProfilePage({ params }: { params: { id: string } }) {
    const { id } = params;

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-800 to-slate-300 p-8">
            <h1 className="text-3xl font-bold mb-4 bg-slate-800">Homeowner Profile</h1>
            <p>Viewing profile for homeowner with ID: {id}</p>
            {/* Additional homeowner profile details would go here */}
        </div>
    );
}