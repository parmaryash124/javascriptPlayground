function apicall(method) {
  return function url(url) {
    console.log(`${url} is called using ${method} method`);
  };
}

const url = `localhost:5000/api/test`;
// apicall("GET")(url);

// let count = 0;
// function countincrement() {
//   count++;
// }
// countincrement();
// count = 7
// countincrement();

// console.log(count);

// function countincrement() {
//   let count = 0;
//   count++;
//   console.log(count)
// }
// bad approch

function countwrapper() {
  let count = 0;
  return function () {
    count++;
    console.log(count);
  };
}

const updatecount = countwrapper();
// updatecount();
// updatecount();
// updatecount();
// console.log(updatecount());
// console.log(updatecount());
// console.log(updatecount());

// countincrement();

// cart counter..

function cartCounter() {
  let _value = 0;

  function updatecountValue(value) {
    _value += value;
  }
  return {
    increment(value) {
      updatecountValue(1);
    },
    decrement(value) {
      updatecountValue(-1);
    },
    getcountValue() {
      return _value;
    },
  };
}

let mycount = cartCounter();
mycount.increment();
mycount.increment();
mycount.decrement();
// console.log(mycount.getcountValue());

// custom use state hook;

function usestate(initial) {
  let _state = initial;

  function setState(value) {
    _state = value;
  }

  function getState() {
    return _state;
  }

  return [getState, setState];
}

function mycomponent() {
  const [count, setcount] = usestate(0);

  return {
    click() {
      setcount(count() + 1);
    },
    render() {
      console.log(count());
      //  return count()
    }
  };
}

const counter = mycomponent();
counter.click();
counter.click();
// counter.click();
counter.render();
