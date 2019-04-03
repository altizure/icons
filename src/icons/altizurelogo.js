import PropTypes from 'prop-types'
import React from 'react'

class AltizureLogo extends React.PureComponent {
  static propTypes = {
    size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    bg: PropTypes.string,
    url: PropTypes.string,
    round: PropTypes.bool
  }
  render () {
    const { size = 600, round = false, bg = '#323232', url } = this.props
    return url ? (
      <div style={{ width: `${size}px` }}>
        <div style={{
          width: '100%',
          height: 'auto',
          position: 'relative',
          overflow: 'hidden',
          padding: '100% 0 0 0'

        }}>
          <img
            style={{
              display: 'block',
              maxWidth: '100%',
              maxHeight: '100%',
              position: 'absolute',
              top: 0,
              bottom: 0,
              left: 0,
              right: 0
            }}
            width={size}
            height={size}
            src={url} />
        </div>
      </div>
    ) : (
      <svg
        xmlns='http://www.w3.org/2000/svg'
        width={size}
        height={size}
        viewBox='0 0 490 490'>
        <defs>
          <linearGradient
            id='MIDDLE_STROKE'
            gradientUnits='userSpaceOnUse'
            x1='387.821' y1='390.0587' x2='473.402' y2='390.3572'
            gradientTransform='matrix(1,0,0,-1,0,768)'>
            <stop offset='0' stopColor='#ffffff' />
            <stop offset='1' stopColor='#ffffff' stopOpacity={0} />
          </linearGradient>
        </defs>
        {bg &&
          <rect width='490' height='490'
            fill={bg}
            rx={round ? 490 : 36}
            ry={round ? 490 : 36} />
        }
        <g transform='translate(-262.07226,-91.08877)'>
          <path fill='#ffffff' d='M688.3,361.6L528.8,161c-6.8-8-15.8-6-19.9-1L325,364c-7,8-6,22,3,29l145,118c7,6,15,7,24,1l186-122C694,384,696,370,688.3,361.6z M473,366l-2,31l-0.3,5c-1,14.7-4,57.2-5.7,63c-2,7-10,0-10,0s-77-56-80-62c-2.6-5.2,3-5.9,4.6-6c-1.1-8.4-4-31.9-1.6-36c3-5,100-113,100-113s4-5,5,0S473,366,473,366z' />
          <path fill='#69a3d5' d='M501,324c0,0,42,7,58-21c11-24,28-41,53-37c18,21,78,97,78,97s12,16-7,28c-15.1,9.5-188,123-188,123s-6,4-12,2C483,502,501,324,501,324z' />
          <path fill='url(#MIDDLE_STROKE)' d='M473,366l-2,31h-91c0,0-3-0.5-5,1.8c-2,2.2,0.3,5.1,1.7,6.2s-5.7,2-5.7,2l-24-29l24-29l7.9,10.8L378,361c0,0-3,5,3,5c2,0,4,0,7.5-0.1c18.5,0.1,44.6,0,44.6,0L473,366z' />
        </g>
      </svg>
    )
  }
}

export default AltizureLogo
