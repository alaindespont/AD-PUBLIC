function KeepCount() {
var MaxSymboles = 0;
if (document.dhd.checkSymbole1.checked){MaxSymboles = MaxSymboles + 1}
if (document.dhd.checkSymbole2.checked){MaxSymboles = MaxSymboles + 1}
if (document.dhd.checkSymbole3.checked){MaxSymboles = MaxSymboles + 1}
if (document.dhd.checkSymbole4.checked){MaxSymboles = MaxSymboles + 1}
if (document.dhd.checkSymbole5.checked){MaxSymboles = MaxSymboles + 1}
if (document.dhd.checkSymbole6.checked){MaxSymboles = MaxSymboles + 1}
if (document.dhd.checkSymbole7.checked){MaxSymboles = MaxSymboles + 1}
if (document.dhd.checkSymbole8.checked){MaxSymboles = MaxSymboles + 1}
if (document.dhd.checkSymbole9.checked){MaxSymboles = MaxSymboles + 1}
if (document.dhd.checkSymbole10.checked){MaxSymboles = MaxSymboles + 1}
if (document.dhd.checkSymbole11.checked){MaxSymboles = MaxSymboles + 1}
if (document.dhd.checkSymbole12.checked){MaxSymboles = MaxSymboles + 1}
if (document.dhd.checkSymbole13.checked){MaxSymboles = MaxSymboles + 1}
if (document.dhd.checkSymbole14.checked){MaxSymboles = MaxSymboles + 1}
if (document.dhd.checkSymbole15.checked){MaxSymboles = MaxSymboles + 1}
if (document.dhd.checkSymbole16.checked){MaxSymboles = MaxSymboles + 1}
if (document.dhd.checkSymbole17.checked){MaxSymboles = MaxSymboles + 1}
if (document.dhd.checkSymbole18.checked){MaxSymboles = MaxSymboles + 1}
if (document.dhd.checkSymbole19.checked){MaxSymboles = MaxSymboles + 1}
if (document.dhd.checkSymbole20.checked){MaxSymboles = MaxSymboles + 1}
if (document.dhd.checkSymbole21.checked){MaxSymboles = MaxSymboles + 1}
if (document.dhd.checkSymbole22.checked){MaxSymboles = MaxSymboles + 1}
if (document.dhd.checkSymbole23.checked){MaxSymboles = MaxSymboles + 1}
if (document.dhd.checkSymbole24.checked){MaxSymboles = MaxSymboles + 1}
if (document.dhd.checkSymbole25.checked){MaxSymboles = MaxSymboles + 1}
if (document.dhd.checkSymbole26.checked){MaxSymboles = MaxSymboles + 1}
if (document.dhd.checkSymbole27.checked){MaxSymboles = MaxSymboles + 1}
if (document.dhd.checkSymbole28.checked){MaxSymboles = MaxSymboles + 1}
if (document.dhd.checkSymbole29.checked){MaxSymboles = MaxSymboles + 1}
if (document.dhd.checkSymbole30.checked){MaxSymboles = MaxSymboles + 1}
if (document.dhd.checkSymbole31.checked){MaxSymboles = MaxSymboles + 1}
if (document.dhd.checkSymbole32.checked){MaxSymboles = MaxSymboles + 1}
if (document.dhd.checkSymbole33.checked){MaxSymboles = MaxSymboles + 1}
if (document.dhd.checkSymbole34.checked){MaxSymboles = MaxSymboles + 1}
if (document.dhd.checkSymbole35.checked){MaxSymboles = MaxSymboles + 1}
if (document.dhd.checkSymbole36.checked){MaxSymboles = MaxSymboles + 1}
if (document.dhd.checkSymbole37.checked){MaxSymboles = MaxSymboles + 1}
if (document.dhd.checkSymbole38.checked){MaxSymboles = MaxSymboles + 1}
if (document.dhd.checkSymbole39.checked){MaxSymboles = MaxSymboles + 1}
if (MaxSymboles == 8){alert('Vous ne pouvez selectionner que 7 coordonnées.');document.dhd; return false;}
if (MaxSymboles > 0 && MaxSymboles < 7 && document.dhd.checkSymbole1.checked){alert("Selectionnez le point d'origine en dernier.");document.dhd; return false;}
if (MaxSymboles == 7 && document.dhd.checkSymbole1.checked == false){alert("Selectionnez le point d'origine en dernier.");document.dhd; return false;}
}; // Fin KeepCount


function Coord(){
	var checked = [];
	$('.checkSymbole').change(function(e) {
   	var checkbox = $(this);
    	var value = $(this).val();
    	var index;
     	//if checkbox is checked add to array 
     	//else remove it
    		if (checkbox.is(':checked')) {
        	checked.push(value);
    		} 
		else {
        	index = checked.indexOf(value);  // find index of value in array
        	checked.splice(index, 1); // remove it
    		}
    	console.log(checked);
	Coord1 = checked[0];
	Coord2 = checked[1];
	Coord3 = checked[2];
	Coord4 = checked[3];
	Coord5 = checked[4];
	Coord6 = checked[5];
	Coord7 = checked[6];
}); // Fin de la fonction de vérification/récupération des valeurs des checkbox
} // Fin de la fonction coord






