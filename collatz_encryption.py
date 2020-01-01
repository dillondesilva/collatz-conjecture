COLLATZ_STEPS = 3
original_string = "the quick brown fox jumped over the lady"

def collatz_encrypt(n):
    step_count = 0
    while step_count < COLLATZ_STEPS:
        if n == 1:
            break
        if n % 2 == 0:
            n = n/2
        else:
            n = 3 * n + 1
        step_count += 1

    to_char = chr(int(65 + (n % 26)))
    return to_char

def convert_to_collatz(str_to_encrypt):
    encrypted_str = ""
    for l in str_to_encrypt:
        l_ord = ord(l)
        collatz_encrypted_l = str(collatz_encrypt(l_ord))
        encrypted_str += collatz_encrypted_l
    
    return encrypted_str

print(convert_to_collatz(original_string))