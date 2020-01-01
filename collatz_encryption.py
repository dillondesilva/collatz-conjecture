COLLATZ_STEPS = 5
original_string = "abc"

def convert_to_collatz(str_to_encrypt):
    encrypted_str = ""
    for l in str_to_encrypt:
        l = ascii(l)
        collatz_encrypted_l = collatz_encrypt(l)
