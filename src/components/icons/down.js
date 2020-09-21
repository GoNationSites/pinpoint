import React from "react"

const down = ({ fill = "#111", width = "44px" }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      class="icon icon-tabler icon-tabler-arrow-down"
      width={width}
      height={width}
      viewBox="0 0 24 24"
      stroke-width="1.5"
      stroke={fill}
      fill="none"
      stroke-linecap="round"
      stroke-linejoin="round"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <line x1="12" y1="5" x2="12" y2="19" />
      <line x1="18" y1="13" x2="12" y2="19" />
      <line x1="6" y1="13" x2="12" y2="19" />
    </svg>
  )
}

export default down