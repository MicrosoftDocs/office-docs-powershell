---
external help file: sharepoint.xml
online version: 
schema: 2.0.0
---

# Export-SPTagsAndNotesData

## SYNOPSIS
Exports the SharePoint Newsfeed tags and notes from the SharePoint database to a ZIP file.

## SYNTAX

```
Export-SPTagsAndNotesData [-Site] <SPSitePipeBind> [-FilePath] <String>
 [-AssignmentCollection <SPAssignmentCollection>]
```

## DESCRIPTION
The Export-SPTagsAndNotesData cmdlet exports the SharePoint Newsfeed tags and notes from the SharePoint database.
The tags and notes are written into separate files, and then the two are compressed and added to the ZIP file you specify.

## EXAMPLES

### ----------------EXAMPLE----------------- (SharePoint Server 2016)
```
Export-SPTagsAndNotesData -Site http://site.contoso.com -FilePath C:\TagsAndNotes.zip
```

This example creates a new ZIP file called TagsAndNotes.zip, on the root of C: drive, exports tags and notes from the SharePoint database for the site http://site.contoso.com, and adds the resulting files to the TagsAndNotes.zip file

## PARAMETERS

### -Site
URL of the root site where you want to export the tags and notes from.

You must specify a valid URL to an existing SharePoint root site.
For example: http://site.contoso.com

```yaml
Type: SPSitePipeBind
Parameter Sets: (All)
Aliases: 

Required: True
Position: 1
Default value: None
Accept pipeline input: True (ByValue)
Accept wildcard characters: False
```

### -FilePath
File name, including full path, that you want export the tags and notes to.

The cmdlet will create a new ZIP file with the name you specified.
If the file already exists, the cmdlet won't perform the export and will ask you to specify a new file name.

```yaml
Type: String
Parameter Sets: (All)
Aliases: 

Required: True
Position: 2
Default value: None
Accept pipeline input: True (ByValue)
Accept wildcard characters: False
```

### -AssignmentCollection
{{Fill AssignmentCollection Description}}

```yaml
Type: SPAssignmentCollection
Parameter Sets: (All)
Aliases: 

Required: False
Position: Named
Default value: None
Accept pipeline input: True (ByValue)
Accept wildcard characters: False
```

## INPUTS

## OUTPUTS

## NOTES

## RELATED LINKS

