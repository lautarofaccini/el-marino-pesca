import { getProductos } from "@/libs/get-productos";

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const page = searchParams.get("page");
  const categoria = searchParams.get("categoria");
  const sort = searchParams.get("sort");
  const busqueda = searchParams.get("busqueda");
  const filtroMin = searchParams.get("filtroMin");
  const filtroMax = searchParams.get("filtroMax");

  const { productos, pagination } = await getProductos(
    categoria,
    page,
    sort,
    busqueda,
    filtroMin,
    filtroMax
  );
  return Response.json({ productos, pagination });
}
