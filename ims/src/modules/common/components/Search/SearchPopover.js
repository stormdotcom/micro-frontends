import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { STATE_REDUCER_KEY } from "../../../socket/constants";
import { useNavigate } from "react-router-dom";
import { SearchIcon } from "../../../../common/components/Icons";
import SearchPopSkelton from "../../../../common/components/Custom/Skelton/SearchPopSkelton";
import { removeStringPortion } from "../../../../utils/commonUtils";
import { actions } from "../../../socket/slice";


const SearchPopover = () => {
    const suggestions = useSelector(state => state[STATE_REDUCER_KEY].search.data);
    const navigate = useNavigate();
    const requestInProgress = useSelector(state => state[STATE_REDUCER_KEY].search.requestInProgress);
    const dispatch = useDispatch();

    const handleClick = ({ type, slug }) => {
        dispatch(actions.setPopover(false));
        if (type === "course") {
            navigate(`./home/course/${slug}`);
        } else if (type === "page") {
            navigate(slug);
        }
    };

    return (
        <div className="absolute w-72 bg-white rounded-md shadow-lg p-2">
            {requestInProgress ? (
                <SearchPopSkelton length={4} />
            ) : (
                <ul className="py-1 h-50 overflow-y-auto">
                    {suggestions.length > 0 && suggestions.map((suggestion, index) => (
                        <li
                            key={index}
                            onClick={() => handleClick(suggestion)}
                            className="px-1 py-1 hover:bg-gray-100 cursor-pointer flex items-center gap-1"
                        >
                            <div className="flex justify-center items-center">

                                {suggestion.type === "course" ? (
                                    suggestion.thumbnailUrl ? (
                                        <img src={suggestion.thumbnailUrl} className="w-5 h-5" alt="Course Thumbnail" />
                                    ) : (
                                        <SearchIcon className="w-4 h-4" />
                                    )
                                ) : suggestion.type === "page" && <SearchIcon className="w-4 h-4" />
                                }
                            </div>
                            <div className="px-1">
                                <p className="font-medium text-sm text-left">{suggestion.title}</p>
                                <p className="font-light text-xs text-gray-600 text-left">{removeStringPortion(suggestion.subTitle, 25)}</p>
                            </div>
                        </li>
                    ))}
                </ul>
            )}
            {(suggestions.length < 1 && !requestInProgress) && <div className="h-50 flex items-center justify-center">
                <p className="font-light text-xs text-gray-600 text-center"> No result found </p>
            </div>}
        </div>
    );
};

export default SearchPopover;
