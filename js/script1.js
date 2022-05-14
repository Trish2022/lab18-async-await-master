function view(arrEmployees) {
    // COUNTER THAT APPEARS NEXT TO EMPLOYEES NAME (START AT 1)
    let i = 1
    // LOOP THROUGH EMPLOYEES ARRAY
    for (let employee of arrEmployees) {
        console.log(`${i}. ${employee}`)
        i++ // INCREMENT COUNTER
    }
    console.log('')
}
function add(arrEmployees) {
    // COLLECT THE EMPLOYEE'S NAME AND TITLE
    let name = prompt('Enter the employee\'s name')
    let title = prompt('Enter the employee\'s title')
    // PUSH NEW EMPLOYEE TO TEMP ARRAY
    arrEmployees.push(`${name} (${title})`)
    // DISPLAY SUCCESS MESSAGE
    console.log(`${name} was successfully added.`)
    console.log('')
}
function del(arrEmployees) {
    // ASK USER WHICH EMPLOYEE THEY WANT TO DELETE
    let num = parseInt(prompt('Enter employee number to delete'))
    // CHECK AND MAKE SURE ENTRY IS A VALID NUMBER
    if (num < 1 || num > arrEmployees.length) {
        alert('Invalid employee number.')
    } else {
        let employee = arrEmployees.splice(num - 1, 1)
        console.log(`${employee} was successfully deleted.`)
        console.log('')
    }
}
function init() {
    // DISPLAY COMMAND MENU
    console.log('The Employee Management Application')
    console.log('-----------------------------------')
    console.log('COMMAND MENU')
    console.log('show - Show all employees')
    console.log('add - Add an employee')
    console.log('del - Delete an employee')
    console.log('exit - Exit the application')
    console.log('-----------------------------------')
    console.log('')
    // START WITH AN EMPTY ARRAY
    let arrEmployees = []

    // FETCH THE JSON DATA
    async function loadJson(url) { 
        let response = await fetch(url); )
      
        if (response.status == 200) {
          let json = await response.json();
          return json;
        }
      
        throw new Error(response.status);
      }
      
      loadJson('../data/employees.json')
        .catch(alert); 

            // KEEP THE USER AT THE COMMAND MENU
            do {
                // ALLOW THE USER TO ENTER A COMMAND
                let command = prompt('Enter command').toLowerCase()
                // CHECK AND MAKE SURE COMMAND IS NOT NULL
                if (command !== null) {
                    if (command === 'show') {
                        view(arrEmployees)
                    } else if (command === 'add') {
                        add(arrEmployees)
                    } else if (command === 'del') {
                        del(arrEmployees)
                    } else if (command === 'exit') {
                        break
                    } else {
                        alert('That is not a valid command.')
                    }
                } else {
                    alert('Please enter a command.')
                }
            } while (true)
            console.log('The program has been terminated.')
        })
        .catch( error => console.log(error.message) )
}
init()