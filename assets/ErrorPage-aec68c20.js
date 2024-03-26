import{s as e,u as d,a as x,r as i,j as t}from"./index-0c4c79ac.js";const p=e.div`
  width: 100%;
  height: 100vh;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
`,c=e.div`
  position: relative;
  text-align: center;

  font-weight: bold;
  transition: transform 0.3s ease-in-out;
  margin-top: -200px;

  &:hover {
    transform: scale(1.2);
  }
`,f=e.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`,h=e.div`
  position: absolute;
  filter: blur(50px);
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`,g=e.div`
  z-index: 9;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`,m=e.span`
  color: #fff;
  text-decoration: none;
  text-transform: uppercase;
  font-size: 2.5em;
  letter-spacing: 0.1em;
  font-weight: 500;
  font-size: 16px;
  padding: 10px 30px;
  transition: 0.5s;
  white-space: nowrap;
  @media only screen and (min-width: 768px) {
    font-weight: 700;

    padding: 10px 30px;
    font-size: 32px;
  }
`,n=e.span`
  color: #fff;
  text-decoration: none;
  text-transform: uppercase;
  font-size: 2em;
  letter-spacing: 0.1em;
  font-weight: 300;
  font-size: 16px;

  transition: 0.5s;
  @media only screen and (min-width: 768px) {
    font-weight: 600;
    font-size: 28px;
  }
`,w=e.div`
  width: 100%;
  height: 100%;
  background-color: #1c1d26;
  display: flex;
  justify-content: center;
`,u=e.svg`
  width: 300px;
  @media only screen and (min-width: 768px) {
    width: 700px;
  }
`,j=e.svg`
  width: 300px;
  @media only screen and (min-width: 768px) {
    width: 700px;
  }
