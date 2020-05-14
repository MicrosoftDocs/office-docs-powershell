---
external help file: Microsoft.TeamsCmdlets.PowerShell.Custom.dll-Help.xml
Module Name: MicrosoftTeams
online version: https://docs.microsoft.com/powershell/module/teams/get-teamsappinstallation
schema: 2.0.0
author: kenwith
ms.author: kenwith
ms.reviewer:
---

# Get-TeamsAppInstallation

## SYNOPSIS
Get a Teams App installed in Microsoft Teams.

## SYNTAX

### TeamScope (Default)
```
Get-TeamsAppInstallation -TeamId <String> [-AppInstallationId <String>] [-AppId <String>] [<CommonParameters>]
```

### UserScope
```
Get-TeamsAppInstallation -UserId <String> [-AppInstallationId <String>] [-AppId <String>] [<CommonParameters>]
```

## DESCRIPTION
Get a Teams App installed in Microsoft Teams.

> [!IMPORTANT]
> Modules in the PS INT gallery for Microsoft Teams run on the /beta version in Microsoft Graph and are subject to change. Int modules can be install from here <https://www.poshtestgallery.com/packages/MicrosoftTeams>.

## EXAMPLES

### Example 1
```powershell
PS C:\> Get-TeamsAppInstallation -AppId b9cc7986-dd56-4b57-ab7d-9c4e5288b775 -TeamId 31f1ff6c-d48c-4f8a-b2e1-abca7fd399df
```

This example gets a Teams App specifying its AppId and the TeamId.

## PARAMETERS

### -AppId
Teams App identifier in Microsoft Teams.

```yaml
Type: String
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: True (ByPropertyName)
Accept wildcard characters: False
```

### -AppInstallationId
Installation identifier of the Teams App.

```yaml
Type: String
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: True (ByPropertyName)
Accept wildcard characters: False
```

### -TeamId
Team identifier in Microsoft Teams.

```yaml
Type: String
Parameter Sets: TeamScope
Aliases: GroupId

Required: True
Position: Named
Default value: None
Accept pipeline input: True (ByPropertyName)
Accept wildcard characters: False
```

### -UserId
User identifier in Microsoft Teams.

```yaml
Type: String
Parameter Sets: UserScope
Aliases:

Required: True
Position: Named
Default value: None
Accept pipeline input: True (ByPropertyName)
Accept wildcard characters: False
```

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see [about_CommonParameters](http://go.microsoft.com/fwlink/?LinkID=113216).

## INPUTS

### System.String

## OUTPUTS

### System.Object
## NOTES

## RELATED LINKS
