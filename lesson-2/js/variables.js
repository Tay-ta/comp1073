		/* STEP 1: Declare variables
		Use a-z, 0-9, A-Z and underscores, avoiding reserved names
		All program variables are generally declared at the beginning */
		let myName;
		let myAge;
		

		/* STEP 2: Initialize variables
		Don't confuse a variable with no value with one that doesn't exist at all */
		myName = "lucie";
		myAge = 27;

		/* STEP 3: Updating variables
		Once a variable has been declared, this can be done any time */
		const myJob="student";
		const myProgram = "computer programming";

		// STEP 4: Variable types (use typeof in the console)
		// Numbers
		let numCars = 5;
		let myCar = "benz";
		
		// Strings (use '' or "")
		let carDetail = `2025 +${myCar}`;
		console.log(carDetail);
		// Booleans
		let isJsFun = true;
		// Arrays
		let myFamlily = ["me","sister","mom","dad"];
		let myNum = [1,9,9,7];
		
		// Objects
		let myObj ={
			name:"lucie",
			age:27,
			job: "student"
		};
		// STEP 5: Typing (JavaScript is a loosely-typed language)
		console.log(typeof(myObj));

