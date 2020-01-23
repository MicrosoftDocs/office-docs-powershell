---
external help file: Microsoft.Online.SharePoint.PowerShell.dll-Help.xml
Module Name: Microsoft.Online.SharePoint.PowerShell
online version: https://docs.microsoft.com/powershell/module/sharepoint-online/get-spositedesignrun
applicable: SharePoint Online
schema: 2.0.0
author: trent-green
ms.author: trgreen
ms.reviewer:
---

# Get-SPOSiteDesignRun

## SYNOPSIS
Retrieves a list of site designs applied to a specified site collection.


## SYNTAX

```
Get-SPOSiteDesignRun [-WebUrl] <String> [[-SiteDesignId] <SPOSiteDesignPipeBind>] [<CommonParameters>]
```

## DESCRIPTION
Retrieves a list of site designs applied to a specified site collection. The WebUrl is required to know which site collection to query. The returned output includes the ID of the scheduled job, the web and site IDs, and the site design ID, version, and title.

## EXAMPLES

###   ------------ Example 1 --------------------

This example would return a list of the site designs applied to the specified site. Providing a specific site design ID will return the details for just that applied site design.

```powershell
PS C:\> Get-SPOSiteDesignRun -WebUrl "https://contoso.sharepoint.com/sites/project-playbook"

Id: | sean530z-55a3-4804-8b0a-80578626d6ef
SiteDesignId: | sean530b-4133-444e-9e31-fb0c07f69d3a
WebId: | 4f8509cd-7972-44d0-a14a-3c8ad69ee50f
SiteId: | d5d19d7c-sean-4625-9461-281bfc8a9ece
SiteDesignVersion: | 3
SiteDesignTitle: | Contoso Project Playbook
```

## PARAMETERS

### -SiteDesignId
The ID of a specific site design. Use this optional parameter if you wish to only return details on a specific site design run.

```yaml
Type: SPOSiteDesignPipeBind
Parameter Sets: (All)
Aliases:

Required: False
Position: 1
Default value: None
Accept pipeline input: True (ByValue)
Accept wildcard characters: False
```

### -WebUrl
The Url of the site collection.

```yaml
Type: String
Parameter Sets: (All)
Aliases:

Required: True
Position: 0
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable.
For more information, see about_CommonParameters (https://go.microsoft.com/fwlink/?LinkID=113216).

## INPUTS

### Microsoft.Online.SharePoint.PowerShell.SPOSiteDesignPipeBind

## OUTPUTS

### System.Object

## NOTES

## RELATED LINKS

[Get-SPOSiteDesignRunStatus](Get-SPOSiteDesignRunStatus.md)

