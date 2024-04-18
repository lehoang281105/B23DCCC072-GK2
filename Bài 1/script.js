function isNumeric(str) {
    for (var i = 0; i < str.length; i++) {
      if (isNaN(parseInt(str[i]))) {
        return false;
      }
    }
    return true;
  }



function calculateSum() {
    var inputA = document.getElementById("input_A").value;
    var inputB = document.getElementById("input_B").value;
  
    // Kiểm tra xem cả hai input có phải là số không
    if (isNumeric(inputA) && isNumeric(inputB)) {
      var total = parseFloat(inputA) + parseFloat(inputB);
      document.getElementById("ketqua").innerText = "Kết quả là: " + total;
    } else {
      alert("Bạn phải nhập số!");
    }
  }

  function calculateSubtract() {
    var inputA = document.getElementById("input_A").value;
    var inputB = document.getElementById("input_B").value;
  
    // Kiểm tra xem cả hai input có phải là số không
    if (isNumeric(inputA) && isNumeric(inputB)) {
      var total = parseFloat(inputA) - parseFloat(inputB);
      document.getElementById("ketqua").innerText = "Kết quả là: " + total;
    } else {
      alert("Bạn phải nhập số!");
    }
  }

  function calculateDivision() {
    var inputA = document.getElementById("input_A").value;
    var inputB = document.getElementById("input_B").value;

    // Kiểm tra xem inputB có phải là số và khác 0 không
    if (isNumeric(inputA) && isNumeric(inputB)) {
        if (parseFloat(inputB) !== 0) {
            var total = parseFloat(inputA) / parseFloat(inputB);
            document.getElementById("ketqua").innerText = "Kết quả là: " + total;
        } else {
            alert("Không thể chia cho 0");
        }
    } else {
        alert("Bạn phải nhập số!");
    }
}



function calculateMultiply() {
    var inputA = document.getElementById("input_A").value;
    var inputB = document.getElementById("input_B").value;
  
    
    if (isNumeric(inputA) && isNumeric(inputB)) {
      var total = parseFloat(inputA) * parseFloat(inputB);
      document.getElementById("ketqua").innerText = "Kết quả là: " + total;
    } else {
      alert("Bạn phải nhập số!");
    }
  }

  function reset() {
    document.getElementById("input_A").value = "";
    document.getElementById("input_B").value = "";
    document.getElementById("ketqua").innerText = "";
  }


document.getElementById('btn1').addEventListener('click', calculateSum)
document.getElementById('btn2').addEventListener('click', calculateSubtract)
document.getElementById('btn3').addEventListener('click', calculateMultiply)
document.getElementById('btn4').addEventListener('click', calculateDivision)
document.getElementById('btn5').addEventListener('click', reset)