---
external help file: 
applicable: SharePoint Online
title: Get-SPOSiteContentMoveState
schema: 2.0.0
---

# Get-SPOSiteContentMoveState

## SYNOPSIS
This Cmdlet allows a SharePoint administrators to check the status of a site or group move.


## SYNTAX

### GroupName
```powershell
Get-SPOSiteContentMoveState [-GroupName] <String> [<CommonParameters>]
```

### SourceSiteUrl
```powershell
Get-SPOSiteContentMoveState [-SourceSiteUrl] <String> [<CommonParameters>]
```

## DESCRIPTION
This command gets the information and the status of a move request of a user between sites in a SharePoint Online Multi Geo tenant.


## EXAMPLES

### -----------------------EXAMPLE 1-----------------------------
```
Get-SPOSiteContentMoveState -GroupName "group@contoso.com"
```

Gets the status of the site content for the group "group@contoso.com"

### -----------------------EXAMPLE 2-----------------------------
```
Get-SPOSiteContentMoveState -SourceSiteUrl $siteurl
```

Gets the status of the site content give on the variable $siteurl


## PARAMETERS

### -GroupName
PARAMVALUE: String


```yaml
Type: String
Parameter Sets: GroupName
Aliases: 
Applicable: SharePoint Online

Required: True
Position: 0
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -SourceSiteUrl
PARAMVALUE: String


```yaml
Type: String
Parameter Sets: SourceSiteUrl
Aliases: 
Applicable: SharePoint Online

Required: True
Position: 0
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see about_CommonParameters (http://go.microsoft.com/fwlink/?LinkID=113216).



## RELATED LINKS

[Getting started with SharePoint Online Management Shell](https://docs.microsoft.com/en-us/powershell/sharepoint/sharepoint-online/connect-sharepoint-online?view=sharepoint-ps)

[Get-SPOAppErrors](Get-SPOAppErrors.md)

