import styled from "styled-components";

export const ContactItem = styled.li`
    display: flex;
    height: 40px;
    align-items: center;
	gap: 10px;
    background-color: #D3D3D3;
    border-radius: 20px;
    margin-top: 10px;
    padding: 10px;

`
export const ContactTextName = styled.p`
    text-align: start;
	color: #000;
    margin-left: 25px;
    `
export const ContactTextNumber = styled.p`
	font-size: smaller;
	color: #000;
`

export const ContactDeleteBtn = styled.button`
	height: auto;
    cursor: pointer;
    padding: 10px;
	margin-left: auto;
 	background-color: #808080;
 	border-radius: 11px;
 	color: #000;
     margin-right: 25px;
 	border: 0;
 	&:focus {
        cursor: pointer;
 		outline: 0;
 	}
`