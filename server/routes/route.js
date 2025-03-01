import express from 'express'
import Emoji from '../models/emojiSchema.js';

const router = express.Router()


 /**
 * @swagger
 * /add_emoji:
 *   post:
 *     summary: Add a new emoji
 *     description: Add a new emoji to the database
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Emoji'
 *     responses:
 *       200:
 *         description: Emoji added successfully
 *       400:
 *         description: Invalid request body
 *       401:
 *         description: Unauthorized
 */

router.post("/add_emoji", async (req, res) => {
    try {
      const { emoji, keywords, code } = req.body;
  
      // Validate input
      if (!emoji || !Array.isArray(keywords) || keywords.length === 0 || !code) {
        return res.status(400).json({ message: "Invalid request body" });
      }
console.log(code, process.env.CODEWORD)
      if(process.env.CODEWORD !== code){
        return res.status(401).json({ message: "Unauthorized" });
      }
  
      // Add to database (Assuming Emoji model exists)
      const newEmoji = new Emoji({ emoji, keywords });
      await newEmoji.save();

      res.status(200).json({ message: "Emoji added successfully", newEmoji });
    } catch (error) {
      res.status(500).json({ message: "Server error", error });
    }
  });


/**
 * @swagger
 * /get_emoji:
 *   get:
 *     summary: Get all emojis
 *     description: Retrieve all emojis from the database.
 *     responses:
 *       200:
 *         description: Emojis retrieved successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Emoji'
 *       500:
 *         description: Server error
 */
router.get("/get_emoji", async (req, res) => {
    try {
      const emojis = await Emoji.find();
      res.status(200).json(emojis);
    } catch (error) {
      res.status(500).json({ message: "Server error", error });
    }
})

/**
 * @swagger
 * /search:
 *   get:
 *     summary: Search for emojis by keyword
 *     description: Get emojis that match the search keyword in real-time.
 *     parameters:
 *       - in: query
 *         name: keyword
 *         schema:
 *           type: string
 *         description: The keyword to search for emojis
 *     responses:
 *       200:
 *         description: List of matching emojis
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Emoji'
 *       500:
 *         description: Server error
 */
router.get("/search", async (req, res) => {
    try {
      const { keyword } = req.query;
      if(!keyword) {
        return res.status(400).json({ message: "Keyword is required" });
      }
// Find all emojis that match the keyword
      const emojis = await Emoji.find({ keywords:{ $regex: keyword, $options: 'i' } });
      res.status(200).json(emojis);
    } catch (error) {
      res.status(500).json({ message: "Server error", error });
    }
})
  
 
  


 export default router