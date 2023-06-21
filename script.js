var detailsForm = document.querySelector("#destination_details_form");
detailsForm.addEventListener('submit', handleFormSubmit);
function handleFormSubmit(event){
    event.preventDefault();
     var destName = event.target.elements['name'].value;
     var destLocation = event.target.elements['location'].value;
     var destPhoto = event.target.elements['photo'].value;
     var destDesc = event.target.elements['description'].value;
     for(var i =0; i<detailsForm.length; i++){
      detailsForm.elements[i].value= "";
     }
    

    var destCard = createDestinationCard(destName, destLocation, destPhoto, destDesc);
    var wishListContainer = document.getElementById("destinations_container");
    if (wishListContainer.children.length === 0){
        document.querySelector('#title').innerHTML = "My Wish List";
    }

    document.querySelector('#destinations_container').appendChild(destCard);
}

    function createDestinationCard(name, location, photoURL, description){
        var card= document.createElement("div");
        card.className = "card";

        var img = document.createElement('img');
        img.setAttribute('alt', name);

        var constPhotoUrl = "/images/signpost.jpg";

        if(photoURL === 0){
            img.setAttribute('src', constPhotoUrl);
        } else{
            img.setAttribute('src', photoURL);
        }

        card.appendChild(img);

        var cardBody = document.createElement('div');
        cardBody.className = "card-body";

        var cardTitle = document.createElement("h3");
        cardTitle.innerText = name;
        cardBody.appendChild(cardTitle);

        var cardSubtitle = document.createElement("h4");
        cardTitle.innerText = location;
        cardBody.appendChild(cardSubtitle);

        if(description.length !== 0){
            var cardText = document.createElement('p');
            cardText.innerText = description;
            cardText.className = "card-text";
            cardBody.appendChild(cardText);
        }

        var cardDeleteBtn = document.createElement('button');
        cardDeleteBtn.innerText = 'Remove';
        cardBody.appendChild(cardDeleteBtn);
        cardDeleteBtn.addEventListener('click', removeDestination);

        card.appendChild(cardBody);
        return card;
       
    }
    function removeDestination(event){
        var card = event.target.parentElement.parentElement;
        card.remove();
    }      