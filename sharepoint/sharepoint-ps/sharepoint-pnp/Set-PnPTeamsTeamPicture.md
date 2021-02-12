---
Module Name: PnP.PowerShell
title: Set-PnPTeamsTeamPicture
schema: 2.0.0
applicable: SharePoint Online
external help file: PnP.PowerShell.dll-Help.xml
online version: https://pnp.github.io/powershell/cmdlets/Set-PnPTeamsTeamPicture.html
---
 
# Set-PnPTeamsTeamPicture

## SYNOPSIS

> [!TIP]
> We encourage you to make improvements to this documentation. Please navigate to https://github.com/pnp/powershell/blob/dev/documentation/Set-PnPTeamsTeamPicture.md to change this file.


**Required Permissions**

  * Microsoft Graph API: Group.ReadWrite.All

Sets the picture of an existing team.

## SYNTAX

```powershell
Set-PnPTeamsTeamPicture -Team <TeamsTeamPipeBind> -Path <String>  [<CommonParameters>]
```

## DESCRIPTION
Notice that this cmdlet will immediately return but it can take a few hours before the changes are reflected in Microsoft Teams.

## EXAMPLES

### EXAMPLE 1
```powershell
Set-PnPTeamsTeamPicture -Team "MyTeam" -Path "c:\myimage.jpg"
```

Updates the channel called 'MyChannel' to have the display name set to 'My Channel'

## PARAMETERS

### -Path
The path to the image file.

```yaml
Type: String
Parameter Sets: (All)

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Team
Specify the group id, mailNickname or display name of the team to use.

```yaml
Type: TeamsTeamPipeBind
Parameter Sets: (All)

Required: True
Position: Named
Default value: None
Accept pipeline input: True (ByValue)
Accept wildcard characters: False
```

## RELATED LINKS

[Microsoft 365 Patterns and Practices](https://aka.ms/m365pnp)

