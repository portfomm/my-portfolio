import React from 'react'

const CloseIcon = ({ size, color }) => {
  return (
    <svg width={size ?? 10.764} height={size ?? 10.761} viewBox="0 0 10.764 10.764">
      <path
        fill={color ?? 'red'}
        fillRule="nonzero"
        data-name="Icon ionic-ios-close"
        d="M6.657 5.38l3.844-3.844A.9.9 0 109.227.262L5.383 4.111 1.539.267A.9.9 0 10.265 1.541l3.844 3.844L.265 9.224a.9.9 0 001.274 1.274l3.844-3.844 3.844 3.844a.9.9 0 001.274-1.274z"
      />
    </svg>
  )
}

export default CloseIcon
