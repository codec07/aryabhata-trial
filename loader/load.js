function loadPage(url) {
    // Show the loading screen
    const loadingScreen = window.open('/loader/load.html');

    // Generate a random delay between 3 to 5 seconds
    const delay = Math.floor(Math.random() * (2000 - 1000 + 1)) + 3000;

    // Delay for the random time, then close the loading screen and open the desired URL
    setTimeout(() => {
        loadingScreen.close();
        window.open(url);
    }, delay);
}