---
applicable: Microsoft Teams
external help file: Microsoft.Teams.Policy.Administration.Cmdlets.Core.dll-Help.xml
Module Name: MicrosoftTeams
author: emartinezrod
ms.author: emartinezrod
manager: ganesh
online version:
schema: 2.0.0
title: Invoke-ClearDirectToGroupAssignmentMigration
---

# Invoke-ClearDirectToGroupAssignmentMigration

## SYNOPSIS
As an admin, you can trigger a new direct assignments to group policy assignments cleanup.

## SYNTAX
```
Invoke-ClearDirectToGroupAssignmentMigration -Authority <String> -PolicyType <String> -PolicyName <String>
 -GroupId <Guid> [<CommonParameters>]
```

## DESCRIPTION
As an admin, you can trigger a new direct assignments to group policy assignments cleanup for a specific authority, instance document and group id. The cleanup will be automatic and will clean all direct assignments with the provided parameters.

**This is only applicable for tenants who have activated the new features related to group policy assignment adoption.**

## EXAMPLES

### Example 1
```powershell
PS C:\> Invoke-clearDirectToGroupAssignmentMigration -Authority Tenant -PolicyType TeamsCallingPolicy -PolicyName Test-Gpa-Adoption-Policy-2 -GroupId cde9a331-5bf8-415c-990c-19838b0d898c
```

In this example, the Invoke-clearDirectToGroupAssignmentMigration cmdlet is used to trigger the direct assignment to group policy assignment cleanup for the instance document with policy type TeamsCallingPolicy and  name Test-Gpa-Adoption-Policy-2 which will clean all direct assignments with the provided parameters.

## PARAMETERS

### -Authority
The authority (issuer) of the policy.

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

### -GroupId
The target group ID.

```yaml
Type: Guid
Parameter Sets: (All)
Aliases:

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -PolicyName
The name of the policy.

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
The type of the policy.

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
