const employee = {
    name: "John",
    streetAddress: "51 Peerless Ave",
};

function destructivelyupdateEmployeeWithKeyandValue(employee, key, value) {
    const employee = { value }
    return employee
}

function updateEmployeeWithKeyandValue(employee, key, value) {
    const newObj = {...employee, "name":"Miguel","streeAddress": "32 Sunrise Drive" }
    return newObj
}

function deleteFromEmployeeByKey(emplyee, key) {
    const newObj2 = {...emplyee[key]}
    delete newObj2[key]
    return newObj2
}

function destructivelyDeleteFromEmployeeByKey(employee, key) {
    delete employee[key]
    return employee
}