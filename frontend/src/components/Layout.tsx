import styles from "./Layout.module.css";
import Topbar from "./Topbar";
import ChatLayout from "./ChatLayout";
import ChatList from "./sidebar/ChatList";
import Profile from "./Profile";

export default function Home() {
  return (
    <div className="border h-full w-full">
      <div className={styles.layout}>
        <div className={styles.topbar}>
          <Topbar></Topbar>
        </div>
        <div className={styles.chatlist}>
          <ChatList></ChatList>
        </div>
        <div className={styles.chatlayout}>
          <ChatLayout></ChatLayout>
        </div>
        <div className={styles.profile}>
          <Profile></Profile>
        </div>
      </div>
    </div>
  );
}
