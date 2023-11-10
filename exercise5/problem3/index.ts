function printAsyncNumbers(n: number): void {
  for (let i = 1; i <= n; i++) {
    setTimeout(() => {
      console.log(`after ${i} sec - ${i}`);
    }, i * 1000);
  }
}

export default printAsyncNumbers;
