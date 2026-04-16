export default function DashboardPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold">Dashboard</h1>
        <p className="text-sm text-gray-600">
          Temporary deployment-safe dashboard page.
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        <div className="rounded-xl border bg-white p-4">
          <h2 className="font-semibold">Company Vault</h2>
          <p className="text-sm text-gray-500 mt-2">
            Temporary placeholder card.
          </p>
        </div>

        <div className="rounded-xl border bg-white p-4">
          <h2 className="font-semibold">Tenders</h2>
          <p className="text-sm text-gray-500 mt-2">
            Temporary placeholder card.
          </p>
        </div>

        <div className="rounded-xl border bg-white p-4">
          <h2 className="font-semibold">Compliance</h2>
          <p className="text-sm text-gray-500 mt-2">
            Temporary placeholder card.
          </p>
        </div>
      </div>
    </div>
  );
}
