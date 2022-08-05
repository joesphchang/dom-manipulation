// Menu data structure
var menuLinks = [
	{ text: 'about', href: '/about' },
	{ text: 'catalog', href: '/catalog' },
	{ text: 'orders', href: '/orders' },
	{ text: 'account', href: '/account' },
];

// Task 1.0
mainEl = document.querySelector('main');
// Task 1.1
mainEl.style.backgroundColor = 'var(--main-bg)';
// Task 1.2
mainEl.innerHTML += '<h1>SEI ROCKS!</h1>';
// Task 1.3
mainEl.setAttribute('class', 'flex-ctr');

// Task 2.0
topMenuEl = document.querySelector('nav');

// Task 2.1
topMenuEl.style.height = '100%';

// Task 2.2
topMenuEl.style.backgroundColor = 'var(--top-menu-bg)';

// Task 2.3
topMenuEl.setAttribute('class', 'flex-around');


// Task 3.1
menuLinks.forEach(function(link) {
    let navLinks = document.createElement('a');
    navLinks.href = link.href;
    navLinks.textContent = link.text;
    topMenuEl.append(navLinks);
});