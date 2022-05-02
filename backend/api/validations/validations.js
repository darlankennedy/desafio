module.exports = app =>{

    function existeOrError(value,msg){
        if(!value) throw msg
        if(!Array.isArray(value) && value.length === 0) throw msg
        if(typeof value === 'string'  && !value.trim()) throw msg
    }
    
    function notExisteOrError(value,msg){
        try {
            existeOrError(value,msg)
        } catch (error) {
            return
        }
       throw msg
    }

    function iqualOrError(valueA,valueB,msg){
        if (valueA !== valueB)  {
            throw msg
        }
    }


    return {iqualOrError,existeOrError,notExisteOrError}

}