function SelectCoord(){
document.dhd.checkSymbole1.checked = false;
document.dhd.checkSymbole2.checked = false;
document.dhd.checkSymbole3.checked = false;
document.dhd.checkSymbole4.checked = false;
document.dhd.checkSymbole5.checked = false;
document.dhd.checkSymbole6.checked = false;
document.dhd.checkSymbole7.checked = false;
document.dhd.checkSymbole8.checked = false;
document.dhd.checkSymbole9.checked = false;
document.dhd.checkSymbole10.checked = false;
document.dhd.checkSymbole11.checked = false;
document.dhd.checkSymbole12.checked = false;
document.dhd.checkSymbole13.checked = false;
document.dhd.checkSymbole14.checked = false;
document.dhd.checkSymbole15.checked = false;
document.dhd.checkSymbole16.checked = false;
document.dhd.checkSymbole17.checked = false;
document.dhd.checkSymbole18.checked = false;
document.dhd.checkSymbole19.checked = false;
document.dhd.checkSymbole20.checked = false;
document.dhd.checkSymbole21.checked = false;
document.dhd.checkSymbole22.checked = false;
document.dhd.checkSymbole23.checked = false;
document.dhd.checkSymbole24.checked = false;
document.dhd.checkSymbole25.checked = false;
document.dhd.checkSymbole26.checked = false;
document.dhd.checkSymbole27.checked = false;
document.dhd.checkSymbole28.checked = false;
document.dhd.checkSymbole29.checked = false;
document.dhd.checkSymbole30.checked = false;
document.dhd.checkSymbole31.checked = false;
document.dhd.checkSymbole32.checked = false;
document.dhd.checkSymbole33.checked = false;
document.dhd.checkSymbole34.checked = false;
document.dhd.checkSymbole35.checked = false;
document.dhd.checkSymbole36.checked = false;
document.dhd.checkSymbole37.checked = false;
document.dhd.checkSymbole38.checked = false;
document.dhd.checkSymbole39.checked = false;
	var Select = document.getElementById('select');
	var OptionChoisie = Select.options[Select.selectedIndex].value;

	if(OptionChoisie == 'none'){
	alert('Sélectionnez une adresse.');
	location.reload(true);
	}

	if (OptionChoisie == 'abydos'){
	Coord1 = 27;
	Coord2 = 7;
	Coord3 = 15;
	Coord4 = 32;
	Coord5 = 12;
	Coord6 = 30;
	Coord7 = 1;
	document.dhd.checkSymbole27.checked = true;
	document.dhd.checkSymbole7.checked = true;
	document.dhd.checkSymbole15.checked = true;
	document.dhd.checkSymbole32.checked = true;
	document.dhd.checkSymbole12.checked = true;
	document.dhd.checkSymbole30.checked = true;
	document.dhd.checkSymbole1.checked = true;
	}

	if (OptionChoisie == 'camelot'){
	Coord1 = 20;
	Coord2 = 2;
	Coord3 = 35;
	Coord4 = 8;
	Coord5 = 26;
	Coord6 = 16;
	Coord7 = 1;
	document.dhd.checkSymbole20.checked = true;
	document.dhd.checkSymbole2.checked = true;
	document.dhd.checkSymbole35.checked = true;
	document.dhd.checkSymbole8.checked = true;
	document.dhd.checkSymbole26.checked = true;
	document.dhd.checkSymbole16.checked = true;
	document.dhd.checkSymbole1.checked = true;
	}

	if (OptionChoisie == 'chulak'){
	Coord1 = 9;
	Coord2 = 2;
	Coord3 = 23;
	Coord4 = 15;
	Coord5 = 37;
	Coord6 = 20;
	Coord7 = 1;
	document.dhd.checkSymbole9.checked = true;
	document.dhd.checkSymbole2.checked = true;
	document.dhd.checkSymbole23.checked = true;
	document.dhd.checkSymbole15.checked = true;
	document.dhd.checkSymbole37.checked = true;
	document.dhd.checkSymbole20.checked = true;
	document.dhd.checkSymbole1.checked = true;
	}

	if (OptionChoisie == 'dakara'){
	Coord1 = 16;
	Coord2 = 28;
	Coord3 = 3;
	Coord4 = 8;
	Coord5 = 33;
	Coord6 = 4;
	Coord7 = 1;
	document.dhd.checkSymbole16.checked = true;
	document.dhd.checkSymbole28.checked = true;
	document.dhd.checkSymbole3.checked = true;
	document.dhd.checkSymbole8.checked = true;
	document.dhd.checkSymbole33.checked = true;
	document.dhd.checkSymbole4.checked = true;
	document.dhd.checkSymbole1.checked = true;
	}

	if (OptionChoisie == 'edora'){
	Coord1 = 28;
	Coord2 = 38;
	Coord3 = 35;
	Coord4 = 9;
	Coord5 = 15;
	Coord6 = 3;
	Coord7 = 1;
	document.dhd.checkSymbole28.checked = true;
	document.dhd.checkSymbole38.checked = true;
	document.dhd.checkSymbole35.checked = true;
	document.dhd.checkSymbole9.checked = true;
	document.dhd.checkSymbole15.checked = true;
	document.dhd.checkSymbole3.checked = true;
	document.dhd.checkSymbole1.checked = true;
	}

	if (OptionChoisie == 'euronda'){
	Coord1 = 30;
	Coord2 = 27;
	Coord3 = 6;
	Coord4 = 7;
	Coord5 = 18;
	Coord6 = 16;
	Coord7 = 1;
	document.dhd.checkSymbole30.checked = true;
	document.dhd.checkSymbole27.checked = true;
	document.dhd.checkSymbole6.checked = true;
	document.dhd.checkSymbole7.checked = true;
	document.dhd.checkSymbole18.checked = true;
	document.dhd.checkSymbole16.checked = true;
	document.dhd.checkSymbole1.checked = true;
	}

	if (OptionChoisie == 'kheb'){
	Coord1 = 26;
	Coord2 = 35;
	Coord3 = 6;
	Coord4 = 8;
	Coord5 = 23;
	Coord6 = 14;
	Coord7 = 1;
	document.dhd.checkSymbole26.checked = true;
	document.dhd.checkSymbole35.checked = true;
	document.dhd.checkSymbole6.checked = true;
	document.dhd.checkSymbole8.checked = true;
	document.dhd.checkSymbole23.checked = true;
	document.dhd.checkSymbole14.checked = true;
	document.dhd.checkSymbole1.checked = true;
	}

	if (OptionChoisie == 'sitealpha'){
	Coord1 = 33;
	Coord2 = 31;
	Coord3 = 27;
	Coord4 = 37;
	Coord5 = 35;
	Coord6 = 34;
	Coord7 = 1;
	document.dhd.checkSymbole33.checked = true;
	document.dhd.checkSymbole31.checked = true;
	document.dhd.checkSymbole27.checked = true;
	document.dhd.checkSymbole37.checked = true;
	document.dhd.checkSymbole35.checked = true;
	document.dhd.checkSymbole34.checked = true;
	document.dhd.checkSymbole1.checked = true;
	}

	if (OptionChoisie == 'taonas'){
	Coord1 = 35;
	Coord2 = 3;
	Coord3 = 31;
	Coord4 = 29;
	Coord5 = 5;
	Coord6 = 17;
	Coord7 = 1;
	document.dhd.checkSymbole35.checked = true;
	document.dhd.checkSymbole3.checked = true;
	document.dhd.checkSymbole31.checked = true;
	document.dhd.checkSymbole29.checked = true;
	document.dhd.checkSymbole5.checked = true;
	document.dhd.checkSymbole17.checked = true;
	document.dhd.checkSymbole1.checked = true;
	}

	if (OptionChoisie == 'tartarus'){
	Coord1 = 33;
	Coord2 = 28;
	Coord3 = 23;
	Coord4 = 26;
	Coord5 = 16;
	Coord6 = 31;
	Coord7 = 1;
	document.dhd.checkSymbole33.checked = true;
	document.dhd.checkSymbole28.checked = true;
	document.dhd.checkSymbole23.checked = true;
	document.dhd.checkSymbole26.checked = true;
	document.dhd.checkSymbole16.checked = true;
	document.dhd.checkSymbole31.checked = true;
	document.dhd.checkSymbole1.checked = true;
	}

	if (OptionChoisie == 'tollana'){
	Coord1 = 4;
	Coord2 = 29;
	Coord3 = 8;
	Coord4 = 22;
	Coord5 = 18;
	Coord6 = 25;
	Coord7 = 1;
	document.dhd.checkSymbole4.checked = true;
	document.dhd.checkSymbole29.checked = true;
	document.dhd.checkSymbole8.checked = true;
	document.dhd.checkSymbole22.checked = true;
	document.dhd.checkSymbole18.checked = true;
	document.dhd.checkSymbole25.checked = true;
	document.dhd.checkSymbole1.checked = true;
	}
};

