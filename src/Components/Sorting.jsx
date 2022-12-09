import React from "react";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator,
} from "@chakra-ui/react";
import { ChevronRightIcon } from "@chakra-ui/icons";
import { NavLink } from "react-router-dom";
function Sorting() {
  return (
    <div className="pl-4">
      <Breadcrumb
        spacing="8px"
        separator={<ChevronRightIcon color="gray.500" />}
      >
        <BreadcrumbItem>
          <NavLink to={"/"}>
            <BreadcrumbLink className="simpleFont ">Home</BreadcrumbLink>
          </NavLink>
        </BreadcrumbItem>

        <BreadcrumbItem>
          <BreadcrumbLink className="font-semibold simpleFont">
            Products
          </BreadcrumbLink>
        </BreadcrumbItem>
      </Breadcrumb>
    </div>
  );
}

export default Sorting;
