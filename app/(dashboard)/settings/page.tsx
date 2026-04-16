export default function SettingsPage() {
  const logs: any[] = [];

  return (
    <div className="p-6 space-y-6">
      <div>
        <h1 className="text-2xl font-bold">Settings</h1>
        <p className="text-sm text-gray-600">
          Settings page is loading correctly.
        </p>
      </div>

      <div className="rounded-xl border bg-white p-4">
        <h2 className="text-lg font-semibold mb-4">Activity Logs</h2>

        {logs.length === 0 ? (
          <p className="text-sm text-gray-500">No activity logs yet.</p>
        ) : (
          <div className="space-y-3">
            {logs.map((l: any, index: number) => (
              <div
                key={l?.id ?? index}
                className="rounded-lg border p-3 text-sm"
              >
                <div className="font-medium">{l?.action ?? "Unknown action"}</div>
                <div className="text-gray-500">{l?.details ?? "No details"}</div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
