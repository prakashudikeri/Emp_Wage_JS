class EmployeePayrollData{
    //Property 
    id; salary;

    //constructor
    constructor(id, name, salary){
        this.id = id;
        this.name  = name;
        this.salary = salary;
    }
    //getter & setter method
    get name () {return this._name;}
    set name (name) {this._name = name;}

    //method
    toString() {
        return "id =" +this.id+ " , name = " +this.name+ ", salary= " +this.salary;
    }
}

let employeePayrollData = new EmployeePayrollData (1, "Mark", 303030);
    console.log(employeePayrollData.toString());
employeePayrollData.name = "John";
    console.log(employeePayrollData.toString());