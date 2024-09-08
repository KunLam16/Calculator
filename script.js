// Real code
function appendToDisplay(value) {
    document.getElementById("display").value += value;
}

function clearDisplay() {
    document.getElementById("display").value = "";
}

function calculate() {
    let expression = document.getElementById("display").value;
    try {
        let result = eval(expression);
        document.getElementById("display").value = result;
    } catch (error) {
        document.getElementById("display").value = "Error";
    }
}


//Just for fun code
// function appendToDisplay(value) {
//     document.getElementById("display").value += value;
// }

// function clearDisplay() {
//     document.getElementById("display").value = "";
// }

// function calculate() {
//     let display = document.getElementById("display").value;

//     // Thực hiện phép cộng chuỗi thay vì cộng số
//     if (display.includes("+")) {
//         let operands = display.split("+");
//         let result = operands.join(''); // Nối chuỗi thay vì cộng số
//         document.getElementById("display").value = result;
//     } else {
//         // Nếu không có dấu cộng, giữ nguyên tính năng tính toán cho các phép tính khác
//         try {
//             let result = eval(display);
//             document.getElementById("display").value = result;
//         } catch (error) {
//             document.getElementById("display").value = "Error";
//         }
//     }
// }

//Just for fun display "Hello World!"
// function appendToDisplay(value) {
//     document.getElementById("display").value += value;
// }

// function clearDisplay() {
//     document.getElementById("display").value = "";
// }

// function calculate() {
//     let display = document.getElementById("display").value;

//     // Kiểm tra nếu biểu thức có chứa dấu "+"
//     if (display.includes("+")) {
//         document.getElementById("display").value = "Hello world!";
//     } else {
//         // Các phép tính khác vẫn được thực hiện như bình thường
//         try {
//             let result = eval(display);
//             document.getElementById("display").value = result;
//         } catch (error) {
//             document.getElementById("display").value = "Error";
//         }
//     }
// }

