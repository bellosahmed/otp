const mongoose = require('mongoose');
require('dotenv/config');
const app = require('./app');

mongoose.connect(process.env.MONGODB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(() => {
        console.log("Connected to MongoDB");
        const port = process.env.PORT || 3000;
        app.listen(port, () => {
            console.log(`Server running on port ${port} 🔥`);
        });
    })
    .catch((err) => {
        console.error('Failed to connect to MongoDB:', err);
    });
