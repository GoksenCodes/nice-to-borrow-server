SELECT 
  "book"."id", 
  "book"."title", 
  "book"."language", 
  "book"."isAvailable", 
  "book"."imageUrl", 
  "book"."description", 
  "book"."author", 
  "book"."borrowingPeriod", 
  "book"."createdAt", 
  "book"."updatedAt", 
  "book"."userId", 
  "user"."id" AS "user.id", 
  "user"."location" AS "user.location",
  ST_Dwithin("user"."location", ST_MakePoint(4.845841,52.350083)::geography, '5000')
FROM "books" AS "book" 
  LEFT OUTER JOIN "users" AS "user" ON "book"."userId" = "user"."id" 
 -- WHERE 
  -- ST_Dwithin(location, ST_MakePoint(4.845841,52.350083)::geography, '20000') IS NULL;