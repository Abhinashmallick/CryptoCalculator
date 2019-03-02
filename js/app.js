// Instanciate the classes

const cryptoAPI = new CryptoAPI();
const ui = new UI();

// Create the variables

const form = document.getElementById('form');


// Add event Listeners
form.addEventListener('submit', (event) => {
    event.preventDefault(); 

    // Read the Currncy
    const currncySelect = document.getElementById('currency').value;

    // Read the cryptoCurrency
    const cryptoCurrencySelect = document.getElementById('cryptocurrency').value;

    // validate that the <select> have something
    // console.log( currncySelect + ' : ' + cryptoCurrencySelect );

    if( currncySelect === '' || cryptoCurrencySelect === '' ) {
        // Display an Error
        // console.log('error');
        ui.printMessage('All the fields are mandatory', 'deep-orange darken-4 card-panel');
    } else {
        // Query the REST API 
        // console.log('Success');
        cryptoAPI.queryAPI(currncySelect, cryptoCurrencySelect)
            .then(data => {
                // console.log(data.result[0] );
                ui.displayResult( data.result[0], currncySelect );
            })

    }
})