import { NextResponse } from "next/server";
import { PARTNER_DESTINATIONS } from "@/content";

export function redirectToPartner(partner: string, request: Request) {
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
