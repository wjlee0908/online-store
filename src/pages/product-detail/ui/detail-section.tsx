import Image from "next/image";
import { ContentWrapper } from "./content-wrapper";

interface DetailSectionProps {
  className?: string;
}

export const DetailSection = ({ className }: DetailSectionProps) => {
  return (
    <ContentWrapper className={className}>
      <Image
        src="https://dummyimage.com/768x6000.png"
        alt="detail"
        width={768}
        height={6000}
      />
    </ContentWrapper>
  );
};
