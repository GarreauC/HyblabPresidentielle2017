'use strict';

// No need for window.onload event here since we are using the def attribute
// when loading our scripts

// Load a dummy json file using the fetch API
/*fetch('data/dummy.json')
    // this promise will be fulfilled when the json fill will be
    .then(function (response){
        // if we could load the resource, parse it
        if( response.ok )
            return response.json();
        else // if not, send some error message as JSON data
            return {data: "JSON file not found"};

    })
    // in case of invalid JSON (parse error) send some error message as JSON data
    .catch( function (error){
        return {data: "Invalid JSON"};
    })
    // this promise will be fulfilled when the json will be parsed
    .then(function (json) {
        document.querySelector('#data')
            .textContent = json.data;
    });*/
/*
fetch('data/53_data.json')
    // this promise will be fulfilled when the json fill will be
    .then(function (response){
        // if we could load the resource, parse it
        if( response.ok )
            return response.json();
        else // if not, send some error message as JSON data
            return {data: "JSON file not found"};

    })
    // in case of invalid JSON (parse error) send some error message as JSON data
    .catch( function (error){
        return {data: "Invalid JSON"};
    })
    // this promise will be fulfilled when the json will be parsed
    .then(function (json) {
        
        var text="", annee,cand;

        for (annee in json.c1){
            text += "Annee " +json.c1[annee].Annee + "  Partis:";
            
            for (var item in json.c1[annee]){
                var str = item.split(" ");

                if (str[1] == "Etiquette"){
                    text+= json.c1[annee][item] +" / ";

                }
            }
            
            
        }
        
        
        document.querySelector('#test')
            .textContent = text;
        });
*/
var region = document.querySelector("#region");
var map_la = document.querySelector("#map_la");
var map_mayenne = document.querySelector("#map_mayenne");
var map_sarthe = document.querySelector("#map_sarthe");
var map_mel = document.querySelector("#map_mel");
var map_vendee = document.querySelector("#map_vendee");

var list_region = document.querySelector('#list_region');
var list_la = document.querySelector("#list_la");
var list_mayenne = document.querySelector("#list_mayenne");
var list_sarthe = document.querySelector("#list_sarthe");
var list_mel = document.querySelector("#list_mel");
var list_vendee = document.querySelector("#list_vendee");


var paths_region = region.querySelectorAll('.land');
var links_region = list_region.querySelectorAll(".list_node");
var paths_la = map_la.querySelectorAll('.land');
var links_la = list_la.querySelectorAll('.list_node');
var paths_mayenne = map_mayenne.querySelectorAll('.land');
var links_mayenne = list_mayenne.querySelectorAll('.list_node');
var paths_sarthe = map_sarthe.querySelectorAll('.land');
var links_sarthe = list_sarthe.querySelectorAll('.list_node');
var paths_mel = map_mel.querySelectorAll('.land');
var links_mel = list_mel.querySelectorAll('.list_node');
var paths_vendee = map_vendee.querySelectorAll('.land');
var links_vendee = list_vendee.querySelectorAll('.list_node');
var paths_vendee1 = map_vendee.querySelectorAll('.land1');
var links_vendee1 = list_vendee.querySelectorAll('.list_node1');

//polyfill du foreach
if(NodeList.prototype.forEach === undefined){
    NodeList.prototype.forEach = function(callback){
        [].forEach.call(this, callback);
    }
}

var activeArea =function(id){
    map_la.querySelectorAll('.is-active').forEach(function(item){
        item.classList.remove('is-active');
    })
    list_la.querySelectorAll('.is-active').forEach(function(item){
        item.classList.remove('is-active');
    })
    region.querySelectorAll('.is-active').forEach(function(item){
        item.classList.remove('is-active');
    })
    list_region.querySelectorAll('.is-active').forEach(function(item){
        item.classList.remove('is-active');
    })
    map_mayenne.querySelectorAll('.is-active').forEach(function(item){
        item.classList.remove('is-active');
    })
    list_mayenne.querySelectorAll('.is-active').forEach(function(item){
        item.classList.remove('is-active');
    })
    map_sarthe.querySelectorAll('.is-active').forEach(function(item){
        item.classList.remove('is-active');
    })
    list_sarthe.querySelectorAll('.is-active').forEach(function(item){
        item.classList.remove('is-active');
    })
    map_mel.querySelectorAll('.is-active').forEach(function(item){
        item.classList.remove('is-active');
    })
    list_mel.querySelectorAll('.is-active').forEach(function(item){
        item.classList.remove('is-active');
    })
    map_vendee.querySelectorAll('.is-active').forEach(function(item){
        item.classList.remove('is-active');
    })
    list_vendee.querySelectorAll('.is-active').forEach(function(item){
        item.classList.remove('is-active');
    })
    if(id !== undefined){
        document.querySelector('#map_'+ id).classList.add('is-active');
        document.querySelector('#list_'+ id).classList.add('is-active');
    }
}

