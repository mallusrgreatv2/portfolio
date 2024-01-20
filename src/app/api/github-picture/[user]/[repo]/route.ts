import getMetaData from "url-metadata";
import { z } from "zod";
export async function GET(req: Request, { params }: { params: unknown }) {
  const paramsSchema = z.object({
    user: z.string().min(1).max(39),
    repo: z.string().min(1).max(100),
  });
  const parsed = paramsSchema.safeParse(params);
  if (!parsed.success) {
    return new Response("Bad Parameters", { status: 400 });
  }
  const { user, repo } = parsed.data;
  const data = await getMetaData(`https://github.com/${user}/${repo}`);
  return new Response(data["og:image"] as string, { status: 200 });
}
