if("hello")console.log("String is truthy");
if(42)console.log("Number is truthy");
if({})console.log("Empty is truthy");
if([])console.log("Empty is truthy");


if("")console.log("Won't print");
if(null)console.log("Won't print");
if(undefined)console.log("Won't print");
if(NaN)console.log("Won't print");
if(0)console.log("Won't print");

let name = undefined;
if (name) {
    console.log("H");
} else {
    console.log("Bye");
}