"use client";
import { useEffect, useState } from "react";
import { CalendarDaysIcon } from "lucide-react";

import { formatDate } from "@/lib/utils";

export default function DateComponent({
  date,
  includeRelative = true,
}: {
  date: string;
  includeRelative?: boolean;
}) {
  const [formattedDate, setFormattedDate] = useState("");

  useEffect(()=>{
    setFormattedDate(formatDate(date, includeRelative))
  },[date,includeRelative])

  return (
    <div className="flex items-center text-sm text-muted-foreground/75">
      <CalendarDaysIcon className="mr-2 h-4 w-4" />
      {formattedDate}
    </div>
  );
}
