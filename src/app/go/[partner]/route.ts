import { NextResponse } from "next/server";
import { PARTNER_DESTINATIONS } from "@/content";

type RouteContext = {
  params: Promise<{ partner: string }>;
};

export async function GET(request: Request, context: RouteContext) {
  const { partner } = await context.params;
  const dest = PARTNER_DESTINATIONS[partner.toLowerCase()];

  if (!dest) {
    return NextResponse.redirect(new URL("/", request.url), 302);
  }

  return NextResponse.redirect(dest, 302);
}
