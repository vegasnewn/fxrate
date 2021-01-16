import React from 'react'
import {Spinner} from './Spinner'
import useSWR from 'swr'

const fetcher = async currencyCode => {
  const url = `https://api.exchangeratesapi.io/latest?base=${currencyCode}`
  const res = await fetch(url)
  return await res.json()
}

const Rates = ({currencyCode}) => {
  const {data} = useSWR(currencyCode, fetcher)
  if (!data) {
    return (
      <div className="flex flex-col items-center h-screen justify-evenly">
        <Spinner />
        <Spinner />
      </div>
    )
  }
  return (
    <>
      <h1 className="mb-4 text-lg font-bold text-center text-blue-600 sm:text-xl md:text-2xl">
        Rates for {currencyCode} ({data.date})
      </h1>
      <ul className="ml-8 sm:ml-10 md:ml-12">
        {Object.entries(data.rates).map(([code, rate]) => (
          <li key={code} className="my-2 sm:text-lg md:text-xl">
            <strong>{code}: </strong> {rate}
          </li>
        ))}
      </ul>
    </>
  )
}

export {Rates}
