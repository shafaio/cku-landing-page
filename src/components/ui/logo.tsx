import { Media } from "@/type";
import Image from "next/image";

const Logo = (props: Media) => {
  return (
    <div className="flex items-center">
      <div className="flex items-center mr-3">
        <div className="flex flex-col gap-1">
          {props?.url && props.width && props.height ? (
            <Image
              src={`${process.env.NEXT_PUBLIC_BASE_API}${props.url}`}
              alt={props.alternativeText ?? "Image"}
              width={props.width}
              height={props.height}
            />
          ) : (
            <div className="text-sm text-gray-400">Image not available</div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Logo;
