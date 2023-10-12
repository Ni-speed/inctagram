import {NextPage,} from "next";
import {PropsWithChildren, ReactElement} from "react";
import styles from "@/styles/Home.module.css";
import {Navbar} from "@/components/Navbar/Navbar";

export const Layout: NextPage<PropsWithChildren<{}>> =({children}) => {
    return (
        <main className={`${styles.main}`}>
            <Navbar/>
            {children}
        </main>
    );
}
export const getLayout = (page: ReactElement)=>{
    return <Layout>{page}</Layout>
}