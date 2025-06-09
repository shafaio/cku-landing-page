import Image from "next/image";

// interface LogoProps {
//   variant?: "light" | "dark";
// }

const Logo = () =>
  // { variant = "dark" }: LogoProps
  {
    // const textColor = variant === 'light' ? 'text-white' : 'text-gray-900';
    // const primaryColor = variant === 'light' ? 'text-blue-300' : '#4B69B9';
    // const secondaryColor = variant === 'light' ? 'text-teal-300' : '#42D4A5';

    return (
      <div className="flex items-center">
        <div className="flex items-center mr-3">
          <div className="flex flex-col gap-1">
            <Image src="/Logo_CKU.png" alt="" height={60} width={227} />
          </div>
        </div>
      </div>
    );
  };

export default Logo;
