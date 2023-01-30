import Link from 'next/link';

interface Properties {
    items: {
        label: string;
        link: string;
    }[];
}

export const Navbar = ({ items }: Properties): JSX.Element => {
    return (
        <nav>
            <ul className="flex flex-row justify-end py-4 bg-slate-900">
                {items.map((item: any, index) => {
                    const { label, link } = item;

                    return (
                        <li className="mx-6" key={index}>
                            <Link href={link}>{label}</Link>
                        </li>
                    );
                })}
            </ul>
        </nav>
    );
};
