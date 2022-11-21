import React, { useState } from "react";

export default function CompanyChangeFC() {
  const [companyName, setCompanyName] = useState("AU Bank");
  const [countryOfOrigin, setCountryOfOrigin] = useState("India");

  const changeCompany = () => {
    setCompanyName("AU Small Finance Bank");
  };

  return (
    <div>
      <h3>Company Component -- State in Functional Component</h3>
      <br />
      <br />
      Company Name: {companyName}
      <br />
      <br />
      Country of Origin: {countryOfOrigin}
      <br />
      <br />
      <button onClick={changeCompany}>Click Me</button>
    </div>
  );
}
