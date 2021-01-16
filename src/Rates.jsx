import React from 'react'

const Rates = ({selectedCurrency: {base, date, rates}}) => {
  return (
    <>
      <h1 className="mb-4 text-lg font-bold text-center text-blue-600 sm:text-xl md:text-2xl">
        Rates for {base} ({date})
      </h1>
      <ul className="ml-8 sm:ml-10 md:ml-12">
        {Object.entries(rates).map(([code, rate]) => (
          <li key={code} className="my-2 sm:text-lg md:text-xl">
            <strong>{code}: </strong> {rate}
          </li>
        ))}
      </ul>
    </>
  )
}

export {Rates}
