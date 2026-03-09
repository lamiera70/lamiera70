

function Box({text, minWidth}) {
  return (
    <div className="box" style={{minWidth}}>
        {text}
    </div>
  )
}

export default Box