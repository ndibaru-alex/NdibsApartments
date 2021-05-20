import React from 'react'

export default function Every({children,every}) {
    return <header className={every}>{children}</header>

}
Every.defaultProps={
    every:'defaultHero'
}
  