

const ProfileImage = () => {
  return (
    <div
      className="
    w-[300px] h-[300px] 
    bg-[url('/myPhoto.jpg')] bg-no-repeat bg-center bg-cover 
    shadow-[inset_0_0_0_9px_rgba(0,0,0,0.3)] 
    order-1 
    justify-self-center 
    rounded-[60%_40%_30%_70%_/_60%_30%_70%_40%] 
    animate-profile_image
  "
    ></div>
  );
};

export default ProfileImage;
