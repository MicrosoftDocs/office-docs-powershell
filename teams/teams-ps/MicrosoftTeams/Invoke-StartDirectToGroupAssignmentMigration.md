---
applicable: Microsoft Teams
external help file: Microsoft.Teams.Policy.Administration.Cmdlets.Core.dll-Help.xml
Module Name: Microsoft.Teams.Policy.Administration.Cmdlets.Core
online version:
schema: 2.0.0
title: Invoke-StartDirectToGroupAssignmentMigration
---

# Invoke-StartDirectToGroupAssignmentMigration

## SYNOPSIS
As an admin, you can trigger a new direct assignments to group policy assignments migration.

## SYNTAX

```
Invoke-StartDirectToGroupAssignmentMigration -Authority <String> -PolicyType <String> -PolicyName <String>
 -GroupId <Guid> [-AllowNonEmptyGroup <Boolean>] [<CommonParameters>]
```

## DESCRIPTION
As an admin, you can trigger a new direct assignments to group policy assignments migration for a specific authority, instance document and group id. The migration will be automatic and will move all the users that have the direct assignment with the provided parameters to the group provided and will apply the correct group policy assignment, removing after all the exiting direct assignments to avoid any conflict. At the end the behavior will be the same one but the admin will have now to manage only a group instead of a bunch of direct assignments.

**This is only applicable for tenants who have activated the new features related to group policy assignment adoption.**

## EXAMPLES

### Example 1
```powershell
PS C:\> Invoke-startDirectToGroupAssignmentMigration -Authority Tenant -PolicyType TeamsCallingPolicy -PolicyName Test-Gpa-Adoption-Policy-2 -GroupId cde9a331-5bf8-415c-990c-19838b0d898c
```

In this example, the Invoke-startDirectToGroupAssignmentMigration cmdlet is used to trigger the direct assignment to group policy assignment migration for the instance document with policy type TeamsCallingPolicy and  name Test-Gpa-Adoption-Policy-2 to the group cde9a331-5bf8-415c-990c-19838b0d898c. In this case the flag allowNonEmptyGroup is not provided and the default will be false which means if the group provided already have an active group policy assignment the operation wont be trigger.

### Example 2
```powershell
PS C:\> Invoke-startDirectToGroupAssignmentMigration -Authority Tenant -PolicyType TeamsCallingPolicy -PolicyName Test-Gpa-Adoption-Policy-2 -GroupId cde9a331-5bf8-415c-990c-19838b0d898c -allowNonEmptyGroup $True
```

In this example, the Invoke-startDirectToGroupAssignmentMigration cmdlet is used to trigger the direct assignment to group policy assignment migration for the instance document with policy type TeamsCallingPolicy and  name Test-Gpa-Adoption-Policy-2 to the group cde9a331-5bf8-415c-990c-19838b0d898c. In this case the flag allowNonEmptyGroup is provided which means even thought the group provided already have an active group policy assignment the operation will be trigger.

## PARAMETERS

### -AllowNonEmptyGroup
Flag to know if the process should continue or not when the group provided already have an active group policy assignment.

```yaml
Type: Boolean
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

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

### None

## OUTPUTS

### System.Object
## NOTES

## RELATED LINKS
