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
    const searchResult = document.getElementById('search-result');
    phones.forEach(phone => {
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
    console.log(detail.mainFeatures);
    const phoneDetails = document.getElementById('phone-details');
    const div = document.createElement('div');
    div.classList.add('card');
    div.innerHTML = `
    <img src="${detail.image}" class="card-img-top w-50 mx-auto" alt="...">
    <div class="card-body">
        <h5 class="card-title">${detail.name}</h5>
        <p class="card-text">${detail.releaseDate}</p>
        <h5>${detail.mainFeatures.storage}</h5>
        <h5>${detail.mainFeatures.displaySize}</h5>
        <h5>${detail.mainFeatures.chipSet}</h5>
        <h5>${detail.mainFeatures.memory}</h5>
        <a href="#" class="btn btn-primary">Go somewhere</a>
    </div>`;
    phoneDetails.appendChild(div);
}