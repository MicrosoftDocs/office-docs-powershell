---
Module Name: PnP.PowerShell
title: get-pnpplannertask
schema: 2.0.0
applicable: SharePoint Online
external help file: PnP.PowerShell.dll-Help.xml
online version: https://pnp.github.io/powershell/cmdlets/Get-PnPPlannerTask.html
---
 
# Get-PnPPlannerTask

## SYNOPSIS

> [!TIP]
> We encourage you to make improvements to this documentation. Please navigate to https://github.com/pnp/powershell/blob/dev/documentation/Get-PnPPlannerTask.md to change this file.


**Required Permissions**

  * Microsoft Graph API: Group.ReadWrite.All
  * Microsoft Graph API: Group.Read.All

Returns Planner tasks

## SYNTAX

### By Group
```powershell
Get-PnPPlannerTask -Group <PlannerGroupPipeBind> -Plan <PlannerPlanPipeBind> [-ResolveUserDisplayNames]
  [<CommonParameters>]
```

### By Bucket
```powershell
Get-PnPPlannerTask -Bucket <PlannerBucketPipeBind> [-ResolveUserDisplayNames] 
 [<CommonParameters>]
```

### By Plan Id
```powershell
Get-PnPPlannerTask -PlanId <String> [-ResolveUserDisplayNames]  [<CommonParameters>]
```

### By Task Id
```powershell
Get-PnPPlannerTask -TaskId <String> [-ResolveUserDisplayNames]  [<CommonParameters>]
```

## DESCRIPTION
This cmdlet returns Planner tasks.

## EXAMPLES

### Example 1
```powershell
Get-PnPPlannerTask -Group "Marketing" -Plan "Conference Plan"
```

This returns all tasks for the specific plan.

### Example 2
```powershell
$tasks = Get-PnPPlannerTask -Group "Marketing" -Plan "Conference Plan" -ResolveUserDiplayNames
$task = $tasks | Select-Object -First 1
$task.CreatedBy.DisplayName 
```

This retrieves all tasks for a specific plan, takes the first task and prints the display name of the user that created the task.

### Example 3
```powershell
Get-PnPPlannerTask -Group "Marketing" -PlanId "QvfkTd1mc02gwxHjHC_43JYABhAy"
```

This returns all tasks for the specified plan.

### Example 4
```powershell
Get-PnPPlannerTask -TaskId "QvfkTd1mc02gwxHjHC_43JYABhAy"
```

This returns a specific task.

## PARAMETERS

### -Bucket
Specify the bucket or bucket id to retrieve the tasks for.

```yaml
Type: PlannerBucketPipeBind
Parameter Sets: By Bucket
Aliases:

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Group
Specify the group id or name of group owning the plan.

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

### -Plan
Specify the id or name of the plan to retrieve the tasks for.

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

### -PlanId
Specify the id of the plan to retrieve the tasks for.

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

### -TaskId
Specify the id of the task to retrieve.

```yaml
Type: String
Parameter Sets: By Task Id
Aliases:

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ResolveUserDisplayNames
Will resolve userids to usernames

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -IncludeDetails
Includes checklist and description details

```yaml
Type: SwitchParameter
Parameter Sets: By Task Id
Aliases:

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

