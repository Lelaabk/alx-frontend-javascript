export default function createReportObject(employeesList) {
    return {
        allEmployees: {
            ...employeesList,
        },
        getNumberofDepartments: (employeesList) => Object.keys(employeesList).length,
    };
}
