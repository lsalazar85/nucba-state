import { string, bool } from 'prop-types'
import { TitleH2 } from "./styles";


const Title = ({ text, colorText, bigFont }) => (
    <div>
        <TitleH2
            colorText={colorText}
            bigFont={bigFont}
        >
            {text}
        </TitleH2>
    </div>
)

Title.propTypes = {
    text: string.isRequired,
    colorText: string,
    bigFont: bool
}

Title.defaultProps = {
    colorText: '000000',

}


export  default Title