paths_region.forEach(function(path){
    path.addEventListener('mouseenter', function(e){
        var id = this.id.replace("map_", '');
        activeArea(id);
    });
})
links_region.forEach(function(link){
    link.addEventListener('mouseenter', function(e){
        var id = this.id.replace("list_", '');
        activeArea(id);
    });
})
paths_la.forEach(function(path){
    path.addEventListener('mouseenter', function(e){
        var id = this.id.replace("map_", '');
        activeArea(id);
    });
})
links_la.forEach(function(link){
    link.addEventListener('mouseenter', function(e){
        var id = this.id.replace("list_", '');
        activeArea(id);
    });
})
paths_mayenne.forEach(function(path){
    path.addEventListener('mouseenter', function(e){
        var id = this.id.replace("map_", '');
        activeArea(id);
    });
})
links_mayenne.forEach(function(link){
    link.addEventListener('mouseenter', function(e){
        var id = this.id.replace("list_", '');
        activeArea(id);
    });
})
paths_sarthe.forEach(function(path){
    path.addEventListener('mouseenter', function(e){
        var id = this.id.replace("map_", '');
        activeArea(id);
    });
})
links_sarthe.forEach(function(link){
    link.addEventListener('mouseenter', function(e){
        var id = this.id.replace("list_", '');
        activeArea(id);
    });
})
paths_mel.forEach(function(path){
    path.addEventListener('mouseenter', function(e){
        var id = this.id.replace("map_", '');
        activeArea(id);
    });
})
links_mel.forEach(function(link){
    link.addEventListener('mouseenter', function(e){
        var id = this.id.replace("list_", '');
        activeArea(id);
    });
})
paths_vendee.forEach(function(path){
    path.addEventListener('mouseenter', function(e){
        var id = this.id.replace("map_", '');
        activeArea(id);
    })
})
links_vendee.forEach(function(link){
    link.addEventListener('mouseenter', function(e){
        var id = this.id.replace("list_", '');
        activeArea(id);
    })
})
paths_vendee1.forEach(function(path){
    path.addEventListener('mouseenter', function(e){
        var id1 = document.getElementById("map_8531").id.replace("map_", '');
        var id2 = document.getElementById("map_8532").id.replace("map_", '');
        var id3 = document.getElementById("map_8533").id.replace("map_", '');
        document.querySelector('#map_'+ id1).classList.add('is-active');
        document.querySelector('#map_'+ id2).classList.add('is-active');
        document.querySelector('#map_'+ id3).classList.add('is-active');
        document.querySelector('#list_853').classList.add('is-active');
    })
})
links_vendee1.forEach(function(link){
    link.addEventListener('mouseenter', function(e){
        var id1 = document.getElementById("map_8531").id.replace("map_", '');
        var id2 = document.getElementById("map_8532").id.replace("map_", '');
        var id3 = document.getElementById("map_8533").id.replace("map_", '');
        document.querySelector('#map_'+ id1).classList.add('is-active');
        document.querySelector('#map_'+ id2).classList.add('is-active');
        document.querySelector('#map_'+ id3).classList.add('is-active');
        document.querySelector('#list_853').classList.add('is-active');
        paths_vendee.forEach(function(pathspe){
            pathspe.classList.remove('is-active');
        })
        links_vendee.forEach(function(linkspe){
            linkspe.classList.remove('is-active');
        })
    })
})


map_la.addEventListener('mouseover', function(){
    activeArea();
})
region.addEventListener('mouseover', function(){
    activeArea();
})
map_mayenne.addEventListener('mouseover', function(){
    activeArea();
})
map_sarthe.addEventListener('mouseover', function(){
    activeArea();
})
map_mel.addEventListener('mouseover', function(){
    activeArea();
})
map_vendee.addEventListener('mouseover', function(){
    activeArea();
})

