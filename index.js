function createEmployeeRecord(employee) {
    const employeeRecord =
    {
        firstName: "",
        familyName: "",
        title: "",
        payPerHour: "",
        timeInEvents: [],
        timeOutEvents:[]
     }      
   employeeRecord.firstName = employee[0]
   employeeRecord.familyName = employee[1]
   employeeRecord.title = employee[2]
   employeeRecord.payPerHour = employee[3]
   employeeRecord.timeInEvents = []
   employeeRecord.timeOutEvents =[]
   return employeeRecord
}

function createEmployeeRecords(employee) {
   return employee.map(createEmployeeRecord)
} 

function createTimeInEvent(date) {
    let timeIn = date.split(" ")
    let len = this.timeInEvents.length
    this.timeInEvents[len] = 
       {
        type: "TimeIn",
        hour: parseInt(timeIn[1]),
        date: timeIn[0]
      }
    
    return this 
}

function createTimeOutEvent(date) {
    let timeOut = date.split(" ")
    let len = this.timeOutEvents.length
    this.timeOutEvents[len] = 
       {
        type: "TimeOut",
        hour: parseInt(timeOut[1]),
        date: timeOut[0]
      }
    
    return this 
}

function hoursWorkedOnDate(date) {
    let hoursWorked = 0
    for (let i=0; i < this.timeInEvents.length; i++){
      if(this.timeInEvents[i].date === date){
         hoursWorked = (this.timeOutEvents[i].hour - this.timeInEvents[i].hour) * .01
       break  
      }  
  }
  return hoursWorked
}

function wagesEarnedOnDate(date) {
    let pay = 0
    let hoursWorked=0
    hoursWorked=hoursWorkedOnDate.call(this, date)
    pay = pay + hoursWorked * this.payPerHour
    console.log("this is the pay:", pay)
    return pay 
}

/*
 We're giving you employeeRecord function. Take a look at it, you might see some usage
 that's new and different. That's because we're avoiding a well-known, but
 sneaky bug that we'll cover in the next few lessons!

 As a result, the lessons for employeeRecord function will pass *and* it will be available
 for you to use if you need it!
 */

const allWagesFor = function () {
    //console.log("what is this like:", this)
    const eligibleDates = this.timeInEvents.map(function (e) {
        return e.date
    })

    const payable = eligibleDates.reduce(function (memo, d) {
        return memo + wagesEarnedOnDate.call(this, d)
    }.bind(this), 0) // <== Hm, why did we need to add bind() there? We'll discuss soon!

    return payable
}
function findEmployeeByFirstName(empArray, firstName) {
    let found = "no"
    for (let i = 0; i, empArray.length; i++ ){
        if (empArray[i].firstName === firstName) {
            found = "yes"
            return empArray[i]
        }
    }
    if (found === "no") return "undefined"
}

function calculatePayroll(employeeRecords) {
    console.log(employeeRecords)
    let pay=0
    for (let i = 0; i < employeeRecords.length; i++) {
        pay = pay + allWagesFor.call(employeeRecords[i])
    }   
   return pay
}