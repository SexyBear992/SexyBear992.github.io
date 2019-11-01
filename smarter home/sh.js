var one=document.querySelector("#one")
	var img=document.querySelectorAll("#one>img");
	var next_1=document.getElementById("next_1");
	var prve_1=document.getElementById("prve_1");
	var lis=document.querySelectorAll(".ul_1 li")
	var bd=document.querySelectorAll(".ul_1 .bd")
	var two=document.getElementById("two")
	var next_2=document.getElementById("next_2");
	var prve_2=document.getElementById("prve_2");
	var yuan=document.querySelectorAll(".yuan>a")
	var imgActive=img[0];
	var bdActive=bd[0];
	var yuanActive=yuan[0];
	var index=0;
	var index1=0;
	
	
	    
	
		next_1.onclick=function(){
			imgActive.className="";
			bdActive.className="bd";
			index++;
			index%=img.length;
			img[index].className="active";
			imgActive=img[index];
			bd[index].className="bd a";
			bdActive=bd[index];
			prve_1.style.display="block";
			
			if(index==3){
				next_1.style.display="none";
				prve_1.style.display="block";
			}
		}
		
		prve_1.onclick=function(){
			imgActive.className="";
			bdActive.className="bd";
			index--;
			img[index].className="active";
			imgActive=img[index];
			bd[index].className="bd a";
			bdActive=bd[index];
			next_1.style.display="block";
			if(index==0){
				next_1.style.display="block";
				prve_1.style.display="none";
			}
		}
		
		one.onmouseenter=function(){
			if(index==0){
				next_1.style.display="block";
				
			}
			if(index!=0&&index!=3){
				next_1.style.display="block";
			    prve_1.style.display="block";
			}
			if(index==3){
				prve_1.style.display="block";
				
			}
			
		}
		one.onmouseleave=function(){
			next_1.style.display="none";
			prve_1.style.display="none";
			
		}
		
		
		
	for(var i=0;i<lis.length;i++){
			(function(i){
				
				lis[i].onclick=function(){
					imgActive.className="";
					bdActive.className="bd";
					img[i].className="active";
					imgActive=img[i];
					bd[i].className="bd a";
					bdActive=bd[i];
					index=i;
					
				}
				
				
				
			})(i);
	}
	
	next_2.onclick=function(){
		index1++;
		index1%=6;
		two.style.left=-(index1*1176.5)+"px";
		this.style.left=(index1*1176.5)+1450+"px";
		prve_2.style.left=(index1*1176.5)+10+"px";
		yuanActive.className="";
		yuan[index1].className="y_a";
		yuanActive=yuan[index1];
		
		prve_2.style.display="block";
		if(index1>4){
			this.style.display="none";
			prve_2.style.display="block";
			two.style.left=-(index1*1176.5)+397+"px";
		    this.style.left=(index1*1176.5)+397+1450+"px";
		    prve_2.style.left=(index1*1176.5)-397+20+"px";
			
		}
		two.style.transition="left 0.3s";
		
	}
	prve_2.onclick=function(){
		index1--;
		index1%=6;
		
		two.style.left=-(index1*1176.5)+"px";
		next_2.style.left=(index1*1176.5)+1450+"px";
		prve_2.style.left=(index1*1176.5)+20+"px";
		yuanActive.className="";
		yuan[index1].className="y_a";
		yuanActive=yuan[index1];
		next_2.style.display="block";
		
		if(index1==0){
			this.style.display="none";
			next_2.style.display="block";
			
			
		}
		
	}
	two.onmouseenter=function(){
			if(index1==0){
				next_2.style.display="block";
				
			}
			if(index1!=0&&index1!=5){
				next_2.style.display="block";
			    prve_2.style.display="block";
			}
			if(index1==5){
				prve_2.style.display="block";
				
			}
			
		}
		two.onmouseleave=function(){
			next_2.style.display="none";
			prve_2.style.display="none";
			
		}
		
		for(var i=0;i<yuan.length;i++){
			(function(i){
				yuan[i].onclick=function(){
					two.style.left=-(i*1176.5)+"px";
					next_2.style.left=(i*1176.5)+1450+"px";
					prve_2.style.left=(i*1176.5)+10+"px";
					yuanActive.className="";
					yuan[i].className="y_a";
					yuanActive=yuan[i];
					if(i>4){
						next_2.style.display="none";
						prve_2.style.display="block";
						two.style.left=-(i*1176.5)+397+"px";
					    next_2.style.left=(i*1176.5)+397+1450+"px";
					    prve_2.style.left=(i*1176.5)-397+20+"px";
						
					}
					index1=i;
				}
			})(i)
		}