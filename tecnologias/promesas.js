function msgAfterTimeout (msg, who, timeout) {
	return new Promise((resolve, reject) => {
		setTimeout(
			() => resolve(`${msg} Hello ${who}!`), 
			timeout)
	})
}


//En este caso, la promesa siempre se resuelve correctamente, creando un mensaje de saludo a un usuario

msgAfterTimeout("", "Foo", 100)
.then((msg) =>
	msgAfterTimeout(msg, "Bar", 200))
.then((msg) => {
	console.log(`done after 300ms:${msg}`)
   	return msgAfterTimeout(msg, "Bar", 600)
})
.then((msg) => {
	console.log(`done after 600ms:${msg}`)
    return "Error";
})
.catch((msg) => {
	console.log(`Error:${error}`)
})