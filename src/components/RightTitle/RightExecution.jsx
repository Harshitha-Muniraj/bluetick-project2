import React from 'react'

const RightExecution = ({texts}) => {
  return (
    <div style={{    marginBottom: '20px'}} >
    <p className='execution'>Execution Logs</p>
    <div className='line-delay' >
    {texts && texts.map((text) => {
  const test=text.split(",")
  return(
    <p key={text}> - {test[0]}</p>
  )
})}
    </div>
</div>
  )
}

export default RightExecution