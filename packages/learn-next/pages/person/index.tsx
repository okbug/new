import type { NextPage } from 'next'
import Link from "next/link"

const Person: NextPage = () => {
    return <div>
        <h1>Person</h1>
        <div>
            <a href="person/a">to a</a>
            <hr />
            <Link href="person/b"><a>to b</a></Link>
        </div>
    </div>
}

export default Person
