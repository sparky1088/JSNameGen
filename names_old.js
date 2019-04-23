// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
// modified from egyptian_set.js
// provided by donjon.bin.sh
// drawn from Kate Monk's Onomastikon, (c) 1997 Kate Monk
// 
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
// json format
// http://en.wikipedia.org/wiki/JSON

// Get random Item from array
Array.prototype.random = function () {
	return this[Math.floor((Math.random()*this.length))];
}

// function is needed for each array in order to call it into html as far as I can tell.
function randomDwarfNameFemalef()
        {
        var randomDwarfNameFemale = dwarf_names_female.random() + " " + dwarf_names_clan.random();
        document.getElementById("dwarfNameFemale").innerHTML = randomDwarfNameFemale;
        }
function randomDwarfNameMalef()
        {
        var randomDwarfNameMale = dwarf_names_male.random() + " " + dwarf_names_clan.random();
        document.getElementById("dwarfNameMale").innerHTML = randomDwarfNameMale;
        }
function randomElfChildNamef()
        {
        var randomElfChildName = elf_child_names.random() + " " + elf_family_names.random();
        document.getElementById("elfChildName").innerHTML = randomElfChildName;
        }
function randomElfNameFemalef()
        {
        var randomElfNameFemale = elf_names_female.random() + " " + elf_family_names.random();
        document.getElementById("elfNameFemale").innerHTML = randomElfNameFemale;
        }
function randomElfNameMalef()
        {
        var randomElfNameMale = elf_names_male.random() + " " + elf_family_names.random();
        document.getElementById("elfNameMale").innerHTML = randomElfNameMale;
        }
function randomHalflingNameFemalef()
        {
        var randomHalflingNameFemale = halfling_names_female.random() + " " + halfling_family_names.random();
        document.getElementById("halflingNameFemale").innerHTML = randomHalflingNameFemale;
        }
function randomHalflingNameMalef()
        {
        var randomHalflingNameMale = halfling_names_male.random() + " " + halfling_family_names.random();
        document.getElementById("halflingNameMale").innerHTML = randomHalflingNameMale;
        }
//function randomHumanNameFemalef()
//        {
//        var randomHumanNameFemale = human_names_female_all.random() + " " + human_surnames_all.random();
//        document.getElementById("humanNameFemale").innerHTML = randomHumanNameFemale;
//        }
//function randomHumanNameMalef()
//        {
//        var randomHumanNameMale = human_names_male_all.random() + " " + human_surnames_all.random();
//        document.getElementById("humanNameMale").innerHTML = randomHumanNameMale;
//        }

function randomHumanRacef()
        {
        var randomHumanRace = human_races.random();
        return randomHumanRace
        }

var human_races = [
    'Calishite','Chondathan','Damaran',
    'Illuskan','Mulan','Rashemi',
    'Shou','Tethyrians','Turami',
]
function randomHumanNameFemalef()
    {
    var human_racesR = randomHumanRacef();  // this will grab you the return value from firstFunction();
    randomHumanRacef();
    if (human_racesR == 'Calishite')
        { 
        var randomHumanNameFemale = human_names_calshite_female.random() + " " + human_calshite_surnames.random();
        document.getElementById("humanNameFemale").innerHTML = randomHumanNameFemale + " - " + human_racesR;
        }
    else if (human_racesR == 'Chondathan')
        { 
        var randomHumanNameFemale = human_names_chondathan_female.random() + " " + human_chondathan_surnames.random();
        document.getElementById("humanNameFemale").innerHTML = randomHumanNameFemale + " - " + human_racesR;
        }
    else if (human_racesR == 'Damaran')
        {
        var randomHumanNameFemale = human_names_damaran_female.random() + " " + human_damaran_surnames.random();
        document.getElementById("humanNameFemale").innerHTML = randomHumanNameFemale + " - " + human_racesR;
        }
    else if (human_racesR == 'Illuskan')
        {
        var randomHumanNameFemale = human_names_illuskan_female.random() + " " + human_illuskan_surnames.random();
        document.getElementById("humanNameFemale").innerHTML = randomHumanNameFemale + " - " + human_racesR;
        }
    else if (human_racesR == 'Mulan')
        {
        var randomHumanNameFemale = human_names_mulan_female.random() + " " + human_mulan_surnames.random();
        document.getElementById("humanNameFemale").innerHTML = randomHumanNameFemale + " - " + human_racesR;
        }
    else if (human_racesR == 'Rashemi')
        {
        var randomHumanNameFemale = human_names_rashemi_female.random() + " " + human_rashemi_surnames.random();
        document.getElementById("humanNameFemale").innerHTML = randomHumanNameFemale + " - " + human_racesR;
        }
    else if (human_racesR == 'Shou')
        {        
        var randomHumanNameFemale = human_names_shou_female.random() + " " + human_shou_surnames.random();
        document.getElementById("humanNameFemale").innerHTML = randomHumanNameFemale + " - " + human_racesR;
        }
    else if (human_racesR == 'Tethyrians')
        { 
        var randomHumanNameFemale = human_names_chondathan_female.random() + " " + human_chondathan_surnames.random();
        document.getElementById("humanNameFemale").innerHTML = randomHumanNameFemale + " - " + human_racesR;
        }
    else (human_racesR == 'Turami')
        {var randomHumanNameFemale = human_names_turami_female.random() + " " + human_turami_surnames.random();
        document.getElementById("humanNameFemale").innerHTML = randomHumanNameFemale + " - " + human_racesR;
        }
    }
    
