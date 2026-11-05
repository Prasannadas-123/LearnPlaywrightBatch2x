// The default case runs when no other case matches.
let day = 8;

switch (day) {
    case 1:
        console.log("Mon");
        break;
    case 2:
        console.log("Tue");
        break;
    case 3:
        console.log("Wed");
        break;
    case 4:
        console.log("Thu");
        break;
    case 5:
        console.log("Fri");
        break;
    case 6:
        console.log("Sat");
        break;
    case 7:
        console.log("Sun");
        break;
    default:
        console.log("No idea which day is");
}

// default does not have to be the last case.
// If no case matches, default still runs.
let fruit = "kiwi";

switch (fruit) {
    default:
        console.log("Unknown fruit");
        break;
    case "apple":
        console.log("Apple Selected");
        break;
    case "banana":
        console.log("Banana Selected");
        break;
}

// A matching case skips default completely.
fruit = "apple";

switch (fruit) {
    case "apple":
        console.log("Apple Selected");
        break;
    default:
        console.log("Unknown fruit");
}
