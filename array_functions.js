// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
// Most of this was was taken from various sources and reused/repurporsed
// This is all for the sake of getting a random name generator working
// I am planning on moving the names to a separate file as the functions have 
// taken on a life of their own.
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
// 
// 

// Get random Item from array
function getRandomItemsPrintId(arr, n, id) {
    var result = new Array(n),
        len = arr.length,
        taken = new Array(len);
    if (n > len)
        throw new RangeError("getRandomItems: more elements taken than available");
    while (n--) {
        var x = Math.floor(Math.random() * len);
        result[n] = arr[x in taken ? taken[x] : x];
        taken[x] = --len in taken ? taken[len] : len;
    }
    document.getElementById(id).innerHTML = result;
}

function getRandomItems(arr, n) {
    var result = new Array(n),
        len = arr.length,
        taken = new Array(len);
    if (n > len)
        throw new RangeError("getRandomItems: more elements taken than available");
    while (n--) {
        var x = Math.floor(Math.random() * len);
        result[n] = arr[x in taken ? taken[x] : x];
        taken[x] = --len in taken ? taken[len] : len;
    }
    console.log(result);
    return result;
}

function reuseID(id){
document.getElementById(id).innerHTML = "";
}

function multipleArrayItemsPrint(array, num, id) {
    arr = getRandomItems(array, num);
    for (i = 0; i < arr.length; i++)
    document.getElementById(id).innerHTML +="<br>" + (i+1) + ": " + arr[i];
}

function multipleArrayItemsPrintCombineId(array, array2, num, id) {
    arr = getRandomItems(array, num);
    arr2 = getRandomItems(array2, num);
    for (i = 0; i < arr.length; i++)
    for (i = 0; i < arr2.length; i++)
    document.getElementById(id).innerHTML +="<br>" + (i+1) + ": " + arr[i] + " " + arr2[i];
}

function multipleArrayItemsPrintCombine(array, array2, num) {
    arr = getRandomItems(array,num);
    arr2 = getRandomItems(array2,num);
    var results='';
    for (i = 0; i < arr.length && i < arr2.length; i++){
    /*console.log("<br>" + (i+1) + ": " + arr[i] + " " + arr2[i]);*/
    results += /*"<br>" + (i+1) + ": " +*/ arr[i] + " " + arr2[i];
    }
    console.log(results + ' ' +num);
    return results;
}

function phbRandomHumanRacef()
        {
        var randomHumanRace = getRandomItems(phb_human_races, 1);
        console.log(randomHumanRace);
        return randomHumanRace;
        }

