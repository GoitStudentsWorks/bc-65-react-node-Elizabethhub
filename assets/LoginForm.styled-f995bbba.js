import{s as r,at as e}from"./index-0c4c79ac.js";const t=r.div`
  margin-top: 24px;
  margin-bottom: 66px;
  @media only screen and (min-width: 768px) {
    max-width: 336px;
  }

  @media only screen and (min-width: 1280px) {
    margin-top: 162px;
    min-width: 384px;
  }
`,i=r.form`
  display: flex;
  flex-direction: column;

  label:first-child > input {
    border: 1px solid
      var(
        ${o=>o.$errorEmail?"--primary-red":o.theme.inputOnlyColor}
      );

    color: var(${o=>o.$errorEmail?"--primary-red":"--blue"});
  }
  label:nth-child(2) > input {
    border: 1px solid
      var(
        ${o=>o.$errorPassword?"--primary-red":o.theme.inputOnlyColor}
      );

    color: var(
      ${o=>o.$errorPassword?"--primary-red":"--blue"}
    );
  }
  label:nth-child(3) > input {
    border: 1px solid
      var(
        ${o=>o.$errorPassword?"--primary-red":o.theme.inputOnlyColor}
      );

    color: var(
      ${o=>o.$errorPassword?"--primary-red":"--blue"}
    );
  }
`,a=r.h2`
  font-weight: 500;
  font-size: 26px;
  line-height: 32px;
  margin-bottom: 16px;
`,l=r.input`
  margin-top: 8px;
  padding: 12px 10px;
  border-radius: 6px;
  border: ${o=>o.theme.input};
  outline: none;
  background-color: ${o=>o.theme.formInputBackground};
  color: ${o=>o.theme.formInputColor};

  &::placeholder {
    color: var(${o=>o.theme.inputColorText});
    font-size: 16px;
    line-height: 20px;
  }
`,p=r.label`
  display: flex;
  flex-direction: column;
  font-size: 18px;
  line-height: 24px;
  margin-bottom: 16px;
  position: relative;
`,d=r.button`
  margin-bottom: 16px;

  border: 1px solid var(--blue);

  padding: 8px 30px;
  border-radius: 10px;

  box-shadow: ${o=>o.theme.boxShodov};
  transition: all 0.4s;
  background: ${o=>o.theme.buttonBackground};
  color: ${o=>o.theme.buttonColor};
  &:hover,
  &:focus {
    box-shadow: 0 4px 14px 0 rgba(64, 123, 255, 0.54);
  }

  @media only screen and (min-width: 768px) {
    font-size: 18px;
  }
`,s=r(e)`
  color: var(--blue);
  transition: all 0.4s;
  &:hover,
  &:focus {
    color: var(--primary-orange);
  }

  margin-right: 10px;
`,m=r.button`
  background-color: transparent;
  border: none;
  position: absolute;
  right: 10px;
  top: 47px;
  height: 16px;
  width: 16px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0;
`;export{t as F,a as H,p as L,m as P,i as S,l as a,d as b,s as c};
