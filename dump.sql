CREATE TABLE users (
	"id" serial NOT NULL,
	"name" TEXT NOT NULL,
	"email" TEXT NOT NULL UNIQUE,
	"password" TEXT NOT NULL,
	"createdAt" TIMESTAMP NOT NULL,
	CONSTRAINT "users_pk" PRIMARY KEY ("id")
) WITH (
  OIDS=FALSE
);

CREATE TABLE urls (
	"id" serial NOT NULL,
	"userId" INTEGER NOT NULL,
	"shortUrl" TEXT NOT NULL,
	"url" TEXT NOT NULL UNIQUE,
	"visitCount" integer NOT NULL,
	"createdAt" TIMESTAMP NOT NULL,
	CONSTRAINT "urls_pk" PRIMARY KEY ("id")
) WITH (
  OIDS=FALSE
);

ALTER TABLE "urls" ADD CONSTRAINT "urls_fk0" FOREIGN KEY ("userId") REFERENCES "users"("id");



