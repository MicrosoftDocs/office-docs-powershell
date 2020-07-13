---
external help file:
online version: https://docs.microsoft.com/powershell/module/sharepoint-pnp/set-pnpteamsteamarchivedstate
applicable: SharePoint Online
schema: 2.0.0
title: Set-PnPTeamsTeamArchivedState
---

# Set-PnPTeamsTeamArchivedState

## SYNOPSIS
Sets the archived state of a team.

## SYNTAX 

```powershell
Set-PnPTeamsTeamArchivedState -Identity <TeamsTeamPipeBind>
                              -Archived <Boolean>
                              [-SetSiteReadOnlyForMembers <Boolean>]
                              [-ByPassPermissionCheck [<SwitchParameter>]]
```

## REQUIRED PERMISSIONS

  * Microsoft Graph API : One of Directory.ReadWrite.All, Group.ReadWrite.All

## EXAMPLES

### ------------------EXAMPLE 1------------------
```powershell
Set-PnPTeamsTeamArchivedState -Identity "My Team" -Archived $true
```

Archives the team as identified.

### ------------------EXAMPLE 2------------------
```powershell
Set-PnPTeamsTeamArchivedState -Identity "My Team" -Archived $false
```

Unarchives the team as identified.

### ------------------EXAMPLE 3------------------
```powershell
Set-PnPTeamsTeamArchivedState -Identity "My Team" -Archived $true -SetSiteReadOnlyForMembers $true
```

Archives the team as identified and sets the underlying SharePoint Online Site Collection as read only for members

## PARAMETERS

### -Archived


```yaml
Type: Boolean
Parameter Sets: (All)

Required: True
Position: Named
Accept pipeline input: False
```

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
Specify the name, id or external id of the app.

```yaml
Type: TeamsTeamPipeBind
Parameter Sets: (All)

Required: True
Position: Named
Accept pipeline input: False
```

### -SetSiteReadOnlyForMembers


```yaml
Type: Boolean
Parameter Sets: (All)

Required: False
Position: Named
Accept pipeline input: False
```

## RELATED LINKS

[SharePoint Developer Patterns and Practices](https://aka.ms/sppnp)