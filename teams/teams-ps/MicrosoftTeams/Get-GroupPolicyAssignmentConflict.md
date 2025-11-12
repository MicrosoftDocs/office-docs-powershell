---
applicable: Microsoft Teams
external help file: Microsoft.Teams.Policy.Administration.Cmdlets.Core.dll-Help.xml
Module Name: MicrosoftTeams
author: emartinezrod
ms.author: emartinezrod
manager: ganesh
online version:
schema: 2.0.0
title: Get-GroupPolicyAssignmentConflict
---

# Get-GroupPolicyAssignmentConflict

## SYNOPSIS
As an admin, you can get the existing conflicts for a particular group policy assignments which causes it not to be effective for some users.

## SYNTAX
```
Get-GroupPolicyAssignmentConflict -GroupId <String> -PolicyType <String>
 [<CommonParameters>]
```

## DESCRIPTION
As an admin, you can get the existing conflicts for a particular group policy assignments which causes it not to be effective for some users, providing the group id and policy type of the assignment. This will return a list of users in where the group policy assignment is not effective due a direct assignment or other group policy assignment that is taking effect on it.

**This is only applicable for tenants who have activated the new features related to group policy assignment adoption.**

## EXAMPLES

### Example 1
```powershell
PS C:\> Get-GroupPolicyAssignmentConflict -GroupId cde9a331-5bf8-415c-990c-19838b0d898a -PolicyType TeamsCallingPolicy
```

In this example, the Get-GroupPolicyAssignmentConflict cmdlet is used to get all the possible conflicts that the group policy assignment in TeamsCallingPolicy applied for group cde9a331-5bf8-415c-990c-19838b0d898a could have with others assignments.

## PARAMETERS

### -GroupId
Group id of the group policy assignment from which the cmdlet will look for conflicts.


```yaml
Type: String
Parameter Sets: (All)
Aliases:

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -PolicyType
Policy type of the group policy assignment from which the cmdlet will look for conflicts.

```yaml
Type: String
Parameter Sets: (All)
Aliases:

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see [about_CommonParameters](http://go.microsoft.com/fwlink/?LinkID=113216).

## INPUTS

## OUTPUTS

## NOTES

## RELATED LINKS
