---
external help file: 
applicable: SharePoint Online
title: Get-SPOUserOneDriveLocation
schema: 2.0.0
---

# Get-SPOUserOneDriveLocation

## SYNOPSIS
This cmdlet Get-SPOUserOneDriveLocation will return the user’s UserPrincipalName, current location this user locates, user’s corresponding MySite(ODB) Url and the site id.

## SYNTAX

```
Get-SPOUserOneDriveLocation -UserPrincipalName <String> [<CommonParameters>]
```

## DESCRIPTION
This command will return information about the onedrive location from the current user

## EXAMPLES

### -----------------------EXAMPLE 1-----------------------------
```
Get-SPOUserOneDriveLocation -UserPrincipalName admin@contoso.com
```
Get the current location this user locates, user's corresponding MySite(ODB) Url and site ID.

## PARAMETERS

### -UserPrincipalName
PARAMVALUE: String


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


## RELATED LINKS
[Getting started with SharePoint Online Management Shell](https://docs.microsoft.com/en-us/powershell/sharepoint/sharepoint-online/connect-sharepoint-online?view=sharepoint-ps)

[Get-SPOAppErrors](Get-SPOAppErrors.md)

