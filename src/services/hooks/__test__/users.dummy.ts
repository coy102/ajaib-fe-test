export const expectedResultPage1 = {
  response: {
    results: [
      {
        gender: 'male',
        name: {
          title: 'Mr',
          first: 'Tobias',
          last: 'Andersen',
        },
        location: {
          street: {
            number: 4971,
            name: 'Engvangen',
          },
          city: 'København N',
          state: 'Danmark',
          country: 'Denmark',
          postcode: 16369,
          coordinates: {
            latitude: '-39.3571',
            longitude: '-42.3107',
          },
          timezone: {
            offset: '+9:00',
            description: 'Tokyo, Seoul, Osaka, Sapporo, Yakutsk',
          },
        },
        email: 'tobias.andersen@example.com',
        login: {
          uuid: 'e0e72621-91d4-4744-87c1-d2597aff8e68',
          username: 'silverbutterfly863',
          password: 'iron',
          salt: 'Lg2sCrqU',
          md5: 'c12f83f0208aa3e34e876058ca45b2f1',
          sha1: '49f9a4ef28d0e2e02af4e9140e2565ebae1ad8bf',
          sha256:
            '3c1228bada12f77d1f8a51a604d0281b46fd73fe3a719a232add8cb79dd47539',
        },
        dob: {
          date: '1953-01-21T19:58:56.902Z',
          age: 69,
        },
        registered: {
          date: '2008-08-28T18:00:37.203Z',
          age: 13,
        },
        phone: '46995935',
        cell: '50985461',
        id: {
          name: 'CPR',
          value: '210153-3314',
        },
        picture: {
          large: 'https://randomuser.me/api/portraits/men/57.jpg',
          medium: 'https://randomuser.me/api/portraits/med/men/57.jpg',
          thumbnail: 'https://randomuser.me/api/portraits/thumb/men/57.jpg',
        },
        nat: 'DK',
      },
    ],
    info: {
      seed: 'f18558be87021afc',
      results: 10,
      page: 1,
      version: '1.4',
    },
  },
  error: '',
  loading: false,
}

export const defaultParam = {
  page: 1,
  results: 1,
}

export const defaultConfig = {
  method: 'GET',
  url: '/api/?results=1&page=1',
}

export const expectedResultGender = {
  response: {
    results: [
      {
        gender: 'female',
        name: {
          title: 'Mrs',
          first: 'Tobias',
          last: 'Andersen',
        },
        location: {
          street: {
            number: 4971,
            name: 'Engvangen',
          },
          city: 'København N',
          state: 'Danmark',
          country: 'Denmark',
          postcode: 16369,
          coordinates: {
            latitude: '-39.3571',
            longitude: '-42.3107',
          },
          timezone: {
            offset: '+9:00',
            description: 'Tokyo, Seoul, Osaka, Sapporo, Yakutsk',
          },
        },
        email: 'tobias.andersen@example.com',
        login: {
          uuid: 'e0e72621-91d4-4744-87c1-d2597aff8e68',
          username: 'silverbutterfly863',
          password: 'iron',
          salt: 'Lg2sCrqU',
          md5: 'c12f83f0208aa3e34e876058ca45b2f1',
          sha1: '49f9a4ef28d0e2e02af4e9140e2565ebae1ad8bf',
          sha256:
            '3c1228bada12f77d1f8a51a604d0281b46fd73fe3a719a232add8cb79dd47539',
        },
        dob: {
          date: '1953-01-21T19:58:56.902Z',
          age: 69,
        },
        registered: {
          date: '2008-08-28T18:00:37.203Z',
          age: 13,
        },
        phone: '46995935',
        cell: '50985461',
        id: {
          name: 'CPR',
          value: '210153-3314',
        },
        picture: {
          large: 'https://randomuser.me/api/portraits/men/57.jpg',
          medium: 'https://randomuser.me/api/portraits/med/men/57.jpg',
          thumbnail: 'https://randomuser.me/api/portraits/thumb/men/57.jpg',
        },
        nat: 'DK',
      },
    ],
    info: {
      seed: 'f18558be87021afc',
      results: 10,
      page: 1,
      version: '1.4',
    },
  },
  error: '',
  loading: false,
}

export const paramGender = {
  page: 1,
  results: 1,
  gender: 'Female',
}

export const configGender = {
  method: 'GET',
  url: '/api/?results=1&page=1&gender=female',
}

export const expectedResultKeyword = {
  response: {
    results: [
      {
        gender: 'male',
        name: {
          title: 'Mrs',
          first: 'Muktit',
          last: 'Muktit',
        },
        location: {
          street: {
            number: 4971,
            name: 'Engvangen',
          },
          city: 'København N',
          state: 'Danmark',
          country: 'Denmark',
          postcode: 16369,
          coordinates: {
            latitude: '-39.3571',
            longitude: '-42.3107',
          },
          timezone: {
            offset: '+9:00',
            description: 'Tokyo, Seoul, Osaka, Sapporo, Yakutsk',
          },
        },
        email: 'tobias.andersen@example.com',
        login: {
          uuid: 'e0e72621-91d4-4744-87c1-d2597aff8e68',
          username: 'silverbutterfly863',
          password: 'iron',
          salt: 'Lg2sCrqU',
          md5: 'c12f83f0208aa3e34e876058ca45b2f1',
          sha1: '49f9a4ef28d0e2e02af4e9140e2565ebae1ad8bf',
          sha256:
            '3c1228bada12f77d1f8a51a604d0281b46fd73fe3a719a232add8cb79dd47539',
        },
        dob: {
          date: '1953-01-21T19:58:56.902Z',
          age: 69,
        },
        registered: {
          date: '2008-08-28T18:00:37.203Z',
          age: 13,
        },
        phone: '46995935',
        cell: '50985461',
        id: {
          name: 'CPR',
          value: '210153-3314',
        },
        picture: {
          large: 'https://randomuser.me/api/portraits/men/57.jpg',
          medium: 'https://randomuser.me/api/portraits/med/men/57.jpg',
          thumbnail: 'https://randomuser.me/api/portraits/thumb/men/57.jpg',
        },
        nat: 'DK',
      },
    ],
    info: {
      seed: 'f18558be87021afc',
      results: 10,
      page: 1,
      version: '1.4',
    },
  },
  error: '',
  loading: false,
}

export const paramKeyword = {
  page: 1,
  results: 1,
  keyword: 'muktit',
}

export const configKeyword = {
  method: 'GET',
  url: '/api/?results=1&page=1&keyword=muktit',
}

export const paramSorting = {
  page: 1,
  results: 1,
  order: 'desc',
  orderBy: 'email',
}

export const configSorting = {
  method: 'GET',
  url: '/api/?results=1&page=1&sortBy=email&sortOrder=descend',
}

export const allParam = {
  page: 1,
  results: 1,
  order: 'desc',
  orderBy: 'email',
  keyword: 'muktit',
  gender: 'Female',
}

export const allConfig = {
  method: 'GET',
  url:
    '/api/?results=1&page=1&keyword=muktit&gender=female&sortBy=email&sortOrder=descend',
}
