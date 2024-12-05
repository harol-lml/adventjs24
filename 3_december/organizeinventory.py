def organizeInventory(inventory):
    intv = {}
    for i in inventory:
        if i['category'] not in intv:
            intv[i['category']] = {}
        if i['name'] not in intv[i['category']]:
            intv[i['category']][i['name']] = i['quantity']
        else:
            intv[i['category']][i['name']] += i['quantity']
    return intv

inventory = [
    { 'name': 'car', 'quantity': 3, 'category': 'toys' },
    { 'name': 'doll', 'quantity': 5, 'category': 'toys' },
    { 'name': 'ball', 'quantity': 2, 'category': 'sports' },
    { 'name': 'car', 'quantity': 2, 'category': 'toys' },
    { 'name': 'racket', 'quantity': 4, 'category': 'sports' },
    { 'name': 'ball', 'quantity': 1, 'category': 'sports' }
]

intv = organizeInventory(inventory)

print(intv)