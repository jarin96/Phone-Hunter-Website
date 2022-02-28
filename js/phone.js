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
    console.log(detail);
    const phoneDetails = document.getElementById('phone-details');
}