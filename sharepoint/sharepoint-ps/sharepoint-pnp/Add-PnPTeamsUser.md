---
Module Name: PnP.PowerShell
schema: 2.0.0
applicable: SharePoint Online
online version: https://pnp.github.io/powershell/cmdlets/Add-PnPTeamsUser.html
external help file: PnP.PowerShell.dll-Help.xml
title: Add-PnPTeamsUser
---
  
# Add-PnPTeamsUser

## SYNOPSIS

> [!TIP]
> We encourage you to make improvements to this documentation. Please navigate to https://github.com/pnp/powershell/blob/dev/documentation/Add-PnPTeamsUser.md to change this file.


**Required Permissions**

  * Microsoft Graph API: Group.ReadWrite.All

Adds a user to an existing Microsoft Teams instance.

## SYNTAX

```powershell
Add-PnPTeamsUser -Team <TeamsTeamPipeBind> -User <String> -Role <String> [<CommonParameters>]
```

## DESCRIPTION

## EXAMPLES

### EXAMPLE 1
```powershell
Add-PnPTeamsUser -Team MyTeam -User john@doe.com -Role Owner
```

Adds a user as an owner to the team

### EXAMPLE 2
```powershell
Add-PnPTeamsUser -Team MyTeam -User john@doe.com -Role Member
```

Adds a user as a member to the team

## PARAMETERS

### -Role
Specify the role of the user

```yaml
Type: String
Parameter Sets: (All)
Accepted values: Owner, Member

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
Accept pipeline input: False
Accept wildcard characters: False
```

### -User
Specify the UPN (e.g. john@doe.com)

```yaml
Type: String
Parameter Sets: (All)

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

## RELATED LINKS

[Microsoft 365 Patterns and Practices](https://aka.ms/m365pnp)


