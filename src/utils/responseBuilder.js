exports.getOKResponse = (ctx, data) => {
    console.log("ok")
    ctx.body = data
    ctx.status = 200
    return ctx
}

exports.getErrorResponse = (ctx) => {
    console.log("error")
    ctx.body = { status: 500, message: 'Hubo un error al mostrar toda la lista' }
    ctx.status = 500
    return ctx
}

exports.getErrorResponse2 = (ctx) => {
    console.log("error2")
    ctx.body = { status: 200, message: 'No se han encontrado coincidencias' }
    ctx.status = 200
    return ctx
}