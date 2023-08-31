import { Link, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { useEffect } from "react";
import { Para } from "../../../components/para";
import { useAnimate, useInView } from "framer-motion";

export const ProjectCard = ({
  image,
  title,
  description,
  duration,
  fromL = true,
  plink,
}) => {
  const [scope, animate] = useAnimate();
  const isInView = useInView(scope, { once: true });

  useEffect(() => {
    if (isInView) {
      animate(
        scope.current,
        { opacity: 1, x: [-1500, 0] },
        { duration: duration, delay: 0.25, type: "spring" }
      );
      if (!fromL) {
        animate(
          scope.current,
          { opacity: 1, x: [1500, 0] },
          { duration: duration, delay: 0.25, type: "spring" }
        );
      }
    }
  }, [isInView, fromL]);
  return (
    <>
      {fromL ? (
        <Link
          href={plink}
          target="_blank"
          rel="noreferrer"
          style={{ textDecoration: "none", color: "black" }}
        >
          <Box
            ref={scope}
            sx={{
              width: 250,
              height: 300,
              backgroundImage: `url(${image})`,
              borderRadius: 5,
              display: "flex",
              flexDirection: "column-reverse",
              mb: 3,
              opacity: 0,
            }}
          >
            <Box
              sx={{
                backgroundColor: "rgba(76,76,76,0.7)",
                height: 160,
                borderRadius: 5,
                p: 3,
              }}
            >
              <Typography sx={{ color: "white" }}>{title}</Typography>
              <Para>{description}</Para>
            </Box>
          </Box>
        </Link>
      ) : (
        <Link
          href={plink}
          target="_blank"
          rel="noreferrer"
          style={{ textDecoration: "none", color: "black" }}
        >
          <Box
            ref={scope}
            sx={{
              width: 250,
              height: 300,
              backgroundImage: `url(${image})`,
              borderRadius: 5,
              display: "flex",
              flexDirection: "column-reverse",
              mb: 3,
              opacity: 0,
            }}
          >
            <Box
              sx={{
                backgroundColor: "rgba(76,76,76,0.7)",
                height: 160,
                borderRadius: 5,
                p: 3,
              }}
            >
              <Typography sx={{ color: "white" }}>{title}</Typography>
              <Para>{description}</Para>
            </Box>
          </Box>
        </Link>
      )}
    </>
  );
};
