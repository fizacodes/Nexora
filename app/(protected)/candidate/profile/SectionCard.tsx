import { ChevronRight } from "lucide-react";
import { ReactNode } from "react";
import Link from "next/link";

type Props = {
  title: string;
  subtitle?: string;
  icon: ReactNode;
  href:string;
  onClick?: () => void;
};

export default function SectionCard({
  title,
  subtitle,
  icon,
  href,
}: Props) {
  return (
    <Link href={href} className="block">
    <div
      className="
      bg-white
      border
      rounded-xl
      text-background
      p-6
      mt-4
      cursor-pointer
      hover:border-blue-600
      hover:shadow-sm
      transition-all
      duration-200"
    >
      <div className="flex justify-between  items-center">

        <div className="flex gap-5 items-center">

          <div className="text-blue-600">
            {icon}
          </div>

          <div>

            <h3 className="text-xl font-semibold">
              {title}
            </h3>

            {subtitle && (
              <p className="text-sm text-gray-500 mt-1">
                {subtitle}
              </p>
            )}

          </div>

        </div>

        <ChevronRight
          size={22}
          className="text-gray-400"
        />

      </div>
    </div>
    </Link>
  );
}