let color = false;
let randomColorNumber; 

beforeEach(function () {
    const array = ['blue', 'yellow', 'green', 'red', 'purple', 'black', 'white', 'orange', 'pink', 'rose'];
    randomColorNumber = Math.random() * (9 - 0) + 0;
    randomColorNumber = Math.round(randomColorNumber);

    if(randomColorNumber <= array.length) {
        randomColor = array[randomColorNumber]
    }

    for(let i = 0; i <= 9; i++) {
        if(randomColor == array[i]) {
            color = true
        }
    }
  });

describe('Unit Testing Dir', function() {
    it('should get a random number under or equal to 10', () => {
        let randomNumber = Math.random() * (10 - 1) + 1;
        randomNumber = Math.round(randomNumber);
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