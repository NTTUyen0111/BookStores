/*=====header=====*/
const header = document.querySelector('.header')
fetch('../layouts/header.html')
.then(res=>res.text())
.then(data=>{
    header.innerHTML=data
})

/*=====main=====*/
const main = document.querySelector('.main')
fetch('../layouts/main.html')
.then(res=>res.text())
.then(data=>{
    main.innerHTML=data
})

/*=====footer=====*/
const footer = document.querySelector('.footer')
fetch('../layouts/footer.html')
.then(res=>res.text())
.then(data=>{
    footer.innerHTML=data
})
