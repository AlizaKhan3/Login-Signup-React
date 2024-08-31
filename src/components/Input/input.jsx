import "./input.css"

function Input(props) {
    return (
        <div className="inputContainer">
          {props.label && <label>{props.label}</label>}
          <input type="text" {...props}/>
          {/* <TextField
          id="outlined-password-input"
          label="Password"
          type="password"
          autoComplete="current-password"
        /> */}
        </div>
    )
}

export default Input;