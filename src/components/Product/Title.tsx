import React from 'react'

type Props = {
  name: string
}

const Name = ({name}: Props) => {
  return (
    <div>{name}</div>
  )
}

export default Name