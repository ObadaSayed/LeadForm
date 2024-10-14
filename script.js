const form = document.getElementById('leadForm');
const API_URL = 'https://my349193.crm.ondemand.com/sap/c4c/odata/v1/c4codataapi/LeadCollection';

form.addEventListener('submit', async (event) => {
  event.preventDefault();

  const data = new FormData(form);

  const username = '_GDM'; // Replace with your actual username
  const password = 'Welcome1'