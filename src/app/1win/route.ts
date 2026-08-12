import { redirectToPartner } from "@/lib/partnerRedirect";

export function GET(request: Request) {
  return redirectToPartner("1win", request);
}
