
let outputElement = document.querySelector('#output');

function attribValue(number)
{
    outputElement.value += number.value;
};

function calculate()
{
    outputElement.value = eval(outputElement.value);
};

function clearInput()
{
    outputElement.value = null;
};
