<script>
 
    //   fetch("https://the-trivia-api.com/v2/questions")
    //fetch("https://ci-swapi.herokuapp.com/api/")
    fetch("https://the-trivia-api.com/v2/session")
        .then(response => response.text())
        .then(data => displayData(data))
        /*  {
             document.getElementById("content").innerText = data.people;
         })
         */
        .catch(error => {
            console.error('Error fetching data:', error);
        });

    function displayData(data) {
        document.getElementById("content").innerText = data;
        //document.getElementById("content").json = data.people;
        //console.log(data.people)
    }
    
    </script>