function phbRandomHumanName(gender, num)
    {
    var results = '';
    var num;
    var num_items;
    var gender = gender;
    for (num_items = 1; num_items <= num; num_items++) {
        var phb_human_race = phbRandomHumanRacef();
        //randomHumanRacef();
        console.log(phb_human_race + ' ' + num_items);
        if (gender == 'female')
            {
            if (phb_human_race == 'Calishite')
                {
                /*var randomHumanName = getRandomItems(phb_human_names_calshite_female,1) + " " + getRandomItems(phb_human_calshite_surnames,1);*/
                var randomHumanName = multipleArrayItemsPrintCombine(phb_human_names_calshite_female, phb_human_calshite_surnames, 1);
            console.log(randomHumanName);
                }
            else if (phb_human_race == 'Chondathan')
                { 
                var randomHumanName = multipleArrayItemsPrintCombine(phb_human_names_chondathan_female, phb_human_chondathan_surnames, 1);
            console.log(randomHumanName);
                }
            else if (phb_human_race == 'Damaran')
                {
                var randomHumanName = multipleArrayItemsPrintCombine(phb_human_names_damaran_female, phb_human_damaran_surnames, 1);
            console.log(randomHumanName);
                }
            else if (phb_human_race == 'Illuskan')
                {
                var randomHumanName = multipleArrayItemsPrintCombine(phb_human_names_illuskan_female, phb_human_illuskan_surnames, 1);
            console.log(randomHumanName);
                }
            else if (phb_human_race == 'Mulan')
                {
                var randomHumanName = multipleArrayItemsPrintCombine(phb_human_names_mulan_female, phb_human_mulan_surnames, 1);
            console.log(randomHumanName);
                }
            else if (phb_human_race == 'Rashemi')
                {
                var randomHumanName = multipleArrayItemsPrintCombine(phb_human_names_rashemi_female, phb_human_rashemi_surnames, 1);
            console.log(randomHumanName);
                }
            else if (phb_human_race == 'Shou')
                {        
                var randomHumanName = multipleArrayItemsPrintCombine(phb_human_names_shou_female, phb_human_shou_surnames, 1);
            console.log(randomHumanName);
                }
            else if (phb_human_race == 'Tethyrian')
                { 
                var randomHumanName = multipleArrayItemsPrintCombine(phb_human_names_chondathan_female, phb_human_chondathan_surnames, 1);
            console.log(randomHumanName);
                }
            else if (phb_human_race == 'Turami')
                {
                var randomHumanName = multipleArrayItemsPrintCombine(phb_human_names_turami_female, phb_human_turami_surnames, 1);
            console.log(randomHumanName);
                }
            else {
                var randomHumanName = 'Error Race Not Found';
            console.log(randomHumanName);
            	}
		/*document.getElementById(id).innerHTML = randomHumanName + " - " + phb_human_racesR;*/
            console.log(randomHumanName);
            }
        else if (gender == 'male')
            {
            if (phb_human_race == 'Calishite')
                { 
                /*var randomHumanName = getRandomItems(phb_human_names_calshite_male,1) + " " + getRandomItems(phb_human_calshite_surnames,1);*/
                var randomHumanName = multipleArrayItemsPrintCombine(phb_human_names_calshite_male, phb_human_calshite_surnames, 1);
                }
            else if (phb_human_race == 'Chondathan')
                { 
                var randomHumanName = multipleArrayItemsPrintCombine(phb_human_names_chondathan_male, phb_human_chondathan_surnames, 1);
                }
            else if (phb_human_race == 'Damaran')
                {
                var randomHumanName = multipleArrayItemsPrintCombine(phb_human_names_damaran_male, phb_human_damaran_surnames, 1);
                }
            else if (phb_human_race == 'Illuskan')
                {
                var randomHumanName = multipleArrayItemsPrintCombine(phb_human_names_illuskan_male, phb_human_illuskan_surnames, 1);
                }
            else if (phb_human_race == 'Mulan')
                {
                var randomHumanName = multipleArrayItemsPrintCombine(phb_human_names_mulan_male, phb_human_mulan_surnames, 1);
                }
            else if (phb_human_race == 'Rashemi')
                {
                var randomHumanName = multipleArrayItemsPrintCombine(phb_human_names_rashemi_male, phb_human_rashemi_surnames, 1);
                }
            else if (phb_human_race == 'Shou')
                {        
                var randomHumanName = multipleArrayItemsPrintCombine(phb_human_names_shou_male, phb_human_shou_surnames, 1);
                }
            else if (phb_human_race == 'Tethyrian')
                { 
                var randomHumanName = multipleArrayItemsPrintCombine(phb_human_names_chondathan_male, phb_human_chondathan_surnames, 1);
                }
            else if (phb_human_race == 'Turami')
                {
                var randomHumanName = multipleArrayItemsPrintCombine(phb_human_names_turami_male, phb_human_turami_surnames, 1);
                }
            else {
                var randomHumanName = 'Error Race Not Found';
            console.log(randomHumanName);
            	}
            /*document.getElementById(id).innerHTML = randomHumanName + " - " + phb_human_racesR;*/
            console.log(randomHumanName);
            }
        else 
        {
            console.log('unknown human gender');
        }
        console.log(randomHumanName + ' ' + phb_human_race);
        results += /*"<br>" + num_items + ": " + */randomHumanName + " - " + phb_human_race;
        return results;
    }
}

function phbRandomHumanNamePrint(gender, id, num){
    var names = phbRandomHumanName(gender,num);
    console.log(names);
    var num_items;
    var num;
    var results = '';
    for (num_items = 1; num_items <= num; num_items++) {
        results += "<br>" + num_items + ": " + names;
        }
    document.getElementById(id).innerHTML= results;
}

