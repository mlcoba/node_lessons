function hello_world() {
  console.log("Hello World from function!");
}

function sum(a, b) {
  return a + b;
}

function string_composer(text1, text2, text3) {
  return text1 + " " + text2 + " " + text3;
}

function string_converter(number1, number2) {
  const result = number1 + number2;
  return result.toString();
}

function numbers_to_string(number1, number2) {
  const result_numbers = number1.toString() + number2.toString();
  return result_numbers;
}

function run() {
  hello_world();
  const result_sum = sum(1, 1);
  console.log(result_sum);
  const result_text = string_composer("ahoj", "jak", "se");
  console.log(result_text);
  const string_result_sum = string_converter(1, 100);
  console.log(string_result_sum);
  const result_numbersToString = numbers_to_string(1, 303);
  console.log(result_numbersToString);
}

run();
