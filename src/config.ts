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
      { text: "소개글", link: "introduction" },
    ],
    Rules: [
      {	text: "규칙", link: "팀-규칙"	},

      {	text: "커밋", link: "커밋-컨벤션"	},
      {	text: "코드", link: "코드-컨벤션"	},
    ],
    "Scrum log": [
	  { text: "킥오프", link: "킥오프" },
      { text: "22-12-05", link: "22-12-05" },
      { text: "22-12-06", link: "22-12-06" },
      { text: "22-12-07", link: "22-12-07" },
	  { text: "22-12-08", link: "22-12-08" },
      { text: "22-12-09", link: "22-12-09" },
    ],
  },
};
