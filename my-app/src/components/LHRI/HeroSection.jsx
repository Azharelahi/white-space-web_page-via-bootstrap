import React from 'react'
import defaultBg from './../../assets/Elemen.png'
import defaultSmBg from './../../assets/sm.png'
import './HeroSection.css'

/*
  heading: string, array of lines, or JSX
    "Get More Done\nwith whitespace"  or  ["Get More Done", "with whitespace"]

  lgLeft: 'text' (default) or 'image'  (what sits on the left on lg screens)
    'text'  -> lg: text left, image right | sm and md: text, then image
    'image' -> lg: image left, text right | sm and md: image, then text

  bgLg / bgSm: background images. Leave out for the defaults,
    pass null for no background image.

  accent (optional): image behind the LAST word of the heading
    { src, width, top, left, smWidth, smTop, smLeft }
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
  lgLeft = 'text',
}) => {
  const isText = typeof heading === 'string' || Array.isArray(heading)
  const lines = Array.isArray(heading) ? heading : isText ? heading.split('\n') : []

  const imageLeft = lgLeft === 'image'

  // Order on every screen size
  const textOrder = imageLeft ? 'order-2' : 'order-1'
  const imageOrder = imageLeft ? 'order-1' : 'order-2'

  // Image alignment inside its column on lg
  const imageJustify = imageLeft ? 'justify-content-lg-start' : 'justify-content-lg-end'

  const renderLine = (line, isLast) => {
    if (!isLast || !accent) return line
    const words = line.trim().split(' ')
    const last = words.pop()
    return (
      <>
        {words.length > 0 && words.join(' ') + ' '}
        <span
          className="hs_accent_word"
          style={{
            '--accent-width': accent.width ?? '100%',
            '--accent-top': accent.top ?? '60%',
            '--accent-left': accent.left ?? '0',
            '--accent-width-sm': accent.smWidth ?? accent.width ?? '100%',
            '--accent-top-sm': accent.smTop ?? accent.top ?? '60%',
            '--accent-left-sm': accent.smLeft ?? accent.left ?? '0',
          }}
        >
          <img src={accent.src} alt="" aria-hidden="true" className="hs_accent_img" />
          <span className="hs_accent_text">{last}</span>
        </span>
      </>
    )
  }

  return (
    <section
      className={`hs_root${imageLeft ? ' hs_img_left' : ''}`}
      style={{
        '--bg-lg': bgLg ? `url(${bgLg})` : 'none',
        '--bg-sm': bgSm ? `url(${bgSm})` : 'none',
        ...(bgColor && { backgroundColor: bgColor }),
      }}
    >
      <div className="container-fluid">
        <div className="row align-items-center text-center text-lg-start g-0 d-lg-flex justify-content-lg-around">

          {/* Text block */}
          <div
            className={`col-12 col-lg-6 ${textOrder} hs_left_col d-flex flex-column align-items-center align-items-lg-start`}
          >
            <h1 className="hs_heading fw-bold mb-0" style={{ color: textColor || '#ffffff' }}>
              {isText
                ? lines.map((line, i) => (
                    <React.Fragment key={i}>
                      {renderLine(line, i === lines.length - 1)}
                      {i < lines.length - 1 && <br />}
                    </React.Fragment>
                  ))
                : heading}
            </h1>

            <p className="hs_text mb-0" style={textColor ? { color: textColor } : undefined}>
              {paragraph}
            </p>

            {buttonText && (
              <button
                className="btn hs_btn fw-semibold d-inline-flex align-items-center gap-2 text-nowrap"
                onClick={onButtonClick}
              >
                <span>{buttonText}</span>
                <span>&rarr;</span>
              </button>
            )}
          </div>

          {/* Image block */}
          <div
            className={`col-12 col-lg-6 ${imageOrder} hs_right_col d-flex justify-content-center ${imageJustify} align-items-center`}
          >
            <img src={imageSrc} alt={imageAlt} className="img-fluid hs_img" />
          </div>

        </div>
      </div>
    </section>
  )
}

export default HeroSection