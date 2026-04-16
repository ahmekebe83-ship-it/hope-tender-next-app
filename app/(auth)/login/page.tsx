export default function LoginPage() {
  return (
    <div className="min-h-screen flex items-center justify-center p-6">
      <div className="w-full max-w-md rounded-xl border bg-white p-6 space-y-4 shadow-sm">
        <div>
          <h1 className="text-2xl font-bold">Login</h1>
          <p className="text-sm text-gray-600">
            Temporary deployment-safe login page.
          </p>
        </div>

        <form className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-1">Email</label>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full rounded-lg border px-3 py-2 outline-none"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Password</label>
            <input
              type="password"
              placeholder="Enter your password"
              className="w-full rounded-lg border px-3 py-2 outline-none"
            />
          </div>

          <button
            type="button"
            className="w-full rounded-lg bg-black text-white py-2"
          >
            Sign In
          </button>
        </form>
      </div>
    </div>
  );
}
