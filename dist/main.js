/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/
var _this = this;
var sections = document.querySelectorAll('section[id]');
var scrollActive = function () {
    var scrollY = window.scrollY;
    sections.forEach(function (current) {
        var currentElement = current;
        var sectionHeight = currentElement.offsetHeight, sectionTop = currentElement.offsetTop - 58, sectionId = current.getAttribute('id'), sectionsClass = document.querySelector('.nav__menu a[href*=' + sectionId + ']');
        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            sectionsClass.classList.add('active-link');
        }
        else {
            sectionsClass.classList.remove('active-link');
        }
    });
};
window.addEventListener('scroll', scrollActive);
/*==================== SHOW SCROLL TOP ====================*/
var scrollUp = function () {
    var scrollUp = document.getElementById('scroll-up');
    // When the scroll is higher than 200 viewport height, add the show-scroll class to the a tag with the scroll-top class 
    _this.scrollY >= 200 ? scrollUp.classList.add('show-scroll') : scrollUp.classList.remove('show-scroll');
};
window.addEventListener('scroll', scrollUp);
var scrollButton = document.getElementById('scroll-up');
scrollButton.addEventListener('click', function (e) {
    e.preventDefault();
    e.stopPropagation();
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
});
/*=============== DARK LIGHT THEME ===============*/
var themeButton = document.getElementById('theme-button');
var darkTheme = 'dark-theme';
var iconTheme = 'ri-sun-line';
// Previously selected topic (if user selected)
var selectedTheme = localStorage.getItem('selected-theme');
var selectedIcon = localStorage.getItem('selected-icon');
// We obtain the current theme that the interface has by validating the dark-theme class
var getCurrentTheme = function () { return document.body.classList.contains(darkTheme) ? 'dark' : 'light'; };
var getCurrentIcon = function () { return themeButton.classList.contains(iconTheme) ? 'ri-moon-line' : 'ri-sun-line'; };
// We validate if the user previously chose a topic
if (selectedTheme) {
    // If the validation is fulfilled, we ask what the issue was to know if we activated or deactivated the dark
    document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme);
    themeButton.classList[selectedIcon === 'ri-moon-line' ? 'add' : 'remove'](iconTheme);
}
// Activate / deactivate the theme manually with the button
themeButton.addEventListener('click', function () {
    // Add or remove the dark / icon theme
    document.body.classList.toggle(darkTheme);
    themeButton.classList.toggle(iconTheme);
    // We save the theme and the current icon that the user chose
    localStorage.setItem('selected-theme', getCurrentTheme());
    localStorage.setItem('selected-icon', getCurrentIcon());
});
/* ==================== TOGGLE TECHNOLOGIES ==================== */
var toggleTechs = function (e) {
    var _a;
    var label = e === null || e === void 0 ? void 0 : e.target;
    label.classList.toggle('active');
    var grid = document.getElementById((_a = label === null || label === void 0 ? void 0 : label.dataset) === null || _a === void 0 ? void 0 : _a.grid);
    grid.classList.toggle('active');
};
var techLabels = document.querySelectorAll('.technologies__used');
techLabels.forEach(function (label) {
    label.addEventListener('click', toggleTechs);
});
/*==================== GENERATE PDF ====================*/
// PDF generated area
// for future use...
// const resume = document.getElementById('area-cv');
// const downloadLink = document.querySelector('.download__button');
// downloadLink?.addEventListener('click', (e) => {
//     e.preventDefault();
//     e.stopPropagation();    
//     html2pdf(resume);
// });
