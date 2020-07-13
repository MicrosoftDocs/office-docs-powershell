---
external help file:
online version: https://docs.microsoft.com/powershell/module/sharepoint-pnp/set-pnpteamschannel
applicable: SharePoint Online
schema: 2.0.0
title: Set-PnPTeamsChannel
---

# Set-PnPTeamsChannel

## SYNOPSIS
Updates an existing Teams Channel

## SYNTAX 

```powershell
Set-PnPTeamsChannel -Team <TeamsTeamPipeBind>
                    -Identity <TeamsChannelPipeBind>
                    [-DisplayName <String>]
                    [-Description <String>]
                    [-ByPassPermissionCheck [<SwitchParameter>]]
```

## REQUIRED PERMISSIONS

  * Microsoft Graph API: Group.ReadWrite.All

## EXAMPLES

### ------------------EXAMPLE 1------------------
```powershell
Set-PnPTeamsChannel -Team "MyTeam" -Channel "MyChannel" -DisplayName "My Channel"
```

Updates the channel called 'MyChannel' to have the display name set to 'My Channel'

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

### -Description
Changes the description of the specified channel.

```yaml
Type: String
Parameter Sets: (All)

Required: False
Position: Named
Accept pipeline input: False
```

### -DisplayName
Changes the display name of the specified channel.

```yaml
Type: String
Parameter Sets: (All)

Required: False
Position: Named
Accept pipeline input: False
```

### -Identity
Specify the channel id of the team to retrieve.

```yaml
Type: TeamsChannelPipeBind
Parameter Sets: (All)

Required: True
Position: Named
Accept pipeline input: True
```

### -Team
Specify the group id, mailNickname or display name of the team to use.

```yaml
Type: TeamsTeamPipeBind
Parameter Sets: (All)

Required: True
Position: Named
Accept pipeline input: True
```

## RELATED LINKS

[SharePoint Developer Patterns and Practices](https://aka.ms/sppnp)