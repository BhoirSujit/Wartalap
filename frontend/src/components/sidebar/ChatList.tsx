import Search from "./Search"
import ContactList from "./ContactList"

export default function ChatList() {
    return (
        <div className="border-r h-full flex flex-col ">
            <div className="search"><Search></Search></div>
            <div className="contactlist flex-grow-[2]"><ContactList></ContactList></div>
            <div className="foot"></div>

        </div>
    )
}