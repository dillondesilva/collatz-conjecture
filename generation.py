# Generate n sequences of the Collatz Conjecture
# and output to file

def generateSequence(n):
    chain = [n]
    x = n

    while x != 1:
        if x % 2 == 0:
            x = x / 2
            chain.append(x)
        else:
            x = 3 * x + 1
            chain.append(x)
    
    return chain