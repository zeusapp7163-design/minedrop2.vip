import { NextResponse } from "next/server";

const DESTINATIONS: Record<string, string> = {
  "1win":
    "https://one-vv6649.com/casino/list?open=register&sub1=black",
  jetton:
    "https://jtbetlab.click/ch7v2YRRqma?click_id=md2&target_id=/&target_type=registration",
  stake: "https://stake3098.com/?c=blackDemo",
};

type RouteContext = {
  params: Promise<{ partner: string }>;
};

export async function GET(request: Request, context: RouteContext) {
  const { partner } = await context.params;
  const dest = DESTINATIONS[partner.toLowerCase()];

  if (!dest) {
    return NextResponse.redirect(new URL("/", request.url), 302);
  }

  return NextResponse.redirect(dest, 302);
}
