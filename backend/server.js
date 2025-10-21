import express, { request, response } from 'express';

const app = express();

app.listen(5000, () => {
    console.log(`Server đang chạy cổng 5000.`);
})

app.get("/api/task", (request, response) => {
    response.status(200).send(`Bạn có 2 việc cần làm.`);
});

app.post("/api/task", (request, response) => {
    response.status(201).json(`Nhiệm vụ mới đã được thêm vào.`);
});

app.put("/api/task/:id", (request, response) => {
    response.status(200).json({message: `Nhiệm vụ đã được update.`});
});