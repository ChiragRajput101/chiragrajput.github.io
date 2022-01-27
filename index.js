function openTab(url) {
    const link = document.createElement('a');
    link.href = url;
    document.body.appendChild(link);
    link.click();
    link.remove();
}
function openBlank(url) {
    const link = document.createElement('a');
    link.href = url;
    link.target="_blank";
    document.body.appendChild(link);
    link.click();
    link.remove();
}
