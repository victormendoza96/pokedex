import React from "react"
import ContentLoader from "react-content-loader"

const CardMbLoader = (props) => (
  <ContentLoader 
    speed={2}
    width={220}
    height={40}
    viewBox="0 0 220 40"
    backgroundColor="#f0d7ea"
    foregroundColor="#ecebeb"
    {...props}
  >
    <rect x="10" y="0" rx="3" ry="3" width="200" height="3" /> 
    <rect x="10" y="37" rx="3" ry="3" width="200" height="3" /> 
    <rect x="85" y="20" rx="0" ry="0" width="0" height="1" /> 
    <rect x="10" y="0" rx="0" ry="0" width="4" height="40" /> 
    <rect x="208" y="0" rx="0" ry="0" width="4" height="40" /> 
    <circle cx="29" cy="19" r="11" /> 
    <rect x="44" y="10" rx="0" ry="0" width="57" height="19" /> 
    <rect x="124" y="10" rx="0" ry="0" width="75" height="19" />
  </ContentLoader>
)

export default CardMbLoader