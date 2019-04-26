document.addEventListener('DOMContentLoaded', function() {
    document.querySelector('form').addEventListener('submit', function() {
    const username = document.querySelector('.form__user-name').value;
    const counter  = document.querySelector('.form__counter').value;
    const minProjects  = document.querySelector('.form__count').value;

    localStorage.setItem('username', username);
    localStorage.setItem('counter', counter);
    localStorage.setItem('minProjects', minProjects);

   

});
if(localStorage.getItem('counter') !== null  && localStorage.getItem('username') !== null && localStorage.getItem('minProjects') !== null) {
    const username = localStorage.getItem('username');
    const minProjects = localStorage.getItem('minProjects');
    let counter = localStorage.getItem('counter');
    let formBtn = document.querySelector('input.form__btn')
    let formUsername =  document.querySelector('.form__user-name');
    let formCount    =   document.querySelector('.form__counter');
    let formMinProjects =  document.querySelector('.form__count')
    let labelUsername =  document.querySelector('.form__user-name-icon');
    let labelCount    =   document.querySelector('.form__counter-icon');
    let labelMinProjects =  document.querySelector('.form__count-icon')
    formUsername.style.display = 'none';
    formCount.style.display = 'none';
    formMinProjects.style.display = 'none';
    labelUsername.style.display = 'none';
    labelMinProjects.style.display = 'none';
    labelCount.style.display = 'none';
    document.querySelector('.heading-primary').textContent = `Hey, ${username}`;
    let element = document.querySelector('form');
    const minProjectsUI = `<p class="count">We will send you notifcation if you have more than ${minProjects} offers every ${counter} minutes </p>`
    element.insertAdjacentHTML("afterbegin", minProjectsUI);

    formBtn.value = "Change";
    formBtn.addEventListener('click',  function() {
        formUsername.style.display = 'block';
        formMinProjects.style.display = 'block';
        formCount.style.display = 'block';
        labelUsername.style.display = 'block';
        labelCount.style.display = 'block';
        labelMinProjects.style.display = 'block';
        document.querySelector('.count').style.display = 'none';
        document.querySelector('.heading-primary').textContent = `Hey, Fiverr Notifcations`;
        document.querySelector('.special-p').style.display = 'block';

    })
}
else {
    formBtn.value = "Submit";

 
}
});