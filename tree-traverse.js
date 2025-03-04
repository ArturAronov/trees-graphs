function traverse(tree) {
  console.log(tree.name);
  tree.children?.forEach((child) => traverse(child));
}

let mother = {
  name: "Ashleigh",
};

const son = {
  name: "Sammy",
  children: [
    {
      name: "Peter",
    },
  ],
};

const daughter = {
  name: "Alex",
};

mother = {
  name: "Ashleigh",
  children: [son, daughter],
};

traverse(mother);
/* 
Returns:
    Ashleigh
    Sammy
    Peter
    Alex

            Ashleigh
              /  \
             /    \
          Sammy   Alex
          /
         /
      Peter

*/
