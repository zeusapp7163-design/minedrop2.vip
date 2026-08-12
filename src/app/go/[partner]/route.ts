import { redirectToPartner } from "@/lib/partnerRedirect";

type RouteContext = {
  params: Promise<{ partner: string }>;
};

export async function GET(request: Request, context: RouteContext) {
  const { partner } = await context.params;
  return redirectToPartner(partner.toLowerCase(), request);
}
