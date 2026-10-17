import React from 'react'
import defaultBg from './../../assets/Elemen.png'
import defaultSmBg from './../../assets/sm.png'
import './HeroSection.css'


/*
  heading: string or array of lines.
    "Get More Done\nwith whitespace"  or  ["Get More Done", "with whitespace"]
  accent (optional): image behind the LAST word of the heading
    {
      src,
      width, top, left,          // desktop values (any CSS value)
      smWidth, smTop, smLeft     // mobile values, optional
    }
*/
const HeroSection = ({
  heading = '',
  paragraph,
  buttonText,
  onButtonClick,
  imageSrc,
  imageAlt = 'Hero Illustration',
  bgLg = defaultBg,
  bgSm = defaultSmBg,
  bgColor,
  textColor,
  accent,
}) => {
  const isText = typeof heading === 'string' || Array.isArray(heading)
  const lines = Array.isArray(heading) ? heading : isText ? heading.split('\n') : []

  const renderLine = (line, isLast) => {
    if (!isLast || !accent) return line
    const words = line.trim().split(' ')
    const last = words.pop()
    return (
      <>
        {words.length > 0 && words.join(' ') + ' '}
        <span
          className="hero_accent_word"
          style={{
            '--accent-width': accent.width ?? '100%',
            '--accent-top': accent.top ?? '60%',
            '--accent-left': accent.left ?? '0',
            '--accent-width-sm': accent.smWidth ?? accent.width ?? '100%',
            '--accent-top-sm': accent.smTop ?? accent.top ?? '60%',
            '--accent-left-sm': accent.smLeft ?? accent.left ?? '0',
          }}
        >
          <img src={accent.src} alt="" aria-hidden="true" className="hero_accent_img" />
          <span className="hero_accent_text">{last}</span>
        </span>
      </>
    )
  }

  return (
    <section
      className="hero_sec_7042"
      style={{
        '--bg-lg': `url(${bgLg})`,
        '--bg-sm': `url(${bgSm})`,
        ...(bgColor && { backgroundColor: bgColor }),
      }}
    >
      <div className="container-fluid">
        <div className="row align-items-center text-center text-lg-start g-0 d-lg-flex justify-content-lg-around">

          <div className="col-12 col-lg-6 hero_left_col d-flex flex-column align-items-center align-items-lg-start">
            <h1 className="hero_heading fw-bold mb-0" style={{ color: textColor || '#ffffff' }}>
              {isText
                ? lines.map((line, i) => (
                    <React.Fragment key={i}>
                      {renderLine(line, i === lines.length - 1)}
                      {i < lines.length - 1 && <br />}
                    </React.Fragment>
                  ))
                : heading}
            </h1>
            <p className="hero_text mb-0" style={textColor ? { color: textColor } : undefined}>
              {paragraph}
            </p>

            {buttonText && (
              <button
                className="btn hero_sec_7042_btn fw-semibold d-inline-flex align-items-center gap-2 text-nowrap"
                onClick={onButtonClick}
              >
                <span>{buttonText}</span>
                <span>&rarr;</span>
              </button>
            )}
          </div>

          <div className="col-12 col-lg-6 hero_right_col d-flex justify-content-center justify-content-lg-end align-items-center">
            <img src={imageSrc} alt={imageAlt} className="img-fluid hero_sec_7042_img" />
          </div>

        </div>
      </div>
    </section>
  )
}

export default HeroSection