function randomHumanNameMalef()
    {
    var human_racesR = randomHumanRacef();  // this will grab you the return value from firstFunction();
    randomHumanRacef();
    if (human_racesR == 'Calishite')
        { 
        var randomHumanNameMale = human_names_calshite_male.random() + " " + human_calshite_surnames.random();
        document.getElementById("humanNameMale").innerHTML = randomHumanNameMale + " - " + human_racesR;
        }
    else if (human_racesR == 'Chondathan')
        { 
        var randomHumanNameMale = human_names_chondathan_male.random() + " " + human_chondathan_surnames.random();
        document.getElementById("humanNameMale").innerHTML = randomHumanNameMale + " - " + human_racesR;
        }
    else if (human_racesR == 'Damaran')
        {
        var randomHumanNameMale = human_names_damaran_male.random() + " " + human_damaran_surnames.random();
        document.getElementById("humanNameMale").innerHTML = randomHumanNameMale + " - " + human_racesR;
        }
    else if (human_racesR == 'Illuskan')
        {
        var randomHumanNameMale = human_names_illuskan_male.random() + " " + human_illuskan_surnames.random();
        document.getElementById("humanNameMale").innerHTML = randomHumanNameMale + " - " + human_racesR;
        }
    else if (human_racesR == 'Mulan')
        {
        var randomHumanNameMale = human_names_mulan_male.random() + " " + human_mulan_surnames.random();
        document.getElementById("humanNameMale").innerHTML = randomHumanNameMale + " - " + human_racesR;
        }
    else if (human_racesR == 'Rashemi')
        {
        var randomHumanNameMale = human_names_rashemi_male.random() + " " + human_rashemi_surnames.random();
        document.getElementById("humanNameMale").innerHTML = randomHumanNameMale + " - " + human_racesR;
        }
    else if (human_racesR == 'Shou')
        {        
        var randomHumanNameMale = human_names_shou_male.random() + " " + human_shou_surnames.random();
        document.getElementById("humanNameMale").innerHTML = randomHumanNameMale + " - " + human_racesR;
        }
    else if (human_racesR == 'Tethyrians')
        { 
        var randomHumanNameMale = human_names_chondathan_male.random() + " " + human_chondathan_surnames.random();
        document.getElementById("humanNameMale").innerHTML = randomHumanNameMale + " - " + human_racesR;
        }
    else (human_racesR == 'Turami')
        {var randomHumanNameMale = human_names_turami_male.random() + " " + human_turami_surnames.random();
        document.getElementById("humanNameMale").innerHTML = randomHumanNameMale + " - " + human_racesR;
        }
    }

function randomEgyptianNamef()
	{
	var randomEgyptianName = egyptian_names.random();
	document.getElementById("egyptianName").innerHTML = randomEgyptianName;
	}
function randomKoreanNameMalef()
        {
        var randomKoreanNameMale = korean_names_male.random();
        document.getElementById("koreanNameMale").innerHTML = randomKoreanNameMale;
        }
