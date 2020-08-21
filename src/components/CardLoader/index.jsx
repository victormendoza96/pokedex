import React from "react"
import ContentLoader from "react-content-loader"

const CarLoader = (props) => (
  <ContentLoader 
    speed={2}
    width={200}
    height={160}
    viewBox="0 0 200 160"
    backgroundColor="#f0d7ea"
    foregroundColor="#ecebeb"
    {...props}
  >
    <rect x="19" y="145" rx="0" ry="0" width="110" height="10" /> 
    <rect x="20" y="20" rx="0" ry="0" width="110" height="9" /> 
    <rect x="128" y="20" rx="0" ry="0" width="9" height="135" /> 
    <rect x="11" y="20" rx="0" ry="0" width="10" height="135" /> 
    <rect x="30" y="40" rx="15" ry="15" width="92" height="14" /> 
    <rect x="33" y="67" rx="14" ry="14" width="83" height="62" />
  </ContentLoader>
)

export default CarLoader