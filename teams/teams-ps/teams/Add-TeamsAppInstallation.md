---
external help file: Microsoft.TeamsCmdlets.PowerShell.Custom.dll-Help.xml
Module Name: MicrosoftTeams
online version: https://learn.microsoft.com/powershell/module/teams/add-teamsappinstallation
schema: 2.0.0
---

# Add-TeamsAppInstallation

## SYNOPSIS
Add a Teams App to Microsoft Teams.

## SYNTAX

### TeamScope
```
Add-TeamsAppInstallation -AppId <String> -TeamId <String> [-Permissions <String>] [<CommonParameters>]
```

### UserScope
```
Add-TeamsAppInstallation -AppId <String> -UserId <String> [-Permissions <String>] [<CommonParameters>]
```

## DESCRIPTION
Add a Teams App to Microsoft Teams.

Note: This cmdlet is part of the Public Preview version of Teams PowerShell Module, for more information see [Install Teams PowerShell public preview](https://learn.microsoft.com/microsoftteams/teams-powershell-install#install-teams-powershell-public-preview) and also see [Microsoft Teams PowerShell Release Notes](https://learn.microsoft.com/microsoftteams/teams-powershell-release-notes).

## EXAMPLES

### Example 1
```powershell
PS C:\> Add-TeamsAppInstallation -AppId b9cc7986-dd56-4b57-ab7d-9c4e5288b775 -TeamId 31f1ff6c-d48c-4f8a-b2e1-abca7fd399df
```

This example adds a Teams App to Microsoft Teams.

### Example 2
```powershell
PS C:\> Add-TeamsAppInstallation -AppId b9cc7986-dd56-4b57-ab7d-9c4e5288b775 -TeamId 31f1ff6c-d48c-4f8a-b2e1-abca7fd399df -Permissions "TeamSettings.Read.Group ChannelMessage.Read.Group"
```

This example adds a Teams App to Microsoft Teams with RSC Permissions.

## PARAMETERS

### -AppId
Teams App identifier in Microsoft Teams.

```yaml
Type: String
Parameter Sets: (All)
Aliases:

Required: True
Position: Named
Default value: None
Accept pipeline input: True (ByPropertyName)
Accept wildcard characters: False
```

### -Permissions
RSC permissions for the Teams App.

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
