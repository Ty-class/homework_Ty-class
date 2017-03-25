// What is happening here?  Stanzas/lyrics change
/* There are 3 different scenarios; 1 for 99 to 3 stanzas; 1 for 2nd; and 1 for 1st (last) stanza */
// Use a For Loop w/ if, else if statements

var word = " bottles";
var wordTwo = " bottle";

// Named variable count; could have also called it i and i - 1
for ( var count = 99; count >= 1; count-- ) {
// Execute for everything except for differences which are 2 and 1 stanzas bottle(s)
  if( (count!==2) && (count!==1) ) {
    console.log(count + word + " of beer on the wall, " + count + word + " of beer.");
    console.log("Take one down and pass it around, " + (count - 1) + word + " of beer on the wall.");
    console.log("");
  }
// Do this for 2nd stanza only
  else if( count===2 ) {

    console.log(count + word + " of beer on the wall, " + count + word + " of beer.");
    console.log("Take one down and pass it around, " + (count - 1) + wordTwo + " of beer on the wall.");
    console.log("");
  }

// Do this for 1st stanza only
  else {

    console.log(count + wordTwo + " of beer on the wall, " + count + wordTwo + " of beer.");
    console.log("Take one down and pass it around, no more" + word + " of beer on the wall.");
    console.log("");
  }
}
// Stanza 0 doesn't need Boolean or Condition, no calculations are required
{

  console.log("No more bottles of beer on the wall, no more bottles of beer.");
  console.log("Go to the store and buy some more, 99 bottles of beer on the wall.");
}
