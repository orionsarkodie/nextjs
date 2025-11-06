"use client"; //not-found is now a client component and usePathname can be used

import { usePathname } from "next/navigation"

export default function NotFound() {
    const pathname = usePathname();
    const productId = pathname.split("/")[2];
    const reviewId = pathname.split("/")[4];
    return (
        <div>
            <h2>Review {reviewId} Not Found product {productId}</h2>
        </div>
    )
}