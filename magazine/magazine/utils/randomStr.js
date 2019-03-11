const strArr = ['a','d','fg','h','j','v','u','e','dg','jy','sg','ty','s','r','b']

const random = n => {

    let str = ''

    for(let i = 0; i < n;i ++ ){
        let index = Math.floor(Math.random() * 16)
        str += strArr[index]

    }

    return str
}

export {random}