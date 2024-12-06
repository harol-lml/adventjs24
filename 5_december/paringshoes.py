def organizeShoes(shoes):
  ordered_shoes = {}
  for shoe in shoes:
    if shoe['size'] in ordered_shoes:
      if shoe['type'] in ordered_shoes[shoe['size']]:
        ordered_shoes[shoe['size']][shoe['type']] += 1
      else:
        ordered_shoes[shoe['size']][shoe['type']] = 1
    else:
      ordered_shoes[shoe['size']] = {}
      ordered_shoes[shoe['size']][shoe['type']] = 1
      if shoe['type'] == 'R':
        ordered_shoes[shoe['size']]['I'] = 0
      else:
        ordered_shoes[shoe['size']]['R'] = 0

  response = []
  for size in ordered_shoes:
    pairs = (ordered_shoes[size]['I'] + ordered_shoes[size]['R'])/2
    if int(pairs) > 0:
      response += [size for _ in range(int(pairs))]

  return response

shoes = [
  { 'type': 'I', 'size': 38 },
  { 'type': 'R', 'size': 38 },
  { 'type': 'R', 'size': 42 },
  { 'type': 'I', 'size': 41 },
  { 'type': 'I', 'size': 42 }
]
ordered_shoes = organizeShoes(shoes)
print(ordered_shoes)