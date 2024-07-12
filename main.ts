
// 33. Ordinal Numbers: 
// Ordinal numbers indicate their position in a array, such as 1st or 2nd. Most ordinal numbers 
// end in th, except 1, 2, and 3.
// • Store the numbers 1 through 9 in a array.
// • Loop through the array.
// • Use an if-else chain inside the loop to print the proper ordinal ending for each number. Your output 
// should read "1st 2nd 3rd 4th 5th 6th 7th 8th 9th", and each result should be on a separate line.

let Mynum = [1,2,3,4,5,6,7,8,9]
for (let i = 0; i < Mynum.length; i++) {
    if (Mynum[i]==1) {
        console.log(`${Mynum[i]}st`);
        
    }else if (Mynum[i]== 2) {
        console.log(`${Mynum[i]}nd`);
        
    }else if (Mynum[i]== 3) {
        console.log(`${Mynum[i]}rd`);
        
    }else if (Mynum[i]==4) {
        console.log(`${Mynum[i]}th`);
        
    }else if (Mynum[i] == 5) {
        console.log(`${Mynum[i]}th`);
        
    }else if (Mynum[i] == 6) {
        console.log(`${Mynum[i]}th`);
        
    }else if (Mynum[i] == 7) {
        console.log(`${Mynum[i]}th`);
        
    }else if (Mynum[i] == 8) {
        console.log(`${Mynum[i]}th`);
        
    }else if (Mynum[i] == 9) {
        console.log(`${Mynum[i]}th`);
        
    } 
}