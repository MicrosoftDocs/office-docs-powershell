---
external help file:
online version: https://docs.microsoft.com/powershell/module/sharepoint-pnp/add-pnpteamsuser
applicable: SharePoint Online
schema: 2.0.0
title: Add-PnPTeamsUser
---

# Add-PnPTeamsUser

## SYNOPSIS
Adds a channel to an existing Microsoft Teams instance.

## SYNTAX 

```powershell
Add-PnPTeamsUser -Team <TeamsTeamPipeBind>
                 -User <String>
                 -Role <String>
                 [-ByPassPermissionCheck [<SwitchParameter>]]
```

## REQUIRED PERMISSIONS

  * Microsoft Graph API: Group.ReadWrite.All

## EXAMPLES

### ------------------EXAMPLE 1------------------
```powershell
Add-PnPTeamsUser -Team MyTeam -User john@doe.com -Role Owner
```

Adds a user as an owner to the team

### ------------------EXAMPLE 2------------------
```powershell
Add-PnPTeamsUser -Team MyTeam -User john@doe.com -Role Member
```

Adds a user as a member to the team

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
Specify the role of the user

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

### -User
Specify the UPN (e.g. john@doe.com)

```yaml
Type: String
Parameter Sets: (All)

Required: True
Position: Named
Accept pipeline input: False
```

## RELATED LINKS

[SharePoint Developer Patterns and Practices](https://aka.ms/sppnp)