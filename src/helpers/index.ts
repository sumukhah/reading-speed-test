export const ROOT: string = "https://sumukhah.github.io/speed-read-json/";

interface topics {
  [key: string]: {
    api: string;
    api_key?: string | null;
  };
}

export const availableTopics: topics = {
  random: { api: ROOT + "random.json" },
  article: { api: ROOT + "articles.json" },
};

export const availableFontFamily: string[] = [
  "arial",
  "times new roman",
  "geneva",
  "verdana",
];
