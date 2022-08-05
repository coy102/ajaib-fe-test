export interface Name {
  title: string
  first: string
  last: string
}

export interface Registered {
  date: Date
  age: number
}

export interface Result {
  gender: string
  name: Name
  email: string
  registered: Registered
  phone: string
}

export interface Info {
  seed: string
  results: number
  page: number
  version: string
}

export interface UserResponse {
  results: Result[]
  info: Info
}
