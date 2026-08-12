import { NextResponse } from "next/server";
import {
  AFFILIATE_LINKS_ENABLED,
  PARTNER_DESTINATIONS,
} from "@/content";

export function redirectToPartner(partner: string, request: Request) {
  if (!AFFILIATE_LINKS_ENABLED) {
    return NextResponse.json(
      { error: "Partner links are temporarily unavailable." },
      {
        status: 410,
        headers: { "Cache-Control": "no-store" },
      },
    );
  }

  const destination = PARTNER_DESTINATIONS[partner];

  if (!destination) {
    return NextResponse.redirect(new URL("/", request.url), 302);
  }

  const url = new URL(destination);
  const clickId = new URL(request.url).searchParams.get("click_id");

  if (partner === "jetton" && clickId) {
    url.searchParams.set("click_id", clickId);
  }

  return NextResponse.redirect(url, 302);
}
