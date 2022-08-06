export const expectedResponseData = {
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
}

export const expectedResultHook = {
  data: {
    response: expectedResponseData,
    error: '',
    loading: false,
  },
}

export const expectedEmptyResultHook = {
  data: {
    response: undefined,
    error: new Error('Network Error'),
    loading: false,
  },
}
