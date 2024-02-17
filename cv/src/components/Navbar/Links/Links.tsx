import Link from "next/link"

const Links = () =>{
    const links = [
        {
            title : "Homepage",
            path : '/'
        },
        {
            title : "About",
            path : '/about'
        }
    ]

    return (
        <div>
            {links.map((link => (
                <Link href={link.path} key = {link.title}>{link.title}</Link>
            )))}
        </div>
    )
}

export default Links