// 4.Given an array of date string in the format “YYYY-MM-DD”. Use the ‘map’ method to transform the array [“2024-01-01”, “2024-02-02”, “2024-04-04”] into an array of d    ate strings in the format “DD/MM/YYYY”

const dates = ["2024-01-01", "2024-02-02", "2024-04-04"];

function mapDates(dates) {
    return dates.map((date) => {
        const [year, month, day] = date.split("-");
        return `${day}/${month}/${year}`;
    });
}
console.log(mapDates(dates));
