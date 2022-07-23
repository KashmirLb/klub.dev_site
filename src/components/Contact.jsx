import useLanguage from "../hooks/useLanguage"
import useTop from "../hooks/useTop"

const Contact = ({page}) => {
  useTop()

  const { languageData } = useLanguage()

  const { contactHeader, contactLinks, contactContact } = languageData


  return (
    <div className={`page-container ${page}`}>
      <div className="h1-container-contact">
        <h1>{contactHeader}</h1>
      </div>
      <div className="project-introduction-grid">
        <div className="contact-intro-left">
          <h3>{contactLinks}</h3>
          <div className="contact-icon">
            <img src="/linkedin-icon.png" width={40}/>
            <div className="git-link-container">
              <a target="_blank" href="https://www.linkedin.com/in/kashmir-lub/">linkedin.com/in/kashmir-lub/</a>
            </div>
          </div>
          <div className="contact-icon">
            <img src="/github.png" width={40}/>
            <div className="git-link-container">
              <a target="_blank" href="https://github.com/KashmirLb">github.com/KashmirLb</a>
            </div>
          </div>
          <h3>{contactContact}</h3>
          <div className="contact-icon">
            <img src="/mail-icon.png" width={40}/>
            <div className="git-link-container">
              <p>kashmirlubdev@gmail.com</p>
            </div>
          </div>
        </div>
        <div className="project-intro-right">
          <div className="website-icon-link-block">
           
            <div className="website-link-container">
              
            </div>
          </div>
          <p className="atelier-warning">{}</p>
          <div className="git-icon-link-block">
            <div className="git-link-container">
              
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact