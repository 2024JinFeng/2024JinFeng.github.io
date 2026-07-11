const BASE_ALL = ["所有-自动","不包含香港-自动","香港-故转","台湾-故转","日本-故转","新加坡-故转","韩国-故转","美国-故转","英国-故转","其他-故转"];
const BASE_WITHOUT_HK_ALL = ["不包含香港-自动","台湾-故转","日本-故转","新加坡-故转","韩国-故转","美国-故转","英国-故转","其他-故转"];
const APP_GROUPS = [
  { name: "🧠 ChatGPT", proxies: [...BASE_WITHOUT_HK_ALL, "所有手动", "不包含香港-所有手动", "REJECT"] },
  { name: "🤖 OtherAi", proxies: [...BASE_ALL, "所有手动", "不包含香港-所有手动", "REJECT"] },
  { name: "💻 GitHub", proxies: [...BASE_ALL, "所有手动", "REJECT"] },
  { name: "💃 TikTok", proxies: [...BASE_WITHOUT_HK_ALL, "所有手动", "不包含香港-所有手动", "REJECT"] },
  { name: "📷 Instagram", proxies: [...BASE_ALL, "所有手动", "REJECT"] },
  { name: "✈️ Telegram", proxies: [...BASE_ALL, "所有手动", "REJECT"] },
  { name: "🐦 Twitter & Facebook & WhatsApp", proxies: [...BASE_ALL, "所有手动", "REJECT"] },
  { name: "📺 YouTube", proxies: [...BASE_ALL, "所有手动", "REJECT"] },
  { name: "🎧 Spotify", proxies: [...BASE_ALL, "直连", "所有手动", "REJECT"] },
  { name: "🏰 Disney", proxies: [...BASE_ALL, "所有手动", "REJECT"] },
  { name: "🎥 Netflix", proxies: [...BASE_ALL, "所有手动", "REJECT"] },
  { name: "🍎 Apple", proxies: [...BASE_ALL, "直连", "所有手动", "REJECT"] },
  { name: "🔍 Google", proxies: [...BASE_ALL, "所有手动", "REJECT"] },
  { name: "🌐 Emby国外线路", proxies: [...BASE_ALL, "所有手动", "REJECT"] },
  { name: "🌐 Emby国内线路", proxies: ["直连"] },
  { name: "🐼 国内", proxies: [...BASE_ALL, "直连", "所有手动", "REJECT"] },
  { name: "🚀 国外", proxies: [...BASE_ALL, "所有手动", "REJECT"] }
];
 
const REGION_FILTERS = [
  { name: "香港", regex: /(广港|香港|HK|Hong Kong|🇭🇰|HongKong)/i },
  { name: "台湾", regex: /(广台|台湾|台灣|TW|Tai Wan|🇹🇼|🇨🇳|TaiWan|Taiwan)/i },
  { name: "日本", regex: /(广日|日本|JP|川日|东京|大阪|泉日|埼玉|沪日|深日|🇯🇵|Japan)/i },
  { name: "新加坡", regex: /(广新|新加坡|SG|坡|狮城|🇸🇬|Singapore)/i },
  { name: "韩国", regex: /(广韩|韩国|韓國|KR|首尔|春川|🇰🇷|Korea)/i },
  { name: "美国", regex: /(广美|美|US|纽约|波特兰|达拉斯|俄勒|凤凰城|费利蒙|拉斯|洛杉|圣何塞|圣克拉|西雅|芝加|🇺🇸|United States)/i },
  { name: "英国", regex: /(英国|英|伦敦|UK|United Kingdom|🇬🇧|London)/i },
  { name: "其他", regex: /^(?!.*(直连|REJECT|DIRECT|拒绝|官网|失败|剩余流量|距离下次重置|套餐到期|异常|广港|香港|HK|Hong Kong|🇭🇰|HongKong|广台|台湾|台灣|TW|Tai Wan|🇹🇼|🇨🇳|TaiWan|Taiwan|广日|日本|JP|川日|东京|大阪|泉日|埼玉|沪日|深日|🇯🇵|Japan|广新|新加坡|SG|坡|狮城|🇸🇬|Singapore|广韩|韩国|韓國|KR|首尔|春川|🇰🇷|Korea|广美|美|US|纽约|波特兰|达拉斯|俄勒|凤凰城|费利蒙|硅谷|拉斯|洛杉|圣何塞|圣克拉|西雅|芝加|🇺🇸|United States|英国|UK|United Kingdom|伦敦|英|London|🇬🇧)).*$/i }
];
 
