# Levo um casaquinho?

## Deploy
<a href="https://levo-um-casaquinho-85gc-hmu4ckehf-diegobeker.vercel.app/">
  https://levo-um-casaquinho-85gc-hmu4ckehf-diegobeker.vercel.app/
</a>

## Run Application

Set up the Environment Variables using the file .env.example

Run the following commands

```
 npm install
 npm run preview
```
## Run docker image

```
docker run -d --name my-container -p 8081:80 diegobeker/desafio
```

Check it out on localhost/8081

## Build docker image from this project

Clone this repository and run

```
docker build -t myusername/myimage:tag .
```

```
docker run -d --name my-container -p 8080:80 myusername/myimage:tag
```

Check it out on localhost/8080

