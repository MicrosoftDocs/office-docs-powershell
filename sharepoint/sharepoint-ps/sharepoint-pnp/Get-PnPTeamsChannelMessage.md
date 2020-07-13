---
external help file:
online version: https://docs.microsoft.com/powershell/module/sharepoint-pnp/get-pnpteamschannelmessage
applicable: SharePoint Online
schema: 2.0.0
title: Get-PnPTeamsChannelMessage
---

# Get-PnPTeamsChannelMessage

## SYNOPSIS
Sends a message to a Microsoft Teams Channel.

## SYNTAX 

```powershell
Get-PnPTeamsChannelMessage -Team <TeamsTeamPipeBind>
                           -Channel <TeamsChannelPipeBind>
                           [-IncludeDeleted [<SwitchParameter>]]
                           [-ByPassPermissionCheck [<SwitchParameter>]]
```

## REQUIRED PERMISSIONS

  * Microsoft Graph API: Group.ReadWrite.All

## EXAMPLES

### ------------------EXAMPLE 1------------------
```powershell
Submit-PnPTeamsChannelMessage -Team MyTestTeam -Channel "My Channel" -Message "A new message"
```

Sends "A new message" to the specified channel

## PARAMETERS

### -ByPassPermissionCheck
Allows the check for required permissions in the access token to be bypassed when set to $true

```yaml
Type: SwitchParameter
Parameter Sets: (All)

Required: False
Position: Named
Accept pipeline input: False
```

### -Channel
Specify the group id, mailNickname or display name of the team to use.

```yaml
Type: TeamsChannelPipeBind
Parameter Sets: (All)

Required: True
Position: Named
Accept pipeline input: False
```

### -IncludeDeleted
Specify to include deleted messages

```yaml
Type: SwitchParameter
Parameter Sets: (All)

Required: False
Position: Named
Accept pipeline input: False
```

### -Team
Specify the group id, mailNickname or display name of the team to use.

```yaml
Type: TeamsTeamPipeBind
Parameter Sets: (All)

Required: True
Position: Named
Accept pipeline input: False
```

## RELATED LINKS

[SharePoint Developer Patterns and Practices](https://aka.ms/sppnp)