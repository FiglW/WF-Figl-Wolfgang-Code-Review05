window.onload = function(){
let output = document.querySelector(".output");


// candidates
for(profile of profiles ){			
	output.innerHTML+= 
	`<div class ="card cardSet1 text-white">
                <div class="card-body">
                    <img src="${profile.imagesrc}" class="img-thumbnail" alt="AL"width="auto">
                    <h3 class="card-title mt-2">${profile.name}</h3>
                    <h5 class="card-subtitle">${profile.slogan}</h5>
                    <button id="${profile.id}"class= "mybutton">&#10084;</button>

                    
                </div>
            </div>`
            /*btn btn-danger und eine andere klasse doesnt work with the click function :( */
            
}

let fav=[];
let fav1=[];

$(".mybutton").on("click",function(){
	mid=$(this).attr("id");
	z=mid-1;

	console.log("mudss"+mid);
	fav.push(profiles[z]);
	console.log(fav);
				chek= fav.includes(mid);
  var fav1 = fav.filter(function(elem, index, self) {
      return index === self.indexOf(elem);});
	console.log(chek);
      $(`.outputfav`).empty();

//filter function//




//favourite function//

	for( i=0; i<fav1.length;i++){

			
		$(".outputfav").append(
		`<div class ="card cardSet3 text-white id=fav${i}">
                <div class="card-body">
                    <img src="${fav1[i].imagesrc}"class="img-thumbnail" alt="AL"width="auto">
                    <h3 class="card-title mt-2">${fav1[i].name}
                    <h5 class="card-subtitle">${fav1[i].location}</h5>
                    <h6 class="card-subtitle">${fav1[i].age}</h6>
                    <p class=" card-para">${fav1[i].hobbies}</p>
                    <p class=" card-para">${fav1[i].favouritemusic}</p>

                    <button id="${fav1[i].id}"class= "dislikebutton">&#128078;</button>
                </div>
            </div>`	)


		// remove funktion//
		$(".dislikebutton").on("click",function(){
			it=($(this).attr("id"))-1;
			console.log(it);
			fav1.splice($.inArray(fav1[it], fav1),7);

		$(this).parentsUntil(".card").remove();

	

		})

	}
		


	
})


}

;



