import React from 'react'

const Btn = ({ text, type, customStyle }) => {
  type = type === 'colored' ? 'text-secondary bg-primary hover:opacity-75 focus:ring-4 focus:ring-green-300' : 'text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200';

  return (
    <button type="button" className={`focus:outline-none w-100  font-medium rounded-lg text-sm px-5 py-2.5 mr-2 ${type} ${customStyle}`}>{text}</button>

  )
}

export default Btn