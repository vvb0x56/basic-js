class VigenereCipheringMachine {

    constructor(direct = true) {
        this.direct = direct;
        this.a_char_code = 'A'.charCodeAt(0);
        this.z_char_code = 'Z'.charCodeAt(0);
    }
    
    encrypt(message, key) {
        if (typeof message === 'undefined' || typeof key === 'undefined') 
            throw new TypeError('invalid arguments');

        message = message.toUpperCase();    key = key.toUpperCase();

        let encrypted_str= '';
        let current_idx = 0; 

        for (let i = 0; i < message.length; i++) {
            encrypted_str += this.enc_char_fwd(message.charAt(i), key.charAt(current_idx % key.length));

            if (this.is_char(message.charAt(i)))    current_idx++; 
        }

        return this.direct ? encrypted_str : this.reverse_string(encrypted_str);
    }

    decrypt(encryptedMessage, key) {
        if (typeof encryptedMessage === 'undefined' || typeof key === 'undefined') 
            throw new TypeError('invalid arguments');

        encryptedMessage = encryptedMessage.toUpperCase();    key = key.toUpperCase();

        
        let message = '';
        let current_idx = 0;


        for (let i = 0; i < encryptedMessage.length; i++) {
            message += this.enc_char_bck(encryptedMessage.charAt(i), key.charAt(current_idx % key.length));    

            if (this.is_char(message.charAt(i)))    current_idx++; 
        }

        return this.direct ? message : this.reverse_string(message);
    }

    reverse_string(str) {
        let reversed = '';
        for (let i = 0; i < str.length; i++) 
            reversed += str.charAt(str.length - i - 1);

        return reversed;
    }



    enc_char_fwd(c_src, c_key) {
        if (!this.is_char(c_src))       return  c_src;

        return String.fromCharCode(((c_src.charCodeAt(0) + c_key.charCodeAt(0) - 2 * this.a_char_code)) % 26 + this.a_char_code);
    }



    enc_char_bck(c_src, c_key) {
        if (!this.is_char(c_src))       return c_src;

        let tmp = c_src.charCodeAt(0) - c_key.charCodeAt(0);   

        if (tmp < 0) tmp += 26;

        return String.fromCharCode(tmp + this.a_char_code);
    }
    
    is_char(c) { return c.charCodeAt(0) >= this.a_char_code && c.charCodeAt(0) <= this.z_char_code; } 
}

module.exports = VigenereCipheringMachine;

