function Stack() {
}

Stack.prototype.init = function() {
	this.STACKSIZE = 100;
	this.elements = new Array(this.STACKSIZE);
	this.top = -1;
}

Stack.prototype.pop = function() {
	if(this.top == -1) {
		return 'error';
	} else {
		var ele = this.elements[this.top];
		this.top--;
		return ele;
	}
}

Stack.prototype.push = function(ele) {
	if(this.top == this.STACKSIZE-1) {
		return false;
	}
	
	this.elements[++this.top] = ele;
	return true
}
	
Stack.prototype.peek = function() {
	if(this.top == -1) {
		return 'error'
	}
	return this.elements[this.top];
}

Stack.prototype.length = function() {
	return this.top+1;
}