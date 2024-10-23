import { notFound } from "next/navigation";
export default async function ReviewId({
  params,
}: {
  params: {
    productId: string;
    reviewId: string;
  };
}) {
  const { productId, reviewId } = await params;

  if(parseInt(reviewId)>100){
    notFound();
  }

  return (
    <h1>
      Review {reviewId} for product {productId}
    </h1>
  );
}
