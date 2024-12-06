def in_box(box):
  content = box[1:-1]
  for row in content:
    for char in row[1:-1]:
      if char == '*':
        return True
  return False

gifts = in_box([
    "###",
    "# #*",
    "# #",
    "###",
  ])
print(gifts)