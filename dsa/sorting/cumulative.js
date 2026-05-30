export default function cumulative(arr) {
    const length = arr.length;
    const max = Math.max(...arr);
    const min = Math.min(...arr);
    const range = max - min + 1;
    const arrCount = new Array(range).fill(0);

    for (let i = 0; i < length; ++i) {
        arrCount[arr[i] - min] += 1;
    }

    for (let i = 1; i < arrCount.length; ++i) {
        arrCount[i] += arrCount[i - 1];
    }
    let resArr = new Array(length);
    for (let i = length -1; i >= 0; --i) {
        const elem = arr[i];
        let idx = arrCount[elem - min]--;
        resArr[idx - 1] = elem;
    }
}

const arr = [5, 10, 11, 7, 20, 20, 7, 9, 10];
cumulative(arr);
