var currentYear = new Date().getFullYear();
document.getElementById("year").textContent = currentYear;

h="Hello";

function calculate(){
    var P, R, T, Interest;
    P = parseFloat(document.getElementById('Principle').value);
    R = parseFloat(document.getElementById('ROI').value);
    T = parseFloat(document.getElementById('Time').value);
    Interest = P*R*T / 100;
    const emi = ((P + Interest)/(T*12)).toFixed(2);
    

    localStorage.setItem('interest', Interest);
    localStorage.setItem('emi', emi);

    window.location.href='./display.html';

    // const interest = localStorage.getItem('Interest');

    // document.getElementById("TI").textContent = Interest;
    // console.log("Interest : "+interest+"\nEMI : "+emi);

    
}

function display(){
    const Interest = localStorage.getItem('interest');
    const EMI = localStorage.getItem('emi');
    console.log("Interest : "+Interest+"\nEMI : "+EMI);
    if (Interest) {
        // const outputDiv = document.getElementById('outputDiv');
        // outputDiv.textContent = `User Input: ${userInput}`;
        // localStorage.removeItem('userInput');

        document.getElementById('TI').textContent = Interest;
        document.getElementById("EMI").textContent = EMI;

        localStorage.removeItem('interest');
        localStorage.removeItem('emi');

    }
}

display();

// document.getElementById("TI").textContent = h;



