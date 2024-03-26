import{s as t}from"./index-0c4c79ac.js";const n=t.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  /* align-items: center; */
  margin-top: 100px;

  @media only screen and (min-width: 1280px) {
    max-width: 768px;
  }
`,i=t.form`
  display: flex;
  flex-direction: column;
`,r=t.h2`
  font-weight: 500;
  font-size: 26px;
  line-height: 32px;
  margin-bottom: 25px;
`,a=t.label`
  display: flex;
  flex-direction: column;
  font-size: 18px;
  line-height: 24px;
  margin-bottom: 16px;
  position: relative;
  button {
    top: 48%;
  }

  @media only screen and (min-width: 1280px) {
    button {
      top: 48%;
      right: 37%;
    }
  }
`,p=t.input`
  margin-top: 8px;
  padding: 12px 10px;
  border-radius: 6px;
  background-color: ${o=>o.theme.formInputBackground};
  border: 1px solid var(${o=>o.theme.inputOnlyColor});
  outline: none;
  color: var(--blue);
  margin-bottom: 20px;

  @media only screen and (min-width: 1280px) {
    max-width: 500px;
  }

  &::placeholder {
    color: var(${o=>o.theme.inputColorText});
    font-size: 16px;
    line-height: 20px;
  }
`,l=t.button`
  margin-bottom: 16px;
  background-color: var(--blue);
  border: 1px solid var(--blue);
  color: ${o=>o.theme.buttonColor};
  padding: 8px 30px;
  border-radius: 10px;
  max-width: 150px;
  /* margin-left: auto; */

  box-shadow: ${o=>o.theme.boxShodov};
  transition: all 0.4s;

  &:hover,
  &:focus {
    box-shadow: 0 4px 14px 0 rgba(64, 123, 255, 0.54);
  }
  white-space: nowrap;

  @media only screen and (min-width: 768px) {
    /* font-size: 18px; */
  }
`;export{n as F,r as a,i as b,a as c,p as d,l as e};
