import React from "react";
import { HeaderStyle,HeaderStyle2, HeaderBgStyle, HeaderImgStyle} from "../styles/headersStyles";

const Header = () => {
    return(
        <><HeaderStyle>
            <HeaderBgStyle>
                <HeaderImgStyle src="https://res.cloudinary.com/dbdrkxooj/image/upload/v1650724589/samples/workShop/bg-header-desktop_ghk43w.svg" alt="Imagne" />
            </HeaderBgStyle>
        </HeaderStyle>
        <HeaderStyle2>
                <HeaderBgStyle>
                    <HeaderImgStyle src="https://res.cloudinary.com/dbdrkxooj/image/upload/v1650724589/samples/workShop/bg-header-mobile_q6cfmm.svg" alt="image" />
                </HeaderBgStyle>
            </HeaderStyle2>
        </>
    )
} 
export default Header