const data = [
    {name: "sujit bhoir",
        profilepic: "adsha",
    },
    {name: "sujit bhoir",
        profilepic: "adsha",
    },
    {name: "sujit bhoir",
        profilepic: "adsha",
    }
    ,
    {name: "sujit bhoir",
        profilepic: "adsha",
    }
]


const ContactPlaceholder = (props) => {
    return (
        <div className="border-b p-2 flex relative gap-2 items-center"> 
            <div className="pic rounded-full bg-red-900 w-8 h-8"><img src={props.profile} alt='a'/></div>
            <div className="name flex flex-grow-[2] flex-col">
                <span>{props.name}</span>
                <span>{'hi sujit'}</span>
            </div>
            <div className="date">{'dasasd'}</div>
        </div>
    );
}


export default function ContactList() {
    return (
        <>
        {data.map((d) => (
            <ContactPlaceholder {...d}/>
    ))}
        </>
        
    )
}