window.addEventListener("load",function(event){
	event.preventDefault();
	var coders=["Andrea Cabrera","Ariadna Izaguirre","Carito Juarez","Cristy Castro","Karol Orrillo","Paola Ortiz"];
	var content=document.createElement("section");
	var title=document.createElement("h1");
	var hr=document.createElement("hr");
	title.innerHTML="Nuestras Coders";
	
	for (var i = 0; i <6 ; i++) {
	    var image=document.createElement("img");
	    var div=document.createElement("div");
	    var span=document.createElement('span');
	    var nombre=document.createTextNode(coders[i]);
	    div.setAttribute('class','div-image');
	    image.setAttribute('src','assets/img/'+i+'.jpg');
	    image.setAttribute('alt',''+coders[i]+'');
	    span.appendChild(nombre);
	    div.appendChild(image);
	    div.appendChild(span);
	    content.appendChild(div);
	    document.getElementsByTagName("body")[0].appendChild(title);
	    document.getElementsByTagName("body")[0].appendChild(hr);
	    document.getElementsByTagName("body")[0].appendChild(content);
  	}
});

