import React from "react";
import { Link } from "react-router-dom";
import { RiTicketLine, RiMore2Fill, RiAddLine } from "react-icons/ri";
import { Menu, MenuItem, MenuButton } from "@szhsin/react-menu";
import "@szhsin/react-menu/dist/index.css";
import "@szhsin/react-menu/dist/transitions/slide.css";
import { Button } from "@nextui-org/react";

const CardTicket = (props) => {
  const { ticket, totalTickets, text, enlace } = props;

  let status = "";
  let textColor = "";

  switch (ticket) {
    case "pending":
      status = "bg-yellow-500/10 text-yellow-500";
      textColor = "text-yellow-500";
      break;
    case "inProcess":
      status = "bg-blue-500/10 text-blue-500";
      textColor = "text-blue-500";
      break;
    case "close":
      status = "bg-green-500/10 text-green-500";
      textColor = "text-green-500";
      break;
    case "total":
      status = "bg-pink-500/10 text-pink-500";
      textColor = "text-pink-500";
      break;
  }

  return (
    <div className="p-8 bg-[#1E1F25] text-white rounded-xl">
      <div className="flex items-center justify-between mb-4">
        <div>
          {/* <RiTicketLine
            className={`text-4xl ${status} p-2 box-content rounded-xl`}
          /> */}
        </div>
        <div>
          <Menu
            menuButton={
              <MenuButton className="flex items-center p-2 transition-colors rounded-lg gap-x-2 hover:bg-secondary-900">
                <RiMore2Fill />
              </MenuButton>
            }
            align="end"
            arrow
            arrowClassName="bg-secondary-100"
            transition
            menuClassName="bg-secondary-100 p-4"
          >
            {/* <MenuItem className="p-0 hover:bg-transparent">
              <Link
                to="/perfil"
                className="flex items-center flex-1 p-2 text-gray-300 transition-colors rounded-lg hover:bg-secondary-900 gap-x-4"
              >
                Dashboard tickets
              </Link>
            </MenuItem>
            <MenuItem className="p-0 hover:bg-transparent">
              <Link
                to="/perfil"
                className="flex items-center flex-1 p-2 text-gray-300 transition-colors rounded-lg hover:bg-secondary-900 gap-x-4"
              >
                Información
              </Link>
            </MenuItem> */}
          </Menu>
        </div>
      </div>
      {/* Number of tickets */}
      <div className="flex justify-center">
        <h1 className="mb-4 text-4xl font-bold text-white">{totalTickets}</h1>
      </div>
      <hr className="my-4 border border-dashed border-gray-500/50" />
      <div className="flex justify-center">
        <Button color="primary" className="w-[140px]">
          <Link to={enlace}>{text}</Link>
        </Button>
      </div>
    </div>
  );
};

export default CardTicket;
