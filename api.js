const result = document.getElementById('res')
const SEARCH_API = 'https://randomuser.me/api?results=50'

const list = []

datas()



async function datas() {
    const res = await fetch('https://randomuser.me/api?results=50')
    const search = document.getElementById('search')
    
    const { results } = await res.json()


    result.innerHTML = ''

    results.forEach(user => {
        const li = document.createElement('li')

        list.push(li)

        li.innerHTML = `
            <img src="${user.picture.medium}" alt="${user.name.first}">
            <div class="user-info">
                <h4>${user.name.first} ${user.name.last} </h4>
                <p>${user.email}</p>
                <p>${user.location.city}, ${user.location.country}</p>
            </div>
        `

        result.appendChild(li)
    })
}

