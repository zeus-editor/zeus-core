var editor = CodeMirror.fromTextArea(document.getElementById("editor"), {
  mode: "javascript",
  lineNumbers: true,
  indentUnit: 4,
});

editor.setOption("theme", "ayu-mirage");
editor.setOption("value", 'console.log("hello zeus");');
