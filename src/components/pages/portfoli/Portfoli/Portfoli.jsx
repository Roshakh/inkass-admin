import React, { Component } from 'react'
import EdiText from 'react-editext'
import './Portfoli.css'
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

function Portfoli() {

    const onSave = (val) => {
        console.log("Edited Value -> ", val);
      };

  return (
   <div className='Portfoli'>
        <div className='PortfoliBox'>
            <h1 className='PortfoliTitle'>Портфолио</h1>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>
               <EdiText
                type="text"
                value="Отчетность  по Национальным стандартам"
                onSave={onSave}
              />
           </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          <EdiText
                type="text"
                value="Отчетность  по Национальным  стандартам"
                onSave={onSave}
              />
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>
          <EdiText
                type="text"
                value="What is real? How do you define real?"
                onSave={onSave}
              />
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          <EdiText
                type="text"
                value="What is real? How do you define real?"
                onSave={onSave}
              />
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography> <EdiText
                type="text"
                value="What is real? How do you define real?"
                onSave={onSave}
              /></Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography> <EdiText
                type="text"
                value="What is real? How do you define real?"
                onSave={onSave}
              /></Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          <EdiText
                type="text"
                value="What is real? How do you define real?"
                onSave={onSave}
              />
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography> <EdiText
                type="text"
                value="What is real? How do you define real?"
                onSave={onSave}
              /></Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          <EdiText
                type="text"
                value="What is real? How do you define real?"
                onSave={onSave}
              />
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography> <EdiText
                type="text"
                value="What is real? How do you define real?"
                onSave={onSave}
              /></Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          <EdiText
                type="text"
                value="What is real? How do you define real?"
                onSave={onSave}
              />
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
   </div>
  );
}

export default Portfoli;
