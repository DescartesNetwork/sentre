import React, { forwardRef } from 'react'

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'ion-icon': any
    }
  }
}

const importDependency = () => {
  if (!document) return
  const scripts = document.getElementsByTagName('script') || []
  for (let { id } of scripts) if (id === 'ionicons5') return
  let ionicons = document.createElement('script')
  ionicons.type = 'module'
  ionicons.src =
    'https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js'
  return document.body.appendChild(ionicons)
}

// Import https://ionic.io/ionicons/usage
importDependency()

type TypeIcon = {
  className?: string
  name?: string
  onClick?: () => void
  others?: any
}

const Icon = forwardRef<HTMLElement, TypeIcon>(
  ({ className, name, onClick, others }, ref) => {
    const cln = className ? 'anticon ' + className : 'anticon'
    return (
      <span className={cln} onClick={onClick} {...others}>
        <ion-icon ref={ref} name={name} />
      </span>
    )
  },
)

export default Icon
