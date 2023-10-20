const header = document.querySelector('header');
let isHeaderTransparent = true;

function changeHeaderBack() 
{
    if (window.scrollY > 50 && isHeaderTransparent) 
    {
        header.style.backgroundColor = 'rgba(0, 0, 0, 0.4)';
        isHeaderTransparent = false; //фон змінився
    } 
    else if (window.scrollY <= 50 && !isHeaderTransparent) 
    {
        header.style.backgroundColor = 'rgba(0, 0, 0, 0)';
        isHeaderTransparent = true; //фон повернувся до початкового стану
    }
}

window.addEventListener('scroll', changeHeaderBack);
