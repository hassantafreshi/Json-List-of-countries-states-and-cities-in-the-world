const countries_local=["阿富汗","奥兰","阿尔巴尼亚","阿尔及利亚","美属萨摩亚","安道尔","安哥拉","安圭拉","南极洲","安提瓜和巴布达","阿根廷","亚美尼亚","阿鲁巴","澳大利亚","奥地利","阿塞拜疆","巴哈马","巴林","孟加拉国","巴巴多斯","","白俄罗斯","比利时","伯利兹","贝宁","百慕大","不丹","玻利维亚","博奈尔","加勒比","波斯尼亚和黑塞哥维那","博茨瓦纳","布韦岛","巴西","英属印度洋领地","英属维尔京群岛","文莱","保加利亚","布基纳法索","布隆迪","柬埔寨","喀麦隆","加拿大","佛得角","开曼群岛","中非共和国","乍得","智利","中国","圣诞岛","","哥伦比亚","科摩罗","库克群岛","哥斯达黎加","克罗地亚","古巴","库拉索","塞浦路斯","捷克","刚果民主共和国","丹麦","吉布提","多米尼克","多米尼克","东帝汶","厄瓜多尔","埃及","萨尔瓦多","萨尔瓦多","厄立特里亚","爱沙尼亚","埃塞俄比亚","福克兰群岛","法罗群岛","斐济","芬兰","法国","法属圭亚那","法属波利尼西亚","法属南部和南极领地","加蓬","冈比亚","格鲁吉亚","德国","加纳","直布罗陀","希腊","格陵兰","格林纳达","瓜德罗普","关岛","危地马拉","根西","几内亚","几内亚比绍","圭亚那","海地","赫德岛和麦克唐纳群岛","洪都拉斯","香港","匈牙利","冰岛","印度","印度尼西亚","伊朗","伊拉克","爱尔兰岛","马恩岛","以色列","意大利","科特迪瓦","牙买加","日本","泽西","约旦","哈萨克斯坦","肯尼亚","基里巴斯","科索沃","科威特","吉尔吉斯斯坦","老挝","拉脱维亚","黎巴嫩","莱索托","利比里亚","利比亚","列支敦士登","立陶宛","卢森堡","澳门","北马其顿","马达加斯加","马拉维","马来西亚","马尔代夫","马里","马耳他","马绍尔群岛","马提尼克","毛里塔尼亚","毛里求斯","马约特","墨西哥","密克罗尼西亚岛群","摩尔多瓦","摩纳哥","蒙古国","黑山","蒙特塞拉特","摩洛哥","莫桑比克","缅甸","纳米比亚","瑙鲁","尼泊尔","荷兰","荷属安的列斯","新喀里多尼亚","新西兰","尼加拉瓜","尼日尔","尼日利亚","纽埃","诺福克岛","朝鲜民主主义人民共和国","北马里亚纳群岛","挪威","阿曼","巴基斯坦","帕劳","巴勒斯坦领土","巴拿马","巴布亚新几内亚","巴拉圭","秘鲁","菲律宾","皮特凯恩群岛","波兰","葡萄牙","波多黎各","卡塔尔","刚果共和国","团圆","罗马尼亚","俄罗斯","卢旺达","圣巴泰勒米","圣赫勒拿","圣基茨和尼维斯","圣卢西亚","荷属圣马丁","圣皮埃尔和密克隆","圣文森特和格林纳丁斯","萨摩亚","圣马力诺","圣多美和普林西比","沙特阿拉伯","塞内加尔","塞尔维亚","塞尔维亚和黑山","塞舌尔","塞拉利昂","新加坡","荷属圣马丁","斯洛伐克","斯洛文尼亚","所罗门群岛","索马里","南非","南乔治亚和南桑威奇群岛","大韩民国","南苏丹","西班牙","斯里兰卡","苏丹","苏里南","斯瓦尔巴和扬马延","斯威士兰","瑞典","瑞士","叙利亚","中华民国","塔吉克斯坦","坦桑尼亚","泰国","多哥","托克劳","汤加","特立尼达和多巴哥","突尼斯","土耳其","土库曼斯坦","特克斯和凯科斯群岛","图瓦卢","美属维尔京群岛","乌干达","乌克兰","阿拉伯联合酋长国","英国","美国","美国本土外小岛屿","乌拉圭","乌茲别克斯坦","瓦努阿图","梵蒂冈","委内瑞拉","越南","瓦利斯和富图纳","西撒哈拉","也门","赞比亚","津巴布韦"]; const state_en=["Anhui Province","Beijing Municipality","Chongqing Municipality","Fujian Province","Guangdong Province","Gansu Province","Guangxi Zhuang Autonomous Region","Guizhou Province","Henan Province","Hubei Province","Hebei Province","Hainan Province","Hong Kong Special Administrative Region","Heilongjiang Province","Hunan Province","Jilin Province","Jiangsu Province","Jiangxi Province","Liaoning Province","Macau Special Administrative Region","Inner Mongolia Autonomous Region","Ningxia Hui Autonomous Region","Qinghai Province","Sichuan Province","Shandong Province","Shanghai Municipality","Shaanxi Province","Shanxi Province","Tianjin Municipality","Taiwan Province","Xinjiang Uyghur Autonomous Region","Tibet Autonomous Region","Yunnan Province","Zhejiang Province"]; const countries_en=["Afghanistan","Aland Islands","Albania","Algeria","American Samoa","Andorra","Angola","Anguilla","Antarctica","Antigua and Barbuda","Argentina","Armenia","Aruba","Australia","Austria","Azerbaijan","Bahamas","Bahrain","Bangladesh","Barbados","Belarus","Belgium","Belize","Benin","Bermuda","Bhutan","Bolivia","Bonaire, Saint Eustatius and Saba","Bosnia and Herzegovina","Botswana","Bouvet Island","Brazil","British Indian Ocean Territory","British Virgin Islands","Brunei","Bulgaria","Burkina Faso","Burundi","Cambodia","Cameroon","Canada","Cape Verde","Cayman Islands","Central African Republic","Chad","Chile","China","Christmas Island","Cocos Islands","Colombia","Comoros","Cook Islands","Costa Rica","Croatia","Cuba","Curacao","Cyprus","Czech Republic","Democratic Republic of the Congo","Denmark","Djibouti","Dominica","Dominican Republic","East Timor","Ecuador","Egypt","El Salvador","Equatorial Guinea","Eritrea","Estonia","Ethiopia","Falkland Islands","Faroe Islands","Fiji","Finland","France","French Guiana","French Polynesia","French Southern Territories","Gabon","Gambia","Georgia","Germany","Ghana","Gibraltar","Greece","Greenland","Grenada","Guadeloupe","Guam","Guatemala","Guernsey","Guinea","Guinea-Bissau","Guyana","Haiti","Heard Island and McDonald Islands","Honduras","Hong Kong","Hungary","Iceland","India","Indonesia","Iran","Iraq","Ireland","Isle of Man","Israel","Italy","Ivory Coast","Jamaica","Japan","Jersey","Jordan","Kazakhstan","Kenya","Kiribati","Kosovo","Kuwait","Kyrgyzstan","Laos","Latvia","Lebanon","Lesotho","Liberia","Libya","Liechtenstein","Lithuania","Luxembourg","Macao","Macedonia","Madagascar","Malawi","Malaysia","Maldives","Mali","Malta","Marshall Islands","Martinique","Mauritania","Mauritius","Mayotte","Mexico","Micronesia","Moldova","Monaco","Mongolia","Montenegro","Montserrat","Morocco","Mozambique","Myanmar","Namibia","Nauru","Nepal","Netherlands","Netherlands Antilles","New Caledonia","New Zealand","Nicaragua","Niger","Nigeria","Niue","Norfolk Island","North Korea","Northern Mariana Islands","Norway","Oman","Pakistan","Palau","Palestinian Territory","Panama","Papua New Guinea","Paraguay","Peru","Philippines","Pitcairn","Poland","Portugal","Puerto Rico","Qatar","Republic of the Congo","Reunion","Romania","Russia","Rwanda","Saint Barthelemy","Saint Helena","Saint Kitts and Nevis","Saint Lucia","Saint Martin","Saint Pierre and Miquelon","Saint Vincent and the Grenadines","Samoa","San Marino","Sao Tome and Principe","Saudi Arabia","Senegal","Serbia","Serbia and Montenegro","Seychelles","Sierra Leone","Singapore","Sint Maarten","Slovakia","Slovenia","Solomon Islands","Somalia","South Africa","South Georgia and the South Sandwich Islands","South Korea","South Sudan","Spain","Sri Lanka","Sudan","Suriname","Svalbard and Jan Mayen","Swaziland","Sweden","Switzerland","Syria","Taiwan","Tajikistan","Tanzania","Thailand","Togo","Tokelau","Tonga","Trinidad and Tobago","Tunisia","Turkey","Turkmenistan","Turks and Caicos Islands","Tuvalu","U.S. Virgin Islands","Uganda","Ukraine","United Arab Emirates","United Kingdom","United States","United States Minor Outlying Islands","Uruguay","Uzbekistan","Vanuatu","Vatican","Venezuela","Vietnam","Wallis and Futuna","Western Sahara","Yemen","Zambia","Zimbabwe"]; 