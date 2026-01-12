import Link from "next/link";
import { CalendarDaysIcon } from "lucide-react";

import { Badge } from "@/components/ui/badge";

export function ArticleLink({
  title,
  href,
  formattedDate,
  contentPreview,
  published,
  targetBlank = false,
}: {
  title: string;
  href: string;
  formattedDate: string;
  contentPreview: string;
  published: boolean;
  targetBlank?: boolean;
}) {
  return (
    <Link href={href} target={targetBlank ? "_blank" : "_self"}>
      <div className="group rounded-sm py-4 transition-all duration-300 sm:hover:cursor-pointer sm:hover:bg-popover sm:hover:px-4 sm:hover:shadow-md">
        <h3 className="mb-1 text-lg font-semibold sm:text-xl lg:mb-2">
          {title}
        </h3>
        <p className="mb-1 overflow-hidden text-ellipsis whitespace-nowrap text-muted-foreground group-hover:text-foreground lg:mb-2">
          {contentPreview}
        </p>
        <div className="flex items-center text-sm text-muted-foreground/75">
          <CalendarDaysIcon className="mr-2 h-4 w-4" />
          {formattedDate}
          {!published && <Badge className="ml-2">Draft</Badge>}
        </div>
      </div>
    </Link>
  );
}
