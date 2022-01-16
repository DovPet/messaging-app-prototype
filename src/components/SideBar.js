import React from 'react'
import styled from 'styled-components'
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import InsertCommentIcon from '@mui/icons-material/InsertComment';
import InboxIcon from '@mui/icons-material/Inbox';
import DraftsIcon from '@mui/icons-material/Drafts';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import PeopleIcon from '@mui/icons-material/People';
import AppsIcon from '@mui/icons-material/Apps';
import FileCopyIcon from '@mui/icons-material/FileCopy';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import CreateIcon from '@mui/icons-material/Create';
import SideBarOption from './SideBarOption'

function SideBar() {
    return (
        <SideBarContainer>
            <SideBarHeader>
                <SideBarInfo>
                    <h2>TITLE GOES HERE</h2>
                    <h3>
                        <FiberManualRecordIcon />
                        Username Here
                    </h3>
                </SideBarInfo>
                <CreateIcon />
            </SideBarHeader>

            <SideBarOption Icon={InsertCommentIcon} title="Threads"/>
            <SideBarOption Icon={InboxIcon} title="Mentions & reactions"/>
            <SideBarOption Icon={DraftsIcon} title="Saved items"/>
            <SideBarOption Icon={BookmarkBorderIcon} title="Channel browser"/>
            <SideBarOption Icon={PeopleIcon} title="People & user groups"/>
            <SideBarOption Icon={AppsIcon} title="Apps"/>
            <SideBarOption Icon={FileCopyIcon} title="File browser"/>
            <SideBarOption Icon={ExpandLessIcon} title="Show less"/>

            <hr />
            <SideBarOption Icon={ExpandMoreIcon} title="Channels" addChannelOption/>
            <hr />

        </SideBarContainer>
    )
}

export default SideBar

const SideBarContainer = styled.div`
    background-color: var(--slack-color);
    color: white;
    flex: 0.3;
    border-top: 1px solid #49274b;
    max-width: 260px;
    margin-top: 60px;

    > hr {
        margin: 10px 0;
        border: 1px solid #49274b;
    }
`

const SideBarHeader = styled.div`
    display: flex;
    border-bottom: 1px solid #49274b;
    padding: 13px;

    > .MuiSvgIcon-root {
        padding: 8px;
        color: #49274b;
        font-size: 18px;
        background-color: white;
        border-radius: 999px;

    }
`
const SideBarInfo = styled.div`
    flex: 1;

    > h2 {
        font-size: 15px;
        font-weight: 900;
        margin-bottom: 5px;
    }

    > h3 {
        font-size: 13px;
        font-weight: 400;
        display: flex;
        align-items: center;
    }

    > h3 > .MuiSvgIcon-root {
        font-size: 14px;
        margin-top: 1px;
        margin-right: 2px;
        color: green;
    }
`