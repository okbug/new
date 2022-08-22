function loader(source) {
    console.log('loader2');

    return source + ';(() => console.log("this is my yard"))()'
}

loader.pitch = () => {
    console.log('pitch 2')
}

module.exports = loader