


// Page Title
document.getElementById("pageTitle").innerHTML = "ID Builder v1.0.2";
// Footer Contents
document.getElementById("pageFooter").innerHTML = "Made by Neru 2023";

/* 
#################################################################################################################
#
#
#
#
#
#
#
#
#
#
#
#################################################################################################################
*/


// Upload image
var loadFile = function(event) {
    var image = document.getElementById('output');
    image.src = URL.createObjectURL(event.target.files[0]);
    uploadLabel.style.display = "none";
};

// Business Icon Left
var loadIconLeft = function(event) {
    var imageIconLeft = document.getElementById('outputIconLeft');
    imageIconLeft.src = URL.createObjectURL(event.target.files[0]);
    uploadLabelLeft.style.display = "none";
};

// Business Icon Right
var loadIconRight = function(event) {
    var imageIconRight = document.getElementById('outputIconRight');
    imageIconRight.src = URL.createObjectURL(event.target.files[0]);
    uploadLabelRight.style.display = "none";
};




/* 
#################################################################################################################
#
#
#
#
#
#
#
#
#
#
#
#################################################################################################################
*/

// Business Name
var inputBusinessName = document.getElementById("businessName");
inputBusinessName.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        event.preventDefault();
        document.getElementById("submitBtn").click();   // Click button by ID
    }
});

// ID Number
var inputIDNumber = document.getElementById("idNumber");
inputIDNumber.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        event.preventDefault();
        document.getElementById("submitBtn").click();   // Click button by ID
    }
});

// Position
var inputPosition = document.getElementById("userPosition");
inputPosition.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        event.preventDefault();
        document.getElementById("submitBtn").click();   // Click button by ID
    }
});

// Name
var inputName = document.getElementById("userName");
inputName.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        event.preventDefault();
        document.getElementById("submitBtn").click();   // Click button by ID
    }
});

// Department
var inputDepartment = document.getElementById("userDepartment");
inputDepartment.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        event.preventDefault();
        document.getElementById("submitBtn").click();   // Click button by ID
    }
});

// Barcode
var inputBarcode = document.getElementById("userBarcode");
inputBarcode.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        event.preventDefault();
        document.getElementById("submitBtn").click();   // Click button by ID
    }
});

// Mobile Number
var inputMobileNumber = document.getElementById("mobileNumber");
inputMobileNumber.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        event.preventDefault();
        document.getElementById("submitBtn").click();   // Click button by ID
    }
});

// Email
var inputEmail = document.getElementById("userEmail");
inputEmail.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        event.preventDefault();
        document.getElementById("submitBtn").click();   // Click button by ID
    }
});


/* 
#################################################################################################################
#
#
#
#
#
#
#
#
#
#
#
#################################################################################################################
*/

// Submit data

// default bacode
// Barcode Generator
JsBarcode("#barcode", "default1234", {height: 25, fontSize: 15, background: "none"});

function submit_btn() {

    // get value
    var txtfield_businessName = document.getElementById("businessName").value;
    var txtfield_idNumber = document.getElementById("idNumber").value;
    var txtfield_position = document.getElementById("userPosition").value;
    var txtfield_name = document.getElementById("userName").value;
    var txtfield_department = document.getElementById("userDepartment").value;
    var txtfield_barcode = document.getElementById("userBarcode").value;
    var txtfield_mobileNumber = document.getElementById("mobileNumber").value;
    var txtfield_email = document.getElementById("userEmail").value;

    // Check data if not empty
    if(txtfield_businessName.trim().length == 0) 
    {
        alert("Please enter Business name.");
    }
    else if(txtfield_idNumber.trim().length == 0) 
    {
        alert("Please enter ID Number.");
    }
    else if(txtfield_position.trim().length == 0) 
    {
        alert("Please enter Position.");
    }
    else if(txtfield_name.trim().length == 0) 
    {
        alert("Please enter Name.");
    }
    else if(txtfield_department.trim().length == 0) 
    {
        alert("Please enter Department.");
    }
    else if(txtfield_barcode.trim().length == 0) 
    {
        alert("Please enter Barcode.");
    }
    else if(txtfield_mobileNumber.trim().length == 0) 
    {
        alert("Please enter Mobile number.");
    }
    else if(txtfield_email.trim().length == 0) 
    {
        alert("Please enter Email.");
    }
    else
    {   
        // Session
        document.getElementById("output_businessName").innerHTML = txtfield_businessName;
        document.getElementById("output_idNumber").innerHTML = txtfield_idNumber;
        document.getElementById("output_position").innerHTML = txtfield_position;
        document.getElementById("output_name").innerHTML = txtfield_name;
        document.getElementById("output_department").innerHTML = txtfield_department;
        document.getElementById("output_mobileNumber").innerHTML = txtfield_mobileNumber;
        document.getElementById("output_email").innerHTML = txtfield_email;
        // Barcode Generator
        JsBarcode("#barcode", txtfield_barcode, {height: 25, fontSize: 15, background: "none"});
        
        // window.location.href = 'printPage.html';
    }

}



/* 
#################################################################################################################
#
#
#
#
#
#
#
#
#
#
#
#################################################################################################################
*/


download.style.display = "none";
resultLabel.style.display = "none";
// Generate HTML div to Image =====================================================================
function generateHTMLtoImg()
{
    html2canvas(document.querySelector("#capture")).then(canvas => {
        // document.body.appendChild(canvas)
        
        // set ID
        canvas.setAttribute('id', `canvas`)
        // canvas.width = 1000;
        // canvas.height = 1000;

        document.getElementById("printImage").appendChild(canvas)

        // Scroll down
        // horizontal, vertival (pixel)
        window.scrollBy(0, 1000)

        // Remove convert button
        btn_convert.style.display = "none";

        // Display Download Button
        download.style.display = "block";
        resultLabel.style.display = "block";
    });
}





// Download canvas image
document.getElementById('download').addEventListener('click', function(e) {

// Get generated canvas ID
let canvas = document.getElementById('canvas');

// Convert our canvas to a data URL
// Image format with quality of 59%
let canvasUrl = canvas.toDataURL("image/jpg", 1.0);
console.log(canvasUrl);

// Create an anchor, and set the href value to our data URL
const createEl = document.createElement('a');
createEl.href = canvasUrl;

// This is the name of our downloaded file
createEl.download = "ID-Builder-Image-file";

// Click the download button, causing a download, and then remove it
createEl.click();
createEl.remove();
});