export interface ILk {
  orgName: string
  raiting: string
  price: string
  idJob: string
  id: string
}

export interface IManeger {
  id: number
  name: string
}

export interface IEvent {
  id: number
  group_id: number
  title: string
  date: string
  timezone: string
  duration: number
  manager: string
  manager_id: number
}

export interface IUser {
  token: string | false
  name: string
  email: string
}

export interface IDataRegister {
  name: string
  email: string
  pas: string
  repas: string
}

export async function getUser() {
  const url = '/api/user.json'
  const response = await fetch(url)
  const data: IUser = await response.json()
  return data
}

export async function registerNewUser(dataReg: IDataRegister) {
  const url = '/api/user.json'
  const response = await fetch(url)
  const data: IUser = await response.json()
  data.email = dataReg.email
  data.name = dataReg.name
  return data
}

export async function getLk() {
  const url = '/api/lk.json'
  const response = await fetch(url)
  const data: ILk[] = await response.json()
  return data
}

export async function getEvents() {
  const url = '/api/eventList.json'
  const response = await fetch(url)
  const data: IEvent[] = await response.json()
  return data
}

export async function getManagers() {
  const url = '/api/managers.json'
  const response = await fetch(url)
  const data: IManeger[] = await response.json()
  return data
}
