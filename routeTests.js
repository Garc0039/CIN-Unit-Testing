const { default: axios } = require("axios");
let randomNumber = null;
let randomColor = null;
let color = false;


beforeEach(async function () {
    randomNumber = await axios.get('http://localhost:3000/getRandomNumber');
    randomNumber = randomNumber.data;

    randomColor = await axios.get('http://localhost:3000/getRandomColor');
    randomColor = randomColor.data;

    const array = ['blue', 'yellow', 'green', 'red', 'purple', 'black', 'white', 'orange', 'pink', 'rose'];

    for(let i = 0; i <= 9; i++) {
        if(randomColor == array[i]) {
            color = true
        }
    }
  });

describe('Unit Testing Dir', function() {
    it('should get a random number under or equal to 10', () => {
        if(randomNumber <= 10 && randomNumber >= 1) {
        } else {
            throw Error("Your number is smaller than 1 or bigger than 10!");
        }
    });

    it('should get a random color corresponding to array', () => {
        if(color == true) {     
        } else {
            throw Error("Your color does not exist")
        }
    });
});
