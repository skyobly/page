void function(){
	var container = document.getElementById("container"),
		list = document.getElementById("list"),
		li = Array.prototype.slice.call(list.children),
	    height = document.body.clientHeight,
	    width = document.body.clientWidth,
		startY = 0,
	    endY = 0,
	    translateY = 0,
	    pageIndex = 0,
	    pageNumber = 8;
	    timeStart = 0,
	    isMoving = false;
	
	list.ontouchstart = function(e){
		if(isMoving) return ;
		
		startY = e.touches[0].clientY;
		timeStart = Date.now();
		
	}

	list.ontouchmove = function(e){
		e.preventDefault();	
		if(isMoving) return ;

		list.style.cssText = "-webkit-transition-duration:0;-webkit-transform:translate3d(0px, "+(translateY+e.touches[0].clientY-startY)+"px, 0px);";
	}

	list.ontouchend = function(e){
		if(isMoving) return ;
		
		endY = e.changedTouches[0].clientY;
		var diff = endY - startY;
	
		if(Date.now() - timeStart < 400){
			//next page
			if(diff < 0){
				if(pageIndex != pageNumber-1){
					li[pageIndex].classList.remove("active");
					pageIndex++;
					li[pageIndex].classList.add("active");
				}
					
			}
			//pre page
			if(diff > 0 ){	
				if(pageIndex != 0)
				{
					li[pageIndex].classList.remove("active");
					pageIndex--;
					li[pageIndex].classList.add("active");
				}
			}
			isMoving = true;
			setTimeout(function(){
				isMoving = false;
			},600);

			translateY = -height*pageIndex;
			list.style.cssText = "-webkit-transition-duration:400ms;-webkit-transform:translate3d(0px, "+translateY+"px, 0px);";

		}
		else{
			//next page
			if(-diff > height/2){
				if(pageIndex != pageNumber-1){
					li[pageIndex].classList.remove("active");
					pageIndex++;
					li[pageIndex].classList.add("active");
				}
			}
			//pre page
			if(diff > height/2 ){	
				if(pageIndex != 0){
					li[pageIndex].classList.remove("active");
					pageIndex--;
					li[pageIndex].classList.add("active");
				}
			}

			isMoving = true;
			setTimeout(function(){
				isMoving = false;
			},600);

			translateY = -height*pageIndex;
			list.style.cssText = "-webkit-transition-duration:400ms;-webkit-transform:translate3d(0px, "+translateY+"px, 0px);";
		}

	}

}();
