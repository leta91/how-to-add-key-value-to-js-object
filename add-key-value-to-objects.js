let hotd = {
    king: "Viserys",
    heir: "Rhaenyra",
    dragon: "Syrax"
  };

  /* In JavaScript objects contain key and value
  Key, is in other words, the property that is mapped to its corresponding value 
  In this case:
  Key --> king, heir, dragon
  Value --> the strings "Viserys", "Rhaenyra","Syrax"
  */

  // Only change code below this line
  hotd["rogue Prince"] = "Daemon";
  hotd.hightower = "Otto";
  hotd["reigning family"] = "Targaryen";
  // Only change code above this line

  /* the block of code (line 15-17) has all the added key and value
  using the dot notation which syntax is summed up below:
  objectName.keyName = Value;

  In this example we also use the bracket notation that is expressed in the following way:
  objectName["key Name"] = Value;

  The bracket notation is obligatory when the key has a space in it

  now the console will display the starting object
  together with all the added key-value pairs */
  
  console.log(hotd);