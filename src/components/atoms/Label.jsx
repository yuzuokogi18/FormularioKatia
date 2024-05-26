import styled from "styled-components";
const LabelStyled = styled.label`
   width: 40%;
   height: 40px;
   font-size: 22px;
   color: #021a48;
`
function Label (props){
    return (
        <LabelStyled>{props.text}</LabelStyled>
    )
}
export default Label