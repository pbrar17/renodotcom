// const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;
// function random(){
//   console.log("Supabase Anon Key:", supabaseAnonKey);
// };
export default function Home() {
  // random();
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-800 to-slate-300">
      <div className="text-center bg-white/90 backdrop-blur-sm shadow-xl rounded-2xl p-10 max-w-lg">
        <h1 className="text-4xl font-extrabold text-gray-800 mb-4">
          Welcome to <span className="text-blue-600">Reno.ca</span>
        </h1>
        <p className="text-gray-600 mb-6">
          Connecting homeowners with trusted contractors for renovations,
          improvements, and construction projects.
        </p>
        <div className="flex gap-4 justify-center">
          <a
            href="/auth"
            className="px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition"
          >
            Get Started (Sign Up / Login)
          </a>
          {/* <a
            href="/login"
            className="px-6 py-3 bg-gray-200 text-gray-700 rounded-lg font-semibold hover:bg-gray-300 transition"
          >
            Login
          </a> */}
        </div>
      </div>
    </div>
    
  );
}
