export default async function ReviewId({
  params,
}: {
  params: {
    productId: string;
    reviewId: string;
  };
}) {
  const { productId, reviewId } = await params;

  return (
    <h1>
      Review {reviewId} for product {productId}
    </h1>
  );
}
