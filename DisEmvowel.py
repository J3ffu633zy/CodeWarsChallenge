import re

def disemvowel(string):
    #regex to subtract vowels in upper and lowercase
    result=re.sub(r'[aeiou]','',string,flags=re.IGNORECASE)
    
    return result