---
external help file:
online version: https://docs.microsoft.com/powershell/module/sharepoint-pnp/submit-pnpteamschannelmessage
applicable: SharePoint Online
schema: 2.0.0
title: Submit-PnPTeamsChannelMessage
---

# Submit-PnPTeamsChannelMessage

## SYNOPSIS

**Required Permissions**

  * Microsoft Graph API: Group.ReadWrite.All

Sends a message to a Microsoft Teams Channel.

## SYNTAX 

```powershell
Submit-PnPTeamsChannelMessage -Team <TeamsTeamPipeBind>
                              -Channel <TeamsChannelPipeBind>
                              -Message <String>
                              [-ContentType <TeamChannelMessageContentType>]
                              [-Important [<SwitchParameter>]]
                              [-ByPassPermissionCheck [<SwitchParameter>]]
```

## EXAMPLES

### ------------------EXAMPLE 1------------------
```powershell
Submit-PnPTeamsChannelMessage -Team MyTestTeam -Channel "My Channel" -Message "A new message"
```

Sends "A new message" to the specified channel

### ------------------EXAMPLE 2------------------
```powershell
Submit-PnPTeamsChannelMessage -Team MyTestTeam -Channel "My Channel" -Message "<strong>A bold new message</strong>" -ContentType Html
```

Sends the message, formatted as html to the specified channel

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

### -ContentType
Specify to set the content type of the message, either Text or Html.

```yaml
Type: TeamChannelMessageContentType
Parameter Sets: (All)

Required: False
Position: Named
Accept pipeline input: False
```

### -Important
Specify to make this an important message.

```yaml
Type: SwitchParameter
Parameter Sets: (All)

Required: False
Position: Named
Accept pipeline input: False
```

### -Message
The message to send to the channel.

```yaml
Type: String
Parameter Sets: (All)

Required: True
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