function randomKoreanNameFemalef()
        {
        var randomKoreanNameFemale = korean_names_female.random();
        document.getElementById("koreanNameFemale").innerHTML = randomKoreanNameFemale;
        }
var dwarf_names_female = [
    'Amber','Artin','Audhild','Bardryn','Dagnal',
    'Diesa','Eldeth','Falkrunn','Finellen','Gunnloda',
    'Gurdis','Helja','Hlin','Kathra','Kristryd',
    'Ilde','Liftrasa','Mardred','Riswynn','Sannl',
    'Torbera','Torgga','Vistra'
]

var dwarf_names_male = [
    'Adrik','Alberich','Baern','Barendd','Brottor',
    'Bruenor','Dain','Darrak','Delg','Eberk',
    'Einkil','Fargrim','Flint','Gardain','Harbek',
    'Kildrak','Morgran','Orsik','Oskar','Rangrim',
    'Rurik','Taklinn','Thoradin','Thorin','Tordek',
    'Traubon','Travok','Ulfgar','Veit','Vondal'
]

var dwarf_names_clan = [
    'Balderk','Battlehammer','Brawnanvil',
    'Dankil','Fireforge','Frostbeard',
    'Gorunn','Holderhek','Ironfist',
    'Loderr','Lutgehr','Rumnaheim',
    'Strakeln','Torunn','Ungart'
]

var elf_child_names = [
    'Ara','Bryn','Del','Eryn','Faen',
    'Innil','Lael','Mella','Naill','Naeris',
    'Phann','Rael','Rinn','Sai','Syllin',
    'Thia','Vall'
]

var elf_names_female = [
    'Adrie','Althaea','Anastrianna','Andraste','Antinua',
    'Bethrynna','Birel','Caelynn','Drusilia','Enna',
    'Felosial','Ielenia','Jelenneth','Keyleth','Leshanna',
    'Lia','Meriele','Mialee','Naivara','Quelenna',
    'Quillathe','Sariel','Shanairra','Shava','Silaqui',
    'Theirastra','Thia','Vadania','Valanthe','Xanaphia'
]

var elf_names_male = [
    'Adran','Aelar','Aramil','Arannis','Aust',
    'Beiro','Berrian','Carric','Enialis','Erdan',
    'Erevan','Galinndan','Hadarai','Heian','Himo',
    'Immeral','Ivellios','Laucian','Mindartis','Paelias',
    'Peren','Quarion','Riardon','Rolen','Soveliss',
    'Thamior','Tharivol','Theren','Varis'
]

var elf_family_names = [
    'Amakiir (Gemflower)','Amastacia (Starflower)',
    'Galanodel (Moonwhisper)','Holimion (Diamonddew)',
    'Ilphelkiir (Gem blossom)','Liadon (Silverfrond)',
    'Meliamne (Oakenheel)','Naii\'lo (Nightbreeze)',
    'Siannodel (Moonbrook)','Xiloscient (Goldpetal)'
]

var halfling_names_male = [
    'Alton','Ander','Cade','Corrin','Eldon',
    'Errich','Finnan','Garret','Lindal','Lyle',
    'Merric','Milo','Osborn','Perrin','Reed',
    'Roscoe','Wellby'
]

var halfling_names_female = [
    'Andry','Bree','Callie','Cora','Euphemia',
    'Jillian','Kithri','Lavinia','Lidda','Merla',
    'Nedda','Paela','Portia','Seraphina','Shaena',
    'Trym','Vani','Verna'
]

var halfling_family_names = [
    'Brushgather','Goodbarrel','Greenbottle',
    'High-hill','Hilltopple','Leagallow',
    'Tealeaf','Thorngage','Tosscobble',
    'Underbough'
]

var human_names_calshite_male = [
    'Aseir','Bardeid','Haseid','Khemed','Mehmen',
    'Sudeiman','Zasheir'
]

var human_names_calshite_female = [
    'Atala','Ceidil','Hama','Jasmal','Meilil',
    'Seipora','Yasheira','Zasheida'
]

var human_calshite_surnames = [
    'Basha','Dumein','Jassan',
    'Khalid','Mostana','Pashar',
    'Rein'
]

