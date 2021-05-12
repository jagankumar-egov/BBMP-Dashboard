const array=['jagan','bacac'];

// Example starter JavaScript for disabling form submissions if there are invalid fields
(function () {
    'use strict'
  
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    var forms = document.querySelectorAll('.needs-validation')
  
    // Loop over them and prevent submission
    Array.prototype.slice.call(forms)
      .forEach(function (form) {
        form.addEventListener('submit', function (event) {
          if (!form.checkValidity()) {
            event.preventDefault()
            event.stopPropagation()
          }
  
          form.classList.add('was-validated')
        }, false)
      })
  })()

//   function myFunction() {
//     var itm = document.getElementById("cs-doctor-consultation");
//     var cln = itm.cloneNode(true);
//     document.getElementById("cs-doctor-consultation").appendChild(cln);
//   }
//   myFunction()

        document.querySelectorAll('.jk-home-link').forEach(element=>element.addEventListener('click', function (event) {
            // do something
            window.location.href='BBMPDashboard.html';
        }));

        document.querySelectorAll('.jk-zone-card').forEach(element=>element.addEventListener('click', function (event) {
            // do something
            console.log(event);
            window.location.href='BBMPDoctorsConsultationQueue.html#';
        }));
        document.querySelectorAll('.jk-bed-card').forEach(element=>element.addEventListener('click', function (event) {
            // do something
            console.log(event);
            window.location.href="BBMPBedAllocationQueue.html#";
        }));

    
        document.querySelectorAll('.jk-refresh-icon').forEach(element=>element.addEventListener('click', function (event) {
            // do something
            console.log(event);
            window.location.reload();
        }));
        document.querySelectorAll('.jk-refresh-text').forEach(element=>element.addEventListener('click', function (event) {
            // do something
            console.log(event);
            window.location.reload();
        }));
        
        document.querySelectorAll('.jk-bed-availability').forEach(element=>element.addEventListener('click', function (event) {
          // do something
          console.log(event);
          window.location.href="BBMPBedAvailablity.html#";
      }));
        
      document.querySelectorAll('.jk-bed-available').forEach(element=>element.addEventListener('click', function (event) {
        // do something
        console.log(event);
        window.location.href='BBMPBedAvailabilitySelectedBed.html#';
    }));