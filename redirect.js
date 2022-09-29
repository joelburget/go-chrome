// Inspired by https://iafisher.com/blog/2020/10/golinks

const links = {
  'docs': 'https://docs.google.com',
  'sheets': 'https://sheets.google.com',
  'me': 'https://joelburget.com',
};

function redirect(request) {
  const prefix = 'http://go/';
  const path = request.url.slice(prefix.length);
  return { redirectUrl: links[path] };
}

if (typeof browser === "undefined") {
    var browser = chrome;
}

browser.webRequest.onBeforeRequest.addListener(redirect, { urls: ['http://go/*']}, ['blocking']);
