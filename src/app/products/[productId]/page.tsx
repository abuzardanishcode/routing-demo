export default async function ProductsDetails({
  params,
}: {
  params: { productId: string };
}) {
  const { productId } = await params;

  return <h1>Product Details Page {productId}</h1>
}
