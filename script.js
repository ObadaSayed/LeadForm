const form = document.getElementById('leadForm');
const API_URL = 'https://my349193.crm.ondemand.com/sap/c4c/odata/v1/c4codataapi/LeadCollection';

form.addEventListener('submit', async (event) => {
  event.preventDefault();

  // Collect form data
  const data = new FormData(form);

  // Prepare the Basic Authentication header (username and password should ideally be securely managed)
  const username = '_GDM'; // Replace with your actual username
  const password = 'Welcome1'; // Replace with your actual password
  const encodedCredentials = btoa(`${username}:${password}`);

  // Prepare the data in JSON format (OData typically accepts JSON payloads)
  const jsonData = {
    Name: data.get('Name'),
    IndividualCustomerGivenName: data.get('IndividualCustomerGivenName'),
    IndividualCustomerFamilyName: data.get('IndividualCustomerFamilyName'),
    IndividualCustomerEMail: data.get('IndividualCustomerEMail'),
    IndividualCustomerPhone: data.get('IndividualCustomerPhone'),
    IndividualCustomerAddressCity: data.get('IndividualCustomerAddressCity'),
    IndividualCustomerAddressCountry: data.get('IndividualCustomerAddressCountry'),
    Note: data.get('Note'),
    NameLanguageCode: data.get('NameLanguageCode'),
    QualificationLevelCode: data.get('QualificationLevelCode'),
    OriginTypeCode: data.get('OriginTypeCode'),
    SalesOfficeID: data.get('SalesOfficeID'),
    Brand2_KUT: data.get('Brand2_KUT'),
    Model2_KUT: data.get('Model2_KUT'),
    OwnerPartyUUID: data.get('OwnerPartyUUID'),
  };

  try {
    const response = await fetch(API_URL, {
      method: 'POST',
      headers: {
        'Authorization': `Basic ${encodedCredentials}`, // Pass credentials for authentication
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify(jsonData) // Send the form data in the request body
    });

    if (response.ok) {
      const responseData = await response.json();
      console.log('Lead submitted successfully:', responseData);
      alert('Lead submitted successfully!');
    } else {
      const errorData = await response.json();
      console.error('Error submitting lead:', errorData);
      alert('There was an error submitting the lead.');
    }
  } catch (error) {
    console.error('Network or server error:', error);
    alert('There was a network or server error.');
  }
});
