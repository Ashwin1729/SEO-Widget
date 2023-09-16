import React from "react";
import { Backdrop, Typography } from "@mui/material";
import { Dna } from "react-loader-spinner";

const Loader = () => {
  return (
    <div>
      <Backdrop
        sx={{ color: "white", zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={true}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
          }}
        >
          <Dna
            visible={true}
            height="150"
            width="150"
            ariaLabel="dna-loading"
            wrapperStyle={{}}
            wrapperClass="dna-wrapper"
          />
          <Typography>Scanning and Analysing your Website ... </Typography>
        </div>
      </Backdrop>
    </div>
  );
};

export default Loader;
