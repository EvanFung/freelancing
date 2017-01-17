{"changed":true,"filter":false,"title":"seed.js","tooltip":"/seed.js","value":"var mongoose = require(\"mongoose\");\nvar User = require(\"./models/user\");\n\nfunction seedDB(){\n    User.remove({}, function(err){\n        if (err){\n            console.log(err);\n        } else {\n            console.log(\"User data have been removed\");\n        }\n    });\n}\n\nmodule.exports = seedDB;","undoManager":{"mark":-36,"position":100,"stack":[[{"start":{"row":4,"column":16},"end":{"row":6,"column":9},"action":"insert","lines":["","            ","        }"],"id":35}],[{"start":{"row":5,"column":12},"end":{"row":5,"column":13},"action":"insert","lines":["c"],"id":36}],[{"start":{"row":5,"column":13},"end":{"row":5,"column":14},"action":"insert","lines":["o"],"id":37}],[{"start":{"row":5,"column":14},"end":{"row":5,"column":15},"action":"insert","lines":["n"],"id":38}],[{"start":{"row":5,"column":15},"end":{"row":5,"column":16},"action":"insert","lines":["s"],"id":39}],[{"start":{"row":5,"column":16},"end":{"row":5,"column":17},"action":"insert","lines":["o"],"id":40}],[{"start":{"row":5,"column":17},"end":{"row":5,"column":18},"action":"insert","lines":["l"],"id":41}],[{"start":{"row":5,"column":18},"end":{"row":5,"column":19},"action":"insert","lines":["e"],"id":42}],[{"start":{"row":5,"column":19},"end":{"row":5,"column":20},"action":"insert","lines":["."],"id":43}],[{"start":{"row":5,"column":20},"end":{"row":5,"column":21},"action":"insert","lines":["l"],"id":44}],[{"start":{"row":5,"column":21},"end":{"row":5,"column":22},"action":"insert","lines":["o"],"id":45}],[{"start":{"row":5,"column":22},"end":{"row":5,"column":23},"action":"insert","lines":["g"],"id":46}],[{"start":{"row":5,"column":23},"end":{"row":5,"column":25},"action":"insert","lines":["()"],"id":47}],[{"start":{"row":5,"column":24},"end":{"row":5,"column":26},"action":"insert","lines":["\"\""],"id":48}],[{"start":{"row":5,"column":25},"end":{"row":5,"column":26},"action":"insert","lines":["A"],"id":49}],[{"start":{"row":5,"column":26},"end":{"row":5,"column":27},"action":"insert","lines":["L"],"id":50}],[{"start":{"row":5,"column":27},"end":{"row":5,"column":28},"action":"insert","lines":["l"],"id":51}],[{"start":{"row":5,"column":27},"end":{"row":5,"column":28},"action":"remove","lines":["l"],"id":52}],[{"start":{"row":5,"column":26},"end":{"row":5,"column":27},"action":"remove","lines":["L"],"id":53}],[{"start":{"row":5,"column":25},"end":{"row":5,"column":26},"action":"remove","lines":["A"],"id":54}],[{"start":{"row":5,"column":25},"end":{"row":5,"column":26},"action":"insert","lines":["A"],"id":55}],[{"start":{"row":5,"column":26},"end":{"row":5,"column":27},"action":"insert","lines":[";"],"id":56}],[{"start":{"row":5,"column":27},"end":{"row":5,"column":28},"action":"insert","lines":[";"],"id":57}],[{"start":{"row":5,"column":27},"end":{"row":5,"column":28},"action":"remove","lines":[";"],"id":58}],[{"start":{"row":5,"column":26},"end":{"row":5,"column":27},"action":"remove","lines":[";"],"id":59}],[{"start":{"row":5,"column":25},"end":{"row":5,"column":26},"action":"remove","lines":["A"],"id":60}],[{"start":{"row":5,"column":25},"end":{"row":5,"column":26},"action":"insert","lines":["R"],"id":61}],[{"start":{"row":5,"column":26},"end":{"row":5,"column":27},"action":"insert","lines":["e"],"id":62}],[{"start":{"row":5,"column":27},"end":{"row":5,"column":28},"action":"insert","lines":["s"],"id":63}],[{"start":{"row":5,"column":28},"end":{"row":5,"column":29},"action":"insert","lines":["t"],"id":64}],[{"start":{"row":5,"column":28},"end":{"row":5,"column":29},"action":"remove","lines":["t"],"id":65}],[{"start":{"row":5,"column":27},"end":{"row":5,"column":28},"action":"remove","lines":["s"],"id":66}],[{"start":{"row":5,"column":26},"end":{"row":5,"column":27},"action":"remove","lines":["e"],"id":67}],[{"start":{"row":5,"column":25},"end":{"row":5,"column":26},"action":"remove","lines":["R"],"id":68}],[{"start":{"row":5,"column":25},"end":{"row":5,"column":26},"action":"insert","lines":["A"],"id":69}],[{"start":{"row":5,"column":26},"end":{"row":5,"column":27},"action":"insert","lines":["l"],"id":70}],[{"start":{"row":5,"column":27},"end":{"row":5,"column":28},"action":"insert","lines":["l"],"id":71}],[{"start":{"row":5,"column":28},"end":{"row":5,"column":29},"action":"insert","lines":[" "],"id":72}],[{"start":{"row":5,"column":28},"end":{"row":5,"column":29},"action":"remove","lines":[" "],"id":73}],[{"start":{"row":5,"column":27},"end":{"row":5,"column":28},"action":"remove","lines":["l"],"id":74}],[{"start":{"row":5,"column":26},"end":{"row":5,"column":27},"action":"remove","lines":["l"],"id":75}],[{"start":{"row":5,"column":25},"end":{"row":5,"column":26},"action":"remove","lines":["A"],"id":76}],[{"start":{"row":5,"column":25},"end":{"row":5,"column":26},"action":"insert","lines":["U"],"id":77}],[{"start":{"row":5,"column":26},"end":{"row":5,"column":27},"action":"insert","lines":["s"],"id":78}],[{"start":{"row":5,"column":27},"end":{"row":5,"column":28},"action":"insert","lines":["e"],"id":79}],[{"start":{"row":5,"column":28},"end":{"row":5,"column":29},"action":"insert","lines":["r"],"id":80}],[{"start":{"row":5,"column":29},"end":{"row":5,"column":30},"action":"insert","lines":[" "],"id":81}],[{"start":{"row":5,"column":30},"end":{"row":5,"column":31},"action":"insert","lines":["d"],"id":82}],[{"start":{"row":5,"column":31},"end":{"row":5,"column":32},"action":"insert","lines":["a"],"id":83}],[{"start":{"row":5,"column":32},"end":{"row":5,"column":33},"action":"insert","lines":["t"],"id":84}],[{"start":{"row":5,"column":33},"end":{"row":5,"column":34},"action":"insert","lines":["a"],"id":85}],[{"start":{"row":5,"column":34},"end":{"row":5,"column":35},"action":"insert","lines":[" "],"id":86}],[{"start":{"row":5,"column":35},"end":{"row":5,"column":36},"action":"insert","lines":["h"],"id":87}],[{"start":{"row":5,"column":36},"end":{"row":5,"column":37},"action":"insert","lines":["a"],"id":88}],[{"start":{"row":5,"column":37},"end":{"row":5,"column":38},"action":"insert","lines":["v"],"id":89}],[{"start":{"row":5,"column":38},"end":{"row":5,"column":39},"action":"insert","lines":["e"],"id":90}],[{"start":{"row":5,"column":39},"end":{"row":5,"column":40},"action":"insert","lines":[" "],"id":91}],[{"start":{"row":5,"column":40},"end":{"row":5,"column":41},"action":"insert","lines":["b"],"id":92}],[{"start":{"row":5,"column":41},"end":{"row":5,"column":42},"action":"insert","lines":["e"],"id":93}],[{"start":{"row":5,"column":42},"end":{"row":5,"column":43},"action":"insert","lines":["e"],"id":94}],[{"start":{"row":5,"column":43},"end":{"row":5,"column":44},"action":"insert","lines":["n"],"id":95}],[{"start":{"row":5,"column":44},"end":{"row":5,"column":45},"action":"insert","lines":[" "],"id":96}],[{"start":{"row":5,"column":45},"end":{"row":5,"column":46},"action":"insert","lines":["r"],"id":97}],[{"start":{"row":5,"column":46},"end":{"row":5,"column":47},"action":"insert","lines":["e"],"id":98}],[{"start":{"row":5,"column":47},"end":{"row":5,"column":48},"action":"insert","lines":["m"],"id":99}],[{"start":{"row":5,"column":48},"end":{"row":5,"column":49},"action":"insert","lines":["o"],"id":100}],[{"start":{"row":5,"column":49},"end":{"row":5,"column":50},"action":"insert","lines":["v"],"id":101}],[{"start":{"row":5,"column":50},"end":{"row":5,"column":51},"action":"insert","lines":["e"],"id":102}],[{"start":{"row":5,"column":51},"end":{"row":5,"column":52},"action":"insert","lines":["d"],"id":103}],[{"start":{"row":5,"column":54},"end":{"row":5,"column":55},"action":"insert","lines":[";"],"id":104}],[{"start":{"row":6,"column":9},"end":{"row":7,"column":0},"action":"insert","lines":["",""],"id":105},{"start":{"row":7,"column":0},"end":{"row":7,"column":8},"action":"insert","lines":["        "]}],[{"start":{"row":7,"column":4},"end":{"row":7,"column":8},"action":"remove","lines":["    "],"id":106}],[{"start":{"row":7,"column":4},"end":{"row":7,"column":5},"action":"insert","lines":[")"],"id":107}],[{"start":{"row":7,"column":4},"end":{"row":7,"column":5},"action":"insert","lines":["}"],"id":108}],[{"start":{"row":7,"column":6},"end":{"row":7,"column":7},"action":"insert","lines":[";"],"id":109}],[{"start":{"row":7,"column":7},"end":{"row":8,"column":0},"action":"insert","lines":["",""],"id":110},{"start":{"row":8,"column":0},"end":{"row":8,"column":4},"action":"insert","lines":["    "]}],[{"start":{"row":8,"column":4},"end":{"row":9,"column":0},"action":"insert","lines":["",""],"id":111},{"start":{"row":9,"column":0},"end":{"row":9,"column":4},"action":"insert","lines":["    "]}],[{"start":{"row":9,"column":0},"end":{"row":9,"column":4},"action":"remove","lines":["    "],"id":112}],[{"start":{"row":8,"column":4},"end":{"row":9,"column":0},"action":"remove","lines":["",""],"id":113}],[{"start":{"row":8,"column":0},"end":{"row":8,"column":4},"action":"remove","lines":["    "],"id":114}],[{"start":{"row":8,"column":0},"end":{"row":8,"column":1},"action":"insert","lines":["}"],"id":115}],[{"start":{"row":1,"column":4},"end":{"row":1,"column":14},"action":"remove","lines":["Campground"],"id":116},{"start":{"row":1,"column":4},"end":{"row":1,"column":5},"action":"insert","lines":["U"]}],[{"start":{"row":1,"column":5},"end":{"row":1,"column":6},"action":"insert","lines":["s"],"id":117}],[{"start":{"row":1,"column":6},"end":{"row":1,"column":7},"action":"insert","lines":["a"],"id":118}],[{"start":{"row":1,"column":6},"end":{"row":1,"column":7},"action":"remove","lines":["a"],"id":119}],[{"start":{"row":1,"column":6},"end":{"row":1,"column":7},"action":"insert","lines":["e"],"id":120}],[{"start":{"row":1,"column":7},"end":{"row":1,"column":8},"action":"insert","lines":["r"],"id":121}],[{"start":{"row":0,"column":0},"end":{"row":1,"column":0},"action":"insert","lines":["",""],"id":122}],[{"start":{"row":1,"column":0},"end":{"row":2,"column":0},"action":"insert","lines":["",""],"id":123}],[{"start":{"row":0,"column":0},"end":{"row":1,"column":48},"action":"insert","lines":["var mongoose = require(\"mongoose\");","var Campground = require(\"./models/campground\");"],"id":124}],[{"start":{"row":1,"column":35},"end":{"row":1,"column":45},"action":"remove","lines":["campground"],"id":125},{"start":{"row":1,"column":35},"end":{"row":1,"column":36},"action":"insert","lines":["u"]}],[{"start":{"row":1,"column":36},"end":{"row":1,"column":37},"action":"insert","lines":["s"],"id":126}],[{"start":{"row":1,"column":37},"end":{"row":1,"column":38},"action":"insert","lines":["e"],"id":127}],[{"start":{"row":1,"column":38},"end":{"row":1,"column":39},"action":"insert","lines":["r"],"id":128}],[{"start":{"row":1,"column":4},"end":{"row":1,"column":14},"action":"remove","lines":["Campground"],"id":129},{"start":{"row":1,"column":4},"end":{"row":1,"column":5},"action":"insert","lines":["U"]}],[{"start":{"row":1,"column":5},"end":{"row":1,"column":6},"action":"insert","lines":["s"],"id":130}],[{"start":{"row":1,"column":6},"end":{"row":1,"column":7},"action":"insert","lines":["e"],"id":131}],[{"start":{"row":1,"column":7},"end":{"row":1,"column":8},"action":"insert","lines":["r"],"id":132}],[{"start":{"row":11,"column":1},"end":{"row":12,"column":0},"action":"insert","lines":["",""],"id":133}],[{"start":{"row":12,"column":0},"end":{"row":12,"column":24},"action":"insert","lines":["module.exports = seedDB;"],"id":134}],[{"start":{"row":11,"column":1},"end":{"row":12,"column":0},"action":"insert","lines":["",""],"id":135}]]},"ace":{"folds":[],"scrolltop":0,"scrollleft":0,"selection":{"start":{"row":12,"column":0},"end":{"row":12,"column":0},"isBackwards":false},"options":{"guessTabSize":true,"useWrapMode":false,"wrapToView":true},"firstLineState":0},"timestamp":1484401915581}