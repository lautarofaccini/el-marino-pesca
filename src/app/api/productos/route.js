import { getProductos } from "@/libs/get-productos";

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const page = searchParams.get("page");

  const { productos, pagination } = await getProductos(undefined, page);
  return Response.json({ productos, pagination });
}
