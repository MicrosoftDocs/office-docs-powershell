---
external help file:
online version: https://docs.microsoft.com/powershell/module/sharepoint-pnp/remove-pnpteamsteam
applicable: SharePoint Online
schema: 2.0.0
title: Remove-PnPTeamsTeam
---

# Remove-PnPTeamsTeam

## SYNOPSIS

**Required Permissions**

  * Microsoft Graph API: Group.ReadWrite.All

Removes a Microsoft Teams Team instance

## SYNTAX 

```powershell
Remove-PnPTeamsTeam -Identity <TeamsTeamPipeBind>
                    [-Force [<SwitchParameter>]]
                    [-ByPassPermissionCheck [<SwitchParameter>]]
```

## EXAMPLES

### ------------------EXAMPLE 1------------------
```powershell
Remove-PnPTeamsTeam -Identity 5beb63c5-0571-499e-94d5-3279fdd9b6b5
```

Removes the specified Team

### ------------------EXAMPLE 2------------------
```powershell
Remove-PnPTeamsTeam -Identity testteam
```

Removes the specified Team. If there are multiple teams with the same display name it will not proceed deleting the team.

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

### -Force
Specifying the Force parameter will skip the confirmation question.

```yaml
Type: SwitchParameter
Parameter Sets: (All)

Required: False
Position: Named
Accept pipeline input: False
```

### -Identity
Either the group id or the mailnickname of the group to remove.

```yaml
Type: TeamsTeamPipeBind
Parameter Sets: (All)

Required: True
Position: Named
Accept pipeline input: False
```

## RELATED LINKS

[SharePoint Developer Patterns and Practices](https://aka.ms/sppnp)