---
Module Name: PnP.PowerShell
title: get-pnpplannerbucket
schema: 2.0.0
applicable: SharePoint Online
external help file: PnP.PowerShell.dll-Help.xml
online version: https://pnp.github.io/powershell/cmdlets/Get-PnPPlannerBucket.html
---
 
# Get-PnPPlannerBucket

## SYNOPSIS

> [!TIP]
> We encourage you to make improvements to this documentation. Please navigate to https://github.com/pnp/powershell/blob/dev/documentation/Get-PnPPlannerBucket.md to change this file.


**Required Permissions**

  * Microsoft Graph API: Group.ReadWrite.All
  * Microsoft Graph API: Group.Read.All

Returns all or a specific Planner bucket

## SYNTAX

### By Group
```powershell
Get-PnPPlannerBucket -Group <PlannerGroupPipeBind> -Plan <PlannerPlanPipeBind>
 [-Identity <PlannerBucketPipeBind>] [<CommonParameters>]
```

### By Plan Id
```powershell
Get-PnPPlannerBucket -PlanId <String> [-Identity <PlannerBucketPipeBind>] 
 [<CommonParameters>]
```

## DESCRIPTION
This cmdlets returns all or a specific bucket in a Planner plan.

## EXAMPLES

### Example 1
```powershell
Get-PnPPlannerBucket -Group "Marketing" -Plan "Conference Plan"
```

This will returns all buckets in the specified plan

## PARAMETERS


### -Group
Specify the group id or name of the group owning the plan.

```yaml
Type: PlannerGroupPipeBind
Parameter Sets: By Group
Aliases:

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Identity
The identity of the bucket to retrieve

```yaml
Type: PlannerBucketPipeBind
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -PlanId
The plan id of the plan containing the bucket

```yaml
Type: String
Parameter Sets: By Plan Id
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Plan
The name or id of the plan containing the bucket.

```yaml
Type: PlannerPlanPipeBind
Parameter Sets: By Group
Aliases:

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see [about_CommonParameters](http://go.microsoft.com/fwlink/?LinkID=113216).

## RELATED LINKS

[Microsoft 365 Patterns and Practices](https://aka.ms/m365pnp)