function LancementMission(){
	if (
	(Coord1 == undefined) ||
	(Coord2 == undefined) ||
	(Coord3 == undefined) ||
	(Coord4 == undefined) ||
	(Coord5 == undefined) ||
	(Coord6 == undefined) ||
	(Coord7 == undefined)){
	alert("Vous devez sélectionner 7 coordonnées pour lancer la procédure d'ouverture");
	document.dhd; return false;
	}

	if(Coord1 == 2){Pos_Symbole1 = 40-1*9.230769}
	if(Coord1 == 3){Pos_Symbole1 = 40-2*9.230769}
	if(Coord1 == 4){Pos_Symbole1 = 40-3*9.230769}
	if(Coord1 == 5){Pos_Symbole1 = 40-4*9.230769}
	if(Coord1 == 6){Pos_Symbole1 = 40-5*9.230769}
	if(Coord1 == 7){Pos_Symbole1 = 40-6*9.230769}
	if(Coord1 == 8){Pos_Symbole1 = 40-7*9.230769}
	if(Coord1 == 9){Pos_Symbole1 = 40-8*9.230769}
	if(Coord1 == 10){Pos_Symbole1 = 40-9*9.230769}
	if(Coord1 == 11){Pos_Symbole1 = 40-10*9.230769}
	if(Coord1 == 12){Pos_Symbole1 = 40-11*9.230769}
	if(Coord1 == 13){Pos_Symbole1 = 40-12*9.230769}
	if(Coord1 == 14){Pos_Symbole1 = 40-13*9.230769}
	if(Coord1 == 15){Pos_Symbole1 = 40-14*9.230769}
	if(Coord1 == 16){Pos_Symbole1 = 40-15*9.230769}
	if(Coord1 == 17){Pos_Symbole1 = 40-16*9.230769}
	if(Coord1 == 18){Pos_Symbole1 = 40-17*9.230769}
	if(Coord1 == 19){Pos_Symbole1 = 40-18*9.230769}
	if(Coord1 == 20){Pos_Symbole1 = 40-19*9.230769}
	if(Coord1 == 21){Pos_Symbole1 = 40-20*9.230769}
	if(Coord1 == 22){Pos_Symbole1 = 40-21*9.230769}
	if(Coord1 == 23){Pos_Symbole1 = 40-22*9.230769}
	if(Coord1 == 24){Pos_Symbole1 = 40-23*9.230769}
	if(Coord1 == 25){Pos_Symbole1 = 40-24*9.230769}
	if(Coord1 == 26){Pos_Symbole1 = 40-25*9.230769}
	if(Coord1 == 27){Pos_Symbole1 = 40-26*9.230769}
	if(Coord1 == 28){Pos_Symbole1 = 40-27*9.230769}
	if(Coord1 == 29){Pos_Symbole1 = 40-28*9.230769}
	if(Coord1 == 30){Pos_Symbole1 = 40-29*9.230769}
	if(Coord1 == 31){Pos_Symbole1 = 40-30*9.230769}
	if(Coord1 == 32){Pos_Symbole1 = 40-31*9.230769}
	if(Coord1 == 33){Pos_Symbole1 = 40-32*9.230769}
	if(Coord1 == 34){Pos_Symbole1 = 40-33*9.230769}
	if(Coord1 == 35){Pos_Symbole1 = 40-34*9.230769}
	if(Coord1 == 36){Pos_Symbole1 = 40-35*9.230769}
	if(Coord1 == 37){Pos_Symbole1 = 40-36*9.230769}
	if(Coord1 == 38){Pos_Symbole1 = 40-37*9.230769}
	if(Coord1 == 39){Pos_Symbole1 = 40-38*9.230769}

	if(Coord2 == 2){Pos_Symbole2 = 80-1*9.230769}
	if(Coord2 == 3){Pos_Symbole2 = 80-2*9.230769}
	if(Coord2 == 4){Pos_Symbole2 = 80-3*9.230769}
	if(Coord2 == 5){Pos_Symbole2 = 80-4*9.230769}
	if(Coord2 == 6){Pos_Symbole2 = 80-5*9.230769}
	if(Coord2 == 7){Pos_Symbole2 = 80-6*9.230769}
	if(Coord2 == 8){Pos_Symbole2 = 80-7*9.230769}
	if(Coord2 == 9){Pos_Symbole2 = 80-8*9.230769}
	if(Coord2 == 10){Pos_Symbole2 = 80-9*9.230769}
	if(Coord2 == 11){Pos_Symbole2 = 80-10*9.230769}
	if(Coord2 == 12){Pos_Symbole2 = 80-11*9.230769}
	if(Coord2 == 13){Pos_Symbole2 = 80-12*9.230769}
	if(Coord2 == 14){Pos_Symbole2 = 80-13*9.230769}
	if(Coord2 == 15){Pos_Symbole2 = 80-14*9.230769}
	if(Coord2 == 16){Pos_Symbole2 = 80-15*9.230769}
	if(Coord2 == 17){Pos_Symbole2 = 80-16*9.230769}
	if(Coord2 == 18){Pos_Symbole2 = 80-17*9.230769}
	if(Coord2 == 19){Pos_Symbole2 = 80-18*9.230769}
	if(Coord2 == 20){Pos_Symbole2 = 80-19*9.230769}
	if(Coord2 == 21){Pos_Symbole2 = 80-20*9.230769}
	if(Coord2 == 22){Pos_Symbole2 = 80-21*9.230769}
	if(Coord2 == 23){Pos_Symbole2 = 80-22*9.230769}
	if(Coord2 == 24){Pos_Symbole2 = 80-23*9.230769}
	if(Coord2 == 25){Pos_Symbole2 = 80-24*9.230769}
	if(Coord2 == 26){Pos_Symbole2 = 80-25*9.230769}
	if(Coord2 == 27){Pos_Symbole2 = 80-26*9.230769}
	if(Coord2 == 28){Pos_Symbole2 = 80-27*9.230769}
	if(Coord2 == 29){Pos_Symbole2 = 80-28*9.230769}
	if(Coord2 == 30){Pos_Symbole2 = 80-29*9.230769}
	if(Coord2 == 31){Pos_Symbole2 = 80-30*9.230769}
	if(Coord2 == 32){Pos_Symbole2 = 80-31*9.230769}
	if(Coord2 == 33){Pos_Symbole2 = 80-32*9.230769}
	if(Coord2 == 34){Pos_Symbole2 = 80-33*9.230769}
	if(Coord2 == 35){Pos_Symbole2 = 80-34*9.230769}
	if(Coord2 == 36){Pos_Symbole2 = 80-35*9.230769}
	if(Coord2 == 37){Pos_Symbole2 = 80-36*9.230769}
	if(Coord2 == 38){Pos_Symbole2 = 80-37*9.230769}
	if(Coord2 == 39){Pos_Symbole2 = 80-38*9.230769}

	if(Coord3 == 2){Pos_Symbole3 = 120-1*9.230769}
	if(Coord3 == 3){Pos_Symbole3 = 120-2*9.230769}
	if(Coord3 == 4){Pos_Symbole3 = 120-3*9.230769}
	if(Coord3 == 5){Pos_Symbole3 = 120-4*9.230769}
	if(Coord3 == 6){Pos_Symbole3 = 120-5*9.230769}
	if(Coord3 == 7){Pos_Symbole3 = 120-6*9.230769}
	if(Coord3 == 8){Pos_Symbole3 = 120-7*9.230769}
	if(Coord3 == 9){Pos_Symbole3 = 120-8*9.230769}
	if(Coord3 == 10){Pos_Symbole3 = 120-9*9.230769}
	if(Coord3 == 11){Pos_Symbole3 = 120-10*9.230769}
	if(Coord3 == 12){Pos_Symbole3 = 120-11*9.230769}
	if(Coord3 == 13){Pos_Symbole3 = 120-12*9.230769}
	if(Coord3 == 14){Pos_Symbole3 = 120-13*9.230769}
	if(Coord3 == 15){Pos_Symbole3 = 120-14*9.230769}
	if(Coord3 == 16){Pos_Symbole3 = 120-15*9.230769}
	if(Coord3 == 17){Pos_Symbole3 = 120-16*9.230769}
	if(Coord3 == 18){Pos_Symbole3 = 120-17*9.230769}
	if(Coord3 == 19){Pos_Symbole3 = 120-18*9.230769}
	if(Coord3 == 20){Pos_Symbole3 = 120-19*9.230769}
	if(Coord3 == 21){Pos_Symbole3 = 120-20*9.230769}
	if(Coord3 == 22){Pos_Symbole3 = 120-21*9.230769}
	if(Coord3 == 23){Pos_Symbole3 = 120-22*9.230769}
	if(Coord3 == 24){Pos_Symbole3 = 120-23*9.230769}
	if(Coord3 == 25){Pos_Symbole3 = 120-24*9.230769}
	if(Coord3 == 26){Pos_Symbole3 = 120-25*9.230769}
	if(Coord3 == 27){Pos_Symbole3 = 120-26*9.230769}
	if(Coord3 == 28){Pos_Symbole3 = 120-27*9.230769}
	if(Coord3 == 29){Pos_Symbole3 = 120-28*9.230769}
	if(Coord3 == 30){Pos_Symbole3 = 120-29*9.230769}
	if(Coord3 == 31){Pos_Symbole3 = 120-30*9.230769}
	if(Coord3 == 32){Pos_Symbole3 = 120-31*9.230769}
	if(Coord3 == 33){Pos_Symbole3 = 120-32*9.230769}
	if(Coord3 == 34){Pos_Symbole3 = 120-33*9.230769}
	if(Coord3 == 35){Pos_Symbole3 = 120-34*9.230769}
	if(Coord3 == 36){Pos_Symbole3 = 120-35*9.230769}
	if(Coord3 == 37){Pos_Symbole3 = 120-36*9.230769}
	if(Coord3 == 38){Pos_Symbole3 = 120-37*9.230769}
	if(Coord3 == 39){Pos_Symbole3 = 120-38*9.230769}

	if(Coord4 == 2){Pos_Symbole4 = 240-1*9.230769}
	if(Coord4 == 3){Pos_Symbole4 = 240-2*9.230769}
	if(Coord4 == 4){Pos_Symbole4 = 240-3*9.230769}
	if(Coord4 == 5){Pos_Symbole4 = 240-4*9.230769}
	if(Coord4 == 6){Pos_Symbole4 = 240-5*9.230769}
	if(Coord4 == 7){Pos_Symbole4 = 240-6*9.230769}
	if(Coord4 == 8){Pos_Symbole4 = 240-7*9.230769}
	if(Coord4 == 9){Pos_Symbole4 = 240-8*9.230769}
	if(Coord4 == 10){Pos_Symbole4 = 240-9*9.230769}
	if(Coord4 == 11){Pos_Symbole4 = 240-10*9.230769}
	if(Coord4 == 12){Pos_Symbole4 = 240-11*9.230769}
	if(Coord4 == 13){Pos_Symbole4 = 240-12*9.230769}
	if(Coord4 == 14){Pos_Symbole4 = 240-13*9.230769}
	if(Coord4 == 15){Pos_Symbole4 = 240-14*9.230769}
	if(Coord4 == 16){Pos_Symbole4 = 240-15*9.230769}
	if(Coord4 == 17){Pos_Symbole4 = 240-16*9.230769}
	if(Coord4 == 18){Pos_Symbole4 = 240-17*9.230769}
	if(Coord4 == 19){Pos_Symbole4 = 240-18*9.230769}
	if(Coord4 == 20){Pos_Symbole4 = 240-19*9.230769}
	if(Coord4 == 21){Pos_Symbole4 = 240-20*9.230769}
	if(Coord4 == 22){Pos_Symbole4 = 240-21*9.230769}
	if(Coord4 == 23){Pos_Symbole4 = 240-22*9.230769}
	if(Coord4 == 24){Pos_Symbole4 = 240-23*9.230769}
	if(Coord4 == 25){Pos_Symbole4 = 240-24*9.230769}
	if(Coord4 == 26){Pos_Symbole4 = 240-25*9.230769}
	if(Coord4 == 27){Pos_Symbole4 = 240-26*9.230769}
	if(Coord4 == 28){Pos_Symbole4 = 240-27*9.230769}
	if(Coord4 == 29){Pos_Symbole4 = 240-28*9.230769}
	if(Coord4 == 30){Pos_Symbole4 = 240-29*9.230769}
	if(Coord4 == 31){Pos_Symbole4 = 240-30*9.230769}
	if(Coord4 == 32){Pos_Symbole4 = 240-31*9.230769}
	if(Coord4 == 33){Pos_Symbole4 = 240-32*9.230769}
	if(Coord4 == 34){Pos_Symbole4 = 240-33*9.230769}
	if(Coord4 == 35){Pos_Symbole4 = 240-34*9.230769}
	if(Coord4 == 36){Pos_Symbole4 = 240-35*9.230769}
	if(Coord4 == 37){Pos_Symbole4 = 240-36*9.230769}
	if(Coord4 == 38){Pos_Symbole4 = 240-37*9.230769}
	if(Coord4 == 39){Pos_Symbole4 = 240-38*9.230769}

	if(Coord5 == 2){Pos_Symbole5 = 280-1*9.230769}
	if(Coord5 == 3){Pos_Symbole5 = 280-2*9.230769}
	if(Coord5 == 4){Pos_Symbole5 = 280-3*9.230769}
	if(Coord5 == 5){Pos_Symbole5 = 280-4*9.230769}
	if(Coord5 == 6){Pos_Symbole5 = 280-5*9.230769}
	if(Coord5 == 7){Pos_Symbole5 = 280-6*9.230769}
	if(Coord5 == 8){Pos_Symbole5 = 280-7*9.230769}
	if(Coord5 == 9){Pos_Symbole5 = 280-8*9.230769}
	if(Coord5 == 10){Pos_Symbole5 = 280-9*9.230769}
	if(Coord5 == 11){Pos_Symbole5 = 280-10*9.230769}
	if(Coord5 == 12){Pos_Symbole5 = 280-11*9.230769}
	if(Coord5 == 13){Pos_Symbole5 = 280-12*9.230769}
	if(Coord5 == 14){Pos_Symbole5 = 280-13*9.230769}
	if(Coord5 == 15){Pos_Symbole5 = 280-14*9.230769}
	if(Coord5 == 16){Pos_Symbole5 = 280-15*9.230769}
	if(Coord5 == 17){Pos_Symbole5 = 280-16*9.230769}
	if(Coord5 == 18){Pos_Symbole5 = 280-17*9.230769}
	if(Coord5 == 19){Pos_Symbole5 = 280-18*9.230769}
	if(Coord5 == 20){Pos_Symbole5 = 280-19*9.230769}
	if(Coord5 == 21){Pos_Symbole5 = 280-20*9.230769}
	if(Coord5 == 22){Pos_Symbole5 = 280-21*9.230769}
	if(Coord5 == 23){Pos_Symbole5 = 280-22*9.230769}
	if(Coord5 == 24){Pos_Symbole5 = 280-23*9.230769}
	if(Coord5 == 25){Pos_Symbole5 = 280-24*9.230769}
	if(Coord5 == 26){Pos_Symbole5 = 280-25*9.230769}
	if(Coord5 == 27){Pos_Symbole5 = 280-26*9.230769}
	if(Coord5 == 28){Pos_Symbole5 = 280-27*9.230769}
	if(Coord5 == 29){Pos_Symbole5 = 280-28*9.230769}
	if(Coord5 == 30){Pos_Symbole5 = 280-29*9.230769}
	if(Coord5 == 31){Pos_Symbole5 = 280-30*9.230769}
	if(Coord5 == 32){Pos_Symbole5 = 280-31*9.230769}
	if(Coord5 == 33){Pos_Symbole5 = 280-32*9.230769}
	if(Coord5 == 34){Pos_Symbole5 = 280-33*9.230769}
	if(Coord5 == 35){Pos_Symbole5 = 280-34*9.230769}
	if(Coord5 == 36){Pos_Symbole5 = 280-35*9.230769}
	if(Coord5 == 37){Pos_Symbole5 = 280-36*9.230769}
	if(Coord5 == 38){Pos_Symbole5 = 280-37*9.230769}
	if(Coord5 == 39){Pos_Symbole5 = 280-38*9.230769}

	if(Coord6 == 2){Pos_Symbole6 = 320-1*9.230769}
	if(Coord6 == 3){Pos_Symbole6 = 320-2*9.230769}
	if(Coord6 == 4){Pos_Symbole6 = 320-3*9.230769}
	if(Coord6 == 5){Pos_Symbole6 = 320-4*9.230769}
	if(Coord6 == 6){Pos_Symbole6 = 320-5*9.230769}
	if(Coord6 == 7){Pos_Symbole6 = 320-6*9.230769}
	if(Coord6 == 8){Pos_Symbole6 = 320-7*9.230769}
	if(Coord6 == 9){Pos_Symbole6 = 320-8*9.230769}
	if(Coord6 == 10){Pos_Symbole6 = 320-9*9.230769}
	if(Coord6 == 11){Pos_Symbole6 = 320-10*9.230769}
	if(Coord6 == 12){Pos_Symbole6 = 320-11*9.230769}
	if(Coord6 == 13){Pos_Symbole6 = 320-12*9.230769}
	if(Coord6 == 14){Pos_Symbole6 = 320-13*9.230769}
	if(Coord6 == 15){Pos_Symbole6 = 320-14*9.230769}
	if(Coord6 == 16){Pos_Symbole6 = 320-15*9.230769}
	if(Coord6 == 17){Pos_Symbole6 = 320-16*9.230769}
	if(Coord6 == 18){Pos_Symbole6 = 320-17*9.230769}
	if(Coord6 == 19){Pos_Symbole6 = 320-18*9.230769}
	if(Coord6 == 20){Pos_Symbole6 = 320-19*9.230769}
	if(Coord6 == 21){Pos_Symbole6 = 320-20*9.230769}
	if(Coord6 == 22){Pos_Symbole6 = 320-21*9.230769}
	if(Coord6 == 23){Pos_Symbole6 = 320-22*9.230769}
	if(Coord6 == 24){Pos_Symbole6 = 320-23*9.230769}
	if(Coord6 == 25){Pos_Symbole6 = 320-24*9.230769}
	if(Coord6 == 26){Pos_Symbole6 = 320-25*9.230769}
	if(Coord6 == 27){Pos_Symbole6 = 320-26*9.230769}
	if(Coord6 == 28){Pos_Symbole6 = 320-27*9.230769}
	if(Coord6 == 29){Pos_Symbole6 = 320-28*9.230769}
	if(Coord6 == 30){Pos_Symbole6 = 320-29*9.230769}
	if(Coord6 == 31){Pos_Symbole6 = 320-30*9.230769}
	if(Coord6 == 32){Pos_Symbole6 = 320-31*9.230769}
	if(Coord6 == 33){Pos_Symbole6 = 320-32*9.230769}
	if(Coord6 == 34){Pos_Symbole6 = 320-33*9.230769}
	if(Coord6 == 35){Pos_Symbole6 = 320-34*9.230769}
	if(Coord6 == 36){Pos_Symbole6 = 320-35*9.230769}
	if(Coord6 == 37){Pos_Symbole6 = 320-36*9.230769}
	if(Coord6 == 38){Pos_Symbole6 = 320-37*9.230769}
	if(Coord6 == 39){Pos_Symbole6 = 320-38*9.230769}

	if(Coord7 == 1){Pos_Symbole7 = 360} // Ainsi le point d'origine arrive au chevron du haut

	// Après quelques secondes la rotation de l'anneau s'effectue

	var chevron1 = setTimeout("Chevron1()",5000);
	var chevron2 = setTimeout("Chevron2()",11000);
	var chevron3 = setTimeout("Chevron3()",17000);
	var chevron4 = setTimeout("Chevron4()",23000);
	var chevron5 = setTimeout("Chevron5()",29000);
	var chevron6 = setTimeout("Chevron6()",35000);
	var chevron7 = setTimeout("Chevron7()",41000);
	var Verrouil = setTimeout("Verouil()",47000);
	var Horizon = setTimeout("Horizon()",49000);


};

