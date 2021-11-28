function SubmitButton(props) {
  return (
    <div className="SubmitButton center">
      <input 
        type="submit" 
        id="submit"
        className={props.className}
        value={props.value}
      />
    </div>
  )
}

export default SubmitButton