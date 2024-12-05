def create_xmas_tree(height, ornament):
  create_row = lambda spaces, content: '_'*(spaces) + content + '_'*(spaces)
  create_tree = lambda n, content: content * n
  trunk = create_row(height-1, '#')
  tree = ''
  row = 1
  for i in range(height):
    tree += create_row(height-i-1, create_tree(row, ornament)) + '\n'
    row += 2
  return tree+trunk+'\n'+trunk

print(create_xmas_tree(3, '·'))