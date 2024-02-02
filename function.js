
        function showAlert() {
            var allowAlways = confirm("https://brandshark.com wants to open this application.\n\nAlways allow Brandshark.com to open this type of app?");
            if (allowAlways) {
                alert("Opening the app!");
            } 
            else {
                var allowAlwaysCheckbox = confirm("Do you want to always allow Brandshark.com to open this type of app?");
                if (allowAlwaysCheckbox) {
                    alert("You chose to always allow.");
                }
                 else {
                    alert("Canceling the request.");
                }
            }
        }

        function showAlert() {
            var allowAlways = confirm("https://brandshark.com wants to open this application.\n\nAlways allow Brandshark.com to open this type of app?");
            if (allowAlways) {
                alert("Opening the app!");
            } else {
                var allowAlwaysCheckbox = confirm("Do you want to always allow Brandshark.com to open this type of app?");
                if (allowAlwaysCheckbox) {
                    alert("You chose to always allow.");
                } else {
                    alert("Canceling the request.");
                }
            }
        }
   