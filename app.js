class Animal {
	static type = 'ANIMAL';
	//присутствует только у самого класса Animal а не у объектов, основанных на этом классе
	constructor(options) {
		this.name = options.name
		this.age = options.age
		this.hasTail = options.hasTail
	}
	voice() {
		console.log("I am Animal")
	}
}

const animal = new Animal({
	name: 'Animal',
	age: 5,
	hasTail: true,
})

class Cat extends Animal {
	static type = 'CAT'

	constructor(options) {
		super(options)
		this.color = options.color
		//таким образом, мы добавляем новые поля в класс, основанный на другом классе (не забываем про супер)
	}
	voice() {
		super.voice()
		//таким образом сначала вызовем родительский метод, а затем дочерний
		console.log("I am cat")
		//если в дочернем классе реализован метод с таким же именем, как и в родительском, то метод дочернего класса его перетирает
	}
	get ageInfo() {
		return this.age * 7
	}
	set ageInfo(newAge) {
		this.age = newAge
	}
}

const cat = new Cat({
	name: 'Cat',
	age: 7,
	hasTail: true,
	color: 'black',
})


class Component {
	constructor(selector) {
		this.$el = document.querySelector(selector)
	}
	hide() {
		this.$el.style.display = 'none'
	}
	show() {
		this.$el.style.display = 'block'
	}
}

class Box extends Component {
	constructor(options) {
		super(options.selector)
		this.$el.style.width = this.$el.style.height = options.size + 'px'
		this.$el.style.backgroundColor = options.backgroundColor
	}
}
class Circle extends Box {
	constructor(options) {
		super(options)
		this.$el.style.borderRadius = "50%"
	}
}

const box1 = new Box({
	selector: "#box1",
	size: 100,
	backgroundColor: "red"
})
const box2 = new Box({
	selector: "#box2",
	size: 300,
	backgroundColor: "blue"
})
const circle1 = new Circle({
	selector: "#circle1",
	size: 90,
	backgroundColor: "green"
})