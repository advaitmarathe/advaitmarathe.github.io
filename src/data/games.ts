export interface Game {
  slug: string;
  title: string;
  description: string;
  status: "coming-soon" | "playable";
  url?: string;
}

export const games: Game[] = [
  {
    slug: "cluepy",
    title: "cluepy",
    description: "",
    status: "coming-soon",
  },
  {
    slug: "neighbors",
    title: "neighbors",
    description: "",
    status: "playable",
    url: "https://neighbors.advaitmarathe.com",
  },
  {
    slug: "pathways",
    title: "pathways",
    description: "",
    status: "coming-soon",
  },
];