var human_names_chondathan_male = [
    'Darvin','Dorn','Evendur','Gorstag','Grim',
    'Helm','Malark','Morn','Randal','Stedd'
]

var human_names_chondathan_female = [
    'Arveene','Esvele','Jhessail','Kerri','Lureene',
    'Miri','Rowan','Shandri','Tessele'
]

var human_chondathan_surnames = [
    'Amblecrown','Buckman','Dundragon',
    'Evenwood','Greycastle','Tallstag'
]

var human_names_damaran_male = [
    'Bor','Fodel','Glar','Grigor','Igan',
    'Ivor','Kosef','Mival','Orel','Pavel',
    'Sergor'
]

var human_names_damaran_female = [
    'Alethra','Kara','Katernin','Mara','Natali',
    'Olma','Tana','Zora'
]

var human_damaran_surnames = [
    'Bersk','Chernin','Dotsk',
    'Kulenov','Marsk','Nemetsk',
    'Shemov','Starag'
]

var human_names_illuskan_male = [
    'Ander','Blath','Bran','Frath','Geth',
    'Lander','Luth','Malcer','Stor','Taman',
    'Urth'
]

var human_names_illuskan_female = [
    'Amafrey','Betha','Cefrey','Kethra','Mara',
    'Olga','Silifrey','Westra'
]

var human_illuskan_surnames = [
    'Brightwood','Helder','Hornraven',
    'Lackman','Stormwind','Windrivver'
]

var human_names_mulan_male = [
    'Aoth','Bareris','Ehput-Ki','Kethoth','Mumed',
    'Ramas','So-Kehur','Thazar-De','Urhur'
]

var human_names_mulan_female = [
    'Arizima','Chathi','Nephis','Nulara','Murithi',
    'Sefris','Thola','Umara','Zolis'
]

var human_mulan_surnames = [
    'Ankhalab','Anskuld','Fezim',
    'Hahpet','Nathandem','Sepret',
    'Uuthrakt'
]


var human_names_rashemi_male = [
    'Borivik','Faurgar','Jandar','Kanithar','Madislak',
    'Ralmevik','Shaumar','Vladislak'
]

var human_names_rashemi_female = [
    'Fyevarra','Hulmarra','Immith','Imzel','Navarra',
    'Shevarra','Tammith','Yuldra'
]

var human_rashemi_surnames = [
    'Chergoba','Dyernina','Iltazyara',
    'Murnyethara','Stayanoga','Ulmokina'
]

var human_names_shou_male = [
    'An','Chen','Chi','Fai','Jiang',
    'Jun','Lian','Long','Meng','On',
    'Shan','Shui','Wen'
]

var human_names_shou_female = [
    'Bai','Chao','Jia','Lei','Mei',
    'Qiao','Shui','Tai'
]

var human_shou_surnames = [
    'Chien','Huang','Kao',
    'Kung','Lao','Ling',
    'Mei','Pin','Shin',
    'Sum','Tan','Wan'
]

var human_names_turami_male = [
    'Anton','Diero','Marcon','Pieron','Rimardo',
    'Rom ero','Salazar','Umbero'
]

var human_names_turami_female = [
    'Balama','Dona','Faila','Jalana','Luisa',
    'Marta','Quara','Selise','Vonda'
]

var human_turami_surnames = [
    'Agosto','Astorio','Calabra',
    'Domine','Falone','Marivaldi',
    'Pisacar','Ramondo'
]

