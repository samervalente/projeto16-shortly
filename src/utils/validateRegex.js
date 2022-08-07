export function isEmail(email){
    return /^[a-z0-9.!#]{2,30}@[a-z0-9]{3,15}(.[a-z]{1,5}){1,5}$/.test(email)
}

export function isUserId(id){
    return /^\s*[0-9]\s*$/.test(id)
}