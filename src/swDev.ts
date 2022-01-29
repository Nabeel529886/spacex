export const swDev = () => {
    if ('serviceWorker' in navigator){
        navigator.serviceWorker.register('/sw.js').then(function(registration) {
            console.log("Service Worker Registration Successful")
        }, (err) => {
         console.log("Service worker registration failed", err)   
        })
    } else{
        console.log("Service Worker not found")
    }
}