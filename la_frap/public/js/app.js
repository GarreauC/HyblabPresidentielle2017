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
    for(var i=1; i<211; i++){

        var datacol = [];
        var chartdatalabels = [];
        var chartdata = [];
        var colors = [];
        var nbelemt = 0;

        if (i%7 === 0){
            var curseur_annee = 6
        }else{
            var curseur_annee = i%7-1
        }
        if(i<22){
            if(i<8){



                var elem = document.querySelector('#sect_cand_'+i);
                elem.setAttribute("style","display: flex ; flex-direction: column; flex-wrap: wrap;position: absolute;top: 30%;height: 17%;width: 14.3%;align-items: center; justify-content: center;")
                table.data.forEach(function(item){
                    var cirdep = circ[0]+"_"+dep[0];
                    if(cirdep === item[annee[curseur_annee]]){


                        datacol[nbelemt] = [];
                        var res = annee[curseur_annee] + "_RES";
                        datacol[nbelemt][0]=item[res];
                        datacol[nbelemt][1]=item["Nom"]+" "+item["Prenom"];
                        datacol[nbelemt][2]=colPartis[item["Etiquette"]];
                        nbelemt+=1;


                        var newElemP = document.createElement('p');
                        newElemP.id="cand_"+item["id"];
                        newElemP.innerText=item["Nom"]+" "+item["Prenom"];
                        newElemP.innerText = newElemP.innerText.toLowerCase();
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


                datacol.sort(function(a,b) {
                        return b[0]-a[0]
                    });

                for (var ind=0; ind< nbelemt; ind++){

                    chartdata.push(datacol[ind][0])
                    chartdatalabels.push(datacol[ind][1])
                    colors.push(datacol[ind][2])
                    }

                var chart = {
                    type: "bar",
                    data :{
                        labels: chartdatalabels,
                        datasets : [{
                            label: 'Pourcentage',
                            data: chartdata,
                            backgroundColor: colors,
                            borderColor: colors,
                            borderWidth: 1
                            }]
                        },

                    options: {
                        scales: {
                                    xAxes: [{
                                        display: false,
                                        categoryPercentage: 0.95,
                                        barPercentage: 1.0
                                    }]
                                },
                        responsive:false,
                        maintainAspectRatio: false,
                        animation: false,

                        legend: {
                            display: false
                        },
                        hover: {
                            intersect: false,
                        }
                    }

                };

                
                
                var idChart = "Chart_"+dep[0]+"_"+circ[0][1]+"_"+annee[curseur_annee];
                
                var ctx = document.getElementById(idChart).getContext('2d');
                var myChart = new Chart(ctx, chart);
                myChart.resize()


            }
            if(7<i && i<15){
                var elem = document.querySelector('#sect_cand_'+i);
                elem.setAttribute("style","display: flex ; flex-direction: column; flex-wrap: wrap;position: absolute;top: 30%;height: 17%;width: 14.3%;align-items: center; justify-content: center;")
                table.data.forEach(function(item){
                    var cirdep = circ[1]+"_"+dep[0];
                    if(cirdep === item[annee[curseur_annee]]){


                        datacol[nbelemt] = [];
                        var res = annee[curseur_annee] + "_RES";
                        datacol[nbelemt][0]=item[res];
                        datacol[nbelemt][1]=item["Nom"]+" "+item["Prenom"];
                        datacol[nbelemt][2]=colPartis[item["Etiquette"]];
                        nbelemt+=1;


                        var newElemP = document.createElement('p');
                        newElemP.id="cand_"+item["id"];
                        newElemP.innerText=item["Nom"]+" "+item["Prenom"];
                        newElemP.innerText = newElemP.innerText.toLowerCase();
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

                datacol.sort(function(a,b) {
                        return b[0]-a[0]
                    });

                for (var ind=0; ind< nbelemt; ind++){

                    chartdata.push(datacol[ind][0])
                    chartdatalabels.push(datacol[ind][1])
                    colors.push(datacol[ind][2])
                    }

                var chart = {
                    type: "bar",
                    data :{
                        labels: chartdatalabels,
                        datasets : [{
                            label: 'Pourcentage',
                            data: chartdata,
                            backgroundColor: colors,
                            borderColor: colors,
                            borderWidth: 1
                            }]
                        },

                    options: {
                        scales: {
                                    xAxes: [{
                                        display: false,
                                        categoryPercentage: 0.95,
                                        barPercentage: 1.0
                                    }]
                                },
                        responsive:false,
                        maintainAspectRatio: false,
                        animation: false,

                        legend: {
                            display: false
                        },
                        hover: {
                            intersect: false,
                        }
                    }

                };

                
                
                var idChart = "Chart_"+dep[0]+"_"+circ[1][1]+"_"+annee[curseur_annee];
                
                var ctx = document.getElementById(idChart).getContext('2d');
                var myChart = new Chart(ctx, chart);
                myChart.resize()

            }
            if(14<i && i<22){
                var elem = document.querySelector('#sect_cand_'+i);
                elem.setAttribute("style","display: flex ; flex-direction: column; flex-wrap: wrap;position: absolute;top: 30%;height: 17%;width: 14.3%;align-items: center; justify-content: center;")
                table.data.forEach(function(item){
                    var cirdep = circ[2]+"_"+dep[0];
                    if(cirdep === item[annee[curseur_annee]]){


                        datacol[nbelemt] = [];
                        var res = annee[curseur_annee] + "_RES";
                        datacol[nbelemt][0]=item[res];
                        datacol[nbelemt][1]=item["Nom"]+" "+item["Prenom"];
                        datacol[nbelemt][2]=colPartis[item["Etiquette"]];
                        nbelemt+=1;


                        var newElemP = document.createElement('p');
                        newElemP.id="cand_"+item["id"];
                        newElemP.innerText=item["Nom"]+" "+item["Prenom"];
                        newElemP.innerText = newElemP.innerText.toLowerCase();
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

                datacol.sort(function(a,b) {
                        return b[0]-a[0]
                    });

                for (var ind=0; ind< nbelemt; ind++){

                    chartdata.push(datacol[ind][0])
                    chartdatalabels.push(datacol[ind][1])
                    colors.push(datacol[ind][2])
                    }

                var chart = {
                    type: "bar",
                    data :{
                        labels: chartdatalabels,
                        datasets : [{
                            label: 'Pourcentage',
                            data: chartdata,
                            backgroundColor: colors,
                            borderColor: colors,
                            borderWidth: 1
                            }]
                        },

                    options: {
                        scales: {
                                    xAxes: [{
                                        display: false,
                                        categoryPercentage: 0.95,
                                        barPercentage: 1.0
                                    }]
                                },
                        responsive:false,
                        maintainAspectRatio: false,
                        animation: false,

                        legend: {
                            display: false
                        },
                        hover: {
                            intersect: false,
                        }
                    }

                };

                
                
                var idChart = "Chart_"+dep[0]+"_"+circ[2][1]+"_"+annee[curseur_annee];
                
                var ctx = document.getElementById(idChart).getContext('2d');
                var myChart = new Chart(ctx, chart);
                myChart.resize()
            }
        }
        if(21<i && i<56){
            if(i<29){
                var elem = document.querySelector('#sect_cand_'+i);
                elem.setAttribute("style","display: flex ; flex-direction: column; flex-wrap: wrap;position: absolute;top: 30%;height: 17%;width: 14.3%;align-items: center; justify-content: center;")
                table.data.forEach(function(item){
                    var cirdep = circ[0]+"_"+dep[1];
                    if(cirdep === item[annee[curseur_annee]]){


                        datacol[nbelemt] = [];
                        var res = annee[curseur_annee] + "_RES";
                        datacol[nbelemt][0]=item[res];
                        datacol[nbelemt][1]=item["Nom"]+" "+item["Prenom"];
                        datacol[nbelemt][2]=colPartis[item["Etiquette"]];
                        nbelemt+=1;


                        var newElemP = document.createElement('p');
                        newElemP.id="cand_"+item["id"];
                        newElemP.innerText=item["Nom"]+" "+item["Prenom"];
                        newElemP.innerText = newElemP.innerText.toLowerCase();
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


                datacol.sort(function(a,b) {
                        return b[0]-a[0]
                    });

                for (var ind=0; ind< nbelemt; ind++){

                    chartdata.push(datacol[ind][0])
                    chartdatalabels.push(datacol[ind][1])
                    colors.push(datacol[ind][2])
                    }

                var chart = {
                    type: "bar",
                    data :{
                        labels: chartdatalabels,
                        datasets : [{
                            label: 'Pourcentage',
                            data: chartdata,
                            backgroundColor: colors,
                            borderColor: colors,
                            borderWidth: 1
                            }]
                        },

                    options: {
                        scales: {
                                    xAxes: [{
                                        display: false,
                                        categoryPercentage: 0.95,
                                        barPercentage: 1.0
                                    }]
                                },
                        responsive:false,
                        maintainAspectRatio: false,
                        animation: false,

                        legend: {
                            display: false
                        },
                        hover: {
                            intersect: false,
                        }
                    }

                };

                
                
                var idChart = "Chart_"+dep[1]+"_"+circ[0][1]+"_"+annee[curseur_annee];
                
                var ctx = document.getElementById(idChart).getContext('2d');
                var myChart = new Chart(ctx, chart);
                myChart.resize()

            }
            if(28<i && i<36){
                var elem = document.querySelector('#sect_cand_'+i);
                elem.setAttribute("style","display: flex ; flex-direction: column; flex-wrap: wrap;position: absolute;top: 30%;height: 17%;width: 14.3%;align-items: center; justify-content: center;")
                table.data.forEach(function(item){
                    var cirdep = circ[1]+"_"+dep[1];
                    if(cirdep === item[annee[curseur_annee]]){


                        datacol[nbelemt] = [];
                        var res = annee[curseur_annee] + "_RES";
                        datacol[nbelemt][0]=item[res];
                        datacol[nbelemt][1]=item["Nom"]+" "+item["Prenom"];
                        datacol[nbelemt][2]=colPartis[item["Etiquette"]];
                        nbelemt+=1;


                        var newElemP = document.createElement('p');
                        newElemP.id="cand_"+item["id"];
                        newElemP.innerText=item["Nom"]+" "+item["Prenom"];
                        newElemP.innerText = newElemP.innerText.toLowerCase();
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

                datacol.sort(function(a,b) {
                        return b[0]-a[0]
                    });

                for (var ind=0; ind< nbelemt; ind++){

                    chartdata.push(datacol[ind][0])
                    chartdatalabels.push(datacol[ind][1])
                    colors.push(datacol[ind][2])
                    }

                var chart = {
                    type: "bar",
                    data :{
                        labels: chartdatalabels,
                        datasets : [{
                            label: 'Pourcentage',
                            data: chartdata,
                            backgroundColor: colors,
                            borderColor: colors,
                            borderWidth: 1
                            }]
                        },

                    options: {
                        scales: {
                                    xAxes: [{
                                        display: false,
                                        categoryPercentage: 0.95,
                                        barPercentage: 1.0
                                    }]
                                },
                        responsive:false,
                        maintainAspectRatio: false,
                        animation: false,

                        legend: {
                            display: false
                        },
                        hover: {
                            intersect: false,
                        }
                    }

                };

                
                
                var idChart = "Chart_"+dep[1]+"_"+circ[1][1]+"_"+annee[curseur_annee];
                
                var ctx = document.getElementById(idChart).getContext('2d');
                var myChart = new Chart(ctx, chart);
                myChart.resize()

            }
            if(35<i && i<43){
                var elem = document.querySelector('#sect_cand_'+i);
                elem.setAttribute("style","display: flex ; flex-direction: column; flex-wrap: wrap;position: absolute;top: 30%;height: 17%;width: 14.3%;align-items: center; justify-content: center;")
                table.data.forEach(function(item){
                    var cirdep = circ[2]+"_"+dep[1];
                    if(cirdep === item[annee[curseur_annee]]){


                        datacol[nbelemt] = [];
                        var res = annee[curseur_annee] + "_RES";
                        datacol[nbelemt][0]=item[res];
                        datacol[nbelemt][1]=item["Nom"]+" "+item["Prenom"];
                        datacol[nbelemt][2]=colPartis[item["Etiquette"]];
                        nbelemt+=1;


                        var newElemP = document.createElement('p');
                        newElemP.id="cand_"+item["id"];
                        newElemP.innerText=item["Nom"]+" "+item["Prenom"];
                        newElemP.innerText = newElemP.innerText.toLowerCase();
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


                datacol.sort(function(a,b) {
                        return b[0]-a[0]
                    });

                for (var ind=0; ind< nbelemt; ind++){

                    chartdata.push(datacol[ind][0])
                    chartdatalabels.push(datacol[ind][1])
                    colors.push(datacol[ind][2])
                    }

                var chart = {
                    type: "bar",
                    data :{
                        labels: chartdatalabels,
                        datasets : [{
                            label: 'Pourcentage',
                            data: chartdata,
                            backgroundColor: colors,
                            borderColor: colors,
                            borderWidth: 1
                            }]
                        },

                    options: {
                        scales: {
                                    xAxes: [{
                                        display: false,
                                        categoryPercentage: 0.95,
                                        barPercentage: 1.0
                                    }]
                                },
                        responsive:false,
                        maintainAspectRatio: false,
                        animation: false,

                        legend: {
                            display: false
                        },
                        hover: {
                            intersect: false,
                        }
                    }

                };

                
                
                var idChart = "Chart_"+dep[1]+"_"+circ[2][1]+"_"+annee[curseur_annee];
                
                var ctx = document.getElementById(idChart).getContext('2d');
                var myChart = new Chart(ctx, chart);
                myChart.resize()
            }
            if(42<i && i<50){
                var elem = document.querySelector('#sect_cand_'+i);
                elem.setAttribute("style","display: flex ; flex-direction: column; flex-wrap: wrap;position: absolute;top: 30%;height: 17%;width: 14.3%;align-items: center; justify-content: center;")
                table.data.forEach(function(item){
                    var cirdep = circ[3]+"_"+dep[1];
                    if(cirdep === item[annee[curseur_annee]]){


                        datacol[nbelemt] = [];
                        var res = annee[curseur_annee] + "_RES";
                        datacol[nbelemt][0]=item[res];
                        datacol[nbelemt][1]=item["Nom"]+" "+item["Prenom"];
                        datacol[nbelemt][2]=colPartis[item["Etiquette"]];
                        nbelemt+=1;


                        var newElemP = document.createElement('p');
                        newElemP.id="cand_"+item["id"];
                        newElemP.innerText=item["Nom"]+" "+item["Prenom"];
                        newElemP.innerText = newElemP.innerText.toLowerCase();
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


                datacol.sort(function(a,b) {
                        return b[0]-a[0]
                    });

                for (var ind=0; ind< nbelemt; ind++){

                    chartdata.push(datacol[ind][0])
                    chartdatalabels.push(datacol[ind][1])
                    colors.push(datacol[ind][2])
                    }

                var chart = {
                    type: "bar",
                    data :{
                        labels: chartdatalabels,
                        datasets : [{
                            label: 'Pourcentage',
                            data: chartdata,
                            backgroundColor: colors,
                            borderColor: colors,
                            borderWidth: 1
                            }]
                        },

                    options: {
                        scales: {
                                    xAxes: [{
                                        display: false,
                                        categoryPercentage: 0.95,
                                        barPercentage: 1.0
                                    }]
                                },
                        responsive:false,
                        maintainAspectRatio: false,
                        animation: false,

                        legend: {
                            display: false
                        },
                        hover: {
                            intersect: false,
                        }
                    }

                };

                
                
                var idChart = "Chart_"+dep[1]+"_"+circ[3][1]+"_"+annee[curseur_annee];
                
                var ctx = document.getElementById(idChart).getContext('2d');
                var myChart = new Chart(ctx, chart);
                myChart.resize()
            }
            if(49<i && i<57){
                var elem = document.querySelector('#sect_cand_'+i);
                elem.setAttribute("style","display: flex ; flex-direction: column; flex-wrap: wrap;position: absolute;top: 30%;height: 17%;width: 14.3%;align-items: center; justify-content: center;")
                table.data.forEach(function(item){
                    var cirdep = circ[4]+"_"+dep[1];
                    if(cirdep === item[annee[curseur_annee]]){


                        datacol[nbelemt] = [];
                        var res = annee[curseur_annee] + "_RES";
                        datacol[nbelemt][0]=item[res];
                        datacol[nbelemt][1]=item["Nom"]+" "+item["Prenom"];
                        datacol[nbelemt][2]=colPartis[item["Etiquette"]];
                        nbelemt+=1;


                        var newElemP = document.createElement('p');
                        newElemP.id="cand_"+item["id"];
                        newElemP.innerText=item["Nom"]+" "+item["Prenom"];
                        newElemP.innerText = newElemP.innerText.toLowerCase();
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

                datacol.sort(function(a,b) {
                        return b[0]-a[0]
                    });

                for (var ind=0; ind< nbelemt; ind++){

                    chartdata.push(datacol[ind][0])
                    chartdatalabels.push(datacol[ind][1])
                    colors.push(datacol[ind][2])
                    }

                var chart = {
                    type: "bar",
                    data :{
                        labels: chartdatalabels,
                        datasets : [{
                            label: 'Pourcentage',
                            data: chartdata,
                            backgroundColor: colors,
                            borderColor: colors,
                            borderWidth: 1
                            }]
                        },

                    options: {
                        scales: {
                                    xAxes: [{
                                        display: false,
                                        categoryPercentage: 0.95,
                                        barPercentage: 1.0
                                    }]
                                },
                        responsive:false,
                        maintainAspectRatio: false,
                        animation: false,

                        legend: {
                            display: false
                        },
                        hover: {
                            intersect: false,
                        }
                    }

                };

                
                
                var idChart = "Chart_"+dep[1]+"_"+circ[4][1]+"_"+annee[curseur_annee];
                
                var ctx = document.getElementById(idChart).getContext('2d');
                var myChart = new Chart(ctx, chart);
                myChart.resize()
            }
        }
        if(56<i && i<127){
            if(i<64){
                var elem = document.querySelector('#sect_cand_'+i);
                elem.setAttribute("style","display: flex ; flex-direction: column; flex-wrap: wrap;position: absolute;top: 30%;height: 17%;width: 14.3%;align-items: center; justify-content: center;")
                table.data.forEach(function(item){
                    var cirdep = circ[0]+"_"+dep[2];
                    if(cirdep === item[annee[curseur_annee]]){


                        datacol[nbelemt] = [];
                        var res = annee[curseur_annee] + "_RES";
                        datacol[nbelemt][0]=item[res];
                        datacol[nbelemt][1]=item["Nom"]+" "+item["Prenom"];
                        datacol[nbelemt][2]=colPartis[item["Etiquette"]];
                        nbelemt+=1;


                        var newElemP = document.createElement('p');
                        newElemP.id="cand_"+item["id"];
                        newElemP.innerText=item["Nom"]+" "+item["Prenom"];
                        newElemP.innerText = newElemP.innerText.toLowerCase();
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

                datacol.sort(function(a,b) {
                        return b[0]-a[0]
                    });

                for (var ind=0; ind< nbelemt; ind++){

                    chartdata.push(datacol[ind][0])
                    chartdatalabels.push(datacol[ind][1])
                    colors.push(datacol[ind][2])
                    }

                var chart = {
                    type: "bar",
                    data :{
                        labels: chartdatalabels,
                        datasets : [{
                            label: 'Pourcentage',
                            data: chartdata,
                            backgroundColor: colors,
                            borderColor: colors,
                            borderWidth: 1
                            }]
                        },

                    options: {
                        scales: {
                                    xAxes: [{
                                        display: false,
                                        categoryPercentage: 0.95,
                                        barPercentage: 1.0
                                    }]
                                },
                        responsive:false,
                        maintainAspectRatio: false,
                        animation: false,

                        legend: {
                            display: false
                        },
                        hover: {
                            intersect: false,
                        }
                    }

                };

                
                
                var idChart = "Chart_"+dep[2]+"_"+circ[0][1]+"_"+annee[curseur_annee];
                
                var ctx = document.getElementById(idChart).getContext('2d');
                var myChart = new Chart(ctx, chart);
                myChart.resize()
            }
            if(63<i && i<71){
                var elem = document.querySelector('#sect_cand_'+i);
                elem.setAttribute("style","display: flex ; flex-direction: column; flex-wrap: wrap;position: absolute;top: 30%;height: 17%;width: 14.3%;align-items: center; justify-content: center;")
                table.data.forEach(function(item){
                    var cirdep = circ[1]+"_"+dep[2];
                    if(cirdep === item[annee[curseur_annee]]){


                        datacol[nbelemt] = [];
                        var res = annee[curseur_annee] + "_RES";
                        datacol[nbelemt][0]=item[res];
                        datacol[nbelemt][1]=item["Nom"]+" "+item["Prenom"];
                        datacol[nbelemt][2]=colPartis[item["Etiquette"]];
                        nbelemt+=1;


                        var newElemP = document.createElement('p');
                        newElemP.id="cand_"+item["id"];
                        newElemP.innerText=item["Nom"]+" "+item["Prenom"];
                        newElemP.innerText = newElemP.innerText.toLowerCase();
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

                datacol.sort(function(a,b) {
                        return b[0]-a[0]
                    });

                for (var ind=0; ind< nbelemt; ind++){

                    chartdata.push(datacol[ind][0])
                    chartdatalabels.push(datacol[ind][1])
                    colors.push(datacol[ind][2])
                    }

                var chart = {
                    type: "bar",
                    data :{
                        labels: chartdatalabels,
                        datasets : [{
                            label: 'Pourcentage',
                            data: chartdata,
                            backgroundColor: colors,
                            borderColor: colors,
                            borderWidth: 1
                            }]
                        },

                    options: {
                        scales: {
                                    xAxes: [{
                                        display: false,
                                        categoryPercentage: 0.95,
                                        barPercentage: 1.0
                                    }]
                                },
                        responsive:false,
                        maintainAspectRatio: false,
                        animation: false,

                        legend: {
                            display: false
                        },
                        hover: {
                            intersect: false,
                        }
                    }

                };

                
                
                var idChart = "Chart_"+dep[2]+"_"+circ[1][1]+"_"+annee[curseur_annee];
                
                var ctx = document.getElementById(idChart).getContext('2d');
                var myChart = new Chart(ctx, chart);
                myChart.resize()
            }
            if(70<i && i<78){
                var elem = document.querySelector('#sect_cand_'+i);
                elem.setAttribute("style","display: flex ; flex-direction: column; flex-wrap: wrap;position: absolute;top: 30%;height: 17%;width: 14.3%;align-items: center; justify-content: center;")
                table.data.forEach(function(item){
                    var cirdep = circ[2]+"_"+dep[2];
                    if(cirdep === item[annee[curseur_annee]]){


                        datacol[nbelemt] = [];
                        var res = annee[curseur_annee] + "_RES";
                        datacol[nbelemt][0]=item[res];
                        datacol[nbelemt][1]=item["Nom"]+" "+item["Prenom"];
                        datacol[nbelemt][2]=colPartis[item["Etiquette"]];
                        nbelemt+=1;


                        var newElemP = document.createElement('p');
                        newElemP.id="cand_"+item["id"];
                        newElemP.innerText=item["Nom"]+" "+item["Prenom"];
                        newElemP.innerText = newElemP.innerText.toLowerCase();
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


                datacol.sort(function(a,b) {
                        return b[0]-a[0]
                    });

                for (var ind=0; ind< nbelemt; ind++){

                    chartdata.push(datacol[ind][0])
                    chartdatalabels.push(datacol[ind][1])
                    colors.push(datacol[ind][2])
                    }

                var chart = {
                    type: "bar",
                    data :{
                        labels: chartdatalabels,
                        datasets : [{
                            label: 'Pourcentage',
                            data: chartdata,
                            backgroundColor: colors,
                            borderColor: colors,
                            borderWidth: 1
                            }]
                        },

                    options: {
                        scales: {
                                    xAxes: [{
                                        display: false,
                                        categoryPercentage: 0.95,
                                        barPercentage: 1.0
                                    }]
                                },
                        responsive:false,
                        maintainAspectRatio: false,
                        animation: false,

                        legend: {
                            display: false
                        },
                        hover: {
                            intersect: false,
                        }
                    }

                };

                
                
                var idChart = "Chart_"+dep[2]+"_"+circ[2][1]+"_"+annee[curseur_annee];
                
                var ctx = document.getElementById(idChart).getContext('2d');
                var myChart = new Chart(ctx, chart);
                myChart.resize()
            }
            if(77<i && i<85){
                var elem = document.querySelector('#sect_cand_'+i);
                elem.setAttribute("style","display: flex ; flex-direction: column; flex-wrap: wrap;position: absolute;top: 30%;height: 17%;width: 14.3%;align-items: center; justify-content: center;")
                table.data.forEach(function(item){
                    var cirdep = circ[3]+"_"+dep[2];
                    if(cirdep === item[annee[curseur_annee]]){


                        datacol[nbelemt] = [];
                        var res = annee[curseur_annee] + "_RES";
                        datacol[nbelemt][0]=item[res];
                        datacol[nbelemt][1]=item["Nom"]+" "+item["Prenom"];
                        datacol[nbelemt][2]=colPartis[item["Etiquette"]];
                        nbelemt+=1;


                        var newElemP = document.createElement('p');
                        newElemP.id="cand_"+item["id"];
                        newElemP.innerText=item["Nom"]+" "+item["Prenom"];
                        newElemP.innerText = newElemP.innerText.toLowerCase();
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


                datacol.sort(function(a,b) {
                        return b[0]-a[0]
                    });

                for (var ind=0; ind< nbelemt; ind++){

                    chartdata.push(datacol[ind][0])
                    chartdatalabels.push(datacol[ind][1])
                    colors.push(datacol[ind][2])
                    }

                var chart = {
                    type: "bar",
                    data :{
                        labels: chartdatalabels,
                        datasets : [{
                            label: 'Pourcentage',
                            data: chartdata,
                            backgroundColor: colors,
                            borderColor: colors,
                            borderWidth: 1
                            }]
                        },

                    options: {
                        scales: {
                                    xAxes: [{
                                        display: false,
                                        categoryPercentage: 0.95,
                                        barPercentage: 1.0
                                    }]
                                },
                        responsive:false,
                        maintainAspectRatio: false,
                        animation: false,

                        legend: {
                            display: false
                        },
                        hover: {
                            intersect: false,
                        }
                    }

                };

                
                
                var idChart = "Chart_"+dep[2]+"_"+circ[3][1]+"_"+annee[curseur_annee];
                
                var ctx = document.getElementById(idChart).getContext('2d');
                var myChart = new Chart(ctx, chart);
                myChart.resize()
            }
            if(84<i && i<92){
                var elem = document.querySelector('#sect_cand_'+i);
                elem.setAttribute("style","display: flex ; flex-direction: column; flex-wrap: wrap;position: absolute;top: 30%;height: 17%;width: 14.3%;align-items: center; justify-content: center;")
                table.data.forEach(function(item){
                    var cirdep = circ[4]+"_"+dep[2];
                    if(cirdep === item[annee[curseur_annee]]){


                        datacol[nbelemt] = [];
                        var res = annee[curseur_annee] + "_RES";
                        datacol[nbelemt][0]=item[res];
                        datacol[nbelemt][1]=item["Nom"]+" "+item["Prenom"];
                        datacol[nbelemt][2]=colPartis[item["Etiquette"]];
                        nbelemt+=1;


                        var newElemP = document.createElement('p');
                        newElemP.id="cand_"+item["id"];
                        newElemP.innerText=item["Nom"]+" "+item["Prenom"];
                        newElemP.innerText = newElemP.innerText.toLowerCase();
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


                datacol.sort(function(a,b) {
                        return b[0]-a[0]
                    });

                for (var ind=0; ind< nbelemt; ind++){

                    chartdata.push(datacol[ind][0])
                    chartdatalabels.push(datacol[ind][1])
                    colors.push(datacol[ind][2])
                    }

                var chart = {
                    type: "bar",
                    data :{
                        labels: chartdatalabels,
                        datasets : [{
                            label: 'Pourcentage',
                            data: chartdata,
                            backgroundColor: colors,
                            borderColor: colors,
                            borderWidth: 1
                            }]
                        },

                    options: {
                        scales: {
                                    xAxes: [{
                                        display: false,
                                        categoryPercentage: 0.95,
                                        barPercentage: 1.0
                                    }]
                                },
                        responsive:false,
                        maintainAspectRatio: false,
                        animation: false,

                        legend: {
                            display: false
                        },
                        hover: {
                            intersect: false,
                        }
                    }

                };

                
                
                var idChart = "Chart_"+dep[2]+"_"+circ[4][1]+"_"+annee[curseur_annee];
                
                var ctx = document.getElementById(idChart).getContext('2d');
                var myChart = new Chart(ctx, chart);
                myChart.resize()
            }
            if(91<i && i<99){
                var elem = document.querySelector('#sect_cand_'+i);
                elem.setAttribute("style","display: flex ; flex-direction: column; flex-wrap: wrap;position: absolute;top: 30%;height: 17%;width: 14.3%;align-items: center; justify-content: center;")
                table.data.forEach(function(item){
                    var cirdep = circ[5]+"_"+dep[2];
                    if(cirdep === item[annee[curseur_annee]]){


                        datacol[nbelemt] = [];
                        var res = annee[curseur_annee] + "_RES";
                        datacol[nbelemt][0]=item[res];
                        datacol[nbelemt][1]=item["Nom"]+" "+item["Prenom"];
                        datacol[nbelemt][2]=colPartis[item["Etiquette"]];
                        nbelemt+=1;


                        var newElemP = document.createElement('p');
                        newElemP.id="cand_"+item["id"];
                        newElemP.innerText=item["Nom"]+" "+item["Prenom"];
                        newElemP.innerText = newElemP.innerText.toLowerCase();
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

                datacol.sort(function(a,b) {
                        return b[0]-a[0]
                    });

                for (var ind=0; ind< nbelemt; ind++){

                    chartdata.push(datacol[ind][0])
                    chartdatalabels.push(datacol[ind][1])
                    colors.push(datacol[ind][2])
                    }

                var chart = {
                    type: "bar",
                    data :{
                        labels: chartdatalabels,
                        datasets : [{
                            label: 'Pourcentage',
                            data: chartdata,
                            backgroundColor: colors,
                            borderColor: colors,
                            borderWidth: 1
                            }]
                        },

                    options: {
                        scales: {
                                    xAxes: [{
                                        display: false,
                                        categoryPercentage: 0.95,
                                        barPercentage: 1.0
                                    }]
                                },
                        responsive:false,
                        maintainAspectRatio: false,
                        animation: false,

                        legend: {
                            display: false
                        },
                        hover: {
                            intersect: false,
                        }
                    }

                };

                
                
                var idChart = "Chart_"+dep[2]+"_"+circ[5][1]+"_"+annee[curseur_annee];
                
                var ctx = document.getElementById(idChart).getContext('2d');
                var myChart = new Chart(ctx, chart);
                myChart.resize()
            }
            if(98<i && i<106){
                var elem = document.querySelector('#sect_cand_'+i);
                elem.setAttribute("style","display: flex ; flex-direction: column; flex-wrap: wrap;position: absolute;top: 30%;height: 17%;width: 14.3%;align-items: center; justify-content: center;")
                table.data.forEach(function(item){
                    var cirdep = circ[6]+"_"+dep[2];
                    if(cirdep === item[annee[curseur_annee]]){


                        datacol[nbelemt] = [];
                        var res = annee[curseur_annee] + "_RES";
                        datacol[nbelemt][0]=item[res];
                        datacol[nbelemt][1]=item["Nom"]+" "+item["Prenom"];
                        datacol[nbelemt][2]=colPartis[item["Etiquette"]];
                        nbelemt+=1;


                        var newElemP = document.createElement('p');
                        newElemP.id="cand_"+item["id"];
                        newElemP.innerText=item["Nom"]+" "+item["Prenom"];
                        newElemP.innerText = newElemP.innerText.toLowerCase();
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

                datacol.sort(function(a,b) {
                        return b[0]-a[0]
                    });

                for (var ind=0; ind< nbelemt; ind++){

                    chartdata.push(datacol[ind][0])
                    chartdatalabels.push(datacol[ind][1])
                    colors.push(datacol[ind][2])
                    }

                var chart = {
                    type: "bar",
                    data :{
                        labels: chartdatalabels,
                        datasets : [{
                            label: 'Pourcentage',
                            data: chartdata,
                            backgroundColor: colors,
                            borderColor: colors,
                            borderWidth: 1
                            }]
                        },

                    options: {
                        scales: {
                                    xAxes: [{
                                        display: false,
                                        categoryPercentage: 0.95,
                                        barPercentage: 1.0
                                    }]
                                },
                        responsive:false,
                        maintainAspectRatio: false,
                        animation: false,

                        legend: {
                            display: false
                        },
                        hover: {
                            intersect: false,
                        }
                    }

                };

                
                
                var idChart = "Chart_"+dep[2]+"_"+circ[6][1]+"_"+annee[curseur_annee];
                
                var ctx = document.getElementById(idChart).getContext('2d');
                var myChart = new Chart(ctx, chart);
                myChart.resize()
            }
            if(105<i && i<113){
                var elem = document.querySelector('#sect_cand_'+i);
                elem.setAttribute("style","display: flex ; flex-direction: column; flex-wrap: wrap;position: absolute;top: 30%;height: 17%;width: 14.3%;align-items: center; justify-content: center;")
                table.data.forEach(function(item){
                    var cirdep = circ[7]+"_"+dep[2];
                    if(cirdep === item[annee[curseur_annee]]){


                        datacol[nbelemt] = [];
                        var res = annee[curseur_annee] + "_RES";
                        datacol[nbelemt][0]=item[res];
                        datacol[nbelemt][1]=item["Nom"]+" "+item["Prenom"];
                        datacol[nbelemt][2]=colPartis[item["Etiquette"]];
                        nbelemt+=1;


                        var newElemP = document.createElement('p');
                        newElemP.id="cand_"+item["id"];
                        newElemP.innerText=item["Nom"]+" "+item["Prenom"];
                        newElemP.innerText = newElemP.innerText.toLowerCase();
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

                datacol.sort(function(a,b) {
                        return b[0]-a[0]
                    });

                for (var ind=0; ind< nbelemt; ind++){

                    chartdata.push(datacol[ind][0])
                    chartdatalabels.push(datacol[ind][1])
                    colors.push(datacol[ind][2])
                    }

                var chart = {
                    type: "bar",
                    data :{
                        labels: chartdatalabels,
                        datasets : [{
                            label: 'Pourcentage',
                            data: chartdata,
                            backgroundColor: colors,
                            borderColor: colors,
                            borderWidth: 1
                            }]
                        },

                    options: {
                        scales: {
                                    xAxes: [{
                                        display: false,
                                        categoryPercentage: 0.95,
                                        barPercentage: 1.0
                                    }]
                                },
                        responsive:false,
                        maintainAspectRatio: false,
                        animation: false,

                        legend: {
                            display: false
                        },
                        hover: {
                            intersect: false,
                        }
                    }

                };

                
                
                var idChart = "Chart_"+dep[2]+"_"+circ[7][1]+"_"+annee[curseur_annee];
                
                var ctx = document.getElementById(idChart).getContext('2d');
                var myChart = new Chart(ctx, chart);
                myChart.resize()
            }
            if(112<i && i<120){
                var elem = document.querySelector('#sect_cand_'+i);
                elem.setAttribute("style","display: flex ; flex-direction: column; flex-wrap: wrap;position: absolute;top: 30%;height: 17%;width: 14.3%;align-items: center; justify-content: center;")
                table.data.forEach(function(item){
                    var cirdep = circ[8]+"_"+dep[2];
                    if(cirdep === item[annee[curseur_annee]]){


                        datacol[nbelemt] = [];
                        var res = annee[curseur_annee] + "_RES";
                        datacol[nbelemt][0]=item[res];
                        datacol[nbelemt][1]=item["Nom"]+" "+item["Prenom"];
                        datacol[nbelemt][2]=colPartis[item["Etiquette"]];
                        nbelemt+=1;


                        var newElemP = document.createElement('p');
                        newElemP.id="cand_"+item["id"];
                        newElemP.innerText=item["Nom"]+" "+item["Prenom"];
                        newElemP.innerText = newElemP.innerText.toLowerCase();
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

                datacol.sort(function(a,b) {
                        return b[0]-a[0]
                    });

                for (var ind=0; ind< nbelemt; ind++){

                    chartdata.push(datacol[ind][0])
                    chartdatalabels.push(datacol[ind][1])
                    colors.push(datacol[ind][2])
                    }

                var chart = {
                    type: "bar",
                    data :{
                        labels: chartdatalabels,
                        datasets : [{
                            label: 'Pourcentage',
                            data: chartdata,
                            backgroundColor: colors,
                            borderColor: colors,
                            borderWidth: 1
                            }]
                        },

                    options: {
                        scales: {
                                    xAxes: [{
                                        display: false,
                                        categoryPercentage: 0.95,
                                        barPercentage: 1.0
                                    }]
                                },
                        responsive:false,
                        maintainAspectRatio: false,
                        animation: false,

                        legend: {
                            display: false
                        },
                        hover: {
                            intersect: false,
                        }
                    }

                };

                
                
                var idChart = "Chart_"+dep[2]+"_"+circ[8][1]+"_"+annee[curseur_annee];
                
                var ctx = document.getElementById(idChart).getContext('2d');
                var myChart = new Chart(ctx, chart);
                myChart.resize()
            }
            if(119<i && i<127){
                var elem = document.querySelector('#sect_cand_'+i);
                elem.setAttribute("style","display: flex ; flex-direction: column; flex-wrap: wrap;position: absolute;top: 30%;height: 17%;width: 14.3%;align-items: center; justify-content: center;")
                table.data.forEach(function(item){
                    var cirdep = circ[9]+"_"+dep[2];
                    if(cirdep === item[annee[curseur_annee]]){


                        datacol[nbelemt] = [];
                        var res = annee[curseur_annee] + "_RES";
                        datacol[nbelemt][0]=item[res];
                        datacol[nbelemt][1]=item["Nom"]+" "+item["Prenom"];
                        datacol[nbelemt][2]=colPartis[item["Etiquette"]];
                        nbelemt+=1;


                        var newElemP = document.createElement('p');
                        newElemP.id="cand_"+item["id"];
                        newElemP.innerText=item["Nom"]+" "+item["Prenom"];
                        newElemP.innerText = newElemP.innerText.toLowerCase();
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


                datacol.sort(function(a,b) {
                        return b[0]-a[0]
                    });

                for (var ind=0; ind< nbelemt; ind++){

                    chartdata.push(datacol[ind][0])
                    chartdatalabels.push(datacol[ind][1])
                    colors.push(datacol[ind][2])
                    }

                var chart = {
                    type: "bar",
                    data :{
                        labels: chartdatalabels,
                        datasets : [{
                            label: 'Pourcentage',
                            data: chartdata,
                            backgroundColor: colors,
                            borderColor: colors,
                            borderWidth: 1
                            }]
                        },

                    options: {
                        scales: {
                                    xAxes: [{
                                        display: false,
                                        categoryPercentage: 0.95,
                                        barPercentage: 1.0
                                    }]
                                },
                        responsive:false,
                        maintainAspectRatio: false,
                        animation: false,

                        legend: {
                            display: false
                        },
                        hover: {
                            intersect: false,
                        }
                    }

                };

                
                
                var idChart = "Chart_"+dep[2]+"_"+circ[9][1]+"_"+annee[curseur_annee];
                
                var ctx = document.getElementById(idChart).getContext('2d');
                var myChart = new Chart(ctx, chart);
                myChart.resize()
            }
        }
        if(126<i && i<176){
            if(i<134){
                var elem = document.querySelector('#sect_cand_'+i);
                elem.setAttribute("style","display: flex ; flex-direction: column; flex-wrap: wrap;position: absolute;top: 30%;height: 17%;width: 14.3%;align-items: center; justify-content: center;")
                table.data.forEach(function(item){
                    var cirdep = circ[0]+"_"+dep[3];
                    if(cirdep === item[annee[curseur_annee]]){


                        datacol[nbelemt] = [];
                        var res = annee[curseur_annee] + "_RES";
                        datacol[nbelemt][0]=item[res];
                        datacol[nbelemt][1]=item["Nom"]+" "+item["Prenom"];
                        datacol[nbelemt][2]=colPartis[item["Etiquette"]];
                        nbelemt+=1;


                        var newElemP = document.createElement('p');
                        newElemP.id="cand_"+item["id"];
                        newElemP.innerText=item["Nom"]+" "+item["Prenom"];
                        newElemP.innerText = newElemP.innerText.toLowerCase();
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

                datacol.sort(function(a,b) {
                        return b[0]-a[0]
                    });

                for (var ind=0; ind< nbelemt; ind++){

                    chartdata.push(datacol[ind][0])
                    chartdatalabels.push(datacol[ind][1])
                    colors.push(datacol[ind][2])
                    }

                var chart = {
                    type: "bar",
                    data :{
                        labels: chartdatalabels,
                        datasets : [{
                            label: 'Pourcentage',
                            data: chartdata,
                            backgroundColor: colors,
                            borderColor: colors,
                            borderWidth: 1
                            }]
                        },

                    options: {
                        scales: {
                                    xAxes: [{
                                        display: false,
                                        categoryPercentage: 0.95,
                                        barPercentage: 1.0
                                    }]
                                },
                        responsive:false,
                        maintainAspectRatio: false,
                        animation: false,

                        legend: {
                            display: false
                        },
                        hover: {
                            intersect: false,
                        }
                    }

                };

                
                
                var idChart = "Chart_"+dep[3]+"_"+circ[0][1]+"_"+annee[curseur_annee];
                
                var ctx = document.getElementById(idChart).getContext('2d');
                var myChart = new Chart(ctx, chart);
                myChart.resize()
            }
            if(133<i && i<141){
                var elem = document.querySelector('#sect_cand_'+i);
                elem.setAttribute("style","display: flex ; flex-direction: column; flex-wrap: wrap;position: absolute;top: 30%;height: 17%;width: 14.3%;align-items: center; justify-content: center;")
                table.data.forEach(function(item){
                    var cirdep = circ[1]+"_"+dep[3];
                    if(cirdep === item[annee[curseur_annee]]){


                        datacol[nbelemt] = [];
                        var res = annee[curseur_annee] + "_RES";
                        datacol[nbelemt][0]=item[res];
                        datacol[nbelemt][1]=item["Nom"]+" "+item["Prenom"];
                        datacol[nbelemt][2]=colPartis[item["Etiquette"]];
                        nbelemt+=1;


                        var newElemP = document.createElement('p');
                        newElemP.id="cand_"+item["id"];
                        newElemP.innerText=item["Nom"]+" "+item["Prenom"];
                        newElemP.innerText = newElemP.innerText.toLowerCase();
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

                datacol.sort(function(a,b) {
                        return b[0]-a[0]
                    });

                for (var ind=0; ind< nbelemt; ind++){

                    chartdata.push(datacol[ind][0])
                    chartdatalabels.push(datacol[ind][1])
                    colors.push(datacol[ind][2])
                    }

                var chart = {
                    type: "bar",
                    data :{
                        labels: chartdatalabels,
                        datasets : [{
                            label: 'Pourcentage',
                            data: chartdata,
                            backgroundColor: colors,
                            borderColor: colors,
                            borderWidth: 1
                            }]
                        },

                    options: {
                        scales: {
                                    xAxes: [{
                                        display: false,
                                        categoryPercentage: 0.95,
                                        barPercentage: 1.0
                                    }]
                                },
                        responsive:false,
                        maintainAspectRatio: false,
                        animation: false,

                        legend: {
                            display: false
                        },
                        hover: {
                            intersect: false,
                        }
                    }

                };

                
                
                var idChart = "Chart_"+dep[3]+"_"+circ[1][1]+"_"+annee[curseur_annee];
                
                var ctx = document.getElementById(idChart).getContext('2d');
                var myChart = new Chart(ctx, chart);
                myChart.resize()
            }
            if(140<i && i<148){
                var elem = document.querySelector('#sect_cand_'+i);
                elem.setAttribute("style","display: flex ; flex-direction: column; flex-wrap: wrap;position: absolute;top: 30%;height: 17%;width: 14.3%;align-items: center; justify-content: center;")
                table.data.forEach(function(item){
                    var cirdep = circ[2]+"_"+dep[3];
                    if(cirdep === item[annee[curseur_annee]]){


                        datacol[nbelemt] = [];
                        var res = annee[curseur_annee] + "_RES";
                        datacol[nbelemt][0]=item[res];
                        datacol[nbelemt][1]=item["Nom"]+" "+item["Prenom"];
                        datacol[nbelemt][2]=colPartis[item["Etiquette"]];
                        nbelemt+=1;


                        var newElemP = document.createElement('p');
                        newElemP.id="cand_"+item["id"];
                        newElemP.innerText=item["Nom"]+" "+item["Prenom"];
                        newElemP.innerText = newElemP.innerText.toLowerCase();
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


                datacol.sort(function(a,b) {
                        return b[0]-a[0]
                    });

                for (var ind=0; ind< nbelemt; ind++){

                    chartdata.push(datacol[ind][0])
                    chartdatalabels.push(datacol[ind][1])
                    colors.push(datacol[ind][2])
                    }

                var chart = {
                    type: "bar",
                    data :{
                        labels: chartdatalabels,
                        datasets : [{
                            label: 'Pourcentage',
                            data: chartdata,
                            backgroundColor: colors,
                            borderColor: colors,
                            borderWidth: 1
                            }]
                        },

                    options: {
                        scales: {
                                    xAxes: [{
                                        display: false,
                                        categoryPercentage: 0.95,
                                        barPercentage: 1.0
                                    }]
                                },
                        responsive:false,
                        maintainAspectRatio: false,
                        animation: false,

                        legend: {
                            display: false
                        },
                        hover: {
                            intersect: false,
                        }
                    }

                };

                
                
                var idChart = "Chart_"+dep[3]+"_"+circ[2][1]+"_"+annee[curseur_annee];
                
                var ctx = document.getElementById(idChart).getContext('2d');
                var myChart = new Chart(ctx, chart);
                myChart.resize()

            }
            if(147<i && i<155){
                var elem = document.querySelector('#sect_cand_'+i);
                elem.setAttribute("style","display: flex ; flex-direction: column; flex-wrap: wrap;position: absolute;top: 30%;height: 17%;width: 14.3%;align-items: center; justify-content: center;")
                table.data.forEach(function(item){
                    var cirdep = circ[3]+"_"+dep[3];
                    if(cirdep === item[annee[curseur_annee]]){


                        datacol[nbelemt] = [];
                        var res = annee[curseur_annee] + "_RES";
                        datacol[nbelemt][0]=item[res];
                        datacol[nbelemt][1]=item["Nom"]+" "+item["Prenom"];
                        datacol[nbelemt][2]=colPartis[item["Etiquette"]];
                        nbelemt+=1;


                        var newElemP = document.createElement('p');
                        newElemP.id="cand_"+item["id"];
                        newElemP.innerText=item["Nom"]+" "+item["Prenom"];
                        newElemP.innerText = newElemP.innerText.toLowerCase();
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


                datacol.sort(function(a,b) {
                        return b[0]-a[0]
                    });

                for (var ind=0; ind< nbelemt; ind++){

                    chartdata.push(datacol[ind][0])
                    chartdatalabels.push(datacol[ind][1])
                    colors.push(datacol[ind][2])
                    }

                var chart = {
                    type: "bar",
                    data :{
                        labels: chartdatalabels,
                        datasets : [{
                            label: 'Pourcentage',
                            data: chartdata,
                            backgroundColor: colors,
                            borderColor: colors,
                            borderWidth: 1
                            }]
                        },

                    options: {
                        scales: {
                                    xAxes: [{
                                        display: false,
                                        categoryPercentage: 0.95,
                                        barPercentage: 1.0
                                    }]
                                },
                        responsive:false,
                        maintainAspectRatio: false,
                        animation: false,

                        legend: {
                            display: false
                        },
                        hover: {
                            intersect: false,
                        }
                    }

                };

                
                
                var idChart = "Chart_"+dep[3]+"_"+circ[3][1]+"_"+annee[curseur_annee];
                console.log(idChart)
                var ctx = document.getElementById(idChart).getContext('2d');
                var myChart = new Chart(ctx, chart);
                myChart.resize()

            }
            if(154<i && i<162){
                var elem = document.querySelector('#sect_cand_'+i);
                elem.setAttribute("style","display: flex ; flex-direction: column; flex-wrap: wrap;position: absolute;top: 30%;height: 17%;width: 14.3%;align-items: center; justify-content: center;")
                table.data.forEach(function(item){
                    var cirdep = circ[4]+"_"+dep[3];
                    if(cirdep === item[annee[curseur_annee]]){


                        datacol[nbelemt] = [];
                        var res = annee[curseur_annee] + "_RES";
                        datacol[nbelemt][0]=item[res];
                        datacol[nbelemt][1]=item["Nom"]+" "+item["Prenom"];
                        datacol[nbelemt][2]=colPartis[item["Etiquette"]];
                        nbelemt+=1;


                        var newElemP = document.createElement('p');
                        newElemP.id="cand_"+item["id"];
                        newElemP.innerText=item["Nom"]+" "+item["Prenom"];
                        newElemP.innerText = newElemP.innerText.toLowerCase();
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


                datacol.sort(function(a,b) {
                        return b[0]-a[0]
                    });

                for (var ind=0; ind< nbelemt; ind++){

                    chartdata.push(datacol[ind][0])
                    chartdatalabels.push(datacol[ind][1])
                    colors.push(datacol[ind][2])
                    }

                var chart = {
                    type: "bar",
                    data :{
                        labels: chartdatalabels,
                        datasets : [{
                            label: 'Pourcentage',
                            data: chartdata,
                            backgroundColor: colors,
                            borderColor: colors,
                            borderWidth: 1
                            }]
                        },

                    options: {
                        scales: {
                                    xAxes: [{
                                        display: false,
                                        categoryPercentage: 0.95,
                                        barPercentage: 1.0
                                    }]
                                },
                        responsive:false,
                        maintainAspectRatio: false,
                        animation: false,

                        legend: {
                            display: false
                        },
                        hover: {
                            intersect: false,
                        }
                    }

                };

                
                
                var idChart = "Chart_"+dep[3]+"_"+circ[4][1]+"_"+annee[curseur_annee];
                
                var ctx = document.getElementById(idChart).getContext('2d');
                var myChart = new Chart(ctx, chart);
                myChart.resize()

            }
            if(161<i && i<169){
                var elem = document.querySelector('#sect_cand_'+i);
                elem.setAttribute("style","display: flex ; flex-direction: column; flex-wrap: wrap;position: absolute;top: 30%;height: 17%;width: 14.3%;align-items: center; justify-content: center;")
                table.data.forEach(function(item){
                    var cirdep = circ[5]+"_"+dep[3];
                    if(cirdep === item[annee[curseur_annee]]){


                        datacol[nbelemt] = [];
                        var res = annee[curseur_annee] + "_RES";
                        datacol[nbelemt][0]=item[res];
                        datacol[nbelemt][1]=item["Nom"]+" "+item["Prenom"];
                        datacol[nbelemt][2]=colPartis[item["Etiquette"]];
                        nbelemt+=1;


                        var newElemP = document.createElement('p');
                        newElemP.id="cand_"+item["id"];
                        newElemP.innerText=item["Nom"]+" "+item["Prenom"];
                        newElemP.innerText = newElemP.innerText.toLowerCase();
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


                datacol.sort(function(a,b) {
                        return b[0]-a[0]
                    });

                for (var ind=0; ind< nbelemt; ind++){

                    chartdata.push(datacol[ind][0])
                    chartdatalabels.push(datacol[ind][1])
                    colors.push(datacol[ind][2])
                    }

                var chart = {
                    type: "bar",
                    data :{
                        labels: chartdatalabels,
                        datasets : [{
                            label: 'Pourcentage',
                            data: chartdata,
                            backgroundColor: colors,
                            borderColor: colors,
                            borderWidth: 1
                            }]
                        },

                    options: {
                        scales: {
                                    xAxes: [{
                                        display: false,
                                        categoryPercentage: 0.95,
                                        barPercentage: 1.0
                                    }]
                                },
                        responsive:false,
                        maintainAspectRatio: false,
                        animation: false,

                        legend: {
                            display: false
                        },
                        hover: {
                            intersect: false,
                        }
                    }

                };

                
                
                var idChart = "Chart_"+dep[3]+"_"+circ[5][1]+"_"+annee[curseur_annee];
                
                var ctx = document.getElementById(idChart).getContext('2d');
                var myChart = new Chart(ctx, chart);
                myChart.resize()

            }
            if(168<i && i<176){
                var elem = document.querySelector('#sect_cand_'+i);
                elem.setAttribute("style","display: flex ; flex-direction: column; flex-wrap: wrap;position: absolute;top: 30%;height: 17%;width: 14.3%;align-items: center; justify-content: center;")
                table.data.forEach(function(item){
                    var cirdep = circ[6]+"_"+dep[3];
                    if(cirdep === item[annee[curseur_annee]]){


                        datacol[nbelemt] = [];
                        var res = annee[curseur_annee] + "_RES";
                        datacol[nbelemt][0]=item[res];
                        datacol[nbelemt][1]=item["Nom"]+" "+item["Prenom"];
                        datacol[nbelemt][2]=colPartis[item["Etiquette"]];
                        nbelemt+=1;


                        var newElemP = document.createElement('p');
                        newElemP.id="cand_"+item["id"];
                        newElemP.innerText=item["Nom"]+" "+item["Prenom"];
                        newElemP.innerText = newElemP.innerText.toLowerCase();
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

                datacol.sort(function(a,b) {
                        return b[0]-a[0]
                    });

                for (var ind=0; ind< nbelemt; ind++){

                    chartdata.push(datacol[ind][0])
                    chartdatalabels.push(datacol[ind][1])
                    colors.push(datacol[ind][2])
                    }

                var chart = {
                    type: "bar",
                    data :{
                        labels: chartdatalabels,
                        datasets : [{
                            label: 'Pourcentage',
                            data: chartdata,
                            backgroundColor: colors,
                            borderColor: colors,
                            borderWidth: 1
                            }]
                        },

                    options: {
                        scales: {
                                    xAxes: [{
                                        display: false,
                                        categoryPercentage: 0.95,
                                        barPercentage: 1.0
                                    }]
                                },
                        responsive:false,
                        maintainAspectRatio: false,
                        animation: false,

                        legend: {
                            display: false
                        },
                        hover: {
                            intersect: false,
                        }
                    }

                };

                
                
                var idChart = "Chart_"+dep[3]+"_"+circ[6][1]+"_"+annee[curseur_annee];
                
                var ctx = document.getElementById(idChart).getContext('2d');
                var myChart = new Chart(ctx, chart);
                myChart.resize()
            }
        }
        if(175<i && i<211){
            if(i<183){
                var elem = document.querySelector('#sect_cand_'+i);
                elem.setAttribute("style","display: flex ; flex-direction: column; flex-wrap: wrap;position: absolute;top: 30%;height: 17%;width: 14.3%;align-items: center; justify-content: center;")
                table.data.forEach(function(item){
                    var cirdep = circ[0]+"_"+dep[4];
                    if(cirdep === item[annee[curseur_annee]]){


                        datacol[nbelemt] = [];
                        var res = annee[curseur_annee] + "_RES";
                        datacol[nbelemt][0]=item[res];
                        datacol[nbelemt][1]=item["Nom"]+" "+item["Prenom"];
                        datacol[nbelemt][2]=colPartis[item["Etiquette"]];
                        nbelemt+=1;


                        var newElemP = document.createElement('p');
                        newElemP.id="cand_"+item["id"];
                        newElemP.innerText=item["Nom"]+" "+item["Prenom"];
                        newElemP.innerText = newElemP.innerText.toLowerCase();
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


                datacol.sort(function(a,b) {
                        return b[0]-a[0]
                    });

                for (var ind=0; ind< nbelemt; ind++){

                    chartdata.push(datacol[ind][0])
                    chartdatalabels.push(datacol[ind][1])
                    colors.push(datacol[ind][2])
                    }

                var chart = {
                    type: "bar",
                    data :{
                        labels: chartdatalabels,
                        datasets : [{
                            label: 'Pourcentage',
                            data: chartdata,
                            backgroundColor: colors,
                            borderColor: colors,
                            borderWidth: 1
                            }]
                        },

                    options: {
                        scales: {
                                    xAxes: [{
                                        display: false,
                                        categoryPercentage: 0.95,
                                        barPercentage: 1.0
                                    }]
                                },
                        responsive:false,
                        maintainAspectRatio: false,
                        animation: false,

                        legend: {
                            display: false
                        },
                        hover: {
                            intersect: false,
                        }
                    }

                };

                
                
                var idChart = "Chart_"+dep[4]+"_"+circ[0][1]+"_"+annee[curseur_annee];
                
                var ctx = document.getElementById(idChart).getContext('2d');
                var myChart = new Chart(ctx, chart);
                myChart.resize()

            }
            if(182<i && i<190){
                var elem = document.querySelector('#sect_cand_'+i);
                elem.setAttribute("style","display: flex ; flex-direction: column; flex-wrap: wrap;position: absolute;top: 30%;height: 17%;width: 14.3%;align-items: center; justify-content: center;")
                table.data.forEach(function(item){
                    var cirdep = circ[1]+"_"+dep[4];
                    if(cirdep === item[annee[curseur_annee]]){


                        datacol[nbelemt] = [];
                        var res = annee[curseur_annee] + "_RES";
                        datacol[nbelemt][0]=item[res];
                        datacol[nbelemt][1]=item["Nom"]+" "+item["Prenom"];
                        datacol[nbelemt][2]=colPartis[item["Etiquette"]];
                        nbelemt+=1;


                        var newElemP = document.createElement('p');
                        newElemP.id="cand_"+item["id"];
                        newElemP.innerText=item["Nom"]+" "+item["Prenom"];
                        newElemP.innerText = newElemP.innerText.toLowerCase();
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


                datacol.sort(function(a,b) {
                        return b[0]-a[0]
                    });

                for (var ind=0; ind< nbelemt; ind++){

                    chartdata.push(datacol[ind][0])
                    chartdatalabels.push(datacol[ind][1])
                    colors.push(datacol[ind][2])
                    }

                var chart = {
                    type: "bar",
                    data :{
                        labels: chartdatalabels,
                        datasets : [{
                            label: 'Pourcentage',
                            data: chartdata,
                            backgroundColor: colors,
                            borderColor: colors,
                            borderWidth: 1
                            }]
                        },

                    options: {
                        scales: {
                                    xAxes: [{
                                        display: false,
                                        categoryPercentage: 0.95,
                                        barPercentage: 1.0
                                    }]
                                },
                        responsive:false,
                        maintainAspectRatio: false,
                        animation: false,

                        legend: {
                            display: false
                        },
                        hover: {
                            intersect: false,
                        }
                    }

                };

                
                
                var idChart = "Chart_"+dep[4]+"_"+circ[1][1]+"_"+annee[curseur_annee];
                
                var ctx = document.getElementById(idChart).getContext('2d');
                var myChart = new Chart(ctx, chart);
                myChart.resize()

            }
            if(189<i && i<197){
                var elem = document.querySelector('#sect_cand_'+i);
                elem.setAttribute("style","display: flex ; flex-direction: column; flex-wrap: wrap;position: absolute;top: 30%;height: 17%;width: 14.3%;align-items: center; justify-content: center;")
                table.data.forEach(function(item){
                    var cirdep = circ[2]+"_"+dep[4];
                    if(cirdep === item[annee[curseur_annee]]){


                        datacol[nbelemt] = [];
                        var res = annee[curseur_annee] + "_RES";
                        datacol[nbelemt][0]=item[res];
                        datacol[nbelemt][1]=item["Nom"]+" "+item["Prenom"];
                        datacol[nbelemt][2]=colPartis[item["Etiquette"]];
                        nbelemt+=1;


                        var newElemP = document.createElement('p');
                        newElemP.id="cand_"+item["id"];
                        newElemP.innerText=item["Nom"]+" "+item["Prenom"];
                        newElemP.innerText = newElemP.innerText.toLowerCase();
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


                datacol.sort(function(a,b) {
                        return b[0]-a[0]
                    });

                for (var ind=0; ind< nbelemt; ind++){

                    chartdata.push(datacol[ind][0])
                    chartdatalabels.push(datacol[ind][1])
                    colors.push(datacol[ind][2])
                    }

                var chart = {
                    type: "bar",
                    data :{
                        labels: chartdatalabels,
                        datasets : [{
                            label: 'Pourcentage',
                            data: chartdata,
                            backgroundColor: colors,
                            borderColor: colors,
                            borderWidth: 1
                            }]
                        },

                    options: {
                        scales: {
                                    xAxes: [{
                                        display: false,
                                        categoryPercentage: 0.95,
                                        barPercentage: 1.0
                                    }]
                                },
                        responsive:false,
                        maintainAspectRatio: false,
                        animation: false,

                        legend: {
                            display: false
                        },
                        hover: {
                            intersect: false,
                        }
                    }

                };

                
                
                var idChart = "Chart_"+dep[4]+"_"+circ[2][1]+"_"+annee[curseur_annee];
                
                var ctx = document.getElementById(idChart).getContext('2d');
                var myChart = new Chart(ctx, chart);
                myChart.resize()

            }
            if(196<i && i<204){
                var elem = document.querySelector('#sect_cand_'+i);
                elem.setAttribute("style","display: flex ; flex-direction: column; flex-wrap: wrap;position: absolute;top: 30%;height: 17%;width: 14.3%;align-items: center; justify-content: center;")
                table.data.forEach(function(item){
                    var cirdep = circ[3]+"_"+dep[4];
                    if(cirdep === item[annee[curseur_annee]]){


                        datacol[nbelemt] = [];
                        var res = annee[curseur_annee] + "_RES";
                        datacol[nbelemt][0]=item[res];
                        datacol[nbelemt][1]=item["Nom"]+" "+item["Prenom"];
                        datacol[nbelemt][2]=colPartis[item["Etiquette"]];
                        nbelemt+=1;


                        var newElemP = document.createElement('p');
                        newElemP.id="cand_"+item["id"];
                        newElemP.innerText=item["Nom"]+" "+item["Prenom"];
                        newElemP.innerText = newElemP.innerText.toLowerCase();
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


                datacol.sort(function(a,b) {
                        return b[0]-a[0]
                    });

                for (var ind=0; ind< nbelemt; ind++){

                    chartdata.push(datacol[ind][0])
                    chartdatalabels.push(datacol[ind][1])
                    colors.push(datacol[ind][2])
                    }

                var chart = {
                    type: "bar",
                    data :{
                        labels: chartdatalabels,
                        datasets : [{
                            label: 'Pourcentage',
                            data: chartdata,
                            backgroundColor: colors,
                            borderColor: colors,
                            borderWidth: 1
                            }]
                        },

                    options: {
                        scales: {
                                    xAxes: [{
                                        display: false,
                                        categoryPercentage: 0.95,
                                        barPercentage: 1.0
                                    }]
                                },
                        responsive:false,
                        maintainAspectRatio: false,
                        animation: false,

                        legend: {
                            display: false
                        },
                        hover: {
                            intersect: false,
                        }
                    }

                };

                
                
                var idChart = "Chart_"+dep[4]+"_"+circ[3][1]+"_"+annee[curseur_annee];
                
                var ctx = document.getElementById(idChart).getContext('2d');
                var myChart = new Chart(ctx, chart);
                myChart.resize()

            }
            if(203<i && i<211){
                var elem = document.querySelector('#sect_cand_'+i);
                elem.setAttribute("style","display: flex ; flex-direction: column; flex-wrap: wrap;position: absolute;top: 30%;height: 17%;width: 14.3%;align-items: center; justify-content: center;")
                table.data.forEach(function(item){
                    var cirdep = circ[4]+"_"+dep[4];
                    if(cirdep === item[annee[curseur_annee]]){


                        datacol[nbelemt] = [];
                        var res = annee[curseur_annee] + "_RES";
                        datacol[nbelemt][0]=item[res];
                        datacol[nbelemt][1]=item["Nom"]+" "+item["Prenom"];
                        datacol[nbelemt][2]=colPartis[item["Etiquette"]];
                        nbelemt+=1;


                        var newElemP = document.createElement('p');
                        newElemP.id="cand_"+item["id"];
                        newElemP.innerText=item["Nom"]+" "+item["Prenom"];
                        newElemP.innerText = newElemP.innerText.toLowerCase();
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


                datacol.sort(function(a,b) {
                        return b[0]-a[0]
                    });

                for (var ind=0; ind< nbelemt; ind++){

                    chartdata.push(datacol[ind][0])
                    chartdatalabels.push(datacol[ind][1])
                    colors.push(datacol[ind][2])
                    }

                var chart = {
                    type: "bar",
                    data :{
                        labels: chartdatalabels,
                        datasets : [{
                            label: 'Pourcentage',
                            data: chartdata,
                            backgroundColor: colors,
                            borderColor: colors,
                            borderWidth: 1
                            }]
                        },

                    options: {
                        scales: {
                                    xAxes: [{
                                        display: false,
                                        categoryPercentage: 0.95,
                                        barPercentage: 1.0
                                    }]
                                },
                        responsive:false,
                        maintainAspectRatio: false,
                        animation: false,

                        legend: {
                            display: false
                        },
                        hover: {
                            intersect: false,
                        }
                    }

                };

                
                
                var idChart = "Chart_"+dep[4]+"_"+circ[4][1]+"_"+annee[curseur_annee];
                
                var ctx = document.getElementById(idChart).getContext('2d');
                var myChart = new Chart(ctx, chart);
                myChart.resize()

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
            newprenomc.innerText = newprenomc.innerText.toLowerCase();
            sectinvi.appendChild(newprenomc);
            var newnomc = document.createElement('p');
            newnomc.id="NomC";
            newnomc.innerText=donneeCand["Nom"];
            newnomc.innerText = newnomc.innerText.toLowerCase();
            sectinvi.appendChild(newnomc);
            var newetiquettec = document.createElement('p');
            newetiquettec.id="EtiquetteC";
            newetiquettec.innerText=donneeCand["Etiquette"];
            newetiquettec.innerText=newetiquettec.innerText.toLowerCase();
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
            if(donneeCand["PodCast"] != ""){
                var newleg = document.createElement('p');
                newleg.id="legC";
                newleg.innerText="Interview de "+donneeCand["Prenom"]+" "+donneeCand["Nom"]+" : ";
                sectinvi.appendChild(newleg);
                var newaud = document.createElement('audio');
                newaud.id="podC";
                newaud.src="Son/"+donneeCand["PodCast"];
                newaud.controls="controls";
                sectinvi.appendChild(newaud);
            }
            var newnbpresc = document.createElement('p');
            newnbpresc.id="nbrPrestCr";
            var calcpres = donneeCand["Nombre_presentation_1988"]+donneeCand["Nombre_presentation_1993"]+donneeCand["Nombre_presentation_1997"]+donneeCand["Nombre_presentation_2002"]+donneeCand["Nombre_presentation_2007"]+donneeCand["Nombre_presentation_2012"]+donneeCand["Nombre_presentation_2017"];
            newnbpresc.innerHTML=calcpres +"</br>Candidatures présentées";
            sectinvi.appendChild(newnbpresc);
            var newnbelec = document.createElement('p');
            newnbelec.id="nrbEluC";
            var calcElu = donneeCand["Nombre_Elu_1988"]+donneeCand["Nombre_Elu_1993"]+donneeCand["Nombre_Elu_1997"]+donneeCand["Nombre_Elu_2002"]+donneeCand["Nombre_Elu_2007"]+donneeCand["Nombre_Elu_2012"]+donneeCand["Nombre_Elu_2017"];
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
            if(document.querySelector("#podC")!=null){
                parentclose.removeChild(document.querySelector("#podC"));
                parentclose.removeChild(document.querySelector("#legC"));
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
        }
    });
}

parseData("data/basefinale.csv", doStuff);
