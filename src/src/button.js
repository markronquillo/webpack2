const Button = {
    button: `<button id="myButton"> Press me </button>`,
    attachEl() {
        document.getElementById('myButton')
            .addEventListener('click', () => {
            	// debugger; // this will trigger breakpoint
                console.log('clicked')
            });
    }
}

export default Button