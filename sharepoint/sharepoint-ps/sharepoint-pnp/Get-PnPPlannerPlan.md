---
Module Name: PnP.PowerShell
title: get-pnpplannerplan
schema: 2.0.0
applicable: SharePoint Online
external help file: PnP.PowerShell.dll-Help.xml
online version: https://pnp.github.io/powershell/cmdlets/Get-PnPPlannerPlan.html
---
 
# Get-PnPPlannerPlan

## SYNOPSIS

> [!TIP]
> We encourage you to make improvements to this documentation. Please navigate to https://github.com/pnp/powershell/blob/dev/documentation/Get-PnPPlannerPlan.md to change this file.


**Required Permissions**

  * Microsoft Graph API: Group.ReadWrite.All
  * Microsoft Graph API: Group.Read.All
  
Returns all or a specific Planner plan for a Microsoft 365 Group.

## SYNTAX

```powershell
Get-PnPPlannerPlan -Group <PlannerGroupPipeBind> [-Identity <PlannerPlanPipeBind>] [-ResolveUserDisplayNames]
  [<CommonParameters>]
```

## DESCRIPTION
This cmdlet returns all or a specific Planner plan for a Microsoft 365 Group.

## EXAMPLES

### Example 1
```powershell
Get-PnPPlannerPlan -Group "Marketing"
```

Returns all plans for the Marketing group.

### Example 2
```powershell
Get-PnPPlannerPlan -Group "Marketing" -Identity "Conference Plan"
```

Returns the specified plan for the Marketing group.

## PARAMETERS

### -Group
Specify the group containing the plans

```yaml
Type: PlannerGroupPipeBind
Parameter Sets: (All)
Aliases:

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Identity
If specified the plan with this ID or Name will be returned.

```yaml
Type: PlannerPlanPipeBind
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ResolveUserDisplayNames
{{ Fill ResolveUserDisplayNames Description }}

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

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see [about_CommonParameters](http://go.microsoft.com/fwlink/?LinkID=113216).

## RELATED LINKS

[Microsoft 365 Patterns and Practices](https://aka.ms/m365pnp)

