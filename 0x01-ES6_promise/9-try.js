export default function guardrail(mathFunction) {
    const arr =[];
    try {
        arr.push(mathFunction(), 'Guardrail was processed');
    } catch (error) {
        arr.push(`${error.name}: ${error.message}`, 'Guardrail was processed');
    }
    return arr;
}