---
external help file: 
applicable: SharePoint Online
title: Export-SPOUserProfile
schema: 2.0.0
---

# Export-SPOUserProfile

## SYNOPSIS
Export user profile data to csv file.

## SYNTAX

```
Export-SPOUserProfile -LoginName <String> -OutputFolder <String> [<CommonParameters>]
```

## DESCRIPTION
Export user profile data to csv file.

For permissions and the most current information about Windows PowerShell for SharePoint Online, see the online documentation at http://go.microsoft.com/fwlink/p/?LinkId=251832 (http://go.microsoft.com/fwlink/p/?LinkId=251832).

## EXAMPLES

###   ------------ Example 1 --------------------
```
Export-SPOUserProfile -LoginName joe.healy@contoso.com -OutputFolder "C:\users\admin\exportfolder"
```
Example 1 exports user data who has the e-mail address joe.healy@contoso.com to a folder "C:\users\admin\exportfolder".

## PARAMETERS

### -LoginName
Specifies the login name of the user who's data is exported.

```yaml
Type: String
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Online

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -OutputFolder
Specifies the output folder location where the CSV file is created.

```yaml
Type: String
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Online

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see about_CommonParameters (http://go.microsoft.com/fwlink/?LinkID=113216).

## INPUTS

## OUTPUTS

## NOTES

## RELATED LINKS

[Export-SPOUserInfo](Export-SPOUserInfo.md)
