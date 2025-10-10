export default {
  /**
   * Nextra metadata configuration
   * @see https://nextra.vercel.app/docs/metadata
   */
  metadata: {
    title: {
      default: 'FiveM Developer JP',
      template: '%s | FiveM Developer JP',
    },
    description: 'FiveM開発者向け日本語ドキュメント',
    metadataBase: new URL('https://fivemdevjp.vercel.app/'),
    keywords: [
      'FiveM',
      'Developer',
      'Documentation',
      'JavaScript',
      'Lua',
      'Game Development',
      'Overextended',
      'OX',
    ],
    generator: 'Next.js',
    applicationName: 'FiveM Developer JP',
    appleWebApp: {
      title: 'FiveM Developer JP',
    },
    openGraph: {
      // https://github.com/vercel/next.js/discussions/50189#discussioncomment-10826632
      url: './',
      siteName: 'FiveM Developer JP',
      locale: 'ja_JP',
      type: 'website',
    },
    other: {
      'msapplication-TileColor': '#fff',
    },
    twitter: {
      site: 'https://next-app-nextra-template.vercel.app/',
    },
    alternates: {
      // https://github.com/vercel/next.js/discussions/50189#discussioncomment-10826632
      canonical: './',
    },
  },
  /**
   * Nextra Layout component configuration
   */
  nextraLayout: {
    docsRepositoryBase: 'https://github.com/your-username/fivemdevjp/tree/main/app/docs/',
    sidebar: {
      defaultMenuCollapseLevel: 1,
    },
  },
  /**
   * Main Layout head configuration
   */
  head: {
    mantine: {
      defaultColorScheme: 'dark',
      nonce: '8IBTHwOdqNKAWeKl7plt8g==',
    },
  },
  /**
   * GitHub API configuration
   * @see https://docs.github.com/en/rest/reference/repos#releases
   *
   * The GitHub API token is optional for rate limiting.
   * If you want to use it, create a personal access token with the `repo` scope.
   *
   * This information is used to fetch the releases from the GitHub API.
   */
  gitHub: {
    repo: 'your-username/fivemdevjp',
    apiUrl: 'https://api.github.com',
    releasesUrl: 'https://api.github.com/repos/your-username/fivemdevjp/releases',
  },

  /**
   * Release notes configuration
   * This is used to link the release notes in the app.
   */
  releaseNotes: {
    url: 'https://github.com/your-username/fivemdevjp/releases',
    maxReleases: 10,
  },

  /**
   * Search configuration (for pagefind)
   * This is used to configure the search engine API.
   * @see /app/api/search/route.ts
   */
  search: {
    queryKeyword: 'q',
    minQueryLength: 3,
    limitKeyword: 'limit',
    defaultMaxResults: 5,
    excerptLengthKeyword: 'excerptLength',
    defaultExcerptLength: 30,
    defaultLanguage: 'ja',
  },
} as const;
