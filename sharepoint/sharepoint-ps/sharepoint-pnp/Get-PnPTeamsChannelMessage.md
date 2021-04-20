---
Module Name: PnP.PowerShell
title: Get-PnPTeamsChannelMessage
schema: 2.0.0
applicable: SharePoint Online
external help file: PnP.PowerShell.dll-Help.xml
online version: https://pnp.github.io/powershell/cmdlets/Get-PnPTeamsChannelMessage.html
---
 
# Get-PnPTeamsChannelMessage

## SYNOPSIS

> [!TIP]
> We encourage you to make improvements to this documentation. Please navigate to https://github.com/pnp/powershell/blob/dev/documentation/Get-PnPTeamsChannelMessage.md to change this file.


**Required Permissions**

  * Microsoft Graph API: Group.ReadWrite.All

Sends a message to a Microsoft Teams Channel.

## SYNTAX

```powershell
Get-PnPTeamsChannelMessage -Team <TeamsTeamPipeBind> -Channel <TeamsChannelPipeBind> [-IncludeDeleted]
  [<CommonParameters>]
```

## DESCRIPTION

## EXAMPLES

### EXAMPLE 1
```powershell
Get-PnPTeamsChannelMessage -Team MyTestTeam -Channel "My Channel"
```

Gets all messages of the specified channel

## PARAMETERS

### -Channel
Specify id or name of the channel to use.

```yaml
Type: TeamsChannelPipeBind
Parameter Sets: (All)

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -IncludeDeleted
Specify to include deleted messages

```yaml
Type: SwitchParameter
Parameter Sets: (All)

Required: False
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
Accept pipeline input: False
Accept wildcard characters: False
```

## RELATED LINKS

[Microsoft 365 Patterns and Practices](https://aka.ms/m365pnp)

