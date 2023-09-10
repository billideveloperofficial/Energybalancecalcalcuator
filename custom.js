
  function toggleFields() {
  var status = document.getElementById("status").value;
  var establishedFields = document.getElementById("establishedFields");
  var notEstablishedFields = document.getElementById("notEstablishedFields");

  if (status === "established") {
    establishedFields.style.display = "block";
    notEstablishedFields.style.display = "none";
  } else {
    establishedFields.style.display = "none";
    notEstablishedFields.style.display = "block";
  }
}

function calculateBMR() {
  // Get values from input fields
  var age = parseInt(document.getElementById("age").value);
  var height = parseInt(document.getElementById("height").value);
  var weight = parseInt(document.getElementById("weight").value);
  var heightUnit = parseInt(document.getElementById("heightUnit").value);
  var weightUnit = parseInt(document.getElementById("weightUnit").value);
  var gender = document.querySelector('input[name="gender"]:checked').value;
  
  var status = document.getElementById("status").value; // Add this line to get the value of status

  var establishedage = parseInt(document.getElementById("establishedage").value);
  var leanbody = parseInt(document.getElementById("leanbody").value);
  var fatmass = parseInt(document.getElementById("fatmass").value);
  var leanbodyUnit = parseInt(document.getElementById("leanbodyUnit").value);
  var fatmassUnit = parseInt(document.getElementById("fatmassUnit").value);


 

  var bmr = 0;

  if (gender === "male" || gender === "establishmale") {
    if (status === "not-established") {

   bmr = 10 * weightUnit + 6.25 * heightUnit - 5 * age + 5;
   var weightUnit = parseFloat(document.getElementById("weightUnit").value);
var bmr1 = 10 * weightUnit;

var roundedBmr1 = bmr1.toFixed(2);
   var heightUnit = parseFloat(document.getElementById("heightUnit").value);
var bmr2 = Math.round(6.25 * heightUnit);
    var bmr3 = 5 * age ;
    var bmr4 = bmr1 + bmr2 - bmr3 + 5;
    var bmr5 = bmr4 ;
    var bmr = bmr5;
    } if (status === "established") {
      var bmras = leanbody / 2.205;
      bmr1 = (13.587 * bmras);
      var bmras1 = fatmass / 2.205;
      bmr2 = (9.613 * bmras1);
      bmr3 = (198 * 1);
      bmr4 = (3.351 * establishedage);
      var bmr5 = bmr1 + bmr2 + bmr3 ;
      var bmr6 = bmr5 - bmr4 ;
      var bmr = bmr6 + 674;
}
  } else if (gender === "female" || gender === "establishfemale") {
    if (status === "not-established") {
      var weightUnit = parseFloat(document.getElementById("weightUnit").value);
      var bmr1 = 10 * weightUnit;
      var heightUnit = parseFloat(document.getElementById("heightUnit").value);
      var bmr2 = (6.25 * heightUnit);
    var bmr3 = 5 * age;
    var bmr4 = bmr1 + bmr2 - bmr3;
    var bmr = bmr4 - 161;
    } else if (status === "established") {
      var leanbodyUnit = leanbody / 2.205;
      bmr1 = (13.587 * leanbodyUnit);
      var fatmassUnit = fatmass / 2.205;
      bmr2 = (9.613 * fatmassUnit);
      bmr3 = (198 * 0);
      bmr4 = (3.351 * establishedage);
      var bmr5 = bmr1 + bmr2 - bmr3 ;
      var bmr6 = bmr5 - bmr4 ;
      var bmr = bmr6 + 674;
    }
    
  }

  var resultElement = document.getElementById("result");
  resultElement.innerHTML = "Your Basal Metabolic Rate (BMR) is: " + bmr.toFixed(1);

  // Daily Energy
  var sedentarydResult = document.querySelector(".sedentary");
  var sedentary = bmr * 1.2;
  sedentarydResult.innerHTML = sedentary.toFixed(1);

  var lightlyactiveResult = document.querySelector(".lightlyactive");
  var lightlyactive = bmr *1.375;
  lightlyactiveResult.innerHTML =  lightlyactive.toFixed(1);

  var veryactiveResult = document.querySelector(".veryactive");
  var veryactive = bmr *1.725;
  veryactiveResult.innerHTML =  veryactive.toFixed(1);

  var modactiveResult = document.querySelector(".modactive");
  var modactive = bmr *1.55;
  modactiveResult.innerHTML = modactive.toFixed(1);

  var extremeactiveResult = document.querySelector(".extremeactive");
  var extremeactive = bmr *1.9;
  extremeactiveResult.innerHTML = extremeactive.toFixed(1);
  // Daily Energy End

  // Weight Loss Macros:40-30-30
  // Sedentary
  var carbResult = document.querySelector(".carb");
  var carb = (sedentary * 0.7)*0.4/4;
  var carbFormatted = carb.toFixed(1);
  carbResult.innerHTML = "Carb:  " + carbFormatted;

  var proteinResult = document.querySelector(".protein");
  var protein = (sedentary * 0.7)*0.3/4;
  var proteinFormatted = protein.toFixed(1);
  proteinResult.innerHTML = "Protein:  " + proteinFormatted;

  var fatResult = document.querySelector(".fat");
  var fat = (sedentary *0.7)*0.3/9;
  var fatFormatted = fat.toFixed(1);
  fatResult.innerHTML = "Fat:  " + fatFormatted;

  var kcalResult = document.querySelector(".kcal");
  var kcal = (carb*4)+(protein*4)+(fat*9);
  var kcalFormatted = kcal.toFixed(1);
  kcalResult.innerHTML = "kCAL:  " + kcalFormatted;

  var proteinozResult = document.querySelector(".proteinoz");
  var proteinoz = protein/8;
  var proteinozFormatted = proteinoz.toFixed(0);
  proteinozResult.innerHTML = "Protein oz:  " + proteinozFormatted;
   // Sedentary End

    // Light Active
  var carbResult = document.querySelector(".lightlycarb");
  var lightlycarb = (lightlyactive * 0.7)*0.4/4;
  var carbFormatted = lightlycarb.toFixed(1);
  carbResult.innerHTML = "Carb:  " + carbFormatted;

  var proteinResult = document.querySelector(".lightlyprotein");
  var lightlyprotein = (lightlyactive * 0.7)*0.3/4;
  var proteinFormatted = lightlyprotein.toFixed(1);
  proteinResult.innerHTML = "Protein:  " + proteinFormatted;

  var fatResult = document.querySelector(".lightlyfat");
  var lightlyfat = (lightlyactive *0.7)*0.3/9;
  var fatFormatted = lightlyfat.toFixed(1);
  fatResult.innerHTML = "Fat:  " + fatFormatted;

  var kcalResult = document.querySelector(".lightlykcal");
  var lightlykcal = (lightlycarb*4)+(lightlyprotein*4)+(lightlyfat*9);
  var kcalFormatted = lightlykcal.toFixed(1);
  kcalResult.innerHTML = "kCAL:  " + kcalFormatted;

  var proteinozResult = document.querySelector(".lightlyproteinoz");
  var lightlyproteinoz = lightlyprotein/8;
  var proteinozFormatted = lightlyproteinoz.toFixed(0);
  proteinozResult.innerHTML = "Protein oz:  " + proteinozFormatted;
   // Light Active End

  // Mod Active
  var carbResult = document.querySelector(".modcarb");
  var modcarb = (modactive * 0.7)*0.4/4;
  var carbFormatted = modcarb.toFixed(1);
  carbResult.innerHTML = "Carb:  " + carbFormatted;

  var proteinResult = document.querySelector(".modprotein");
  var modprotein = (modactive * 0.7)*0.3/4;
  var proteinFormatted = modprotein.toFixed(1);
  proteinResult.innerHTML = "Protein:  " + proteinFormatted;

  var fatResult = document.querySelector(".modfat");
  var modfat = (modactive *0.7)*0.3/9;
  var fatFormatted = modfat.toFixed(1);
  fatResult.innerHTML = "Fat:  " + fatFormatted;

  var kcalResult = document.querySelector(".modkcal");
  var modkcal = (modcarb*4)+(modprotein*4)+(modfat*9);
  var kcalFormatted = modkcal.toFixed(1);
  kcalResult.innerHTML = "kCAL:  " + kcalFormatted;

  var proteinozResult = document.querySelector(".modproteinoz");
  var modproteinoz = modprotein/8;
  var proteinozFormatted = modproteinoz.toFixed(0);
  proteinozResult.innerHTML = "Protein oz:  " + proteinozFormatted;
   // Mod Active End
   
   // very Active
var carbResult = document.querySelector(".verycarb");
var verycarb = (veryactive * 0.7)*0.4/4;
var carbFormatted = verycarb.toFixed(1);
carbResult.innerHTML = "Carb:  " + carbFormatted;

var proteinResult = document.querySelector(".veryprotein");
var veryprotein = (veryactive * 0.7)*0.3/4;
var proteinFormatted = veryprotein.toFixed(1);
proteinResult.innerHTML = "Protein:  " + proteinFormatted;

var fatResult = document.querySelector(".veryfat");
var veryfat = (veryactive *0.7)*0.3/9;
var fatFormatted = veryfat.toFixed(1);
fatResult.innerHTML = "Fat:  " + fatFormatted;

var kcalResult = document.querySelector(".verykcal");
var verykcal = (verycarb*4)+(veryprotein*4)+(veryfat*9);
var kcalFormatted = verykcal.toFixed(1);
kcalResult.innerHTML = "kCAL:  " + kcalFormatted;

var proteinozResult = document.querySelector(".veryproteinoz");
var veryproteinoz = veryprotein/8;
var proteinozFormatted = veryproteinoz.toFixed(0);
proteinozResult.innerHTML = "Protein oz:  " + proteinozFormatted;
 // very Active End
 
 // Extreme  Active
var carbResult = document.querySelector(".extremecarb");
var extremecarb = (extremeactive * 0.7)*0.4/4;
var carbFormatted = extremecarb.toFixed(1);
carbResult.innerHTML = "Carb:  " + carbFormatted;

var proteinResult = document.querySelector(".extremeprotein");
var extremeprotein = (extremeactive * 0.7)*0.3/4;
var proteinFormatted = extremeprotein.toFixed(1);
proteinResult.innerHTML = "Protein:  " + proteinFormatted;

var fatResult = document.querySelector(".extremefat");
var extremefat = (extremeactive *0.7)*0.3/9;
var fatFormatted = extremefat.toFixed(1);
fatResult.innerHTML = "Fat:   " + fatFormatted;

var kcalResult = document.querySelector(".extremekcal");
var extremekcal = (extremecarb*4)+(extremeprotein*4)+(extremefat*9);
var kcalFormatted = extremekcal.toFixed(1);
kcalResult.innerHTML = "kCAL:  " + kcalFormatted;

var proteinozResult = document.querySelector(".extremeproteinoz");
var extremeproteinoz = extremeprotein/8;
var proteinozFormatted = extremeproteinoz.toFixed(0);
proteinozResult.innerHTML = "Protein oz:  " + proteinozFormatted;
 // Extreme  Active End
 
  // Weight Loss Macros:40-30-30 End






  // Weight Loss Macros:40-40-20
  // Sedentary
  var carbResult = document.querySelector(".carb20");
  var carb = (sedentary * 0.7)*0.4/4;
  var carbFormatted = carb.toFixed(1);
  carbResult.innerHTML = "Carb:  " + carbFormatted;

  var proteinResult = document.querySelector(".protein20");
  var protein = (sedentary *0.7)*0.4/4;
  var proteinFormatted = protein.toFixed(1);
  proteinResult.innerHTML = "Protein:  " + proteinFormatted;

  var fatResult = document.querySelector(".fat20");
  var fat = (sedentary *0.7)*0.2/9;
  var fatFormatted = fat.toFixed(1);
  fatResult.innerHTML = "Fat:  " + fatFormatted;

  var kcalResult = document.querySelector(".kcal20");
  var kcal = (carb*4)+(protein*4)+(fat*9);
  var kcalFormatted = kcal.toFixed(1);
  kcalResult.innerHTML = "kCAL:  " + kcalFormatted;

  var proteinozResult = document.querySelector(".proteinoz20");
  var proteinoz = protein/8;
  var proteinozFormatted = proteinoz.toFixed(0);
  proteinozResult.innerHTML = "Protein oz:  " + proteinozFormatted;
   // Sedentary End

    // Light Active
  var carbResult = document.querySelector(".lightlycarb20");
  var lightlycarb = (lightlyactive * 0.7)*0.4/4;
  var carbFormatted = lightlycarb.toFixed(1);
  carbResult.innerHTML = "Carb:  " + carbFormatted;

  var proteinResult = document.querySelector(".lightlyprotein20");
  var lightlyprotein = (lightlyactive * 0.7)*0.4/4;
  var proteinFormatted = lightlyprotein.toFixed(1);
  proteinResult.innerHTML = "Protein:  " + proteinFormatted;

  var fatResult = document.querySelector(".lightlyfat20");
  var lightlyfat = (lightlyactive *0.7)*0.2/9;
  var fatFormatted = lightlyfat.toFixed(1);
  fatResult.innerHTML = "Fat:  " + fatFormatted;

  var kcalResult = document.querySelector(".lightlykcal20");
  var lightlykcal = (lightlycarb*4)+(lightlyprotein*4)+(lightlyfat*9);
  var kcalFormatted = lightlykcal.toFixed(1);
  kcalResult.innerHTML = "kCAL:  " + kcalFormatted;

  var proteinozResult = document.querySelector(".lightlyproteinoz20");
  var lightlyproteinoz = lightlyprotein/8;
  var proteinozFormatted = lightlyproteinoz.toFixed(0);
  proteinozResult.innerHTML = "Protein oz:  " + proteinozFormatted;
   // Light Active End

  // Mod Active
  var carbResult = document.querySelector(".modcarb20");
  var modcarb = (modactive * 0.7)*0.4/4;
  var carbFormatted = modcarb.toFixed(1);
  carbResult.innerHTML = "Carb:  " + carbFormatted;

  var proteinResult = document.querySelector(".modprotein20");
  var modprotein = (modactive *0.7)*0.4/4;
  var proteinFormatted = modprotein.toFixed(1);
  proteinResult.innerHTML = "Protein:  " + proteinFormatted;

  var fatResult = document.querySelector(".modfat20");
  var modfat = (modactive *0.7)*0.2/9;
  var fatFormatted = modfat.toFixed(1);
  fatResult.innerHTML = "Fat:  " + fatFormatted;

  var kcalResult = document.querySelector(".modkcal20");
  var modkcal = (modcarb*4)+(modprotein*4)+(modfat*9);
  var kcalFormatted = modkcal.toFixed(1);
  kcalResult.innerHTML = "kCAL:  " + kcalFormatted;

  var proteinozResult = document.querySelector(".modproteinoz20");
  var modproteinoz = modprotein/8;
  var proteinozFormatted = modproteinoz.toFixed(0);
  proteinozResult.innerHTML = "Protein oz:  " + proteinozFormatted;
   // Mod Active End
   
   // very Active
var carbResult = document.querySelector(".verycarb20");
var verycarb = (veryactive * 0.7)*0.4/4;
var carbFormatted = verycarb.toFixed(1);
carbResult.innerHTML = "Carb:  " + carbFormatted;

var proteinResult = document.querySelector(".veryprotein20");
var veryprotein = (veryactive * 0.7)*0.4/4;
var proteinFormatted = veryprotein.toFixed(1);
proteinResult.innerHTML = "Protein:  " + proteinFormatted;

var fatResult = document.querySelector(".veryfat20");
var veryfat = (veryactive *0.7)*0.2/9;
var fatFormatted = veryfat.toFixed(1);
fatResult.innerHTML = "Fat:  " + fatFormatted;

var kcalResult = document.querySelector(".verykcal20");
var verykcal = (verycarb*4)+(veryprotein*4)+(veryfat*9);
var kcalFormatted = verykcal.toFixed(1);
kcalResult.innerHTML = "kCAL:  " + kcalFormatted;

var proteinozResult = document.querySelector(".veryproteinoz20");
var veryproteinoz = veryprotein/8;
var proteinozFormatted = veryproteinoz.toFixed(0);
proteinozResult.innerHTML = "Protein oz:  " + proteinozFormatted;
 // very Active End
 
 // Extreme  Active
var carbResult = document.querySelector(".extremecarb20");
var extremecarb = (extremeactive * 0.7)*0.4/4;
var carbFormatted = extremecarb.toFixed(1);
carbResult.innerHTML = "Carb:  " + carbFormatted;

var proteinResult = document.querySelector(".extremeprotein20");
var extremeprotein = (extremeactive * 0.7)*0.4/4;
var proteinFormatted = extremeprotein.toFixed(1);
proteinResult.innerHTML = "Protein:  " + proteinFormatted;

var fatResult = document.querySelector(".extremefat20");
var extremefat = (extremeactive *0.7)*0.2/9;
var fatFormatted = extremefat.toFixed(1);
fatResult.innerHTML = "Fat:  " + fatFormatted;

var kcalResult = document.querySelector(".extremekcal20");
var extremekcal = (extremecarb*4)+(extremeprotein*4)+(extremefat*9);
var kcalFormatted = extremekcal.toFixed(1);
kcalResult.innerHTML = "kCAL:  " + kcalFormatted;

var proteinozResult = document.querySelector(".extremeproteinoz20");
var extremeproteinoz = extremeprotein/8;
var proteinozFormatted = extremeproteinoz.toFixed(0);
proteinozResult.innerHTML = "Protein oz:  " + proteinozFormatted;
 // Extreme  Active End
 
  // Weight Loss Macros:40-40-20 End




   // Weight Loss Macros:40-40-30
  // Sedentary
  var carbResult = document.querySelector(".carb30");
  var carb = (sedentary) *0.4/4;
  var carbFormatted = carb.toFixed(1);
  carbResult.innerHTML = "Carb:  " + carbFormatted;

  var proteinResult = document.querySelector(".protein30");
  var protein = (sedentary) *0.3/4;
  var proteinFormatted = protein.toFixed(1);
  proteinResult.innerHTML = "Protein:  " + proteinFormatted;

  var fatResult = document.querySelector(".fat30");
  var fat = (sedentary) *0.3/9;
  var fatFormatted = fat.toFixed(1);
  fatResult.innerHTML = "Fat:  " + fatFormatted;

  var kcalResult = document.querySelector(".kcal30");
  var kcal = (carb*4)+(protein*4)+(fat*9);
  var kcalFormatted = kcal.toFixed(1);
  kcalResult.innerHTML = "kCAL:  " + kcalFormatted;

  var proteinozResult = document.querySelector(".proteinoz30");
  var proteinoz = protein/8;
  var proteinozFormatted = proteinoz.toFixed(0);
  proteinozResult.innerHTML = "Protein oz:  " + proteinozFormatted;
   // Sedentary End

    // Light Active
  var carbResult = document.querySelector(".lightlycarb30");
  var lightlycarb = (lightlyactive)*0.4/4;
  var carbFormatted = lightlycarb.toFixed(1);
  carbResult.innerHTML = "Carb:  " + carbFormatted;

  var proteinResult = document.querySelector(".lightlyprotein30");
  var lightlyprotein = (lightlyactive)*0.3/4;
  var proteinFormatted = lightlyprotein.toFixed(1);
  proteinResult.innerHTML = "Protein:  " + proteinFormatted;

  var fatResult = document.querySelector(".lightlyfat30");
  var lightlyfat = (lightlyactive)*0.3/9;
  var fatFormatted = lightlyfat.toFixed(1);
  fatResult.innerHTML = "Fat:  " + fatFormatted;

  var kcalResult = document.querySelector(".lightlykcal30");
  var lightlykcal = (lightlycarb*4)+(lightlyprotein*4)+(lightlyfat*9);
  var kcalFormatted = lightlykcal.toFixed(1);
  kcalResult.innerHTML = "kCAL:  " + kcalFormatted;

  var proteinozResult = document.querySelector(".lightlyproteinoz30");
  var lightlyproteinoz = lightlyprotein/8;
  var proteinozFormatted = lightlyproteinoz.toFixed(0);
  proteinozResult.innerHTML = "Protein oz:  " + proteinozFormatted;
   // Light Active End

  // Mod Active
  var carbResult = document.querySelector(".modcarb30");
  var modcarb = (modactive)*0.4/4;
  var carbFormatted = modcarb.toFixed(1);
  carbResult.innerHTML = "Carb:  " + carbFormatted;

  var proteinResult = document.querySelector(".modprotein30");
  var modprotein = (modactive)*0.3/4;
  var proteinFormatted = modprotein.toFixed(1);
  proteinResult.innerHTML = "Protein:  " + proteinFormatted;

  var fatResult = document.querySelector(".modfat30");
  var modfat = (modactive)*0.3/9;
  var fatFormatted = modfat.toFixed(1);
  fatResult.innerHTML = "Fat:  " + fatFormatted;

  var kcalResult = document.querySelector(".modkcal30");
  var modkcal = (modcarb*4)+(modprotein*4)+(modfat*9);
  var kcalFormatted = modkcal.toFixed(1);
  kcalResult.innerHTML = "kCAL:  " + kcalFormatted;

  var proteinozResult = document.querySelector(".modproteinoz30");
  var modproteinoz = modprotein/8;
  var proteinozFormatted = modproteinoz.toFixed(0);
  proteinozResult.innerHTML = "Protein oz:  " + proteinozFormatted;
   // Mod Active End
   
   // very Active
var carbResult = document.querySelector(".verycarb30");
var verycarb = (veryactive)*0.4/4;
var carbFormatted = verycarb.toFixed(1);
carbResult.innerHTML = "Carb:  " + carbFormatted;

var proteinResult = document.querySelector(".veryprotein30");
var veryprotein = (veryactive)*0.3/4;
var proteinFormatted = veryprotein.toFixed(1);
proteinResult.innerHTML = "Protein:  " + proteinFormatted;

var fatResult = document.querySelector(".veryfat30");
var veryfat = (veryactive)*0.3/9;
var fatFormatted = veryfat.toFixed(1);
fatResult.innerHTML = "Fat:  " + fatFormatted;

var kcalResult = document.querySelector(".verykcal30");
var verykcal = (verycarb*4)+(veryprotein*4)+(veryfat*9);
var kcalFormatted = verykcal.toFixed(1);
kcalResult.innerHTML = "kCAL: " + kcalFormatted;

var proteinozResult = document.querySelector(".veryproteinoz30");
var veryproteinoz = veryprotein/8;
var proteinozFormatted = veryproteinoz.toFixed(0);
proteinozResult.innerHTML = "Protein oz:   " + proteinozFormatted;
 // very Active End
 
 // Extreme  Active
var carbResult = document.querySelector(".extremecarb30");
var extremecarb = (extremeactive)*0.4/4;
var carbFormatted = extremecarb.toFixed(1);
carbResult.innerHTML = "Carb:  " + carbFormatted;

var proteinResult = document.querySelector(".extremeprotein30");
var extremeprotein = (extremeactive)*0.3/4;
var proteinFormatted = extremeprotein.toFixed(1);
proteinResult.innerHTML = "Protein:  " + proteinFormatted;

var fatResult = document.querySelector(".extremefat30");
var extremefat = (extremeactive)*0.3/9;
var fatFormatted = extremefat.toFixed(1);
fatResult.innerHTML = "Fat:  " + fatFormatted;

var kcalResult = document.querySelector(".extremekcal30");
var extremekcal = (extremecarb*4)+(extremeprotein*4)+(extremefat*9);
var kcalFormatted = extremekcal.toFixed(1);
kcalResult.innerHTML = "kCAL:  " + kcalFormatted;

var proteinozResult = document.querySelector(".extremeproteinoz30");
var extremeproteinoz = extremeprotein/8;
var proteinozFormatted = extremeproteinoz.toFixed(0);
proteinozResult.innerHTML = "Protein oz:  " + proteinozFormatted;
 // Extreme  Active End
 
  // Weight Loss Macros:40-40-30 End
}

    //Lean Body Convert into KG establishment
    function leanbody() {
  var bd = parseFloat(document.getElementById("leanbody").value);
  var kg = bd / 2.205;
  var roundedKgs = kg.toFixed(1);
  document.getElementById("leanbodyUnit").value = roundedKgs;
 }
 //Fat Mass Convert into KG establishment
  function fatmass() {
    var bd = parseFloat(document.getElementById("fatmass").value);
  var kg = bd / 2.205;
  var roundedKgs = kg.toFixed(1);
    document.getElementById("fatmassUnit").value = roundedKgs;
      }
    
