import Head from "next/head";
import { FC } from "react";

type Props = {
  title?: string;
  description?: string;
  viewportContent?: string;
  robotsContent?:
    | "index, follow"
    | "noindex, nofollow"
    | "noindex, follow"
    | "index, nofollow";
  wallpaperUrl?: string;
  pageUrl?: string;
};

export const SEO: FC<Props> = ({
  title = "Go Score!",
  description = "Salve as pontuações dos jogos com seus amigos",
  viewportContent = "width=device-width, initial-scale=1.0",
  robotsContent = "index, follow",
  wallpaperUrl = `${process.env.VERCEL_URL}/images/go-score-wallpaper.png`,
  pageUrl = process.env.VERCEL_URL,
}) => {
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="viewport" content={viewportContent} />
      <meta name="robots" content={robotsContent} />
      <meta property="og:title" content={title} />
      <meta property="og:type" content="website" />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={wallpaperUrl} />
      <meta property="og:url" content={pageUrl} />
      <meta property="og:site_name" content="Go Score!" />
      <meta name="twitter:card" content="Go Score!" />
      <meta name="twitter:url" content={pageUrl} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={wallpaperUrl} />
    </Head>
  );
};
