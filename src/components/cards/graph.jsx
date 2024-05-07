import React, { useRef } from 'react';
import Paper from '@mui/material/Paper';
import "./graph.css"

const Graph = (props) => {

  const chartBoxRef = useRef();
  const { children, isMobile } = props

  return (
    <Paper
      className="chartBox"
      ref={chartBoxRef}
      elevation={10}
      sx={{
        minWidth: "150px",
        minHeight: "150px",
      }}
    >
      {children}
    </Paper>
  )
}

export default Graph;
