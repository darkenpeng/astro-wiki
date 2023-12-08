export const SITE = {
  title: "mini-board Wiki",
  description: "mini board team wiki",
  defaultLanguage: "en_US",
};

export const OPEN_GRAPH = {
  image: {
    src: "https://github.com/withastro/astro/blob/main/assets/social/banner-minimal.png?raw=true",
    alt:
      "astro logo on a starry expanse of space," +
      " with a purple saturn-like planet floating in the right foreground",
  },
  twitter: "astrodotbuild",
};

// This is the type of the frontmatter you put in the docs markdown files.
export type Frontmatter = {
  title: string;
  description: string;
  layout: string;
  image?: { src: string; alt: string };
  dir?: "ltr" | "rtl";
  ogLocale?: string;
  lang?: string;
};

export const KNOWN_LANGUAGES = {
  Korean: "ko",
} as const;
export const KNOWN_LANGUAGE_CODES = Object.values(KNOWN_LANGUAGES);

export const GITHUB_EDIT_URL = `https://github.com/withastro/astro/tree/main/examples/docs`;

export const COMMUNITY_INVITE_URL = `https://astro.build/chat`;

// See "Algolia" section of the README for more information.
export const ALGOLIA = {
  indexName: "XXXXXXXXXX",
  appId: "XXXXXXXXXX",
  apiKey: "XXXXXXXXXX",
};

export type Sidebar = Record<
  typeof KNOWN_LANGUAGE_CODES[number],
  Record<string, { text: string; link: string }[]>
>;
export const SIDEBAR: Sidebar = {
  ko: {
    '': [
      { text: "landing", link: "introduction" },
    ],
    "log": [
      { text: "231113", link: "231113" },
      { text: "231115", link: "231115" },
      { text: "231116", link: "231116" },
      { text: "231117", link: "231117" },
      { text: "231120", link: "231120" },
      { text: "231122", link: "231122" },
      { text: "231127", link: "231127" },
      { text: "231128", link: "231128" },
      { text: "231130", link: "231130" },
      { text: "231201", link: "231201" },
      { text: "231204", link: "231204" },
      { text: "231205", link: "231205" },
      { text: "231207", link: "231207" },

    ],
  },
};
