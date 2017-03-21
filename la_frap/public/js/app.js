'use strict';

var colPartis = []

$.getJSON("data/couleursPartis.json", function(data){
    $.each(data, function(key, value){
        colPartis[key]=value;
    })
})

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

var list_ville = document.querySelectorAll(".liste_ville");

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
    list_ville.forEach(function(liste){
        liste.style.display="none";
    })
    if(id !== undefined){
        document.querySelector('#map_'+ id).classList.add('is-active');
        document.querySelector('#list_'+ id).classList.add('is-active');
        document.querySelector('#lville_'+id).style.display="block";
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
        document.querySelector('#lville_853').style.display="block";
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
        document.querySelector('#lville_853').style.display="block";
        paths_vendee.forEach(function(pathspe){
            pathspe.classList.remove('is-active');
            document.querySelector('#lville_851').style.display="none";
            document.querySelector('#lville_852').style.display="none";
            document.querySelector('#lville_854').style.display="none";
            document.querySelector('#lville_855').style.display="none";
        })
        links_vendee.forEach(function(linkspe){
            linkspe.classList.remove('is-active');
            document.querySelector('#lville_851').style.display="none";
            document.querySelector('#lville_852').style.display="none";
            document.querySelector('#lville_854').style.display="none";
            document.querySelector('#lville_855').style.display="none";
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


/*Papaparse*/
function doStuff(table){
    //Data is usable here
    var dep = [53,72,44,49,85];
    var circ= ["C1", "C2","C3","C4","C5","C6","C7","C8","C9","C10"];
    var annee =["1988", "1993", "1997", "2002", "2007", "2012", "2017"];
    //console.log(table.data);
    for(var i=1; i<211; i++){
        if (i%7 === 0){
            var curseur_annee = 6
        }else{
            var curseur_annee = i%7-1
        }
        if(i<22){
            if(i<8){
                var elem = document.querySelector('#sect_cand_'+i);
                elem.setAttribute("style","display:  inline-block;position: absolute;top: 30%;height: 17%;width: 14.3%;")
                table.data.forEach(function(item){
                    var cirdep = circ[0]+"_"+dep[0];
                    if(cirdep === item[annee[curseur_annee]]){
                        var newElemP = document.createElement('p');
                        newElemP.id="cand_"+item["id"];
                        newElemP.innerText=item["Nom"]+" "+item["Prenom"];
                        newElemP.className='cand';
                        var newElemR = document.createElement('section');
                        newElemR.className="rond";
                        var etiq = item["Etiquette"];
                        var color = colPartis[etiq];
                        newElemR.style.backgroundColor= color;
                        elem.appendChild(newElemR);
                        elem.appendChild(newElemP);
                    }  
                })
            }
            if(7<i && i<15){
                var elem = document.querySelector('#sect_cand_'+i);
                elem.setAttribute("style","position:  absolute;top: 30%;height: 17%;width: 14.3%;")
                table.data.forEach(function(item){
                    var cirdep = circ[1]+"_"+dep[0];
                    if(cirdep === item[annee[curseur_annee]]){
                        var newElemP = document.createElement('p');
                        newElemP.id="cand_"+item["id"];
                        newElemP.innerText=item["Nom"]+" "+item["Prenom"];
                        newElemP.className='cand';
                        var newElemR = document.createElement('section');
                        newElemR.className="rond";
                        var etiq = item["Etiquette"];
                        var color = colPartis[etiq];
                        newElemR.style.backgroundColor= color;
                        elem.appendChild(newElemR);
                        elem.appendChild(newElemP);
                    }  
                })
            }
            if(14<i && i<22){
                var elem = document.querySelector('#sect_cand_'+i);
                elem.setAttribute("style","position:  absolute;top: 30%;height: 17%;width: 14.3%;")
                table.data.forEach(function(item){
                    var cirdep = circ[2]+"_"+dep[0];
                    if(cirdep === item[annee[curseur_annee]]){
                        var newElemP = document.createElement('p');
                        newElemP.id="cand_"+item["id"];
                        newElemP.innerText=item["Nom"]+" "+item["Prenom"];
                        newElemP.className='cand';
                        var newElemR = document.createElement('section');
                        newElemR.className="rond";
                        var etiq = item["Etiquette"];
                        var color = colPartis[etiq];
                        newElemR.style.backgroundColor= color;
                        elem.appendChild(newElemR);
                        elem.appendChild(newElemP);
                    }  
                })
            }
        }
        if(21<i && i<56){
            if(i<29){
                var elem = document.querySelector('#sect_cand_'+i);
                elem.setAttribute("style","position:  absolute;top: 30%;height: 17%;width: 14.3%;")
                table.data.forEach(function(item){
                    var cirdep = circ[0]+"_"+dep[1];
                    if(cirdep === item[annee[curseur_annee]]){
                        var newElemP = document.createElement('p');
                        newElemP.id="cand_"+item["id"];
                        newElemP.innerText=item["Nom"]+" "+item["Prenom"];
                        newElemP.className='cand';
                        var newElemR = document.createElement('section');
                        newElemR.className="rond";
                        var etiq = item["Etiquette"];
                        var color = colPartis[etiq];
                        newElemR.style.backgroundColor= color;
                        elem.appendChild(newElemR);
                        elem.appendChild(newElemP);
                    }  
                })
            }
            if(28<i && i<36){
                var elem = document.querySelector('#sect_cand_'+i);
                elem.setAttribute("style","position:  absolute;top: 30%;height: 17%;width: 14.3%;")
                table.data.forEach(function(item){
                    var cirdep = circ[1]+"_"+dep[1];
                    if(cirdep === item[annee[curseur_annee]]){
                        var newElemP = document.createElement('p');
                        newElemP.id="cand_"+item["id"];
                        newElemP.innerText=item["Nom"]+" "+item["Prenom"];
                        newElemP.className='cand';
                        var newElemR = document.createElement('section');
                        newElemR.className="rond";
                        var etiq = item["Etiquette"];
                        var color = colPartis[etiq];
                        newElemR.style.backgroundColor= color;
                        elem.appendChild(newElemR);
                        elem.appendChild(newElemP);
                    }  
                })
            }
            if(35<i && i<43){
                var elem = document.querySelector('#sect_cand_'+i);
                elem.setAttribute("style","position:  absolute;top: 30%;height: 17%;width: 14.3%;")
                table.data.forEach(function(item){
                    var cirdep = circ[2]+"_"+dep[1];
                    if(cirdep === item[annee[curseur_annee]]){
                        var newElemP = document.createElement('p');
                        newElemP.id="cand_"+item["id"];
                        newElemP.innerText=item["Nom"]+" "+item["Prenom"];
                        newElemP.className='cand';
                        var newElemR = document.createElement('section');
                        newElemR.className="rond";
                        var etiq = item["Etiquette"];
                        var color = colPartis[etiq];
                        newElemR.style.backgroundColor= color;
                        elem.appendChild(newElemR);
                        elem.appendChild(newElemP);
                    }  
                })
            }
            if(42<i && i<50){
                var elem = document.querySelector('#sect_cand_'+i);
                elem.setAttribute("style","display:  inline-block;position: absolute;top: 30%;height: 17%;width: 14.3%;")
                table.data.forEach(function(item){
                    var cirdep = circ[3]+"_"+dep[1];
                    if(cirdep === item[annee[curseur_annee]]){
                        var newElemP = document.createElement('p');
                        newElemP.id="cand_"+item["id"];
                        newElemP.innerText=item["Nom"]+" "+item["Prenom"];
                        newElemP.className='cand';
                        var newElemR = document.createElement('section');
                        newElemR.className="rond";
                        var etiq = item["Etiquette"];
                        var color = colPartis[etiq];
                        newElemR.style.backgroundColor= color;
                        elem.appendChild(newElemR);
                        elem.appendChild(newElemP);
                    }  
                })
            }
            if(49<i && i<57){
                var elem = document.querySelector('#sect_cand_'+i);
                elem.setAttribute("style","display:  inline-block;position: absolute;top: 30%;height: 17%;width: 14.3%;")
                table.data.forEach(function(item){
                    var cirdep = circ[4]+"_"+dep[1];
                    if(cirdep === item[annee[curseur_annee]]){
                        var newElemP = document.createElement('p');
                        newElemP.id="cand_"+item["id"];
                        newElemP.innerText=item["Nom"]+" "+item["Prenom"];
                        newElemP.className='cand';
                        var newElemR = document.createElement('section');
                        newElemR.className="rond";
                        var etiq = item["Etiquette"];
                        var color = colPartis[etiq];
                        newElemR.style.backgroundColor= color;
                        elem.appendChild(newElemR);
                        elem.appendChild(newElemP);
                    }  
                })
            }
        }
        if(56<i && i<127){
            if(i<64){
                var elem = document.querySelector('#sect_cand_'+i);
                elem.setAttribute("style","display:  inline-block;position: absolute;top: 30%;height: 17%;width: 14.3%;")
                table.data.forEach(function(item){
                    var cirdep = circ[0]+"_"+dep[2];
                    if(cirdep === item[annee[curseur_annee]]){
                        var newElemP = document.createElement('p');
                        newElemP.id="cand_"+item["id"];
                        newElemP.innerText=item["Nom"]+" "+item["Prenom"];
                        newElemP.className='cand';
                        var newElemR = document.createElement('section');
                        newElemR.className="rond";
                        var etiq = item["Etiquette"];
                        var color = colPartis[etiq];
                        newElemR.style.backgroundColor= color;
                        elem.appendChild(newElemR);
                        elem.appendChild(newElemP);
                    }  
                })
            }
            if(63<i && i<71){
                var elem = document.querySelector('#sect_cand_'+i);
                elem.setAttribute("style","display:  inline-block;position: absolute;top: 30%;height: 17%;width: 14.3%;")
                table.data.forEach(function(item){
                    var cirdep = circ[1]+"_"+dep[2];
                    if(cirdep === item[annee[curseur_annee]]){
                        var newElemP = document.createElement('p');
                        newElemP.id="cand_"+item["id"];
                        newElemP.innerText=item["Nom"]+" "+item["Prenom"];
                        newElemP.className='cand';
                        var newElemR = document.createElement('section');
                        newElemR.className="rond";
                        var etiq = item["Etiquette"];
                        var color = colPartis[etiq];
                        newElemR.style.backgroundColor= color;
                        elem.appendChild(newElemR);
                        elem.appendChild(newElemP);
                    }  
                })
            }
            if(70<i && i<78){
                var elem = document.querySelector('#sect_cand_'+i);
                elem.setAttribute("style","display:  inline-block;position: absolute;top: 30%;height: 17%;width: 14.3%;")
                table.data.forEach(function(item){
                    var cirdep = circ[2]+"_"+dep[2];
                    if(cirdep === item[annee[curseur_annee]]){
                        var newElemP = document.createElement('p');
                        newElemP.id="cand_"+item["id"];
                        newElemP.innerText=item["Nom"]+" "+item["Prenom"];
                        newElemP.className='cand';
                        var newElemR = document.createElement('section');
                        newElemR.className="rond";
                        var etiq = item["Etiquette"];
                        var color = colPartis[etiq];
                        newElemR.style.backgroundColor= color;
                        elem.appendChild(newElemR);
                        elem.appendChild(newElemP);
                    }  
                })
            }
            if(77<i && i<85){
                var elem = document.querySelector('#sect_cand_'+i);
                elem.setAttribute("style","display:  inline-block;position: absolute;top: 30%;height: 17%;width: 14.3%;")
                table.data.forEach(function(item){
                    var cirdep = circ[3]+"_"+dep[2];
                    if(cirdep === item[annee[curseur_annee]]){
                        var newElemP = document.createElement('p');
                        newElemP.id="cand_"+item["id"];
                        newElemP.innerText=item["Nom"]+" "+item["Prenom"];
                        newElemP.className='cand';
                        var newElemR = document.createElement('section');
                        newElemR.className="rond";
                        var etiq = item["Etiquette"];
                        var color = colPartis[etiq];
                        newElemR.style.backgroundColor= color;
                        elem.appendChild(newElemR);
                        elem.appendChild(newElemP);
                    }  
                })
            }
            if(84<i && i<92){
                var elem = document.querySelector('#sect_cand_'+i);
                elem.setAttribute("style","display:  inline-block;position: absolute;top: 30%;height: 17%;width: 14.3%;")
                table.data.forEach(function(item){
                    var cirdep = circ[4]+"_"+dep[2];
                    if(cirdep === item[annee[curseur_annee]]){
                        var newElemP = document.createElement('p');
                        newElemP.id="cand_"+item["id"];
                        newElemP.innerText=item["Nom"]+" "+item["Prenom"];
                        newElemP.className='cand';
                        var newElemR = document.createElement('section');
                        newElemR.className="rond";
                        var etiq = item["Etiquette"];
                        var color = colPartis[etiq];
                        newElemR.style.backgroundColor= color;
                        elem.appendChild(newElemR);
                        elem.appendChild(newElemP);
                    }  
                })
            }
            if(91<i && i<99){
                var elem = document.querySelector('#sect_cand_'+i);
                elem.setAttribute("style","display:  inline-block;position: absolute;top: 30%;height: 17%;width: 14.3%;")
                table.data.forEach(function(item){
                    var cirdep = circ[5]+"_"+dep[2];
                    if(cirdep === item[annee[curseur_annee]]){
                        var newElemP = document.createElement('p');
                        newElemP.id="cand_"+item["id"];
                        newElemP.innerText=item["Nom"]+" "+item["Prenom"];
                        newElemP.className='cand';
                        var newElemR = document.createElement('section');
                        newElemR.className="rond";
                        var etiq = item["Etiquette"];
                        var color = colPartis[etiq];
                        newElemR.style.backgroundColor= color;
                        elem.appendChild(newElemR);
                        elem.appendChild(newElemP);
                    }  
                })
            }
            if(98<i && i<106){
                var elem = document.querySelector('#sect_cand_'+i);
                elem.setAttribute("style","display:  inline-block;position: absolute;top: 30%;height: 17%;width: 14.3%;")
                table.data.forEach(function(item){
                    var cirdep = circ[6]+"_"+dep[2];
                    if(cirdep === item[annee[curseur_annee]]){
                        var newElemP = document.createElement('p');
                        newElemP.id="cand_"+item["id"];
                        newElemP.innerText=item["Nom"]+" "+item["Prenom"];
                        newElemP.className='cand';
                        var newElemR = document.createElement('section');
                        newElemR.className="rond";
                        var etiq = item["Etiquette"];
                        var color = colPartis[etiq];
                        newElemR.style.backgroundColor= color;
                        elem.appendChild(newElemR);
                        elem.appendChild(newElemP);
                    }  
                })
            }
            if(105<i && i<113){
                var elem = document.querySelector('#sect_cand_'+i);
                elem.setAttribute("style","display:  inline-block;position: absolute;top: 30%;height: 17%;width: 14.3%;")
                table.data.forEach(function(item){
                    var cirdep = circ[7]+"_"+dep[2];
                    if(cirdep === item[annee[curseur_annee]]){
                        var newElemP = document.createElement('p');
                        newElemP.id="cand_"+item["id"];
                        newElemP.innerText=item["Nom"]+" "+item["Prenom"];
                        newElemP.className='cand';
                        var newElemR = document.createElement('section');
                        newElemR.className="rond";
                        var etiq = item["Etiquette"];
                        var color = colPartis[etiq];
                        newElemR.style.backgroundColor= color;
                        elem.appendChild(newElemR);
                        elem.appendChild(newElemP);
                    }  
                })
            }
            if(112<i && i<120){
                var elem = document.querySelector('#sect_cand_'+i);
                elem.setAttribute("style","display:  inline-block;position: absolute;top: 30%;height: 17%;width: 14.3%;")
                table.data.forEach(function(item){
                    var cirdep = circ[8]+"_"+dep[2];
                    if(cirdep === item[annee[curseur_annee]]){
                        var newElemP = document.createElement('p');
                        newElemP.id="cand_"+item["id"];
                        newElemP.innerText=item["Nom"]+" "+item["Prenom"];
                        newElemP.className='cand';
                        var newElemR = document.createElement('section');
                        newElemR.className="rond";
                        var etiq = item["Etiquette"];
                        var color = colPartis[etiq];
                        newElemR.style.backgroundColor= color;
                        elem.appendChild(newElemR);
                        elem.appendChild(newElemP);
                    }  
                })
            }
            if(119<i && i<127){
                var elem = document.querySelector('#sect_cand_'+i);
                elem.setAttribute("style","display:  inline-block;position: absolute;top: 30%;height: 17%;width: 14.3%;")
                table.data.forEach(function(item){
                    var cirdep = circ[9]+"_"+dep[2];
                    if(cirdep === item[annee[curseur_annee]]){
                        var newElemP = document.createElement('p');
                        newElemP.id="cand_"+item["id"];
                        newElemP.innerText=item["Nom"]+" "+item["Prenom"];
                        newElemP.className='cand';
                        var newElemR = document.createElement('section');
                        newElemR.className="rond";
                        var etiq = item["Etiquette"];
                        var color = colPartis[etiq];
                        newElemR.style.backgroundColor= color;
                        elem.appendChild(newElemR);
                        elem.appendChild(newElemP);
                    }  
                })
            }
        }
        if(126<i && i<176){
            if(i<134){
                var elem = document.querySelector('#sect_cand_'+i);
                elem.setAttribute("style","display:  inline-block;position: absolute;top: 30%;height: 17%;width: 14.3%;")
                table.data.forEach(function(item){
                    var cirdep = circ[0]+"_"+dep[2];
                    if(cirdep === item[annee[curseur_annee]]){
                        var newElemP = document.createElement('p');
                        newElemP.id="cand_"+item["id"];
                        newElemP.innerText=item["Nom"]+" "+item["Prenom"];
                        newElemP.className='cand';
                        var newElemR = document.createElement('section');
                        newElemR.className="rond";
                        var etiq = item["Etiquette"];
                        var color = colPartis[etiq];
                        newElemR.style.backgroundColor= color;
                        elem.appendChild(newElemR);
                        elem.appendChild(newElemP);
                    }  
                })
            }
            if(133<i && i<141){
                var elem = document.querySelector('#sect_cand_'+i);
                elem.setAttribute("style","display:  inline-block;position: absolute;top: 30%;height: 17%;width: 14.3%;")
                table.data.forEach(function(item){
                    var cirdep = circ[1]+"_"+dep[3];
                    if(cirdep === item[annee[curseur_annee]]){
                        var newElemP = document.createElement('p');
                        newElemP.id="cand_"+item["id"];
                        newElemP.innerText=item["Nom"]+" "+item["Prenom"];
                        newElemP.className='cand';
                        var newElemR = document.createElement('section');
                        newElemR.className="rond";
                        var etiq = item["Etiquette"];
                        var color = colPartis[etiq];
                        newElemR.style.backgroundColor= color;
                        elem.appendChild(newElemR);
                        elem.appendChild(newElemP);
                    }  
                })
            }
            if(140<i && i<148){
                var elem = document.querySelector('#sect_cand_'+i);
                elem.setAttribute("style","display:  inline-block;position: absolute;top: 30%;height: 17%;width: 14.3%;")
                table.data.forEach(function(item){
                    var cirdep = circ[2]+"_"+dep[3];
                    if(cirdep === item[annee[curseur_annee]]){
                        var newElemP = document.createElement('p');
                        newElemP.id="cand_"+item["id"];
                        newElemP.innerText=item["Nom"]+" "+item["Prenom"];
                        newElemP.className='cand';
                        var newElemR = document.createElement('section');
                        newElemR.className="rond";
                        var etiq = item["Etiquette"];
                        var color = colPartis[etiq];
                        newElemR.style.backgroundColor= color;
                        elem.appendChild(newElemR);
                        elem.appendChild(newElemP);
                    }  
                })
            }
            if(147<i && i<155){
                var elem = document.querySelector('#sect_cand_'+i);
                elem.setAttribute("style","display:  inline-block;position: absolute;top: 30%;height: 17%;width: 14.3%;")
                table.data.forEach(function(item){
                    var cirdep = circ[3]+"_"+dep[3];
                    if(cirdep === item[annee[curseur_annee]]){
                        var newElemP = document.createElement('p');
                        newElemP.id="cand_"+item["id"];
                        newElemP.innerText=item["Nom"]+" "+item["Prenom"];
                        newElemP.className='cand';
                        var newElemR = document.createElement('section');
                        newElemR.className="rond";
                        var etiq = item["Etiquette"];
                        var color = colPartis[etiq];
                        newElemR.style.backgroundColor= color;
                        elem.appendChild(newElemR);
                        elem.appendChild(newElemP);
                    }  
                })
            }
            if(154<i && i<162){
                var elem = document.querySelector('#sect_cand_'+i);
                elem.setAttribute("style","display:  inline-block;position: absolute;top: 30%;height: 17%;width: 14.3%;")
                table.data.forEach(function(item){
                    var cirdep = circ[4]+"_"+dep[3];
                    if(cirdep === item[annee[curseur_annee]]){
                        var newElemP = document.createElement('p');
                        newElemP.id="cand_"+item["id"];
                        newElemP.innerText=item["Nom"]+" "+item["Prenom"];
                        newElemP.className='cand';
                        var newElemR = document.createElement('section');
                        newElemR.className="rond";
                        var etiq = item["Etiquette"];
                        var color = colPartis[etiq];
                        newElemR.style.backgroundColor= color;
                        elem.appendChild(newElemR);
                        elem.appendChild(newElemP);
                    }  
                })
            }
            if(161<i && i<169){
                var elem = document.querySelector('#sect_cand_'+i);
                elem.setAttribute("style","display:  inline-block;position: absolute;top: 30%;height: 17%;width: 14.3%;")
                table.data.forEach(function(item){
                    var cirdep = circ[5]+"_"+dep[3];
                    if(cirdep === item[annee[curseur_annee]]){
                        var newElemP = document.createElement('p');
                        newElemP.id="cand_"+item["id"];
                        newElemP.innerText=item["Nom"]+" "+item["Prenom"];
                        newElemP.className='cand';
                        var newElemR = document.createElement('section');
                        newElemR.className="rond";
                        var etiq = item["Etiquette"];
                        var color = colPartis[etiq];
                        newElemR.style.backgroundColor= color;
                        elem.appendChild(newElemR);
                        elem.appendChild(newElemP);
                    }  
                })
            }
            if(168<i && i<176){
                var elem = document.querySelector('#sect_cand_'+i);
                elem.setAttribute("style","display:  inline-block;position: absolute;top: 30%;height: 17%;width: 14.3%;")
                table.data.forEach(function(item){
                    var cirdep = circ[6]+"_"+dep[3];
                    if(cirdep === item[annee[curseur_annee]]){
                        var newElemP = document.createElement('p');
                        newElemP.id="cand_"+item["id"];
                        newElemP.innerText=item["Nom"]+" "+item["Prenom"];
                        newElemP.className='cand';
                        var newElemR = document.createElement('section');
                        newElemR.className="rond";
                        var etiq = item["Etiquette"];
                        var color = colPartis[etiq];
                        newElemR.style.backgroundColor= color;
                        elem.appendChild(newElemR);
                        elem.appendChild(newElemP);
                    }  
                })
            }
        }
        if(175<i && i<211){
            if(i<183){
                var elem = document.querySelector('#sect_cand_'+i);
                elem.setAttribute("style","display:  inline-block;position: absolute;top: 30%;height: 17%;width: 14.3%;")
                table.data.forEach(function(item){
                    var cirdep = circ[0]+"_"+dep[4];
                    if(cirdep === item[annee[curseur_annee]]){
                        var newElemP = document.createElement('p');
                        newElemP.id="cand_"+item["id"];
                        newElemP.innerText=item["Nom"]+" "+item["Prenom"];
                        newElemP.className='cand';
                        var newElemR = document.createElement('section');
                        newElemR.className="rond";
                        var etiq = item["Etiquette"];
                        var color = colPartis[etiq];
                        newElemR.style.backgroundColor= color;
                        elem.appendChild(newElemR);
                        elem.appendChild(newElemP);
                    }  
                })
            }
            if(182<i && i<190){
                var elem = document.querySelector('#sect_cand_'+i);
                elem.setAttribute("style","display:  inline-block;position: absolute;top: 30%;height: 17%;width: 14.3%;")
                table.data.forEach(function(item){
                    var cirdep = circ[1]+"_"+dep[4];
                    if(cirdep === item[annee[curseur_annee]]){
                        var newElemP = document.createElement('p');
                        newElemP.id="cand_"+item["id"];
                        newElemP.innerText=item["Nom"]+" "+item["Prenom"];
                        newElemP.className='cand';
                        var newElemR = document.createElement('section');
                        newElemR.className="rond";
                        var etiq = item["Etiquette"];
                        var color = colPartis[etiq];
                        newElemR.style.backgroundColor= color;
                        elem.appendChild(newElemR);
                        elem.appendChild(newElemP);
                    }  
                })
            }
            if(189<i && i<197){
                var elem = document.querySelector('#sect_cand_'+i);
                elem.setAttribute("style","display:  inline-block;position: absolute;top: 30%;height: 17%;width: 14.3%;")
                table.data.forEach(function(item){
                    var cirdep = circ[2]+"_"+dep[4];
                    if(cirdep === item[annee[curseur_annee]]){
                        var newElemP = document.createElement('p');
                        newElemP.id="cand_"+item["id"];
                        newElemP.innerText=item["Nom"]+" "+item["Prenom"];
                        newElemP.className='cand';
                        var newElemR = document.createElement('section');
                        newElemR.className="rond";
                        var etiq = item["Etiquette"];
                        var color = colPartis[etiq];
                        newElemR.style.backgroundColor= color;
                        elem.appendChild(newElemR);
                        elem.appendChild(newElemP);
                    }  
                })
            }
            if(196<i && i<204){
                var elem = document.querySelector('#sect_cand_'+i);
                elem.setAttribute("style","display:  inline-block;position: absolute;top: 30%;height: 17%;width: 14.3%;")
                table.data.forEach(function(item){
                    var cirdep = circ[3]+"_"+dep[4];
                    if(cirdep === item[annee[curseur_annee]]){
                        var newElemP = document.createElement('p');
                        newElemP.id="cand_"+item["id"];
                        newElemP.innerText=item["Nom"]+" "+item["Prenom"];
                        newElemP.className='cand';
                        var newElemR = document.createElement('section');
                        newElemR.className="rond";
                        var etiq = item["Etiquette"];
                        var color = colPartis[etiq];
                        newElemR.style.backgroundColor= color;
                        elem.appendChild(newElemR);
                        elem.appendChild(newElemP);
                    }  
                })
            }
            if(203<i && i<211){
                var elem = document.querySelector('#sect_cand_'+i);
                elem.setAttribute("style","display:  inline-block;position: absolute;top: 30%;height: 17%;width: 14.3%;")
                table.data.forEach(function(item){
                    var cirdep = circ[4]+"_"+dep[4];
                    if(cirdep === item[annee[curseur_annee]]){
                        var newElemP = document.createElement('p');
                        newElemP.id="cand_"+item["id"];
                        newElemP.innerText=item["Nom"]+" "+item["Prenom"];
                        newElemP.className='cand';
                        var newElemR = document.createElement('section');
                        newElemR.className="rond";
                        var etiq = item["Etiquette"];
                        var color = colPartis[etiq];
                        newElemR.style.backgroundColor= color;
                        elem.appendChild(newElemR);
                        elem.appendChild(newElemP);
                    }  
                })
            }
        }
    }
    var totcand = document.querySelectorAll(".cand");

    totcand.forEach(function(cand){
        cand.addEventListener('click',function(e){
            var id = this.id.replace("cand_",""); 
            var parent = this.parentNode;
            var idparent = parent.id.replace("sect_cand_","");
            var sectvisi = document.querySelector("#sect_visi_"+idparent);
            var sectinvi = document.querySelector("#sect_invi_"+idparent);
            sectinvi.style.display = "block";
            sectvisi.style.display="none";
            var donneeCand = table.data[id];
            var newimgc = document.createElement('img');
            newimgc.id="imgC";
            newimgc.style.borderColor = colPartis[donneeCand["Etiquette"]];
            if(donneeCand["Img_cand"]!=""){
                newimgc.src="img/photos-candidats/"+donneeCand["Img_cand"];
            }else{
                var sexe = donneeCand["Sexe"];
                newimgc.src="img/Avatar"+sexe+".png";

            }
            sectinvi.appendChild(newimgc);
            var newprenomc = document.createElement('p');
            newprenomc.id="prenomC";
            newprenomc.innerText=donneeCand["Prenom"];
            sectinvi.appendChild(newprenomc);
            var newnomc = document.createElement('p');
            newnomc.id="NomC";
            newnomc.innerText=donneeCand["Nom"];
            sectinvi.appendChild(newnomc);
            var newetiquettec = document.createElement('p');
            newetiquettec.id="EtiquetteC";
            newetiquettec.innerText=donneeCand["Etiquette"];
            newetiquettec.style.color=colPartis[donneeCand["Etiquette"]]
            sectinvi.appendChild(newetiquettec);
            var newagec = document.createElement('p');
            newagec.id="AgeC";
            newagec.innerText=donneeCand["Age"];
            sectinvi.appendChild(newagec);
            
            if(donneeCand["Site_perso"] != ""){
                var newurlc = document.createElement('a');
                newurlc.id="urlC";
                newurlc.href=donneeCand["Site_perso"];
                newurlc.innerText=donneeCand["Site_perso"];
                sectinvi.appendChild(newurlc);
            }
            if(donneeCand["Twitter"] != ""){
                var newtwitterc = document.createElement('a');
                newtwitterc.id="twitterC";
                newtwitterc.href=donneeCand["Twitter"];
                newtwitterc.innerHTML="<img src='img/twitter.png'>";
                sectinvi.appendChild(newtwitterc);
            }
            if(donneeCand["Facebook"] != ""){
                var newfacebookc = document.createElement('a');
                newfacebookc.id="facebookC";
                newfacebookc.href=donneeCand["Facebook"];
                newfacebookc.innerHTML="<img src='img/facebook.png'>";
                sectinvi.appendChild(newfacebookc);
            }
            var newpresc = document.createElement('p');
            newpresc.id="presentationC";
            newpresc.innerText=donneeCand["Phrase_pres_cand"];
            sectinvi.appendChild(newpresc);
            var newpresepartc = document.createElement('p');
            newpresepartc.id="presentationParti";
            newpresepartc.innerText=donneeCand["Phrase_pres_parti"];
            sectinvi.appendChild(newpresepartc);
            var newnbpresc = document.createElement('p');
            newnbpresc.id="nbrPrestCr";
            var calcpres = donneeCand["Nombre_presentation_C1"]+donneeCand["Nombre_presentation_C2"]+donneeCand["Nombre_presentation_C3"]+donneeCand["Nombre_presentation_C4"]+donneeCand["Nombre_presentation_C5"]+donneeCand["Nombre_presentation_C6"]+donneeCand["Nombre_presentation_C7"]+donneeCand["Nombre_presentation_C8"]+donneeCand["Nombre_presentation_C9"]+donneeCand["Nombre_presentation_C10"];
            newnbpresc.innerHTML=calcpres +"</br>Candidatures présentées";
            sectinvi.appendChild(newnbpresc);
            var newnbelec = document.createElement('p');
            newnbelec.id="nrbEluC";
            var calcElu = donneeCand["Nombre_Elu_C1"]+donneeCand["Nombre_Elu_C2"]+donneeCand["Nombre_Elu_C3"]+donneeCand["Nombre_Elu_C4"]+donneeCand["Nombre_Elu_C5"]+donneeCand["Nombre_Elu_C6"]+donneeCand["Nombre_Elu_C7"]+donneeCand["Nombre_Elu_C8"]+donneeCand["Nombre_Elu_C9"]+donneeCand["Nombre_Elu_C10"]
            newnbelec.innerHTML=calcElu + "</br> Mandats effecués";
            sectinvi.appendChild(newnbelec);
        })
    })
    var fermes = document.querySelectorAll(".close");
    fermes.forEach(function(ferme){
        ferme.addEventListener('click', function(e){
            var parentclose = this.parentNode;
            var idinvi = parentclose.id.replace("sect_invi_","");
            var sectvisi = document.querySelector("#sect_visi_"+idinvi);
            sectvisi.style.display="block";
            parentclose.style.display="none";
            parentclose.removeChild(document.querySelector("#imgC"));
            parentclose.removeChild(document.querySelector("#prenomC"));
            parentclose.removeChild(document.querySelector("#NomC"));
            parentclose.removeChild(document.querySelector("#AgeC"));
            parentclose.removeChild(document.querySelector("#EtiquetteC"));
            parentclose.removeChild(document.querySelector("#nbrPrestCr"));
            parentclose.removeChild(document.querySelector("#nrbEluC"));
            if(document.querySelector("#urlC")!=null){
                parentclose.removeChild(document.querySelector("#urlC"));
            }
            if(document.querySelector("#twitterC")!=null){
                parentclose.removeChild(document.querySelector("#twitterC"));
            }
            if(document.querySelector("#facebookC")!=null){
                parentclose.removeChild(document.querySelector("#facebookC"));
            }
            parentclose.removeChild(document.querySelector("#presentationC"));
            parentclose.removeChild(document.querySelector("#presentationParti"));
        })
    })
    
}

function parseData(file, callBack) {
    Papa.parse(file, {
        delimiter: ",",
        header: true,
        dynamicTyping: true,
        download: true,
        encoding: "utf-8",
        complete: function(results) {
            doStuff(results);
        },
        error: function( error, file){
            console.log(error);
        }
    });
}

parseData("data/basefinale.csv", doStuff);
