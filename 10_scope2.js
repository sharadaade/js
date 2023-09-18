function one() {
  const username = "sharad";

  function two() {
    const website = "youtube";
    console.log(username);
  }

  //   console.log(website);

  two();
}

// one();

if (true) {
  const username = "sharad";
  if (username === "sharad") {
    const website = " youtube";
    // console.log(username + website);
  }
  //   console.log(website);
}

// console.log(username);

// +++++++++++++++++++ interesting ++++++++++++++++++++++
console.log(addone(4));
function addone(num) {
  return num + 1;
}

const addTwo = function (num) {
  return num + 2;
};
console.log(addTwo(5));
