import { Work } from '@/models';
import { Box, Chip, Stack, Typography } from '@mui/material';
import Image from 'next/image';

export interface WorkCard {
    work: Work;
}

const WorkCard = (props: WorkCard) => {
    const { work } = props;

    return (
        <Stack direction={{ xs: 'column', md: 'row' }} spacing={2}>
            <Box width={{ xs: '100%', md: '246px' }} flexShrink={0}>
                <Image loading={'lazy'} src={work.thumbnailUrl} width={246} height={180} alt="work card thumbnail" />
            </Box>

            <Box>
                <Typography variant="h5" fontSize={16} fontWeight={'bold'}>
                    {work.title}
                </Typography>

                <Stack direction={'row'} my={2} spacing={2}>
                    <Chip color="default" label={work.createAt.substring(4)} size="small" />
                    <Typography>{work.tagList.join(', ')}</Typography>
                </Stack>

                <Typography>{work.title}</Typography>
            </Box>
        </Stack>
    );
};

export default WorkCard;
