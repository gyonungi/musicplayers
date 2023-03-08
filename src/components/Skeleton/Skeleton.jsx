import React from "react"
import ContentLoader from "react-content-loader"

const MyLoader = (props) => (
    <ContentLoader
    speed={5}
    width={1070}
    height={50}
    viewBox="0 0 0"
    backgroundColor="#d9d9d9"
    foregroundColor="#ededed"
    {...props}
  >
    <rect x="50" y="15" rx="1" ry="1" width="350" height="18" />
    <rect x="8" y="6" rx="1" ry="1" width="35" height="38" />
    <rect x="450" y="15" rx="1" ry="1" width="280" height="18" />
    <rect x="770" y="15" rx="1" ry="1" width="300" height="18" />
    
  </ContentLoader>
)

export default MyLoader
