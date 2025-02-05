document.getElementById("inputText").addEventListener("mouseup", function() {
    var selectedText = window.getSelection().toString();
    if (selectedText !== "") {
        document.getElementById("selectedTextDisplay").innerText = selectedText;
    }
});