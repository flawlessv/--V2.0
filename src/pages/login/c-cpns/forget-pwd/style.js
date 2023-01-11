import styled from "styled-components";

export const ForgetWrapper = styled.div`
.btns 
{
	position: absolute;
	right: -120px;
	bottom: 0;
	width: 120px;
	height: 120px;
	background: #c61dff;
	display: flex;
	justify-content: center;
	align-items: center;
	cursor: pointer;
	text-decoration: none;
	color: #fff;
	line-height: 1.2em;
	letter-spacing: 0.1em;
	font-size: 0.8em;
	transition: 0.25s;
	text-align: center;
	box-shadow: inset 10px 10px 10px rgba(190,1,254,0.05),
	15px 25px 10px rgba(190,1,254,0.1),
	15px 20px 20px rgba(190,1,254,0.1),
	inset -10px -10px 15px rgba(255,255,255,0.5);
	border-radius: 44% 56% 65% 35% / 57% 58% 42% 43%;
}
.btns::before 
{
	content: '';
	position: absolute;
	top: 15px;
	left: 30px;
	width: 20px;
	height: 20px;
	border-radius: 50%;
	background: #fff;
	opacity: 0.45;
}
.btns.signup 
{
	bottom: 150px;
	right: -120px;
	width: 80px;
	height: 80px;
	border-radius: 49% 51% 52% 48% / 63% 59% 41% 37%;
	background: #01b4ff;
	box-shadow: inset 10px 10px 10px rgba(1,180,255,0.05),
	15px 25px 10px rgba(1,180,255,0.1),
	15px 20px 20px rgba(1,180,255,0.1),
	inset -10px -10px 15px rgba(255,255,255,0.5);
}
.btns.signup::before 
{
	left: 20px;
	width: 15px;
	height: 15px;
}
.btns:hover 
{
	border-radius: 50%;
}
`