/*
var human_names_male_all = [
    'Aseir','Bardeid','Haseid','Khemed','Mehmen',
    'Sudeiman','Zasheir','Darvin','Dorn','Evendur',
    'Gorstag','Grim','Helm','Malark','Morn',
    'Randal','Stedd','Bor','Fodel','Glar',
    'Grigor','Igan','Ivor','Kosef','Mival',
    'Orel','Pavel','Sergor','Ander','Blath',
    'Bran','Frath','Geth','Lander','Luth',
    'Malcer','Stor','Taman','Urth','Aoth',
    'Bareris','Ehput-Ki','Kethoth','Mumed','Ram as',
    'So-Kehur','Thazar-De','Urhur','Borivik','Faurgar',
    'Jandar','Kanithar','Madislak','Ralmevik','Shaumar',
    'Vladislak','An','Chen','Chi','Fai',
    'Jiang','Jun','Lian','Long','Meng',
    'On','Shan','Shui','Wen','Anton',
    'Diero','Marcon','Pieron','Rimardo','Rom ero',
    'Salazar','Umbero'
]

var human_names_female_all = [
    'Atala','Ceidil','Hama','Jasmal','Meilil',
    'Seipora','Yasheira','Zasheida','Arveene','Esvele',
    'Jhessail','Kerri','Lureene','Miri','Rowan',
    'Shandri','Tessele','Alethra','Kara','Katernin',
    'Mara','Natali','Olma','Tana','Zora',
    'Amafrey','Betha','Cefrey','Kethra','Mara',
    'Olga','Silifrey','Westra','Arizima','Chathi',
    'Nephis','Nulara','Murithi','Sefris','Thola',
    'Umara','Zolis','Fyevarra','Hulmarra','Immith',
    'Imzel','Navarra','Shevarra','Tammith','Yuldra',
    'Bai','Chao','Jia','Lei','Mei',
    'Qiao','Shui','Tai','Balama','Dona',
    'Faila','Jalana','Luisa','Marta','Quara',
    'Selise','Vonda'
]

var human_surnames_all = [
    'Basha','Dumein','Jassan',
    'Khalid','Mostana','Pashar',
    'Rein','Amblecrown','Buckman',
    'Dundragon','Evenwood','Greycastle',
    'Tallstag','Bersk','Chernin',
    'Dotsk','Kulenov','Marsk',
    'Nemetsk','Shemov','Starag',
    'Brightwood','Helder','Hornraven',
    'Lackman','Stormwind','Windrivver',
    'Ankhalab','Anskuld','Fezim',
    'Hahpet','Nathandem','Sepret',
    'Uuthrakt','Chergoba','Dyernina',
    'Iltazyara','Murnyethara','Stayanoga',
    'Ulmokina','Chien','Huang',
    'Kao','Kung','Lao',
    'Ling','Mei','Pin',
    'Shin','Sum','Tan',
    'Wan','Agosto','Astorio',
    'Calabra','Domine','Falone',
    'Marivaldi','Pisacar','Ramondo'
]
*/
var egyptian_names = [
    'Aakheperkare','Addaya','Ahhotpe','Ahmes','Ahmose',
    'Ahmose-saneit','Ahmose-sipari','Akencheres','Akunosh','Amenakht',
    'Amenakhte','Amenemhat','Amenemheb','Amenemopet','Amenhirkopshef',
    'Amenhirwenemef','Amenhotpe','Amenmesse','Amenmose','Amennestawy',
    'Amenope','Amenophis','Amenwahsu','Ameny','Amosis-ankh',
    'Amoy','Amunemhat','Amunherpanesha','Amunhotpe','Anen',
    'Ankh-Psamtek','Ankhef','Ankhefenamun','Ankhefenkhons','Ankhefenmut',
    'Ankhsheshonq','Ankhtify','Ankhtyfy','Ankhu','Ankhuemhesut',
    'Any','Apophis',
    'Baba','Baenre','Bak','Bakenkhons','Bakenkhonsu',
    'Bakenmut','Bakennefi','Bakenptah','Baky','Bata',
    'Bay','Bek','Bengay','Besenmut','Butehamun',
    'Denger','Deniuenkhons','Djadjaemankh','Djau','Djedefhor',
    'Djedhor','Djedhoriufankh','Djedi','Djedkhonsiufankh','Djedkhonsuefankh',
    'Djedptahefankh','Djedptahiufankh','Djehutmose','Djehuty','Djehutymose',
    'Djenutymes','Djeserka','Djeserkare','Djeserkheprure','Djesersukhons',
    'Djethutmose','Djhutmose',
    'Genubath','Gua',
    'Haankhef','Hapimen','Hapu','Hapuseneb','Hapymen',
    'Haremakhet','Haremsat','Harkhebi','Harkhuf','Harmhabi',
    'Harnakhte','Harsiese','Hay','Hemaka','Henenu',
    'Henuka','Heqaemeheh','Heqaib','Herenamenpenaef','Herihor',
    'Hesire','Hor','Horapollo','Hordedef','Horemheb',
    'Hori','Hornedjitef','Horpais','Horwebbefer','Hrihor',
    'Hunefer','Huy','Huya',
    'Iawy','Ibana','Ibe','Idy','Ikeni',
    'Ikui','Imhotep','Inarus','Inebni','Ineni',
    'Inyotef','Ipi','Ipuwer','Ipuy','Ipy',
    'Ishpi','Iu-Amun','Iufankh','Iufenamun','Iunmin',
    'Iuseneb','Iuwlot','Iyerniutef','Iyimennuef','Iymeru',
    'Jarha',
    'Kadjadja','Kahma','Kaka','Kanakht','Karnefhere',
    'Katenen','Kawab','Kay','Kemuny','Kenamun',
    'Kenefer','Kerasher','Kha','Khaemhet','Khaemnetjeru',
    'Khaemwaset','Khahor','Khakheperraseneb','Khay','Khensthoth',
    'Kheruef','Khety','Khnemibre','Khnumhotep','Khnumhotpe',
    'Khons','Khonsirdais','Khonskhu','Khonsuemwaset','Khufukhaf',
    'Khui','Kuenre','Kysen',
    'Maakha','Mahu','Mahuhy','Maiherpri','Manakhtuf',
    'Manetho','Masaharta','May','Maya','Mehy',
    'Meketre','Mekhu','Men','Menkheperraseneb','Menkheperre',
    'Menmet-Ra','Menna','Mentuemhat','Mentuherkhepshef','Meremptor',
    'Merenamun','Merenkhons','Merenptah','Mereruka','Merka',
    'Mernebptah','Mery','Meryamun','Meryatum','Meryawy',
    'Merymose','Meryptah','Meryrahashtef','Meryre','Mes',
    'Min','Minkhat','Minmose','Minnakht','Mokhtar',
    'Montjuemhat','Montjuhirkopshef','Montuemhet','Mose',
    'Naga-ed-der','Nakhthorheb','Nakhtimenwast','Nakhtmin','Nakhtnebef',
    'Naneferkeptah','Nebamun','Nebankh','Nebemakst','Nebhotep',
    'Nebimes','Nebitka','Nebmaetre','Nebnefer','Nebnetjeru',
    'Nebseni','Nebseny','Nebwennenef','Nechoutes','Neferhotep',
    'Neferhotpe','Neferkheperuhersekheper','Nefermaet','Nefermenu','Neferrenpet',
    'Neferti','Nehasy','Nehi','Nekau','Nekhwemmut',
    'Nendjbaendjed','Nenedjebaendjed','Neneferkaptah','Nenkhefta','Nes',
    'Nesamun','Neshi','Neshorpakhered','Neskhons','Nesmont',
    'Nespaherenhat','Nespakashuty','Nespatytawy','Nespherenhat','Nessuimenopet',
    'Nestanebetasheru','Nestefnut','Netihur','Nigmed','Nimlot',
    'Niumateped',
    'Pa-Siamun','Pabasa','Pabernefy','Padiamenet','Padiamenipet',
    'Padiamun','Padineith','Paheripedjet','Pairy','Pait',
    'Pakharu','Pakhneter','Pamont','Pamose','Pamu',
    'Panas','Paneb','Paneferher','Panehesy','Paperpa',
    'Paramesse','Parennefer','Pasebakhaenniut','Pasekhonsu','Paser',
    'Pashedbast','Pashedu','Pasherdjehuty','Pawiaeadja','Paynedjem',
    'Payneferher','Pediamun','Pediese','Pedihor','Penamun',
    'Penbuy','Penmaat','Pennestawy','Pentaweret','Pentu',
    'Pepynakhte','Peraha','Pinhasy','Pinotmou','Prahotpe',
    'Pramessu','Preherwenemef','Prehirwennef','Prepayit','Psamtek',
    'Psenamy','Psenmin','Ptahhemakhet','Ptahhemhat-Ty','Ptahhotep',
    'Ptahhudjankhef','Ptahmose','Ptahshepses',
    'Qenymin',
    'Rahotep','Rahotpe','Raia','Ramessenakhte','Ramessu',
    'Rekhmire','Reuser','Rewer','Roma-Roy','Rudamun',
    'Sabef','Sabni','Salatis','Samut','Sanehet',
    'Sasobek','Sawesit','Scepter','Sekhemkare','Sekhmire',
    'Seneb','Senebtyfy','Senemut','Senmen','Sennedjem',
    'Sennefer','Sennufer','Senui','Senwosret','Serapion',
    'Sese','Setau','Setep','Sethe','Sethherwenemef',
    'Sethhirkopshef','Sethnakhte','Sethnakte','Sethy','Setne',
    'Setymerenptah','Shedsunefertum','Shemay','Shepenwepet','Si-Mut',
    'Siamun','Siese','Sinuhe','Sipair','Sneferu',
    'Somtutefnakhte','Surero','Suty','Sutymose',
    'Takairnayu','Takany','Tasetmerydjehuty','Tayenimu','Tefibi',
    'Tenermentu','Teti-en','Tetisheri','Tjaenhebyu','Tjahapimu',
    'Tjaroy','Tjauemdi','Tjenna','Tjety','To',
    'Tui','Tutu','Tymisba',
    'Udjahorresne','Udjahorresneith','Uni','Userhet','Usermontju',
    'Wadjmose','Wahibre-Teni','Wahka','Webaoner','Webensenu',
    'Wedjakhons','Wenamun','Wendjabaendjed','Wendjebaendjed','Weni',
    'Wennefer','Wennufer','Wepmose','Wepwawetmose','Werdiamenniut',
    'Werirenptah',
    'Yanhamu','Yey','Yii','Yuya',
    'Zazamoukh'
  ];

