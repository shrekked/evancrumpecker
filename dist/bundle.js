/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/main.ts":
/*!************************!*\
  !*** ./src/js/main.ts ***!
  \************************/
/***/ (function() {

/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/
const sections = document.querySelectorAll('section[id]');
const scrollActive = () => {
    const scrollY = window.scrollY;
    sections.forEach(current => {
        const currentElement = current;
        const sectionHeight = currentElement.offsetHeight, sectionTop = currentElement.offsetTop - 58, sectionId = current.getAttribute('id'), sectionsClass = document.querySelector('.nav__menu a[href*=' + sectionId + ']');
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
const scrollUp = () => {
    const scrollUp = document.getElementById('scroll-up');
    // When the scroll is higher than 200 viewport height, add the show-scroll class to the a tag with the scroll-top class 
    this.scrollY >= 200 ? scrollUp.classList.add('show-scroll') : scrollUp.classList.remove('show-scroll');
};
window.addEventListener('scroll', scrollUp);
const scrollButton = document.getElementById('scroll-up');
scrollButton.addEventListener('click', (e) => {
    e.preventDefault();
    e.stopPropagation();
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
});
/*=============== DARK LIGHT THEME ===============*/
const themeButton = document.getElementById('theme-button');
const darkTheme = 'dark-theme';
const iconTheme = 'ri-sun-line';
// Previously selected topic (if user selected)
const selectedTheme = localStorage.getItem('selected-theme');
const selectedIcon = localStorage.getItem('selected-icon');
// We obtain the current theme that the interface has by validating the dark-theme class
const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light';
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'ri-moon-line' : 'ri-sun-line';
// We validate if the user previously chose a topic
if (selectedTheme) {
    // If the validation is fulfilled, we ask what the issue was to know if we activated or deactivated the dark
    document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme);
    themeButton.classList[selectedIcon === 'ri-moon-line' ? 'add' : 'remove'](iconTheme);
}
// Activate / deactivate the theme manually with the button
themeButton.addEventListener('click', () => {
    // Add or remove the dark / icon theme
    document.body.classList.toggle(darkTheme);
    themeButton.classList.toggle(iconTheme);
    // We save the theme and the current icon that the user chose
    localStorage.setItem('selected-theme', getCurrentTheme());
    localStorage.setItem('selected-icon', getCurrentIcon());
});
/* ==================== TOGGLE TECHNOLOGIES ==================== */
const toggleTechs = (e) => {
    var _a;
    const label = e === null || e === void 0 ? void 0 : e.target;
    label.classList.toggle('active');
    const grid = document.getElementById((_a = label === null || label === void 0 ? void 0 : label.dataset) === null || _a === void 0 ? void 0 : _a.grid);
    grid.classList.toggle('active');
};
const techLabels = document.querySelectorAll('.technologies__used');
techLabels.forEach((label) => {
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


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/js/main.ts"]();
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBLHlFQUF5RTtBQUV6RSxNQUFNLFFBQVEsR0FBRyxRQUFRLENBQUMsZ0JBQWdCLENBQUMsYUFBYSxDQUFDO0FBRXpELE1BQU0sWUFBWSxHQUFHLEdBQUcsRUFBRTtJQUN2QixNQUFNLE9BQU8sR0FBRyxNQUFNLENBQUMsT0FBTyxDQUFDO0lBRWpDLFFBQVEsQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLEVBQUU7UUFDcEIsTUFBTSxjQUFjLEdBQXNCLE9BQVEsQ0FBQztRQUN6RCxNQUFNLGFBQWEsR0FBRyxjQUFjLENBQUMsWUFBWSxFQUM5QyxVQUFVLEdBQUcsY0FBYyxDQUFDLFNBQVMsR0FBRyxFQUFFLEVBQzFDLFNBQVMsR0FBRyxPQUFPLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxFQUN0QyxhQUFhLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxxQkFBcUIsR0FBRyxTQUFTLEdBQUcsR0FBRyxDQUFDO1FBRWxGLElBQUcsT0FBTyxHQUFHLFVBQVUsSUFBSSxPQUFPLElBQUksVUFBVSxHQUFHLGFBQWEsRUFBQztZQUNoRSxhQUFhLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxhQUFhLENBQUM7U0FDMUM7YUFBSTtZQUNKLGFBQWEsQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLGFBQWEsQ0FBQztTQUM3QztJQUNGLENBQUMsQ0FBQztBQUNILENBQUM7QUFDRCxNQUFNLENBQUMsZ0JBQWdCLENBQUMsUUFBUSxFQUFFLFlBQVksQ0FBQztBQUUvQyw2REFBNkQ7QUFDN0QsTUFBTSxRQUFRLEdBQUcsR0FBRyxFQUFFO0lBQ2xCLE1BQU0sUUFBUSxHQUFHLFFBQVEsQ0FBQyxjQUFjLENBQUMsV0FBVyxDQUFDLENBQUM7SUFDdEQsd0hBQXdIO0lBQ3hILElBQUksQ0FBQyxPQUFPLElBQUksR0FBRyxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsYUFBYSxDQUFDLENBQUM7QUFDM0csQ0FBQztBQUNELE1BQU0sQ0FBQyxnQkFBZ0IsQ0FBQyxRQUFRLEVBQUUsUUFBUSxDQUFDLENBQUM7QUFFNUMsTUFBTSxZQUFZLEdBQUcsUUFBUSxDQUFDLGNBQWMsQ0FBQyxXQUFXLENBQUMsQ0FBQztBQUMxRCxZQUFZLENBQUMsZ0JBQWdCLENBQUMsT0FBTyxFQUFFLENBQUMsQ0FBQyxFQUFFLEVBQUU7SUFDekMsQ0FBQyxDQUFDLGNBQWMsRUFBRSxDQUFDO0lBQ25CLENBQUMsQ0FBQyxlQUFlLEVBQUUsQ0FBQztJQUNwQixNQUFNLENBQUMsUUFBUSxDQUFDLEVBQUMsR0FBRyxFQUFDLENBQUMsRUFBRSxJQUFJLEVBQUMsQ0FBQyxFQUFFLFFBQVEsRUFBQyxRQUFRLEVBQUMsQ0FBQyxDQUFDO0FBQ3hELENBQUMsQ0FBQyxDQUFDO0FBRUgsb0RBQW9EO0FBQ3BELE1BQU0sV0FBVyxHQUFHLFFBQVEsQ0FBQyxjQUFjLENBQUMsY0FBYyxDQUFDO0FBQzNELE1BQU0sU0FBUyxHQUFHLFlBQVk7QUFDOUIsTUFBTSxTQUFTLEdBQUcsYUFBYTtBQUUvQiwrQ0FBK0M7QUFDL0MsTUFBTSxhQUFhLEdBQUcsWUFBWSxDQUFDLE9BQU8sQ0FBQyxnQkFBZ0IsQ0FBQztBQUM1RCxNQUFNLFlBQVksR0FBRyxZQUFZLENBQUMsT0FBTyxDQUFDLGVBQWUsQ0FBQztBQUUxRCx3RkFBd0Y7QUFDeEYsTUFBTSxlQUFlLEdBQUcsR0FBRyxFQUFFLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLE9BQU87QUFDNUYsTUFBTSxjQUFjLEdBQUcsR0FBRyxFQUFFLENBQUMsV0FBVyxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLGNBQWMsQ0FBQyxDQUFDLENBQUMsYUFBYTtBQUV2RyxtREFBbUQ7QUFDbkQsSUFBSSxhQUFhLEVBQUU7SUFDakIsNEdBQTRHO0lBQzVHLFFBQVEsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLGFBQWEsS0FBSyxNQUFNLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUMsU0FBUyxDQUFDO0lBQy9FLFdBQVcsQ0FBQyxTQUFTLENBQUMsWUFBWSxLQUFLLGNBQWMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxTQUFTLENBQUM7Q0FDckY7QUFFRCwyREFBMkQ7QUFDM0QsV0FBVyxDQUFDLGdCQUFnQixDQUFDLE9BQU8sRUFBRSxHQUFHLEVBQUU7SUFDdkMsc0NBQXNDO0lBQ3RDLFFBQVEsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUM7SUFDekMsV0FBVyxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDO0lBQ3ZDLDZEQUE2RDtJQUM3RCxZQUFZLENBQUMsT0FBTyxDQUFDLGdCQUFnQixFQUFFLGVBQWUsRUFBRSxDQUFDO0lBQ3pELFlBQVksQ0FBQyxPQUFPLENBQUMsZUFBZSxFQUFFLGNBQWMsRUFBRSxDQUFDO0FBQzNELENBQUMsQ0FBQztBQUVGLG1FQUFtRTtBQUNuRSxNQUFNLFdBQVcsR0FBRyxDQUFDLENBQVEsRUFBRSxFQUFFOztJQUM3QixNQUFNLEtBQUssR0FBc0IsQ0FBQyxhQUFELENBQUMsdUJBQUQsQ0FBQyxDQUFFLE1BQU8sQ0FBQztJQUM1QyxLQUFLLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUNqQyxNQUFNLElBQUksR0FBRyxRQUFRLENBQUMsY0FBYyxDQUFDLFdBQUssYUFBTCxLQUFLLHVCQUFMLEtBQUssQ0FBRSxPQUFPLDBDQUFFLElBQUksQ0FBQyxDQUFDO0lBQzNELElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0FBQ3BDLENBQUM7QUFDRCxNQUFNLFVBQVUsR0FBRyxRQUFRLENBQUMsZ0JBQWdCLENBQUMscUJBQXFCLENBQUMsQ0FBQztBQUNwRSxVQUFVLENBQUMsT0FBTyxDQUFDLENBQUMsS0FBSyxFQUFFLEVBQUU7SUFDekIsS0FBSyxDQUFDLGdCQUFnQixDQUFDLE9BQU8sRUFBRSxXQUFXLENBQUMsQ0FBQztBQUNqRCxDQUFDLENBQUMsQ0FBQztBQUVILDBEQUEwRDtBQUMxRCxxQkFBcUI7QUFFckIsb0JBQW9CO0FBQ3BCLHFEQUFxRDtBQUNyRCxvRUFBb0U7QUFDcEUsbURBQW1EO0FBQ25ELDBCQUEwQjtBQUMxQiwrQkFBK0I7QUFDL0Isd0JBQXdCO0FBQ3hCLE1BQU07Ozs7Ozs7O1VFMUZOO1VBQ0E7VUFDQTtVQUNBO1VBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9FdmFuIENydW1wZWNrZXIgUmVzcG9uc2l2ZSBSZXN1bWUvLi9zcmMvanMvbWFpbi50cyIsIndlYnBhY2s6Ly9FdmFuIENydW1wZWNrZXIgUmVzcG9uc2l2ZSBSZXN1bWUvd2VicGFjay9iZWZvcmUtc3RhcnR1cCIsIndlYnBhY2s6Ly9FdmFuIENydW1wZWNrZXIgUmVzcG9uc2l2ZSBSZXN1bWUvd2VicGFjay9zdGFydHVwIiwid2VicGFjazovL0V2YW4gQ3J1bXBlY2tlciBSZXNwb25zaXZlIFJlc3VtZS93ZWJwYWNrL2FmdGVyLXN0YXJ0dXAiXSwic291cmNlc0NvbnRlbnQiOlsiLyo9PT09PT09PT09PT09PT09PT09PSBTQ1JPTEwgU0VDVElPTlMgQUNUSVZFIExJTksgPT09PT09PT09PT09PT09PT09PT0qL1xyXG5cclxuY29uc3Qgc2VjdGlvbnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdzZWN0aW9uW2lkXScpXHJcbiAgICBcclxuY29uc3Qgc2Nyb2xsQWN0aXZlID0gKCkgPT57XHJcbiAgXHRjb25zdCBzY3JvbGxZID0gd2luZG93LnNjcm9sbFk7XHJcblxyXG5cdHNlY3Rpb25zLmZvckVhY2goY3VycmVudCA9PntcclxuICAgICAgICBjb25zdCBjdXJyZW50RWxlbWVudCA9ICg8SFRNTElucHV0RWxlbWVudD5jdXJyZW50KTtcclxuXHRcdGNvbnN0IHNlY3Rpb25IZWlnaHQgPSBjdXJyZW50RWxlbWVudC5vZmZzZXRIZWlnaHQsXHJcblx0XHRcdCAgc2VjdGlvblRvcCA9IGN1cnJlbnRFbGVtZW50Lm9mZnNldFRvcCAtIDU4LFxyXG5cdFx0XHQgIHNlY3Rpb25JZCA9IGN1cnJlbnQuZ2V0QXR0cmlidXRlKCdpZCcpLFxyXG5cdFx0XHQgIHNlY3Rpb25zQ2xhc3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubmF2X19tZW51IGFbaHJlZio9JyArIHNlY3Rpb25JZCArICddJylcclxuXHJcblx0XHRpZihzY3JvbGxZID4gc2VjdGlvblRvcCAmJiBzY3JvbGxZIDw9IHNlY3Rpb25Ub3AgKyBzZWN0aW9uSGVpZ2h0KXtcclxuXHRcdFx0c2VjdGlvbnNDbGFzcy5jbGFzc0xpc3QuYWRkKCdhY3RpdmUtbGluaycpXHJcblx0XHR9ZWxzZXtcclxuXHRcdFx0c2VjdGlvbnNDbGFzcy5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUtbGluaycpXHJcblx0XHR9ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG5cdH0pXHJcbn1cclxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIHNjcm9sbEFjdGl2ZSlcclxuXHJcbi8qPT09PT09PT09PT09PT09PT09PT0gU0hPVyBTQ1JPTEwgVE9QID09PT09PT09PT09PT09PT09PT09Ki8gXHJcbmNvbnN0IHNjcm9sbFVwID0gKCkgPT4ge1xyXG4gICAgY29uc3Qgc2Nyb2xsVXAgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2Nyb2xsLXVwJyk7XHJcbiAgICAvLyBXaGVuIHRoZSBzY3JvbGwgaXMgaGlnaGVyIHRoYW4gMjAwIHZpZXdwb3J0IGhlaWdodCwgYWRkIHRoZSBzaG93LXNjcm9sbCBjbGFzcyB0byB0aGUgYSB0YWcgd2l0aCB0aGUgc2Nyb2xsLXRvcCBjbGFzcyBcclxuICAgIHRoaXMuc2Nyb2xsWSA+PSAyMDAgPyBzY3JvbGxVcC5jbGFzc0xpc3QuYWRkKCdzaG93LXNjcm9sbCcpIDogc2Nyb2xsVXAuY2xhc3NMaXN0LnJlbW92ZSgnc2hvdy1zY3JvbGwnKTsgICAgXHJcbn1cclxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIHNjcm9sbFVwKTtcclxuXHJcbmNvbnN0IHNjcm9sbEJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzY3JvbGwtdXAnKTtcclxuc2Nyb2xsQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICB3aW5kb3cuc2Nyb2xsVG8oe3RvcDowLCBsZWZ0OjAsIGJlaGF2aW9yOidzbW9vdGgnfSk7XHJcbn0pO1xyXG5cclxuLyo9PT09PT09PT09PT09PT0gREFSSyBMSUdIVCBUSEVNRSA9PT09PT09PT09PT09PT0qLyBcclxuY29uc3QgdGhlbWVCdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGhlbWUtYnV0dG9uJylcclxuY29uc3QgZGFya1RoZW1lID0gJ2RhcmstdGhlbWUnXHJcbmNvbnN0IGljb25UaGVtZSA9ICdyaS1zdW4tbGluZSdcclxuXHJcbi8vIFByZXZpb3VzbHkgc2VsZWN0ZWQgdG9waWMgKGlmIHVzZXIgc2VsZWN0ZWQpXHJcbmNvbnN0IHNlbGVjdGVkVGhlbWUgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnc2VsZWN0ZWQtdGhlbWUnKVxyXG5jb25zdCBzZWxlY3RlZEljb24gPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnc2VsZWN0ZWQtaWNvbicpXHJcblxyXG4vLyBXZSBvYnRhaW4gdGhlIGN1cnJlbnQgdGhlbWUgdGhhdCB0aGUgaW50ZXJmYWNlIGhhcyBieSB2YWxpZGF0aW5nIHRoZSBkYXJrLXRoZW1lIGNsYXNzXHJcbmNvbnN0IGdldEN1cnJlbnRUaGVtZSA9ICgpID0+IGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LmNvbnRhaW5zKGRhcmtUaGVtZSkgPyAnZGFyaycgOiAnbGlnaHQnXHJcbmNvbnN0IGdldEN1cnJlbnRJY29uID0gKCkgPT4gdGhlbWVCdXR0b24uY2xhc3NMaXN0LmNvbnRhaW5zKGljb25UaGVtZSkgPyAncmktbW9vbi1saW5lJyA6ICdyaS1zdW4tbGluZSdcclxuXHJcbi8vIFdlIHZhbGlkYXRlIGlmIHRoZSB1c2VyIHByZXZpb3VzbHkgY2hvc2UgYSB0b3BpY1xyXG5pZiAoc2VsZWN0ZWRUaGVtZSkge1xyXG4gIC8vIElmIHRoZSB2YWxpZGF0aW9uIGlzIGZ1bGZpbGxlZCwgd2UgYXNrIHdoYXQgdGhlIGlzc3VlIHdhcyB0byBrbm93IGlmIHdlIGFjdGl2YXRlZCBvciBkZWFjdGl2YXRlZCB0aGUgZGFya1xyXG4gIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0W3NlbGVjdGVkVGhlbWUgPT09ICdkYXJrJyA/ICdhZGQnIDogJ3JlbW92ZSddKGRhcmtUaGVtZSlcclxuICB0aGVtZUJ1dHRvbi5jbGFzc0xpc3Rbc2VsZWN0ZWRJY29uID09PSAncmktbW9vbi1saW5lJyA/ICdhZGQnIDogJ3JlbW92ZSddKGljb25UaGVtZSlcclxufVxyXG5cclxuLy8gQWN0aXZhdGUgLyBkZWFjdGl2YXRlIHRoZSB0aGVtZSBtYW51YWxseSB3aXRoIHRoZSBidXR0b25cclxudGhlbWVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAvLyBBZGQgb3IgcmVtb3ZlIHRoZSBkYXJrIC8gaWNvbiB0aGVtZVxyXG4gICAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QudG9nZ2xlKGRhcmtUaGVtZSlcclxuICAgIHRoZW1lQnV0dG9uLmNsYXNzTGlzdC50b2dnbGUoaWNvblRoZW1lKSAgICBcclxuICAgIC8vIFdlIHNhdmUgdGhlIHRoZW1lIGFuZCB0aGUgY3VycmVudCBpY29uIHRoYXQgdGhlIHVzZXIgY2hvc2VcclxuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdzZWxlY3RlZC10aGVtZScsIGdldEN1cnJlbnRUaGVtZSgpKVxyXG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3NlbGVjdGVkLWljb24nLCBnZXRDdXJyZW50SWNvbigpKVxyXG59KVxyXG5cclxuLyogPT09PT09PT09PT09PT09PT09PT0gVE9HR0xFIFRFQ0hOT0xPR0lFUyA9PT09PT09PT09PT09PT09PT09PSAqL1xyXG5jb25zdCB0b2dnbGVUZWNocyA9IChlOiBFdmVudCkgPT4geyAgICBcclxuICAgIGNvbnN0IGxhYmVsID0gKDxIVE1MSW5wdXRFbGVtZW50PmU/LnRhcmdldCk7XHJcbiAgICBsYWJlbC5jbGFzc0xpc3QudG9nZ2xlKCdhY3RpdmUnKTtcclxuICAgIGNvbnN0IGdyaWQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChsYWJlbD8uZGF0YXNldD8uZ3JpZCk7XHJcbiAgICBncmlkLmNsYXNzTGlzdC50b2dnbGUoJ2FjdGl2ZScpO1xyXG59XHJcbmNvbnN0IHRlY2hMYWJlbHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcudGVjaG5vbG9naWVzX191c2VkJyk7XHJcbnRlY2hMYWJlbHMuZm9yRWFjaCgobGFiZWwpID0+IHtcclxuICAgIGxhYmVsLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdG9nZ2xlVGVjaHMpO1xyXG59KTtcclxuXHJcbi8qPT09PT09PT09PT09PT09PT09PT0gR0VORVJBVEUgUERGID09PT09PT09PT09PT09PT09PT09Ki8gXHJcbi8vIFBERiBnZW5lcmF0ZWQgYXJlYVxyXG5cclxuLy8gZm9yIGZ1dHVyZSB1c2UuLi5cclxuLy8gY29uc3QgcmVzdW1lID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FyZWEtY3YnKTtcclxuLy8gY29uc3QgZG93bmxvYWRMaW5rID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmRvd25sb2FkX19idXR0b24nKTtcclxuLy8gZG93bmxvYWRMaW5rPy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XHJcbi8vICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbi8vICAgICBlLnN0b3BQcm9wYWdhdGlvbigpOyAgICBcclxuLy8gICAgIGh0bWwycGRmKHJlc3VtZSk7XHJcbi8vIH0pO1xyXG4iLCIiLCIvLyBzdGFydHVwXG4vLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbi8vIFRoaXMgZW50cnkgbW9kdWxlIGlzIHJlZmVyZW5jZWQgYnkgb3RoZXIgbW9kdWxlcyBzbyBpdCBjYW4ndCBiZSBpbmxpbmVkXG52YXIgX193ZWJwYWNrX2V4cG9ydHNfXyA9IHt9O1xuX193ZWJwYWNrX21vZHVsZXNfX1tcIi4vc3JjL2pzL21haW4udHNcIl0oKTtcbiIsIiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==