const prevBtns = document.querySelectorAll(".btn-prev");
const nextBtns = document.querySelectorAll(".btn-next");
const progress = document.getElementById("progress");
const formSteps = document.querySelectorAll(".form-step");
const progressSteps = document.querySelectorAll(".progress-step");

let formStepsNum = 0;

nextBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    formStepsNum++;
    updateFormSteps();
    updateProgressbar();
  });
});

prevBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    formStepsNum--;
    updateFormSteps();
    updateProgressbar();
    
  });
});

function updateFormSteps() {
  formSteps.forEach((formStep) => {
    formStep.classList.contains("form-step-active") &&
      formStep.classList.remove("form-step-active");
  });

  formSteps[formStepsNum].classList.add("form-step-active");
}

function updateProgressbar() {
  progressSteps.forEach((progressStep, idx) => {
    if (idx < formStepsNum + 1) {
      progressStep.classList.add("progress-step-active");
    } else {
      progressStep.classList.remove("progress-step-active");
    }
  });

  const progressActive = document.querySelectorAll(".progress-step-active");

  progress.style.width =
    ((progressActive.length - 1) / (progressSteps.length - 1)) * 100 + "%";
}




// Toggile password Start

  $(".toggle-password").click(function () {
    $(this).toggleClass("fa-eye fa-eye-slash");
    var input = $($(this).attr("toggle"));
    if (input.attr("type") == "password") {
      input.attr("type", "text");
    } else {
      input.attr("type", "password");
    }
  });


  $(".toggle-passwordsecond").click(function () {
    $(this).toggleClass("fa-eye fa-eye-slash");
    var input = $($(this).attr("toggle"));
    if (input.attr("type") == "password") {
      input.attr("type", "text");
    } else {
      input.attr("type", "password");
    }
  });







  // DRAG DROP IMAGE UPLOAD

     document.querySelectorAll(".drop-zone__input").forEach((inputElement) => {
       const dropZoneElement = inputElement.closest(".drop-zone");

       dropZoneElement.addEventListener("click", (e) => {
         inputElement.click();
       });

       inputElement.addEventListener("change", (e) => {
         if (inputElement.files.length) {
           updateThumbnail(dropZoneElement, inputElement.files[0]);
         }
       });

       dropZoneElement.addEventListener("dragover", (e) => {
         e.preventDefault();
         dropZoneElement.classList.add("drop-zone--over");
       });

       ["dragleave", "dragend"].forEach((type) => {
         dropZoneElement.addEventListener(type, (e) => {
           dropZoneElement.classList.remove("drop-zone--over");
         });
       });

       dropZoneElement.addEventListener("drop", (e) => {
         e.preventDefault();

         if (e.dataTransfer.files.length) {
           inputElement.files = e.dataTransfer.files;
           updateThumbnail(dropZoneElement, e.dataTransfer.files[0]);
         }

         dropZoneElement.classList.remove("drop-zone--over");
       });
     });

     /**
      * Updates the thumbnail on a drop zone element.
      *
      * @param {HTMLElement} dropZoneElement
      * @param {File} file
      */
     function updateThumbnail(dropZoneElement, file) {
       let thumbnailElement =
         dropZoneElement.querySelector(".drop-zone__thumb");
 
       if (dropZoneElement.querySelector(".drop-zone__prompt")) {
         dropZoneElement.querySelector(".drop-zone__prompt").remove();
       }
 
       if (!thumbnailElement) {
         thumbnailElement = document.createElement("div");
         thumbnailElement.classList.add("drop-zone__thumb");
         dropZoneElement.appendChild(thumbnailElement);
       }

       thumbnailElement.dataset.label = file.name;
 
       if (file.type.startsWith("image/")) {
         const reader = new FileReader();

         reader.readAsDataURL(file);
         reader.onload = () => {
           thumbnailElement.style.backgroundImage = `url('${reader.result}')`;
         };
       } else {
         thumbnailElement.style.backgroundImage = null;
       }
     }



    //  Show Hide In Click add payement

 var buttonremove = document.getElementById("addcardshoehide");
var containeraddcard = document.getElementById("addcardcredit");
 var containersuccess = document.getElementById("addtocard-success");
 

 buttonremove.addEventListener("click", function () {
   containeraddcard.style.display = "none";
    containersuccess.style.display = "block";

  
 });