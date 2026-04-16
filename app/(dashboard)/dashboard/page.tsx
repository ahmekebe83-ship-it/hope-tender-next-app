import type { ReactNode } from "react";

export default function DashboardLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <div className="min-h-screen bg-[#f1f5f9]">
      <header className="border-b bg-white px-6 py-4">
        <h1 className="text-xl font-bold">Hope Tender Proposal Generator</h1>
      </header>

      <main className="p-6">{children}</main>
    </div>
  );
}
