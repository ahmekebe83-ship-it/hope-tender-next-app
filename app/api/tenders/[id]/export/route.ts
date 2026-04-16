import { NextResponse } from "next/server";

export async function POST(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;

    let body: unknown = null;
    try {
      body = await request.json();
    } catch {
      body = null;
    }

    return NextResponse.json({
      ok: true,
      message: "Export route is working.",
      tenderId: id,
      receivedBody: body,
    });
  } catch (error) {
    return NextResponse.json(
      {
        ok: false,
        message: "Failed to process export request.",
        error: error instanceof Error ? error.message : "Unknown error",
      },
      { status: 500 }
    );
  }
}
