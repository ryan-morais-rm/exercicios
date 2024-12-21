const ipData = [];
const searchButton = document.querySelector('#searchBtn');
const ipInput = document.querySelector('#ipInput');
const resultsTable = document.querySelector('#resultsTable');
const tableBody = resultsTable.querySelector('tbody');
const alertContainer = document.querySelector('#alert-container');
searchButton.addEventListener('click', fetchIPInfo);
ipInput.addEventListener('keypress', (e) => {
  if (e.key === 'Enter') fetchIPInfo();
});

function fetchIPInfo() {
  const ipAddress = ipInput.value.trim();

  if (!ipAddress) {
    displayAlert('Please enter a valid IP address.', 'warning');
    return;
  }

  if (ipData.some((entry) => entry.ip === ipAddress)) {
    displayAlert('IP already exists in the table.', 'info');
    return;
  }

  const apiUrl = `https://ipinfo.io/${ipAddress}/json?token=ea38c5437881ca`;
  fetch(apiUrl)
    .then((response) => response.json())
    .then((data) => {
      const entry = {
        ip: data.ip || '-',
        org: data.org?.split(' ').slice(1).join(' ') || '-',
        country: data.country || '-',
        city: data.city || '-',
      };
      ipData.push(entry);
      updateTable();
    })
    .catch(() => displayAlert('Failed to fetch IP information.', 'error'));
}

function updateTable() {
  resultsTable.classList.remove('hidden');
  tableBody.innerHTML = ipData
    .map(
      (entry, index) => `
      <tr class="border-t">
        <td class="px-4 py-2">${entry.ip}</td>
        <td class="px-4 py-2">${entry.org}</td>
        <td class="px-4 py-2">${entry.country}</td>
        <td class="px-4 py-2">${entry.city}</td>
        <td class="px-4 py-2 text-center">
          <button class="text-red-500" onclick="removeEntry(${index})">Remove</button>
        </td>
      </tr>`
    )
    .join('');
}

function removeEntry(index) {
  ipData.splice(index, 1);
  if (ipData.length === 0) resultsTable.classList.add('hidden');
  updateTable();
}

function displayAlert(message, type) {
  const colors = {
    warning: 'bg-yellow-100 text-yellow-700',
    error: 'bg-red-100 text-red-700',
    info: 'bg-blue-100 text-blue-700',
  };
  alertContainer.innerHTML = `
    <div class="p-4 rounded ${colors[type]}">
      <p>${message}</p>
    </div>`;
  setTimeout(() => (alertContainer.innerHTML = ''), 3000);
}