import { useState } from "react"
import useLanguage from "../hooks/useLanguage"
import useTop from "../hooks/useTop"

const Order = ({page}) => {

  const [ message, setMessage ] = useState("")

  useTop()

  const { languageData } = useLanguage()

  const { orderTopIntro, orderProjectIntroLeft, orderTry, sorryMessage } = languageData

  return (
    <div className={`page-container ${page}`}>
      <p className="h1-top-intro">{orderTopIntro}</p>
      <div className="h1-container">
        <h1>Order Model</h1>
      </div>
      <div className="icon-container">
        <img src="/mongo-icon.png" height={80} alt="MongoDB icon"/>
        <img src="/express-icon.png" height={80} alt="Express icon"/>
        <img src="/react-icon.png" height={80} alt="React icon"/>
        <img src="/node-icon.png" height={80} alt="Node icon"/>
      </div>
      <div className="project-introduction-grid">
        <div className="project-intro-left">
          {orderProjectIntroLeft}
        </div>
        <div className="project-intro-right">
          <div className="website-icon-link-block">
            <div style={{position: "relative"}}>
              <img src="/order-model.png" 
                width={140} 
                onMouseEnter={()=>setMessage(sorryMessage)} 
                onMouseLeave={()=>setMessage("")}
                style={{display:"block"}}
                alt="Order Model website logo"
              />
              <p style={{position: "absolute", width: "400px", color: "gray"}}>{message}</p>
            </div>
            <div className="website-link-container">
              <a target="_blank" href="https://chimerical-mermaid-d7a56b.netlify.app/">Order Model Website</a>
            </div>
          </div>
          {orderTry}
          <div className="git-icon-link-block">
            <img src="/github.png" width={40} alt="github icon"/>
            <div className="git-link-container">
              <a style={{display: "block", marginBottom: "10px"}}target="_blank" href="https://github.com/KashmirLb/Order_Model_Frontend">github.com/KashmirLb/Order_Model_Frontend</a>
              <a target="_blank" href="https://github.com/KashmirLb/Order_Model_Backend">github.com/KashmirLb/Order_Model_Backend</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Order