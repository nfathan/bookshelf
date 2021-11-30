function NotFound () {
  const style = {
    color: 'red',
    display: 'flex',
    height: '300px',
    justifyContent: 'center',
    alignItems: 'center',
  }

  return (
    <div style={style}>  
      <h1>404 Not Found</h1>
    </div>
  )
}

export default NotFound