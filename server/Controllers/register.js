const User = require("../Models/User");
const bcrypt = require('bcryptjs')


exports.list = async (req, res) =>{
 try {
        const { email } = req.query;

        if (email) {
            const user = await User.findOne({ email });
            return res.json(user ? { user } : { error: "User not found" });
        }

        const users = await User.find(); // ✅ ดึงข้อมูล User ทั้งหมด
        res.json(users);
    } catch (err) {
        console.error("❌ Error fetching users:", err);
        res.status(500).json({ error: "Internal Server Error" });
    }
}

exports.createUser = async (req, res) =>{
    const { email, password } = req.body;
    
        if (!email || !password) {
            return res.status(400).json({ error: "All fields are required" });
        }
    
        try {
            // ✅ ตรวจสอบว่า User มีอยู่แล้วหรือไม่
            const existingUser = await User.findOne({ email });
            if (existingUser) {
                return res.status(400).json({ error: "User already exists" });
            }
    
            // ✅ Hash password ก่อนบันทึกลง MongoDB
            const salt = await bcrypt.genSalt(10);
            const hashedPassword = await bcrypt.hash(password, salt);
    
            const newUser = await User.create({
                email,
                password: hashedPassword
            });
    
            console.log("✅ User registered:", newUser);
            res.status(201).json(newUser);
    
        } catch (err) {
            console.error("❌ Registration error:", err);
            res.status(500).json({ error: "Internal Server Error" });
        }
}

exports.checkUser = async (req, res) =>{
    const { email, password } = req.body;
    
        if (!email || !password) {
            return res.status(400).json({ error: "All fields are required" });
        }
    
        try {
            console.log("🔍 Checking user:", email);
            const user = await User.findOne({ email });
    
            if (!user) {
                console.log("❌ User not found:", email);
                return res.status(401).json({ error: "User not found" });
            }
    
            console.log("🔑 Checking password for:", user.email);
            console.log("🛠️ Stored password:", user.password);
    
            const isMatch = await bcrypt.compare(password, user.password);
    
            if (!isMatch) {
                console.log("❌ Invalid password for:", user.email);
                return res.status(401).json({ error: "Invalid credentials" });
            }
    
            console.log("✅ User logged in:", user.email);
            res.status(200).json({ id: user._id, email: user.email });
    
        } catch (err) {
            console.error("❌ Login error:", err);
            res.status(500).json({ error: "Internal Server Error" });
        }
}