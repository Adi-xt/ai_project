
const express = require("express");
const router = express.Router();

const Interview = require("../models/Interview");
const auth = require("../authCheck/auth");

// Create Interview
router.post("/interview", auth, async (req, res) => {
  try {
    const {
      experience,
      role,
      difficulty,
      interviewType,
      numberOfQuestions,
      questions,
    } = req.body;

    // Validation
    if (
      !experience ||
      !role ||
      !difficulty ||
      !interviewType ||
      !numberOfQuestions 
    ) {
      return res.status(400).json({
        msg: "Please fill all fields properly",
      });
    }

    // Save interview in MongoDB
    const interview = await Interview.create({
      userId: req.user.userId,
      experience,
      role,
      difficulty,
      interviewType,
      numberOfQuestions,
      // questions,
    });

    return res.status(201).json({
      msg: "Interview created successfully",
      interview,
    });
  } catch (err) {
    console.error("Interview Error:", err);

    return res.status(500).json({
      msg: "Something went wrong",
      error: err.message,
    });
  }
});

module.exports = router;





// const express = require("express");
// const mongoose = require("mongoose");
// const router = express.Router();

// const Interview = require("../models/Interview");
// const auth = require("../authCheck/auth");


// router.post("/interview", auth, async (req, res) => {
//   try {
//     const {
//       experience,
//       role,
//       difficulty,
//       interviewType,
//       numberOfQuestions,
//       questions,
//     } = req.body;

//     if (
//       !experience ||
//       !role ||
//       !difficulty ||
//       !interviewType ||
//       numberOfQuestions == null ||
//       !Number.isInteger(Number(numberOfQuestions)) ||
//       Number(numberOfQuestions) < 1 ||
//       !Array.isArray(questions) ||
//       questions.length === 0
//     ) {
//       return res.status(400).json({
//         msg: "Please fill all fields properly",
//       });
//     }

//     const interview = await Interview.create({
//       userId: req.user._id,
//       experience,
//       role,
//       difficulty,
//       interviewType,
//       numberOfQuestions: Number(numberOfQuestions),
//       questions,
//     });

//     return res.status(201).json({
//       msg: "Interview created successfully",
//       interview,
//     });
//   } catch (err) {
//     console.error("Interview Error:", err);
//     return res.status(500).json({
//       msg: "Something went wrong",
//     });
//   }
// });


// router.get("/interviews", auth, async (req, res) => {
//   try {
//     const interviews = await Interview.find({
//       userId: req.user._id,
//     }).sort({ createdAt: 1 });

//     return res.status(200).json({
//       count: interviews.length,
//       interviews,
//     });
//   } catch (err) {
//     console.error("Get Interviews Error:", err);
//     return res.status(500).json({
//       msg: "Failed to fetch interviews",
//     });
//   }
// });











// router.get("/interview/:id", auth, async (req, res) => {
//   try {
//     const { id } = req.params;

//     if (!mongoose.isValidObjectId(id)) {
//       return res.status(400).json({
//         msg: "Invalid interview ID",
//       });
//     }

//     const interview = await Interview.findOne({
//       _id: id,
//       userId: req.user._id,
//     });

//     if (!interview) {
//       return res.status(404).json({
//         msg: "Interview not found",
//       });
//     }

//     return res.status(200).json({ interview });
//   } catch (err) {
//     console.error("Get Interview Error:", err);
//     return res.status(500).json({
//       msg: "Failed to fetch interview",
//     });
//   }
// });

// // 4. DELETE INTERVIEW BY ID
// router.delete("/interview/:id", auth, async (req, res) => {
//   try {
//     const { id } = req.params;

//     if (!mongoose.isValidObjectId(id)) {
//       return res.status(400).json({
//         msg: "Invalid interview ID",
//       });
//     }

//     const interview = await Interview.findOneAndDelete({
//       _id: id,
//       userId: req.user._id,
//     });

//     if (!interview) {
//       return res.status(404).json({
//         msg: "Interview not found",
//       });
//     }

//     return res.status(200).json({
//       msg: "Interview deleted successfully",
//     });
//   } catch (err) {
//     console.error("Delete Interview Error:", err);
//     return res.status(500).json({
//       msg: "Failed to delete interview",
//     });
//   }
// });

module.exports = router;
