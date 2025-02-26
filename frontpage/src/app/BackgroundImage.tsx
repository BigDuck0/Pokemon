function BackgroundImage({ children }) {
    return (
      <div
        className="min-h-screen w-full bg-contain"
        style={{
          backgroundImage: "url('https://i.redd.it/d2cf2rpqll9a1.jpg')", 
          backgroundRepeat: "repeat-y", 
          backgroundSize: "cover", 
          backgroundPosition: "center",
          
        }}
      >
        {children}
      </div>
    );
  }
  
  export default BackgroundImage;
  