const NEW_RULES = [
  "RULE-SET,ChatGPT / Domain,🧠 ChatGPT","RULE-SET,ChatGPT / IP,🧠 ChatGPT,no-resolve",
  "RULE-SET,Copilot / Domain,🤖 OtherAi","RULE-SET,Copilot / IP,🤖 OtherAi,no-resolve",
  "RULE-SET,Gemini / Domain,🤖 OtherAi","RULE-SET,Claude / Domain,🤖 OtherAi",
  "RULE-SET,MetaAI / Domain,🤖 OtherAi","RULE-SET,Perplexity / Domain,🤖 OtherAi",
  "RULE-SET,Category-ai / Domain,🤖 OtherAi","RULE-SET,GitHub / Domain,💻 GitHub",
  "RULE-SET,TikTok / Domain,💃 TikTok","RULE-SET,TikTok-JinFeng / Domain,💃 TikTok",
  "RULE-SET,Instagram / Domain,📷 Instagram","RULE-SET,Instagram-JinFeng / Domain,📷 Instagram",
  "RULE-SET,Telegram / Domain,✈️ Telegram","RULE-SET,Telegram / IP,✈️ Telegram,no-resolve",
  "RULE-SET,Twitter / Domain,🐦 Twitter & Facebook & WhatsApp",
  "RULE-SET,Facebook / Domain,🐦 Twitter & Facebook & WhatsApp",
  "RULE-SET,WhatsApp / Domain,🐦 Twitter & Facebook & WhatsApp",
  "RULE-SET,YouTube / Domain,📺 YouTube","RULE-SET,Disney / Domain,🏰 Disney",
  "RULE-SET,Netflix / Domain,🎥 Netflix","RULE-SET,Netflix / IP,🎥 Netflix,no-resolve",
  "RULE-SET,Spotify / Domain,🎧 Spotify","RULE-SET,Spotify / IP,🎧 Spotify,no-resolve",
  "RULE-SET,Apple / Domain,🍎 Apple","RULE-SET,Apple / IP,🍎 Apple,no-resolve",
  "RULE-SET,Apple-CN / Domain,🍎 Apple","RULE-SET,Google / Domain,🔍 Google",
  "RULE-SET,Google / IP,🔍 Google,no-resolve","RULE-SET,Google-Play / Domain,🔍 Google",
  "RULE-SET,Emby-Proxy / Domain,🌐 Emby国外线路","RULE-SET,Emby-Direct / Domain,🌐 Emby国内线路",
  "RULE-SET,Direct / Domain,🐼 国内","RULE-SET,ChinaMax / Domain,🐼 国内",
  "RULE-SET,ChinaMax / IP,🐼 国内,no-resolve","RULE-SET,China / Domain,🐼 国内",
  "RULE-SET,China / IP,🐼 国内,no-resolve","RULE-SET,PrivateTracker / Domain,🐼 国内",
  "RULE-SET,PrivateTracker / IP,🐼 国内,no-resolve","MATCH,🚀 国外"
];
 
