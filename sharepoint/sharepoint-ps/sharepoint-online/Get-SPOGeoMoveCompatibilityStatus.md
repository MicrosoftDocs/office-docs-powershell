---
external help file: 
applicable: SharePoint Online
title: Get-SPOGeoMoveCompatibilityStatus
schema: 2.0.0
---

# Get-SPOGeoMoveCompatibilityStatus

## SYNOPSIS
This cmdlet returns the compatibility status between geographics location


## SYNTAX

```
Get-SPOGeoMoveCompatibilityStatus [-AllLocations <Boolean>] [<CommonParameters>]
```

## DESCRIPTION
Returns the compatibility between sites and locations for a move in a multi geo SharePoint Online tenant.


## EXAMPLES

### EXAMPLE 1
```powershell
Get-SPOGeoMoveCompatibilityStatus -AllLocations $true
```

Get the compatibility status for all locations

### EXAMPLE 2
```powershell
Get-SPOGeoMoveCompatibilityStatus -AllLocations $false
```

Get the compatibility status for the current location


## PARAMETERS

### -AllLocations
PARAMVALUE: $true | $false


```yaml
Type: Boolean
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Online

Required: False
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

