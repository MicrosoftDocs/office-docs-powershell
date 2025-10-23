---
applicable: Microsoft Teams
external help file: Microsoft.Teams.Policy.Administration.Cmdlets.Core.dll-Help.xml
Module Name: Microsoft.Teams.Policy.Administration.Cmdlets.Core
online version:
schema: 2.0.0
title: Get-GroupAssignmentRecommendationsPerPolicyType
---

# Get-GroupAssignmentRecommendationsPerPolicyType

## SYNOPSIS
As an admin, you can get group policy assignments recommendations based on the existing direct assignments for a policy type.

## SYNTAX

```
Get-GroupAssignmentRecommendationsPerPolicyType -EntityType <String> [-GroupThreshold <String>]
 [<CommonParameters>]
```

## DESCRIPTION
As an admin, you can get a list of possible group policy assignments that can be created based on the existing direct assignments for a policy document provided, grouping by policy instance type.

**This is only applicable for tenants who have activated the new features related to group policy assignment adoption.**

## EXAMPLES

### Example 1
```powershell
PS C:\> Get-GroupAssignmentRecommendationsPerPolicyType -EntityType User
```

In this example, the Get-GroupAssignmentRecommendationsPerPolicyType cmdlet is used to get all the possible group policy assignments that can be created for the entity type User. In this case the group threshold is not provided so the default will be 500, which means that all the recommendations will have at least 500 users. This threshold can change based on admin preferences.

### Example 2
```powershell
PS C:\> Get-GroupAssignmentRecommendationsPerPolicyType -EntityType User -GroupThreshold 1
```

In this example, the Get-GroupAssignmentRecommendationsPerPolicyType cmdlet is used to get all the possible group policy assignments that can be created for the entity type User and providing a group threshold of 1, which means that all the recommendations will have at least 1 user. This threshold can change based on admin preferences.

## PARAMETERS

### -EntityType
Entity type from which the cmdlet will provide the recommendations.

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

### -GroupThreshold
Group threshold used to define the minimum number of users per group that will be recommended.

```yaml
Type: String
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see [about_CommonParameters](http://go.microsoft.com/fwlink/?LinkID=113216).

## INPUTS

### None

## OUTPUTS

### System.Object
## NOTES

## RELATED LINKS
