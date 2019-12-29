from PIL import Image

MAX_Y =  500
MAX_X = 500

MAX_ITER = 100

img = Image.new('RGB', (MAX_X, MAX_Y))

def escape_collatz(n):
    i = 0
    while n != 1 and i < MAX_ITER:
        if n % 2 == 0:
            n = n / 2
        else:
            n = 3 * n + 1
        
        i += 1
    
    return i

for y in range(MAX_Y):
    for x in range(MAX_X):
        iters = int(escape_collatz((x + y) ))
        img.putpixel((x, y), (255 - (iters % 255), 100 - (iters % 100), 180 - (iters % 180)))

img.save('collatz.png')