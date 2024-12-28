# 使用 Node.js 14 作為基底映像
FROM node:14

# 設置工作目錄
WORKDIR /app

# 複製 package.json 並安裝依賴
COPY package.json ./
RUN npm install

# 複製整個專案代碼
COPY . .

# 暴露應用的埠
EXPOSE 3000

# 啟動應用
CMD ["npm", "start"]
