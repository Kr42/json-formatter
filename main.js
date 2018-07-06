
function format() {
    var jsonParsed = JSON.parse(document.getElementById('content').value);
    document.getElementById('test').textContent = jsonParsed;
}
document.getElementById('format-json').onclick = format;