function Chevron1(){
document.getElementById('Mobile').style.WebkitTransform = "rotate(" + this.Pos_Symbole1 + "deg)";
};
function Chevron2(){
document.getElementById('Mobile').style.WebkitTransform = "rotate(" + this.Pos_Symbole2 + "deg)";
document.getElementById('Porte').src = "img/PorteDesEtoiles_CadreImmobile_Chevron1.svg";
};
function Chevron3(){
document.getElementById('Mobile').style.WebkitTransform = "rotate(" + this.Pos_Symbole3 + "deg)";
document.getElementById('Porte').src = "img/PorteDesEtoiles_CadreImmobile_Chevron2.svg";
};
function Chevron4(){
document.getElementById('Mobile').style.WebkitTransform = "rotate(" + this.Pos_Symbole4 + "deg)";
document.getElementById('Porte').src = "img/PorteDesEtoiles_CadreImmobile_Chevron3.svg";
};
function Chevron5(){
document.getElementById('Mobile').style.WebkitTransform = "rotate(" + this.Pos_Symbole5 + "deg)";
document.getElementById('Porte').src = "img/PorteDesEtoiles_CadreImmobile_Chevron4.svg";
};
function Chevron6(){
document.getElementById('Mobile').style.WebkitTransform = "rotate(" + this.Pos_Symbole6 + "deg)";
document.getElementById('Porte').src = "img/PorteDesEtoiles_CadreImmobile_Chevron5.svg";
};
function Chevron7(){
document.getElementById('Mobile').style.WebkitTransform = "rotate(" + this.Pos_Symbole7 + "deg)";
document.getElementById('Porte').src = "img/PorteDesEtoiles_CadreImmobile_Chevron6.svg";
};
function Verouil(){
document.getElementById('Porte').src = "img/PorteDesEtoiles_CadreImmobile_Chevron7.svg";
};

