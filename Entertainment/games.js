window.onload=function(){
	var xiala =document.querySelector('.banner-img-xiala');
	var xw=document.querySelector('.container-lunbo');
	xiala.onclick=function(){
	}
	
	var lunbolis =document.querySelector('.lunbo-img-link');
	var lunboprev =document.getElementById('lunbo-prev');
	var lunbonext =document.getElementById('lunbo-next');
	var points =document.querySelectorAll('.point');
	var pointactive=points[0];
	var index=0;
	var lunbooffset=1060;
	var lunbolength=5;
	lunboprev.onclick =function(){
	    index--;
		lunbolis.style.left=-(index*lunbooffset)+"px";
		
		pointactive.className="point";
		points[index].className="point-active";
		pointactive=points[index];
		
		if(index!=lunbolength-1&&index!=0){
			lunbonext.style.display="block";
			lunboprev.style.display="block";
		}else if(index==0){
			lunboprev.style.display="none";
		}	
	}
	lunbonext.onclick =function(){
		index++;
		lunbolis.style.left=-(index*lunbooffset)+"px";
		
		pointactive.className="point";
		points[index].className="point-active";
		pointactive=points[index];
	
		if(index==lunbolength-1){
			lunbonext.style.display="none";
		}else if(index!=0){
			lunboprev.style.display="block";
		}
	}
	for(var i=0;i<points.length;i++){
		points[i].index=i;
		points[i].onmouseenter=function(){
			pointactive.className="point";
			
			points[this.index].className="point point-active";
			// console.log(this.index);
		     index=this.index;
			lunbolis.style.left=-(index*lunbooffset)+"px";
			if(index==0){
				lunboprev.style.display="none";
				lunbonext.style.display="block";
			}else if(index==lunbolength-1){
				lunboprev.style.display="block";
				lunbonext.style.display="none";
			}else{
				lunbonext.style.display="block";
				lunboprev.style.display="block";
			}	
		}
		points[i].onmouseleave=function(){
			points[this.index].className="point";
		}
	}
	var thirdlink=document.querySelector('.thirdary-link');
	var thirdaryprev=document.getElementById('thirdary-prev');
	var thirdarynext=document.getElementById('thirdary-next');
	var thirdoffset=400;
	var thirdlength=6;
	thirdaryprev.onclick=function(){
		index--;
		thirdlink.style.left=-(index*thirdoffset)+"px";
    if(index!=thirdlength-3&&index!=0){
			thirdarynext.style.display="block";
			thirdaryprev.style.display="block";
		}else if(index==0){
			thirdaryprev.style.display="none";
		}	
	}
	thirdarynext.onclick=function(){
		index++;
		thirdlink.style.left=-(index*thirdoffset)+"px";
		console.log(index);
		if(index==thirdlength-3){
			thirdarynext.style.display="none";
		}else if(index!=0){
			thirdaryprev.style.display="block";
		}
	}
	var fouslink=document.querySelector('.sp-link');
	var fouslis=document.querySelectorAll('.sp-li');
	var fousprev=document.getElementById('fousary-prev');
	var fousnext=document.getElementById('fousary-next');
	var fousbox=fouslink.parentNode;
	var fousoffset=272.5;
	var fouslength=8;
	fousprev.onclick=function(){
		index--;
		fouslink.style.left=-(index*fousoffset)+"px";
		if(index!=fouslength-4&&index!=0){
			fousnext.style.display="block";
			fousprev.style.display="block";	
		}else if(index==0){
				fousprev.style.display="none";
			}
	}
	
	fousnext.onmouseenter=function(){
		for(var i=0;i<fouslis.length;i++){
			fouslis[i].style.opacity="1";
		}
	}
	fousnext.onmouseleave=function(){
		for(var i=0;i<fouslis.length;i++){
			fouslis[i].style.opacity="0";
		}
	}
	fousprev.onmouseenter=function(){
		for(var i=0;i<fouslis.length;i++){
			fouslis[i].style.opacity="1";
		}
	}
	fousprev.onmouseleave=function(){
		for(var i=0;i<fouslis.length;i++){
			fouslis[i].style.opacity="0";
		}
	}
	fousnext.onclick=function(){
		
		index++;
		fouslink.style.left=-(index*fousoffset)+"px";
		if(index==fouslength-4){
			fousnext.style.display="none";
		}
		else if(index!=0){
			fousprev.style.display="block";
		}
	}
}