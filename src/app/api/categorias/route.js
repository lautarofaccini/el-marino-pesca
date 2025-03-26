import { getCategorias } from "@/libs/get-categorias";

export async function GET() {
  const categorias = await getCategorias();
  return Response.json(categorias);
}
