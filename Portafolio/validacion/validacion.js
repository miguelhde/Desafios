document.addEventListener('DOMContentLoaded', function () {
    const menuToggle = document.querySelector('.menu__toggle');
    const menuNav = document.querySelector('.menu__nav'); 
    const menuList = document.querySelector('.menu__list');

    
    menuToggle.addEventListener('click', function () {
        
        menuNav.style.display = menuNav.style.display === 'block' ? 'none' : 'block';
    });

    
    function toggleMenuDisplay() {
        if (window.matchMedia("(max-width: 1339px)").matches) {
            
            menuNav.style.display = 'none';
            menuToggle.style.display = 'flex'; 
        } else {
            
            menuNav.style.display = 'flex';
            menuToggle.style.display = 'none'; 
        }
    }

    
    toggleMenuDisplay(); 

    window.addEventListener('resize', toggleMenuDisplay); 
});



function toggleMenu() {
    var menuNav = document.getElementById("menuNav");
    if (menuNav.style.display === "block") {
        menuNav.style.display = "none";
    } else {
        menuNav.style.display = "block";
    }
}



function alternarPosiciones() {
    const boxes = document.querySelectorAll('.experience__box');

    boxes.forEach((box, index) => {
        if (index > 0 && index % 2 !== 0) {
            
            box.style.flexDirection = 'row-reverse';
            box.querySelector('.experience__img').style.marginRight = '0';
            box.querySelector('.experience__info-container').style.textAlign = 'right';
        }
    });
}


document.addEventListener('DOMContentLoaded', () => {
    alternarPosiciones();
});


function configurarEstilosInfoContainers() {
    const infoContainers = document.querySelectorAll('.experience__info-container');

    infoContainers.forEach(container => {
        container.style.textAlign = 'left'; 
        container.style.width = '368px'; 
        container.style.height = '112px'; 
    });
}


document.addEventListener('DOMContentLoaded', () => {
    configurarEstilosInfoContainers();
});

