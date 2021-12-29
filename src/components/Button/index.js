import './styles.css'

const Button = ({ functionValue, text }) => (
    <button onClick={functionValue}>{ text }</button>
)

export default Button
