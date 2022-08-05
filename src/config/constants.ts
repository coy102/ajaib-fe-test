export const graphQLHost = process.env.NEXT_PUBLIC_GRAPHQL_HOST

const META = {
  image: '',
  rootUrl: 'https://alvaauto.com',
  title: 'Anilist - anime is love!',
  description: 'Default description',
}

export const META_TAGS = {
  ...META,
  metaTags: [
    { name: 'og:title', content: META.title },
    { name: 'og:url', content: 'https://alvaauto.com' },
    { name: 'og:image', content: '' },
    {
      name: 'og:site_name',
      content: META.title,
    },
  ],
}
