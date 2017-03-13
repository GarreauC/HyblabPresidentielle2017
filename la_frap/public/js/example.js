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
