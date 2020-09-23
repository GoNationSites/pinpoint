import React from "react"

const Close = ({ fill = "#111", width = "30px" }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      class="icon icon-tabler icon-tabler-circle-x"
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
      <circle cx="12" cy="12" r="9" />
      <path d="M10 10l4 4m0 -4l-4 4" />
    </svg>
  )
}

export default Close
