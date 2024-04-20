
const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.btn-right',
      prevEl: '.btn-left',
    },
  
    // And if we need scrollbar
})

const toggleContentByTab = () => {

    let tabs = document.querySelectorAll('.products-block__tab')
    let contents = document.querySelectorAll('.products-block__wrapper')
    // console.log(tabs);
    // console.log(content)


    tabs.forEach((tab, index )=> {
        console.log(tab);

        tab.addEventListener('click', () => {

            tabs.forEach(tab_2 => {
                tab_2.classList.remove('active');
            });

            contents.forEach((content) => {
                content.classList.remove('active')
            })


            tab.classList.add('active')
            contents[index].classList.add('active')
        })


    })

}

toggleContentByTab();






var burger = document.querySelector('.burger');
var mobileMenu = document.querySelector('.mobile-menu')
var cross = document.querySelector('.cross')

burger.addEventListener('click',() => {
    burger.classList.toggle('act')


})