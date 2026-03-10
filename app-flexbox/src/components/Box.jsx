

function Box({text, minWidth}) {
  return (
    <div className="box" style={{minWidth, width: minWidth}}>
        {text}
    </div>
  )
}

export default Box