`,y=()=>{const{t:Q}=d(),r=x(),[s,o]=i.useState(10);return i.useEffect(()=>{const a=setInterval(()=>{o(l=>l-1)},1e3);return()=>clearInterval(a)},[]),i.useEffect(()=>{s===0&&r("/")},[s,r]),t.jsx(t.Fragment,{children:t.jsx(w,{children:t.jsx(p,{children:t.jsxs(c,{children:[t.jsx(f,{children:t.jsxs(u,{viewBox:"0 0 500 500",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",width:"700px",id:"blobSvg",children:[t.jsx("defs",{children:t.jsxs("linearGradient",{id:"gradient",x1:"0%",y1:"0%",x2:"0%",y2:"100%",children:[t.jsx("stop",{offset:"0%",style:{stopColor:"rgb(215, 227, 255)"}}),t.jsx("stop",{offset:"100%",style:{stopColor:"rgb(64, 123, 255)"}})]})}),t.jsx("path",{fill:"url(#gradient)",children:t.jsx("animate",{attributeName:"d",dur:"10000ms",repeatCount:"indefinite",values:`M428.5,295Q374,340,341.5,385Q309,430,252.5,424Q196,418,155.5,383Q115,348,64.5,299Q14,250,35.5,179.5Q57,109,128,101Q199,93,258,68Q317,43,371,83Q425,123,454,186.5Q483,250,428.5,295Z;
            M430.5,296.5Q378,343,340.5,378Q303,413,242,437.5Q181,462,119.5,425.5Q58,389,73.5,319.5Q89,250,95.5,196Q102,142,144.5,99Q187,56,245.5,69.5Q304,83,339.5,121Q375,159,429,204.5Q483,250,430.5,296.5Z;
            M429,322.5Q449,395,383,425.5Q317,456,252,450.5Q187,445,118.5,420.5Q50,396,31,323Q12,250,47,189Q82,128,133,87.5Q184,47,250,46.5Q316,46,368,86.5Q420,127,414.5,188.5Q409,250,429,322.5Z;
            M401.5,295.5Q375,341,343.5,391.5Q312,442,242.5,464.5Q173,487,145.5,416.5Q118,346,100.5,298Q83,250,104,204.5Q125,159,160,120Q195,81,259,53Q323,25,368,78Q413,131,420.5,190.5Q428,250,401.5,295.5Z;
            M460.5,315Q430,380,367,397.5Q304,415,238.5,451Q173,487,142,419Q111,351,88,300.5Q65,250,87,199Q109,148,150,107.5Q191,67,259,40Q327,13,381.5,64Q436,115,463.5,182.5Q491,250,460.5,315Z;
            M440,304Q399,358,351.5,387Q304,416,244.5,432.5Q185,449,118.5,421.5Q52,394,68,322Q84,250,93.5,196.5Q103,143,146.5,104Q190,65,253.5,55Q317,45,362,90.5Q407,136,444,193Q481,250,440,304Z;
            M408,300.5Q389,351,346,382.5Q303,414,243,435.5Q183,457,138,410.5Q93,364,87,307Q81,250,99,201.5Q117,153,157,120.5Q197,88,253.5,77Q310,66,369,93.5Q428,121,427.5,185.5Q427,250,408,300.5Z;
            M460.5,313.5Q425,377,369,411Q313,445,249.5,446Q186,447,150.5,397.5Q115,348,66,299Q17,250,64.5,200Q112,150,155,120Q198,90,248.5,94.5Q299,99,366,108Q433,117,464.5,183.5Q496,250,460.5,313.5Z;
            M428.5,304Q399,358,357.5,406.5Q316,455,247,464Q178,473,149.5,408Q121,343,75.5,296.5Q30,250,58.5,190.5Q87,131,134,84Q181,37,251,33.5Q321,30,355,89.5Q389,149,423.5,199.5Q458,250,428.5,304Z;
                      `})})]})}),t.jsx(h,{children:t.jsxs(j,{viewBox:"0 0 500 500",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",width:"700px",id:"blobSvg",children:[t.jsx("defs",{children:t.jsxs("linearGradient",{id:"gradient",x1:"0%",y1:"0%",x2:"0%",y2:"100%",children:[t.jsx("stop",{offset:"0%",style:{stopColor:"rgb(215, 227, 255)"}}),t.jsx("stop",{offset:"100%",style:{stopColor:"rgb(64, 123, 255)"}})]})}),t.jsx("path",{fill:"url(#gradient)",children:t.jsx("animate",{attributeName:"d",dur:"10000ms",repeatCount:"indefinite",values:`M428.5,295Q374,340,341.5,385Q309,430,252.5,424Q196,418,155.5,383Q115,348,64.5,299Q14,250,35.5,179.5Q57,109,128,101Q199,93,258,68Q317,43,371,83Q425,123,454,186.5Q483,250,428.5,295Z;
            M430.5,296.5Q378,343,340.5,378Q303,413,242,437.5Q181,462,119.5,425.5Q58,389,73.5,319.5Q89,250,95.5,196Q102,142,144.5,99Q187,56,245.5,69.5Q304,83,339.5,121Q375,159,429,204.5Q483,250,430.5,296.5Z;
            M429,322.5Q449,395,383,425.5Q317,456,252,450.5Q187,445,118.5,420.5Q50,396,31,323Q12,250,47,189Q82,128,133,87.5Q184,47,250,46.5Q316,46,368,86.5Q420,127,414.5,188.5Q409,250,429,322.5Z;
            M401.5,295.5Q375,341,343.5,391.5Q312,442,242.5,464.5Q173,487,145.5,416.5Q118,346,100.5,298Q83,250,104,204.5Q125,159,160,120Q195,81,259,53Q323,25,368,78Q413,131,420.5,190.5Q428,250,401.5,295.5Z;
            M460.5,315Q430,380,367,397.5Q304,415,238.5,451Q173,487,142,419Q111,351,88,300.5Q65,250,87,199Q109,148,150,107.5Q191,67,259,40Q327,13,381.5,64Q436,115,463.5,182.5Q491,250,460.5,315Z;
            M440,304Q399,358,351.5,387Q304,416,244.5,432.5Q185,449,118.5,421.5Q52,394,68,322Q84,250,93.5,196.5Q103,143,146.5,104Q190,65,253.5,55Q317,45,362,90.5Q407,136,444,193Q481,250,440,304Z;
            M408,300.5Q389,351,346,382.5Q303,414,243,435.5Q183,457,138,410.5Q93,364,87,307Q81,250,99,201.5Q117,153,157,120.5Q197,88,253.5,77Q310,66,369,93.5Q428,121,427.5,185.5Q427,250,408,300.5Z;
            M460.5,313.5Q425,377,369,411Q313,445,249.5,446Q186,447,150.5,397.5Q115,348,66,299Q17,250,64.5,200Q112,150,155,120Q198,90,248.5,94.5Q299,99,366,108Q433,117,464.5,183.5Q496,250,460.5,313.5Z;
            M428.5,304Q399,358,357.5,406.5Q316,455,247,464Q178,473,149.5,408Q121,343,75.5,296.5Q30,250,58.5,190.5Q87,131,134,84Q181,37,251,33.5Q321,30,355,89.5Q389,149,423.5,199.5Q458,250,428.5,304Z;
                      `})})]})}),t.jsxs(g,{children:[t.jsx(m,{children:Q("wrongPage")}),t.jsx(n,{children:Q("mainPage")}),t.jsx(n,{children:Q("willOpenIn")}),t.jsx(n,{children:s}),t.jsx(n,{children:Q("seconds")})]})]})})})})};export{y as default};
