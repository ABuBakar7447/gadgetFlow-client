interface IText {
    text:string
}

const SectionTitle = ({text}:IText) => {
    return (
        <div>
            <p className="text-[30px] font-bold text-black my-16 text-center">{text}</p>
        </div>
    );
};

export default SectionTitle;