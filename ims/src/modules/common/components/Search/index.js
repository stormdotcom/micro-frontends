import React, { useState, useRef, useEffect } from "react";
import { SearchIcon } from "../../../../common/components/Icons";
import { search } from "../../../socket/actions";
import { useDispatch, useSelector } from "react-redux";
import SearchPopover from "./SearchPopover";
import { STATE_REDUCER_KEY as COMMON } from "../../constants";
import { USER_TYPE } from "../../../user-management/auth/constants";
import { actions } from "../../../socket/slice";
import { STATE_REDUCER_KEY } from "../../../socket/constants";

const Search = () => {
  const inputRef = useRef(null);
  const [searchTerm, setSearchTerm] = useState("");
  const dispatch = useDispatch();
  const { role } = useSelector(state => state[COMMON].userDetails);
  const isPopoverOpen = useSelector(state => state[STATE_REDUCER_KEY].search.isPopoverOpen);
  const debounceTimeout = useRef(null);
  const isUser = role === USER_TYPE.USER;
  const handleOnChange = (val) => {
    setSearchTerm(val);
    if (debounceTimeout.current) {
      clearTimeout(debounceTimeout.current);
    }
    debounceTimeout.current = setTimeout(() => {
      if (val.length > 1) {
        dispatch(search(val));
      }
    }, 400);
  };

  useEffect(() => {
    return () => {
      if (debounceTimeout.current) {
        clearTimeout(debounceTimeout.current);
      }
    };
  }, []);
  if (isUser) {
    return (
      <div className="relative w-full mx-auto ">
        <div
          className="flex items-center space-x-2 xs:space-x-0 border border-gray-300 rounded-full p-2 xs:p-1 bg-white shadow-sm cursor-pointer"
          onClick={() => dispatch(actions.setPopover(!isPopoverOpen))}
        >
          <SearchIcon className="h-6 w-6 text-gray-600 stroke-2 xs:h-4 xs:w-4" />
          <input
            ref={inputRef}
            type="text"
            placeholder="Search"
            value={searchTerm}
            onChange={(e) => handleOnChange(e.target.value)}
            className="outline-none px-2 text-gray-700 xs:h-4 xs:px-0 sm:text-sm w-full"
          />
        </div>
        {isPopoverOpen && (
          <SearchPopover />
        )}
      </div>
    );
  }

};

export default Search;
