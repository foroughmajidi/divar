import React, { useState, useEffect, createContext } from 'react'

export const DivarContext = createContext()
const levelCheck = {
  level1: '',
  level2: '',
  level3: '',
}
const DivarContextProvider = ({ children }) => {
  const [data, setData] = useState([])
  const [path, setPath] = useState()
  const [city, setCity] = useState({ en: 'tehran', fa: 'تهران' })
  const [page, setPage] = useState(1)
  const [dataAd, setDataAd] = useState([])
  const [loading, setIsLoading] = useState(false)
  const [items, setListItems] = useState(dataAd)

  const getData = async () => {
    if (city || path) {
      let pathRoute = path ? '/' + path : '';
      console.log("FFDFDFDDFD",pathRoute);
      setIsLoading(true);
      const response = await fetch(
        'https://api.divar.ir/v8/web-search/' +
          city.en +
          pathRoute +
          '?page=' +
          page
      )
      setIsLoading(false)
      const data = await response.json()
      setData(data)
      setDataAd(data.widget_list)
    }
  }

  // useEffect(() => {
  //   setListItems(dataAd);
  // }, [path]);

  useEffect(() => {
    setListItems([])
    getData()
  }, [path]);

  useEffect(() => {
    setListItems(items.concat(dataAd))
  }, [dataAd])

  useEffect(() => {
    getData()
  }, [page, city])

  return (
    <DivarContext.Provider
      value={{
        data,
        setPath,
        path,
        page,
        setPage,
        dataAd,
        setDataAd,
        loading,
        items,
        setListItems,
        city,
        setCity,
        levelCheck,
      }}
    >
      {children}
    </DivarContext.Provider>
  )
}

export default DivarContextProvider
