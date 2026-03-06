import React from 'react'
import { useRouteError } from 'react-router'

export default function Error() {
  const error = useRouteError()
  console.log(error)
  return (
    <h2>Opps an error has been occurred: ({error})</h2>
  )
}
