function setResult() {
    document.getElementById('result').value = 'NaN';
  }
  
  function showResult() {
    var first = document.getElementById('first');
    var second = document.getElementById('second');
    document.getElementById('result').value =
      parseInt(first.value) + parseInt(second.value);
  }