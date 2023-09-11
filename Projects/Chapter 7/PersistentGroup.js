function runRobot(state, robot, memory) {
  for (let turn = 0;; turn++) {
		if (state.parcels.length == 0) {
			return { turn, memory };
    }
    let action = robot(state, memory);
    state = state.move(action.direction);
    memory = action.memory;
  }
}

function generateTasks()
{
	let output = [];
	for (let i = 0; i < 100; i++)
	{
		output.push(VillageState.random());
	}
	return output;
}

function compareRobots(robot1, memory1, robot2, memory2)
{
	let avg1 = 0, avg2 = 0;
	let history1 = [], history2 = [];
	let tasks = generateTasks();

	for (let task of tasks)
	{
		history1.push(runRobot(task, robot1, memory1));
		history2.push(runRobot(task, robot2, memory2));
	}

	for (let h = 0; h < 100; h++)
	{
		avg1 += history1[h].turn;
		avg2 += history2[h].turn;
	}

	avg1 = avg1 / 100;
	avg2 = avg2 / 100;

	console.log(`Robot1 Average Steps: ${avg1}, Robot2 Average Steps: ${avg2}`);
}

compareRobots(routeRobot, [], goalOrientedRobot, []);