const User = require("../models/user");

module.exports = {
  index: async (req, res) => {
    try {
      const users = await User.find();
      if (users.length > 0) {
        res.status(200).json({
          status: true,
          data: users,
          method: req.method,
          url: req.url,
        });
      } else {
        res.json({
          status: false,
          message: "No Data",
        });
      }
    } catch (error) {
      res.status(400).json({ success: false });
    }
  },

  show: async (req, res) => {
    try {
      const users = await User.findById(req.params.id);
        res.status(200).json({
          status: true,
          data: users,
          method: req.method,
          url: req.url,
        });
    } catch (error) {
      res.status(400).json({ success: false });
    }
  },

  store: async (req, res) => {
    try {
      const users = await User.create(req.body);
      res.status(200).json({
        status: true,
        data: users,
        method: req.method,
        url: req.url,
        message: "Data Added!",
      });
    } catch (error) {
      res.status(400).json({
        success: false,
      });
    }
  },

  update: async (req, res) => {
    try {
      const users = await User.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
        runValidators: true
      })

      res.json({
        status: true,
        data: users,
        method: req.method,
        url: req.url,
        message: "Data Updated!",
      });

    } catch (error) {
      res.status(400).json({
        success: false,
      });
    }
  },

  delete: async (req, res) => {
    try {
      const users = await User.findByIdAndDelete(req.params.id)
      res.json({
        status: true,
        data: users,
        method: req.method,
        url: req.url,
        message: "Data Deleted!",
      });
    } catch (error) {
      res.status(400).json({
        success: false,
      });
    }
  },
};
