import { Card, Typography, Stack, CardContent, Divider, Link as MuiLink } from '@mui/material';
import { Post } from '@/models/post';
import React from 'react';
import moment from 'moment';
export interface Props {
    post: Post;
}

const PostsCard = ({ post }: Props) => {
    console.log('post', post);

    return (
        <Card>
            <CardContent>
                <Typography variant="h5" fontWeight={'bold'}>
                    {post.title}
                </Typography>
                <Stack direction={'row'} my={2}>
                    <Typography variant="body1">
                        {moment(post.publishedDate, 'DDMMYYYY').format('DD/ MMM/YYYY')}
                    </Typography>
                    <Divider orientation="vertical" sx={{ mx: 2 }} flexItem />
                    <Typography variant="body1">{post.tagList.join(',')}</Typography>
                </Stack>
                <Typography variant="body2">{post.description}</Typography>
            </CardContent>
        </Card>
    );
};

export default PostsCard;
