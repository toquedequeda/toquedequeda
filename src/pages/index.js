import React, { useState } from "react"
import SEO from "../components/seo"
import Countdown from "react-countdown-now"

const IndexPage = () => {
  const [isToque, setIsToque] = useState(false)

  const targetDate = new Date("10/25/2019")
  targetDate.setHours(23, 0, 0)

  return (
    <>
      <SEO title="Home" />
      <div id="toque">
        {isToque ? (
          <>
            <span>Sí</span>
            <span>¯\_(ツ)_/¯</span>
          </>
        ) : (
          <>
            <span>No</span>
            <span>♪~ ᕕ(ᐛ)ᕗ</span>
          </>
        )}

        <br/>
        <br/>
        <br/>

        <span>(RM)</span>
        {!isToque && (
          <>
          <span style={{fontSize: ".5em"}}>El siguiente:</span>
          <Countdown
            date={targetDate}
            onComplete={() => setIsToque(true)}
          />
          </>
        )}
      </div>
    </>
  )
}

export default IndexPage
