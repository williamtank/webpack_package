/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ({

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(38);


/***/ },

/***/ 38:
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	var PUTAWAY_AREA = {
		"default": [{ "v": "DEF", "label": "全球" }, { "v": "CN", "label": "中国大陆" }, { "v": "HK", "label": "香港" }, { "v": "MO", "label": "澳门" }, { "v": "TW", "label": "台湾" }, { "v": "MY", "label": "马来西亚" }, { "v": "OVERSEA", "label": "海外总体" }],
		"OVERSEA": [{ "v": "AO", "label": "安哥拉", "e": "Angola" }, { "v": "AF", "label": "阿富汗", "e": "Afghanistan" }, { "v": "AL", "label": "阿尔巴尼亚", "e": "Albania" }, { "v": "DZ", "label": "阿尔及利亚", "e": "Algeria" }, { "v": "AD", "label": "安道尔共和国", "e": "Andorra" }, { "v": "AI", "label": "安圭拉岛", "e": "Anguilla" }, { "v": "AG", "label": "安提瓜和巴布达", "e": "Antigua and Barbuda" }, { "v": "AR", "label": "阿根廷", "e": "Argentina" }, { "v": "AM", "label": "亚美尼亚", "e": "Armenia" }, { "v": "AU", "label": "澳大利亚", "e": "Australia" }, { "v": "AT", "label": "奥地利", "e": "Austria" }, { "v": "AZ", "label": "阿塞拜疆", "e": "Azerbaijan" }, { "v": "BS", "label": "巴哈马", "e": "Bahamas" }, { "v": "BH", "label": "巴林", "e": "Bahrain" }, { "v": "BD", "label": "孟加拉国", "e": "Bangladesh" }, { "v": "BB", "label": "巴巴多斯", "e": "Barbados" }, { "v": "BY", "label": "白俄罗斯", "e": "Belarus" }, { "v": "BE", "label": "比利时", "e": "Belgium" }, { "v": "BZ", "label": "伯利兹", "e": "Belize" }, { "v": "BJ", "label": "贝宁", "e": "Benin" }, { "v": "BM", "label": "百慕大群岛", "e": "BermudaIs." }, { "v": "BO", "label": "玻利维亚", "e": "Bolivia" }, { "v": "BW", "label": "博茨瓦纳", "e": "Botswana" }, { "v": "BR", "label": "巴西", "e": "Brazil" }, { "v": "BN", "label": "文莱", "e": "Brunei" }, { "v": "BG", "label": "保加利亚", "e": "Bulgaria" }, { "v": "BF", "label": "布基纳法索", "e": "Burkina-faso" }, { "v": "MM", "label": "缅甸", "e": "Burma" }, { "v": "BI", "label": "布隆迪", "e": "Burundi" }, { "v": "CM", "label": "喀麦隆", "e": "Cameroon" }, { "v": "CA", "label": "加拿大", "e": "Canada" }, { "v": "CF", "label": "中非共和国", "e": "Central African Republic" }, { "v": "TD", "label": "乍得", "e": "Chad" }, { "v": "CL", "label": "智利", "e": "Chile" }, { "v": "CO", "label": "哥伦比亚", "e": "Colombia" }, { "v": "CG", "label": "刚果", "e": "Congo" }, { "v": "CK", "label": "库克群岛", "e": "Cook Is." }, { "v": "CR", "label": "哥斯达黎加", "e": "Costa Rica" }, { "v": "CU", "label": "古巴", "e": "Cuba" }, { "v": "CY", "label": "塞浦路斯", "e": "Cyprus" }, { "v": "CZ", "label": "捷克", "e": "Czech Republic" }, { "v": "DK", "label": "丹麦", "e": "Denmark" }, { "v": "DJ", "label": "吉布提", "e": "Djibouti" }, { "v": "DO", "label": "多米尼加共和国", "e": "Dominica Rep." }, { "v": "EC", "label": "厄瓜多尔", "e": "Ecuador" }, { "v": "EG", "label": "埃及", "e": "Egypt" }, { "v": "SV", "label": "萨尔瓦多", "e": "EISalvador" }, { "v": "EE", "label": "爱沙尼亚", "e": "Estonia" }, { "v": "ET", "label": "埃塞俄比亚", "e": "Ethiopia" }, { "v": "FJ", "label": "斐济", "e": "Fiji" }, { "v": "FI", "label": "芬兰", "e": "Finland" }, { "v": "FR", "label": "法国", "e": "France" }, { "v": "GF", "label": "法属圭亚那", "e": "French Guiana" }, { "v": "GA", "label": "加蓬", "e": "Gabon" }, { "v": "GM", "label": "冈比亚", "e": "Gambia" }, { "v": "GE", "label": "格鲁吉亚", "e": "Georgia" }, { "v": "DE", "label": "德国", "e": "Germany" }, { "v": "GH", "label": "加纳", "e": "Ghana" }, { "v": "GI", "label": "直布罗陀", "e": "Gibraltar" }, { "v": "GR", "label": "希腊", "e": "Greece" }, { "v": "GD", "label": "格林纳达", "e": "Grenada" }, { "v": "GU", "label": "关岛", "e": "Guam" }, { "v": "GT", "label": "危地马拉", "e": "Guatemala" }, { "v": "GN", "label": "几内亚", "e": "Guinea" }, { "v": "GY", "label": "圭亚那", "e": "Guyana" }, { "v": "HT", "label": "海地", "e": "Haiti" }, { "v": "HN", "label": "洪都拉斯", "e": "Honduras" }, { "v": "HU", "label": "匈牙利", "e": "Hungary" }, { "v": "IS", "label": "冰岛", "e": "Iceland" }, { "v": "IN", "label": "印度", "e": "India" }, { "v": "ID", "label": "印度尼西亚", "e": "Indonesia" }, { "v": "IR", "label": "伊朗", "e": "Iran" }, { "v": "IQ", "label": "伊拉克", "e": "Iraq" }, { "v": "IE", "label": "爱尔兰", "e": "Ireland" }, { "v": "IL", "label": "以色列", "e": "Israel" }, { "v": "IT", "label": "意大利", "e": "Italy" }, { "v": "JM", "label": "牙买加", "e": "Jamaica" }, { "v": "JP", "label": "日本", "e": "Japan" }, { "v": "JO", "label": "约旦", "e": "Jordan" }, { "v": "KH", "label": "柬埔寨", "e": "Kampuchea (Cambodia )" }, { "v": "KZ", "label": "哈萨克斯坦", "e": "Kazakstan" }, { "v": "KE", "label": "肯尼亚", "e": "Kenya" }, { "v": "KR", "label": "韩国", "e": "Korea" }, { "v": "KW", "label": "科威特", "e": "Kuwait" }, { "v": "KG", "label": "吉尔吉斯坦", "e": "Kyrgyzstan" }, { "v": "LA", "label": "老挝", "e": "Laos" }, { "v": "LV", "label": "拉脱维亚", "e": "Latvia" }, { "v": "LB", "label": "黎巴嫩", "e": "Lebanon" }, { "v": "LS", "label": "莱索托", "e": "Lesotho" }, { "v": "LR", "label": "利比里亚", "e": "Liberia" }, { "v": "LY", "label": "利比亚", "e": "Libya" }, { "v": "LI", "label": "列支敦士登", "e": "Liechtenstein" }, { "v": "LT", "label": "立陶宛", "e": "Lithuania" }, { "v": "LU", "label": "卢森堡", "e": "Luxembourg" },
		//{"v":"MO","label":"澳门","e":"Macao"},
		{ "v": "MG", "label": "马达加斯加", "e": "Madagascar" }, { "v": "MW", "label": "马拉维", "e": "Malawi" },
		//{"v":"MY","label":"马来西亚","e":"Malaysia"},
		{ "v": "MV", "label": "马尔代夫", "e": "Maldives" }, { "v": "ML", "label": "马里", "e": "Mali" }, { "v": "MT", "label": "马耳他", "e": "Malta" }, { "v": "MU", "label": "毛里求斯", "e": "Mauritius" }, { "v": "MX", "label": "墨西哥", "e": "Mexico" }, { "v": "MD", "label": "摩尔多瓦", "e": "Moldova, Republic of" }, { "v": "MC", "label": "摩纳哥", "e": "Monaco" }, { "v": "MN", "label": "蒙古", "e": "Mongolia" }, { "v": "MS", "label": "蒙特塞拉特岛", "e": "Montserrat Is" }, { "v": "MA", "label": "摩洛哥", "e": "Morocco" }, { "v": "MZ", "label": "莫桑比克", "e": "Mozambique" }, { "v": "NA", "label": "纳米比亚", "e": "Namibia" }, { "v": "NR", "label": "瑙鲁", "e": "Nauru" }, { "v": "NP", "label": "尼泊尔", "e": "Nepal" }, { "v": "NL", "label": "荷兰", "e": "Netherlands" }, { "v": "NZ", "label": "新西兰", "e": "NewZealand" }, { "v": "NI", "label": "尼加拉瓜", "e": "Nicaragua" }, { "v": "NE", "label": "尼日尔", "e": "Niger" }, { "v": "NG", "label": "尼日利亚", "e": "Nigeria" }, { "v": "KP", "label": "朝鲜", "e": "North Korea" }, { "v": "NO", "label": "挪威", "e": "Norway" }, { "v": "OM", "label": "阿曼", "e": "Oman" }, { "v": "PK", "label": "巴基斯坦", "e": "Pakistan" }, { "v": "PA", "label": "巴拿马", "e": "Panama" }, { "v": "PG", "label": "巴布亚新几内亚", "e": "Papua New Cuinea" }, { "v": "PY", "label": "巴拉圭", "e": "Paraguay" }, { "v": "PE", "label": "秘鲁", "e": "Peru" }, { "v": "PH", "label": "菲律宾", "e": "Philippines" }, { "v": "PL", "label": "波兰", "e": "Poland" }, { "v": "PF", "label": "法属玻利尼西亚", "e": "French Polynesia" }, { "v": "PT", "label": "葡萄牙", "e": "Portugal" }, { "v": "PR", "label": "波多黎各", "e": "PuertoRico" }, { "v": "QA", "label": "卡塔尔", "e": "Qatar" }, { "v": "RO", "label": "罗马尼亚", "e": "Romania" }, { "v": "RU", "label": "俄罗斯", "e": "Russia" }, { "v": "LC", "label": "圣卢西亚", "e": "Saint Lueia" }, { "v": "VC", "label": "圣文森特岛", "e": "Saint Vincent" }, { "v": "SM", "label": "圣马力诺", "e": "San Marino" }, { "v": "ST", "label": "圣多美和普林西比", "e": "Sao Tome and Principe" }, { "v": "SA", "label": "沙特阿拉伯", "e": "Saudi Arabia" }, { "v": "SN", "label": "塞内加尔", "e": "Senegal" }, { "v": "SC", "label": "塞舌尔", "e": "Seychelles" }, { "v": "SL", "label": "塞拉利昂", "e": "Sierra Leone" }, { "v": "SG", "label": "新加坡", "e": "Singapore" }, { "v": "SK", "label": "斯洛伐克", "e": "Slovakia" }, { "v": "SI", "label": "斯洛文尼亚", "e": "Slovenia" }, { "v": "SB", "label": "所罗门群岛", "e": "Solomon Is" }, { "v": "SO", "label": "索马里", "e": "Somali" }, { "v": "ZA", "label": "南非", "e": "South Africa" }, { "v": "ES", "label": "西班牙", "e": "Spain" }, { "v": "LK", "label": "斯里兰卡", "e": "Sri Lanka" }, { "v": "SD", "label": "苏丹", "e": "Sudan" }, { "v": "SR", "label": "苏里南", "e": "Suriname" }, { "v": "SZ", "label": "斯威士兰", "e": "Swaziland" }, { "v": "SE", "label": "瑞典", "e": "Sweden" }, { "v": "CH", "label": "瑞士", "e": "Switzerland" }, { "v": "SY", "label": "叙利亚", "e": "Syria" }, { "v": "TJ", "label": "塔吉克斯坦", "e": "Tajikstan" }, { "v": "TZ", "label": "坦桑尼亚", "e": "Tanzania" }, { "v": "TH", "label": "泰国", "e": "Thailand" }, { "v": "TG", "label": "多哥", "e": "Togo" }, { "v": "TO", "label": "汤加", "e": "Tonga" }, { "v": "TT", "label": "特立尼达和多巴哥", "e": "Trinidad and Tobago" }, { "v": "TN", "label": "突尼斯", "e": "Tunisia" }, { "v": "TR", "label": "土耳其", "e": "Turkey" }, { "v": "TM", "label": "土库曼斯坦", "e": "Turkmenistan" }, { "v": "UG", "label": "乌干达", "e": "Uganda" }, { "v": "UA", "label": "乌克兰", "e": "Ukraine" }, { "v": "AE", "label": "阿拉伯联合酋长国", "e": "United Arab Emirates" }, { "v": "GB", "label": "英国", "e": "United Kiongdom" }, { "v": "US", "label": "美国", "e": "United States of America" }, { "v": "UY", "label": "乌拉圭", "e": "Uruguay" }, { "v": "UZ", "label": "乌兹别克斯坦", "e": "Uzbekistan" }, { "v": "VE", "label": "委内瑞拉", "e": "Venezuela" }, { "v": "VN", "label": "越南", "e": "Vietnam" }, { "v": "YE", "label": "也门", "e": "Yemen" }, { "v": "YU", "label": "南斯拉夫", "e": "Yugoslavia" }, { "v": "ZW", "label": "津巴布韦", "e": "Zimbabwe" }, { "v": "ZR", "label": "扎伊尔", "e": "Zaire" }, { "v": "ZM", "label": "赞比亚", "e": "Zambia" }]
	};
	
	exports.PUTAWAY_AREA = PUTAWAY_AREA;

/***/ }

/******/ });
//# sourceMappingURL=index.2737.js.map