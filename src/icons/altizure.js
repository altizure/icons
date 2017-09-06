import React from 'react'
import PropTypes from 'prop-types'

const Altizure = ({ size = 600, round = false }) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={size}
    height={size}
    viewBox='0 0 490 490'
  >
    <defs>
      <linearGradient id='linearGradient' x1='102' y1='291.5' x2='210' y2='291.5' gradientUnits='userSpaceOnUse'>
        <stop offset='0' stopColor='#fff' stopOpacity='0' />
        <stop offset='1' stopOpacity='0.8' />
      </linearGradient>
    </defs>
    <rect fill='#323232' width='490' height='490' rx={round ? '490' : '36'} ry={round ? '490' : '36'} />
    <path fill='#fff' d='M527,511,382,393c-9-7-10-21-3-29L562.91,160c4.09-5,13.09-7,19.94,1L742.34,361.58C750,370,748,384,737,390L551,512C542,518,534,517,527,511Zm0-145s11-113,10-118-5,0-5,0S435,356,432,361s3,5,3,5Zm-93,31s-8,0-5,6,80,62,80,62,8,7,10,0,6-68,6-68Z' transform='translate(-317 -90)' />
    <polygon fill='url(#linearGradient)' points='102 307 208 307 210 276 102 276 102 307' />
    <path fill='#69a3d5' d='M555,324s42,7,58-21c11-24,28-41,53-37,18,21,78,97,78,97s12,16-7,28c-15.05,9.51-188,123-188,123s-6,4-12,2C537,502,555,324,555,324Z' transform='translate(-317 -90)' />
  </svg>
)

Altizure.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  round: PropTypes.bool
}

export default Altizure
