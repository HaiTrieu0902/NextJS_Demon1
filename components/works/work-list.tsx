import React from 'react';
import { Work } from '@/models/works';
import { Box, Divider } from '@mui/material';
import WorkCard from './work-card';

export interface WorkListProps {
    workList: Work[];
}

const WorkList = (props: WorkListProps) => {
    const { workList } = props;

    return (
        <Box>
            {workList.map((work, index) => (
                <React.Fragment key={work.id}>
                    <WorkCard work={work} />
                    <Divider sx={{ my: 3 }} />
                </React.Fragment>
            ))}
        </Box>
    );
};

export default WorkList;
