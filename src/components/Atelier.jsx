import useLanguage from "../hooks/useLanguage"
import useTop from "../hooks/useTop"

const Atelier = ({page}) => {
  useTop()

  const { languageData } = useLanguage()

  const { atelierTopIntro, atelierProjectIntroLeft, atelierWarning } = languageData

  return (
    <div className={`page-container ${page}`}>
      <p className="h1-top-intro">{atelierTopIntro}</p>
      <div className="h1-container">
        <h1>Atelier Gerbrand</h1>
      </div>
      <div className="icon-container">
        <img src="/nextjs-icon.svg" height={80} alt="NextJS icon"/>
        <img src="/css-icon.svg" height={80} alt="CSS icon"/>
        <img src="/mongo-icon.png" height={80} alt="MongoDB icon"/>
        <img src="/strapi-icon.png" height={80} alt="Strapi icon"/>
      </div>
      <div className="project-introduction-grid">
        <div className="project-intro-left">
          {atelierProjectIntroLeft}
        </div>
        <div className="project-intro-right">
          <div className="website-icon-link-block">
            <div className="website-icon-container">
                <img src="/atelier-icon.png" width={100} alt="Logo for website Atelier Gerbrand"/>
              <div className="atelier-background"/>
            </div>
            <div className="website-link-container">
              <a target="_blank" href="https://ateliergerbrand.nl/">https://ateliergerbrand.nl/</a>
            </div>
          </div>
          <p className="atelier-warning">{atelierWarning}</p>
          <div className="git-icon-link-block">
            <img src="/github.png" width={40} alt="Github icon"/>
            <div className="git-link-container">
              <a target="_blank" href="https://github.com/KashmirLb/Atelier-Gerbrand">github.com/KashmirLb/Atelier-Gerbrand</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Atelier