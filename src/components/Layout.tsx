import React, { ReactNode } from 'react'
import Head from "next/head"
import Menu from "./Menu"
import styles from '../styles/Layout.module.css'
import ShoppingCart from "./ShoppingCart"

export type LayoutProps = {
    title: string,
    children?: ReactNode,
}

export default function layout({ title, children }: LayoutProps) {
    return (
        <div>
            <Head>
                <title>{title ? ` | ${title}` : ""}</title>
                <meta name="description" content="Generated by create next app" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <Menu />

            <div className={styles.container}>
                {children}
            </div>
            <ShoppingCart />
        </div>
    )
}