var korean_names_male = [
    'Na-moo','Dal','Mit-eum','Beo-deul','Bitgaram',
    'Saem','Han-gyeol','Han-gil','Him-chan','Kang-min',
    'Kyung-gu','Kyung-mo','Kyung-taek','Kwang-jo','Nam-kyu',
    'Deok-su','Dong-gun','Mu-yeol','Mu-young','Byung-hun',
    'Seong-han','Seung-heon','Oh-seong','Yo-han','Yi-soo',
    'Il-sung','Jae-beom','Jae-seop','Chul-soon','Chi-won',
    'Hyun-seung','Gun','Kwang','Woong','Chul',
    'Hyuk','Ho','Hoon','Ga-ram','Na-ra',
    'Noo-ri','Du-ri','Ba-ram','Sol','Seul-ki',
    'Woo-ri','Ha-neul','Ha-da','Ha-ru','Ha-yan',
    'Han-wool','Kyung-lim','Kyung-wan','Nam-sun',
    'Young-shin','Ja-kyung','Jae-gyu','Jae-shin','Jae-in',
    'Ji-hae','Sang','Seong','Eun','Jae',
    'Ji','Hyun'
  ];

var korean_names_female = [
    'Ga-eul','Gyeo-wool','Go-eun','Gu-reum','Kkot',
    'Na-rae','Na-ri','Na-bi','No-eul','Da-rae',
    'Da-som','Dal-rae','Ra-on','Ra-woom','Ma-eum',
    'Mi-rae','Ba-da','Byeol','Bom','Bo-da',
    'Bo-ra','Bo-ram','Bit-na','Bi',
    'Sa-rang','Sandara','Sae-ron','Sae-rom',
    'Sae-byeok','So-ra','So-ri','Ah-reum','Ah-ri',
    'Yeo-reum','Ah-rong','I-seul','Jo-eun','Cho-rong',
    'Ha-na','Ha-nui','Eun-byul','Eun-bi','Ga-young',
    'Na-young','Mi-ran','Min-seo','Sook-ja','Ae-jung',
    'Yeo-jin','Young-ae','Yu-ri','Eun-chae','Yi-kyung',
    'Jang-mi','Hye-rin','Hye-rim','Lin','Ga-ram',
    'Na-ra','Noo-ri','Du-ri','Ba-ram','Sol',
    'Seul-ki','Woo-ri','Ha-neul','Ha-da','Ha-ru',
    'Ha-yan','Han-wool','Kyung-lim','Kyung-wan','Nam-sun',
    'Young-shin','Ja-kyung','Jae-gyu','Jae-shin','Jae-in',
    'Ji-hae','Sang','Seong','Eun','Jae',
    'Ji','Hyun'
  ];


// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
