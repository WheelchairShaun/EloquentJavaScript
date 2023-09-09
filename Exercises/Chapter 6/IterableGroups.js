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

	[Symbol.iterator]()
	{
		return new GroupIterator(this);
	};
}

class GroupIterator
{
	constructor(group)
	{
		this.i = 0;
		this.group = group;
	}

	next()
	{
		if (this.i == this.group.values.length) return { done: true };

		let value = this.group.values[this.i];
		this.i++;

		return { value, done: false };
	}
	
}

for (let value of Group.from(["a", "b", "c"])) {
	console.log(value);
}
// → a
// → b
// → c