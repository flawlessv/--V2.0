import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { CardWrapper } from "./style";

const bull = (
  <Box
    component="span"
    sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}
  >
    •
  </Box>
);

export default function OrderCard(props) {
  const {
    data: { title, topContent, bottomContent },
    getServiceType,
    index,
  } = props;
  const titleArr = Array.from(title);
  return (
    <CardWrapper>
      <Card sx={{ minWidth: 275, textAlign: "center" }}>
        <CardContent>
          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            服务类型
          </Typography>
          <Typography variant="h5" component="div">
            {titleArr[0]}
            {bull}
            {titleArr[1]}
            {bull}服{bull}务
          </Typography>
          <Typography sx={{ mb: 1.5 }} color="text.secondary">
            resume services
          </Typography>
          <Typography variant="body2">
            {topContent}
            <br />
            {`${bottomContent}`}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small" sx={{ ml: 2, mr: 10 }}>
            了解更多
          </Button>
          <div className="checkbox-wrapper-31">
            <input
              type="checkbox"
              name="serveType"
              value={index}
              // checked={(e) => getServiceType(e.target.value, index)}
              onChange={(e) => getServiceType(e.target.value)}
            />

            <svg viewBox="0 0 35.6 35.6">
              <circle
                className="background"
                cx="17.8"
                cy="17.8"
                r="17.8"
              ></circle>
              <circle className="stroke" cx="17.8" cy="17.8" r="14.37"></circle>
              <polyline
                className="check"
                points="11.78 18.12 15.55 22.23 25.17 12.87"
              ></polyline>
            </svg>
          </div>
        </CardActions>
      </Card>
    </CardWrapper>
  );
}
