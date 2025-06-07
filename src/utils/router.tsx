export const getValidRouters = ()=>{
    return [
    '/',
    '/auth/login',
    '/auth/register']
}
export const isValidRoute = (path: string): boolean=>{
    const validRoute = getValidRouters();
    if(validRoute.includes(path)){
        return true
    }

    //duong dan dong
    const isDynamicRoute = validRoute.some(route => {
        const pattern = route.replace(/\[.*?\]/g,'[^/]+');
        return new RegExp(`^${pattern}$`).test(path);
    })
    return isDynamicRoute
    
}