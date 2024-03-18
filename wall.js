function Wall(){
	var spacing = random(30, height/4);
	var spacing_center = random(spacing, height - spacing);
	var score = 0;
	this.top = spacing_center - spacing/2;
	this.bottom = height - (spacing_center + spacing/2);
	this.x = width;
	this.w = 30;
	this.speed = 4;
	this.highlight = false;

	this.show = function(){
		fill(255);
		if(this.highlight){
			fill(255,204,0);
		}
		rect(this.x, 0, this.w, this.top, 0, 0, 10, 10); 
		rect(this.x, height - this.bottom, this.w, this.bottom, 10, 10, 0, 0); 
	}

	this.hit = function(bird){
		if(bird.y < this.top || bird.y > height - this.bottom){
			if(bird.x > this.x && bird.x < this.x + this.w){
				this.highlight = true;
				return true;
			}
		}
		this.highlight = false;
		return false;
	}

	this.update = function(){
		this.x = this.x - this.speed;
	}

	this.offScreen = function(){
		return(this.x < -this.w);
	}

	

}