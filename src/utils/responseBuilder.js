exports.getOKResponse = (ctx, data) => {
    ctx.body = data
    ctx.status = 200
    return ctx
}

exports.getErrorResponse = (ctx) => {
    ctx.body = { status: 500, message: 'Hubo un error al mostrar toda la lista' }
    ctx.status = 500
    return ctx
}

exports.getResponse2 = (ctx,data) => {
    console.log("dsdadas")
    console.log(data)
    if(data == []){
        ctx.body = data
        ctx.status = 200
        return ctx
    }
    else{
        ctx.body = data
        ctx.status = 200  
        return ctx
    }
}