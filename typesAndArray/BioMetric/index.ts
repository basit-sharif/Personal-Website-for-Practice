interface NavbarItemType {
    label:string,
    href:string,
}
interface biometricType {
    name: string,
    students: string,
    instructor: string
}
export const NavbarItems : Array<NavbarItemType>=[
    {
        label:"Home",
        href:"/"
    },
    {
        label:"Blogs",
        href:"/"
    },
    {
        label:"Cotact",
        href:"/"
    },
    {
        label:"About",
        href:"/"
    }
]

export const Biometric: Array<biometricType> = [
    {
        name: "PIAIC",
        students: "5000+",
        instructor: "100+"
    },
    {
        name: "Syllani",
        students: "4000+",
        instructor: "700+"
    },
    {
        name: "Panaverse",
        students: "2000+",
        instructor: "500+"
    }
]


