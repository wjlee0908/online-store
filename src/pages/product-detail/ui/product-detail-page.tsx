import { DetailSection } from "./detail-section";
import { ImageCarousel } from "./image-carousel";
import { Navigation } from "./navigation";
import { TitleSection } from "./title-section";
import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from "@tanstack/react-query";
import { PageProps } from "@shared/framework";
import { getProduct, productKey } from "@entities/product";
import { FooterSection } from "./footer-section";

export const ProductDetailPage = async (props: PageProps) => {
  const params = await props.params;

  const productId = Number(params.id);

  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: productKey.detail(productId).queryKey,
    queryFn: () => getProduct({ productId }),
  });

  return (
    <div>
      <HydrationBoundary state={dehydrate(queryClient)}>
        <ImageCarousel className="mb-10" />

        <TitleSection className="mb-10" />

        <Navigation className={`mb-15`} />
        <DetailSection />

        <FooterSection />
      </HydrationBoundary>
    </div>
  );
};
