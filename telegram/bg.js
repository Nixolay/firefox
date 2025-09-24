browser.webRequest.onHeadersReceived.addListener(
  d => ({ responseHeaders: d.responseHeaders.filter(h => h.name.toLowerCase() !== 'x-frame-options') }),
  { urls: ["https://web.telegram.org/*"], types: ["sub_frame"] },
  ["blocking", "responseHeaders"]
);