import { useRouter } from 'next/router';
import React from 'react';

type Props = {};

const postId = (props: Props) => {
    const router = useRouter();
    return (
        <div>
            postId
            <p> hihihih {JSON.stringify(router.query)}</p>
        </div>
    );
};

export default postId;
