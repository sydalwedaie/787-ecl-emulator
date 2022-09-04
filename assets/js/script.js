var clipboard = new ClipboardJS('.copyText');
clipboard.on('success', function(e) {
    alert("Copied " + e.text)
    e.clearSelection();
});