function convertToCentimeter() {
  var inches = document.getElementById("height").value;
  var centimeters = inches * 2.54;
  var roundedCentimeters = centimeters.toFixed(1); // Round to two decimal places
  document.getElementById("heightUnit").value = roundedCentimeters;
}
// function convertToKilometer() {
//   var input1 = document.getElementById("weight").value;
//   var kilograms = input1 / 2.205;

//   var truncatedKilogram = Math.floor(kilograms * 10) / 10; // Truncate to one decimal place

//   document.getElementById("weightUnit").value = truncatedKilogram;
// }



function convertToKiloneter() {
  var input1 = document.getElementById("weight").value;
  var kilograms = input1 / 2.205;

  var roundedKilogram = kilograms.toFixed(1); // Round to three decimal places

  document.getElementById("weightUnit").value = roundedKilogram;
}

    function convertToInches() {
      var inches = parseFloat(document.getElementById("height").value);
      var centimeters = inches * 2.54;
      var roundedCentimeters = centimeters.toFixed(1); // Round to two decimal places
      document.getElementById("heightUnit").value = roundedCentimeters;
        }

    var maleCheckbox = document.getElementById("male");
    var femaleCheckbox = document.getElementById("female");
  
    maleCheckbox.addEventListener("change", function() {
      if (maleCheckbox.checked) {
        femaleCheckbox.checked = false;
      }
    });
  
    femaleCheckbox.addEventListener("change", function() {
      if (femaleCheckbox.checked) {
        maleCheckbox.checked = false;
      }
    });

    var establishmale = document.getElementById("establishmale");
    var establishfemale = document.getElementById("establishfemale");
  
    establishmale.addEventListener("change", function() {
      if (establishmale.checked) {
        establishfemale.checked = false;
      }
    });
  
    establishfemale.addEventListener("change", function() {
      if (establishfemale.checked) {
        establishmale.checked = false;
      }
    });
 