const searchPhone = () => {
    const searchField = document.getElementById('search-field');
    const searchText = searchField.value;
    console.log(searchText);
    searchField.value = '';
    const url = `https://openapi.programming-hero.com/api/phones?search=${searchText}`;
    fetch(url)
        .then(res => res.json())
        .then(data => displaySearchResult(data.data));
}
const displaySearchResult = phones => {
    const selectedPhone = phones.slice(0, 20);
    // console.log(selectedPhone);
    const searchResult = document.getElementById('search-result');
    selectedPhone.forEach(phone => {
        console.log(phone);
        const div = document.createElement('div');
        div.classList.add('col');
        div.innerHTML = `
              <div class="card h-100">
              <img src="${phone.image}" class="card-img-top w-50 mx-auto" alt="...">
              <div class="card-body">
              <h5 class="card-title">${phone.phone_name}</h5>
               <p class="card-text">${phone.brand}</p>
               <button onclick="loadPhoneDetail('${phone.slug}')" type="button" class="btn btn-primary">Explore</button>
             </div>
             </div>
             `;
        searchResult.appendChild(div);
    })
}
const loadPhoneDetail = phoneId => {
    console.log(phoneId);
    const url = `https://openapi.programming-hero.com/api/phone/${phoneId}`;
    fetch(url)
        .then(res => res.json())
        .then(data => displayPhoneDetail(data.data));
}
const displayPhoneDetail = detail => {
    console.log(detail.others);
    const phoneDetails = document.getElementById('phone-details');
    const div = document.createElement('div');
    div.classList.add('card');
    div.innerHTML = `
    <img src="${detail.image}" class="card-img-top w-50 mx-auto" alt="...">
    <div class="card-body">
        <h5 class="card-title">Name: ${detail.name}</h5>
        <p class="card-text">Release Date: ${detail.releaseDate}</p>
        <h5>Storage: ${detail.mainFeatures.storage}</h5>
        <h5>DisplaySize: ${detail.mainFeatures.displaySize}</h5>
        <h5>Chipset: ${detail.mainFeatures.chipSet}</h5>
        <h5>Memory: ${detail.mainFeatures.memory}</h5>
        <h5>Sensors: ${detail.mainFeatures.sensors}</h5>
        <h5>Others</h5>
        <h5>Bluetooth: ${detail.others.Bluetooth}</h5>
        <h5>GPS: ${detail.others.GPS}</h5>
        <h5>NFC: ${detail.others.NFC}</h5>
        <h5>Radio: ${detail.others.Radio}</h5>
        <h5>USB: ${detail.others.USB}</h5>
        <h5>WLAN: ${detail.others.WLAN}</h5>
    </div>`;
    phoneDetails.appendChild(div);
}