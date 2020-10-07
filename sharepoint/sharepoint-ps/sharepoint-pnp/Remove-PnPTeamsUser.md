---
external help file:
online version: https://docs.microsoft.com/powershell/module/sharepoint-pnp/remove-pnpteamsuser
applicable: SharePoint Online
schema: 2.0.0
title: Remove-PnPTeamsUser
---

# Remove-PnPTeamsUser

## SYNOPSIS

**Required Permissions**

  * Microsoft Graph API: Group.ReadWrite.All

Removes users from a team.

## SYNTAX 

```powershell
Remove-PnPTeamsUser -Team <TeamsTeamPipeBind>
                    -User <String>
                    [-Role <String>]
                    [-Force [<SwitchParameter>]]
                    [-ByPassPermissionCheck [<SwitchParameter>]]
```

## EXAMPLES

### ------------------EXAMPLE 1------------------
```powershell
Remove-PnPTeamsUser -Team MyTeam -User john@doe.com
```

Removes the user specified from both owners and members of the team.

### ------------------EXAMPLE 2------------------
```powershell
Get-PnPTeamsUser -Team MyTeam -User john@doe.com -Owner
```

Removes the user john@doe.com from the owners of the team, but retains the user as a member.

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

### -Role
Specify the role of the user you are removing from the team. Accepts "Owner" and "Member" as possible values.
        If specified as "Member" then the specified user is removed from the Team completely even if they were the owner of the Team. If "Owner" is specified in the -Role parameter then the
        specified user is removed as an owner of the team but stays as a team member. Defaults to "Member". Note: The last owner cannot be removed from the team.

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