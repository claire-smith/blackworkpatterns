var ready = (callback) => {
	if (document.readyState != "loading") callback();
	else document.addEventListener("DOMContentLoaded", callback);
}
ready(() => { 
	// ###################
	// START: Responsive menu
	// ###################
	const navContainer = document.querySelector('.header-links');
	const nav = document.querySelector('.nav-main');
	const navToggle = document.querySelector('.nav__toggle');
	let isMenuOpen = false;

	navToggle.addEventListener('click', e => {
		e.preventDefault();
		isMenuOpen = !isMenuOpen;

		navToggle.setAttribute('aria-expanded', String(isMenuOpen));
		navContainer.classList.toggle('active');
		document.body.classList.toggle('noscroll');
		navToggle.classList.toggle('collapsed');

	});

	nav.addEventListener('keydown', e => {
		// abort if menu isn't open or modifier keys are pressed
		if (!isMenuOpen || e.ctrlKey || e.metaKey || e.altKey) {
			return;
		}

		// listen for tab press and move focus
		// if we're on either end of the navigation
		const menuLinks = nav.querySelectorAll('li a');
		if (e.keyCode === 9) {
			if (e.shiftKey) {
				if (document.activeElement === menuLinks[0]) {
					navToggle.focus();
					e.preventDefault();
				}
			} else if (document.activeElement === navToggle) {
				menuLinks[0].focus();
				e.preventDefault();
			}
		}
	});

	// ###################
	// END: Responsive menu
	// ###################


});