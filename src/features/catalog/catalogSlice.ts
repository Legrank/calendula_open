import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { IItems, getCatalog, getCatalogDir, getItem, IItemsInfo } from 'api/lilacAPI'
import { AppThunk } from 'app/store'

interface CatalogState {
    catalogItems:Array<IItems>
    loading: boolean
    error: string | null
    type: string
    item: IItemsInfo
}

const initialState: CatalogState = {
    catalogItems: [],
    loading: false,
    error: null,
    type: 'catalog',
    item: {
      id:"v01",
      img:"/img/image 4.png",
      sizeH:[100,110,120],
      sizeW:[60,70,80],
      sizeZ:[10,12,17]
    }
  }

const catalog = createSlice({
    name: 'catalog',
    initialState,
    reducers: {
      getCatalogStart(state) {
        state.loading = true
        state.error = null
      },
      getCatalogSuccess(state, action: PayloadAction<IItems[]>) {
        state.catalogItems = action.payload
        state.loading = false
        state.error = null
      },
      getCatalogDirSuccess(state, action: PayloadAction<IItems[]>) {
        state.catalogItems = action.payload
        state.loading = false
        state.error = null
      },
      getItemSuccess(state, action: PayloadAction<IItemsInfo>) {
        state.item = action.payload
        state.loading = false
        state.error = null
      },
      getCatalogFailure(state, action: PayloadAction<string>) {
        state.loading = false
        state.error = action.payload
      }
    }
  })


  export const {
    getCatalogStart,
    getCatalogSuccess,
    getCatalogFailure,
    getItemSuccess
  } = catalog.actions
  export default catalog.reducer
  
  export const fetchCatalog = (dir:string): AppThunk => async dispatch => {
    try {
      dispatch(getCatalogStart())
      let catalog:IItems[] = []
      if(dir === 'catalog'){
        catalog = await getCatalogDir('/api/catalogDir.json')
      }
      if(dir === 'catalogSub'){
        catalog = await getCatalogDir('/api/catalogSubDir.json')
      }
      if(dir === 'catalogItem'){
        catalog = await getCatalog()
      }
      dispatch(getCatalogSuccess(catalog))
    } catch (err) {
      dispatch(getCatalogFailure(err))
    }
  }

  export const fetchItem = (): AppThunk => async dispatch => {
    try {
      dispatch(getCatalogStart())
      let item:IItemsInfo = await getItem()
      dispatch(getItemSuccess(item))
    } catch (err) {
      dispatch(getCatalogFailure(err))
    }
  }
