module.exports = (req,res,next) => {
    if(req.cookies.mercadoLiebre14){
        req.session.userLogin = req.cookies.mercadoLiebre14
    }
    console.log('>>>>>>>>>>>>>>>>>>>>>>>>>>>>',re.session.userLogin)
    next()
}