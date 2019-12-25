ALTER TABLE [dbo].[Book]
ADD Description varchar(MAX);

ALTER TABLE [dbo].[Book]
ADD AverageRating FLOAT;

ALTER TABLE [dbo].[Book]
ADD RatingsCount INT;

UPDATE [dbo].[Book]
SET Description = '<p><b>The harrowing true story of abduction and survival from the courageous young woman who lived it—now the subject of a Lifetime original movie, <i>I Am Elizabeth Smart.</i></b><br><b><i></i></b><br><b><i></i></b>In this memoir, Elizabeth Smart reveals how she survived and the secret to forging a new life in the wake of a brutal crime. On June 5, 2002, fourteen-year-old Elizabeth Smart, the daughter of a close-knit Mormon family, was taken from her home in the middle of the night by religious fanatic Brian David Mitchell and his wife, Wanda Barzee. Elizabeth was kept chained, dressed in disguise, repeatedly raped, and told she and her family would be killed if she tried to escape. After her rescue on March 12, 2003, she rejoined her family and worked to pick up the pieces of her life.</p><p>With <i>My Story, </i>Elizabeth tells of the constant fear she endured every hour, her courageous determination to maintain hope, and how she devised a plan to manipulate her captors and convinced them to return to Utah, where she was rescued minutes after arriving. Smart explains how her faith helped her stay sane in the midst of a nightmare and how she found the strength to confront her captors at their trial and see that justice was served.</p><p>In the years after her rescue, Smart transformed from victim to advocate, traveling the country and working to educate, inspire and foster change. She has created a foundation to help prevent crimes against children and is a frequent public speaker. She and her husband, Matthew Gilmour, now have two children.</p>', 
	AverageRating= 2.53125,
	RatingsCount = 3
WHERE ISBN = 'm0mKpfSlewQC';