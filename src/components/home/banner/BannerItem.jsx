import {Paper} from "@mui/material";

function BannerItem({ item })
{
    return (
        <Paper elevation={0}>
            <img src={item.img} alt={item.name} height="613" width="1600" className="img-responsive"/>
        </Paper>
    )
}

export default BannerItem;
