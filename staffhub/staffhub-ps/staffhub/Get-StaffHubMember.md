---
external help file: Microsoft.OutlookApps.StaffHub.PowershellCmdlets.dll-Help.xml
Module Name: Microsoft.OutlookApps.StaffHub.PowershellCmdlets
online version: 
schema: 2.0.0
---

# Get-StaffHubMember

## SYNOPSIS
Note: This cmdlet is currently in Beta.
Get details for all team members or for a specified team member.

## SYNTAX

```
Get-StaffHubMember [-TeamId] <String> [[-MemberId] <String>]
```

## DESCRIPTION
Get details of team members

## EXAMPLES

### Example 1
```
Get-StaffHubMember -TeamId "TEAM_1234" -MemberId MBER_1234
```

Get the details of MBER_1234 in team TEAM_1234

### Example 2
```
Get-StaffHubMember -TeamId "TEAM_1234"
```

Get the details of all the members in team TEAM_1234

## PARAMETERS

### -MemberId
MemberId for the specified member in the team

```yaml
Type: String
Parameter Sets: (All)
Aliases: 

Required: False
Position: 1
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -TeamId
TeamId for which all the members are to be fetched

```yaml
Type: String
Parameter Sets: (All)
Aliases: 

Required: True
Position: 0
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

## INPUTS

### None


## OUTPUTS

### System.Object

## NOTES

## RELATED LINKS

