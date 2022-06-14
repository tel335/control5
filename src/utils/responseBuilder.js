exports.getOKResponse = (ctx, data) => {
    ctx.body = data
    ctx.status = 200
    return ctx
}

exports.getErrorResponse = (ctx) => {
    ctx.body = { message: 'Hubo un error al mostrar toda la lista' }
    ctx.status = 500
    return ctx
}

exports.getErrorResponseClassifier = (ctx) => {
    ctx.body = {  message: 'Hubo un error al mostrar toda la lista' }
    ctx.status = 500
    return ctx
}

exports.getErrorResponseName = (ctx) => {
    ctx.body = {message: 'No se han encontrado coincidencias' }
    ctx.status = 200
    return ctx
}
