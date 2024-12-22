const links = {
  docs: "https://docs.google.com",
  sheets: "https://sheets.google.com",
  me: "https://joelburget.com",
  bm: "https://x.com/i/bookmarks",
  lw: "https://lesswrong.com",
  hn: "https://news.ycombinator.com",
};

const rules = Object.entries(links).map(([key, value], index) => ({
  id: index + 1,
  priority: 1,
  action: {
    type: "redirect",
    redirect: { url: value },
  },
  condition: {
    urlFilter: `http://go/${key}`,
    resourceTypes: ["main_frame"],
  },
}));

chrome.runtime.onInstalled.addListener(() => {
  chrome.declarativeNetRequest.updateDynamicRules({
    addRules: rules,
    removeRuleIds: [1, 2, 3], // Clear any existing rules with these IDs first
  });
});
