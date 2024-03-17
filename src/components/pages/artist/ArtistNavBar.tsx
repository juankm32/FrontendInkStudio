"use client";

import DocDelimiter from "@/components/ui/DocDelimiter";
import Separator from "@/components/ui/Separator";
import type { ArtistContent } from "@/content/functions/types";
import { fourthTitle } from "@/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import type { FC } from "react";

interface Props {
  content: ArtistContent["nav"];
  id: string;
}

const ArtistNavBar: FC<Props> = ({ content, id }) => {
  const pathname = usePathname();

  return (
    <div className="w-full">
      <DocDelimiter>
        <nav className="w-full flex gap-5 text-center overflow-x-auto lg:justify-around">
          {content.map(({ id: navId, href, label }) => {
            const url = `${href.start}/${id}${href.end ? `/${href.end}` : ""}`;

            return (
              <Link
                key={navId}
                href={url}
                className={`${fourthTitle} ${
                  url === pathname ? "text-primary-accent" : ""
                } uppercase`}
              >
                {label}
              </Link>
            );
          })}
        </nav>
      </DocDelimiter>
      <Separator className="h-0.5 w-full bg-gradient-to-r from-primary-fromGradient via-primary-toGradient via-30% to-secondary-toGradient" />
    </div>
  );
};

export default ArtistNavBar;
