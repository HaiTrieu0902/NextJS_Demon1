import { Box, Container, Stack, Typography, Link as MuiLink } from '@mui/material';
import Link from 'next/link';
import React from 'react';
import PostsCard from './posts-card';
import { Work } from '@/models';
import WorkList from '../works/work-list';

type FeatureWorksProps = {};

const workList: Work[] = [
    {
        id: '1',
        title: 'lorem ipsum dolor sit amet, consectetur 1',
        createAt: '09022023',
        tagList: ['Design', 'Artwork'],
        shortDescription: 'lorem ipsum dolor sit amet, consectetur adip 2',
        fullDescription: 'lorem ipsum dolor sit amet, consectetur adip lorem ipsum dolor sit amet, consectetur adip',
        updateAt: '',
        thumbnailUrl: 'https://res.cloudinary.com/dff3itmw6/image/upload/v1686472737/cld-sample-5.jpg',
    },
    {
        id: '2',
        title: 'lorem ipsum dolor sit amet, consectetur 2',
        createAt: '08032022',
        tagList: ['Design', 'Pattern'],
        shortDescription: 'lorem ipsum dolor sit amet, consectetur adip 2',
        fullDescription:
            'lorem ipsum dolor sit amet, consectetur adip lorem ipsum dolor sit amet, consectetur adip lorem ipsum dolor sit amet, consectetur adip lorem ipsum dolor sit amet, consectetur adip',
        updateAt: '',
        thumbnailUrl: 'https://res.cloudinary.com/dff3itmw6/image/upload/v1686472736/cld-sample-2.jpg',
    },
    {
        id: '3',
        title: 'lorem ipsum dolor sit amet, consectetur 3',
        createAt: '08032023',
        tagList: ['Design', 'Figma'],
        shortDescription: 'lorem ipsum dolor sit amet, consectetur adip 2',
        fullDescription:
            'lorem ipsum dolor sit amet, consectetur adip lorem ipsum dolor sit amet, consectetur adip lorem ipsum dolor sit amet, consectetur adip lorem ipsum dolor sit amet, consectetur adip',
        updateAt: '',
        thumbnailUrl: 'https://res.cloudinary.com/dff3itmw6/image/upload/v1686472888/NextJs/DSC_0977_hxtzzl.jpg',
    },
];

const FeatureWorks = (props: FeatureWorksProps) => {
    return (
        <Box component={'section'} pt={2} pb={4}>
            <Container>
                <Typography variant="h5">Feature works</Typography>
                {/* <Stack
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
                ></Stack> */}

                <WorkList workList={workList} />
            </Container>
        </Box>
    );
};

export default FeatureWorks;
