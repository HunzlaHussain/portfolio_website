"use client";

import Image from "next/image";
import { useState } from "react";
import { cn } from "@/lib/utils";

type SafeImageProps = {
  src: string;
  alt: string;
  width: number;
  height: number;
  className?: string;
  sizes?: string;
  priority?: boolean;
};

export function SafeImage({
  src,
  alt,
  width,
  height,
  className,
  sizes,
  priority,
}: SafeImageProps) {
  const [failed, setFailed] = useState(false);

  if (failed) {
    return (
      <div
        className={cn(
          "flex w-full max-w-full min-w-0 items-center justify-center bg-gradient-to-br from-zen-primary/30 to-transparent text-sm text-zen-muted",
          className,
        )}
        style={{ aspectRatio: `${width} / ${height}` }}
      >
        Image
      </div>
    );
  }

  return (
    <Image
      src={src}
      alt={alt}
      width={width}
      height={height}
      className={className}
      sizes={sizes}
      priority={priority}
      onError={() => setFailed(true)}
    />
  );
}
