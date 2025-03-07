CREATE TABLE IF NOT EXISTS "public"."openMuWeb_News" (
    "id" UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    "title" VARCHAR(255) NOT NULL,
    "body" TEXT NOT NULL,
    "author" VARCHAR(255) NOT NULL,
    "creationDate" TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
); 