function Horizon(){
document.getElementById('Horizon').style.display = "block";

// Abydos //
	if ((Coord1 == 27) && (Coord2 == 7) && (Coord3 == 15) && (Coord4 == 32) && (Coord5 == 12) && (Coord6 == 30) && (Coord7 == 1)){
	document.getElementById('Horizon').style.display = "none";
	document.getElementById('Horizon_Abydos').style.display = "block";
	alert("Bienvenue sur Abydos, la ou tout l'univers de Stargate à commencé, la planète ou le premier grand maître Goa'uld, Râ, fût tué.");
	}

// Camelot //
	if ((Coord1 == 20) && (Coord2 == 2) && (Coord3 == 35) && (Coord4 == 8) && (Coord5 == 26) && (Coord6 == 15) && (Coord7 == 1)){
	document.getElementById('Horizon').style.display = "none";
	document.getElementById('Horizon_Camelot').style.display = "block";
	alert("La planète ou l'Ancien connu comme étant Merlin des légendes arthuriennes, avait sa bibliothèque.");
	}

// Chulak //
	if ((Coord1 == 9) && (Coord2 == 2) && (Coord3 == 23) && (Coord4 == 15) && (Coord5 == 37) && (Coord6 == 20) && (Coord7 == 1)){
	document.getElementById('Horizon').style.display = "none";
	document.getElementById('Horizon_Chulak').style.display = "block";
	alert("Bienvenue sur Chulak, la planète d'origine de Teal'c.");
	}

// Dakara
	if ((Coord1 == 16) && (Coord2 == 28) && (Coord3 == 3) && (Coord == 8) && (Coord5 == 33) && (Coord6 == 4) && (Coord7 == 1)){
	document.getElementById('Horizon').style.display = "none";
	document.getElementById('Horizon_Dakara').style.display = "block";
	alert("Bienvenue sur Dakara, nouvelle planète mère de la Nation Jaffa, ou se trouvait l'arme des Anciens, ayant permis l'annihilation des Réplicateurs.");
	}

// Edora //
	if ((Coord1 == 28) && (Coord2 == 38) && (Coord3 == 35) && (Coord4 == 9) && (Coord5 == 15) && (Coord6 == 3) && (Coord7 == 1)){
	document.getElementById('Horizon').style.display = "none";
	document.getElementById('Horizon_Edora').style.display = "block";
	alert("Bienvenue sur Edora, la planète ou le Colonel Jack Onei'll à failli prendre sa retraite.");
	}

// Euronda //
	if ((Coord1 == 30) && (Coord2 == 27) && (Coord3 == 9) && (Coord4 == 7) && (Coord5 == 18) && (Coord6 == 16) && (Coord7 == 1)){
	document.getElementById('Horizon').style.display = "none";
	document.getElementById('Horizon_Euronda').style.display = "block";
	alert("Bienvenue sur Euronda, une planète oû une guerre entre cloneurs et reproducteurs faisait rage.");
	}

// Kheb //
	if ((Coord1 == 26) && (Coord2 == 35) && (Coord3 == 6) && (Coord4 == 8) && (Coord5 == 23) && (Coord6 == 14) && (Coord7 == 1)){
	document.getElementById('Horizon').style.display = "none";
	document.getElementById('Horizon_Kheb').style.display = "block";
	alert("Bienvenue sur Kheb, la planète ou l'enfant Harsesis était gardé par Oma Thesala, une Ancienne aux grands pouvoirs.");
	}

// Praclarush Taonas //
	if ((Coord1 == 35) && (Coord2 == 3) && (Coord3 == 31) && (Coord4 == 29) && (Coord5 == 5) && (Coord6 == 17) && (Coord7 == 1)){
	document.getElementById('Horizon').style.display = "none";
	document.getElementById('Horizon_Taonas').style.display = "block";
	alert("Bienvenue sur cette planète des Anciens, maintenant couverte de lave en fusion.");
	}

// Tartarus //
	if ((Coord1 == 33) && (Coord2 == 28) && (Coord3 == 23) && (Coord4 == 26) && (Coord5 == 16) && (Coord6 == 31) && (Coord7 == 1)){
	document.getElementById('Horizon').style.display = "none";
	document.getElementById('Horizon_Tartarus').style.display = "block";
	alert("Bienvenue sur la base secrètes d'Anubis, le maléfique Goa'uld qui avait fait l'Ascension.");
	}

// Tollana //
	if ((Coord1 == 4) && (Coord2 == 29) && (Coord3 == 8) && (Coord4 == 22) && (Coord5 == 18) && (Coord6 == 25) && (Coord7 == 1)){
	document.getElementById('Horizon').style.display = "none";
	document.getElementById('Horizon_Tollana').style.display = "block";
	alert("Bienvenue sur Tollana, la nouvelle planète des TOlans, un peuple pacifique et très avancé.");
	}

// Site Alpha
	if ((Coord1 == 33) && (Coord2 == 31) && (Coord3 == 27) && (Coord == 37) && (Coord5 == 35) && (Coord6 == 34) && (Coord7 == 1)){
	document.getElementById('Horizon').style.display = "none";
	document.getElementById('Horizon_Alpha').style.display = "block";
	alert("Bienvenue sur le site Alpha, permettant aux Terriens, Jaffas libres et Tok'ra d'organiser la Rebéllion contre les Grands Maîtres Goa'ulds.");
	}

};



function Reset() {
    location.reload(true);
};


