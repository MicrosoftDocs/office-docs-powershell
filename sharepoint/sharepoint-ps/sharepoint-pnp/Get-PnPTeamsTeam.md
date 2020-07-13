---
external help file:
online version: https://docs.microsoft.com/powershell/module/sharepoint-pnp/get-pnpteamsteam
applicable: SharePoint Online
schema: 2.0.0
title: Get-PnPTeamsTeam
---

# Get-PnPTeamsTeam

## SYNOPSIS
Gets one Microsoft Teams Team or a list of Teams.

## SYNTAX 

```powershell
Get-PnPTeamsTeam [-Identity <TeamsTeamPipeBind>]
                 [-ByPassPermissionCheck [<SwitchParameter>]]
```

## REQUIRED PERMISSIONS

  * Microsoft Graph API : One of Group.Read.All, Group.ReadWrite.All

## EXAMPLES

### ------------------EXAMPLE 1------------------
```powershell
Get-PnPTeamsTeam
```

Retrieves all the Microsoft Teams instances

### ------------------EXAMPLE 2------------------
```powershell
Get-PnPTeamsTeam -Identity $groupId
```

Retrieves a specific Microsoft Teams instance

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

### -Identity
Specify the group id of the team to retrieve.

```yaml
Type: TeamsTeamPipeBind
Parameter Sets: (All)

Required: False
Position: Named
Accept pipeline input: False
```

## RELATED LINKS

[SharePoint Developer Patterns and Practices](https://aka.ms/sppnp)