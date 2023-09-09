class Group {
  constructor()
	{
		this.values = [];
	}

	add(n)
	{
		if (!this.values.includes(n)) {
			this.values.push(n);
			this.values.sort();
		}
	}

	delete(n)
	{
		if (this.values.includes(n))
		{
			let i = this.values.indexOf(n);
			let last = this.values.length - 1;

			if (i != last)
			{
				let t = this.values[last];
				this.values[last] = this.values[i];
				this.values[i] = t;
			}

			this.values.pop();
			this.values.sort();
		}
	}

	has(n)
	{
		return this.values.includes(n) ? true : false;
	}
	
	static from(collection)
	{
		let g = new Group;
      
    	for (let value of collection)
			{
      		g.add(value);
    	}
      
    	return g;
	}
}

let group = Group.from([10, 20]);
console.log(group.has(10));
// → true
console.log(group.has(30));
// → false
group.add(10);
group.delete(10);
console.log(group.has(10));
// → false