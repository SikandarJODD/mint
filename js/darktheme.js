const theme = document.getElementById('darktheme');
const accordion = document.querySelectorAll('.accordion-button');
// document.querySelector('.qtitle a').classList.add('text-light');
// document.querySelector('.accordion-body').classList.add('darktheme');
// document.querySelector('.count').classList.add('text-primary');
const questionContent = document.querySelectorAll('.question-content');
const qTitle = document.querySelectorAll('.qtitle a');
const accordionBody = document.querySelectorAll('.accordion-body');
const count = document.querySelectorAll('.count');


theme.addEventListener("change", () => {
    console.log(theme.checked);
    if (theme.checked) {
        console.log("NICE TRUE");
        document.body.classList.add('darktheme');
        accordion.forEach(e => e.classList.add('darkthemeY'))
        questionContent.forEach(e => e.classList.add('darktheme'));
        qTitle.forEach(e => e.classList.add('light'));
        accordionBody.forEach(e => e.classList.add('darktheme'));
        count.forEach(e=>e.classList.add('text-primary'));
    }
    else {
        count.forEach(e=>e.classList.remove('text-primary'));
        accordion.forEach(e => e.classList.remove('darkthemeY'))
        questionContent.forEach(e => e.classList.remove('darktheme'));
        qTitle.forEach(e => e.classList.remove('light'));
        accordionBody.forEach(e => e.classList.remove('darktheme'));
        console.log("BRO FALSE");
        document.body.classList.remove('darktheme');
    }
});