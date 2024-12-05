def createFrame(names):
  max_length = max(map(len, names))
  long_text = filter(lambda x: len(x) == max_length, names)
  lentgh = len(list(long_text)[0])+4
  border = '*' * lentgh
  frame = border+'\n'+'\n'.join(map(lambda x: '* '+x.ljust(max_length)+' *', names))+'\n'+border
  return frame

names = ['midu', 'madeval', 'educalvolpz']
print(createFrame(names))