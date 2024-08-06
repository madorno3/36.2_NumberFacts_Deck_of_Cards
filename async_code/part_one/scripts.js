// PART ONE

async function getFacts(nums) {
    let url = `http://numbersapi.com/${nums}?json`;
    let data = await $.getJSON(url);
    console.log(data);
}


function getFactsMultiples(nums) {
    let url = `http://numbersapi.com/${nums}?json`;
    axios.get(url);
    console.log(url);
    
}


const body = document.querySelector("body");

function fourNums(nums){
    let fourFacts = [];
    for (let i = 0; i < 4; i++) {
        fourFacts.push(
          axios.get(`http://numbersapi.com/${nums}?json`)
        );
        
        }
        Promise.all(fourFacts)
            .then(facts => {
               for(res of facts) {
                let factP = document.createElement("p");
                factP.textContent = res.data.text;
                document.body.appendChild(factP);
               }
        });
        
    }

fourNums(13);


