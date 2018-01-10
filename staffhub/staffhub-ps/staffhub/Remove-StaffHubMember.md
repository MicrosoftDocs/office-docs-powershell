---
external help file: Microsoft.OutlookApps.StaffHub.PowershellCmdlets.dll-Help.xml
Module Name: Microsoft.OutlookApps.StaffHub.PowershellCmdlets
online version: 
schema: 2.0.0
---

# Remove-StaffHubMember

## SYNOPSIS
Note: This cmdlet is currently in Beta.
Removes the specified member from the team

## SYNTAX

```
Remove-StaffHubMember [-TeamId] <String> [[-MemberId] <String>] [[-MemberObject] <PSObject>]
```

## DESCRIPTION
Removes the specified member from the team

## EXAMPLES

### Example 1
```
Remove-StaffHubMember -TeamId "TEAM_1234" -MemberId "MBER_1234"
```

This removes member MBER_1234 from TEAM_1234

## PARAMETERS

### -MemberId
MemberId of the member to be removed

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

### -MemberObject
Entire member object returned from Get-StaffHubMember

```yaml
Type: PSObject
Parameter Sets: (All)
Aliases: 

Required: False
Position: 2
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -TeamId
TeamId from which the specified member is to be removed

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

