const main = () => {
    const data = input.split(',').map((id) => id.split("-").map((i) => parseInt(i)));

    let sum = 0;

    const ranges = data.map((range) => {

        const ids = [];
        for (let low = range[0]; low <= range[1]; low++) {
            ids.push(low);
            const first = low.toString();
            
            const firsthalf = first.slice(0, first.length / 2);
            const secondhalf = first.slice(first.length / 2);

            if (firsthalf === secondhalf) {
                sum = sum + low;
            };
        };
        return ids;
    });

    console.log(sum);
};

const input = `61-71,12004923-12218173,907895-1086340,61083-74975,7676687127-7676868552,3328-4003,48-59,3826934-3859467,178-235,75491066-75643554,92-115,1487-1860,483139-586979,553489051-553589200,645895-722188,47720238-47818286,152157-192571,9797877401-9798014942,9326-11828,879837-904029,4347588-4499393,17-30,1-16,109218-145341,45794-60133,491-643,2155-2882,7576546102-7576769724,4104-5014,34-46,67594702-67751934,8541532888-8541668837,72-87,346340-480731,3358258808-3358456067,78265-98021,7969-9161,19293-27371,5143721-5316417,5641-7190,28793-36935,3232255123-3232366239,706-847,204915-242531,851-1135,790317-858666`;

main();


// Shan solution

const answer = input.split(',').map((id) => id.split("-").map((i) => parseInt(i))).reduce((count, [low, high]) => {
    return count + new Array(high - low).fill(null).reduce((sum, _, index) => {
        const str = (low + index).toString();
        return sum + (str.slice(0, str.length / 2) === str.slice(str.length / 2) ? low + index : 0);
    }, 0);
}, 0);

console.log(answer);