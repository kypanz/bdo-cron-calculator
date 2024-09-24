const crons_amount = 1_350;
const fails = 31;
const price_per_cron = 3_000_000;

interface IFormattePrice {
  value: string | number | null;
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

showResult();
