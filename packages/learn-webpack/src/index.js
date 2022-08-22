console.log(1)
const a = 1;
const fn = () => a;
class A {
    constructor(name) {
        this.name = name;
        console.log(1);
    }
    /**
     * getName
     * @returns string
     */
    getName() {
        return this.name;
    }

    // @need-try 设置名字失败
    setName(name) {
        this.name = name;
    }
}
