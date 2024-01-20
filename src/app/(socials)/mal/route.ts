import { redirect } from "next/navigation";

export async function GET() {
  return redirect("https://myanimelist.net/profile/mallusrgreat");
}
