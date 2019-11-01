
function DownLoadObj(id){
	this.downloadobj=document.getElementById(id);
	this.appdownloadbtn=this.downloadobj.querySelector('.app-download-btn');
	this.appxiala=this.downloadobj.querySelector('.app-xiazai-link');
	this.istrue=false;
	this.hidden();
}

DownLoadObj.prototype.hidden=function(){
	var self =this;
	this.appdownloadbtn.onclick=function(){
			if(self.istrue==false){
			self.appxiala.style.display="block";
			self.istrue=true;
			
		}else{
			self.appxiala.style.display="none";
			self.istrue=false;
		}
	}
	
}

