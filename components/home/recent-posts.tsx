import { Box, Container, Stack, Typography, Link as MuiLink } from '@mui/material';
import Link from 'next/link';
import React from 'react';
import PostsCard from './posts-card';
import { Post } from '@/models/post';

type RecentPostsProps = {};

const PostList: Post[] = [
    {
        id: '1',
        title: 'lorem ipsum dolor sit amet, consectetur 1',
        publishedDate: '09022023',
        tagList: ['Design', 'Artwork'],
        description: 'lorem ipsum dolor sit amet, consectetur adip 2',
    },
    {
        id: '2',
        title: 'lorem ipsum dolor sit amet, consectetur 2',
        publishedDate: '08032022',
        tagList: ['Design', 'Pattern'],
        description: 'lorem ipsum dolor sit amet, consectetur adip 2',
    },
];

const RecentPosts = (props: RecentPostsProps) => {
    return (
        <Box component={'section'} bgcolor={'secondary.light'} pt={2} pb={4}>
            <Container>
                <Stack direction={'row'} justifyContent={'space-between'}>
                    <Typography>Recent Post</Typography>
                    <Link href={'./blog'} passHref>
                        <MuiLink component={'span'} sx={{ display: { xs: 'none', md: 'inline-block' } }}>
                            View All
                        </MuiLink>
                    </Link>
                </Stack>

                <Stack
                    sx={{
                        '& > div': {
                            width: {
                                xs: '100%',
                                md: '50%',
                            },
                        },
                    }}
                    direction={{
                        xs: 'column',
                        md: 'row',
                    }}
                    spacing={3}
                >
                    {PostList.map((item, index) => {
                        return (
                            <Box key={item.id}>
                                <PostsCard post={item}></PostsCard>
                            </Box>
                        );
                    })}
                </Stack>
            </Container>
        </Box>
    );
};

export default RecentPosts;
