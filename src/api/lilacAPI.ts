export interface IItems {
    id: string
    img: string
    name?: string
    url?: string
  }

  export interface IItemsInfo {
    id: string
    img: string
    sizeH: number[]
    sizeW: number[]
    sizeZ: number[]
  }

export interface ILk {  
  orgName:string
  raiting:string
  price: string
  idJob: string
  id: string
}

export interface IUser {
    token: string | false
    name: string
    job: boolean
    email: string
    phone: string
}

export interface IDataRegister {
  name: string
  job: boolean
  email: string
  phone: string
  pas:string
  repas:string
}

export async function getCatalog () {
    const url = '/api/catalog.json'
    const response = await fetch(url)
    const data:IItems[] = await response.json()
    return data 
}

export async function getUser () {
  const url = '/api/user.json'
  const response = await fetch(url)
  const data:IUser = await response.json()
  return data 
}

export async function registerNewUser (dataReg:IDataRegister) {
  const url = '/api/user.json'
  const response = await fetch(url)
  const data:IUser = await response.json()
  data.email = dataReg.email
  data.job = dataReg.job
  data.name =dataReg.name
  data.phone = dataReg.phone
  return data
}

export async function getLk () {
  const url = '/api/lk.json'
  const response = await fetch(url)
  const data:ILk[] = await response.json()
  return data 
}

export async function getCatalogDir (url:string) {
  const response = await fetch(url)
  const data:IItems[] = await response.json()
  return data 
}

export async function getItem () {
  const url = '/api/item.json'
  const response = await fetch(url)
  const data:IItemsInfo = await response.json()
  return data 
}
