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
    if (theme.checked) {
        document.body.classList.add('darktheme');
        accordion.forEach(e => e.classList.add('darkthemeY'))
        questionContent.forEach(e => e.classList.add('darktheme'));
        qTitle.forEach(e => e.classList.add('lightcolor'));
        accordionBody.forEach(e => e.classList.add('darktheme'));
        count.forEach(e => e.classList.add('text-primary'));
        document.querySelector('.form-switch label').innerHTML = "Light";
    }
    else {
        document.querySelector('.form-switch label').innerHTML = "Dark";
        count.forEach(e => e.classList.remove('text-primary'));
        accordion.forEach(e => e.classList.remove('darkthemeY'))
        questionContent.forEach(e => e.classList.remove('darktheme'));
        qTitle.forEach(e => e.classList.remove('lightcolor'));
        accordionBody.forEach(e => e.classList.remove('darktheme'));
        document.body.classList.remove('darktheme');
    }
});