const RULE_PROVIDERS = {
  "ChatGPT / Domain": { type: "http", interval: 43200, behavior: "domain", format: "mrs", url: "https://raw.githubusercontent.com/peiyingyao/Rule-for-OCD/refs/heads/master/rule/Clash/OpenAI/OpenAI_OCD_Domain.mrs" },
  "ChatGPT / IP": { type: "http", interval: 43200, behavior: "ipcidr", format: "mrs", url: "https://raw.githubusercontent.com/peiyingyao/Rule-for-OCD/refs/heads/master/rule/Clash/OpenAI/OpenAI_OCD_IP.mrs" },
  "Copilot / Domain": { type: "http", interval: 43200, behavior: "domain", format: "mrs", url: "https://raw.githubusercontent.com/peiyingyao/Rule-for-OCD/refs/heads/master/rule/Clash/Copilot/Copilot_OCD_Domain.mrs" },
  "Copilot / IP": { type: "http", interval: 43200, behavior: "ipcidr", format: "mrs", url: "https://raw.githubusercontent.com/peiyingyao/Rule-for-OCD/refs/heads/master/rule/Clash/Copilot/Copilot_OCD_IP.mrs" },
  "Gemini / Domain": { type: "http", interval: 43200, behavior: "domain", format: "mrs", url: "https://raw.githubusercontent.com/peiyingyao/Rule-for-OCD/refs/heads/master/rule/Clash/Gemini/Gemini_OCD_Domain.mrs" },
  "Claude / Domain": { type: "http", interval: 43200, behavior: "domain", format: "mrs", url: "https://raw.githubusercontent.com/peiyingyao/Rule-for-OCD/refs/heads/master/rule/Clash/Claude/Claude_OCD_Domain.mrs" },
  "MetaAI / Domain": { type: "http", interval: 43200, behavior: "classical", format: "text", url: "https://raw.githubusercontent.com/liandu2024/clash/refs/heads/main/list/MetaAi.list" },
  "Perplexity / Domain": { type: "http", interval: 43200, behavior: "domain", format: "mrs", url: "https://github.com/MetaCubeX/meta-rules-dat/raw/refs/heads/meta/geo/geosite/perplexity.mrs" },
  "Category-ai / Domain": { type: "http", interval: 43200, behavior: "domain", format: "mrs", url: "https://github.com/MetaCubeX/meta-rules-dat/raw/refs/heads/meta/geo/geosite/category-ai-!cn.mrs" },
  "GitHub / Domain": { type: "http", interval: 43200, behavior: "domain", format: "mrs", url: "https://raw.githubusercontent.com/peiyingyao/Rule-for-OCD/refs/heads/master/rule/Clash/GitHub/GitHub_OCD_Domain.mrs" },
  "TikTok / Domain": { type: "http", interval: 43200, behavior: "classical", format: "text", url: "https://raw.githubusercontent.com/peiyingyao/Rule-for-OCD/refs/heads/master/rule/Clash/TikTok/TikTok.list" },
  "TikTok-JinFeng / Domain": { type: "http", interval: 43200, behavior: "classical", format: "text", url: "https://raw.githubusercontent.com/2024JinFeng/clash/refs/heads/main/TikTok.list" },
  "Instagram / Domain": { type: "http", interval: 43200, behavior: "classical", format: "text", url: "https://raw.githubusercontent.com/peiyingyao/Rule-for-OCD/refs/heads/master/rule/Clash/Instagram/Instagram.list" },
  "Instagram-JinFeng / Domain": { type: "http", interval: 43200, behavior: "classical", format: "text", url: "https://raw.githubusercontent.com/2024JinFeng/clash/refs/heads/main/Instagram.list" },
  "Telegram / Domain": { type: "http", interval: 43200, behavior: "classical", format: "text", url: "https://raw.githubusercontent.com/peiyingyao/Rule-for-OCD/refs/heads/master/rule/Clash/Telegram/Telegram.list" },
  "Telegram / IP": { type: "http", interval: 43200, behavior: "ipcidr", format: "mrs", url: "https://raw.githubusercontent.com/peiyingyao/Rule-for-OCD/refs/heads/master/rule/Clash/Telegram/Telegram_OCD_IP.mrs" },
  "Twitter / Domain": { type: "http", interval: 43200, behavior: "domain", format: "mrs", url: "https://raw.githubusercontent.com/MetaCubeX/meta-rules-dat/meta/geo/geosite/x.mrs" },
  "Facebook / Domain": { type: "http", interval: 43200, behavior: "classical", format: "text", url: "https://raw.githubusercontent.com/peiyingyao/Rule-for-OCD/refs/heads/master/rule/Clash/Facebook/Facebook.list" },
  "WhatsApp / Domain": { type: "http", interval: 43200, behavior: "classical", format: "text", url: "https://raw.githubusercontent.com/peiyingyao/Rule-for-OCD/refs/heads/master/rule/Clash/Whatsapp/Whatsapp.list" },
  "YouTube / Domain": { type: "http", interval: 43200, behavior: "classical", format: "text", url: "https://raw.githubusercontent.com/peiyingyao/Rule-for-OCD/refs/heads/master/rule/Clash/YouTube/YouTube.list" },
  "Disney / Domain": { type: "http", interval: 43200, behavior: "classical", format: "text", url: "https://raw.githubusercontent.com/peiyingyao/Rule-for-OCD/refs/heads/master/rule/Clash/Disney/Disney.list" },
  "Netflix / Domain": { type: "http", interval: 43200, behavior: "classical", format: "text", url: "https://raw.githubusercontent.com/peiyingyao/Rule-for-OCD/refs/heads/master/rule/Clash/Netflix/Netflix.list" },
  "Netflix / IP": { type: "http", interval: 43200, behavior: "ipcidr", format: "mrs", url: "https://raw.githubusercontent.com/peiyingyao/Rule-for-OCD/refs/heads/master/rule/Clash/Netflix/Netflix_OCD_IP.mrs" },
  "Spotify / Domain": { type: "http", interval: 43200, behavior: "classical", format: "text", url: "https://raw.githubusercontent.com/peiyingyao/Rule-for-OCD/refs/heads/master/rule/Clash/Spotify/Spotify.list" },
  "Spotify / IP": { type: "http", interval: 43200, behavior: "ipcidr", format: "mrs", url: "https://raw.githubusercontent.com/peiyingyao/Rule-for-OCD/refs/heads/master/rule/Clash/Spotify/Spotify_OCD_IP.mrs" },
  "Apple / Domain": { type: "http", interval: 43200, behavior: "classical", format: "text", url: "https://raw.githubusercontent.com/peiyingyao/Rule-for-OCD/refs/heads/master/rule/Clash/Apple/Apple.list" },
  "Apple / IP": { type: "http", interval: 43200, behavior: "ipcidr", format: "mrs", url: "https://raw.githubusercontent.com/peiyingyao/Rule-for-OCD/refs/heads/master/rule/Clash/Apple/Apple_OCD_IP.mrs" },
  "Apple-CN / Domain": { type: "http", interval: 43200, behavior: "domain", format: "mrs", url: "https://raw.githubusercontent.com/MetaCubeX/meta-rules-dat/meta/geo/geosite/apple-cn.mrs" },
  "Google / Domain": { type: "http", interval: 43200, behavior: "classical", format: "text", url: "https://raw.githubusercontent.com/peiyingyao/Rule-for-OCD/refs/heads/master/rule/Clash/Google/Google.list" },
  "Google / IP": { type: "http", interval: 43200, behavior: "ipcidr", format: "mrs", url: "https://raw.githubusercontent.com/peiyingyao/Rule-for-OCD/refs/heads/master/rule/Clash/Google/Google_OCD_IP.mrs" },
  "Google-Play / Domain": { type: "http", interval: 43200, behavior: "classical", format: "text", url: "https://raw.githubusercontent.com/2024JinFeng/clash/refs/heads/main/google%20play.list" },
  "Emby-Proxy / Domain": { type: "http", interval: 43200, behavior: "classical", format: "text", url: "https://raw.githubusercontent.com/2024JinFeng/clash/refs/heads/main/Emby-Proxy.list" },
  "Emby-Direct / Domain": { type: "http", interval: 43200, behavior: "classical", format: "text", url: "https://raw.githubusercontent.com/2024JinFeng/clash/refs/heads/main/Emby-Direct.list" },
  "Direct / Domain": { type: "http", interval: 43200, behavior: "domain", format: "mrs", url: "https://raw.githubusercontent.com/peiyingyao/Rule-for-OCD/refs/heads/master/rule/Clash/Direct/Direct_OCD_Domain.mrs" },
  "ChinaMax / Domain": { type: "http", interval: 43200, behavior: "domain", format: "mrs", url: "https://raw.githubusercontent.com/peiyingyao/Rule-for-OCD/refs/heads/master/rule/Clash/ChinaMax/ChinaMax_OCD_Domain.mrs" },
  "ChinaMax / IP": { type: "http", interval: 43200, behavior: "ipcidr", format: "mrs", url: "https://raw.githubusercontent.com/peiyingyao/Rule-for-OCD/refs/heads/master/rule/Clash/ChinaMax/ChinaMax_OCD_IP.mrs" },
  "China / Domain": { type: "http", interval: 43200, behavior: "domain", format: "mrs", url: "https://raw.githubusercontent.com/peiyingyao/Rule-for-OCD/refs/heads/master/rule/Clash/China/China_OCD_Domain.mrs" },
  "China / IP": { type: "http", interval: 43200, behavior: "ipcidr", format: "mrs", url: "https://raw.githubusercontent.com/peiyingyao/Rule-for-OCD/refs/heads/master/rule/Clash/China/China_OCD_IP.mrs" },
  "PrivateTracker / Domain": { type: "http", interval: 43200, behavior: "classical", format: "text", url: "https://raw.githubusercontent.com/peiyingyao/Rule-for-OCD/refs/heads/master/rule/Clash/PrivateTracker/PrivateTracker.list" },
  "PrivateTracker / IP": { type: "http", interval: 43200, behavior: "ipcidr", format: "mrs", url: "https://raw.githubusercontent.com/peiyingyao/Rule-for-OCD/refs/heads/master/rule/Clash/PrivateTracker/PrivateTracker_OCD_IP.mrs" }
};
 