//function phbRandomHumanNamePrint(gender, id, num)
//    {
//    var num;
//    var num_items;
//    var gender = gender;
//    for (num_items = 1; num_items <= num; num_items++) {
//        var phb_human_racesR = randomHumanRacef();  // this will grab you the return value from firstFunction();
//        randomHumanRacef();
//        if (gender == 'female')
//            {
//            if (phb_human_racesR == 'Calishite')
//                { 
//                /*var randomHumanName = getRandomItems(phb_human_names_calshite_female,1) + " " + getRandomItems(phb_human_calshite_surnames,1);*/
//                var randomHumanName = multipleArrayItemsPrintCombine(phb_human_names_calshite_female, phb_human_calshite_surnames, 1);
//                }
//            else if (phb_human_racesR == 'Chondathan')
//                { 
//                var randomHumanName = multipleArrayItemsPrintCombine(phb_human_names_chondathan_female, phb_human_chondathan_surnames, 1);
//                }
//            else if (phb_human_racesR == 'Damaran')
//                {
//                var randomHumanName = multipleArrayItemsPrintCombine(phb_human_names_damaran_female, phb_human_damaran_surnames, 1);
//                }
//            else if (phb_human_racesR == 'Illuskan')
//                {
//                var randomHumanName = multipleArrayItemsPrintCombine(phb_human_names_illuskan_female, phb_human_illuskan_surnames, 1);
//                }
//            else if (phb_human_racesR == 'Mulan')
//                {
//                var randomHumanName = multipleArrayItemsPrintCombine(phb_human_names_mulan_female, phb_human_mulan_surnames, 1);
//                }
//            else if (phb_human_racesR == 'Rashemi')
//                {
//                var randomHumanName = multipleArrayItemsPrintCombine(phb_human_names_rashemi_female, phb_human_rashemi_surnames, 1);
//                }
//            else if (phb_human_racesR == 'Shou')
//                {        
//                var randomHumanName = multipleArrayItemsPrintCombine(phb_human_names_shou_female, phb_human_shou_surnames, 1);
//                }
//            else if (phb_human_racesR == 'Tethyrians')
//                { 
//                var randomHumanName = multipleArrayItemsPrintCombine(phb_human_names_chondathan_female, phb_human_chondathan_surnames, 1);
//                }
//            else (phb_human_racesR == 'Turami')
//                {
//                var randomHumanName = multipleArrayItemsPrintCombine(phb_human_names_turami_female, phb_human_turami_surnames, 1);
//                }
//            /*document.getElementById(id).innerHTML = randomHumanName + " - " + phb_human_racesR;*/
//            }
//        else if (gender == 'male')
//            {
//            if (phb_human_racesR == 'Calishite')
//                { 
//                /*var randomHumanName = getRandomItems(phb_human_names_calshite_male,1) + " " + getRandomItems(phb_human_calshite_surnames,1);*/
//                var randomHumanName = multipleArrayItemsPrintCombine(phb_human_names_calshite_male, phb_human_calshite_surnames, 1);
//                }
//            else if (phb_human_racesR == 'Chondathan')
//                { 
//                var randomHumanName = multipleArrayItemsPrintCombine(phb_human_names_chondathan_male, phb_human_chondathan_surnames, 1);
//                }
//            else if (phb_human_racesR == 'Damaran')
//                {
//                var randomHumanName = multipleArrayItemsPrintCombine(phb_human_names_damaran_male, phb_human_damaran_surnames, 1);
//                }
//            else if (phb_human_racesR == 'Illuskan')
//                {
//                var randomHumanName = multipleArrayItemsPrintCombine(phb_human_names_illuskan_male, phb_human_illuskan_surnames, 1);
//                }
//            else if (phb_human_racesR == 'Mulan')
//                {
//                var randomHumanName = multipleArrayItemsPrintCombine(phb_human_names_mulan_male, phb_human_mulan_surnames, 1);
//                }
//            else if (phb_human_racesR == 'Rashemi')
//                {
//                var randomHumanName = multipleArrayItemsPrintCombine(phb_human_names_rashemi_male, phb_human_rashemi_surnames, 1);
//                }
//            else if (phb_human_racesR == 'Shou')
//                {        
//                var randomHumanName = multipleArrayItemsPrintCombine(phb_human_names_shou_male, phb_human_shou_surnames, 1);
//                }
//            else if (phb_human_racesR == 'Tethyrians')
//                { 
//                var randomHumanName = multipleArrayItemsPrintCombine(phb_human_names_chondathan_male, phb_human_chondathan_surnames, 1);
//                }
//            else (phb_human_racesR == 'Turami')
//                {
//                var randomHumanName = multipleArrayItemsPrintCombine(phb_human_names_turami_male, phb_human_turami_surnames, 1);
//                }
//            /*document.getElementById(id).innerHTML = randomHumanName + " - " + phb_human_racesR;*/
//            }
//        else 
//        {
//            console.log('unknown human gender');
//        }
//        document.getElementById(id).innerHTML += "<br>" + num_items + ": " + randomHumanName + " - " + phb_human_racesR;
//    }
//}
//
function submitNameGeneratorPHB(id){
    var numberOfResults = document.getElementById("numberOfResults").value
    var num_items;
    var gender = document.getElementById("gender").value;
    var race = document.getElementById("race").value;
    for (num_items = 1; num_items <= numberOfResults; num_items++) {
        /*console.log(gender + ' ' + race + ' ' + numberOfResults);*/
        if (gender == 'male' && race == 'dwarf'){
            var names = multipleArrayItemsPrintCombine(phb_dwarf_names_male,phb_dwarf_names_clan,1);
            }
        else if (gender == 'female' && race == 'dwarf'){
            var names = multipleArrayItemsPrintCombine(phb_dwarf_names_female,phb_dwarf_names_clan,1);
            }
        else if (gender == 'male' && race == 'elf'){
            var names = multipleArrayItemsPrintCombine(phb_elf_names_male,phb_elf_family_names,1);
            }
        else if (gender == 'female' && race == 'elf'){
            var names = multipleArrayItemsPrintCombine(phb_elf_names_female,phb_elf_family_names,1);
            }
        else if (gender == 'male' && race == 'halfling'){
            var names = multipleArrayItemsPrintCombine(phb_halfling_names_male,phb_halfling_family_names,1);
            }
        else if (gender == 'female' && race == 'halfling'){
            var names = multipleArrayItemsPrintCombine(phb_halfling_names_female,phb_halfling_family_names,1);
            }
        else if (gender== 'male' && race == 'human'){
            var names = phbRandomHumanName('male',1);
            }
         else if (gender== 'female' && race == 'human'){
            var names = phbRandomHumanName('female',1);
            }
        else if (gender == 'male' && race == 'dragonborn'){
            var names = multipleArrayItemsPrintCombine(phb_dragonborn_names_male,phb_dragonborn_clan_names,1);
            }
        else if (gender == 'female' && race == 'dragonborn'){
            var names = multipleArrayItemsPrintCombine(phb_dragonborn_names_female,phb_dragonborn_clan_names,1);
            }
        else if (gender == 'male' && race == 'gnome'){
            var names = multipleArrayItemsPrintCombine(phb_gnome_names_male,phb_gnome_clan_names,1);
            }
        else if (gender == 'female' && race == 'gnome'){
            var names = multipleArrayItemsPrintCombine(phb_gnome_names_female,phb_gnome_clan_names,1);
            }
        /* add orc and half orc*/
        else if (gender == 'male' && race == 'orc'){
            var names = getRandomItems(phb_orc_names_male,1);
            }
        else if (gender == 'female' && race == 'orc'){
            var names = getRandomItems(phb_orc_names_female,1);
            }
        /* add tiefling*/
        else if (gender == 'male' && race == 'tiefling'){
            var names = getRandomItems(phb_tiefling_infernal_names_male,1);
            }
        else if (gender == 'female' && race == 'tiefling'){
            var names = getRandomItems(phb_tiefling_infernal_names_female,1);
            }
        else {
            console.log('Option Not selected');
            var names = 'Invalid Option Selected';
            }
        /*console.log(names);*/
        document.getElementById(id).innerHTML += "<br>" + num_items + ": " + names;
    }
}

