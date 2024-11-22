import { FC } from "react";
import { ImageCard } from "@/components";
import { cn } from "@/utils";

export const ContentCard: FC<{
  cardClassName?: string;
  topChildren?: React.ReactNode;
  children?: React.ReactNode;
  src?: string;
}> = ({ cardClassName, topChildren, children, src }) => {
  return (
    <div className="relative w-full rounded-[60px] rounded-tl-none">
      <div className="bg-brand-100 absolute -z-10 mx-2 h-full w-[calc(100%_-_1rem)] rounded-[60px] rounded-tl-none" />

      <div className="relative rounded-[65px] rounded-tl-none bg-black p-2">
        <ImageCard
          src={src}
          className={cn("h-80 border-0 shadow-none", cardClassName)}
        />
        <div className="absolute start-4 top-4">{topChildren}</div>
      </div>
      <div className="z-10 p-2 px-5">{children}</div>
    </div>
  );
};
