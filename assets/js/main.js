/*
* DarkMode switch functions
*/
function EnableDarkMode()  {
	DarkReader.setFetchMethod(window.fetch)
	DarkReader.enable({
		brightness: 100,
		contrast: 100,
		sepia: 10
	});
    localStorage.setItem('dc-dark-mode', 'true');
    document.getElementById('flexSwitchDarkMode').checked = true;
}

function DisableDarkMode() {
	DarkReader.disable();
	localStorage.setItem('dc-dark-mode', 'false');
	document.getElementById('flexSwitchDarkMode').checked = false;
}
function SetDarkMode() {
    if (localStorage.getItem('dc-dark-mode') === null) {
        localStorage.setItem('dc-dark-mode', 'false');
    }
    
	if (localStorage.getItem('dc-dark-mode') === 'false') {
		EnableDarkMode(); 
	} else { 
		DisableDarkMode();
	}
}
