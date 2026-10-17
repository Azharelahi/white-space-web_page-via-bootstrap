import React from 'react'
import './FeatureSection.css'

/*
  heading: string, array of lines, or JSX
    "Work\nTogether"  or  ["Work", "Together"]
  mobileFirst: 'text' (default) or 'image'  (order on sm and md screens)
  accent (optional): image behind the LAST word of the heading
    { src, width, top, left, smWidth, smTop, smLeft }
  On lg screens: image on the left, text on the right.
*/
const FeatureSection = ({
  heading = '',
  paragraph,
  buttonText,
  onButtonClick,
  imageSrc,
  imageAlt = 'Section',
  bgColor,
  textColor,
  accent,
  mobileFirst = 'text',
}) => {
  const isText = typeof heading === 'string' || Array.isArray(heading)
  const lines = Array.isArray(heading) ? heading : isText ? heading.split('\n') : []

  const textFirst = mobileFirst !== 'image'
  const textOrder = textFirst ? 'order-1' : 'order-2'
  const imageOrder = textFirst ? 'order-2' : 'order-1'

  const renderLine = (line, isLast) => {
    if (!isLast || !accent) return line
    const words = line.trim().split(' ')
    const last = words.pop()
    return (
      <>
        {words.length > 0 && words.join(' ') + ' '}
        <span
          className="fts_accent_word"
          style={{
            '--accent-width': accent.width ?? '100%',
            '--accent-top': accent.top ?? '70%',
            '--accent-left': accent.left ?? '0',
            '--accent-width-sm': accent.smWidth ?? accent.width ?? '100%',
            '--accent-top-sm': accent.smTop ?? accent.top ?? '70%',
            '--accent-left-sm': accent.smLeft ?? accent.left ?? '0',
          }}
        >
          <img src={accent.src} alt="" aria-hidden="true" className="fts_accent_img" />
          <span className="fts_accent_text">{last}</span>
        </span>
      </>
    )
  }

  return (
    <section
      className="fts_sec"
      style={{
        ...(bgColor && { backgroundColor: bgColor }),
        ...(textColor && { '--fts-text-color': textColor }),
      }}
    >
      <div className="container-fluid fts_container">
        <div className="row g-4 fts_row">

          {/* Text block: right side on lg */}
          <div className={`col-12 col-lg-6 ${textOrder} order-lg-2 fts_text_col`}>
            <h1 className="fts_heading">
              {isText
                ? lines.map((line, i) => (
                    <React.Fragment key={i}>
                      {renderLine(line, i === lines.length - 1)}
                      {i < lines.length - 1 && <br />}
                    </React.Fragment>
                  ))
                : heading}
            </h1>

            <p className="fts_para">{paragraph}</p>

          {buttonText && (
  <button
    type="button"
    className="fts_btn d-inline-flex align-items-center gap-2"
    onClick={onButtonClick}
  >
    <span>{buttonText}</span>
    <span className="fts_btn_arrow">→</span>
  </button>
)}
          </div>

          {/* Image block: left side on lg */}
          <div className={`col-12 col-md-7 col-lg-6 ${imageOrder} order-lg-1 fts_img_col`}>
            <img src={imageSrc} alt={imageAlt} className="fts_img" />
          </div>

        </div>
      </div>
    </section>
  )
}

export default FeatureSection