const form = document.getElementById('leadForm');
const API_URL = 'https://cors-anywhere.herokuapp.com/https://my349193.crm.ondemand.com/sap/c4c/odata/v1/c4codataapi/LeadCollection';
form.addEventListener('submit', async (event) => {
  event.preventDefault(); // Prevents form from submitting the default way

  // Collect the form data
  const data = {
    Name: document.getElementById('name').value,
    IndividualCustomerGivenName: document.getElementById('individualCustomerGivenName').value,
    IndividualCustomerFamilyName: document.getElementById('individualCustomerFamilyName').value,
    IndividualCustomerEMail: document.getElementById('individualCustomerEMail').value,
    IndividualCustomerPhone: document.getElementById('individualCustomerPhone').value,
    IndividualCustomerAddressCity: document.getElementById('individualCustomerAddressCity').value,
    IndividualCustomerAddressCountry: document.getElementById('individualCustomerAddressCountry').value,
    Note: document.getElementById('note').value,
    NameLanguageCode: document.getElementById('nameLanguageCode').value,
    QualificationLevelCode: document.getElementById('qualificationLevelCode').value,
    OriginTypeCode: document.getElementById('originTypeCode').value,
    SalesOfficeID: document.getElementById('salesOfficeID').value,
    Brand2_KUT: document.getElementById('brand2_KUT').value,
    Model2_KUT: document.getElementById('model2_KUT').value,
    OwnerPartyUUID: document.getElementById('ownerPartyUUID').value
  };

  // Encode username and password for Basic Authentication
  const username = '_GDM'; // Replace with actual username
  const password = 'Welcome1'; // Replace with actual password
  const encodedCredentials = btoa(`${username}:${password}`);

  try {
    const response = await fetch(API_URL, {
      method: 'POST',
      headers: {
        'Authorization': `Basic ${encodedCredentials}`,
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify(data) // Convert data to JSON format
    });

    if (response.ok) {
      const responseData = await response.json();
      console.log('Lead submitted successfully:', responseData);
      alert('Lead submitted successfully!');
    } else {
      const errorData = await response.json();
      console.error('API responded with an error:', errorData);
      alert('Error submitting lead. Check console for details.');
    }
  } catch (error) {
    console.error('Network or server error:', error);
    alert('Network or server error. Check console for details.');
  }
});
