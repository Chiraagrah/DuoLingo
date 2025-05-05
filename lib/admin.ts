

import { auth } from "@clerk/nextjs/server"

const allowedIds = [
    "user_2uDf5xfBwSSfwxwV232hrhRBjWx",
];

export const isAdmin = async () => {
    const { userId }  = await auth();

    if(!userId){
        return false;
    }

    return allowedIds.indexOf(userId)!== -1; 
}