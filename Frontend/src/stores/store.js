import { defineStore } from 'pinia'

export const useMyStore = defineStore('myStore', {
  state: () => ({
    recentServices: [
      {
        _id: 1,
        name: 'Service 1',
        status: 'active',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit'
      },
      {
        _id: 2,
        name: 'Service 2',
        status: 'inactive',
        description:
          'Sed do eiusmod tempor incididunt ut labore'
      },
      {
        _id: 3,
        name: 'Service 3',
        status: 'active',
        description:
          'Ut enim ad minim veniam, quis nostrud'
      },
      {
        _id: 4,
        name: 'Service 4',
        status: 'inactive',
        description:
          'Duis aute irure dolor in reprehenderit in'
      },
      {
        _id: 5,
        name: 'Service 5',
        status: 'active',
        description:
          'Excepteur sint occaecat cupidatat non proident'
      }
    ]
  }),
  actions: {
  }
})
