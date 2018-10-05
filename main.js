let formatBtn = document.getElementById('formatJson');
formatBtn.onclick = function() {
    try {
        var jsonParsed = JSON.parse(document.getElementById('content').value);
        document.getElementById('output').textContent = JSON.stringify(jsonParsed, null, 4);
    }
    catch(error) {
        document.getElementById('output').textContent = error;
    }
};
