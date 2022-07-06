export function loadFile(path: string) {
    const xhr = new XMLHttpRequest();
    const okStatus = document.location.protocol === "file:" ? 0 : 200;
    xhr.open('GET', path, false);
    xhr.overrideMimeType("text/html;charset=utf-8");//默认为utf-8
    xhr.send(null);
    return xhr.status === okStatus ? xhr.responseText : null;
}