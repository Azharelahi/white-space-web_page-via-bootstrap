import React from 'react'
import './FeatureSection.css'

/*
  heading: string, array of lines, or JSX
    "Work\nTogether"  or  ["Work", "Together"]
  mobileFirst: 'text' (default) or 'image'  -> order on sm and md screens
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
          className="feature_accent_word"
          style={{
            '--accent-width': accent.width ?? '100%',
            '--accent-top': accent.top ?? '70%',
            '--accent-left': accent.left ?? '0',
            '--accent-width-sm': accent.smWidth ?? accent.width ?? '100%',
            '--accent-top-sm': accent.smTop ?? accent.top ?? '70%',
            '--accent-left-sm': accent.smLeft ?? accent.left ?? '0',
          }}
        >
          <img src={accent.src} alt="" aria-hidden="true" className="feature_accent_img" />
          <span className="feature_accent_text">{last}</span>
        </span>
      </>
    )
  }

  return (
    <section
      className="py-4 py-md-5 px-2 px-lg-3"
      style={bgColor ? { backgroundColor: bgColor } : undefined}
    >
      <div className="container-fluid py-lg-5">
        <div className="row align-items-center text-center text-lg-start g-4">

          {/* Text block: right side on lg */}
          <div
            className={`col-12 col-lg-6 ${textOrder} order-lg-2 d-flex flex-column align-items-center align-items-lg-start`}
          >
            <h1
              className="heading_1 fw-bold mb-3"
              style={textColor ? { color: textColor } : undefined}
            >
              {isText
                ? lines.map((line, i) => (
                    <React.Fragment key={i}>
                      {renderLine(line, i === lines.length - 1)}
                      {i < lines.length - 1 && <br />}
                    </React.Fragment>
                  ))
                : heading}
            </h1>

            <p
              className="paragraph mb-4"
              style={textColor ? { color: textColor } : undefined}
            >
              {paragraph}
            </p>

            {buttonText && (
              <button
                className="btn blue_button btn-lg py-2 py-sm-3 px-3 px-sm-4 d-inline-flex align-items-center justify-content-center gap-2 text-nowrap"
                style={{ borderRadius: '8px', border: 'none', fontSize: '0.95rem' }}
                onClick={onButtonClick}
              >
                <span>{buttonText}</span>
                <span className="fs-6">&rarr;</span>
              </button>
            )}
          </div>

          {/* Image block: left side on lg */}
          <div
            className={`col-12 col-md-7 col-lg-6 mx-auto mx-lg-0 ${imageOrder} order-lg-1 text-center text-lg-end d-flex justify-content-center justify-content-lg-end`}
          >
            <img src={imageSrc} alt={imageAlt} className="img-fluid section2-img w-100" />
          </div>

        </div>
      </div>
    </section>
  )
}

export default FeatureSection