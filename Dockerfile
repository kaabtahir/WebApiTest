FROM mcr.microsoft.com/playwright:v1.20.0-focal

WORKDIR /webapitest

COPY package.json package-lock.json ./
RUN npm install
RUN npx playwright install

COPY . .

CMD ["npx", "playwright", "test", "--reporter=html"]