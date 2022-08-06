export const GENDER_OPTIONS = ['All', 'Female', 'Male']

const META = {
  image: '',
  title: 'Ajaib fe test',
  description: 'Default description',
}

export const META_TAGS = {
  ...META,
  metaTags: [
    { name: 'og:title', content: META.title },
    { name: 'og:image', content: '' },
    {
      name: 'og:site_name',
      content: META.title,
    },
  ],
}
