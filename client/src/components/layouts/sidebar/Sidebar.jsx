import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { menus } from './tempJson';
import { IoIosRadioButtonOn } from "react-icons/io";

const Sidebar = () => {

    const [items, setItems] = useState(null);
    const [openArticleIds, setOpenArticleIds] = useState([]); // Track open menus
    const screenLoading = false;
    const currentArticleID = "2-2-1"
    useEffect(() => {
        setItems(menus);
        // Automatically open active article and its parents
        if (menus && currentArticleID) {
            const openIds = getOpenArticleIds(menus, currentArticleID);
            setOpenArticleIds(openIds);
        }
    }, [menus, currentArticleID]);

    return (
        <>
            {items?.length > 0 ? (
                <ul className={`w-full list-none p-0 ${screenLoading && 'pointer-events-none opacity-50 animate-pulse'}`}>
                    {items?.map((menuItem, index) => (
                        <MenuItem
                            key={index}
                            menuItem={menuItem}
                            openArticleIds={openArticleIds}
                            setOpenArticleIds={setOpenArticleIds}
                            currentArticleID={currentArticleID}
                        />
                    ))}
                </ul>
            ) : <p className='font-semibold text-yellow-700'>No Articles..!!</p>}
        </>
    );
};

// Helper function to find all parent IDs that should be open
const getOpenArticleIds = (menus, selectedArticleID) => {
    let openIds = [];

    const findOpenArticles = (articleList) => {
        for (let article of articleList) {
            if (isArticleOrParentSelected(article, selectedArticleID)) {
                openIds.push(article._id);
                if (article.subArticles?.length > 0) {
                    findOpenArticles(article.subArticles);
                }
            }
        }
    };

    findOpenArticles(menus);
    return openIds;
};

const isArticleOrParentSelected = (menuItem, selectedArticleID) => {
    if (!menuItem || !selectedArticleID) return false;
    if (menuItem._id === selectedArticleID) return true;

    // Recursively check if any subArticle or its subArticles contain the selected article
    if (menuItem?.subArticles && menuItem?.subArticles.length > 0) {
        return menuItem.subArticles.some(subItem => isArticleOrParentSelected(subItem, selectedArticleID));
    }

    return false;
};


const MenuItem = ({ menuItem, openArticleIds, setOpenArticleIds, currentArticleID }) => {

    const navigate = useNavigate();
    const [isHover, setIsHover] = useState(false);

    const handleMenuClick = () => {
        if (!menuItem?.subArticles || menuItem?.subArticles?.length <= 0) {
            navigate(`?${encodeURIComponent(menuItem?.name)}=${menuItem?._id}`);
        }
        // for dropdown
        if (!isOpen) {
            setOpenArticleIds((prev) => [...prev, menuItem._id]);
        } else {
            setOpenArticleIds((prev) => prev.filter(id => id !== menuItem._id));
        }
    };

    // Check if this article or its parent is selected
    const isSelectedOrParentSelected = isArticleOrParentSelected(menuItem, currentArticleID);
    const isOpen = openArticleIds.includes(menuItem._id);

    return (
        <li>

            <div
                onMouseEnter={() => setIsHover(true)}
                onMouseLeave={() => setIsHover(false)}
                className={`${isSelectedOrParentSelected && 'signatureText'} cursor-pointer rounded-md flex justify-between items-center gap-2 px-2 py-[6px] ${isHover && 'contrarySecondaryBG contraryNormalText'} `}
                onClick={handleMenuClick}
            >
                <p className="flex gap-2">
                    <span className="mt-1">{menuItem.icon || <IoIosRadioButtonOn />}</span>
                    <span className="line-clamp-2">{menuItem.name}</span>
                </p>

                {(menuItem?.subArticles && menuItem?.subArticles?.length > 0) && (
                    <span className={`text-sm ${isOpen && 'rotate-180'} transition-all duration-300`}>▼</span>
                )}
            </div>

            {(menuItem?.subArticles && menuItem?.subArticles?.length > 0) && isOpen && (
                <ul className="pl-6">
                    {menuItem?.subArticles?.map((subItem, subIndex) => (
                        <MenuItem
                            key={subIndex}
                            menuItem={subItem}
                            openArticleIds={openArticleIds}
                            setOpenArticleIds={setOpenArticleIds}
                        />
                    ))}
                </ul>
            )}
        </li>
    );
};


export default Sidebar;