function ProfileCard({ title, handle, image }){
    // destructuring
    // const { title, handle } = props;

    return (
        <div>
            <img src={image} alt={title} />
            <div>Title is {title}</div>
            <div>Handle is {handle}</div>
        </div>
    )
}

export default ProfileCard;