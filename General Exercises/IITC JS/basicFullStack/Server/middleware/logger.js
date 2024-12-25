export default function logger(req, res, next){
    let log = `The logger says: method is '${req.method}' path is '${req.originalUrl}'`;
    // if(req.query){
    //     log += ' params:'
    //     Object.keys(req.query).forEach(key => {
    //         log += ` ${key} = ${req.query[key]},`;
    //     })
    // }
    // console.log(req);
    console.log('The logger says: params are', req.query);
    console.log(log);
    next();
}