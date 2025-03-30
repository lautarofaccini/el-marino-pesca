import { getProductos } from "@/libs/get-productos";

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const page = searchParams.get("page");
  const categoria = searchParams.get("categoria");
  const sort = searchParams.get("sort");
  const busqueda = searchParams.get("busqueda");

  const { productos, pagination } = await getProductos(
    categoria,
    page,
    sort,
    busqueda
  );
  return Response.json({ productos, pagination });
}
