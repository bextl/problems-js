function printNumberInInterval(num:number) {

    let counter = 1; 

    const intervalId = setInterval(() => {
        if (counter <= max) {
          console.log(`after 1 sec - ${counter}`);
          counter++;
        } else {
          clearInterval(intervalId);
        }
      }, 1000);
    }
}

export default printNumberInInterval;