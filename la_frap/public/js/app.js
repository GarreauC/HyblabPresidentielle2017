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
                    console.log(json.c1[annee].item);
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
var links_vendee1 = list_vendee.querySelectorAll('.list_node');

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
        var id = this.id.replace("map_", '');
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

/*
var slides = document.querySelectorAll(".slide");
console.log(slides);

slides.forEach(function(slides){
    var ronds = slides.querySelectorAll(".rond");
    var titre_slide = slides.querySelectorAll(".titre_slide");
    var annees = slides.querySelectorAll(".annee");
    var traits = slides.querySelectorAll(".trait");
    ronds.forEach(function(rond){
        rond.addEventListener('click', function(e){
            titre_slide.forEach(function(titre){
                var id = titre.getAttribute('id');
                afficher_cacher(id);
            })
            annees.forEach(function(annee){
                var id = annee.getAttribute('id');
                afficher_cacher(id);
            })
            traits.forEach(function(trait){
                var id = trait.getAttribute('id');
                afficher_cacher(id);
            })
            afficher_cacher(document.querySelector("#treemap").getAttribute('id'));

        })
    })
})

function afficher_cacher(id)
{
    if(document.getElementById(id).style.visibility=="hidden")
    {
        document.getElementById(id).style.visibility="visible";
    }
    else
    {
        document.getElementById(id).style.visibility="hidden";
    }
    return true;
}*/

