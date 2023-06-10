import { Auth } from '@/components/common/auth';
import Header from '@/components/common/header';
import { AdminLayout } from '@/components/layout/admin';
import { Box, Typography } from '@mui/material';
import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';

export interface AboutPageProps {}

const About = (props: AboutPageProps) => {
    const [postList, setPostList] = useState([]);
    const router = useRouter();

    console.log('About query: ', router.query);
    const page = router.query?.page;

    useEffect(() => {
        if (!page) return;
        (async () => {
            const response = await fetch(`https://js-post-api.herokuapp.com/api/posts?_page=${page}`);
            const data = await response.json();

            setPostList(data.data);
        })();
    }, [page]);

    function handleNextClick() {
        router.push(
            {
                pathname: '/about',
                query: {
                    page: (Number(page) || 1) + 1,
                },
            },
            undefined,
            { shallow: true },
        );
    }

    return (
        <Box component={'div'}>
            <Typography component="h1" variant="h3" color="primary.main">
                About Page
            </Typography>

            <Header />

            <Auth>
                <ul className="post-list">
                    {postList.map((post: any) => (
                        <li key={post.id}>{post.title}</li>
                    ))}
                </ul>
                <button onClick={handleNextClick}>Next page</button>
            </Auth>
        </Box>
    );
};

export async function getStaticProps() {
    console.log('get static props');

    return {
        props: {},
    };
}
About.Layout = AdminLayout;

export default About;
