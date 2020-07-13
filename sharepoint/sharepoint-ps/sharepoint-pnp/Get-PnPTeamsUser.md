---
external help file:
online version: https://docs.microsoft.com/powershell/module/sharepoint-pnp/get-pnpteamsuser
applicable: SharePoint Online
schema: 2.0.0
title: Get-PnPTeamsUser
---

# Get-PnPTeamsUser

## SYNOPSIS
Returns owners, members or guests from a team.

## SYNTAX 

```powershell
Get-PnPTeamsUser -Team <TeamsTeamPipeBind>
                 [-Role <String>]
                 [-ByPassPermissionCheck [<SwitchParameter>]]
```

## REQUIRED PERMISSIONS

  * Microsoft Graph API : One of Group.Read.All, Group.ReadWrite.All

## EXAMPLES

### ------------------EXAMPLE 1------------------
```powershell
Get-PnPTeamsUser -Team MyTeam
```

Returns all owners, members or guests from the specified team.

### ------------------EXAMPLE 2------------------
```powershell
Get-PnPTeamsUser -Team MyTeam -Role Owner
```

Returns all owners from the specified team.

### ------------------EXAMPLE 3------------------
```powershell
Get-PnPTeamsUser -Team MyTeam -Role Member
```

Returns all members from the specified team.

### ------------------EXAMPLE 4------------------
```powershell
Get-PnPTeamsUser -Team MyTeam -Role Guest
```

Returns all guestss from the specified team.

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

### -Role
Specify to filter on the role of the user

```yaml
Type: String
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