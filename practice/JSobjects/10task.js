let cur = new Date();
const formatter = Intl.DateTimeFormat("en-US", {
    dateStyle: "full",
    timeStyle: "long",
});
const formattedDate = formatter.format(cur);
console.log(formattedDate);
console.log(
    "Task 10:",
    typeof formattedDate === "string" && formattedDate.length > 10,
);
