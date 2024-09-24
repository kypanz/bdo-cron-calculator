import readline from 'readline';

let crons_amount = 0;
let fails = 0;
const price_per_cron = 3_000_000;

interface IFormattePrice {
  value: string | number | null;
}

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// START HERE
main();

// FUNCTIONS
function main() {
  try {
    rl.question('Fails amount needed ? => ', (answerOne) => {
      rl.question('Amount of crons needed ? => ', (answerTwo) => {
        fails = parseInt(answerOne);
        crons_amount = parseInt(answerTwo);
        showResult();
        rl.close();
      })
    })
  } catch (error) {
    console.error('fails on question');
  }
}

function calculate() {
  try {
    return (crons_amount * price_per_cron) * fails;
  } catch (error) {
    console.error('error on calculate');
    return null;
  }
}

function showResult() {
  console.log(`
----- Details -------
crons amount : ${crons_amount}
fails : ${fails}
price_per_cron : ${price_per_cron}
----- Total to spend ----
${formattePrice({ value: calculate() })}
`);
}

function formattePrice(data: IFormattePrice) {
  try {
    if (!data.value) throw new Error();
    return data.value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  } catch (error) {
    console.error('error on formatte price');
  }
}
