import React, { Component } from "react";
import EdiText from "react-editext";
import "./Vaprosi.css";
import { Link } from "react-router-dom";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

export default function SimpleAccordion() {
  const onSave = (val) => {
    console.log("Edited Value -> ", val);
  };

  return (
    <div className="Vaprosi">
      <div className="vaprosiBox"> 
        <h1 className="VaprosiTitle">Часто задаваемые вопросы</h1>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
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
            <div className="vaprosiCreateBox">
              <Link className="vaprosiCreateBtn" to="/NewVaprosi">
                <button>Create</button>
              </Link>
            </div>
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
            <div className="vaprosiCreateBox">
              
              <Link className="vaprosiCreateBtn" to="/NewVaprosi">
             
                <button>Create</button>
              </Link>
            </div>
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
            <div className="vaprosiCreateBox">
              <Link className="vaprosiCreateBtn" to="/NewVaprosi">
                <button>Create</button>
              </Link>
            </div>
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
            <div className="vaprosiCreateBox">
            
              <Link className="vaprosiCreateBtn" to="/NewVaprosi">
                {" "}
                <button>Create</button>
              </Link>
            </div>
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
            <div className="vaprosiCreateBox">
              
              <Link className="vaprosiCreateBtn" to="/NewVaprosi">
                
                <button>Create</button>
              </Link>
            </div>
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
            <div className="vaprosiCreateBox">
              <Link className="vaprosiCreateBtn" to="/NewVaprosi">
                <button>Create</button>
              </Link>
            </div>
          </AccordionDetails>
        </Accordion>
      </div>
    </div>
  );
}
