function route(pathname, handle) {
    console.log("About to route a request for " + pathname);
    if(typeof handle[pathname] === 'function'){
    	handle[pathname]();
    }else{
    	console.log("Invalid pathname");
    }

}

exports.route = route;