function randomNameGen(arr1,arr2,arr3){
    var item1 = getRandomItems(arr1,1);
    var item2 = getRandomItems(arr2,1);
    var item3 = getRandomItems(arr3,1);
    return item1 + item2 + item3
}

function randomSurnameGen(arr1,arr2){
    var item1 = getRandomItems(arr1,1);
    var item2 = getRandomItems(arr2,1);
    return item1 + item2
}

function printFirstLastNameGenId(id){
    var result = randomNameGen(nameGenBeginning,nameGenMiddle,nameGenEnd);
    var result2 = randomSurnameGen(mshae_last_names_one,mshae_last_names_two);
    document.getElementById(id).innerHTML= result + ' ' + result2;
}

function printNameGenId(id){
    var result = randomNameGen(mshae_last_names_one,mshae_last_names_two);
    document.getElementById(id).innerHTML= result;
}

/* Using this because I'm lazy and I figure this is the easiest way to combine both parts of Mike Shae's without
   having to change everything and figure out how to just capitalize the first letter of the printed outcome. */
function toUpper(item) {
    return item.toUpperCase();
}

/* Decided to see if someone else made said function for just one letter */
function upperCaseFirst(string) 
{
    return string.charAt(0).toUpperCase() + string.slice(1);
}

function submitNameGenerator(id){
    var numberOfResults = document.getElementById("numberOfResults").value
    var num_items;
    var gender = document.getElementById("gender").value;
    var ethnicity = document.getElementById("ethnicity").value;
    for (num_items = 1; num_items <= numberOfResults; num_items++) {
        /*console.log(gender + ' ' + ethnicity + ' ' + numberOfResults);*/
        if (gender == 'male' && ethnicity == 'japanese'){
            var names = multipleArrayItemsPrintCombine(common_japanese_surnames,japanese_names_male,1);
            }
        else if (gender == 'female' && ethnicity == 'japanese'){
            var names = multipleArrayItemsPrintCombine(common_japanese_surnames,japanese_names_male,1);
            }
        else if (gender == 'unisex' && ethnicity == 'japanese'){
            var names = multipleArrayItemsPrintCombine(common_japanese_surnames,japanese_names_unisex,1);
            }
        else if (gender == 'male' && ethnicity == 'korean'){
            var names = multipleArrayItemsPrintCombine(common_korean_names_male,korean_surnames,1);
            }
        else if (gender == 'female' && ethnicity == 'korean'){
            var names = multipleArrayItemsPrintCombine(common_korean_names_female,korean_surnames,1);
            }
        else if (gender == 'unisex' && ethnicity == 'korean'){
            var names = multipleArrayItemsPrintCombine(korean_names_unisex,korean_surnames,1);
            }
        else if (gender == 'male' && ethnicity == 'irish'){
            var names = multipleArrayItemsPrintCombine(irish_names_male,irish_surnames,1);
            }
        else if (gender == 'female' && ethnicity == 'irish'){
            var names = multipleArrayItemsPrintCombine(irish_names_female,irish_surnames,1);
            }
        else if (gender == 'unisex' && ethnicity == 'irish'){
            var names = multipleArrayItemsPrintCombine(irish_names_unisex,irish_surnames,1);
            }
        else if (gender == 'male' && ethnicity == 'scottGaelic'){
            var names = multipleArrayItemsPrintCombine(scottish_gaelic_names_male,scottish_gaelic_surnames,1);
            }
        else if (gender == 'female' && ethnicity == 'scottGaelic'){
            var names = multipleArrayItemsPrintCombine(scottish_gaelic_names_female,scottish_gaelic_surnames,1);
            }
        else if (gender == 'unisex' && ethnicity == 'scottGaelic'){
            var names = multipleArrayItemsPrintCombine(scottish_gaelic_names_unisex,scottish_gaelic_surnames,1);
            }
        else if (gender == 'male' && ethnicity == 'norse'){
            var names = getRandomItems(norse_names_male,1);
            }
        else if (gender == 'female' && ethnicity == 'norse'){
            var names = getRandomItems(norse_names_female,1);
            }
        else if (gender == 'female' && ethnicity == 'valkarie'){
            var names = getRandomItems(valkarie_names,1);
            }
        else if (ethnicity == 'valkarie'){
            var names = 'All Valkarie are female.';
            }
        else if (ethnicity == 'egyptian'){
            var names = getRandomItems(egyptian_names,1);
            }
        else if (ethnicity == 'star'){
            var names = getRandomItems(star_names,1);
            }
        else if (ethnicity == 'random'){
            var names = randomNameGen(nameGenBeginning,nameGenMiddle,nameGenEnd) + ' ' + upperCaseFirst(randomSurnameGen(mshae_last_names_combined,mshae_last_names_combined));
            }
        else {
            console.log('Option Not selected');
            var names = 'Invalid Option Selected';
            }
        /*console.log(names);*/
        document.getElementById(id).innerHTML += "<br>" + num_items + ": " + names;
    }
}
