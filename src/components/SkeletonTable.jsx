import React from "react";
import { Skeleton } from "@nextui-org/react";

function SkeletonTable() {
  return (
    <div className="w-full flex flex-col gap-3 animate-pulse mt-5 bg-white px-5">
      <Skeleton className="h-5 w-4/5 rounded-lg bg-slate-200 " />
      <Skeleton className="h-3 w-4/5 rounded-lg bg-slate-200 mt-5" />
      <Skeleton className="h-3 w-4/5 rounded-lg bg-slate-200 mt-3" />
    </div>
  );
}

export default SkeletonTable;
