function useDebounce() {
    let id;
    return function debounce(str) {
        if (id) {
            clearTimeout(id);
        }
        const fetchToGoogle = () =>
            fetch(`https://www.google.com/search?q=${str}`).then((r) =>
                console.log(str, r),
            );

        id = setTimeout(fetchToGoogle, 0);
    };
}
let debounce = useDebounce();

debounce("J");
debounce("Je");
debounce("Jea");
debounce("Jean");
// 5000 ms
