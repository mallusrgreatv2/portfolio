"use client";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import Image from "next/image";
import { Button } from "./ui/button";
import { BsBoxArrowUpRight } from "react-icons/bs";
import Link from "next/link";
import { Skeleton } from "./ui/skeleton";
import { cn } from "@/lib/utils";
export default function GithubCard(options: {
  repo: string;
  className?: string;
}) {
  const { data: image, isLoading: loading } = useQuery({
    queryKey: [`image-${options.repo}`],
    queryFn: () =>
      axios.get(`/api/github-picture/${options.repo}`).then((a) => a.data),
  });
  if (!image || loading)
    return (
      <div className={cn("mt-5 w-fit border p-5", options.className)}>
        <Skeleton className="m-2 h-[150px] w-[300px]" />
        <Button className="m-2 w-[300px]">Loading...</Button>
      </div>
    );
  return (
    <div className={cn("mt-5 w-fit border p-5", options.className)}>
      <Image
        src={image}
        alt="Image"
        width={1200 / 4}
        height={600 / 4}
        className="m-2"
      />
      <Link href={`https://github.com/${options.repo}`} target="_blank">
        <Button className="m-2 w-[300px] hover:bg-sky-600">
          <BsBoxArrowUpRight />
        </Button>
      </Link>
    </div>
  );
}
