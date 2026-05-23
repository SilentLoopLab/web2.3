export default function selectionSort(arr) {
    let size = arr.length;
    for (let i = 0; i < size; ++i) {
        let minIndex = i;
        for (let j = i + 1; j < size; ++j) {
            if (arr[j] < arr[minIndex]) minIndex = j;
        }
        [arr[minIndex], arr[i]]=[arr[i], arr[minIndex]];
    }
    return arr;
}
