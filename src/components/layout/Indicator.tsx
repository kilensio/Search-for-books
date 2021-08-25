import React from 'react'

const Indicator = ({ percent }: { percent: number}) => {
  return (
    <div className='indicator' style={containerStyle}>
      <div className="indicator-inner" style={{...indicatorStyle, width: percent + '%'}}></div>
    </div>
  )
}

const containerStyle:React.CSSProperties = {
  position: 'relative',
  width: '200px',
  height: '0.8rem',
  margin: '3rem auto 5.5rem',
  backgroundColor: 'hsl(0, 0%, 83%)'
  // border: '1px solid #444'
}

const indicatorStyle:React.CSSProperties = {
  position: 'absolute',
  top: '0',
  left: '0',
  height: '100%',
  backgroundColor: 'hsl(180, 91%, 78%)',
  transition: 'width 300ms'
}

export default Indicator
