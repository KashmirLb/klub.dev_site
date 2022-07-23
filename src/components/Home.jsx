import { useState } from "react"
import useTop from "../hooks/useTop"
import useLanguage from "../hooks/useLanguage"

const Home = ({page}) => {
  useTop()

  const [ animationActive, setAnimationActive ] = useState(false)
  const [ tooltip, setTooltip ] = useState("")

  const { languageData } = useLanguage()

  const { homeHeader, homeReactHover, homeMongoHover, homeNodeHover, homeNextJsHover, homeTailwindHover, homeCssHover, updateNotice } = languageData

  const tooltipHover = icon =>{
    setTooltip(icon)
  }

  const spinIcon = () =>{

    if(!animationActive){

      setAnimationActive(true)

      const icon = document.getElementById("react-icon")
  
      icon.className="icon-grid-home spin-icon"
  
      setTimeout(()=>{
        icon.className="icon-grid-home"
        setAnimationActive(false)
      }, 2100)
    }

  }

  return (
    <div className={`page-container ${page}`}>
      <div className="homepage-head-container">
        <div className="homepage-head">
          <div className="intro-left-grid-home">
            {homeHeader}
          </div>
          <div>
            <div id="icons-right-grid-home">
              <div className="icon-grid-home" id="react-icon" onMouseOver={()=> {
                spinIcon()
                tooltipHover(homeReactHover)
                }}>
                  <img src="/react-icon.png" height={100} alt="React icon" />
              </div>
              <div className="icon-grid-home mongo-icon" >
                  <img src="/mongo-icon.png" height={100} alt="MongoDB icon" onMouseOver={()=>tooltipHover(homeMongoHover)} onMouseLeave={()=>tooltipHover("")}/>
              </div>
              <div className="icon-grid-home node-icon" >
                  <img src="/node-icon.png" height={100} alt="Node icon" onMouseOver={()=>tooltipHover(homeNodeHover)} onMouseLeave={()=>tooltipHover("")}/>
              </div>
              <div className="icon-grid-home nextjs-icon" >
                  <img src="/nextjs-icon.svg" height={100} alt="NextJS icon" onMouseOver={()=>tooltipHover(homeNextJsHover)} onMouseLeave={()=>tooltipHover("")}/>
              </div>
              <div className="icon-grid-home tailwindcss-icon" >
                  <img src="/tailwindcss-icon.svg" height={100} alt="TailwindCSS icon" onMouseOver={()=>tooltipHover(homeTailwindHover)} onMouseLeave={()=>tooltipHover("")}/>
              </div>
              <div className="icon-grid-home css-icon" >
                  <img src="/css-icon.svg" height={100} alt="CSS icon" onMouseOver={()=>tooltipHover(homeCssHover)} onMouseLeave={()=>tooltipHover("")}/>
              </div>
            </div>
            <p className="home-tooltip">{tooltip}</p>

          </div>
        </div>
      </div>
      <p style={{color: "#FAA356"}}>{updateNotice}</p>
    </div>
  )
}

export default Home