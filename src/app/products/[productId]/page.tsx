import { Metadata } from "next";

type Props = {
  params: {
    productId: string;
  };
};

export const generateMetadata = async ({ params }: Props): Promise<Metadata> => {
  // Awaiting an example async operation for `title`
  const title = await Promise.resolve(`Product ${params.productId}`);

  return {
    title,
  };
};

export default async function ProductDetails({ params }: Props) {
  // Ensure `params` is awaited
  const { productId } = await params;

  return <h1>Product Details Page {productId}</h1>;
}
