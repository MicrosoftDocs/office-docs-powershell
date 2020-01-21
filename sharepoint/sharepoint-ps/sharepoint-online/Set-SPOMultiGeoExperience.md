---
external help file: sharepointonline.xml
applicable: SharePoint Online
title: Set-SPOMultiGeoExperience
schema: 2.0.0
author: 
ms.author: 
ms.reviewer:
---

# Set-SPOMultiGeoExperience

## SYNOPSIS
.

## SYNTAX

```
Set-SPOMultiGeoExperience
```

## DESCRIPTION
Use this cmdlet to set a get location into SPO mode. This upgrade action is not reversible. For more information see [Enabling SharePoint Multi-Geo in your satellite geo location](https://docs.microsoft.com/office365/enterprise/enabling-sp-multigeo-satellite-geolocation)

## EXAMPLES

### Example 1

```
Set-SPOMultiGeoExperience
```

This example will upgrade your instance's multi-geo experience to include SharePoint Online Multi-Geo. This operation usually takes about an hour while we perform various publish backs in the service and re-stamp your tenant.

## PARAMETERS

### -

.

```yaml
Type: SpoSitePipeBind
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Online
Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

## NOTES
