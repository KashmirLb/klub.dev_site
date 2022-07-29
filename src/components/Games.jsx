import { useState } from "react"
import useLanguage from "../hooks/useLanguage"
import useTop from "../hooks/useTop"

const Games = ({page}) => {
  useTop()

  const [ firstClick, setFirstClick ] = useState(true)
  const [ clicks, setClicks ] = useState(0)
  const [ restarting, setRestarting ] = useState("")

  const { languageData } = useLanguage()

  const { gamesHeader, gamesIntroLeft, gamesTopIntro } = languageData

  const handleClick = e =>{
    

    if(e.target.classList.value.includes("tic-tac-clicked-one") || e.target.classList.value.includes("tic-tac-clicked-two")){
      return
    }
    if(firstClick){
      e.target.classList.toggle("tic-tac-clicked-one")
    }
    else{
      e.target.classList.toggle("tic-tac-clicked-two")
    }
    setFirstClick(!firstClick)
  
    if(clicks===8){
      const blocks = document.getElementsByClassName("tic-tac-box")
      setRestarting("Restarting...")

      setTimeout(()=>{

        const list = [...blocks]
        list.map(block => block.classList.value.includes("tic-tac-clicked-one") ? block.classList.toggle("tic-tac-clicked-one") : block.classList.toggle("tic-tac-clicked-two") )
        setClicks(0)
        setFirstClick(true)
        setRestarting("")
      }, 2000)
    }
    else{
      setClicks(clicks + 1)
    }
  }

  return (
    <div className={`page-container ${page}`}>
      <p className="h1-top-intro">{gamesTopIntro}</p>
      <div className="h1-container">
        <h1>{gamesHeader}</h1>
      </div>
      <div className="single-icon-container">
        <img src="/react-icon.png" height={80} alt="React icon"/>

      </div>
      <div className="project-introduction-grid">
        <div className="project-intro-left">
          {gamesIntroLeft}
        </div>
        <div className="project-intro-right">
          <div className="website-icon-link-block">
            <div className="tic-tac-hover">
              <div className="tic-tac-toe-container">
                <div className="tic-tac-box-container tic-tac-top-left" >
                  <div className="tic-tac-box" onClick={e=>handleClick(e)}/>
                </div>
                <div className="vertical-first"/>
                <div className="tic-tac-box-container tic-tac-top-center">
                  <div className="tic-tac-box" onClick={e=>handleClick(e)}/>
                </div>
                <div className="vertical-second"/>
                <div className="tic-tac-box-container tic-tac-top-right">
                  <div className="tic-tac-box" onClick={e=>handleClick(e)}/>
                </div>
              <div className="horizontal-first"/>
              </div>
              <div className="tic-tac-toe-container">
                <div className="tic-tac-box-container tic-tac-mid-left">
                  <div className="tic-tac-box" onClick={e=>handleClick(e)}/>
                </div>
                <div className="tic-tac-box-container tic-tac-mid-center">
                  <div className="tic-tac-box" onClick={e=>handleClick(e)}/>
                </div>
                <div className="tic-tac-box-container tic-tac-mid-right">
                  <div className="tic-tac-box" onClick={e=>handleClick(e)}/>
                </div>
                <p>{restarting}</p>
              <div className="horizontal-second" />
              </div>
              <div className="tic-tac-toe-container">
                <div className="tic-tac-box-container tic-tac-bottom-left">
                  <div className="tic-tac-box" onClick={e=>handleClick(e)}/>
                </div>
                <div className="tic-tac-box-container tic-tac-bottom-center">
                  <div className="tic-tac-box" onClick={e=>handleClick(e)}/>
                </div>
                <div className="tic-tac-box-container tic-tac-bottom-right">
                  <div className="tic-tac-box" onClick={e=>handleClick(e)}/>
                </div>
              </div>
            </div>
            <div className="website-link-container">
              <a target="_blank" href="https://kash-games-web.web.app/login">{gamesHeader}</a>
            </div>
          </div>
          <div style={{marginTop: "40px"}}>
            <p><span>Login:</span> guest@guest.com<br/>
            <span>P:</span> G@mesWeb</p>
          </div>
          <div className="git-icon-link-block">
            <img src="/github.png" width={40} alt="Github icon"/>
            <div className="git-link-container">
              <a target="_blank" href="https://github.com/KashmirLb/Games-Web">github.com/KashmirLb/Games-Web</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Games