export default function AssetsPage() {
  const assets: any[] = [];

  return (
    <div className="p-6 space-y-6">
      <div>
        <h1 className="text-2xl font-bold">Assets</h1>
        <p className="text-sm text-gray-600">
          Asset manager page is loading correctly.
        </p>
      </div>

      <div className="rounded-xl border bg-white p-4">
        <h2 className="text-lg font-semibold mb-4">Available Assets</h2>

        {assets.length === 0 ? (
          <p className="text-sm text-gray-500">No assets found yet.</p>
        ) : (
          <div className="grid md:grid-cols-3 gap-4">
            {assets.map((a: any) => (
              <div key={a.id ?? Math.random()} className="rounded-lg border p-4">
                <div className="font-medium">{a.name ?? "Unnamed Asset"}</div>
                <div className="text-sm text-gray-500">{a.type ?? "Unknown Type"}</div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
