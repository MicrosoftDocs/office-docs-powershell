---
Module Name: PnP.PowerShell
title: remove-pnpplannerbucket
schema: 2.0.0
applicable: SharePoint Online
external help file: PnP.PowerShell.dll-Help.xml
online version: https://pnp.github.io/powershell/cmdlets/Remove-PnPPlannerBucket.html
---
 
# Remove-PnPPlannerBucket

## SYNOPSIS

> [!TIP]
> We encourage you to make improvements to this documentation. Please navigate to https://github.com/pnp/powershell/blob/dev/documentation/Remove-PnPPlannerBucket.md to change this file.


**Required Permissions**

  * Microsoft Graph API: Group.ReadWrite.All

Removes a planner bucket

## SYNTAX

### By Name
```powershell
Remove-PnPPlannerBucket -Group <PlannerGroupPipeBind> -Plan <PlannerPlanPipeBind>
 -Identity <PlannerBucketPipeBind>  [-WhatIf] [-Confirm] [<CommonParameters>]
```

### By Bucket Id
```powershell
Remove-PnPPlannerBucket -BucketId <String> -Identity <PlannerBucketPipeBind>  [-WhatIf]
 [-Confirm] [<CommonParameters>]
```

## DESCRIPTION
This cmdlet removes a Planner bucket.

## EXAMPLES

### Example 1
```powershell
Remove-PnPPlannerBucket -Group "Marketing" -Plan "Conference" -Identity "Preconference Todos"
```

This removes the "Preconference Todos" bucket from the specified plan.

## PARAMETERS

### -BucketId
The id of a bucket to remove

```yaml
Type: String
Parameter Sets: By Bucket Id
Aliases:

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Confirm
Prompts you for confirmation before running the cmdlet.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: cf

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Group
Specify the group id or name of the group owning the plan.

```yaml
Type: PlannerGroupPipeBind
Parameter Sets: By Name
Aliases:

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Identity
Specify the id or name of the bucket.

```yaml
Type: PlannerBucketPipeBind
Parameter Sets: (All)
Aliases:

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Plan
Specify the id or name of the plan owning the bucket.

```yaml
Type: PlannerPlanPipeBind
Parameter Sets: By Name
Aliases:

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -WhatIf
Shows what would happen if the cmdlet runs.
The cmdlet is not run.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: wi

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see [about_CommonParameters](http://go.microsoft.com/fwlink/?LinkID=113216).

## RELATED LINKS

[Microsoft 365 Patterns and Practices](https://aka.ms/m365pnp)

