import {
  createOpenGraphImage,
  openGraphContentType,
  openGraphSize,
} from "@/components/OpenGraphImage";
import { getLandingConfig } from "@/content";

export const alt = "Mine Drop 2 — играть онлайн";
export const size = openGraphSize;
export const contentType = openGraphContentType;

export default function RussianOpenGraphImage() {
  return createOpenGraphImage(getLandingConfig("ru"));
}
