function wait(ms) {
    return new Promise((resolve) => {
      setTimeout(resolve, ms);
    });
  }


function printAsyncNumbers() {

    await wait(1000);
  console.log("Passed 1 sec");
  await wait(2000);
  console.log("Passed 2 sec");

}

export default printAsyncNumbers;
