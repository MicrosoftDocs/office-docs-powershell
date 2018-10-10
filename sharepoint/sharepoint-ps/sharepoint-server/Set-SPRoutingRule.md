---
external help file: 
applicable: SharePoint Server 2013, SharePoint Server 2016, SharePoint Server 2019
title: Set-SPRoutingRule
schema: 2.0.0
---

# Set-SPRoutingRule

## SYNOPSIS
Changes properties of an existing routing rule.


## SYNTAX

```
Set-SPRoutingRule [-Identity] <SPRoutingRulePipeBind> [-AssignmentCollection <SPAssignmentCollection>]
 [-Criteria <SPRequestManagementRuleCriteriaPipeBind[]>] [-ExecutionGroup <Int32>] [-Expiration <DateTime>]
 [-MachinePool <SPRoutingMachinePoolPipeBind>] [<CommonParameters>]
```

## DESCRIPTION
Use the `Set-SPRoutingRule` cmdlet to change properties of an existing routing rule.

For permissions and the most current information about Windows PowerShell for SharePoint Products, see the online documentation at http://go.microsoft.com/fwlink/p/?LinkId=251831 (http://go.microsoft.com/fwlink/p/?LinkId=251831).


## EXAMPLES

### --------------------EXAMPLE---------------------
```
PS C:\>$wa = Get-SPWebApplication http://webAppUrl
PS C:\>$rm = Get-SPRequestManagementSettings -Identity $wa
PS C:\>Get-SPRoutingRule -RequestManagementSettings $rm
PS C:\>$machines = Get-SPRoutingMachineInfo -RequestManagementSettings $rm
PS C:\>$pool = Add-SPRoutingMachinePool -RequestManagementSettings $rm -Name <Name of Pool> -MachineTargets $machines
PS C:\>$criteria = New-SPRequestManagementRuleCriteria -Value http -Property url -MatchType startswith -CaseSensitive $false
PS C:\>$rule = Add-SPRoutingRule -RequestManagementSettings $rm -Name <Rule Name> -Criteria $c -MachinePool $pool
PS C:\>$criteriaNew = New-SPRequestManagementRuleCriteria -Property UserAgent -MatchType Equals -Value "Mozilla/4.0 (compatible; MSIE 4.01; Windows NT; MS Search 6.0 Robot)"
PS C:\>Set-SPRoutingRule -Identity $rule -Criteria $criteriaNew
```

This example sets a routing rule for the specified identity by using the $rule variable.


## PARAMETERS

### -Identity
Specifies the name of the request management settings object to set.

```yaml
Type: SPRoutingRulePipeBind
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Server 2013, SharePoint Server 2016, SharePoint Server 2019

Required: True
Position: 1
Default value: None
Accept pipeline input: True (ByValue)
Accept wildcard characters: False
```

### -AssignmentCollection
Manages objects for the purpose of proper disposal. Use of objects, such as SPWeb or SPSite, can use large amounts of memory and use of these objects in Windows PowerShell scripts requires proper memory management. Using the SPAssignment object, you can assign objects to a variable and dispose of the objects after they are needed to free up memory. When SPWeb, SPSite, or SPSiteAdministration objects are used, the objects are automatically disposed of if an assignment collection or the Global parameter is not used.

When the Global parameter is used, all objects are contained in the global store. If objects are not immediately used, or disposed of by using the Stop-SPAssignment command, an out-of-memory scenario can occur.

```yaml
Type: SPAssignmentCollection
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Server 2013, SharePoint Server 2016, SharePoint Server 2019

Required: False
Position: Named
Default value: None
Accept pipeline input: True (ByValue)
Accept wildcard characters: False
```

### -Criteria
Specifies the criteria for the rule to match.

```yaml
Type: SPRequestManagementRuleCriteriaPipeBind[]
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Server 2013, SharePoint Server 2016, SharePoint Server 2019

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ExecutionGroup
Specifies the group in which the rule will be placed.

```yaml
Type: Int32
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Server 2013, SharePoint Server 2016, SharePoint Server 2019

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Expiration
Specifies the expiration date and time of the rule.

```yaml
Type: DateTime
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Server 2013, SharePoint Server 2016, SharePoint Server 2019

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -MachinePool
Specifies the pool of machines to which a request will be routed if the changed rule is matched.

```yaml
Type: SPRoutingMachinePoolPipeBind
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Server 2013, SharePoint Server 2016, SharePoint Server 2019

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see about_CommonParameters (http://go.microsoft.com/fwlink/?LinkID=113216).

## INPUTS

## OUTPUTS

## NOTES

## RELATED LINKS

[Add-SPRoutingRule](Add-SPRoutingRule.md)

[Get-SPRoutingRule](Get-SPRoutingRule.md)

[Remove-SPRoutingRule](Remove-SPRoutingRule.md)
