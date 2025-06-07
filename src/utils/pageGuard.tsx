"use client";

import { usePathname,useRouter } from "next/navigation";
import React, { useEffect } from "react";
import { isValidRoute } from "./router";

export function PageGuard({children}: {children: React.ReactNode}){
    const router = useRouter();
    const pathname = usePathname();
    useEffect(()=>{
        if(!isValidRoute(pathname)){
            router.push('/404');
        }
    },[pathname,router])
    return (
        <>
        {children}
        </>
    )
}