/*Generation des candidats*/
var dep = [53,72,44,49,85];
var circ= ["C1", "C2","C3","C4","C5","C6","C7","C8","C9","C10"]
var id_cand=1;
for(var i=1; i<211; i++){
    if(i<22){
        if(i<8){
            var elem = document.querySelector('#sect_cand_'+i);
            var newElem = document.createElement('a');
            newElem.innerHTML ="<p id='cand_"+dep[0]+'_'+circ[0]+'_'+id_cand+"' class= 'rond rond4 cand'>Cand" +i+"</p>";
            elem.class="lien_cand";
            elem.href="#c_region"
            elem.appendChild(newElem);
        }
        if(7<i && i<15){
            var elem = document.querySelector('#sect_cand_'+i);
            var newElem = document.createElement('a');
            newElem.innerHTML ="<p id='cand_"+dep[0]+'_'+circ[1]+'_'+id_cand+"' class= 'rond rond4 cand'>Cand" +i+"</p>";
            elem.class="lien_cand";
            elem.href="#c_region"
            elem.appendChild(newElem);
        }
        if(14<i && i<22){
            var elem = document.querySelector('#sect_cand_'+i);
            var newElem = document.createElement('a');
            newElem.innerHTML ="<p id='cand_"+dep[0]+'_'+circ[2]+'_'+id_cand+"' class= 'rond rond4 cand'>Cand" +i+"</p>";
            elem.class="lien_cand";
            elem.href="#c_region"
            elem.appendChild(newElem);
        }
    }
    if(21<i && i<56){
        if(i<29){
            var elem = document.querySelector('#sect_cand_'+i);
            var newElem = document.createElement('a');
            newElem.innerHTML ="<p id='cand_"+dep[1]+'_'+circ[0]+'_'+id_cand+"' class= 'rond rond4 cand'>Cand" +i+"</p>";
            elem.class="lien_cand";
            elem.href="#c_region"
            elem.appendChild(newElem);
        }
        if(28<i && i<36){
            var elem = document.querySelector('#sect_cand_'+i);
            var newElem = document.createElement('a');
            newElem.innerHTML ="<p id='cand_"+dep[1]+'_'+circ[1]+'_'+id_cand+"' class= 'rond rond4 cand'>Cand" +i+"</p>";
            elem.class="lien_cand";
            elem.href="#c_region"
            elem.appendChild(newElem);
        }
        if(35<i && i<43){
            var elem = document.querySelector('#sect_cand_'+i);
            var newElem = document.createElement('a');
            newElem.innerHTML ="<p id='cand_"+dep[1]+'_'+circ[2]+'_'+id_cand+"' class= 'rond rond4 cand'>Cand" +i+"</p>";
            elem.class="lien_cand";
            elem.href="#c_region"
            elem.appendChild(newElem);
        }
        if(42<i && i<49){
            var elem = document.querySelector('#sect_cand_'+i);
            var newElem = document.createElement('a');
            newElem.innerHTML ="<p id='cand_"+dep[1]+'_'+circ[3]+'_'+id_cand+"' class= 'rond rond4 cand'>Cand" +i+"</p>";
            elem.class="lien_cand";
            elem.href="#c_region"
            elem.appendChild(newElem);
        }
        if(48<i && i<56){
            var elem = document.querySelector('#sect_cand_'+i);
            var newElem = document.createElement('a');
            newElem.innerHTML ="<p id='cand_"+dep[1]+'_'+circ[4]+'_'+id_cand+"' class= 'rond rond4 cand'>Cand" +i+"</p>";
            elem.class="lien_cand";
            elem.href="#c_region"
            elem.appendChild(newElem);
        }
    }
    if(55<i && i<126){
        if(i<63){
            var elem = document.querySelector('#sect_cand_'+i);
            var newElem = document.createElement('a');
            newElem.innerHTML ="<p id='cand_"+dep[2]+'_'+circ[0]+'_'+id_cand+"' class= 'rond rond4 cand'>Cand" +i+"</p>";
            elem.class="lien_cand";
            elem.href="#c_region"
            elem.appendChild(newElem);
        }
        if(62<i && i<70){
            var elem = document.querySelector('#sect_cand_'+i);
            var newElem = document.createElement('a');
            newElem.innerHTML ="<p id='cand_"+dep[2]+'_'+circ[1]+'_'+id_cand+"' class= 'rond rond4 cand'>Cand" +i+"</p>";
            elem.class="lien_cand";
            elem.href="#c_region"
            elem.appendChild(newElem);
        }
        if(69<i && i<77){
            var elem = document.querySelector('#sect_cand_'+i);
            var newElem = document.createElement('a');
            newElem.innerHTML ="<p id='cand_"+dep[2]+'_'+circ[2]+'_'+id_cand+"' class= 'rond rond4 cand'>Cand" +i+"</p>";
            elem.class="lien_cand";
            elem.href="#c_region"
            elem.appendChild(newElem);
        }
        if(76<i && i<84){
            var elem = document.querySelector('#sect_cand_'+i);
            var newElem = document.createElement('a');
            newElem.innerHTML ="<p id='cand_"+dep[2]+'_'+circ[3]+'_'+id_cand+"' class= 'rond rond4 cand'>Cand" +i+"</p>";
            elem.class="lien_cand";
            elem.href="#c_region"
            elem.appendChild(newElem);
        }
        if(83<i && i<91){
            var elem = document.querySelector('#sect_cand_'+i);
            var newElem = document.createElement('a');
            newElem.innerHTML ="<p id='cand_"+dep[2]+'_'+circ[4]+'_'+id_cand+"' class= 'rond rond4 cand'>Cand" +i+"</p>";
            elem.class="lien_cand";
            elem.href="#c_region"
            elem.appendChild(newElem);
        }
        if(90<i && i<98){
            var elem = document.querySelector('#sect_cand_'+i);
            var newElem = document.createElement('a');
            newElem.innerHTML ="<p id='cand_"+dep[2]+'_'+circ[5]+'_'+id_cand+"' class= 'rond rond4 cand'>Cand" +i+"</p>";
            elem.class="lien_cand";
            elem.href="#c_region"
            elem.appendChild(newElem);
        }
        if(97<i && i<105){
            var elem = document.querySelector('#sect_cand_'+i);
            var newElem = document.createElement('a');
            newElem.innerHTML ="<p id='cand_"+dep[2]+'_'+circ[6]+'_'+id_cand+"' class= 'rond rond4 cand'>Cand" +i+"</p>";
            elem.class="lien_cand";
            elem.href="#c_region"
            elem.appendChild(newElem);
        }
        if(104<i && i<112){
            var elem = document.querySelector('#sect_cand_'+i);
            var newElem = document.createElement('a');
            newElem.innerHTML ="<p id='cand_"+dep[2]+'_'+circ[7]+'_'+id_cand+"' class= 'rond rond4 cand'>Cand" +i+"</p>";
            elem.class="lien_cand";
            elem.href="#c_region"
            elem.appendChild(newElem);
        }
        if(111<i && i<119){
            var elem = document.querySelector('#sect_cand_'+i);
            var newElem = document.createElement('a');
            newElem.innerHTML ="<p id='cand_"+dep[2]+'_'+circ[8]+'_'+id_cand+"' class= 'rond rond4 cand'>Cand" +i+"</p>";
            elem.class="lien_cand";
            elem.href="#c_region"
            elem.appendChild(newElem);
        }
        if(118<i && i<126){
            var elem = document.querySelector('#sect_cand_'+i);
            var newElem = document.createElement('a');
            newElem.innerHTML ="<p id='cand_"+dep[2]+'_'+circ[9]+'_'+id_cand+"' class= 'rond rond4 cand'>Cand" +i+"</p>";
            elem.class="lien_cand";
            elem.href="#c_region"
            elem.appendChild(newElem);
        }
    }
    if(125<i && i<175){
        if(i<133){
            var elem = document.querySelector('#sect_cand_'+i);
            var newElem = document.createElement('a');
            newElem.innerHTML ="<p id='cand_"+dep[3]+'_'+circ[0]+'_'+id_cand+"' class= 'rond rond4 cand'>Cand" +i+"</p>";
            elem.class="lien_cand";
            elem.href="#c_region"
            elem.appendChild(newElem);
        }
        if(132<i && i<140){
            var elem = document.querySelector('#sect_cand_'+i);
            var newElem = document.createElement('a');
            newElem.innerHTML ="<p id='cand_"+dep[3]+'_'+circ[1]+'_'+id_cand+"' class= 'rond rond4 cand'>Cand" +i+"</p>";
            elem.class="lien_cand";
            elem.href="#c_region"
            elem.appendChild(newElem);
        }
        if(139<i && i<147){
            var elem = document.querySelector('#sect_cand_'+i);
            var newElem = document.createElement('a');
            newElem.innerHTML ="<p id='cand_"+dep[3]+'_'+circ[2]+'_'+id_cand+"' class= 'rond rond4 cand'>Cand" +i+"</p>";
            elem.class="lien_cand";
            elem.href="#c_region"
            elem.appendChild(newElem);
        }
        if(146<i && i<154){
            var elem = document.querySelector('#sect_cand_'+i);
            var newElem = document.createElement('a');
            newElem.innerHTML ="<p id='cand_"+dep[3]+'_'+circ[3]+'_'+id_cand+"' class= 'rond rond4 cand'>Cand" +i+"</p>";
            elem.class="lien_cand";
            elem.href="#c_region"
            elem.appendChild(newElem);
        }
        if(153<i && i<161){
            var elem = document.querySelector('#sect_cand_'+i);
            var newElem = document.createElement('a');
            newElem.innerHTML ="<p id='cand_"+dep[3]+'_'+circ[4]+'_'+id_cand+"' class= 'rond rond4 cand'>Cand" +i+"</p>";
            elem.class="lien_cand";
            elem.href="#c_region"
            elem.appendChild(newElem);
        }
        if(160<i && i<168){
            var elem = document.querySelector('#sect_cand_'+i);
            var newElem = document.createElement('a');
            newElem.innerHTML ="<p id='cand_"+dep[3]+'_'+circ[5]+'_'+id_cand+"' class= 'rond rond4 cand'>Cand" +i+"</p>";
            elem.class="lien_cand";
            elem.href="#c_region"
            elem.appendChild(newElem);
        }
        if(167<i && i<175){
            var elem = document.querySelector('#sect_cand_'+i);
            var newElem = document.createElement('a');
            newElem.innerHTML ="<p id='cand_"+dep[3]+'_'+circ[6]+'_'+id_cand+"' class= 'rond rond4 cand'>Cand" +i+"</p>";
            elem.class="lien_cand";
            elem.href="#c_region"
            elem.appendChild(newElem);
        }
    }
    if(174<i && i<211){
        if(i<182){
            var elem = document.querySelector('#sect_cand_'+i);
            var newElem = document.createElement('a');
            newElem.innerHTML ="<p id='cand_"+dep[4]+'_'+circ[0]+'_'+id_cand+"' class= 'rond rond4 cand'>Cand" +i+"</p>";
            elem.class="lien_cand";
            elem.href="#c_region"
            elem.appendChild(newElem);
        }
        if(181<i && i<190){
            var elem = document.querySelector('#sect_cand_'+i);
            var newElem = document.createElement('a');
            newElem.innerHTML ="<p id='cand_"+dep[4]+'_'+circ[1]+'_'+id_cand+"' class= 'rond rond4 cand'>Cand" +i+"</p>";
            elem.class="lien_cand";
            elem.href="#c_region"
            elem.appendChild(newElem);
        }
        if(189<i && i<197){
            var elem = document.querySelector('#sect_cand_'+i);
            var newElem = document.createElement('a');
            newElem.innerHTML ="<p id='cand_"+dep[4]+'_'+circ[2]+'_'+id_cand+"' class= 'rond rond4 cand'>Cand" +i+"</p>";
            elem.class="lien_cand";
            elem.href="#c_region"
            elem.appendChild(newElem);
        }
        if(196<i && i<204){
            var elem = document.querySelector('#sect_cand_'+i);
            var newElem = document.createElement('a');
            newElem.innerHTML ="<p id='cand_"+dep[4]+'_'+circ[3]+'_'+id_cand+"' class= 'rond rond4 cand'>Cand" +i+"</p>";
            elem.class="lien_cand";
            elem.href="#c_region"
            elem.appendChild(newElem);
        }
        if(203<i && i<211){
            var elem = document.querySelector('#sect_cand_'+i);
            var newElem = document.createElement('a');
            newElem.innerHTML ="<p id='cand_"+dep[4]+'_'+circ[4]+'_'+id_cand+"' class= 'rond rond4 cand'>Cand" +i+"</p>";
            elem.class="lien_cand";
            elem.href="#c_region"
            elem.appendChild(newElem);
        }
    }
    id_cand++;
}   

