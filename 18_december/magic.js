/**
 * @param {string} agenda
 * @param {string} phone
 * @returns {{ name: string, address: string } | null}
 */
function findInAgenda(agenda, phone) {

    if([...agenda.matchAll(phone)].length != 1) return null

    let arr = agenda.split('\n')

    let resp = null
    const regexToName = /<([^>]+)>/;
    const regexToPhone = /\+\d{1,2}-\d{3}-\d{3}-\d{3}/;

    arr.forEach(value => {
        if(value.indexOf(phone) !== -1){
            const name = value.match(regexToName);
            const phone = value.match(regexToPhone);
            let direction = value.split(name[0])
            resp = {
                name: name[1],
            }

            if(direction.includes('') || direction.includes(' ')){
                direction = direction.filter(item => item !== '' && item !== ' ');
                direction = direction[0].split(phone[0]).filter(item => item !== ''  && item !== ' ')

                resp.address = direction[0].trim()
            }else{
                direction = direction.filter(item => !item.match(regexToPhone))
                resp.address = direction[0].trim()
            }
        }
    })
    return resp
}

// const agenda = `+34-600-123-456 Calle Gran Via 12 <Juan Perez>
// Plaza Mayor 45 Madrid 28013 <Maria Gomez> +34-600-987-654
// <Carlos Ruiz> +1-800-555-0199 Fifth Ave New York`

// findInAgenda(agenda, '34-600-123-456')
// { name: "Juan Perez", address: "Calle Gran Via 12" }

// findInAgenda(agenda, '600-987')
// { name: "Maria Gomez", address: "Plaza Mayor 45 Madrid 28013" }

// findInAgenda(agenda, '+1')

const agenda1 = `+44-700-111-222 Park Lane 10 <Alice Brown>
Broadway 42 New York 10010 <David Smith> +1-212-555-1234
<Emily Johnson> +55-213-212-5678 Avenida Paulista 1000`;

console.log(findInAgenda(agenda1, '212-55'));