const main = (config) => {
  if (!config || typeof config !== 'object') config = {};
  if (!Array.isArray(config.proxies)) config.proxies = [];
 
  const hasDirect = config.proxies.some(p => p.name === "直连节点");
  if (!hasDirect) {
    config.proxies.push({ name: "直连节点", type: "direct" });
  }
 
  const allNodeNames = config.proxies.map(p => p.name).filter(n => n !== "直连节点" && n !== "REJECT" && n !== "剩余流量" && n !== "距离下次重置" && n !== "套餐到期");
  const regionGroups = [], regionAutoRefs = [];
 
  for (const { name, regex } of REGION_FILTERS) {
    const matched = allNodeNames.filter(n => regex.test(n));
    if (!matched.length) continue;
    const a = `${name}-自动`, m = `${name}-手动`, f = `${name}-故转`;
    regionGroups.push({ name: f, type: "fallback", proxies: [a, m], url: "https://www.qualcomm.cn/generate_204", interval: 3600 });
    regionGroups.push({ name: a, type: "url-test", proxies: matched, url: "https://www.qualcomm.cn/generate_204", interval: 3600, tolerance: 150 });
    regionGroups.push({ name: m, type: "select", proxies: matched });
    regionAutoRefs.push(a);
  }
 
  const ALL_REGEX = /(广港|香港|HK|Hong Kong|🇭🇰|HongKong|广台|台湾|台灣|TW|Tai Wan|🇹🇼|🇨🇳|TaiWan|Taiwan|广日|日本|JP|川日|东京|大阪|泉日|埼玉|沪日|深日|🇯🇵|Japan|广新|新加坡|SG|坡|狮城|🇸🇬|Singapore|广韩|韩国|韓國|KR|首尔|春川|🇰🇷|Korea|广美|美|US|纽约|波特兰|达拉斯|俄勒|凤凰城|费利蒙|硅谷|拉斯|洛杉|圣何塞|圣克拉|西雅|芝加|🇺🇸|United States|英国|UK|United Kingdom|伦敦|英|London|🇬🇧)/i;
  
  const autoProxies = allNodeNames.filter(n => ALL_REGEX.test(n));
  if (autoProxies.length > 0) {
    regionGroups.push({
      name: "所有-自动",
      type: "url-test",
      proxies: autoProxies,
      url: "https://www.qualcomm.cn/generate_204",
      interval: 3600,
      tolerance: 150
    });
  } else {
    regionGroups.push({
      name: "所有-自动",
      type: "select",
      proxies: ["REJECT"]
    });
  }
 
  const nonHKSet = new Set();
  for (const { name, regex } of REGION_FILTERS) {
    if (name === "香港") continue;
    allNodeNames.filter(n => regex.test(n)).forEach(n => nonHKSet.add(n));
  }
  const nonHK = [...nonHKSet].filter(n => n !== "直连节点" && n !== "REJECT");
 
  if (nonHK.length > 0) {
    regionGroups.push({
      name: "不包含香港-自动",
      type: "url-test",
      proxies: nonHK,
      url: "https://www.qualcomm.cn/generate_204",
      interval: 3600,
      tolerance: 150
    });
  } else {
    regionGroups.push({
      name: "不包含香港-自动",
      type: "select",
      proxies: ["REJECT"]
    });
  }
 
  regionGroups.push({ name: "直连", type: "url-test", proxies: ["直连节点"], url: "https://www.qualcomm.cn/generate_204", interval: 3600, tolerance: 150 });
 
  if (!regionGroups.some(g => g.name === "其他-故转")) {
    regionGroups.push({ name: "其他-故转", type: "fallback", proxies: ["REJECT"], url: "https://www.qualcomm.cn/generate_204", interval: 3600 });
  }

  const allManualProxies = allNodeNames.filter(n => ALL_REGEX.test(n));
  if (allManualProxies.length > 0) {
    regionGroups.push({
      name: "所有手动",
      type: "select",
      proxies: allManualProxies
    });
  } else {
    regionGroups.push({
      name: "所有手动",
      type: "select",
      proxies: ["REJECT"]
    });
  }

  const hkRegex = REGION_FILTERS[0].regex;
  const nonHKManualProxies = allNodeNames.filter(n => n !== "直连节点" && n !== "REJECT" && !hkRegex.test(n));
  if (nonHKManualProxies.length > 0) {
    regionGroups.push({
      name: "不包含香港-所有手动",
      type: "select",
      proxies: nonHKManualProxies
    });
  } else {
    regionGroups.push({
      name: "不包含香港-所有手动",
      type: "select",
      proxies: ["REJECT"]
    });
  }
 
  const fallbackNames = regionGroups.filter(g => g.name.endsWith("-故转") || g.name === "所有-自动" || g.name === "不包含香港-自动").map(g => g.name);
  
  const GLOBAL = { name: "GLOBAL", type: "select", proxies: [...BASE_ALL, "所有手动", "不包含香港-所有手动", "REJECT"] };
 
  const existing = regionGroups.map(g => g.name);
  const business = APP_GROUPS.map(g => ({
    type: "select",
    ...g,
    proxies: g.proxies.filter(p => p === "REJECT" || existing.includes(p))
  })).filter(g => g.proxies.length);
 
  config["proxy-groups"] = [GLOBAL, ...business, ...regionGroups];
  config.rules = NEW_RULES;
  config["rule-providers"] = RULE_PROVIDERS;
  return config;
};
