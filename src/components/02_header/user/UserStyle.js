import styled from "styled-components";
import { FaRegUser } from "react-icons/fa6";
import { sizes } from "../../01_config/Sizes";

const UserIcon = styled(FaRegUser)`
    position: relative;
    top: 3px;
    font-size: 1.6rem;
    border: 3.5px solid black;
    border-radius: 5px;
    margin-left: ${sizes.margins_desk};
    cursor: pointer;
`

const UserWrapper = styled.div`
    position: absolute;
    width: 150px;
    background-color: lightgray;
    right: ${sizes.marginsides};
    top: ${sizes.headerheight};
    @media(max-width: 800px) {
        right: 0;
        top: ${sizes.headerhight_mobile}
    }
`
const UserItem = styled.div`
    width: 100%;
    height: 30px;
    display: flex;
    align-items: center;
    padding-left: 5px;
    border-bottom: gray solid 1px;
    cursor: pointer;
    user-select: none;
    @media(max-width: 800px) {
        justify-content: center;
    }

`

const YouAreLogged = styled.div`
    position: absolute;
    bottom: 0;
    right: ${sizes.margins_desk};
    color: red;
    color: ${({logged}) => logged=="logged out" ? "red" : "green"};
    user-select: none;
    @media(max-width: 800px) {
        right: ${sizes.marginmobile};
    }
`

export { UserIcon, UserWrapper, UserItem, YouAreLogged }