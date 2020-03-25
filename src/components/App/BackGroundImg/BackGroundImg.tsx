import React, { ReactNode, useState } from "react";
import styled, { StyledComponent, DefaultTheme } from 'styled-components'


export interface IBackGroundImgProps {
  children?: ReactNode
  imgUrl: string
  style: StyledComponent<"div", DefaultTheme, {}, never>
}


const BackGroundImg = (props: IBackGroundImgProps) => {
  const [imgState, ] = useState<IBackGroundImgProps>({
    imgUrl: props.imgUrl,
    style: props.style  
  })

  const ImgStyle = styled("div")`
    background-image: url(${ imgState.imgUrl });
    background-size: cover;
    background-position: center;
    position: relative;
    top: 0;
    bottom: 0;    
  `;

  return (
      <ImgStyle >
        <imgState.style>
          { props.children }
        </imgState.style>  
      </ImgStyle>
  );
}

export default BackGroundImg