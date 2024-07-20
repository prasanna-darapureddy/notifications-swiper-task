import { Box, Paper, Typography } from '@mui/material';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCube, Pagination } from 'swiper/modules';
import 'swiper/css/effect-cube';
import 'swiper/css/bundle';
import 'swiper/css/pagination';
import { styles } from './SwiperStyles';

function SwiperPage() {
    return (
        <Swiper
            effect={'cube'}
            grabCursor={true}
            pagination={true}
            modules={[EffectCube, Pagination]}

        >
            <SwiperSlide style={{}} >
                <Paper sx={styles.content_card}>
                    <Box component={'img'} src='/nature1.jpeg' alt='nature' sx={styles.img} />
                    <Typography component={'caption'}>Forest</Typography>
                    <Typography component={'caption'}>Yernakulam, Kerala</Typography>
                </Paper>
            </SwiperSlide>
            <SwiperSlide>
                <Paper sx={styles.content_card}>
                    <Box component={'img'} src='/nature2.jpeg' alt='nature' sx={styles.img} />
                    <Typography component={'caption'}>Pure Lake</Typography>
                    <Typography component={'caption'}>Trivendram, Tamil Nadu</Typography>
                </Paper>
            </SwiperSlide>
            <SwiperSlide>
                <Paper sx={styles.content_card}>
                    <Box component={'img'} src='/nature3.jpeg' alt='nature' sx={styles.img} />
                    <Typography component={'caption'}>Flowers</Typography>
                    <Typography component={'caption'}>Bangalore</Typography>
                </Paper>
            </SwiperSlide>
            <SwiperSlide>
                <Paper sx={styles.content_card}>
                    <Box component={'img'} src='/nature4.jpeg' alt='nature' sx={styles.img} />
                    <Typography component={'caption'}>Sunrice</Typography>
                    <Typography component={'caption'}>Arunachal Pradesh</Typography>
                </Paper>
            </SwiperSlide>
            <SwiperSlide>
                <Paper sx={styles.content_card}>
                    <Box component={'img'} src='/nature5.jpeg' alt='nature' sx={styles.img} />
                    <Typography component={'caption'}>Rocks</Typography>
                    <Typography component={'caption'}>Himalayas</Typography>
                </Paper>
            </SwiperSlide>
        </Swiper>
    )
}

export default SwiperPage