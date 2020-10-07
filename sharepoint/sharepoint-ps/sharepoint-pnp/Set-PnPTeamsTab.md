---
external help file:
online version: https://docs.microsoft.com/powershell/module/sharepoint-pnp/set-pnpteamstab
applicable: SharePoint Online
schema: 2.0.0
title: Set-PnPTeamsTab
---

# Set-PnPTeamsTab

## SYNOPSIS

**Required Permissions**

  * Microsoft Graph API: Group.ReadWrite.All

Updates Teams Tab settings

## SYNTAX 

```powershell
Set-PnPTeamsTab -Team <TeamsTeamPipeBind>
                -Channel <TeamsChannelPipeBind>
                [-Identity <TeamsTabPipeBind>]
                [-DisplayName <String>]
                [-ByPassPermissionCheck [<SwitchParameter>]]
```

## EXAMPLES

### ------------------EXAMPLE 1------------------
```powershell
Set-PnPTeamsTab -Team "MyTeam" -Channel "My Channel" -Identity "Wiki" -DisplayName "Channel Wiki"
```

Updates the tab named 'Wiki' and changes the display name of the tab to 'Channel Wiki'

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
Specify the channel id of the team to retrieve.

```yaml
Type: TeamsChannelPipeBind
Parameter Sets: (All)

Required: True
Position: Named
Accept pipeline input: True
```

### -DisplayName
The new name of the tab.

```yaml
Type: String
Parameter Sets: (All)

Required: False
Position: Named
Accept pipeline input: False
```

### -Identity
Identity of the tab.

```yaml
Type: TeamsTabPipeBind
Parameter Sets: (All)

Required: False
Position: Named
Accept pipeline input: False
```

### -Team
Specify the group id of the team to retrieve.

```yaml
Type: TeamsTeamPipeBind
Parameter Sets: (All)

Required: True
Position: Named
Accept pipeline input: True
```

## RELATED LINKS

[SharePoint Developer Patterns and Practices](https://aka.ms/sppnp)