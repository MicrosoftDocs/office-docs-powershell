---
external help file: Microsoft.Online.SharePoint.PowerShell.dll-Help.xml
Module Name: Microsoft.Online.SharePoint.PowerShell
online version: https://docs.microsoft.com/powershell/module/sharepoint-online/get-spositedesignrunstatus
applicable: SharePoint Online
schema: 2.0.0
author: trent-green
ms.author: trgreen
ms.reviewer:
---

# Get-SPOSiteDesignRunStatus

## SYNOPSIS

Retrieves and displays a list of all site script actions executed for a specified site design applied to a site.

## SYNTAX

```
Get-SPOSiteDesignRunStatus [-Run] <SPOSiteDesignRun> [<CommonParameters>]
```

## DESCRIPTION

Retrieves and displays a list of all site script actions executed for a specified site design applied to a site.

## EXAMPLES

### Example 1

This example gets the run for a specific site design applied to a site and sets it to a variable. This variable is then passed into the command -run parameter. The result is a display of all the site script actions applied for that site design run, including the script action title and outcome.

```powershell
PS C:\> $myrun = Get-SPOSiteDesignRun -WebUrl "https://contoso.sharepoint.com/sites/project-playbook" -SiteDesignId cefd782e-sean-4814-a68a-b33b116c302f

PS C:\> Get-SPOSiteDesignRunStatus -Run $myrun

OrdinalIndex: | 0
SiteScriptId: | sean530b-4133-444e-9e31-fb0c07f69d3a
SiteScriptTitle: | project tracker script for contoso legal
SiteScriptIndex: | 0
ActionIndex: | 0
ActionTitle: | Add principal contoso legal team to SPGroup Owners.
ActionKey: | 4f8509cd-0000-0000-0000-00000000
OutcomeCode: | Success
OutcomeText: |

OrdinalIndex: | 1
SiteScriptId: | sean530b-4133-444e-9e31-abc123abc123
SiteScriptTitle: | project tracker script for contoso legal
SiteScriptIndex: | 0
ActionIndex: | 1
ActionTitle: | Apply theme Contoso Legal.
ActionKey: | 4f8509cd-0000-0000-0000-00000000
OutcomeCode: | Success
OutcomeText: |
```

## PARAMETERS

### -Run

The site design run for the desired set of script action details.

```yaml
Type: SPOSiteDesignRun
Parameter Sets: (All)
Aliases:

Required: True
Position: 0
Default value: None
Accept pipeline input: True (ByValue)
Accept wildcard characters: False
```

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable.
For more information, see about_CommonParameters (https://go.microsoft.com/fwlink/?LinkID=113216).

## INPUTS

### Microsoft.Online.SharePoint.PowerShell.SPOSiteDesignRun

## OUTPUTS

### System.Object

## NOTES

## RELATED LINKS

[Get-SPOSiteDesignRun](Get-SPOSiteDesignRun.md)
